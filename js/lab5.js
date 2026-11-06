const LAB5 = {
  lab: "№5 зертханалық жұмыс",
  title: "Қорғалған желілік архитектураны жобалау",
  lead:
    "Smart Campus активтерін алты сенім аймағына бөлу, 0–4 сенім деңгейлері бойынша сегменттеу және 23 трафикті басқару ережесін бекіту.",
  goal:
    "Желілік сегментация қағидаларын қолданып, өзара оқшауланған сенім аймақтарын құру, трафикті сүзгілеу және әкімшілік қолжетімділікті қорғау.",
  equipment:
    "Дербес компьютер, желілік топология визуализаторы, №2 активтер тізілімі және №4 қолжетімділік матрицасы.",
  limit: "Жұмыс оқу сценарийі. Нақты кампус желісіне ереже жүктелмейді.",
  theory:
    "Сенім деңгейі жоғары аймаққа өту тек бақыланатын шлюз арқылы жүреді. Көрсетілмеген ағын жабық: default deny. DMZ сыртқы сұранысты қабылдайды, бірақ дерекқорға өзі бармайды. Қолданба қоймаға тек өз қызметтік тіркелгісімен кіреді. Әкімшілік қолжетімділік жеке VLAN-да: VPN, MFA және bastion. Журнал SIEM-ге кетеді, басқару арнасы кері ашылмайды.",
  tasks: [
    { n: "01", title: "Актив", text: "№2 тізілімдегі жұмыс серверлері мен желілік құрылғылар аймаққа отырғызылды." },
    { n: "02", title: "Сегмент", text: "Алты сенім аймағы. Деңгей 0-ден 4-ке және әкімшілік 4+ дейін." },
    { n: "03", title: "Трафик", text: "23 ереже. Әр жолда көз, нысана, порт және негіздеме бар." },
    { n: "04", title: "Бақылау", text: "WAF, VPN, MFA, IDS/IPS және аудит журналы өз аймағында тұр." },
  ],
  zones: [
    {
      id: "public",
      level: 0,
      short: "Public",
      name: "Public Zone (Шекаралық)",
      subnet: "192.168.0.0/24",
      vlan: 10,
      color: "#b1362c",
      fill: "#f8e8e6",
      text: "Сыртқы пайдаланушылар мен қонақтар. Ішкі сервиске тікелей жол жоқ.",
    },
    {
      id: "dmz",
      level: 1,
      short: "DMZ",
      name: "DMZ (Демилитаризацияланған)",
      subnet: "10.0.1.0/24",
      vlan: 20,
      color: "#c45a27",
      fill: "#f8efe6",
      text: "Веб-портал, Nginx және сыртқы WAF. Сұраныс осында аяқталады немесе App-қа жіберіледі.",
    },
    {
      id: "extranet",
      level: 2,
      short: "Extranet",
      name: "Extranet Zone (Серіктестер)",
      subnet: "10.0.2.0/24",
      vlan: 30,
      color: "#8a5a12",
      fill: "#f6f0e4",
      text: "Мердігерлер мен серіктестердің уақытша байланыс аймағы. Қоймаға бармайды.",
    },
    {
      id: "app",
      level: 3,
      short: "App",
      name: "Internal App Zone (Қолданбалар)",
      subnet: "10.0.3.0/24",
      vlan: 40,
      color: "#0d5c4b",
      fill: "#e7f3ef",
      text: "LMS серверлері және сәйкестендіру қызметі (IAM). №4 рөлдер осында тексеріледі.",
    },
    {
      id: "db",
      level: 4,
      short: "Database",
      name: "Database Zone (Дерекқорлар)",
      subnet: "10.0.4.0/24",
      vlan: 50,
      color: "#1a4f6e",
      fill: "#e8f1f6",
      text: "Студенттердің жеке дерекқоры және резервтік көшірме қоймасы. Жаңа сессияны өзі бастамайды.",
    },
    {
      id: "admin",
      level: "4+",
      short: "Admin",
      name: "Admin Management (Әкімшілік)",
      subnet: "10.0.99.0/24",
      vlan: 99,
      color: "#5c3d7a",
      fill: "#f3eef6",
      text: "VPN, MFA, bastion және SIEM. Желіні басқаратын жалғыз кіру.",
    },
  ],
  assets: [
    { name: "Қонақ Wi-Fi", zone: "public", note: "№2 қонақтар. Ішкі сервиске жол жоқ." },
    { name: "Портал, Nginx, WAF", zone: "dmz", note: "№2 портал. Сыртқы сұраныс осында бітеді." },
    { name: "Серіктес шлюзі", zone: "extranet", note: "Мердігердің уақытша арнасы." },
    { name: "LMS және IAM", zone: "app", note: "№2 оқу нәтижесі мен сәйкестендіру. №4 рөлдер." },
    { name: "ACS", zone: "app", note: "№2 өткізу жүйесі. Қонақ VLAN-нан бөлек." },
    { name: "Студенттер ДҚ және ДҚБЖ", zone: "db", note: "№2 жоғары актив. DMZ-ден тікелей порт жоқ." },
    { name: "Резерв қоймасы", zone: "db", note: "№2 көшірме. Ашу мен қалпына келтіру №4 бойынша бөлек." },
    { name: "Bastion, VPN, SIEM", zone: "admin", note: "№4 PAM. Әкімші күнделікті VLAN-ға отырмайды." },
  ],
  defaultPolicy: "Тек рұқсат етілген трафикке жол беріледі, қалғаны бұғатталады.",
  rules: [
    { n: "01", action: "ALLOW", from: ["public"], to: ["dmz"], service: "TCP/443", why: "Қонақ пен сыртқы пайдаланушы порталға тек WAF арқылы кіреді." },
    { n: "02", action: "ALLOW", from: ["public"], to: ["dmz"], service: "TCP/80", why: "80-порт тек 443-ке бағыттайды, бет бермейді." },
    { n: "03", action: "DENY", from: ["public"], to: ["extranet"], service: "кез келген", why: "Қонақ желісі серіктес аймағына өтпейді." },
    { n: "04", action: "DENY", from: ["public"], to: ["app"], service: "кез келген", why: "Қолданбаға тікелей маршрут жоқ." },
    { n: "05", action: "DENY", from: ["public"], to: ["db"], service: "кез келген", why: "Дерекқор шекарадан жабық." },
    { n: "06", action: "DENY", from: ["public"], to: ["admin"], service: "кез келген", why: "Әкімшілік VLAN жария мекенжайда жоқ." },
    { n: "07", action: "ALLOW", from: ["dmz"], to: ["app"], service: "TCP/8443", why: "Nginx тек LMS API-ге барады." },
    { n: "08", action: "ALLOW", from: ["dmz"], to: ["app"], service: "TCP/443", why: "Портал кіруді IAM-нен сұрайды. №4 MFA осында." },
    { n: "09", action: "DENY", from: ["dmz"], to: ["db"], service: "кез келген", why: "DMZ қоймаға тікелей қосылмайды." },
    { n: "10", action: "DENY", from: ["dmz"], to: ["admin"], service: "кез келген", why: "Желілік басқару DMZ-ден ашылмайды." },
    { n: "11", action: "ALLOW", from: ["extranet"], to: ["dmz"], service: "TCP/443", why: "Серіктес жария порталды көреді." },
    { n: "12", action: "ALLOW", from: ["extranet"], to: ["app"], service: "TCP/443", why: "Серіктес API: allowlist және MFA. Қалған порт жабық." },
    { n: "13", action: "DENY", from: ["extranet"], to: ["db"], service: "кез келген", why: "Серіктес студенттер қоймасын көрмейді." },
    { n: "14", action: "DENY", from: ["extranet"], to: ["admin"], service: "кез келген", why: "Серіктестен bastion жоқ." },
    { n: "15", action: "ALLOW", from: ["app"], to: ["db"], service: "TCP/5432", why: "Тек қолданбаның қызметтік тіркелгісі. Пайдаланушы қоймаға кірмейді." },
    { n: "16", action: "DENY", from: ["app"], to: ["public"], service: "кез келген", why: "Қолданба интернетке тікелей шықпайды." },
    { n: "17", action: "DENY", from: ["db"], to: ["app"], service: "жаңа сессия", why: "Қойма сессияны өзі бастамайды. Жауап күйлі экранда қалады." },
    { n: "18", action: "DENY", from: ["db"], to: ["public"], service: "кез келген", why: "Қоймадан сыртқы желіге шығу жоқ." },
    { n: "19", action: "ALLOW", from: ["app", "db"], to: ["admin"], service: "TCP/6514", why: "Қолданба мен қойма журналы SIEM-ге. Кері басқару жоқ." },
    { n: "20", action: "ALLOW", from: ["admin"], to: ["dmz"], service: "TCP/22", why: "WAF пен Nginx тек bastion, VPN және MFA арқылы." },
    { n: "21", action: "ALLOW", from: ["admin"], to: ["app"], service: "TCP/22", why: "App басқаруы тек bastion арқылы. Күнделікті сұрау емес." },
    { n: "22", action: "ALLOW", from: ["admin"], to: ["db"], service: "TCP/22, TCP/5432", why: "Қойманы әкімші тек bastion-нан ашады. №4: қалпына келтіруді өзі бекітпейді." },
    { n: "23", action: "DENY", from: ["any"], to: ["any"], service: "кез келген", why: "Default deny. Жоғарыдағы тізімде жоқ ағын бұғатталады.", sticky: true },
  ],
  controls: [
    { name: "WAF", status: "Қосулы", zone: "DMZ", note: "L7 деңгейіндегі SQLi және XSS шабуылдарынан қорғайды." },
    { name: "MFA және IPsec VPN", status: "Қосулы", zone: "Admin", note: "Әкімшілік қолжетімділік екі факторлы растаумен ашылады." },
    { name: "IDS/IPS", status: "Қосулы", zone: "App / Database", note: "Аномальді трафик пен желілік шабуылды App және Database шекарасында бұғаттайды." },
    { name: "SIEM және аудит журналы", status: "Қосулы", zone: "Admin", note: "Сұраныс пен трафик журналы өзгертілмейтін етіп сақталады." },
  ],
  questions: [
    {
      num: 1,
      text: "Сенім аймағы мен сенім деңгейінің айырмасы қандай?",
      answer:
        "Аймақ — ортақ шлюздің артындағы сегмент: өз ішкі желісі және VLAN-ы бар. Деңгей — сол аймаққа қаншалықты сенетініміз. Public — 0, DMZ — 1, Extranet — 2, App — 3, Database — 4. Admin — 4+: ол дерекқордан сенімдірек емес, бірақ басқару жазықтығы бөлек. Жоғары деңгейге өту тек рұқсат етілген портпен жүреді.",
    },
    {
      num: 2,
      text: "Неге DMZ дерекқорға тікелей қосылмайды?",
      answer:
        "DMZ сыртқы сұранысты қабылдайды, сондықтан ол ең алдымен шабуылданатын сегмент. Егер Nginx қоймаға өзі барса, порталдағы осалдық студенттер дерекқорын ашады. Сондықтан DMZ тек App-қа, App қоймаға өз қызметтік тіркелгісімен барады. Ереже 09 осы жолды жабады, ереже 15 тек TCP/5432 қалдырады.",
    },
    {
      num: 3,
      text: "Default deny қалай жұмыс істейді?",
      answer:
        "Тізімде ALLOW деп жазылмаған ағын соңғы ережеде бұғатталады. Жаңа сервис, ұмытылған порт немесе аймақтар арасындағы кездейсоқ маршрут өздігінен ашылмайды. 23-ереже кез келген көзден кез келген нысанаға тыйым салады. Алдыңғы жолдар соған дейінгі нақты рұқсат.",
    },
    {
      num: 4,
      text: "Әкімшілік қолжетімділік неге жеке сегментте?",
      answer:
        "Күнделікті пайдаланушы мен желіні басқаратын адам бір VLAN-да тұрмайды. Admin-ға кіру VPN және MFA-дан кейін, содан кейін bastion арқылы. Bastion DMZ, App және Database-ке тек басқару портын ашады. Серіктес пен қонақ бұл VLAN-ды көрмейді: ереже 06 және 14.",
    },
    {
      num: 5,
      text: "WAF пен желілік сүзгінің айырмасы қандай?",
      answer:
        "Желілік ереже адрес, порт және бағытты көреді: Public-тан DMZ-ге тек 443. WAF сол 443-тің ішіндегі HTTP сұранысты қарайды: SQLi мен XSS DMZ-де тоқтайды. IDS/IPS App пен Database шекарасында аномалияны іздейді. SIEM үшеуінің журналын Admin аймағында жинайды.",
    },
  ],
  conclusion: {
    text:
      "№2 активтері алты аймаққа отырғызылды. Қонақ Public-та, портал мен WAF DMZ-де, серіктес Extranet-те, LMS және IAM App-та, қойма Database-те, bastion Admin-да. Арасында 23 ереже. DMZ қоймаға бармайды. Қолданба интернетке шықпайды. Әкімшілік тек VPN, MFA және bastion арқылы. Тізімде жоқ ағын жабық.",
    recs: [
      "Порталды тек DMZ-дегі WAF арқылы ашу.",
      "DMZ-ден дерекқорға тікелей порт бермеу.",
      "Әкімшілік VLAN-ды VPN, MFA және bastion-сыз ашпау.",
      "Журналды SIEM-ге жіберу, қоймадан интернетке шығармау.",
      "Көрсетілмеген ағынды default deny қылып қалдыру.",
    ],
  },
  literature: [
    {
      n: "1",
      title: "NIST SP 800-41 Rev. 1. Guidelines on Firewalls and Firewall Policy",
      note: "Сүзгі саясаты және default deny.",
      source: "csrc.nist.gov",
      url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final",
    },
    {
      n: "2",
      title: "ISO/IEC 27033-1. Network security — Overview and concepts",
      note: "Желіні сегменттеу және аймақтар арасындағы шлюз.",
      source: "iso.org",
      url: "https://www.iso.org/standard/63461.html",
    },
    {
      n: "3",
      title: "NIST SP 800-207. Zero Trust Architecture",
      note: "Сенім орналасуына қарай берілмейді: әр ағын бөлек тексеріледі.",
      source: "csrc.nist.gov",
      url: "https://csrc.nist.gov/pubs/sp/800/207/final",
    },
  ],
};

