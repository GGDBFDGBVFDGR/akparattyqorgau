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
    dean: "Декан",
    dba: "Дерекқор әкімшісі",
    building: "Ғимарат әкімшісі",
    sysadmin: "Жүйелік әкімші",
  };

  const STATUSES = ["Оқуда", "Академиялық демалыс", "Оқудан шығарылды", "Түлек"];
  const LESSONS = [
    { course: "Ақпараттық қауіпсіздік негіздері", teacher: "Кушенов Рамазан", when: "10:00", room: "314" },
    { course: "Желілік технологиялар", teacher: "Кушенов Рамазан", when: "12:00", room: "210" },
  ];
  const PLACES = [
    {
      id: "lib",
      name: "Кітапхана",
      where: "Бас корпус, 2-қабат",
      hours: "09:00–18:00",
      note: "Оқу залы және кітап беру. Порталдан кітапқа өтінім қалдыруға болады.",
      more: ["120 орын: тыныш аймақ және 4 адамдық топтық бөлме.", "Кітап 14 күнге беріледі, мерзімді порталда ұзартуға болады.", "Кіру үшін кампус картасы керек."],
    },
    {
      id: "food",
      name: "Асхана",
      where: "Бас корпус, 1-қабат",
      hours: "08:30–17:00",
      note: "Түскі ас және буфет. Кампус картасымен төлеуге болады.",
      more: ["Ыстық түскі ас 12:00–14:00 аралығында.", "Буфет таңертеңнен жұмыс істейді: шай, нан, жеңіл тағам.", "Төлем кампус картасымен немесе қолма-қол."],
    },
    {
      id: "sport",
      name: "Спорт кешені",
      where: "Аумақ, спорт корпус",
      hours: "07:00–21:00",
      note: "Зал, жүгіру жолы. Кешке студенттерге ашық.",
      more: ["Зал, жүгіру жолы және шешінетін бөлме бар.", "Бос сағат 18:00–21:00, алдын ала жазылу керек емес.", "Ішке спорт киімімен және ауыстырылатын аяқкиіммен кіріңіз."],
    },
    {
      id: "dorm",
      name: "Жатақхана",
      where: "Аумақ",
      hours: "тәулік бойы",
      note: "Кіру кампус картасымен. Қонақ 22:00-ге дейін.",
      more: ["Тұрғын кампус картасымен кіреді.", "Қонақ күзетте тіркеледі және 22:00-ге дейін болады.", "Комендант 1-қабатта, 09:00–18:00."],
    },
    {
      id: "med",
      name: "Медпункт",
      where: "Бас корпус, 1-қабат",
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
      where: "Бас корпус, 1-қабат",
      hours: "іс-шара кестесімен",
      note: "Жиын, концерт және студенттік кеш.",
      more: ["300 орын, сахна, дыбыс және экран.", "Іс-шара деканат арқылы кемінде 5 күн бұрын жазылады.", "Көрермен кампус картасын өзімен алады."],
    },
    {
      id: "dean",
      name: "Деканат",
      where: "Бас корпус, 3-қабат",
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
    r314: {
      id: "r314",
      name: "Дәрісхана 314",
      where: "Бас корпус, 3-қабат",
      hours: "сабақ кестесімен",
      note: "Ақпараттық қауіпсіздік негіздері осында өтеді.",
      more: ["40 орын, проектор және тақта.", "Сабақ 10:00-де.", "Деканат пен оқытушылар бөлмесінің арасында."],
    },
    b2foyer: {
      id: "b2foyer",
      name: "Фойе",
      where: "2-ғимарат, 1-қабат",
      hours: "08:00–20:00",
      note: "2-ғимараттың кіреберісі. Коворкинг 3-қабатта.",
      more: ["Кіру кампус картасымен.", "Баспалдақ оң жақта.", "2-қабатта оқу бөлмелері."],
    },
  };

  const STAIR = { fixed: true, name: "Баспалдақ", kind: "stairs", c: 12, r: 1, w: 1, h: 10 };
  const CORRIDOR = { fixed: true, name: "Дәліз", kind: "corridor", c: 1, r: 7, w: 11, h: 2 };

  const BUILDINGS = [
    {
      id: "main",
      name: "Бас корпус",
      floors: [
        {
          id: "1",
          label: "1-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { place: "hall", c: 1, r: 1, w: 5, h: 6 },
            { place: "food", c: 6, r: 1, w: 6, h: 3 },
            { place: "med", c: 6, r: 4, w: 6, h: 3 },
            CORRIDOR,
            { id: "gate", c: 1, r: 9, w: 11, h: 2 },
            STAIR,
          ],
        },
        {
          id: "2",
          label: "2-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { place: "lib", c: 1, r: 1, w: 5, h: 6 },
            { id: "r210", c: 6, r: 1, w: 3, h: 3 },
            { id: "r214", c: 6, r: 4, w: 3, h: 3 },
            { id: "r220", c: 9, r: 1, w: 3, h: 6 },
            CORRIDOR,
            { fixed: true, name: "Қабат холлы", kind: "corridor", c: 1, r: 9, w: 11, h: 2 },
            STAIR,
          ],
        },
        {
          id: "3",
          label: "3-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { place: "dean", c: 1, r: 1, w: 5, h: 6 },
            { id: "r314", c: 6, r: 1, w: 3, h: 6 },
            { id: "staff", c: 9, r: 1, w: 3, h: 6 },
            CORRIDOR,
            { fixed: true, name: "Қабат холлы", kind: "corridor", c: 1, r: 9, w: 11, h: 2 },
            STAIR,
          ],
        },
      ],
    },
    {
      id: "second",
      name: "2-ғимарат",
      floors: [
        {
          id: "1",
          label: "1-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { id: "b2foyer", c: 1, r: 1, w: 10, h: 6 },
            { fixed: true, name: "Дәліз", kind: "corridor", c: 1, r: 7, w: 10, h: 2 },
            { fixed: true, name: "Кіреберіс", kind: "corridor", c: 1, r: 9, w: 10, h: 2 },
            { ...STAIR, w: 2, c: 11 },
          ],
        },
        {
          id: "2",
          label: "2-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { fixed: true, name: "Оқу бөлмелері", kind: "corridor", c: 1, r: 1, w: 10, h: 6 },
            { fixed: true, name: "Дәліз", kind: "corridor", c: 1, r: 7, w: 10, h: 2 },
            { fixed: true, name: "Қабат холлы", kind: "corridor", c: 1, r: 9, w: 10, h: 2 },
            { ...STAIR, w: 2, c: 11 },
          ],
        },
        {
          id: "3",
          label: "3-қабат",
          cols: 12,
          rows: 10,
          cells: [
            { place: "work", c: 1, r: 1, w: 10, h: 6 },
            { fixed: true, name: "Дәліз", kind: "corridor", c: 1, r: 7, w: 10, h: 2 },
            { fixed: true, name: "Қабат холлы", kind: "corridor", c: 1, r: 9, w: 10, h: 2 },
            { ...STAIR, w: 2, c: 11 },
          ],
        },
      ],
    },
    {
      id: "sport",
      name: "Спорт кешені",
      floors: [
        {
          id: "1",
          label: "Зал",
          cols: 12,
          rows: 8,
          cells: [{ place: "sport", c: 1, r: 1, w: 12, h: 8 }],
        },
      ],
    },
    {
      id: "dorm",
      name: "Жатақхана",
      floors: [
        {
          id: "1",
          label: "1-қабат",
          cols: 12,
          rows: 8,
          cells: [
            { place: "dorm", c: 1, r: 1, w: 8, h: 8 },
            { fixed: true, name: "Кіреберіс", kind: "corridor", c: 9, r: 1, w: 4, h: 8 },
          ],
        },
      ],
    },
  ];

  const CITY = [
    { id: "main", name: "Бас корпус", w: 190, d: 128, h: 108, x: 4, y: 16, tone: "main" },
    { id: "second", name: "2-ғимарат", w: 148, d: 108, h: 88, x: 58, y: 8, tone: "second" },
    { id: "sport", name: "Спорт кешені", w: 168, d: 84, h: 46, x: 6, y: 64, tone: "sport" },
    { id: "dorm", name: "Жатақхана", w: 132, d: 112, h: 98, x: 60, y: 52, tone: "dorm" },
  ];
  const CITY_TREES = [
    [41, 40], [53, 40], [41, 56], [53, 56], [44, 8], [51, 14], [44, 88], [51, 82],
    [30, 54], [36, 40], [62, 41], [90, 41], [88, 56], [8, 54], [94, 8], [94, 90],
  ];

  let mapPick = { building: "main", floor: "1", room: "hall" };
  let mapView = "campus";
  let mapDive = null;

  function roomInfo(room) {
    if (room.place) return PLACES.find((p) => p.id === room.place);
    return EXTRA_ROOMS[room.id];
  }

  function roomKey(room) {
    return room.place || room.id;
  }

  function isPlace(cell) {
    return cell && !cell.fixed && !cell.jump && (cell.place || cell.id);
  }

  function firstRoom(floor) {
    if (floor.id === "0") return "";
    const room = floor.cells.find(isPlace);
    return room ? roomKey(room) : "";
  }

  function findRoom(id) {
    for (const building of BUILDINGS) {
      for (const floor of building.floors) {
        const room = floor.cells.find((item) => isPlace(item) && roomKey(item) === id);
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

  function motionWait() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 720;
  }

  function floorPlanHtml(floor) {
    return floor.cells
      .map((cell) => {
        const style = `grid-column:${cell.c} / span ${cell.w};grid-row:${cell.r} / span ${cell.h}`;
        if (cell.fixed) {
          return `<div class="map-fixed ${esc(cell.kind || "")}" style="${style}">${esc(cell.name)}</div>`;
        }
        const item = roomInfo(cell);
        if (!item) return "";
        const on = roomKey(cell) === mapPick.room ? "is-on" : "";
        return `<button type="button" class="map-room ${on}" data-room="${esc(roomKey(cell))}" style="${style}"><strong>${esc(item.name)}</strong></button>`;
      })
      .join("");
  }

  function detailHtml(building, floor, info) {
    if (!info) {
      const empty = floor.cells.some(isPlace)
        ? "Орынды таңдаңыз."
        : "Бұл қабатта жеке орын жоқ. Дәліз бен баспалдақ қана бар.";
      return `<p class="site-kicker">${esc(building.name)} · ${esc(floor.label)}</p><p>${empty}</p>`;
    }
    return `<p class="site-kicker">${esc(building.name)} · ${esc(floor.label)}</p>
      <h3>${esc(info.name)}</h3>
      <p><strong>${esc(info.where)}</strong> · ${esc(info.hours)}</p>
      <p>${esc(info.note)}</p>
      <ul class="site-list">${(info.more || []).map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
      ${info.id === "lib" && session ? `<a class="btn btn-primary" href="#library">Кітапхананы ашу</a>` : ""}`;
  }

  function campusCityHtml() {
    const blocks = CITY.map(
      (b) => `<button type="button" class="bldg tone-${b.tone}" data-enter="${esc(b.id)}" style="--w:${b.w}px;--d:${b.d}px;--h:${b.h}px;--x:${b.x}%;--y:${b.y}%">
        <span class="face roof"><strong>${esc(b.name)}</strong></span>
        <span class="face wall front"></span>
        <span class="face wall back"></span>
        <span class="face wall side left"></span>
        <span class="face wall side right"></span>
      </button>`
    ).join("");
    const chips = CITY.map(
      (b) => `<button type="button" class="map-chip" data-enter="${esc(b.id)}">${esc(b.name)}</button>`
    ).join("");
    return `<div class="campus-map" id="campus-map">
      <div class="map-toolbar">
        <div class="map-chips">${chips}</div>
      </div>
      <div class="map-layout">
        <div class="city-stage" aria-label="Кампустың 3D картасы">
          <div class="city-world">
            <div class="city-ground"></div>
            ${CITY_TREES.map(([x, y]) => `<span class="tree" style="left:${x}%;top:${y}%"></span>`).join("")}
            ${blocks}
          </div>
        </div>
        <aside class="map-detail">
          <p class="site-kicker">Кампус</p>
          <h3>Барлық корпус</h3>
          <p>Ғимаратты басыңыз. Ол жақындап, қабаттары 3D болып ашылады.</p>
        </aside>
      </div>
    </div>`;
  }

  function campusInsideHtml() {
    const { building, floor, spot } = currentMap();
    const floors = building.floors
      .map((item, index) => {
        const on = item.id === floor.id ? "is-on" : "";
        const mini = item.cells
          .map((cell) => {
            const kind = cell.fixed ? `mini-${cell.kind || "fixed"}` : roomKey(cell) === mapPick.room && on ? "mini-on" : "mini-room";
            return `<i class="${esc(kind)}" style="grid-column:${cell.c} / span ${cell.w};grid-row:${cell.r} / span ${cell.h}"></i>`;
          })
          .join("");
        return `<button type="button" class="slab ${on}" data-floor="${esc(item.id)}" style="--i:${index};--n:${building.floors.length}">
          <span class="slab-top"><span class="slab-plan" style="--cols:${item.cols};--rows:${item.rows}">${mini}</span><strong>${esc(item.label)}</strong></span>
          <span class="slab-wall"></span>
        </button>`;
      })
      .join("");
    const floorChips = building.floors
      .map(
        (item) =>
          `<button type="button" class="map-chip ${item.id === floor.id ? "is-on" : ""}" data-floor="${esc(item.id)}">${esc(item.label)}</button>`
      )
      .join("");
    return `<div class="campus-map is-inside" id="campus-map">
      <div class="map-toolbar">
        <button type="button" class="map-chip" data-back>← Аумақ</button>
        <div class="map-chips">${floorChips}</div>
      </div>
      <div class="map-layout">
        <div class="stack-stage" aria-label="${esc(building.name)} 3D">
          <div class="stack-world">${floors}</div>
        </div>
        <aside class="map-detail">${detailHtml(building, floor, spot?.info)}</aside>
      </div>
      <div class="floor-plan is-rise" style="--cols:${floor.cols};--rows:${floor.rows}" aria-label="${esc(building.name)}, ${esc(floor.label)}">
        ${floorPlanHtml(floor)}
      </div>
    </div>`;
  }

  function campusMapHtml() {
    return mapView === "inside" ? campusInsideHtml() : campusCityHtml();
  }

  function paintMap() {
    const node = document.getElementById("campus-map");
    if (!node) return;
    node.outerHTML = campusMapHtml();
    bindMapControls();
  }

  function openBuilding(id, roomId) {
    const building = BUILDINGS.find((b) => b.id === id);
    if (!building) return;
    clearTimeout(mapDive);
    mapDive = null;
    const found = roomId ? findRoom(roomId) : null;
    const floor = found?.floor || building.floors[0];
    mapView = "inside";
    mapPick = { building: building.id, floor: floor.id, room: roomId || firstRoom(floor) };
    paintMap();
  }

  function enterBuilding(id, roomId) {
    const building = BUILDINGS.find((b) => b.id === id);
    if (!building) return;
    const world = document.querySelector(".city-world");
    if (!world || mapView !== "campus") {
      openBuilding(id, roomId);
      return;
    }
    world.classList.add("is-dive");
    world.querySelectorAll(".bldg").forEach((el) => {
      el.classList.toggle("is-chosen", el.dataset.enter === id);
      el.classList.toggle("is-away", el.dataset.enter !== id);
    });
    clearTimeout(mapDive);
    mapDive = setTimeout(() => openBuilding(id, roomId), motionWait());
  }

  function showCampus() {
    clearTimeout(mapDive);
    mapDive = null;
    mapView = "campus";
    paintMap();
  }

  function selectRoom(id) {
    const found = findRoom(id);
    if (!found) return;
    if (mapView === "campus") {
      enterBuilding(found.building.id, id);
      return;
    }
    mapPick = { building: found.building.id, floor: found.floor.id, room: id };
    paintMap();
  }

  function bindMapControls() {
    const map = document.getElementById("campus-map");
    if (!map) return;
    map.querySelectorAll("[data-enter]").forEach((btn) => {
      btn.addEventListener("click", () => enterBuilding(btn.dataset.enter));
    });
    map.querySelector("[data-back]")?.addEventListener("click", showCampus);
    map.querySelectorAll("[data-floor]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const building = BUILDINGS.find((b) => b.id === mapPick.building);
        const floor = building?.floors.find((f) => f.id === btn.dataset.floor);
        if (!floor) return;
        mapView = "inside";
        mapPick = { building: building.id, floor: floor.id, room: firstRoom(floor) };
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

  function defaultPapers(now) {
    const at = now || Date.now();
    return [
      {
        id: "d1",
        kind: "doc",
        title: "Академиялық демалыс анықтамасы",
        text: "Ауез Муханға академиялық демалыс анықтамасы.",
        authorName: "Молдабай Мэлс",
        state: "wait",
        at: at - 86400_000,
      },
      {
        id: "d2",
        kind: "event",
        title: "Кампус жүгіруі",
        text: "Спорт кешенінде кампус жүгіруі.",
        place: "Спорт кешені",
        when: "Сенбі · 09:00",
        authorName: "Молдабай Мэлс",
        state: "wait",
        at: at - 3600_000,
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
    ["dba", "Дерекқор әкімшісі", "dba"],
    ["building", "Ғимарат әкімшісі", "building"],
    ["sysadmin", "Жүйелік әкімші", "sysadmin"],
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
      papers: defaultPapers(now),
      loans: [],
      pending: [],
      backup: { copies: [], restores: [] },
      dbms: CampusDbms.initial(now),
      acs: CampusAcs.initial([
        { id: "p1", card: students[0].card, door: "Бас кіреберіс", result: "Өтті", why: "Ереже сәйкес", at: now - 3600_000, author: guard.name },
        { id: "p2", card: students[2].card, door: "Кітапхана", result: "Бас тартылды", why: "Бұл мәртебеге есік жабық", at: now - 7200_000, author: guard.name },
      ]),
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
      faces: [],
    };
  }

  let db = loadDb();
  let session = loadSession();
  let flash = null;
  let siteNote = null;
  let gradeCourse = LESSONS[0].course;
  let loginStep = "password";
  let pendingUser = null;
  let facePhase = "idle";
  let faceTimer = null;
  let faceStream = null;
  let faceCameraTask = null;
  let faceCameraDenied = false;
  let enrollStream = null;

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
        if (!saved.papers) {
          saved.papers = defaultPapers();
          patched = true;
        }
        if (!saved.users?.some((u) => u.login === "dba")) {
          saved.users = saved.users || [];
          saved.users.push({ id: "u-dba", login: "dba", name: "Дерекқор әкімшісі", role: "dba" });
          patched = true;
        }
        if (!saved.users?.some((u) => u.login === "building")) {
          saved.users = saved.users || [];
          saved.users.push({ id: "u-building", login: "building", name: "Ғимарат әкімшісі", role: "building" });
          patched = true;
        }
        if (!saved.users?.some((u) => u.login === "sysadmin")) {
          saved.users = saved.users || [];
          saved.users.push({ id: "u-sysadmin", login: "sysadmin", name: "Жүйелік әкімші", role: "sysadmin" });
          patched = true;
        }
        if (!saved.backup) {
          saved.backup = { copies: [], restores: [] };
          patched = true;
        }
        if (!Array.isArray(saved.faces)) {
          saved.faces = [];
          patched = true;
        }
        if (CampusDbms.patch(saved)) patched = true;
        if (CampusAcs.patch(saved)) patched = true;
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
    facePhase = "idle";
    faceCameraDenied = false;
    clearFaceTimer();
    stopFaceCamera();
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

  function faceFor(userId) {
    return (db.faces || []).find((f) => f.userId === userId && f.image);
  }

  function faceShot(record) {
    return typeof record?.image === "string" && record.image.startsWith("data:image/jpeg") ? record.image : "";
  }

  function route() {
    const hash = (location.hash || "#login").slice(1);
    const [page, id] = hash.split("/");
    return { page: page || "login", id };
  }

  function navFor(role) {
    const items = [{ href: "#home", id: "home", label: "Басты" }];
    if (role === "dba") {
      items.push({ href: "#dbms", id: "dbms", label: "ДҚБЖ" });
      return items;
    }
    if (role === "building") {
      items.push({ href: "#acs", id: "acs", label: "ACS" });
      return items;
    }
    if (role === "sysadmin") {
      items.push({ href: "#backup", id: "backup", label: "Көшірме" });
      return items;
    }
    if (role === "dean") {
      items.push({ href: "#sign", id: "sign", label: "Құжат" });
      items.push({ href: "#events", id: "events", label: "Іс-шара" });
      return items;
    }
    if (role === "student") {
      items.push(
        { href: "#profile", id: "profile", label: "Жеке кабинет" },
        { href: "#grades", id: "grades", label: "Бағалар" },
        { href: "#pass", id: "pass", label: "Кампус картасы" }
      );
    }
    if (role === "teacher") items.push({ href: "#grades", id: "grades", label: "Баға қою" });
    if (role === "registrar") {
      items.push(
        { href: "#registry", id: "registry", label: "Тіркеу" },
        { href: "#newsdesk", id: "newsdesk", label: "Жаңалықтар" }
      );
    }
    if (role === "head") items.push({ href: "#approvals", id: "approvals", label: "Бекіту" });
    if (role === "guard") items.push({ href: "#acs", id: "acs", label: "ACS" });
    if (role === "auditor" || role === "secadmin") {
      items.push({ href: "#journal", id: "journal", label: "Оқиға журналы" });
      items.push({ href: "#acs", id: "acs", label: "ACS" });
    }
    if (role === "secadmin") {
      items.push({ href: "#accounts", id: "accounts", label: "Тіркелгілер" });
      items.push({ href: "#restore", id: "restore", label: "Қалпына келтіру" });
    }
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
            <a href="#meetings">Іс-шара</a>
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
          <p>Барлық корпус 3D картада тұр. Біреуін бассаңыз, қабаттары ашылады.</p>
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

        <section class="site-block" id="meetings">
          <h2>Іс-шара</h2>
          <p>Декан қол қойған іс-шара ғана осында тұрады.</p>
          <div class="news-grid">
            ${publishedEvents()}
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
    const face = loginStep === "face";
    const scanning = face && facePhase === "scan";
    const faceName = pendingUser ? esc(pendingUser.name) : "";
    return `
      <div class="login-wrap">
        <section class="login-card">
          <div class="login-copy">
            <small>Жоғары оқу орны</small>
            <h1>Smart Campus</h1>
            <p>Студент өз жазбасын көреді. Тіркеуші мәртебе жазады, бөлім басшысы бекітеді. Күзет өткізу журналын толтырады, өшірмейді. Дерекқор әкімшісі құрылымды көреді, жолды ашпайды. ACS ережесін бір адам жазады, екіншісі бекітеді.</p>
            <div class="demo-list">${demos}</div>
          </div>
          <form class="login-form form" id="login-form">
            <h2>${face ? "Face ID" : mfa ? "Екінші фактор" : "Кіру"}</h2>
            <p style="color:var(--muted)">Құпиясөз: ${PASSWORD}. Қажет болса код: ${MFA_CODE}.</p>
            ${
              flash
                ? `<div class="note ${flash.type === "bad" ? "bad" : "warn"}">${esc(flash.text)}</div>`
                : ""
            }
            ${
              face
                ? `<div class="face-id${scanning ? " is-scan" : ""}">
                     <div class="face-stage${scanning ? " is-scan" : ""}">
                       <video id="face-video" autoplay playsinline muted></video>
                       <svg class="face-glyph" viewBox="0 0 120 160" aria-hidden="true">
                         <path class="face-frame" d="M28 16 H14 V34 M92 16 H106 V34 M14 126 V144 H28 M106 126 V144 H92"/>
                         <path class="face-scan" d="M24 80 H96"/>
                       </svg>
                     </div>
                     <p class="face-name">${faceName}</p>
                     <p class="face-hint" id="face-hint">${scanning ? "Камера ашық. Бет сақталған үлгімен салыстырылуда." : "Кадр сақталмайды. Үлгіге сай келмесе сессия ашылмайды."}</p>
                     <button class="btn btn-primary" id="face-scan" type="button"${scanning ? " disabled" : ""}>${scanning ? "Тексерілуде…" : "Face ID"}</button>
                     ${faceCameraDenied ? `<button class="btn btn-ghost" id="face-code" type="button">Кодпен растау</button>` : ""}
                   </div>`
                : mfa
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
    const hint = {
      student: student
        ? `Сіздің мәртебеңіз: ${student.status}. Аты-жөні мен байланысты өзгерту үшін өтінім жіберіңіз.`
        : "",
      teacher: "Баға қойғанда сабақты өзіңіз таңдайсыз. Жаңа баға бірден жазылады. Түзетуді бөлім басшысы бекітеді. ЖСН бұл экранда жоқ.",
      dean: "Сабақ бермейсіз. Құжатқа қол қоясыз және іс-шара өткізесіз.",
      registrar: "Байланысты жазасыз, бірақ өзіңіз бекітпейсіз. Жою құқығы жоқ. Мәртебені бөлім басшысы бекітеді.",
      head: "Жазбаны өзіңіз жазбайсыз. Тіркеуші мен оқытушы жазған өзгерісті бекітесіз.",
      guard: "Есік нәтижесін ереже шешеді. Журнал жолы өшпейді. Ережені екінші адам бекітеді.",
      auditor: "Журналды оқуға болады. Жазу және бекіту бұл рөлде жоқ.",
      secadmin: "Тіркелгі мен ACS журналын оқисыз. Қалпына келтіруді бекітесіз, файлды ашпайсыз.",
      sysadmin: "Көшірме жасайсыз. Қойма өрісін оқымайсыз. Қалпына келтіруді өзіңіз бекітпейсіз.",
      dba: "ДҚБЖ құрылымын, қызметтік қосылымды және қалпына келтіру нүктесін көресіз. Жеке жолды ашпайсыз.",
      building: "ACS ережесі мен карта күйі сізде. Ережені күзет бекітеді. Журнал жолын өшіре алмайсыз.",
    }[session.role];
    if (session.role === "dba" || session.role === "building" || session.role === "sysadmin" || session.role === "dean") {
      const extra = session.role === "dba"
        ? `Қалпына келтіру нүктесі: ${(db.dbms?.points || []).length}. Орналасқан жері: ДҚ сервері, сервер бөлмесі.`
        : session.role === "building"
          ? "Орналасқан жері: ACS сервері және есік контроллерлері. Контроллерлер VLAN 30-да."
          : session.role === "sysadmin"
            ? "Көшірме файлының іші бұл экранда жоқ. Бекіту қауіпсіздік әкімшісінде."
            : "Қол қойылмаған құжат күшінде емес. Баға мен тіркеу бұл бөлмеде жоқ.";
      return shell(
        "Басты бет",
        `${cards}<section class="panel"><h2>Сіздің контур</h2><p>${esc(hint)}</p><p class="note">${esc(extra)}</p></section>`
      );
    }
    const schedule = `
      <section class="panel">
        <h2>Бүгінгі сабақ</h2>
        <div class="schedule">
          ${LESSONS.map((lesson) => `<div class="lesson"><div><strong>${esc(lesson.course)}</strong><em>${esc(lesson.teacher)}</em></div><em>${esc(lesson.when)} · ${esc(lesson.room)}</em></div>`).join("")}
        </div>
      </section>`;
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
      .filter((p) => (p.kind === "ask" || p.kind === "profile") && p.studentId === s.id)
      .map(
        (p) => `<tr>
          <td>${esc(p.nameFrom)} → ${esc(p.nameTo)}</td>
          <td>${esc(p.phoneFrom)} → ${esc(p.phoneTo)}</td>
          <td>${esc(p.reason)}</td>
          <td>${p.state === "wait" ? "Күтуде" : p.state === "written" ? "Тіркеуші жазды" : p.state === "ok" ? "Бекітілді" : "Қайтарылды"}</td>
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
          <p class="note">ЖСН, топ және мәртебе осы формадан өзгермейді. Тіркеуші жазады, бөлім басшысы бекітеді.</p>
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
    if (!LESSONS.some((lesson) => lesson.course === gradeCourse)) gradeCourse = LESSONS[0].course;
    const lessonOptions = LESSONS.map(
      (lesson) =>
        `<option value="${esc(lesson.course)}"${lesson.course === gradeCourse ? " selected" : ""}>${esc(lesson.course)} · ${esc(lesson.when)} · ${esc(lesson.room)}</option>`
    ).join("");
    const rows = db.students
      .map((s) => {
        const grade = db.grades.find((g) => g.studentId === s.id && g.course === gradeCourse);
        const waiting = db.pending.some(
          (p) => p.kind === "grade" && p.studentId === s.id && p.course === gradeCourse && p.state === "wait"
        );
        return `<tr>
          <td>${esc(s.name)}</td>
          <td>${esc(s.group)}</td>
          <td>${grade ? esc(grade.value) : "—"}${waiting ? ` <span class="pill wait">түзету күтуде</span>` : ""}</td>
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
        <form class="form course-pick">
          <label>
            <span>Сабақ</span>
            <select id="grade-course">${lessonOptions}</select>
          </label>
        </form>
        <p style="margin-bottom:0.8rem;color:var(--muted)">Кушенов Рамазан таңдаған сабаққа баға жазады. Жаңа баға бірден жазылады. Түзету бөлім басшысын күтеді. ЖСН бұл экранда жоқ.</p>
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
          <td><button class="btn btn-ghost" type="button" data-deny-delete="${esc(s.id)}">Жою</button></td>
        </tr>`
      )
      .join("");
    const dataReqs = db.pending
      .filter((p) => p.kind === "ask" || p.kind === "profile")
      .map((p) => {
        const buttons = p.kind === "ask" && p.state === "wait"
          ? `<button class="btn btn-primary" type="button" data-write="${esc(p.id)}">Жазу</button>`
          : p.state === "wait"
            ? "Бөлім басшысында"
            : p.state === "ok" || p.state === "written"
              ? "Жазылды"
              : "Қайтарылды";
        return `<tr>
          <td>${esc(studentById(p.studentId)?.name || p.nameFrom)}</td>
          <td>${esc(p.nameFrom)} → ${esc(p.nameTo)}<br>${esc(p.phoneFrom)} → ${esc(p.phoneTo)}</td>
          <td>${esc(p.reason)}</td>
          <td>${buttons}</td>
        </tr>`;
      })
      .join("");
    const openFaces = db.users.filter((u) => !faceFor(u.id));
    const faceOptions = openFaces
      .map((u) => `<option value="${esc(u.id)}">${esc(u.name)} · ${esc(ROLES[u.role])}</option>`)
      .join("");
    const faceRows = (db.faces || [])
      .map((f) => {
        const person = db.users.find((u) => u.id === f.userId);
        const shot = faceShot(f);
        return `<tr>
          <td>${shot ? `<img class="face-thumb" src="${shot}" alt="">` : "—"}</td>
          <td>${esc(person?.name || "—")}</td>
          <td>${esc(person ? ROLES[person.role] : "—")}</td>
          <td>${fmt(f.at)}</td>
          <td>${esc(f.by)}</td>
          <td><button class="btn btn-ghost" type="button" data-face-drop="${esc(f.userId)}">Алу</button></td>
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
          <p class="note">Жаңа студент сол құпиясөзбен және MFA кодымен кіре алады. Face ID өзі қосылмайды.</p>
        </section>
        <section class="panel">
          <h2>Face ID</h2>
          ${
            openFaces.length
              ? `<form class="form" id="face-enroll">
                  <label><span>Адам</span><select name="user">${faceOptions}</select></label>
                  <div class="face-stage enroll-stage">
                    <video id="enroll-video" autoplay playsinline muted></video>
                  </div>
                  <p class="face-hint" id="enroll-hint">Адам осы жерде тұрады. Камераны ашып, бір кадрды базаға сақтаңыз.</p>
                  <div class="actions">
                    <button class="btn btn-ghost" id="face-enroll-cam" type="button">Камераны ашу</button>
                    <button class="btn btn-primary" id="face-enroll-save" type="submit" disabled>Базаға сақтау</button>
                  </div>
                </form>`
              : `<p>Тіркелмеген адам қалмады.</p>`
          }
          <p class="note">Кадр faces кестесіне жазылады. Кіру кезіндегі тексеру жаңа сурет қоспайды. Үлгіге сай келмесе сессия ашылмайды.</p>
          <table><thead><tr><th>Үлгі</th><th>Адам</th><th>Рөл</th><th>Қашан</th><th>Кім берді</th><th></th></tr></thead><tbody>${faceRows || "<tr><td colspan='6'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
        <section class="panel">
          <h2>Мәртебені өзгерту</h2>
          <form class="form" id="status-form">
            <label><span>Студент</span><select name="student">${students}</select></label>
            <label><span>Жаңа мәртебе</span><select name="status">${options}</select></label>
            <label><span>Себеп</span><textarea name="reason" required></textarea></label>
            <button class="btn btn-primary" type="submit">Өтінім жіберу</button>
          </form>
          <p class="note">Бекітілмеген өзгеріс ресми жазбаны ауыстырмайды. Өз өтініміңізді өзіңіз бекітпейсіз.</p>
        </section>
        <section class="panel">
          <h2>Байланысты өзгерту</h2>
          <form class="form" id="contact-form">
            <label><span>Студент</span><select name="student">${students}</select></label>
            <label><span>Жаңа байланыс</span><input name="phone" required></label>
            <label><span>Себеп</span><textarea name="reason" required></textarea></label>
            <button class="btn btn-primary" type="submit">Жазу</button>
          </form>
          <p class="note">Бұл жазба. Бекіту бөлім басшысында. Жою бұл рөлде жоқ.</p>
        </section>
        <section class="panel"><table><thead><tr><th>Студент</th><th>ЖСН</th><th>Байланыс</th><th>Топ</th><th>Мәртебе</th><th></th></tr></thead><tbody>${rows}</tbody></table></section>
        <section class="panel"><h2>Студент деректерінің өтінімі</h2><table><thead><tr><th>Студент</th><th>Өзгеріс</th><th>Себеп</th><th></th></tr></thead><tbody>${dataReqs || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table></section>
        <section class="panel"><h2>Мәртебе өтінімдері</h2><table><thead><tr><th>Студент</th><th>Өзгеріс</th><th>Себеп</th><th>Күй</th></tr></thead><tbody>${mine || "<tr><td colspan='4'>Әлі жоқ</td></tr>"}</tbody></table></section>
        <section class="panel">
          <h2>Деканға құжат</h2>
          <form class="form" id="paper-form">
            <label><span>Түрі</span><select name="kind"><option value="doc">Анықтама</option><option value="order">Бұйрық</option><option value="event">Іс-шара</option></select></label>
            <label><span>Тақырып</span><input name="title" required maxlength="80"></label>
            <label><span>Мәтін</span><textarea name="text" required></textarea></label>
            <label><span>Орын</span><input name="place" placeholder="Іс-шара болса"></label>
            <label><span>Уақыт</span><input name="when" placeholder="Іс-шара болса"></label>
            <button class="btn btn-primary" type="submit">Қол қоюға жіберу</button>
          </form>
          <p class="note">Декан қол қоймайынша құжат күшінде емес. Бағаға бұл форма жоламайды.</p>
        </section>
      </div>`
    );
  }

  function viewApprovals() {
    const rows = db.pending
      .filter((p) => p.kind === "profile" || p.kind === "status" || p.kind === "grade")
      .map((p) => {
        const name = studentById(p.studentId)?.name;
        const who = p.kind === "status" ? name : p.kind === "grade" ? `${name} · ${p.course}` : `${name} · дерек`;
        const change = p.kind === "profile" ? `${p.phoneFrom} → ${p.phoneTo}` : `${p.from} → ${p.to}`;
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


  function viewPass() {
    const student = studentById(session.studentId);
    const status = CampusAcs.cardStatus(db, student.card);
    const rows = CampusAcs.passesFor(db, student.card)
      .map((p) => `<tr><td>${fmt(p.at)}</td><td>${esc(p.door)}</td><td>${esc(p.result)}</td></tr>`)
      .join("");
    return shell(
      "Кампус картасы",
      `<section class="panel">
        <dl class="field-row"><dt>Карта</dt><dd>${esc(student.card)}</dd><dt>Күй</dt><dd><span class="pill ${status === "Бұғат" ? "stop" : "ok"}">${esc(status)}</span></dd></dl>
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
        <p class="note">Барлық корпус 3D картада тұр. Біреуін бассаңыз, қабаттары ашылады.</p>
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

  function publishedEvents() {
    const items = (db.papers || []).filter((item) => item.kind === "event" && item.state === "signed");
    if (!items.length) return `<p>Қол қойылған іс-шара әзірге жоқ.</p>`;
    return items
      .map(
        (item) => `<article class="news-card">
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
          <p class="news-meta">${esc(item.place || "Кампус")} · ${esc(item.when || "")}</p>
        </article>`
      )
      .join("");
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


  function viewBackup() {
    const copies = (db.backup?.copies || [])
      .map((item) => `<tr><td>${fmt(item.at)}</td><td>${esc(item.label)}</td><td>Іші жабық</td></tr>`)
      .join("");
    const restores = (db.backup?.restores || [])
      .map((item) => `<tr><td>${fmt(item.at)}</td><td>${esc(item.label)}</td><td>${item.state === "wait" ? "Қауіпсіздік әкімшісінде" : item.state === "ok" ? "Бекітілді" : "Қайтарылды"}</td></tr>`)
      .join("");
    const options = (db.backup?.copies || [])
      .map((item) => `<option value="${esc(item.id)}">${esc(item.label)}</option>`)
      .join("");
    return shell(
      "Көшірме",
      `<div class="stack">
        <section class="panel">
          <h2>Көшірме жасау</h2>
          <button class="btn btn-primary" type="button" id="backup-make">Көшірме жұмысын іске қосу</button>
          <p class="note">Файлдың іші ашылмайды. ЖСН мен баға бұл экранда жоқ.</p>
          <table><thead><tr><th>Уақыт</th><th>Белгі</th><th>Ішінде</th></tr></thead><tbody>${copies || "<tr><td colspan='3'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
        <section class="panel">
          <h2>Қалпына келтіруді сұрау</h2>
          <form class="form" id="backup-restore">
            <label><span>Көшірме</span><select name="copy" ${options ? "" : "disabled"}>${options || "<option>Көшірме жоқ</option>"}</select></label>
            <button class="btn btn-ghost" type="submit">Сұрау</button>
            <button class="btn btn-ghost" type="button" id="backup-self">Өзім бекіту</button>
          </form>
          <p class="note">Бекіту қауіпсіздік әкімшісінде. Жүйе әкімшісі өз сұрауын бекітпейді.</p>
          <table><thead><tr><th>Уақыт</th><th>Көшірме</th><th>Күй</th></tr></thead><tbody>${restores || "<tr><td colspan='3'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
        <section class="panel">
          <button class="btn btn-ghost" type="button" id="backup-read">Қойма өрісін оқу</button>
        </section>
      </div>`
    );
  }

  function viewRestore() {
    const rows = (db.backup?.restores || [])
      .map((item) => {
        const buttons = item.state === "wait"
          ? `<div class="actions"><button class="btn btn-primary" type="button" data-restore="${esc(item.id)}" data-state="ok">Бекіту</button><button class="btn btn-ghost" type="button" data-restore="${esc(item.id)}" data-state="no">Қайтару</button></div>`
          : item.state === "ok" ? "Бекітілді" : "Қайтарылды";
        return `<tr><td>${fmt(item.at)}</td><td>${esc(item.label)}</td><td>${esc(item.authorName)}</td><td>Іші жабық</td><td>${buttons}</td></tr>`;
      })
      .join("");
    return shell(
      "Қалпына келтіру",
      `<section class="panel">
        <p class="note">Қауіпсіздік әкімшісі қалпына келтіруді бекітеді. Көшірме файлын ашпайды, қойма өрісін оқымайды.</p>
        <table><thead><tr><th>Уақыт</th><th>Көшірме</th><th>Автор</th><th>Ішінде</th><th></th></tr></thead><tbody>${rows || "<tr><td colspan='5'>Кезек бос</td></tr>"}</tbody></table>
      </section>`
    );
  }

  function paperKind(kind) {
    if (kind === "event") return "Іс-шара";
    if (kind === "order") return "Бұйрық";
    return "Анықтама";
  }

  function paperRows(items, signing) {
    return items
      .map((item) => {
        const buttons = signing && item.state === "wait"
          ? `<div class="actions"><button class="btn btn-primary" type="button" data-sign="${esc(item.id)}">Қол қою</button><button class="btn btn-ghost" type="button" data-sign-no="${esc(item.id)}">Қайтару</button></div>`
          : item.state === "signed"
            ? "Қол қойылды"
            : item.state === "wait"
              ? "Деканда"
              : "Қайтарылды";
        return `<tr>
          <td>${esc(paperKind(item.kind))}</td>
          <td>${esc(item.title)}</td>
          <td>${esc(item.text)}</td>
          <td>${esc(item.authorName)}</td>
          <td>${buttons}</td>
        </tr>`;
      })
      .join("");
  }

  function viewSign() {
    const rows = paperRows(db.papers || [], true);
    return shell(
      "Құжат",
      `<section class="panel">
        <p class="note">Декан қол қояды. Сабақ бермейді, баға қоймайды, тіркеу жазбайды.</p>
        <table><thead><tr><th>Түрі</th><th>Тақырып</th><th>Мәтін</th><th>Кім жіберді</th><th></th></tr></thead><tbody>${rows || "<tr><td colspan='5'>Құжат жоқ</td></tr>"}</tbody></table>
      </section>`
    );
  }

  function viewEvents() {
    const places = PLACES.map((place) => `<option>${esc(place.name)}</option>`).join("");
    const held = (db.papers || []).filter((item) => item.kind === "event");
    return shell(
      "Іс-шара",
      `<div class="stack">
        <section class="panel">
          <h2>Іс-шара өткізу</h2>
          <form class="form" id="event-form">
            <label><span>Тақырып</span><input name="title" required maxlength="80"></label>
            <label><span>Орын</span><select name="place">${places}</select></label>
            <label><span>Уақыт</span><input name="when" required placeholder="Сенбі · 09:00"></label>
            <label><span>Мәтін</span><textarea name="text" required></textarea></label>
            <button class="btn btn-primary" type="submit">Өткізу</button>
          </form>
          <p class="note">Деканның өзі өткізген іс-шара сол сәтте қол қойылған болып сайтта көрінеді.</p>
        </section>
        <section class="panel">
          <table><thead><tr><th>Түрі</th><th>Тақырып</th><th>Мәтін</th><th>Кім жіберді</th><th></th></tr></thead><tbody>${paperRows(held, true) || "<tr><td colspan='5'>Әлі жоқ</td></tr>"}</tbody></table>
        </section>
      </div>`
    );
  }

  function render() {
    const app = document.getElementById("app");
    const { page, id } = route();
    if (!(page === "login" && loginStep === "face")) stopFaceCamera();
    stopEnrollCamera();
    const publicPage = new Set(["site", "about", "grounds", "news", "meetings", "contacts"]);
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
      acs: () => CampusAcs.view(systemCtx()),
      pass: () => viewPass(),
      campus: () => viewCampus(),
      library: () => viewLibrary(),
      journal: () => viewJournal(),
      newsdesk: () => viewNewsdesk(),
      sign: () => viewSign(),
      events: () => viewEvents(),
      accounts: () => viewAccounts(),
      backup: () => viewBackup(),
      restore: () => viewRestore(),
      dbms: () => CampusDbms.view(systemCtx()),
    };
    app.innerHTML = (views[page] || viewHome)();
    bindApp();
  }

  function clearFaceTimer() {
    if (!faceTimer) return;
    clearTimeout(faceTimer);
    faceTimer = null;
  }

  function stopEnrollCamera() {
    if (!enrollStream) return;
    enrollStream.getTracks().forEach((track) => track.stop());
    enrollStream = null;
  }

  const FACE_MATCH = 0.22;

  function captureFace(video) {
    const width = 320;
    const height = Math.max(240, Math.round(width * (video.videoHeight / video.videoWidth)));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg", 0.72);
  }

  function loadFaceImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error("face"));
      img.src = src;
    });
  }

  function facePrint(img) {
    const w = 32;
    const h = 24;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, w, h);
    const data = ctx.getImageData(0, 0, w, h).data;
    const gray = new Float32Array(w * h);
    for (let i = 0; i < gray.length; i++) {
      const o = i * 4;
      gray[i] = data[o] * 0.299 + data[o + 1] * 0.587 + data[o + 2] * 0.114;
    }
    return gray;
  }

  function faceScore(a, b) {
    let meanA = 0;
    let meanB = 0;
    for (let i = 0; i < a.length; i++) {
      meanA += a[i];
      meanB += b[i];
    }
    meanA /= a.length;
    meanB /= b.length;
    let dot = 0;
    let na = 0;
    let nb = 0;
    for (let i = 0; i < a.length; i++) {
      const da = a[i] - meanA;
      const db = b[i] - meanB;
      dot += da * db;
      na += da * da;
      nb += db * db;
    }
    if (na < 1 || nb < 1) return 0;
    return dot / Math.sqrt(na * nb);
  }

  async function faceMatches(shot, stored) {
    if (!shot || !stored) return false;
    const [live, saved] = await Promise.all([loadFaceImage(shot), loadFaceImage(stored)]);
    return faceScore(facePrint(live), facePrint(saved)) >= FACE_MATCH;
  }

  function stopFaceCamera() {
    faceCameraTask = null;
    if (!faceStream) return;
    faceStream.getTracks().forEach((track) => track.stop());
    faceStream = null;
  }

  function attachFaceCamera(stream) {
    const video = document.getElementById("face-video");
    if (!video || loginStep !== "face") return;
    video.srcObject = stream;
    video.play().catch(() => {});
  }

  function openFaceCamera() {
    const hint = document.getElementById("face-hint");
    if (!navigator.mediaDevices?.getUserMedia) {
      if (hint) hint.textContent = "Бұл браузер камераны ашпайды. Кодпен кіріңіз.";
      return;
    }
    if (faceCameraDenied) return;
    if (faceStream) {
      attachFaceCamera(faceStream);
      return;
    }
    if (hint && facePhase !== "scan") hint.textContent = "Камера рұқсатын күтіп тұр. Кадр сақталмайды.";
    if (!faceCameraTask) {
      faceCameraTask = navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" }, audio: false })
        .then((stream) => {
          faceCameraTask = null;
          if (loginStep !== "face") {
            stream.getTracks().forEach((track) => track.stop());
            return;
          }
          faceStream = stream;
          attachFaceCamera(stream);
          const live = document.getElementById("face-hint");
          if (live && facePhase !== "scan") live.textContent = "Камера ашық. Үлгіге сай келмесе сессия ашылмайды.";
        })
        .catch(() => {
          faceCameraTask = null;
          faceCameraDenied = true;
          const live = document.getElementById("face-hint");
          if (live) live.textContent = "Камера ашылмады. Рұқсат беріңіз немесе кодпен кіріңіз.";
        });
    }
  }

  function finishLogin(detail) {
    saveSession({
      id: pendingUser.id,
      login: pendingUser.login,
      name: pendingUser.name,
      role: pendingUser.role,
      studentId: pendingUser.studentId || null,
    });
    log(pendingUser, "Кіру сәтті", detail);
    pendingUser = null;
    loginStep = "password";
    facePhase = "idle";
    faceCameraDenied = false;
    clearFaceTimer();
    stopFaceCamera();
    flash = null;
    location.hash = "#home";
    render();
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
    document.getElementById("face-scan")?.addEventListener("click", () => {
      if (!pendingUser || facePhase === "scan") return;
      const record = faceFor(pendingUser.id);
      const video = document.getElementById("face-video");
      if (!record?.image || !video?.videoWidth) {
        flash = { type: "bad", text: "Камера әлі дайын емес. Бетті кадрға түсіріп, қайталаңыз." };
        render();
        return;
      }
      const shot = captureFace(video);
      const stored = record.image;
      const who = pendingUser;
      facePhase = "scan";
      flash = null;
      render();
      clearFaceTimer();
      faceTimer = setTimeout(async () => {
        faceTimer = null;
        if (loginStep !== "face" || pendingUser !== who) return;
        let matched = false;
        try {
          matched = await faceMatches(shot, stored);
        } catch {
          matched = false;
        }
        if (loginStep !== "face" || pendingUser !== who) return;
        if (!matched) {
          log(who, "Face ID сәтсіз", "Үлгі сәйкес келмеді");
          facePhase = "idle";
          flash = { type: "bad", text: "Face ID сәйкес келмеді. Сессия ашылмады." };
          render();
          return;
        }
        finishLogin("Face ID расталды");
      }, 900);
    });
    document.getElementById("face-code")?.addEventListener("click", () => {
      clearFaceTimer();
      stopFaceCamera();
      facePhase = "idle";
      faceCameraDenied = false;
      loginStep = "mfa";
      flash = { type: "warn", text: "Камера жабылды. Растау кодын енгізіңіз." };
      render();
    });
    if (loginStep === "face") openFaceCamera();
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (loginStep === "face") return;
      if (loginStep === "mfa") {
        const code = document.getElementById("mfa").value.trim();
        if (code !== MFA_CODE) {
          log(pendingUser, "MFA сәтсіз", "Қате код");
          flash = { type: "bad", text: "Код қате. Құпиясөздің өзі сессия ашпайды." };
          render();
          return;
        }
        finishLogin("MFA расталды");
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
      facePhase = "idle";
      if (faceFor(user.id)) {
        loginStep = "face";
        flash = { type: "warn", text: "Құпиясөз қабылданды. Тіркеуші берген Face ID үлгісімен растаңыз." };
      } else {
        loginStep = "mfa";
        flash = { type: "warn", text: "Face ID тіркелмеген. Сессияны код ашады. Үлгіні тіркеуші береді." };
      }
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
      facePhase = "idle";
      faceCameraDenied = false;
      clearFaceTimer();
      stopFaceCamera();
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
      flash = { type: "ok", text: `${name} тіркелді. Кіру: ${login}. Карта: ${card}. Face ID әлі жоқ.` };
      render();
    });
    document.getElementById("face-enroll-cam")?.addEventListener("click", () => {
      if (session.role !== "registrar") return;
      if (!navigator.mediaDevices?.getUserMedia) {
        flash = { type: "bad", text: "Бұл браузер камераны ашпайды." };
        render();
        return;
      }
      stopEnrollCamera();
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" }, audio: false })
        .then((stream) => {
          const video = document.getElementById("enroll-video");
          if (!video) {
            stream.getTracks().forEach((track) => track.stop());
            return;
          }
          enrollStream = stream;
          video.srcObject = stream;
          video.play().catch(() => {});
          const save = document.getElementById("face-enroll-save");
          if (save) save.disabled = false;
          const hint = document.getElementById("enroll-hint");
          if (hint) hint.textContent = "Кадр дайын. Базаға сақтау оны faces кестесіне жазады.";
        })
        .catch(() => {
          flash = { type: "bad", text: "Камера ашылмады. Рұқсат беріңіз." };
          render();
        });
    });
    document.getElementById("face-enroll")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "registrar") {
        flash = { type: "bad", text: "Face ID үлгісін тек тіркеуші береді." };
        render();
        return;
      }
      const user = db.users.find((u) => u.id === new FormData(e.target).get("user"));
      const video = document.getElementById("enroll-video");
      if (!user || !video?.videoWidth || !enrollStream) {
        flash = { type: "bad", text: "Алдымен камераны ашып, бетті кадрға түсіріңіз." };
        render();
        return;
      }
      const image = captureFace(video);
      stopEnrollCamera();
      db.faces = (db.faces || []).filter((f) => f.userId !== user.id);
      db.faces.push({
        id: "f" + Date.now(),
        userId: user.id,
        at: Date.now(),
        by: session.name,
        image,
      });
      log(session, "Face ID базаға сақталды", user.name);
      saveDb();
      flash = { type: "ok", text: `${user.name} үшін Face ID faces кестесіне сақталды.` };
      render();
    });
    document.querySelectorAll("[data-face-drop]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (session.role !== "registrar") return;
        const user = db.users.find((u) => u.id === btn.dataset.faceDrop);
        db.faces = (db.faces || []).filter((f) => f.userId !== btn.dataset.faceDrop);
        log(session, "Face ID алынды", user?.name || "Белгісіз");
        saveDb();
        flash = { type: "ok", text: `${user?.name || "Адам"} енді Face ID-мен кірмейді.` };
        render();
      });
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
      if (db.pending.some((p) => p.kind === "ask" && p.studentId === student.id && p.state === "wait")) {
        flash = { type: "warn", text: "Ашық өтінім бар. Тіркеуші жауабын күтіңіз." };
        render();
        return;
      }
      db.pending.unshift({
        id: "q" + Date.now(),
        kind: "ask",
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
      flash = { type: "ok", text: "Өтінім тіркеушіге жіберілді. Ол жазады, бөлім басшысы бекітеді." };
      render();
    });
    document.getElementById("status-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "registrar") return;
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
    document.getElementById("grade-course")?.addEventListener("change", (e) => {
      const next = e.target.value;
      if (!LESSONS.some((lesson) => lesson.course === next)) return;
      gradeCourse = next;
      render();
    });
    document.querySelectorAll("[data-grade]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const studentId = form.dataset.grade;
        const value = Number(new FormData(form).get("value"));
        if (Number.isNaN(value) || value < 0 || value > 100) return;
        const course = gradeCourse;
        const current = db.grades.find((g) => g.studentId === studentId && g.course === course);
        const student = studentById(studentId);
        if (session.role !== "teacher") return;
        if (!current) {
          db.grades.push({ id: "g" + Date.now(), studentId, course, value, state: "official" });
          log(session, "Баға қойылды", `${student.name} · ${course}: ${value}`);
          saveDb();
          flash = { type: "ok", text: `${course}: баға қойылды.` };
          render();
          return;
        }
        if (current.value === value) {
          flash = { type: "warn", text: "Баға өзгермеген." };
          render();
          return;
        }
        if (db.pending.some((p) => p.kind === "grade" && p.studentId === studentId && p.course === course && p.state === "wait")) {
          flash = { type: "warn", text: "Бұл түзету бөлім басшысында." };
          render();
          return;
        }
        db.pending.unshift({
          id: "q" + Date.now(),
          kind: "grade",
          studentId,
          course,
          from: current.value,
          to: value,
          reason: "Баға түзетуі",
          authorId: session.id,
          authorName: session.name,
          state: "wait",
        });
        log(session, "Баға түзетуі", `${student.name} · ${course}: ${current.value} → ${value}`);
        saveDb();
        flash = { type: "ok", text: `${course}: түзету бөлім басшысына кетті. Ресми баға әзірге сол.` };
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
    document.getElementById("contact-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "registrar") return;
      const data = new FormData(e.target);
      const student = studentById(data.get("student"));
      const phone = String(data.get("phone") || "").trim();
      const reason = String(data.get("reason") || "").trim();
      if (!student || !phone || !reason) return;
      if (phone === student.phone) {
        flash = { type: "warn", text: "Байланыс өзгермеген." };
        render();
        return;
      }
      db.pending.unshift({
        id: "q" + Date.now(),
        kind: "profile",
        studentId: student.id,
        nameFrom: student.name,
        nameTo: student.name,
        phoneFrom: student.phone,
        phoneTo: phone,
        from: student.phone,
        to: phone,
        reason,
        authorId: session.id,
        authorName: session.name,
        state: "wait",
      });
      log(session, "Байланыс жазылды", `${student.name}: ${student.phone} → ${phone}`);
      saveDb();
      flash = { type: "ok", text: "Жазылды. Бекіту бөлім басшысында. Ресми байланыс әзірге сол." };
      render();
    });
    document.querySelectorAll("[data-write]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (session.role !== "registrar") return;
        const ask = db.pending.find((item) => item.id === btn.dataset.write && item.kind === "ask" && item.state === "wait");
        if (!ask) return;
        ask.state = "written";
        db.pending.unshift({
          id: "q" + Date.now(),
          kind: "profile",
          studentId: ask.studentId,
          nameFrom: ask.nameFrom,
          nameTo: ask.nameTo,
          phoneFrom: ask.phoneFrom,
          phoneTo: ask.phoneTo,
          from: ask.phoneFrom,
          to: ask.phoneTo,
          reason: ask.reason,
          authorId: session.id,
          authorName: session.name,
          state: "wait",
        });
        log(session, "Дерек жазылды", `${ask.nameFrom}: байланыс немесе аты-жөні`);
        saveDb();
        flash = { type: "ok", text: "Жазылды. Бекіту бөлім басшысында." };
        render();
      });
    });
    document.querySelectorAll("[data-deny-delete]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const student = studentById(btn.dataset.denyDelete);
        log(session, "Жою тоқтатылды", student?.name || "жазба");
        flash = { type: "bad", text: "Жою құқығы жоқ." };
        render();
      });
    });
    document.getElementById("backup-make")?.addEventListener("click", () => {
      if (session.role !== "sysadmin") return;
      db.backup = db.backup || { copies: [], restores: [] };
      const label = "көшірме-" + new Date().toLocaleString("kk-KZ", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      db.backup.copies.unshift({ id: "b" + Date.now(), at: Date.now(), label });
      log(session, "Көшірме жасалды", label);
      saveDb();
      flash = { type: "ok", text: "Көшірме жасалды. Файл ашылмады." };
      render();
    });
    document.getElementById("backup-restore")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "sysadmin") return;
      const id = String(new FormData(e.target).get("copy") || "");
      const copy = (db.backup?.copies || []).find((item) => item.id === id);
      if (!copy) return;
      db.backup.restores.unshift({
        id: "r" + Date.now(),
        copyId: copy.id,
        label: copy.label,
        authorId: session.id,
        authorName: session.name,
        state: "wait",
        at: Date.now(),
      });
      log(session, "Қалпына келтіру сұралды", copy.label);
      saveDb();
      flash = { type: "ok", text: "Сұрау кетті. Бекіту қауіпсіздік әкімшісінде." };
      render();
    });
    document.getElementById("backup-self")?.addEventListener("click", () => {
      log(session, "Қалпына келтіру тоқтатылды", "Жүйе әкімшісі өз сұрауын бекітпейді");
      flash = { type: "bad", text: "Өз сұрауыңызды өзіңіз бекітпейсіз. Бекіту қауіпсіздік әкімшісінде." };
      render();
    });
    document.getElementById("backup-read")?.addEventListener("click", () => {
      log(session, "Қойма оқуы тоқтатылды", "Жеке өріс ашылмады");
      flash = { type: "bad", text: "Қойма өрісін оқу құқығы жоқ." };
      render();
    });
    document.querySelectorAll("[data-restore]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (session.role !== "secadmin") return;
        const item = (db.backup?.restores || []).find((row) => row.id === btn.dataset.restore);
        if (!item || item.state !== "wait") return;
        if (item.authorId === session.id) {
          flash = { type: "bad", text: "Жазған адам бекітпейді." };
          render();
          return;
        }
        item.state = btn.dataset.state === "ok" ? "ok" : "no";
        log(session, item.state === "ok" ? "Қалпына келтіру бекітілді" : "Қалпына келтіру қайтарылды", item.label);
        saveDb();
        flash = { type: "ok", text: item.state === "ok" ? "Бекітілді. Файл ашылмады." : "Сұрау қайтарылды." };
        render();
      });
    });
    document.getElementById("paper-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "registrar") return;
      const data = new FormData(e.target);
      const title = String(data.get("title") || "").trim();
      const text = String(data.get("text") || "").trim();
      const kind = String(data.get("kind") || "doc");
      if (!title || !text) return;
      db.papers = db.papers || [];
      db.papers.unshift({
        id: "d" + Date.now(),
        kind: kind === "event" || kind === "order" ? kind : "doc",
        title,
        text,
        place: String(data.get("place") || "").trim(),
        when: String(data.get("when") || "").trim(),
        authorName: session.name,
        authorId: session.id,
        state: "wait",
        at: Date.now(),
      });
      log(session, "Құжат жіберілді", title);
      saveDb();
      flash = { type: "ok", text: "Деканға кетті. Қол қойылмайынша күшінде емес." };
      render();
    });
    document.getElementById("event-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (session.role !== "dean") return;
      const data = new FormData(e.target);
      const title = String(data.get("title") || "").trim();
      const text = String(data.get("text") || "").trim();
      const place = String(data.get("place") || "").trim();
      const when = String(data.get("when") || "").trim();
      if (!title || !text || !when) return;
      db.papers = db.papers || [];
      db.papers.unshift({
        id: "d" + Date.now(),
        kind: "event",
        title,
        text,
        place,
        when,
        authorName: session.name,
        authorId: session.id,
        state: "signed",
        at: Date.now(),
      });
      log(session, "Іс-шара өткізілді", `${title} · ${place} · ${when}`);
      saveDb();
      flash = { type: "ok", text: "Іс-шара қол қойылды және сайтта көрінеді." };
      render();
    });
    document.querySelectorAll("[data-sign]").forEach((btn) => {
      btn.addEventListener("click", () => signPaper(btn.dataset.sign, "signed"));
    });
    document.querySelectorAll("[data-sign-no]").forEach((btn) => {
      btn.addEventListener("click", () => signPaper(btn.dataset.signNo, "no"));
    });
    const systems = systemCtx();
    CampusDbms.bind(systems);
    CampusAcs.bind(systems);
  }

  function systemCtx() {
    return {
      db,
      session,
      esc,
      shell,
      fmt,
      log,
      save: saveDb,
      render,
      note(type, text) {
        flash = { type, text };
      },
      holders() {
        return db.students.map((student) => ({
          name: student.name,
          card: student.card,
          status: student.status,
        }));
      },
      counts() {
        return { students: db.students.length, grades: db.grades.length };
      },
    };
  }


  function signPaper(id, state) {
    if (session.role !== "dean") return;
    const item = (db.papers || []).find((paper) => paper.id === id);
    if (!item || item.state !== "wait") return;
    item.state = state;
    log(session, state === "signed" ? "Қол қойылды" : "Құжат қайтарылды", item.title);
    saveDb();
    flash = { type: "ok", text: state === "signed" ? "Қол қойылды." : "Құжат қайтарылды." };
    render();
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
    const allowed = session.role === "head" && (item.kind === "profile" || item.kind === "status" || item.kind === "grade");
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
