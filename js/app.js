(() => {
  const app = document.getElementById("app");
  const yearEl = document.getElementById("year");
  const subjectEl = document.getElementById("footer-subject");
  const authorEl = document.getElementById("footer-author");
  const noteEl = document.getElementById("footer-note");
  const logoSub = document.getElementById("logo-sub");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (subjectEl) subjectEl.textContent = COURSE.subject;
  if (authorEl) authorEl.textContent = COURSE.author;

  const LAB_HREF = { 1: "#home", 2: "#lab/2", 3: "#lab/3", 4: "#lab/4" };
  const LAB2_NAV = {
    registry: "l2-registry",
    scale: "l2-scale",
    diagram: "l2-diagram",
    quiz: "l2-quiz",
  };
  const LAB3_NAV = {
    object: "l3-object",
    diagram: "l3-diagram",
    actors: "l3-actors",
    registry: "l3-registry",
    quiz: "l3-quiz",
  };
  const LAB4_NAV = {
    object: "l4-object",
    roles: "l4-roles",
    matrix: "l4-matrix",
    lifecycle: "l4-lifecycle",
    tests: "l4-tests",
    quiz: "l4-quiz",
  };

  function route() {
    const hash = location.hash.slice(1) || "labs";
    const [page, id, section] = hash.split("/");
    const homeAnchors = new Set(["home", "goal", "standards-list", "literature"]);
    const inLab1 =
      page === "standard" ||
      page === "quiz" ||
      page === "practice" ||
      homeAnchors.has(page);
    const mode = page === "lab" && (id === "2" || id === "3" || id === "4") ? id : inLab1 ? "1" : "menu";

    setChrome(mode);

    if (page === "labs" || page === "menu") {
      render(viewLabs());
      window.scrollTo({ top: 0, behavior: "auto" });
      highlightNav("labs");
    } else if (page === "lab" && id === "2") {
      const need = !app.querySelector(".lab2");
      if (need) {
        render(viewLab2());
        bindLab2();
      }
      highlightNav(LAB2_NAV[section] || "l2-home");
      scrollLab(section, need);
    } else if (page === "lab" && id === "3") {
      const need = !app.querySelector(".lab3");
      if (need) {
        render(viewLab3());
        bindLab3();
      }
      highlightNav(LAB3_NAV[section] || "l3-home");
      scrollLab(section, need);
    } else if (page === "lab" && id === "4") {
      const need = !app.querySelector(".lab4");
      if (need) render(viewLab4());
      highlightNav(LAB4_NAV[section] || "l4-home");
      scrollLab(section, need);
    } else if (page === "standard" && id) {
      const item = STANDARDS.find((s) => s.id === id);
      render(item ? viewStandard(item) : viewNotFound());
      window.scrollTo({ top: 0, behavior: "auto" });
      highlightNav("standards");
    } else if (page === "quiz") {
      render(viewQuiz());
      window.scrollTo({ top: 0, behavior: "auto" });
      highlightNav("quiz");
    } else if (page === "practice") {
      render(viewPractice());
      window.scrollTo({ top: 0, behavior: "auto" });
      highlightNav("practice");
      bindPractice();
    } else if (homeAnchors.has(page)) {
      const needHome = !app.querySelector(".home");
      if (needHome) render(viewHome());
      highlightNav(
        page === "standards-list"
          ? "standards"
          : page === "literature"
            ? "literature"
            : "home"
      );
      requestAnimationFrame(() => {
        if (page === "home" || !page) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    } else {
      render(viewNotFound());
      highlightNav("labs");
    }

    observeReveal();
  }

  function scrollLab(section, need) {
    requestAnimationFrame(() => {
      if (!section) {
        window.scrollTo({ top: 0, behavior: need ? "auto" : "smooth" });
        return;
      }
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: need ? "auto" : "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "auto" });
    });
  }

  function render(html) {
    app.innerHTML = html;
    requestAnimationFrame(() => {
      app.querySelector(".view")?.classList.add("is-in");
    });
  }

  function setChrome(mode) {
    document.querySelectorAll("[data-lab]").forEach((el) => {
      el.hidden = el.dataset.lab !== mode;
    });
    const chrome = {
      1: ["Зертхана №1", "№1 зертханалық жұмыс", `${APP.title} — №1 зертхана`],
      2: ["Зертхана №2", "№2 зертханалық жұмыс", `${LAB2.title} — №2 зертхана`],
      3: ["Зертхана №3", "№3 зертханалық жұмыс", `${LAB3.title} — №3 зертхана`],
      4: ["Зертхана №4", "№4 зертханалық жұмыс", `${LAB4.title} — №4 зертхана`],
    };
    const [sub, note, title] = chrome[mode] || [
      "6 зертхана",
      "6 зертханалық жұмыс",
      `${COURSE.subject} — зертханалар`,
    ];
    if (logoSub) logoSub.textContent = sub;
    if (noteEl) noteEl.textContent = note;
    document.title = title;
  }

  function highlightNav(active) {
    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.nav === active);
    });
  }

  function observeReveal() {
    const nodes = app.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((n) => io.observe(n));
  }

  function viewLabs() {
    const cards = LABS.map((lab, i) => {
      const href = LAB_HREF[lab.id];
      const open = Boolean(href);
      const body = `
        <div class="lab-top">
          <span class="lab-num">${lab.num}</span>
        </div>
        <h3>${lab.title}</h3>
        <p class="lab-result"><span>Нәтиже</span>${lab.short}</p>
        ${open ? `<span class="lab-go">Ашу <i>→</i></span>` : ""}`;

      if (open) {
        return `<a class="lab-card reveal" href="${href}" style="--accent:${lab.color};--d:${i * 0.07}s">${body}</a>`;
      }
      return `<article class="lab-card is-locked reveal" style="--accent:${lab.color};--d:${i * 0.07}s" aria-disabled="true">${body}</article>`;
    }).join("");

    return `
      <div class="view labs">
        <section class="labs-hero">
          <div class="hero-copy">
            <p class="eyebrow reveal">${COURSE.subject}</p>
            <h1 class="hero-title reveal">${COURSE.title}</h1>
            <p class="hero-lead reveal">${COURSE.lead}</p>
            <div class="meta-row reveal">
              <span><em>Автор</em>${COURSE.author}</span>
              <span><em>Нысан</em>${COURSE.campus}</span>
              <span><em>Жұмыс</em>6 зертхана</span>
            </div>
          </div>
          <div class="hero-panel reveal" aria-hidden="true">
            <div class="orbit">
              <span class="orbit-ring"></span>
              <span class="orbit-ring delay"></span>
              <div class="orbit-core">
                <strong>06</strong>
                <em>зертхана</em>
              </div>
            </div>
          </div>
        </section>

        <section class="block" id="lab-menu">
          <div class="block-head reveal">
            <p class="eyebrow">Мәзір</p>
            <h2>Зертханалық жұмыстар</h2>
            <p>Курс Smart Campus сценарийі бойынша жүреді. №1, №2, №3 және №4 зертхана ашық.</p>
          </div>
          <div class="lab-grid">
            ${cards}
          </div>
        </section>
      </div>`;
  }

  function viewHome() {
    return `
      <div class="view home">
        <a class="back reveal" href="#labs">← Барлық зертханалар</a>
        <section class="hero">
          <div class="hero-copy">
            <p class="eyebrow reveal">${APP.subject}</p>
            <h1 class="hero-title reveal">${APP.title}</h1>
            <p class="hero-lead reveal">${APP.lead}</p>
            <div class="meta-row reveal">
              <span><em>Зертхана</em>${APP.lab}</span>
              <span><em>Автор</em>${APP.author}</span>
            </div>
            <div class="hero-actions reveal">
              <a class="btn btn-primary" href="#standards-list">Стандарттар</a>
              <a class="btn btn-ghost" href="#quiz">Сұрақтарға жауап</a>
            </div>
          </div>
          <div class="hero-panel reveal" aria-hidden="true">
            <div class="orbit">
              <span class="orbit-ring"></span>
              <span class="orbit-ring delay"></span>
              <div class="orbit-core">
                <strong>27000</strong>
                <em>сериясы</em>
              </div>
            </div>
          </div>
        </section>

        <section class="block" id="goal">
          <div class="block-head reveal">
            <p class="eyebrow">Жұмыс туралы</p>
            <h2>Мақсат және тапсырма</h2>
          </div>
          <div class="goal-card reveal">
            <h3>Жұмыстың мақсаты</h3>
            <p>${APP.goal}</p>
            <p class="meta"><span>Жабдық</span>${APP.equipment}</p>
          </div>
          <div class="task-grid">
            ${APP.tasks
              .map(
                (t, i) => `
              <article class="task-card reveal" style="--d:${i * 0.08}s">
                <span class="task-n">${t.n}</span>
                <h3>${t.title}</h3>
                <p>${t.text}</p>
              </article>`
              )
              .join("")}
          </div>
        </section>

        <section class="block" id="standards-list">
          <div class="block-head reveal">
            <p class="eyebrow">Практикалық тапсырма</p>
            <h2>Үш стандартты таңдаңыз</h2>
            <p>Әрқайсысында толық ақпарат, терминдер және фактілер бар.</p>
          </div>
          <div class="std-grid">
            ${STANDARDS.map((s, i) => cardStandard(s, i)).join("")}
          </div>
        </section>

        <section class="block" id="literature">
          <div class="block-head reveal">
            <p class="eyebrow">Дереккөздер</p>
            <h2>Пайдаланылған әдебиеттер</h2>
            <p>Зертханалық жұмыста қолданылған стандарттар мен ресми сілтемелер.</p>
          </div>
          <ol class="lit-list">
            ${LITERATURE.map(
              (item, i) => `
              <li class="lit-item reveal" style="--d:${i * 0.06}s">
                <span class="lit-n">${item.n}</span>
                <div class="lit-body">
                  <a class="lit-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
                    ${item.title}
                  </a>
                  <p>${item.note}</p>
                  <span class="lit-source">${item.source} ↗</span>
                </div>
              </li>`
            ).join("")}
          </ol>
        </section>

        <section class="cta reveal">
          <div>
            <h2>Бақылау сұрақтарына жауап</h2>
            <p>Сұрақтар мен дайын жауаптар</p>
          </div>
          <a class="btn btn-primary" href="#quiz">Жауаптарды оқу</a>
        </section>
      </div>`;
  }

  function cardStandard(s, i) {
    return `
      <a class="std-card reveal" href="#standard/${s.id}" style="--accent:${s.color};--d:${i * 0.1}s">
        <div class="std-top">
          <span class="std-num">${s.num}</span>
          <span class="std-code">${s.code}</span>
        </div>
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <span class="std-go">Толығырақ <i>→</i></span>
      </a>`;
  }

  function viewStandard(s) {
    return `
      <div class="view detail">
        <a class="back reveal" href="#standards-list">← Барлық стандарттар</a>
        <header class="detail-hero reveal" style="--accent:${s.color}">
          <p class="eyebrow">${s.code}</p>
          <h1>${s.title}</h1>
          <p class="detail-about">${s.about}</p>
        </header>

        <div class="detail-layout">
          <div class="detail-main">
            ${s.sections
              .map(
                (sec, i) => `
              <section class="info-block reveal" style="--d:${i * 0.06}s">
                <h2>${sec.h}</h2>
                <p>${sec.p}</p>
                ${
                  sec.link
                    ? `<a class="practice-link" href="${sec.link.href}">${sec.link.label}</a>`
                    : ""
                }
              </section>`
              )
              .join("")}

            <section class="info-block reveal">
              <h2>Негізгі терминдер мен анықтамалар</h2>
              <div class="terms">
                ${s.terms
                  .map(
                    (t) => `
                  <div class="term">
                    <dt>${t.name}</dt>
                    <dd>${t.def}</dd>
                  </div>`
                  )
                  .join("")}
              </div>
            </section>

            <section class="info-block reveal">
              <h2>Есте сақтаңыз</h2>
              <ul class="facts">
                ${s.facts.map((f) => `<li>${f}</li>`).join("")}
              </ul>
            </section>
          </div>

          <aside class="side reveal">
            <h3>Басқа стандарттар</h3>
            ${STANDARDS.filter((x) => x.id !== s.id)
              .map(
                (x) => `
              <a class="side-link" href="#standard/${x.id}">
                <strong>${x.code}</strong>
                <span>${x.short}</span>
              </a>`
              )
              .join("")}
            ${
              s.id === "gost-27005"
                ? `<a class="btn btn-primary side-btn" href="#practice">Мини-ойынды ашу</a>`
                : ""
            }
            <a class="btn btn-primary side-btn" href="#quiz">Сұрақтарға жауап</a>
          </aside>
        </div>
      </div>`;
  }

  function viewPractice() {
    const rules = PRACTICE.rules
      .map((r) => `<li data-rule="${r.id}" class="rule"><span></span>${r.label}</li>`)
      .join("");
    const scenario = PRACTICE.scenario
      .map(
        (item) => `
        <div class="scenario-item">
          <em>${item.label}</em>
          <strong>${item.text}</strong>
        </div>`
      )
      .join("");

    return `
      <div class="view practice">
        <a class="back reveal" href="#standard/gost-27005">← ГОСТ 27005 мысалына</a>
        <header class="practice-hero reveal">
          <p class="eyebrow">Практикалық мысал · мини-ойын</p>
          <h1>${PRACTICE.title}</h1>
          <p>${PRACTICE.lead}</p>
        </header>

        <div class="practice-layout">
          <aside class="practice-side reveal">
            <h2>Сценарий</h2>
            <div class="scenario-grid">${scenario}</div>
            <div class="practice-hint">
              <p><strong>Тапсырма:</strong> «Студенттер порталына» тіркеліп көріңіз. Әлсіз парольмен жүйе тіркеуді тоқтатады — бұл осалдықты өңдеудің бір түрі.</p>
              <p class="muted">Мысал ретінде жарамсыз: ${PRACTICE.weakExamples.join(", ")}</p>
            </div>
          </aside>

          <section class="practice-panel reveal">
            <div class="reg-card" id="reg-card">
              <div class="reg-head">
                <span class="reg-badge">Студенттер базасы</span>
                <h2>Тіркелу</h2>
                <p>Жаңа аккаунт жасау</p>
              </div>

              <form id="practice-form" class="reg-form" novalidate>
                <label>
                  <span>Студент email</span>
                  <input type="email" name="email" id="reg-email" placeholder="student@uni.kz" autocomplete="username" required>
                </label>
                <label>
                  <span>Құпия сөз</span>
                  <input type="password" name="password" id="reg-password" placeholder="Құпия сөзді енгізіңіз" autocomplete="new-password" required>
                </label>
                <label>
                  <span>Құпия сөзді қайталаңыз</span>
                  <input type="password" name="confirm" id="reg-confirm" placeholder="Қайталаңыз" autocomplete="new-password" required>
                </label>
                <label class="reg-check">
                  <input type="checkbox" id="reg-2fa">
                  <span>Екі факторлы аутентификацияны (2FA) қосу</span>
                </label>

                <ul class="rule-list" id="rule-list" aria-live="polite">${rules}</ul>

                <div class="reg-feedback" id="reg-feedback" hidden></div>

                <button type="submit" class="btn btn-primary reg-submit">Тіркелу</button>
              </form>

              <div class="reg-success" id="reg-success" hidden>
                <div class="success-mark" aria-hidden="true">✓</div>
                <h3>Тіркелу сәтті өтті</h3>
                <p>Күшті құпия сөз саясаты осалдықты жауып, рұқсатсыз қол жеткізу тәуекелін азайтты.</p>
                <ul class="success-points">
                  <li><strong>Саясат:</strong> әлсіз пароль қабылданбады</li>
                  <li id="success-2fa"><strong>2FA:</strong> қосымша қорғау қабаты</li>
                  <li><strong>Журнал:</strong> тіркелу уақыты жазылды — <span id="log-time"></span></li>
                </ul>
                <button type="button" class="btn btn-ghost" id="practice-reset">Қайта байқау</button>
              </div>
            </div>

            <div class="practice-explain reveal">
              <h3>Не үйрендік?</h3>
              <p>Әлсіз құпия сөз — осалдық. Күшті саясат, 2FA және қол жеткізу журналы — тәуекелді өңдеу (азайту) шаралары. Бұл ГОСТ 27005 логикасы: актив → қауіп → осалдық → өңдеу.</p>
            </div>
          </section>
        </div>
      </div>`;
  }

  function checkPassword(pw) {
    const weak = PRACTICE.weakExamples.some(
      (w) => pw.toLowerCase() === w.toLowerCase()
    );
    return {
      len: pw.length >= 8,
      upper: /[A-ZА-ЯӘІҢҒҮҰҚӨҺ]/.test(pw),
      lower: /[a-zа-яәіңғүұқөһ]/.test(pw),
      digit: /\d/.test(pw),
      special: /[^A-Za-zА-Яа-яӘІҢҒҮҰҚӨҺәіңғүұқөһ0-9]/.test(pw),
      notWeak: pw.length > 0 && !weak,
    };
  }

  function bindPractice() {
    const form = document.getElementById("practice-form");
    const password = document.getElementById("reg-password");
    const confirm = document.getElementById("reg-confirm");
    const email = document.getElementById("reg-email");
    const twoFa = document.getElementById("reg-2fa");
    const feedback = document.getElementById("reg-feedback");
    const success = document.getElementById("reg-success");
    const resetBtn = document.getElementById("practice-reset");
    const ruleList = document.getElementById("rule-list");
    if (!form || !password) return;

    function paintRules(state) {
      ruleList.querySelectorAll("[data-rule]").forEach((li) => {
        const ok = state[li.dataset.rule];
        li.classList.toggle("is-ok", !!ok);
        li.classList.toggle("is-bad", password.value.length > 0 && !ok);
      });
    }

    function showFeedback(type, message) {
      feedback.hidden = false;
      feedback.className = `reg-feedback is-${type}`;
      feedback.textContent = message;
    }

    function hideFeedback() {
      feedback.hidden = true;
      feedback.textContent = "";
      feedback.className = "reg-feedback";
    }

    password.addEventListener("input", () => {
      paintRules(checkPassword(password.value));
      hideFeedback();
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pw = password.value;
      const state = checkPassword(pw);
      paintRules(state);

      if (!email.value.trim()) {
        showFeedback("bad", "Email енгізіңіз.");
        return;
      }

      if (!pw) {
        showFeedback("bad", "Құпия сөз бос болмауы керек.");
        return;
      }

      const failed = Object.entries(state).filter(([, ok]) => !ok);
      if (failed.length) {
        const msgs = {
          len: "құпия сөз тым қысқа",
          upper: "бас әріп жоқ",
          lower: "кіші әріп жоқ",
          digit: "цифр жоқ",
          special: "арнайы таңба жоқ",
          notWeak: "бұл жиі қолданылатын әлсіз құпия сөз",
        };
        const why = failed.map(([id]) => msgs[id]).join("; ");
        showFeedback(
          "bad",
          `Тіркелу өтпеді: құпия сөз стандартқа сай емес (${why}). Осалдық: әлсіз құпия сөз — рұқсатсыз қол жеткізу қаупін күшейтеді.`
        );
        return;
      }

      if (pw !== confirm.value) {
        showFeedback("bad", "Құпия сөздер сәйкес келмейді.");
        return;
      }

      if (!twoFa.checked) {
        showFeedback(
          "warn",
          "Пароль күшті, бірақ 2FA қосылмаған. Тәуекелді толық өңдеу үшін екі факторлы аутентификацияны қосыңыз."
        );
        return;
      }

      form.hidden = true;
      success.hidden = false;
      const logTime = document.getElementById("log-time");
      const twoFaLine = document.getElementById("success-2fa");
      if (logTime) {
        logTime.textContent = new Date().toLocaleString("kk-KZ", {
          dateStyle: "medium",
          timeStyle: "short",
        });
      }
      if (twoFaLine) {
        twoFaLine.innerHTML =
          "<strong>2FA:</strong> қосылды — қосымша қорғау қабаты";
      }
    });

    resetBtn?.addEventListener("click", () => {
      form.reset();
      form.hidden = false;
      success.hidden = true;
      hideFeedback();
      paintRules(checkPassword(""));
      email.focus();
    });
  }

  function viewQuiz() {
    return `
      <div class="view quiz">
        <header class="quiz-hero reveal">
          <p class="eyebrow">Бақылау</p>
          <h1>Бақылау сұрақтарына жауап</h1>
          <p>${APP.subject} · ${APP.lab} · Автор: ${APP.author}</p>
        </header>

        <div class="qa-list">
          ${QUESTIONS.map(
            (q, qi) => `
            <article class="qa-item reveal" style="--d:${qi * 0.04}s">
              <div class="qa-q">
                <span class="q-n">${q.num}</span>
                <h2>${q.text}</h2>
              </div>
              <div class="qa-a">
                <span>Жауап</span>
                <p>${q.answer}</p>
              </div>
            </article>`
          ).join("")}
        </div>
      </div>`;
  }

  function viewNotFound() {
    return `
      <div class="view not-found">
        <h1>404</h1>
        <p>Бет табылмады</p>
        <a class="btn btn-primary" href="#labs">Зертханаларға</a>
      </div>`;
  }

  window.addEventListener("hashchange", route);
  route();
})();