function lab5Zone(id) {
  return LAB5.zones.find((zone) => zone.id === id);
}

function lab5Label(id) {
  if (id === "any") return "Кез келген";
  const zone = lab5Zone(id);
  return zone ? zone.short : id;
}

function lab5Svg() {
  const nodes = [
    { id: "public", x: 360, y: 12 },
    { id: "dmz", x: 360, y: 128 },
    { id: "extranet", x: 680, y: 128 },
    { id: "admin", x: 20, y: 244 },
    { id: "app", x: 360, y: 244 },
    { id: "db", x: 360, y: 360 },
  ];
  const w = 160;
  const h = 70;
  const boxes = nodes
    .map((node) => {
      const zone = lab5Zone(node.id);
      const cx = node.x + w / 2;
      const cy = node.y + h / 2;
      return `
        <g class="d-node" data-zone="${zone.id}">
          <rect x="${node.x}" y="${node.y}" width="${w}" height="${h}" rx="12" style="fill:${zone.fill};stroke:${zone.color}" />
          <text class="d-node-title" x="${cx}" y="${cy - 8}">${zone.short}</text>
          <text class="d-node-sub" x="${cx}" y="${cy + 12}">VLAN ${zone.vlan} · ${zone.level}</text>
        </g>`;
    })
    .join("");
  const flow = [
    ["public dmz", "M 440 82 L 440 128"],
    ["dmz app", "M 440 198 L 440 244"],
    ["app db", "M 440 314 L 440 360"],
    ["dmz extranet", "M 520 163 L 680 163"],
    ["extranet app", "M 760 198 L 520 279"],
  ]
    .map(([link, d]) => `<path class="d-edge" data-link="${link}" d="${d}" />`)
    .join("");
  const mgmt = [
    ["admin dmz", "M 180 244 L 360 163"],
    ["admin app", "M 180 279 L 360 279"],
    ["admin db", "M 180 314 L 360 395"],
  ]
    .map(([link, d]) => `<path class="d-edge d-mgmt" data-link="${link}" d="${d}" />`)
    .join("");
  return `
    <svg class="dep-svg" viewBox="0 0 880 448" role="img" aria-label="Алты сенім аймағының сызбасы">
      <defs>
        <marker id="lab5-arrow" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 1 L 10 5 L 0 9 Z" fill="#0d5c4b" />
        </marker>
        <marker id="lab5-mgmt" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 1 L 10 5 L 0 9 Z" fill="#5c3d7a" />
        </marker>
      </defs>
      ${flow}
      ${mgmt}
      ${boxes}
    </svg>`;
}

