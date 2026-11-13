const CampusAcs = (() => {
  const DOORS = ["Бас кіреберіс", "Кітапхана", "Зертхана 314", "Жатақхана", "Асхана", "Спорт кешені"];
  const STATUSES = ["Оқуда", "Академиялық демалыс", "Оқудан шығарылды", "Түлек"];
  const ZONES = [
    { name: "Сыртқы", doors: ["Бас кіреберіс"] },
    { name: "Оқу", doors: ["Кітапхана", "Зертхана 314"] },
    { name: "Тұрғын", doors: ["Жатақхана"] },
    { name: "Қоғамдық", doors: ["Асхана", "Спорт кешені"] },
  ];
  const CONTROLLERS = [
    { name: "Негізгі контроллер", vlan: "VLAN 30", state: "Желіде" },
    { name: "Артық контроллер", vlan: "VLAN 30", state: "Желіде" },
  ];

  function rules() {
    return [
      { id: "study", status: "Оқуда", doors: ["Бас кіреберіс", "Кітапхана", "Зертхана 314", "Асхана", "Спорт кешені"] },
      { id: "leave", status: "Академиялық демалыс", doors: ["Бас кіреберіс"] },
      { id: "out", status: "Оқудан шығарылды", doors: [] },
      { id: "grad", status: "Түлек", doors: [] },
    ];
  }

  function initial(samples) {
    return { rules: rules(), changes: [], blocked: {}, passes: samples || [] };
  }

  function patch(saved) {
    let changed = false;
    if (!saved.acs) {
      saved.acs = initial(saved.passes || []);
      changed = true;
    } else {
      if (!saved.acs.rules) {
        saved.acs.rules = rules();
        changed = true;
      }
      if (!saved.acs.changes) {
        saved.acs.changes = [];
        changed = true;
      }
      if (!saved.acs.blocked) {
        saved.acs.blocked = {};
        changed = true;
      }
      if (!saved.acs.passes) {
        saved.acs.passes = saved.passes || [];
        changed = true;
      }
    }
    if (saved.passes) {
      delete saved.passes;
      changed = true;
    }
    (saved.students || []).forEach((student) => {
      if (!student.cardState) return;
      if (student.cardState === "Бұғат" && student.card) saved.acs.blocked[student.card] = true;
      delete student.cardState;
      changed = true;
    });
    return changed;
  }

  function cardStatus(db, card) {
    return db.acs?.blocked?.[card] ? "Бұғат" : "Белсенді";
  }

  function passesFor(db, card) {
    return (db.acs?.passes || []).filter((row) => row.card === card);
  }

  function decision(db, status, card, door) {
    if (cardStatus(db, card) === "Бұғат") return { result: "Бас тартылды", why: "Карта бұғатталған" };
    const rule = (db.acs?.rules || []).find((item) => item.status === status);
    if (!rule || !rule.doors.includes(door)) return { result: "Бас тартылды", why: "Бұл мәртебеге есік жабық" };
    return { result: "Өтті", why: "Ереже сәйкес" };
  }

  function canPropose(role) {
    return role === "guard" || role === "building";
  }

  function view(ctx) {
    const { esc, fmt, shell, session, db } = ctx;
    const readOnly = session.role === "auditor" || session.role === "secadmin";
    const holders = ctx.holders();
    const zones = ZONES.map(
      (zone) => `<tr><td>${esc(zone.name)}</td><td>${esc(zone.doors.join(", "))}</td></tr>`
    ).join("");
    const ruleRows = (db.acs?.rules || [])
      .map(
        (rule) => `<tr><td>${esc(rule.status)}</td><td>${rule.doors.length ? esc(rule.doors.join(", ")) : "Жабық"}</td></tr>`
      )
      .join("");
    const changes = (db.acs?.changes || [])
      .map((item) => {
        const what = item.kind === "emergency"
          ? `Авариялық ашу · ${item.door}`
          : item.kind === "card"
            ? `Карта ${item.card} · ${item.to}`
            : `${item.status}: ${item.door} · ${item.op === "add" ? "қосу" : "алу"}`;
        const buttons = item.state === "wait" && !readOnly && item.authorId !== session.id && canPropose(session.role)
          ? `<div class="actions">
              <button class="btn btn-primary" type="button" data-acs-ok="${esc(item.id)}">Бекіту</button>
              <button class="btn btn-ghost" type="button" data-acs-no="${esc(item.id)}">Қайтару</button>
            </div>`
          : item.state === "wait"
            ? "Күтуде"
            : item.state === "ok"
              ? (item.kind === "card" ? "Жазылды" : "Бекітілді")
              : "Қайтарылды";
        return `<tr><td>${fmt(item.at)}</td><td>${esc(what)}</td><td>${esc(item.authorName)}</td><td>${buttons}</td></tr>`;
      })
      .join("");
    const cards = holders
      .map((holder) => {
        const status = cardStatus(db, holder.card);
        const button = session.role === "building"
          ? `<button class="btn btn-ghost" type="button" data-card="${esc(holder.card)}">${status === "Бұғат" ? "Ашу" : "Бұғаттау"}</button>`
          : "";
        return `<tr>
          <td>${esc(holder.name)}</td>
          <td>${esc(holder.card)}</td>
          <td>${esc(holder.status)}</td>
          <td><span class="pill ${status === "Бұғат" ? "stop" : "ok"}">${esc(status)}</span></td>
          <td>${button}</td>
        </tr>`;
      })
      .join("");
    const passes = (db.acs?.passes || [])
      .map(
        (row) => `<tr><td>${fmt(row.at)}</td><td>${esc(row.card)}</td><td>${esc(row.door)}</td><td>${esc(row.result)}</td><td>${esc(row.why || "—")}</td><td>${esc(row.author)}</td></tr>`
      )
      .join("");
    const controllers = CONTROLLERS.map(
      (item) => `<tr><td>${esc(item.name)}</td><td>${esc(item.vlan)}</td><td><span class="pill ok">${esc(item.state)}</span></td></tr>`
    ).join("");
    const doorOptions = DOORS.map((door) => `<option>${esc(door)}</option>`).join("");
    const statusOptions = STATUSES.map((status) => `<option>${esc(status)}</option>`).join("");
    const cardOptions = holders
      .map((holder) => `<option value="${esc(holder.card)}">${esc(holder.name)} · ${esc(holder.card)}</option>`)
      .join("");
    const ruleForm = canPropose(session.role)
      ? `<form class="form form-grid" id="acs-rule">
          <label><span>Мәртебе</span><select name="status">${statusOptions}</select></label>
          <label><span>Есік</span><select name="door">${doorOptions}</select></label>
          <label><span>Әрекет</span><select name="op"><option value="add">Қосу</option><option value="remove">Алу</option></select></label>
          <button class="btn btn-primary" type="submit">Ереже өтінімі</button>
        </form>
        <p class="note">Өтінімді жазған адам өзі бекітпейді. Күзет пен ғимарат әкімшісі бірін-бірі бекітеді.</p>`
      : "";
    const emergencyForm = canPropose(session.role)
      ? `<form class="form" id="acs-emergency">
          <label><span>Есік</span><select name="door">${doorOptions}</select></label>
          <button class="btn btn-ghost" type="submit">Авариялық ашуды сұрау</button>
        </form>
        <p class="note">Тұрақты ереже өзгермейді. Екінші адам бекіткенде журналда бір жол қалады.</p>`
      : "";
    const passForm = session.role === "guard"
      ? `<form class="form" id="pass-form">
          <label><span>Карта</span><select name="card">${cardOptions}</select></label>
          <label><span>Есік</span><select name="door">${doorOptions}</select></label>
          <button class="btn btn-primary" type="submit">Журналға жазу</button>
        </form>
        <p class="note">Нәтижені ереже шешеді. Күзет «өтті» деп қолмен жазбайды. Жол өшпейді.</p>`
      : `<p class="note">${readOnly ? "Бұл рөл журналды оқиды. Ереже жазбайды, жол өшірмейді." : "Журналға жазу күзетте. Жол өшпейді."}</p>`;
    return shell(
      "ACS",
      `<div class="stack">
        <div class="stat-row">
          <div class="stat"><em>Орын</em><strong>ACS</strong></div>
          <div class="stat"><em>VLAN</em><strong>30</strong></div>
          <div class="stat"><em>Контроллер</em><strong>2</strong></div>
        </div>
        <section class="panel">
          <p>ACS сервері және есік контроллерлері. Мұнда ереже, карта күйі және өткізу журналы. ЖСН мен баға бұл серверде жоқ.</p>
        </section>
        <section class="panel">
          <h2>Бөлме аймақтары</h2>
          <table><thead><tr><th>Аймақ</th><th>Есік</th></tr></thead><tbody>${zones}</tbody></table>
        </section>
        <section class="panel">
          <h2>Рұқсат ережелері</h2>
          ${ruleForm}
          <table><thead><tr><th>Мәртебе</th><th>Ашық есік</th></tr></thead><tbody>${ruleRows}</tbody></table>
        </section>
        <section class="panel">
          <h2>Ереже журналы</h2>
          <table><thead><tr><th>Уақыт</th><th>Өзгеріс</th><th>Автор</th><th></th></tr></thead><tbody>${changes || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
        <section class="panel">
          <h2>Карта күйі</h2>
          <table><thead><tr><th>Аты</th><th>Карта</th><th>Мәртебе</th><th>Күй</th><th></th></tr></thead><tbody>${cards}</tbody></table>
        </section>
        <section class="panel">
          <h2>Өткізу журналы</h2>
          ${passForm}
          <table><thead><tr><th>Уақыт</th><th>Карта</th><th>Есік</th><th>Нәтиже</th><th>Себеп</th><th>Автор</th></tr></thead><tbody>${passes}</tbody></table>
        </section>
        <section class="panel">
          <h2>Контроллер</h2>
          <table><thead><tr><th>Құрылғы</th><th>Желі</th><th>Күй</th></tr></thead><tbody>${controllers}</tbody></table>
          ${emergencyForm}
        </section>
      </div>`
    );
  }

  function decide(ctx, id, state) {
    const { db, session } = ctx;
    const item = (db.acs?.changes || []).find((change) => change.id === id);
    if (!item || item.state !== "wait" || !canPropose(session.role)) return;
    if (item.authorId === session.id) {
      ctx.log(session, "ACS бекіту тоқтатылды", "Жазған адам өз өтінімін бекіте алмайды");
      ctx.note("bad", "Жазған адам бекітпейді.");
      ctx.render();
      return;
    }
    const pair = (item.authorRole === "guard" && session.role === "building")
      || (item.authorRole === "building" && session.role === "guard");
    if (!pair) {
      ctx.log(session, "ACS бекіту тоқтатылды", "Бекіту екінші адамда");
      ctx.note("bad", "Ережені екінші адам бекітеді: күзет немесе ғимарат әкімшісі.");
      ctx.render();
      return;
    }
    item.state = state;
    if (state === "ok" && item.kind === "rule") {
      const rule = db.acs.rules.find((row) => row.status === item.status);
      if (rule && item.op === "add" && !rule.doors.includes(item.door)) rule.doors.push(item.door);
      if (rule && item.op === "remove") rule.doors = rule.doors.filter((door) => door !== item.door);
    }
    if (state === "ok" && item.kind === "emergency") {
      db.acs.passes.unshift({
        id: "p" + Date.now(),
        card: "—",
        door: item.door,
        result: "Авариялық ашу",
        why: "Екі адам бекітті. Тұрақты ереже өзгермеді",
        at: Date.now(),
        author: `${item.authorName}, ${session.name}`,
      });
    }
    ctx.log(session, state === "ok" ? "ACS бекітілді" : "ACS қайтарылды", item.kind === "emergency" ? item.door : `${item.status}: ${item.door}`);
    ctx.save();
    ctx.note("ok", state === "ok" ? "Бекітілді." : "Өтінім қайтарылды.");
    ctx.render();
  }

  function toggleCard(ctx, card) {
    const { db, session } = ctx;
    if (session.role !== "building") return;
    const holder = ctx.holders().find((item) => item.card === card);
    if (!holder) return;
    const next = cardStatus(db, card) === "Бұғат" ? "Белсенді" : "Бұғат";
    if (next === "Бұғат") db.acs.blocked[card] = true;
    else delete db.acs.blocked[card];
    db.acs.changes.unshift({
      id: "c" + Date.now(),
      kind: "card",
      card,
      to: next,
      authorId: session.id,
      authorName: session.name,
      authorRole: session.role,
      state: "ok",
      at: Date.now(),
    });
    ctx.log(session, "Карта күйі", `${card} · ${next}`);
    ctx.save();
    ctx.note("ok", `${card} енді ${next.toLowerCase()}.`);
    ctx.render();
  }

  function bind(ctx) {
    const { db, session } = ctx;
    document.getElementById("pass-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "guard") return;
      const data = new FormData(e.target);
      const card = String(data.get("card") || "");
      const door = String(data.get("door") || "");
      const holder = ctx.holders().find((item) => item.card === card);
      if (!holder || !DOORS.includes(door)) return;
      const result = decision(db, holder.status, card, door);
      db.acs.passes.unshift({
        id: "p" + Date.now(),
        card,
        door,
        result: result.result,
        why: result.why,
        at: Date.now(),
        author: session.name,
      });
      ctx.log(session, "Өткізу жазбасы", `${card} · ${door} · ${result.result}`);
      ctx.save();
      ctx.note(result.result === "Өтті" ? "ok" : "warn", `${result.result}. ${result.why}.`);
      ctx.render();
    });
    document.getElementById("acs-rule")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!canPropose(session.role)) return;
      const data = new FormData(e.target);
      const status = String(data.get("status") || "");
      const door = String(data.get("door") || "");
      const op = data.get("op") === "remove" ? "remove" : "add";
      const rule = (db.acs?.rules || []).find((item) => item.status === status);
      if (!rule || !DOORS.includes(door)) return;
      const has = rule.doors.includes(door);
      if (op === "add" && has) {
        ctx.note("warn", "Бұл есік бұл мәртебеге ашық.");
        ctx.render();
        return;
      }
      if (op === "remove" && !has) {
        ctx.note("warn", "Бұл есік бұл мәртебеде жоқ.");
        ctx.render();
        return;
      }
      db.acs.changes.unshift({
        id: "c" + Date.now(),
        kind: "rule",
        status,
        door,
        op,
        authorId: session.id,
        authorName: session.name,
        authorRole: session.role,
        state: "wait",
        at: Date.now(),
      });
      ctx.log(session, "ACS ереже өтінімі", `${status}: ${door} · ${op === "add" ? "қосу" : "алу"}`);
      ctx.save();
      ctx.note("ok", "Өтінім кетті. Екінші адам бекіткенше ереже өзгермейді.");
      ctx.render();
    });
    document.getElementById("acs-emergency")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!canPropose(session.role)) return;
      const door = String(new FormData(e.target).get("door") || "");
      if (!DOORS.includes(door)) return;
      db.acs.changes.unshift({
        id: "c" + Date.now(),
        kind: "emergency",
        door,
        authorId: session.id,
        authorName: session.name,
        authorRole: session.role,
        state: "wait",
        at: Date.now(),
      });
      ctx.log(session, "Авариялық ашу өтінімі", door);
      ctx.save();
      ctx.note("ok", "Авариялық ашу екінші адамды күтеді. Тұрақты ереже өзгермеді.");
      ctx.render();
    });
    document.querySelectorAll("[data-acs-ok]").forEach((btn) => {
      btn.addEventListener("click", () => decide(ctx, btn.dataset.acsOk, "ok"));
    });
    document.querySelectorAll("[data-acs-no]").forEach((btn) => {
      btn.addEventListener("click", () => decide(ctx, btn.dataset.acsNo, "no"));
    });
    document.querySelectorAll("[data-card]").forEach((btn) => {
      btn.addEventListener("click", () => toggleCard(ctx, btn.dataset.card));
    });
  }

  return { initial, patch, cardStatus, passesFor, view, bind };
})();
