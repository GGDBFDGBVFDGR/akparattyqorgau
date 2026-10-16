(() => {
  const MFA_CODE = "482913";
  const PASSWORD = "Campus!2026";
  const WIFI = { ssid: "SmartCampus", password: "CampusWiFi!26" };
  const STORE = "campus-db-v3";
  const SESSION = "campus-session-v3";

  const ROLES = {
    student: "Студент",
    teacher: "Оқытушы",
    registrar: "Тіркеуші",
    head: "Бөлім басшысы",
    guard: "Күзет",
    auditor: "Аудитор",
    secadmin: "Қауіпсіздік әкімшісі",
    dean: "Декан, оқытушы",
  };

  const STATUSES = ["Оқуда", "Академиялық демалыс", "Оқудан шығарылды", "Түлек"];
  const DOORS = ["Бас кіреберіс", "Кітапхана", "Зертхана 314", "Жатақхана", "Асхана", "Спорт кешені"];
  const PLACES = [
    {
      id: "lib",
      name: "Кітапхана",
      where: "1-ғимарат, 2-қабат",
      hours: "09:00–18:00",
      note: "Оқу залы және кітап беру. Порталдан кітапқа өтінім қалдыруға болады.",
      more: ["120 орын: тыныш аймақ және 4 адамдық топтық бөлме.", "Кітап 14 күнге беріледі, мерзімді порталда ұзартуға болады.", "Кіру үшін кампус картасы керек."],
    },
    {
      id: "food",
      name: "Асхана",
      where: "1-ғимарат, 1-қабат",
      hours: "08:30–17:00",
      note: "Түскі ас және буфет. Кампус картасымен төлеуге болады.",
      more: ["Ыстық түскі ас 12:00–14:00 аралығында.", "Буфет таңертеңнен жұмыс істейді: шай, нан, жеңіл тағам.", "Төлем кампус картасымен немесе қолма-қол."],
    },
    {
      id: "sport",
      name: "Спорт кешені",
      where: "Спорт корпус",
      hours: "07:00–21:00",
      note: "Зал, жүгіру жолы. Кешке студенттерге ашық.",
      more: ["Зал, жүгіру жолы және шешінетін бөлме бар.", "Бос сағат 18:00–21:00, алдын ала жазылу керек емес.", "Ішке спорт киімімен және ауыстырылатын аяқкиіммен кіріңіз."],
    },
    {
      id: "dorm",
      name: "Жатақхана",
      where: "Кампус ауласы",
      hours: "тәулік бойы",
      note: "Кіру кампус картасымен. Қонақ 22:00-ге дейін.",
      more: ["Тұрғын кампус картасымен кіреді.", "Қонақ күзетте тіркеледі және 22:00-ге дейін болады.", "Комендант 1-қабатта, 09:00–18:00."],
    },
    {
      id: "med",
      name: "Медпункт",
      where: "1-ғимарат, 1-қабат",
      hours: "09:00–17:00",
      note: "Алғашқы көмек. Жедел жағдайда күзетке хабарлаңыз.",
      more: ["Алғашқы көмек және қысқа анықтама.", "Студенттік куәлік жеткілікті, бөлек полис сұралмайды.", "17:00-ден кейін жедел жағдайда күзет постына барыңыз."],
    },
    {
      id: "work",
      name: "Коворкинг",
      where: "2-ғимарат, 3-қабат",
      hours: "09:00–20:00",
      note: "Топтық жұмыс және ноутбук орны.",
      more: ["24 жұмыс орны, розетка және тақта.", "Бір топқа 6 адамға дейін.", "Орынды сол жерде бос үстелден алуға болады."],
    },
    {
      id: "hall",
      name: "Акт залы",
      where: "1-ғимарат, 1-қабат",
      hours: "іс-шара кестесімен",
      note: "Жиын, концерт және студенттік кеш.",
      more: ["300 орын, сахна, дыбыс және экран.", "Іс-шара деканат арқылы кемінде 5 күн бұрын жазылады.", "Көрермен кампус картасын өзімен алады."],
    },
    {
      id: "dean",
      name: "Деканат",
      where: "1-ғимарат, 3-қабат",
      hours: "09:00–17:30",
      note: "Анықтама, мәртебе және оқу мәселесі.",
      more: ["Қабылдау 09:00–12:00 және 14:00–17:00.", "Анықтама, ауысу және академиялық мәселе осында.", "Кезек орнында. Студенттік куәлікті алыңыз."],
    },
  ];

  const EXTRA_ROOMS = {
    gate: {
      id: "gate",
      name: "Бас кіреберіс",
      where: "Бас корпус, 1-қабат",
      hours: "07:30–22:00",
      note: "Кампусқа кіретін негізгі есік. Күзет посты осында.",
      more: ["Кіру кампус картасымен.", "Қонақ тіркеуі 08:00–18:00.", "22:00-ден кейін тек жатақхана картасы өтеді."],
    },
    r210: {
      id: "r210",
      name: "Дәрісхана 210",
      where: "Бас корпус, 2-қабат",
      hours: "сабақ кестесімен",
      note: "Жалпы дәріс. 40 орын.",
      more: ["Проектор және тақта бар.", "Бос сағатта есік жабық.", "Кілт оқу бөлімінде."],
    },
    r214: {
      id: "r214",
      name: "Дәрісхана 214",
      where: "Бас корпус, 2-қабат",
      hours: "сабақ кестесімен",
      note: "Семинар бөлмесі. 24 орын.",
      more: ["Топтық жұмысқа ыңғайлы.", "Розетка әр үстелде.", "Сабақтан тыс брондау деканатта."],
    },
    r220: {
      id: "r220",
      name: "Дәрісхана 220",
      where: "Бас корпус, 2-қабат",
      hours: "сабақ кестесімен",
      note: "Ағынды дәріс. 80 орын.",
      more: ["Микрофон және экран бар.", "Кіру дәліздің сол жағынан.", "Кеш қалатын адам артқы есіктен кірмейді."],
    },
    staff: {
      id: "staff",
      name: "Оқытушылар бөлмесі",
      where: "Бас корпус, 3-қабат",
      hours: "09:00–18:00",
      note: "Кеңес және кафедра жиыны.",
      more: ["Студент қабылдауы кестемен.", "Құжат деканат арқылы өтеді.", "Дәліздің оң қанаты."],
    },
  };

  const BUILDINGS = [
    {
      id: "main",
      name: "Бас корпус",
      floors: [
        {
          id: "1",
          label: "1-қабат",
          rooms: [
            { place: "hall", x: 4, y: 14, w: 36, h: 72 },
            { place: "food", x: 42, y: 14, w: 28, h: 42 },
            { place: "med", x: 42, y: 60, w: 28, h: 26 },
            { id: "gate", x: 72, y: 14, w: 24, h: 72 },
          ],
        },
        {
          id: "2",
          label: "2-қабат",
          rooms: [
            { place: "lib", x: 4, y: 14, w: 40, h: 72 },
            { id: "r210", x: 46, y: 14, w: 24, h: 34 },
            { id: "r214", x: 46, y: 52, w: 24, h: 34 },
            { id: "r220", x: 72, y: 14, w: 24, h: 72 },
          ],
        },
        {
          id: "3",
          label: "3-қабат",
          rooms: [
            { place: "dean", x: 4, y: 14, w: 44, h: 72 },
            { id: "staff", x: 50, y: 14, w: 46, h: 72 },
          ],
        },
      ],
    },
    {
      id: "second",
      name: "2-ғимарат",
      floors: [
        {
          id: "3",
          label: "3-қабат",
          rooms: [{ place: "work", x: 8, y: 16, w: 84, h: 68 }],
        },
      ],
    },
    {
      id: "yard",
      name: "Аумақ",
      floors: [
        {
          id: "0",
          label: "Аула",
          rooms: [
            { place: "sport", x: 4, y: 14, w: 44, h: 72 },
            { place: "dorm", x: 52, y: 14, w: 44, h: 72 },
          ],
        },
      ],
    },
  ];

  let mapPick = { building: "main", floor: "1", room: "hall" };

  function roomInfo(room) {
    if (room.place) return PLACES.find((p) => p.id === room.place);
    return EXTRA_ROOMS[room.id];
  }

  function roomKey(room) {
    return room.place || room.id;
  }

  function findRoom(id) {
    for (const building of BUILDINGS) {
      for (const floor of building.floors) {
        const room = floor.rooms.find((item) => roomKey(item) === id);
        if (room) return { building, floor, room, info: roomInfo(room) };
      }
    }
    return null;
  }

  function currentMap() {
    const building = BUILDINGS.find((b) => b.id === mapPick.building) || BUILDINGS[0];
    const floor = building.floors.find((f) => f.id === mapPick.floor) || building.floors[0];
    const spot = findRoom(mapPick.room);
    return { building, floor, spot };
  }

  function campusMapHtml() {
    const { building, floor, spot } = currentMap();
    const info = spot?.info;
    const buildings = BUILDINGS.map(
      (b) =>
        `<button type="button" class="map-chip ${b.id === building.id ? "is-on" : ""}" data-building="${esc(b.id)}">${esc(b.name)}</button>`
    ).join("");
    const floors = building.floors
      .map(
        (f) =>
          `<button type="button" class="map-chip ${f.id === floor.id ? "is-on" : ""}" data-floor="${esc(f.id)}">${esc(f.label)}</button>`
      )
      .join("");
    const rooms = floor.rooms
      .map((room) => {
        const item = roomInfo(room);
        const on = roomKey(room) === mapPick.room ? "is-on" : "";
        return `<button type="button" class="map-room ${on}" data-room="${esc(roomKey(room))}" style="left:${room.x}%;top:${room.y}%;width:${room.w}%;height:${room.h}%"><strong>${esc(item.name)}</strong></button>`;
      })
      .join("");
    const detail = info
      ? `<p class="site-kicker">${esc(building.name)} · ${esc(floor.label)}</p>
         <h3>${esc(info.name)}</h3>
         <p><strong>${esc(info.where)}</strong> · ${esc(info.hours)}</p>
         <p>${esc(info.note)}</p>
         <ul class="site-list">${(info.more || []).map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
         ${info.id === "lib" && session ? `<a class="btn btn-primary" href="#library">Кітапхананы ашу</a>` : ""}`
      : `<p>Қабаттан орынды таңдаңыз.</p>`;
    return `<div class="campus-map" id="campus-map">
      <div class="map-toolbar">
        <div class="map-chips">${buildings}</div>
        <div class="map-chips">${floors}</div>
      </div>
      <div class="map-layout">
        <div class="floor-plan" aria-label="${esc(building.name)}, ${esc(floor.label)}">
          <span class="map-north" aria-hidden="true">N</span>
          ${rooms}
        </div>
        <aside class="map-detail">${detail}</aside>
      </div>
    </div>`;
  }

  function paintMap() {
    const node = document.getElementById("campus-map");
    if (!node) return;
    node.outerHTML = campusMapHtml();
    bindMapControls();
  }

  function selectRoom(id) {
    const found = findRoom(id);
    if (!found) return;
    mapPick = { building: found.building.id, floor: found.floor.id, room: id };
    paintMap();
  }

  function bindMapControls() {
    const map = document.getElementById("campus-map");
    if (!map) return;
    map.querySelectorAll("[data-building]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const building = BUILDINGS.find((b) => b.id === btn.dataset.building);
        if (!building) return;
        const floor = building.floors[0];
        mapPick = { building: building.id, floor: floor.id, room: roomKey(floor.rooms[0]) };
        paintMap();
      });
    });
    map.querySelectorAll("[data-floor]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const building = BUILDINGS.find((b) => b.id === mapPick.building);
        const floor = building?.floors.find((f) => f.id === btn.dataset.floor);
        if (!floor) return;
        mapPick = { building: building.id, floor: floor.id, room: roomKey(floor.rooms[0]) };
        paintMap();
      });
    });
    map.querySelectorAll("[data-room]").forEach((btn) => {
      btn.addEventListener("click", () => selectRoom(btn.dataset.room));
    });
  }

  function bindPlaceJumps() {
    document.querySelectorAll(".place-jump").forEach((btn) => {
      btn.addEventListener("click", () => {
        selectRoom(btn.dataset.room);
        document.getElementById("campus-map")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
  }

  function photoCard(color, title) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540"><rect width="960" height="540" fill="${color}"/><text x="48" y="290" font-family="Georgia, serif" font-size="46" fill="#f4f0e8">${title}</text></svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function defaultNews(now) {
    const at = now || Date.now();
    return [
      {
        id: "n1",
        title: "Кітапханада кешкі оқу залы ашылды",
        text: "Енді оқу залы 20:00-ге дейін жұмыс істейді. Кампус картасын өзіңізбен алыңыз.",
        author: "Молдабай Мэлс",
        photo: photoCard("#0d5c4b", "Кітапхана"),
        state: "ok",
        at: at - 86400_000 * 2,
      },
      {
        id: "n2",
        title: "Спорт кешенінде жүгіру күні",
        text: "Сенбі күні 09:00-де кампус жүгіруі өтеді. Тіркелу асхана жанындағы үстелде.",
        author: "Сұлтан Гүлнұр",
        photo: photoCard("#c45a27", "Спорт"),
        state: "ok",
        at: at - 86400_000,
      },
    ];
  }

  function defaultBooks() {
    return [
      { id: "b1", title: "Ақпараттық қауіпсіздік негіздері", author: "Оқу құралы", shelf: "АҚ-12", copies: 4 },
      { id: "b2", title: "Желілік технологиялар", author: "Оқу құралы", shelf: "ЖТ-04", copies: 3 },
      { id: "b3", title: "ISO/IEC 27001: қысқаша курс", author: "Әдістемелік нұсқау", shelf: "СТ-01", copies: 2 },
      { id: "b4", title: "Криптографияға кіріспе", author: "Оқу құралы", shelf: "КР-07", copies: 3 },
      { id: "b5", title: "Деректер қоры", author: "Оқу құралы", shelf: "ДҚ-03", copies: 5 },
      { id: "b6", title: "Қазақстан Республикасының Конституциясы", author: "Ресми мәтін", shelf: "ҚҰ-01", copies: 6 },
    ];
  }
  const PEOPLE = [
    ["abylai", "Абдрахманов Абылай", "student"],
    ["aslanbek", "Ғаниеков Асланбек", "student"],
    ["mukhan", "Ауез Мухан", "student"],
    ["nurai", "Жамбылова Нурай", "student"],
    ["sultan", "Касымов Сұлтан", "student"],
    ["ramazan", "Кушенов Рамазан", "teacher"],
    ["anuar", "Мартбек Ануар", "student"],
    ["nurtileu", "Махан Нұртілеу", "student"],
    ["mels", "Молдабай Мэлс", "registrar"],
    ["aruzhan", "Мүбиін Аружан", "student"],
    ["bekzat", "Мұхамедия Бекзат", "student"],
    ["amir", "Нурланов Әмир", "head"],
    ["bekzhan", "Оразбек Бекжан", "student"],
    ["nurasyl", "Рахатұлы Нұрасыл", "student"],
    ["dinara", "Сарсембаева Динара", "auditor"],
    ["abzal", "Сейдахмет Абзал", "guard"],
    ["abylaihan", "Серікбай Абылайхан", "student"],
    ["gulnur", "Сұлтан Гүлнұр", "dean"],
    ["nurlykhan", "Тангрибердиев Нурлыхан", "secadmin"],
    ["dauylbek", "Шагиров Дауылбек", "student"],
    ["shaken", "Шәкен Нұрай", "student"],
    ["kuanysh", "Шодыров Куаныш", "student"],
    ["akpan", "Ғани Ақпан", "student"],
  ];

  function seed() {
    const now = Date.now();
    const students = [];
    const users = [];
    const grades = [];
    let n = 0;
    PEOPLE.forEach(([login, name, role], i) => {
      const user = { id: "u" + (i + 1), login, name, role };
      if (role === "student") {
        n += 1;
        const id = "s" + n;
        user.studentId = id;
        students.push({
          id,
          name,
          iin: String(100000000000 + n),
          phone: "+7 700 000 " + String(n).padStart(2, "0") + " 00",
          group: n % 2 ? "АҚ-22-1" : "АҚ-21-2",
          faculty: "Ақпараттық технологиялар",
          status: login === "mukhan" ? "Академиялық демалыс" : "Оқуда",
          card: "RFID-" + String(10000 + n),
        });
        grades.push(
          { id: "g" + n + "a", studentId: id, course: "Ақпараттық қауіпсіздік негіздері", value: 70 + ((n * 5) % 26), state: "official" },
          { id: "g" + n + "b", studentId: id, course: "Желілік технологиялар", value: 68 + ((n * 4) % 28), state: "official" }
        );
      }
      users.push(user);
    });
    const guard = users.find((u) => u.role === "guard");
    return {
      users,
      students,
      grades,
      books: defaultBooks(),
      news: defaultNews(now),
      loans: [],
      passes: [
        { id: "p1", card: students[0].card, door: "Бас кіреберіс", result: "Өтті", at: now - 3600_000, author: guard.name },
        { id: "p2", card: students[2].card, door: "Кітапхана", result: "Бас тартылды", at: now - 7200_000, author: guard.name },
      ],
      pending: [],
      audit: [
        {
          id: "a0",
          at: now - 86400_000,
          actor: "Жүйе",
          role: "—",
          action: "Портал іске қосылды",
          detail: "Оқу деректері жүктелді",
        },
      ],
      fails: {},
    };
  }

  let db = loadDb();
  let session = loadSession();
  let flash = null;
  let siteNote = null;
  let loginStep = "password";
  let pendingUser = null;

  function loadDb() {
    try {
      const raw = sessionStorage.getItem(STORE);
      if (raw) {
        const saved = JSON.parse(raw);
        let patched = false;
        if (!saved.books) {
          saved.books = defaultBooks();
          saved.loans = saved.loans || [];
          patched = true;
        }
        if (!saved.news) {
          saved.news = defaultNews();
          patched = true;
        }
        if (patched) sessionStorage.setItem(STORE, JSON.stringify(saved));
        return saved;
      }
    } catch (_) {}
    const fresh = seed();
    sessionStorage.setItem(STORE, JSON.stringify(fresh));
    return fresh;
  }

  function saveDb() {
    sessionStorage.setItem(STORE, JSON.stringify(db));
  }

  function loadSession() {
    try {
      const raw = sessionStorage.getItem(SESSION);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function saveSession(next) {
    session = next;
    if (next) sessionStorage.setItem(SESSION, JSON.stringify(next));
    else sessionStorage.removeItem(SESSION);
  }

  function resetDemo() {
    db = seed();
    saveDb();
    saveSession(null);
    loginStep = "password";
    pendingUser = null;
    flash = { type: "ok", text: "Оқу деректері қалпына келтірілді." };
    location.hash = "#site";
    render();
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function fmt(ts) {
    return new Date(ts).toLocaleString("kk-KZ", { dateStyle: "medium", timeStyle: "short" });
  }

  function log(actor, action, detail) {
    db.audit.unshift({
      id: "a" + Date.now(),
      at: Date.now(),
      actor: actor?.name || "Белгісіз",
      role: actor ? ROLES[actor.role] || actor.role : "—",
      action,
      detail,
    });
    saveDb();
  }

  function studentById(id) {
    return db.students.find((s) => s.id === id);
  }

  function userByLogin(login) {
    return db.users.find((u) => u.login === login);
  }

  function route() {
    const hash = (location.hash || "#login").slice(1);
    const [page, id] = hash.split("/");
    return { page: page || "login", id };
  }

  function navFor(role) {
    const items = [{ href: "#home", id: "home", label: "Басты" }];
    if (role === "student") {
      items.push(
        { href: "#profile", id: "profile", label: "Жеке кабинет" },
        { href: "#grades", id: "grades", label: "Бағалар" },
        { href: "#pass", id: "pass", label: "Кампус картасы" }
      );
    }
    if (role === "teacher" || role === "dean") items.push({ href: "#grades", id: "grades", label: "Баға қою" });
    if (role === "registrar") {
      items.push(
        { href: "#registry", id: "registry", label: "Тіркеу" },
        { href: "#newsdesk", id: "newsdesk", label: "Жаңалықтар" }
      );
    }
    if (role === "head" || role === "dean") items.push({ href: "#approvals", id: "approvals", label: "Бекіту" });
    if (role === "guard") items.push({ href: "#acs", id: "acs", label: "Өткізу журналы" });
    if (role === "auditor" || role === "secadmin") items.push({ href: "#journal", id: "journal", label: "Оқиға журналы" });
    if (role === "secadmin") items.push({ href: "#accounts", id: "accounts", label: "Тіркелгілер" });
    items.push(
      { href: "#campus", id: "campus", label: "Кампус" },
      { href: "#library", id: "library", label: "Кітапхана" }
    );
    return items;
  }

  function guardPage(page) {
    const role = session.role;
    const allowed = new Set(navFor(role).map((n) => n.id));
    if (page === "profile" && role === "student") return true;
    return allowed.has(page);
  }

  function readPersonal(actor, studentId) {
    const student = studentById(studentId);
    if (!student) return { error: "Жазба табылмады." };
    if (actor.role === "student" && actor.studentId !== student.id) {
      log(actor, "Бөтен жазбаны оқу тоқтатылды", `${student.name} жазбасы сұралды`);
      return { error: "Бұл жазба сізге тиесілі емес. Сұрау журналда қалды." };
    }
    if (actor.role === "teacher" || actor.role === "guard" || actor.role === "auditor") {
      log(actor, "Жеке дерекке кіру тоқтатылды", "Бұл рөл қоймадағы ЖСН мен байланысты оқымайды");
      return { error: "Бұл рөл жеке дерек қоймасын ашпайды." };
    }
    const full = actor.role === "registrar" || actor.role === "head" || actor.role === "student";
    if (actor.role !== "student") {
      log(actor, "Жазба оқылды", student.name);
    }
    return {
      student: full
        ? student
        : { ...student, iin: "жасырылған", phone: "жасырылған" },
    };
  }

  function shell(title, body) {
    const page = route().page;
    const links = navFor(session.role)
      .map(
        (item) =>
          `<a href="${item.href}" class="${page === item.id ? "is-on" : ""}">${item.label}</a>`
      )
      .join("");
    const note = flash
      ? `<div class="note ${flash.type === "bad" ? "bad" : flash.type === "warn" ? "warn" : ""}">${esc(flash.text)}</div>`
      : "";
    flash = null;
    return `
      <div class="app-shell">
        <header class="topbar">
          <a class="brand" href="#home">
            <span class="brand-mark">SC</span>
            <span>
              <strong>Smart Campus</strong>
              <small>Оқу порталы</small>
            </span>
          </a>
          <div class="who">
            <div class="who-copy">
              <strong>${esc(session.name)}</strong>
              <span>${esc(ROLES[session.role])}</span>
            </div>
            <button class="btn btn-ghost" id="logout" type="button">Шығу</button>
          </div>
        </header>
        <div class="layout">
          <nav class="side-nav">${links}</nav>
          <main>
            <div class="page-head">
              <h1>${title}</h1>
            </div>
            ${note}
            ${body}
          </main>
        </div>
      </div>`;
  }

  function viewSite() {
    const enter = session
      ? `<a class="site-btn" href="#home">Порталға кіру</a>`
      : `<a class="site-btn" href="#login">Порталға кіру</a>`;
    return `
      <div class="site">
        <header class="site-bar">
          <a class="site-brand" href="#site">
            <span class="site-mark" aria-hidden="true">SC</span>
            <span>Smart Campus</span>
          </a>
          <nav class="site-pills">
            <a href="#about">Жоба</a>
            <a href="#grounds">Кампус</a>
            <a href="#news">Жаңалықтар</a>
            <a href="#contacts">Байланыс</a>
            <a href="index.html">Зертханалар</a>
          </nav>
        </header>

        <section class="site-hero">
          <div class="site-hero-copy">
            <p class="site-kicker">Жоғары оқу орнының цифрлық ортасы</p>
            <h1><span>КАМПУС</span><span>SMART CAMPUS</span></h1>
            <p>Студент, оқытушы, тіркеуші және күзет бір порталда жұмыс істейді. Жеке дерек өз рөлінде қалады.</p>
            <div class="site-cta">
              ${enter}
              <a class="site-btn site-btn-line" href="#about">Кампус туралы деректер</a>
              <a class="site-btn site-btn-line" href="index.html">← Зертханаларға</a>
            </div>
          </div>
        </section>

        <section class="site-block" id="about">
          <h2>Жоба</h2>
          <p>Кампус енді бір ғимарат емес. Ол оқу порталы, баға журналы, өткізу жүйесі және сәйкестендіру қызметі біріктірілген орта.</p>
          <ul class="site-list">
            <li>Жеке кабинет және өз бағасы</li>
            <li>Оқу мәртебесі екінші бекітумен</li>
            <li>RFID өткізу журналы</li>
            <li>Рөлге сай қолжетімділік</li>
          </ul>
        </section>

        <section class="site-block site-grounds" id="grounds">
          <h2>Кампус аумағы</h2>
          <p>Бас корпустың қабатын ашып, бөлмені басыңыз. Карточка да сол сипаттаманы ашады.</p>
          ${campusMapHtml()}
          <div class="site-cards site-cards-wide">
            ${PLACES.map(
              (p) => `<button type="button" class="place-jump" data-room="${esc(p.id)}">
                <h3>${esc(p.name)}</h3>
                <p><strong>${esc(p.where)}</strong> · ${esc(p.hours)}</p>
                <p>${esc(p.note)}</p>
                <span class="place-more">Толығырақ</span>
              </button>`
            ).join("")}
          </div>
        </section>

        <section class="site-block" id="news">
          <h2>Жаңалықтар</h2>
          <p>Қызық жаңалықты кез келген адам жібере алады. Тіркеуші қабылдаған соң ғана бетте көрінеді.</p>
          <div class="news-grid">
            ${publishedNews()}
          </div>
          <form class="news-form form" id="news-form">
            <h3>Жаңалық жіберу</h3>
            <label><span>Аты-жөні</span><input name="author" required value="${esc(session?.name || "")}"></label>
            <label><span>Тақырып</span><input name="title" required maxlength="80"></label>
            <label><span>Мәтін</span><textarea name="text" required maxlength="500" rows="4"></textarea></label>
            <label><span>Фото</span><input name="photo" type="file" accept="image/*" required></label>
            ${siteNote ? `<div class="note ${siteNote.type === "bad" ? "bad" : "ok"}">${esc(siteNote.text)}</div>` : ""}
            <button class="btn btn-primary" type="submit">Тіркеушіге жіберу</button>
          </form>
        </section>

        <section class="site-block" id="contacts">
          <h2>Байланыс</h2>
          <p>Портал оқу сценарийі. Нақты ұйымның жүйесі бұл бетте ашылмайды.</p>
          <div class="wifi-card">
            <p class="site-kicker">Кампус Wi‑Fi</p>
            <p><strong>Желі:</strong> ${esc(WIFI.ssid)}</p>
            <p><strong>Құпиясөз:</strong> ${esc(WIFI.password)}</p>
          </div>
          <p><strong>Автор:</strong> Сұлтан Гүлнұр</p>
          <div class="site-cta">
            ${enter}
            <a class="site-btn site-btn-line" href="#about">Кампус туралы деректер</a>
            <a class="site-btn site-btn-line" href="index.html">← Зертханаларға</a>
          </div>
        </section>
      </div>`;
  }

  function viewLogin() {
    const demos = db.users
      .map(
        (u) => `
        <button type="button" data-login="${esc(u.login)}">
          ${esc(u.name)}
          <small>${esc(ROLES[u.role])} · ${esc(u.login)}</small>
        </button>`
      )
      .join("");
    const mfa = loginStep === "mfa";
    return `
      <div class="login-wrap">
        <section class="login-card">
          <div class="login-copy">
            <small>Жоғары оқу орны</small>
            <h1>Smart Campus</h1>
            <p>Студент өз жазбасын көреді. Тіркеуші мәртебе жазады, бөлім басшысы бекітеді. Күзет өткізу журналын толтырады, өшірмейді.</p>
            <div class="demo-list">${demos}</div>
          </div>
          <form class="login-form form" id="login-form">
            <h2>${mfa ? "Екінші фактор" : "Кіру"}</h2>
            <p style="color:var(--muted)">Құпиясөз: ${PASSWORD}. MFA коды: ${MFA_CODE}.</p>
            ${
              flash
                ? `<div class="note ${flash.type === "bad" ? "bad" : "warn"}">${esc(flash.text)}</div>`
                : ""
            }
            ${
              mfa
                ? `<label><span>Растау коды</span><input id="mfa" inputmode="numeric" autocomplete="one-time-code" required></label>
                   <button class="btn btn-primary" type="submit">Сессияны ашу</button>`
                : `<label><span>Логин</span><input id="login" autocomplete="username" required></label>
                   <label><span>Құпиясөз</span><input id="password" type="password" autocomplete="current-password" required></label>
                   <button class="btn btn-primary" type="submit">Жалғастыру</button>`
            }
            <button class="btn btn-ghost" id="reset-demo" type="button">Деректерді қалпына келтіру</button>
            <div class="login-links">
              <a href="#site">← Кампус</a>
              <a href="index.html">← Зертханаларға</a>
            </div>
          </form>
        </section>
      </div>`;
  }

  function viewHome() {
    const student = session.role === "student" ? studentById(session.studentId) : null;
    const waiting = db.pending.filter((p) => p.state === "wait").length;
    const denied = db.audit.filter((a) => a.action.includes("тоқтат")).length;
    const cards = `
      <div class="stat-row">
        <div class="stat"><em>Рөл</em><strong>${esc(ROLES[session.role])}</strong></div>
        <div class="stat"><em>Бекіту күтуде</em><strong>${waiting}</strong></div>
        <div class="stat"><em>Тоқтатылған әрекет</em><strong>${denied}</strong></div>
      </div>`;
    const schedule = `
      <section class="panel">
        <h2>Бүгінгі сабақ</h2>
        <div class="schedule">
          <div class="lesson"><div><strong>Ақпараттық қауіпсіздік негіздері</strong><em>Кушенов Рамазан</em></div><em>10:00 · 314</em></div>
          <div class="lesson"><div><strong>Желілік технологиялар</strong><em>Кушенов Рамазан</em></div><em>12:00 · 210</em></div>
        </div>
      </section>`;
    const hint = {
      student: student
        ? `Сіздің мәртебеңіз: ${student.status}. Аты-жөні мен байланысты өзгерту үшін өтінім жіберіңіз.`
        : "",
      teacher: "Баға бірден жазылады және студентке сол сәтте көрінеді.",
      dean: "Сіз бағаны бірден қоясыз және мәртебе өтінімін бекітесіз.",
      registrar: "Студенттің дерек өтінімін және жаңалықты сіз қабылдайсыз. Оқу мәртебесі деканды немесе бөлім басшысын күтеді.",
      head: "Бекітілмеген жазба ресми емес. Жазған адам мен бекіткен адам әртүрлі болуы керек.",
      guard: "Өткізу журналына жаңа жол қосылады. Өшіру батырмасы жоқ.",
      auditor: "Журналды оқуға болады. Жазу және бекіту бұл рөлде жоқ.",
      secadmin: "Тіркелгілер мен MFA күйі. Өзіңізге қосымша рөл беру жоқ.",
    }[session.role];
    return shell(
      "Басты бет",
      `${cards}<div class="grid-2">${schedule}<section class="panel"><h2>Сіздің контур</h2><p>${esc(hint)}</p></section></div>`
    );
  }

  function viewProfile(id) {
    const target = id || session.studentId;
    const result = readPersonal(session, target);
    if (result.error) {
      return shell("Жеке кабинет", `<section class="panel"><div class="note bad">${esc(result.error)}</div></section>`);
    }
    const s = result.student;
    const own = session.role === "student" && session.studentId === s.id;
    const requests = db.pending
      .filter((p) => p.kind === "profile" && p.studentId === s.id)
      .map(
        (p) => `<tr>
          <td>${esc(p.nameFrom)} → ${esc(p.nameTo)}</td>
          <td>${esc(p.phoneFrom)} → ${esc(p.phoneTo)}</td>
          <td>${esc(p.reason)}</td>
          <td>${p.state === "wait" ? "Күтуде" : p.state === "ok" ? "Бекітілді" : "Қайтарылды"}</td>
        </tr>`
      )
      .join("");
    const form = own
      ? `<section class="panel">
          <h2>Деректі өзгерту өтінімі</h2>
          <form class="form" id="profile-form">
            <label><span>Аты-жөні</span><input name="name" required value="${esc(s.name)}"></label>
            <label><span>Байланыс</span><input name="phone" required value="${esc(s.phone)}"></label>
            <label><span>Себеп</span><textarea name="reason" required></textarea></label>
            <button class="btn btn-primary" type="submit">Өтінім жіберу</button>
          </form>
          <p class="note">ЖСН, топ және мәртебе осы формадан өзгермейді. Өтінімді тіркеуші бекітеді.</p>
        </section>
        <section class="panel">
          <h2>Менің өтінімдерім</h2>
          <table><thead><tr><th>Аты</th><th>Байланыс</th><th>Себеп</th><th>Күй</th></tr></thead><tbody>${requests || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>`
      : "";
    return shell(
      "Жеке кабинет",
      `<div class="stack">
        <section class="panel">
          <dl class="field-row">
            <dt>Аты-жөні</dt><dd>${esc(s.name)}</dd>
            <dt>ЖСН</dt><dd>${esc(s.iin)}</dd>
            <dt>Байланыс</dt><dd>${esc(s.phone)}</dd>
            <dt>Топ</dt><dd>${esc(s.group)}</dd>
            <dt>Факультет</dt><dd>${esc(s.faculty)}</dd>
            <dt>Мәртебе</dt><dd><span class="pill">${esc(s.status)}</span></dd>
            <dt>Карта</dt><dd>${esc(s.card)}</dd>
          </dl>
        </section>
        ${form}
      </div>`
    );
  }

  function viewGrades() {
    if (session.role === "student") {
      const rows = db.grades
        .filter((g) => g.studentId === session.studentId)
        .map(
          (g) => `<tr><td>${esc(g.course)}</td><td>${esc(g.value)}</td></tr>`
        )
        .join("");
      return shell(
        "Менің бағаларым",
        `<section class="panel"><table><thead><tr><th>Курс</th><th>Баға</th></tr></thead><tbody>${rows}</tbody></table></section>`
      );
    }
    const rows = db.students
      .map((s) => {
        const grade = db.grades.find(
          (g) => g.studentId === s.id && g.course === "Ақпараттық қауіпсіздік негіздері"
        );
        return `<tr>
          <td>${esc(s.name)}</td>
          <td>${esc(s.group)}</td>
          <td>${grade ? esc(grade.value) : "—"}</td>
          <td>
            <form class="actions" data-grade="${esc(s.id)}">
              <input name="value" type="number" min="0" max="100" value="${grade ? esc(grade.value) : ""}" style="width:5.5rem" required>
              <button class="btn btn-primary" type="submit">Сақтау</button>
            </form>
          </td>
        </tr>`;
      })
      .join("");
    return shell(
      "Баға қою",
      `<section class="panel">
        <p style="margin-bottom:0.8rem;color:var(--muted)">Курс: Ақпараттық қауіпсіздік негіздері. Баға сақталған сәтте ресми болады. ЖСН бұл экранда жоқ.</p>
        <table><thead><tr><th>Студент</th><th>Топ</th><th>Баға</th><th></th></tr></thead><tbody>${rows}</tbody></table>
      </section>`
    );
  }

  function viewRegistry() {
    const options = STATUSES.map((s) => `<option>${esc(s)}</option>`).join("");
    const students = db.students
      .map((s) => `<option value="${esc(s.id)}">${esc(s.name)} · ${esc(s.status)}</option>`)
      .join("");
    const rows = db.students
      .map(
        (s) => `<tr>
          <td>${esc(s.name)}</td>
          <td>${esc(s.iin)}</td>
          <td>${esc(s.phone)}</td>
          <td>${esc(s.group)}</td>
          <td><span class="pill">${esc(s.status)}</span></td>
        </tr>`
      )
      .join("");
    const dataReqs = db.pending
      .filter((p) => p.kind === "profile")
      .map((p) => {
        const buttons =
          p.state === "wait"
            ? `<div class="actions">
                <button class="btn btn-primary" data-approve="${esc(p.id)}" type="button">Бекіту</button>
                <button class="btn btn-ghost" data-reject="${esc(p.id)}" type="button">Қайтару</button>
              </div>`
            : p.state === "ok"
              ? "Бекітілді"
              : "Қайтарылды";
        return `<tr>
          <td>${esc(studentById(p.studentId)?.name || p.nameFrom)}</td>
          <td>${esc(p.nameFrom)} → ${esc(p.nameTo)}<br>${esc(p.phoneFrom)} → ${esc(p.phoneTo)}</td>
          <td>${esc(p.reason)}</td>
          <td>${buttons}</td>
        </tr>`;
      })
      .join("");
    const mine = db.pending
      .filter((p) => p.kind === "status")
      .map(
        (p) => `<tr>
          <td>${esc(studentById(p.studentId)?.name)}</td>
          <td>${esc(p.from)} → ${esc(p.to)}</td>
          <td>${esc(p.reason)}</td>
          <td>${p.state === "wait" ? "Күтуде" : p.state === "ok" ? "Бекітілді" : "Қайтарылды"}</td>
        </tr>`
      )
      .join("");
    return shell(
      "Тіркеу",
      `<div class="stack">
        <section class="panel">
          <h2>Жаңа студент</h2>
          <form class="form form-grid" id="enroll-form">
            <label><span>Аты-жөні</span><input name="name" required placeholder="Тегі Аты"></label>
            <label><span>Логин</span><input name="login" required placeholder="latin" autocomplete="off"></label>
            <label><span>ЖСН</span><input name="iin" required inputmode="numeric" maxlength="12" placeholder="12 сан"></label>
            <label><span>Байланыс</span><input name="phone" required placeholder="+7 700 000 00 00"></label>
            <label><span>Топ</span><input name="group" required placeholder="АҚ-22-1"></label>
            <label><span>Мәртебе</span><select name="status">${options}</select></label>
            <button class="btn btn-primary" type="submit">Тіркеу</button>
          </form>
          <p class="note">Жаңа студент сол құпиясөзбен және MFA кодымен кіре алады. Жеке дерек журналданады.</p>
        </section>
        <section class="panel">
          <h2>Мәртебені өзгерту</h2>
          <form class="form" id="status-form">
            <label><span>Студент</span><select name="student">${students}</select></label>
            <label><span>Жаңа мәртебе</span><select name="status">${options}</select></label>
            <label><span>Себеп</span><textarea name="reason" required></textarea></label>
            <button class="btn btn-primary" type="submit">Өтінім жіберу</button>
          </form>
          <p class="note">Бекітілмеген өзгеріс ресми жазбаны ауыстырмайды.</p>
        </section>
        <section class="panel"><table><thead><tr><th>Студент</th><th>ЖСН</th><th>Байланыс</th><th>Топ</th><th>Мәртебе</th></tr></thead><tbody>${rows}</tbody></table></section>
        <section class="panel"><h2>Студент деректерінің өтінімі</h2><table><thead><tr><th>Студент</th><th>Өзгеріс</th><th>Себеп</th><th></th></tr></thead><tbody>${dataReqs || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table></section>
        <section class="panel"><h2>Мәртебе өтінімдері</h2><table><thead><tr><th>Студент</th><th>Өзгеріс</th><th>Себеп</th><th>Күй</th></tr></thead><tbody>${mine || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table></section>
      </div>`
    );
  }

  function viewApprovals() {
    const rows = db.pending
      .filter((p) => p.kind !== "profile")
      .map((p) => {
        const who = p.kind === "status" ? studentById(p.studentId)?.name : `${studentById(p.studentId)?.name} · баға`;
        const change = p.kind === "status" ? `${p.from} → ${p.to}` : `${p.from} → ${p.to}`;
        const buttons =
          p.state === "wait"
            ? `<div class="actions">
                <button class="btn btn-primary" data-approve="${esc(p.id)}" type="button">Бекіту</button>
                <button class="btn btn-ghost" data-reject="${esc(p.id)}" type="button">Қайтару</button>
              </div>`
            : p.state === "ok"
              ? "Бекітілді"
              : "Қайтарылды";
        return `<tr><td>${esc(who)}</td><td>${esc(change)}</td><td>${esc(p.reason)}</td><td>${esc(p.authorName)}</td><td>${buttons}</td></tr>`;
      })
      .join("");
    return shell(
      "Бекіту",
      `<section class="panel"><table><thead><tr><th>Нысан</th><th>Өзгеріс</th><th>Себеп</th><th>Автор</th><th></th></tr></thead><tbody>${rows || "<tr><td colspan='5'>Кезек бос</td></tr>"}</tbody></table></section>`
    );
  }

  function viewAcs() {
    const cards = db.students
      .map((s) => `<option value="${esc(s.card)}">${esc(s.name)} · ${esc(s.card)}</option>`)
      .join("");
    const doors = DOORS.map((d) => `<option>${esc(d)}</option>`).join("");
    const rows = db.passes
      .map(
        (p) => `<tr><td>${fmt(p.at)}</td><td>${esc(p.card)}</td><td>${esc(p.door)}</td><td>${esc(p.result)}</td><td>${esc(p.author)}</td></tr>`
      )
      .join("");
    return shell(
      "Өткізу журналы",
      `<div class="stack">
        <section class="panel">
          <form class="form" id="pass-form">
            <label><span>Карта</span><select name="card">${cards}</select></label>
            <label><span>Есік</span><select name="door">${doors}</select></label>
            <label><span>Нәтиже</span><select name="result"><option>Өтті</option><option>Бас тартылды</option></select></label>
            <button class="btn btn-primary" type="submit">Журналға жазу</button>
          </form>
          <p class="note">Күзет журналды толтырады. Жолды өшіру бұл рөлде жоқ.</p>
        </section>
        <section class="panel"><table><thead><tr><th>Уақыт</th><th>Карта</th><th>Есік</th><th>Нәтиже</th><th>Автор</th></tr></thead><tbody>${rows}</tbody></table></section>
      </div>`
    );
  }

  function viewPass() {
    const student = studentById(session.studentId);
    const rows = db.passes
      .filter((p) => p.card === student.card)
      .map((p) => `<tr><td>${fmt(p.at)}</td><td>${esc(p.door)}</td><td>${esc(p.result)}</td></tr>`)
      .join("");
    return shell(
      "Кампус картасы",
      `<section class="panel">
        <dl class="field-row"><dt>Карта</dt><dd>${esc(student.card)}</dd><dt>Күй</dt><dd><span class="pill ok">Белсенді</span></dd></dl>
        <table><thead><tr><th>Уақыт</th><th>Есік</th><th>Нәтиже</th></tr></thead><tbody>${rows || "<tr><td colspan='3'>Жазба жоқ</td></tr>"}</tbody></table>
      </section>`
    );
  }

  function viewJournal() {
    const rows = db.audit
      .map(
        (a) => `<tr><td>${fmt(a.at)}</td><td>${esc(a.actor)}</td><td>${esc(a.role)}</td><td>${esc(a.action)}</td><td>${esc(a.detail)}</td></tr>`
      )
      .join("");
    return shell(
      "Оқиға журналы",
      `<section class="panel">
        <p class="note">Журнал бөлек сақталады. Оны жазған адам бұл экраннан өшіре алмайды.</p>
        <table><thead><tr><th>Уақыт</th><th>Автор</th><th>Рөл</th><th>Әрекет</th><th>Мәлімет</th></tr></thead><tbody>${rows}</tbody></table>
      </section>`
    );
  }

  function freeCopies(book) {
    const taken = (db.loans || []).filter((l) => l.bookId === book.id && !l.back).length;
    return book.copies - taken;
  }

  function viewCampus() {
    const cards = PLACES.map(
      (p) => `<button type="button" class="place-card place-jump" data-room="${esc(p.id)}">
        <h3>${esc(p.name)}</h3>
        <p><strong>${esc(p.where)}</strong></p>
        <p>${esc(p.hours)}</p>
        <p>${esc(p.note)}</p>
        <span class="place-more">Толығырақ</span>
      </button>`
    ).join("");
    return shell(
      "Кампус",
      `<section class="panel">
        <p class="note">Бас корпустың қабатын ашып, бөлмені басыңыз. Кітапханадан кітап алу осы порталда жазылады.</p>
        ${campusMapHtml()}
        <div class="place-grid">${cards}</div>
      </section>`
    );
  }

  function viewLibrary() {
    const mine = (db.loans || []).filter((l) => l.userId === session.id && !l.back);
    const rows = db.books
      .map((b) => {
        const left = freeCopies(b);
        const held = mine.some((l) => l.bookId === b.id);
        const action = held
          ? `<button class="btn btn-ghost" type="button" data-return="${esc(b.id)}">Қайтару</button>`
          : left > 0
            ? `<button class="btn btn-primary" type="button" data-borrow="${esc(b.id)}">Алу</button>`
            : `<span class="pill wait">Жоқ</span>`;
        return `<tr>
          <td>${esc(b.title)}</td>
          <td>${esc(b.author)}</td>
          <td>${esc(b.shelf)}</td>
          <td>${left} / ${b.copies}</td>
          <td>${action}</td>
        </tr>`;
      })
      .join("");
    const ownRows = mine
      .map((l) => {
        const book = db.books.find((b) => b.id === l.bookId);
        return `<tr><td>${esc(book?.title || "—")}</td><td>${fmt(l.at)}</td></tr>`;
      })
      .join("");
    return shell(
      "Кітапхана",
      `<div class="stack">
        <section class="panel">
          <p class="note">1-ғимарат, 2-қабат · 09:00–18:00. Бір адам бір кітаптан бір дана алады.</p>
          <table><thead><tr><th>Кітап</th><th>Автор</th><th>Сөре</th><th>Бос</th><th></th></tr></thead><tbody>${rows}</tbody></table>
        </section>
        <section class="panel">
          <h2>Мендегі кітаптар</h2>
          <table><thead><tr><th>Кітап</th><th>Алынған уақыт</th></tr></thead><tbody>${ownRows || "<tr><td colspan='2'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
      </div>`
    );
  }

  function publishedNews() {
    const items = (db.news || []).filter((n) => n.state === "ok");
    if (!items.length) return `<p>Әзірге жарияланған жаңалық жоқ.</p>`;
    return items
      .map(
        (n) => `<article class="news-card">
          <img src="${n.photo}" alt="">
          <h3>${esc(n.title)}</h3>
          <p>${esc(n.text)}</p>
          <p class="news-meta">${esc(n.author)} · ${fmt(n.at)}</p>
        </article>`
      )
      .join("");
  }

  function viewNewsdesk() {
    const waiting = (db.news || []).filter((n) => n.state === "wait");
    const rows = waiting.length
      ? waiting
          .map(
            (n) => `<article class="news-card">
              <img src="${n.photo}" alt="">
              <h3>${esc(n.title)}</h3>
              <p>${esc(n.text)}</p>
              <p class="news-meta">${esc(n.author)} · ${fmt(n.at)}</p>
              <div class="actions">
                <button class="btn btn-primary" type="button" data-news-ok="${esc(n.id)}">Жариялау</button>
                <button class="btn btn-ghost" type="button" data-news-no="${esc(n.id)}">Қайтару</button>
              </div>
            </article>`
          )
          .join("")
      : `<p class="note">Күтудегі жаңалық жоқ.</p>`;
    return shell(
      "Жаңалықтар",
      `<section class="panel">
        <p class="note">Жаңалықты кез келген адам сайттан жібереді. Жариялауды тек тіркеуші жасайды. Өз жібергеніңізді өзіңіз жарияламайсыз.</p>
        <div class="news-grid">${rows}</div>
      </section>`
    );
  }

  function viewAccounts() {
    const rows = db.users
      .map(
        (u) => `<tr><td>${esc(u.name)}</td><td>${esc(u.login)}</td><td>${esc(ROLES[u.role])}</td><td><span class="pill ok">MFA қосулы</span></td></tr>`
      )
      .join("");
    return shell(
      "Тіркелгілер",
      `<section class="panel">
        <p class="note">Қауіпсіздік әкімшісі тіркелгіні көреді. Өзіне жаңа рөл беру және қойманы ашу бұл экранда жоқ.</p>
        <table><thead><tr><th>Аты</th><th>Логин</th><th>Рөл</th><th>Кіру</th></tr></thead><tbody>${rows}</tbody></table>
      </section>`
    );
  }

  function render() {
    const app = document.getElementById("app");
    const { page, id } = route();
    const publicPage = new Set(["site", "about", "grounds", "news", "contacts"]);
    if (publicPage.has(page) || (!session && page !== "login")) {
      app.innerHTML = viewSite();
      bindSite();
      if (publicPage.has(page) && page !== "site") {
        requestAnimationFrame(() => {
          const el = document.getElementById(page);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      return;
    }
    if (!session || page === "login") {
      if (page !== "login") location.hash = "#login";
      app.innerHTML = viewLogin();
      bindLogin();
      return;
    }
    if (!guardPage(page)) {
      flash = { type: "bad", text: "Бұл бөлім сіздің рөліңізге ашық емес." };
      log(session, "Бөлімге кіру тоқтатылды", page);
      app.innerHTML = viewHome();
      bindApp();
      return;
    }
    const views = {
      home: () => viewHome(),
      profile: () => viewProfile(id),
      grades: () => viewGrades(),
      registry: () => viewRegistry(),
      approvals: () => viewApprovals(),
      acs: () => viewAcs(),
      pass: () => viewPass(),
      campus: () => viewCampus(),
      library: () => viewLibrary(),
      journal: () => viewJournal(),
      newsdesk: () => viewNewsdesk(),
      accounts: () => viewAccounts(),
    };
    app.innerHTML = (views[page] || viewHome)();
    bindApp();
  }

  function bindLogin() {
    document.querySelectorAll("[data-login]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const input = document.getElementById("login");
        if (input) {
          input.value = btn.dataset.login;
          document.getElementById("password").focus();
        }
      });
    });
    document.getElementById("reset-demo")?.addEventListener("click", resetDemo);
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (loginStep === "mfa") {
        const code = document.getElementById("mfa").value.trim();
        if (code !== MFA_CODE) {
          log(pendingUser, "MFA сәтсіз", "Қате код");
          flash = { type: "bad", text: "Код қате. Құпиясөздің өзі сессия ашпайды." };
          render();
          return;
        }
        saveSession({
          id: pendingUser.id,
          login: pendingUser.login,
          name: pendingUser.name,
          role: pendingUser.role,
          studentId: pendingUser.studentId || null,
        });
        log(pendingUser, "Кіру сәтті", "MFA расталды");
        pendingUser = null;
        loginStep = "password";
        flash = null;
        location.hash = "#home";
        render();
        return;
      }
      const login = document.getElementById("login").value.trim();
      const password = document.getElementById("password").value;
      const bucket = db.fails[login] || { n: 0, until: 0 };
      if (bucket.until && Date.now() < bucket.until) {
        flash = { type: "bad", text: "Кіру сұрауының шегі толды. Біраздан кейін қайталаңыз." };
        render();
        return;
      }
      const user = userByLogin(login);
      if (!user || password !== PASSWORD) {
        bucket.n += 1;
        if (bucket.n >= 5) {
          bucket.until = Date.now() + 30_000;
          bucket.n = 0;
        }
        db.fails[login] = bucket;
        log({ name: login || "Бос логин", role: "—"}, "Кіру сәтсіз", "Құпиясөз немесе логин қате");
        saveDb();
        flash = { type: "bad", text: "Логин немесе құпиясөз қате." };
        render();
        return;
      }
      db.fails[login] = { n: 0, until: 0 };
      saveDb();
      pendingUser = user;
      loginStep = "mfa";
      flash = { type: "warn", text: "Құпиясөз қабылданды. Сессия екінші факторсыз ашылмайды." };
      render();
    });
    flash = null;
  }

  function bindApp() {
    bindMapControls();
    bindPlaceJumps();
    document.getElementById("logout")?.addEventListener("click", () => {
      log(session, "Шығу", session.login);
      saveSession(null);
      loginStep = "password";
      location.hash = "#site";
      render();
    });
    document.getElementById("enroll-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "registrar") {
        flash = { type: "bad", text: "Студентті тек тіркеуші тіркейді." };
        render();
        return;
      }
      const data = new FormData(e.target);
      const name = String(data.get("name") || "").trim();
      const login = String(data.get("login") || "").trim().toLowerCase();
      const iin = String(data.get("iin") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const group = String(data.get("group") || "").trim();
      const status = String(data.get("status") || "Оқуда");
      if (!/^[a-z][a-z0-9._-]{2,20}$/.test(login)) {
        flash = { type: "bad", text: "Логин латын әрпінен басталып, 3–21 таңбадан тұруы керек." };
        render();
        return;
      }
      if (!/^\d{12}$/.test(iin)) {
        flash = { type: "bad", text: "ЖСН 12 саннан тұруы керек." };
        render();
        return;
      }
      if (db.users.some((u) => u.login === login)) {
        flash = { type: "bad", text: "Бұл логин бос емес." };
        render();
        return;
      }
      if (db.students.some((s) => s.iin === iin)) {
        flash = { type: "bad", text: "Бұл ЖСН бұрын тіркелген." };
        render();
        return;
      }
      const id = "s" + Date.now();
      const card = "RFID-" + String(20000 + db.students.length + 1);
      db.students.push({
        id,
        name,
        iin,
        phone,
        group,
        faculty: "Ақпараттық технологиялар",
        status: STATUSES.includes(status) ? status : "Оқуда",
        card,
      });
      db.users.push({
        id: "u" + Date.now(),
        login,
        name,
        role: "student",
        studentId: id,
      });
      log(session, "Студент тіркелді", `${name} · ${login} · ${group}`);
      saveDb();
      flash = { type: "ok", text: `${name} тіркелді. Кіру: ${login}. Карта: ${card}.` };
      render();
    });
    document.getElementById("profile-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "student") return;
      const student = studentById(session.studentId);
      const data = new FormData(e.target);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const reason = String(data.get("reason") || "").trim();
      if (!name || !phone || !reason) return;
      if (name === student.name && phone === student.phone) {
        flash = { type: "warn", text: "Дерек өзгермеген." };
        render();
        return;
      }
      if (db.pending.some((p) => p.kind === "profile" && p.studentId === student.id && p.state === "wait")) {
        flash = { type: "warn", text: "Ашық өтінім бар. Тіркеуші жауабын күтіңіз." };
        render();
        return;
      }
      db.pending.unshift({
        id: "q" + Date.now(),
        kind: "profile",
        studentId: student.id,
        nameFrom: student.name,
        nameTo: name,
        phoneFrom: student.phone,
        phoneTo: phone,
        from: student.phone,
        to: phone,
        reason,
        authorId: session.id,
        authorName: session.name,
        state: "wait",
      });
      log(session, "Дерек өтінімі", `${student.name}: байланыс немесе аты-жөні`);
      saveDb();
      flash = { type: "ok", text: "Өтінім тіркеушіге жіберілді. Бекітілгенше дерек өзгермейді." };
      render();
    });
    document.getElementById("status-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const student = studentById(data.get("student"));
      const next = data.get("status");
      const reason = String(data.get("reason") || "").trim();
      if (!reason) return;
      if (student.status === next) {
        flash = { type: "warn", text: "Мәртебе өзгермеген." };
        render();
        return;
      }
      db.pending.unshift({
        id: "q" + Date.now(),
        kind: "status",
        studentId: student.id,
        from: student.status,
        to: next,
        reason,
        authorId: session.id,
        authorName: session.name,
        state: "wait",
      });
      log(session, "Мәртебе өтінімі", `${student.name}: ${student.status} → ${next}`);
      saveDb();
      flash = { type: "ok", text: "Өтінім жіберілді. Ресми мәртебе бекітілгенше өзгермейді." };
      render();
    });
    document.querySelectorAll("[data-grade]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const studentId = form.dataset.grade;
        const value = Number(new FormData(form).get("value"));
        if (Number.isNaN(value) || value < 0 || value > 100) return;
        const course = "Ақпараттық қауіпсіздік негіздері";
        const current = db.grades.find((g) => g.studentId === studentId && g.course === course);
        const student = studentById(studentId);
        if (!current) {
          db.grades.push({ id: "g" + Date.now(), studentId, course, value, state: "official" });
          log(session, "Баға қойылды", `${student.name}: ${value}`);
          saveDb();
          flash = { type: "ok", text: "Баға қойылды." };
          render();
          return;
        }
        if (current.value === value) {
          flash = { type: "warn", text: "Баға өзгермеген." };
          render();
          return;
        }
        const previous = current.value;
        current.value = value;
        current.state = "official";
        log(session, "Баға қойылды", `${student.name}: ${previous} → ${value}`);
        saveDb();
        flash = { type: "ok", text: "Баға қойылды." };
        render();
      });
    });
    document.querySelectorAll("[data-approve]").forEach((btn) => {
      btn.addEventListener("click", () => decide(btn.dataset.approve, "ok"));
    });
    document.querySelectorAll("[data-reject]").forEach((btn) => {
      btn.addEventListener("click", () => decide(btn.dataset.reject, "no"));
    });
    document.querySelectorAll("[data-borrow]").forEach((btn) => {
      btn.addEventListener("click", () => borrowBook(btn.dataset.borrow));
    });
    document.querySelectorAll("[data-return]").forEach((btn) => {
      btn.addEventListener("click", () => returnBook(btn.dataset.return));
    });
    document.querySelectorAll("[data-news-ok]").forEach((btn) => {
      btn.addEventListener("click", () => decideNews(btn.dataset.newsOk, "ok"));
    });
    document.querySelectorAll("[data-news-no]").forEach((btn) => {
      btn.addEventListener("click", () => decideNews(btn.dataset.newsNo, "no"));
    });
    document.getElementById("pass-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      db.passes.unshift({
        id: "p" + Date.now(),
        card: data.get("card"),
        door: data.get("door"),
        result: data.get("result"),
        at: Date.now(),
        author: session.name,
      });
      log(session, "Өткізу жазбасы", `${data.get("card")} · ${data.get("door")} · ${data.get("result")}`);
      saveDb();
      flash = { type: "ok", text: "Журналға жазылды." };
      render();
    });
  }

  function borrowBook(bookId) {
    const book = db.books.find((b) => b.id === bookId);
    if (!book) return;
    if (freeCopies(book) <= 0) {
      flash = { type: "bad", text: "Бұл кітаптың бос данасы жоқ." };
      render();
      return;
    }
    if (db.loans.some((l) => l.bookId === bookId && l.userId === session.id && !l.back)) {
      flash = { type: "warn", text: "Бұл кітап сізде бар." };
      render();
      return;
    }
    db.loans.unshift({
      id: "l" + Date.now(),
      bookId,
      userId: session.id,
      name: session.name,
      at: Date.now(),
      back: null,
    });
    log(session, "Кітап алынды", book.title);
    saveDb();
    flash = { type: "ok", text: `«${book.title}» сізге жазылды.` };
    render();
  }

  function returnBook(bookId) {
    const loan = db.loans.find((l) => l.bookId === bookId && l.userId === session.id && !l.back);
    const book = db.books.find((b) => b.id === bookId);
    if (!loan) return;
    loan.back = Date.now();
    log(session, "Кітап қайтарылды", book?.title || bookId);
    saveDb();
    flash = { type: "ok", text: "Кітап қайтарылды." };
    render();
  }

  function decide(id, state) {
    const item = db.pending.find((p) => p.id === id);
    if (!item || item.state !== "wait") return;
    if (item.authorId === session.id) {
      log(session, "Бекіту тоқтатылды", "Жазған адам өз өтінімін бекіте алмайды");
      flash = { type: "bad", text: "Жазған адам бекітпейді." };
      render();
      return;
    }
    const allowed =
      (item.kind === "profile" && session.role === "registrar") ||
      (item.kind !== "profile" && (session.role === "head" || session.role === "dean"));
    if (!allowed) {
      log(session, "Бекіту тоқтатылды", "Бекіту құқығы жоқ");
      flash = { type: "bad", text: "Бұл өтінімді бекіту сіздің рөліңізде жоқ." };
      render();
      return;
    }
    item.state = state;
    if (state === "ok" && item.kind === "profile") {
      const student = studentById(item.studentId);
      if (student) {
        student.name = item.nameTo;
        student.phone = item.phoneTo;
      }
      const owner = db.users.find((u) => u.studentId === item.studentId);
      if (owner) owner.name = item.nameTo;
    }
    if (state === "ok" && item.kind === "status") {
      const student = studentById(item.studentId);
      student.status = item.to;
    }
    if (state === "ok" && item.kind === "grade") {
      const grade = db.grades.find((g) => g.studentId === item.studentId && g.course === item.course);
      if (grade) {
        grade.value = item.to;
        grade.state = "official";
      }
    }
    if (state === "no" && item.kind === "grade") {
      const grade = db.grades.find((g) => g.studentId === item.studentId && g.course === item.course);
      if (grade) grade.state = "official";
    }
    log(session, state === "ok" ? "Бекітілді" : "Қайтарылды", `${item.kind}: ${item.from} → ${item.to}`);
    saveDb();
    flash = { type: "ok", text: state === "ok" ? "Бекітілді. Журналда екі автор бар." : "Өтінім қайтарылды." };
    render();
  }

  function readPhoto(file) {
    return new Promise((resolve, reject) => {
      if (!file || !String(file.type || "").startsWith("image/")) {
        reject(new Error("photo"));
        return;
      }
      const img = new Image();
      const url = URL.createObjectURL(file);
      img.onload = () => {
        const max = 720;
        const scale = Math.min(1, max / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(1, Math.round(img.width * scale));
        canvas.height = Math.max(1, Math.round(img.height * scale));
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL("image/jpeg", 0.72));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("photo"));
      };
      img.src = url;
    });
  }

  function bindSite() {
    bindMapControls();
    bindPlaceJumps();
    document.getElementById("news-form")?.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const author = String(data.get("author") || "").trim();
      const title = String(data.get("title") || "").trim();
      const text = String(data.get("text") || "").trim();
      const file = data.get("photo");
      if (!author || !title || !text) return;
      let photo = "";
      try {
        photo = await readPhoto(file);
      } catch (_) {
        siteNote = { type: "bad", text: "Фотоны оқу мүмкін болмады. Сурет файлын таңдаңыз." };
        render();
        return;
      }
      db.news = db.news || [];
      db.news.unshift({
        id: "n" + Date.now(),
        title,
        text,
        author,
        photo,
        state: "wait",
        at: Date.now(),
      });
      log(session || { name: author, role: "қонақ" }, "Жаңалық жіберілді", title);
      try {
        saveDb();
      } catch (_) {
        db.news.shift();
        siteNote = { type: "bad", text: "Фото тым үлкен. Кішірек сурет жіберіңіз." };
        render();
        return;
      }
      siteNote = { type: "ok", text: "Жіберілді. Тіркеуші қабылдаған соң жаңалық бетте шығады." };
      render();
    });
  }

  function decideNews(id, state) {
    if (session.role !== "registrar") return;
    const item = (db.news || []).find((n) => n.id === id);
    if (!item || item.state !== "wait") return;
    if (item.author === session.name) {
      log(session, "Жаңалық бекітуі тоқтатылды", "Өз жаңалығын жариялауға болмайды");
      flash = { type: "bad", text: "Өз жіберген жаңалығыңызды өзіңіз жарияламайсыз." };
      render();
      return;
    }
    item.state = state;
    log(session, state === "ok" ? "Жаңалық жарияланды" : "Жаңалық қайтарылды", item.title);
    saveDb();
    flash = { type: "ok", text: state === "ok" ? "Жаңалық сайтта көрінеді." : "Жаңалық қайтарылды." };
    render();
  }

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#site";
  render();
})();
