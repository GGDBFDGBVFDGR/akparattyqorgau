const CampusDbms = (() => {
  const OBJECTS = [
    { id: "students", table: "students", holds: "ЖСН, аты-жөні, байланыс, оқу мәртебесі", kind: "жеке", grant: "Тіркеуші портал арқылы. Жолды ДҚБЖ ашпайды." },
    { id: "grades", table: "grades", holds: "Баға, қатысу, тапсырма күйі", kind: "оқу", grant: "Оқытушы портал арқылы жазады." },
    { id: "faces", table: "faces", holds: "Face ID үлгісі", kind: "жеке", grant: "Тіркеуші портал арқылы жазады. Жолды ДҚБЖ ашпайды." },
  ];

  const TEST = {
    students: { rows: 2, sample: "сынақ-1 · ЖСН жоқ" },
    grades: { rows: 2, sample: "сынақ курсы · баға жоқ" },
    faces: { rows: 1, sample: "сынақ · үлгі жоқ" },
  };

  let look = "prod";

  function initial(now) {
    const at = now || Date.now();
    return {
      points: [{ id: "rp-daily", at: at - 86400_000, label: "Тәуліктік нүкте" }],
      services: [
        { id: "portal-svc", from: "Портал", table: "students", right: "ЖСН, аты-жөні, байланыс, мәртебе" },
        { id: "lms-svc", from: "LMS", table: "grades", right: "Баға, қатысу, тапсырма күйі" },
      ],
      journal: [
        { id: "dj1", at: at - 3600_000, actor: "portal-svc", action: "Қосылым", detail: "students · TLS" },
        { id: "dj2", at: at - 3500_000, actor: "lms-svc", action: "Қосылым", detail: "grades · TLS" },
      ],
    };
  }

  function patch(saved) {
    let changed = false;
    if (!saved.dbms) {
      saved.dbms = initial();
      return true;
    }
    const fresh = initial();
    if (!saved.dbms.services) {
      saved.dbms.services = fresh.services;
      changed = true;
    }
    if (!saved.dbms.journal) {
      saved.dbms.journal = fresh.journal;
      changed = true;
    }
    if (!saved.dbms.points) {
      saved.dbms.points = fresh.points;
      changed = true;
    }
    return changed;
  }

  function note(ctx, actor, action, detail) {
    if (!ctx.db.dbms) ctx.db.dbms = initial();
    ctx.db.dbms.journal.unshift({ id: "dj" + Date.now(), at: Date.now(), actor, action, detail });
    ctx.save();
  }

  function count(ctx, id) {
    if (look === "test") return TEST[id].rows;
    if (id === "faces") return (ctx.db.faces || []).filter((row) => row.image).length;
    const counts = ctx.counts();
    return id === "students" ? counts.students : counts.grades;
  }

  function view(ctx) {
    const { esc, fmt, shell } = ctx;
    const store = ctx.db.dbms || initial();
    const points = (store.points || [])
      .map((p) => `<tr><td>${fmt(p.at)}</td><td>${esc(p.label)}</td><td>Уақыт белгісі. Файл жоқ.</td></tr>`)
      .join("");
    const sampleHead = look === "test" ? "<th>Сынақ үлгісі</th>" : "";
    const objects = OBJECTS.map((item) => {
      const sample = look === "test" ? `<td>${esc(TEST[item.id].sample)}</td>` : "";
      return `<tr>
        <td>${esc(item.table)}</td>
        <td>${esc(item.holds)}</td>
        <td><span class="pill">${esc(item.kind)}</span></td>
        <td>${count(ctx, item.id)}</td>
        ${sample}
        <td>${esc(item.grant)}</td>
        <td><button class="btn btn-ghost" type="button" data-dbms-rows="${esc(item.table)}">Жолдар</button></td>
      </tr>`;
    }).join("");
    const links = (store.services || [])
      .map(
        (link) => `<tr><td>${esc(link.id)}</td><td>${esc(link.from)}</td><td>${esc(link.table)}</td><td>${esc(link.right)}</td><td>Жоқ</td></tr>`
      )
      .join("");
    const journal = (store.journal || [])
      .map(
        (row) => `<tr><td>${fmt(row.at)}</td><td>${esc(row.actor)}</td><td>${esc(row.action)}</td><td>${esc(row.detail)}</td></tr>`
      )
      .join("");
    return shell(
      "ДҚБЖ",
      `<div class="stack">
        <div class="stat-row">
          <div class="stat"><em>TLS</em><strong>Қосулы</strong></div>
          <div class="stat"><em>Кіру</em><strong>Қызметтік</strong></div>
          <div class="stat"><em>Құпиясөз</em><strong>Жоқ</strong></div>
        </div>
        <section class="panel">
          <h2>${look === "test" ? "Сынақ ортасы" : "Өндіріс"}</h2>
          <p>ДҚ сервері, сервер бөлмесі. Мұнда студенттер қоры және LMS нәтижесі ғана. Карта, есік және өткізу журналы бұл қоймаға кірмейді.</p>
          <div class="actions">
            <button class="btn ${look === "prod" ? "btn-primary" : "btn-ghost"}" type="button" data-dbms-env="prod">Өндіріс</button>
            <button class="btn ${look === "test" ? "btn-primary" : "btn-ghost"}" type="button" data-dbms-env="test">Сынақ</button>
            <button class="btn btn-ghost" type="button" id="dbms-copy">Өндіріс жолын сынаққа көшіру</button>
          </div>
          <p class="note">Сынақ ортасы бөлек. Жеке жол өндірістен сынаққа өтпейді. Құпиясөз бағаны жоқ, қосылым тек TLS.</p>
          <table>
            <thead><tr><th>Кесте</th><th>Не сақталады</th><th>Түрі</th><th>Жол</th>${sampleHead}<th>Кім оқиды</th><th></th></tr></thead>
            <tbody>${objects}</tbody>
          </table>
        </section>
        <section class="panel">
          <h2>Есептік жазбалар</h2>
          <p class="note">Бұл адамның логині емес. Құпиясөз бағаны жоқ. Қосылым тек TLS.</p>
          <table><thead><tr><th>Тіркелгі</th><th>Қайдан</th><th>Кесте</th><th>Құқық</th><th>Құпиясөз</th></tr></thead><tbody>${links}</tbody></table>
        </section>
        <section class="panel">
          <h2>Аудит журналы</h2>
          <table><thead><tr><th>Уақыт</th><th>Кім</th><th>Әрекет</th><th>Мәлімет</th></tr></thead><tbody>${journal || "<tr><td colspan='4'>Жазба жоқ</td></tr>"}</tbody></table>
        </section>
        <section class="panel">
          <h2>Нүктелік қалпына келтіру</h2>
          <button class="btn btn-primary" type="button" id="dbms-point">Нүкте қою</button>
          <p class="note">Нүкте — уақыт белгісі. Көшірме файлын ашу және қалпына келтіруді бекіту бұл рөлде жоқ.</p>
          <table><thead><tr><th>Уақыт</th><th>Белгі</th><th>Ішінде</th></tr></thead><tbody>${points || "<tr><td colspan='3'>Нүкте жоқ</td></tr>"}</tbody></table>
        </section>
      </div>`
    );
  }

  function bind(ctx) {
    if (ctx.session.role !== "dba") return;
    document.querySelectorAll("[data-dbms-env]").forEach((btn) => {
      btn.addEventListener("click", () => {
        look = btn.dataset.dbmsEnv === "test" ? "test" : "prod";
        ctx.render();
      });
    });
    document.querySelectorAll("[data-dbms-rows]").forEach((btn) => {
      btn.addEventListener("click", () => {
        note(ctx, ctx.session.name, "Жол тоқтатылды", btn.dataset.dbmsRows);
        ctx.note("bad", "Жол ашылмайды. Дерекқор әкімшісі құрылым мен жол санын көреді.");
        ctx.render();
      });
    });
    document.getElementById("dbms-copy")?.addEventListener("click", () => {
      note(ctx, ctx.session.name, "Сынаққа көшіру тоқтатылды", "Жеке жол өндірістен сынаққа өтпейді");
      ctx.note("bad", "Сынақ ортасы бөлек. Өндіріс жолы көшірілмейді.");
      ctx.render();
    });
    document.getElementById("dbms-point")?.addEventListener("click", () => {
      if (!ctx.db.dbms) ctx.db.dbms = initial();
      ctx.db.dbms.points.unshift({ id: "rp" + Date.now(), at: Date.now(), label: "Қолмен қойылған нүкте" });
      note(ctx, ctx.session.name, "Қалпына келтіру нүктесі", "Уақыт белгісі. Файл ашылмады");
      ctx.note("ok", "Нүкте қойылды. Дерек файлы ашылмады.");
      ctx.render();
    });
  }

  return { initial, patch, view, bind };
})();