function bindLab5() {
  const root = document.querySelector(".lab5");
  if (!root || root.dataset.bound) return;
  root.dataset.bound = "1";

  const note = root.querySelector("#zone-note");
  const panel = root.querySelector("#zone-panel");
  const svg = root.querySelector(".dep-svg");

  function apply(id) {
    root.querySelectorAll("[data-zone-filter]").forEach((chip) => {
      const on = chip.dataset.zoneFilter === id;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll("#rule-table tbody tr").forEach((row) => {
      const zones = (row.dataset.zones || "").split(" ");
      row.hidden = id !== "all" && row.dataset.sticky !== "1" && !zones.includes(id);
    });
    root.querySelectorAll("#asset-table tbody tr").forEach((row) => {
      row.hidden = id !== "all" && row.dataset.zone !== id;
    });
    if (svg) {
      svg.classList.toggle("is-active", id !== "all");
      svg.querySelectorAll(".d-node").forEach((node) => {
        const on = node.dataset.zone === id;
        node.classList.toggle("is-on", on);
        node.classList.toggle("is-dim", id !== "all" && !on);
      });
      svg.querySelectorAll("[data-link]").forEach((edge) => {
        const on = id !== "all" && edge.dataset.link.split(" ").includes(id);
        edge.classList.toggle("is-on", on);
      });
    }
    const shown = root.querySelectorAll("#rule-table tbody tr:not([hidden])").length;
    if (id === "all") {
      if (note) note.textContent = `${LAB5.rules.length} ереже. Аймақты таңдасаңыз, сол аймақтың кірісі мен шығысы қалады.`;
      if (panel) {
        panel.innerHTML = "<h3>Алты аймақ</h3><p>Сызбадан аймақты таңдаңыз. Тұтас сызық — дерек ағыны. Үзік сызық — басқару: VPN, MFA, bastion.</p>";
      }
      return;
    }
    const zone = lab5Zone(id);
    if (!zone) return;
    if (note) note.textContent = `${zone.short}: ${shown} ереже, соның ішінде default deny.`;
    if (panel) {
      panel.innerHTML = `<h3>${zone.name}</h3><p>${zone.text}</p><p class="meta"><span>Желі</span>${zone.subnet} · VLAN ${zone.vlan} · деңгей ${zone.level}</p>`;
    }
  }

  root.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-zone-filter]");
    const node = event.target.closest(".d-node[data-zone]");
    const id = chip?.dataset.zoneFilter || node?.dataset.zone;
    if (!id) return;
    apply(id);
  });
}

function viewLab5() {
  const tasks = LAB5.tasks
    .map(
      (task, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${task.n}</span>
        <h3>${task.title}</h3>
        <p>${task.text}</p>
      </article>`
    )
    .join("");

  const zoneCards = LAB5.zones
    .map(
      (zone) => `
      <article class="process-card" style="border-left: 4px solid ${zone.color}">
        <span class="cat" style="background:${zone.color};color:#fff">Деңгей ${zone.level}</span>
        <h3>${zone.name}</h3>
        <p><strong>Ішкі желі:</strong> ${zone.subnet}<br><strong>VLAN:</strong> ${zone.vlan}</p>
        <p>${zone.text}</p>
      </article>`
    )
    .join("");

  const assetRows = LAB5.assets
    .map((asset) => {
      const zone = lab5Zone(asset.zone);
      return `
        <tr data-zone="${asset.zone}">
          <th scope="row">${asset.name}</th>
          <td>${zone.short}</td>
          <td>VLAN ${zone.vlan}</td>
          <td>${asset.note}</td>
        </tr>`;
    })
    .join("");

  const chips = [
    `<button type="button" class="chip is-on" data-zone-filter="all" aria-pressed="true">Барлығы</button>`,
    ...LAB5.zones.map(
      (zone) =>
        `<button type="button" class="chip" data-zone-filter="${zone.id}" aria-pressed="false">${zone.short}</button>`
    ),
  ].join("");

  const ruleRows = LAB5.rules
    .map((rule) => {
      const zones = [...rule.from, ...rule.to].filter((id) => id !== "any").join(" ");
      const mark = rule.action === "ALLOW" ? "rule-allow" : "rule-deny";
      const decision = rule.action === "ALLOW" ? "Рұқсат" : "Тыйым";
      return `
        <tr data-zones="${zones}" data-sticky="${rule.sticky ? "1" : "0"}">
          <th scope="row">${rule.n}</th>
          <td class="${mark}">${decision}</td>
          <td>${rule.from.map(lab5Label).join(", ")}</td>
          <td>${rule.to.map(lab5Label).join(", ")}</td>
          <td>${rule.service}</td>
          <td>${rule.why}</td>
        </tr>`;
    })
    .join("");

  const controlCards = LAB5.controls
    .map(
      (item) => `
      <article class="protect-card">
        <header>
          <h3>${item.name}</h3>
          <span class="cat cat-high">${item.status}</span>
        </header>
        <p><strong>Аймақ:</strong> ${item.zone}</p>
        <p>${item.note}</p>
      </article>`
    )
    .join("");

  const questions = LAB5.questions
    .map(
      (q, i) => `
      <article class="qa-item reveal" style="--d:${i * 0.04}s">
        <div class="qa-q">
          <span class="q-n">${q.num}</span>
          <h2>${q.text}</h2>
        </div>
        <div class="qa-a">
          <span>Жауап</span>
          <p>${q.answer}</p>
        </div>
      </article>`
    )
    .join("");

  const literature = LAB5.literature
    .map(
      (item) => `
      <li class="lit-item reveal">
        <span class="lit-n">${item.n}</span>
        <div class="lit-body">
          <a class="lit-link" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>
          <p>${item.note}</p>
          <span class="lit-source">${item.source} ↗</span>
        </div>
      </li>`
    )
    .join("");

  const recs = LAB5.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  return `
    <div class="view lab5">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab3-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB5.lab}</p>
          <h1 class="hero-title reveal">${LAB5.title}</h1>
          <p class="hero-lead reveal">${LAB5.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Сегменттеу жиынтығы">
          <div><strong>${LAB5.zones.length}</strong><span>сенім аймағы</span></div>
          <div><strong>${LAB5.rules.length}</strong><span>трафик ережесі</span></div>
          <div><strong>0–4</strong><span>сенім деңгейлері</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/5">1. Мақсат</a>
        <a href="#lab/5/zones">2. Аймақтар</a>
        <a href="#lab/5/traffic">3. Ережелер</a>
        <a href="#lab/5/defense">4. Қорғаныс</a>
        <a href="#lab/5/quiz">5. Сұрақтар</a>
        <a href="#lab/5/conclusion">6. Қорытынды</a>
        <a href="#lab/5/literature">7. Дереккөз</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және тапсырма</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB5.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB5.equipment}</p>
        </div>
        <p class="limit-note reveal">${LAB5.limit}</p>
        <div class="task-grid">${tasks}</div>
      </section>

      <section class="block" id="zones">
        <div class="block-head reveal">
          <p class="eyebrow">01 және 02 · Актив пен сегмент</p>
          <h2>Сенім аймақтары</h2>
          <p>№2 тізіліміндегі актив өз VLAN-ына отырды. Жоғары деңгейге өту тек шлюз арқылы.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix lab5-rules" id="asset-table">
            <thead>
              <tr>
                <th>Актив</th>
                <th>Аймақ</th>
                <th>VLAN</th>
                <th>Неге осында</th>
              </tr>
            </thead>
            <tbody>${assetRows}</tbody>
          </table>
        </div>
        <div class="process-grid">${zoneCards}</div>
        <div class="block-head reveal">
          <h2>Сегменттеу сызбасы</h2>
          <p>Аймақты басыңыз. Тұтас сызық — рұқсат етілген дерек ағыны. Үзік сызық — басқару жазықтығы.</p>
        </div>
        <div class="dep-wrap reveal">${lab5Svg()}</div>
        <article class="dep-panel reveal" id="zone-panel">
          <h3>Алты аймақ</h3>
          <p>Сызбадан аймақты таңдаңыз. Тұтас сызық — дерек ағыны. Үзік сызық — басқару: VPN, MFA, bastion.</p>
        </article>
        <p class="theory reveal">${LAB5.theory}</p>
      </section>

      <section class="block" id="traffic">
        <div class="block-head reveal">
          <p class="eyebrow">03 · Трафик</p>
          <h2>Трафикті басқару</h2>
          <p>${LAB5.defaultPolicy}</p>
        </div>
        <p class="limit-note reveal"><strong>Default deny.</strong> ${LAB5.defaultPolicy} Әкімшілік қолжетімділік тек Admin сегменті, VPN, MFA және bastion арқылы.</p>
        <div class="chip-row reveal" id="zone-filters">${chips}</div>
        <p class="role-note reveal" id="zone-note">${LAB5.rules.length} ереже. Аймақты таңдасаңыз, сол аймақтың кірісі мен шығысы қалады.</p>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab5-rules" id="rule-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Шешім</th>
                <th>Көз</th>
                <th>Нысана</th>
                <th>Қызмет</th>
                <th>Негіздеме</th>
              </tr>
            </thead>
            <tbody>${ruleRows}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="defense">
        <div class="block-head reveal">
          <p class="eyebrow">04 · Қорғаныс</p>
          <h2>Қорғаныс және бақылау</h2>
          <p>Сүзгі портты жабады. Төмендегі құралдар сол шекарада не іздеу керек екенін айтады.</p>
        </div>
        <div class="protect-grid">${controlCards}</div>
      </section>

      <section class="block" id="quiz">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 5</p>
          <h2>Бақылау сұрақтарына жауап</h2>
        </div>
        <div class="qa-list">${questions}</div>
      </section>

      <section class="block" id="conclusion">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 6</p>
          <h2>Қорытынды және ұсынымдар</h2>
        </div>
        <article class="goal-card reveal">
          <p>${LAB5.conclusion.text}</p>
        </article>
        <ol class="rec-list">${recs}</ol>
      </section>

      <section class="block" id="literature">
        <div class="block-head reveal">
          <p class="eyebrow">Дереккөздер</p>
          <h2>Пайдаланылған дереккөздер</h2>
        </div>
        <ol class="lit-list">${literature}</ol>
      </section>
    </div>`;
}
