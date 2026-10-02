const LAB2 = {
  lab: "№2 зертханалық жұмыс",
  title: "Ақпараттық активтерді түгендеу және жіктеу",
  lead:
    "Smart Campus активтерін анықтау, иелерін белгілеу, CIA бойынша бағалау және қорғау талаптарын қалыптастыру.",
  goal:
    "Ұйымның ақпараттық активтерін анықтау, олардың иелерін белгілеу, құндылығын бағалау және қорғау талаптарын қалыптастыру дағдыларын меңгеру.",
  equipment:
    "Дербес компьютер, мәтіндік редактор немесе электрондық кесте, оқытушы ұсынған ұйым сценарийі.",
  object: {
    name: "Smart Campus — жоғары оқу орнының цифрлық кампусы",
    text:
      "Зерттеу нысаны — оқу процесі, ғимаратқа кіру және кампус сервистері біріктірілген смарт-кампус. Мұнда студенттер порталы, жеке деректер қоры, RFID өткізу жүйесі, Wi-Fi, IoT сенсорлар, бейнебақылау және сәйкестендіру қызметі жұмыс істейді. Жобалау активтің бағасынан емес, оның бизнес-процестегі рөлінен және құпиялылық, тұтастық, қолжетімділік талаптарынан басталады.",
    processes: [
      { title: "Оқу процесі", text: "Портал, LMS нәтижелері, оқытушылар есептері" },
      { title: "Кампусқа кіру", text: "ACS, RFID карта, өткізу журналы, күзет" },
      { title: "ИТ қызметі", text: "Серверлер, ДҚБЖ, IAM, желі, резервтік көшіру" },
    ],
  },
  theory:
    "Ақпараттық актив — ұйым үшін құндылығы бар және қорғауды қажет ететін дерек, бағдарламалық құрал, аппараттық құрал, қызмет, құжат, инфрақұрылым немесе құзырет. Жобалау активтің өзінен емес, оның бизнес-процестегі рөлінен және құпиялылық, тұтастық, қолжетімділік талаптарынан басталады. Тізілімде атауы, түрі, иесі, орналасуы, өңделетін ақпарат, тәуелділіктер және қорғау деңгейі көрсетіледі. Жіктеу шешімі қолжетімділік тәртібіне, шифрлауға, резервтік көшіруге, журналдауға және сақтау мерзіміне айналады.",
  tasks: [
    {
      n: "01",
      title: "Нысан",
      text: "Зерттеу нысаны — жоғары оқу орнының Smart Campus сценарийі.",
    },
    {
      n: "02",
      title: "Түгендеу",
      text: "Кемінде 12 актив: дерек, бағдарламалық, аппараттық, желілік, адами және қызметтік түрлер.",
    },
    {
      n: "03",
      title: "Иесі",
      text: "Әр активке иесі, пайдаланушысы, орналасуы және кемінде екі тәуелділік.",
    },
    {
      n: "04",
      title: "CIA",
      text: "Құпиялылық, тұтастық және қолжетімділік 1–3 шкаласымен бағаланады.",
    },
    {
      n: "05",
      title: "Санат",
      text: "Жиынтық C + I + A: 3–4 төмен, 5–7 орташа, 8–9 жоғары.",
    },
    {
      n: "06",
      title: "Қорғау",
      text: "Әр жоғары активке кемінде үш қорғау талабы тұжырымдалады.",
    },
    {
      n: "07",
      title: "Сызба",
      text: "Активтер арасындағы тәуелділіктің қарапайым сызбасы.",
    },
  ],
  scale: {
    lead:
      "Бағалау 1–3 шкаласымен жүргізіледі. Жиынтық маңыздылық C + I + A формуласымен есептеледі: 3–4 төмен, 5–7 орташа, 8–9 жоғары.",
    cia: [
      {
        key: "C",
        name: "Құпиялылық",
        items: [
          "1 — жария немесе оңай қалпына келетін мәлімет",
          "2 — ішкі қызметтік ақпарат, шектеулі зиян",
          "3 — жеке деректер, қолжетімділік құқықтары, кампус қауіпсіздігі",
        ],
      },
      {
        key: "I",
        name: "Тұтастық",
        items: [
          "1 — қатенің әсері аз, тез түзетіледі",
          "2 — оқу немесе операциялық процесті бұзады",
          "3 — рұқсатсыз өзгерту заңдық/қауіпсіздік салдарға әкеледі",
        ],
      },
      {
        key: "A",
        name: "Қолжетімділік",
        items: [
          "1 — қызмет уақытша тоқтаса да негізгі процесс жүреді",
          "2 — сабақ немесе әкімшілік жұмыс кешігеді",
          "3 — кампус кіруі, портал немесе сәйкестендіру тоқтайды",
        ],
      },
    ],
    cats: [
      { range: "3–4", label: "Төмен", note: "Базалық қорғау жеткілікті" },
      { range: "5–7", label: "Орташа", note: "Бақылау шаралары мен мониторинг қажет" },
      { range: "8–9", label: "Жоғары", note: "Кемінде үш қорғау талабы міндетті" },
    ],
  },
  types: [
    { id: "data", label: "Дерек" },
    { id: "software", label: "Бағдарламалық" },
    { id: "hardware", label: "Аппараттық" },
    { id: "network", label: "Желілік" },
    { id: "human", label: "Адами" },
    { id: "service", label: "Қызметтік" },
  ],
  assets: [
    {
      id: "student-db",
      name: "Студенттердің жеке деректер қоры",
      type: "data",
      owner: "Тіркеуші офис / дерек қорғау офицері",
      users: "Деканат, тіркеуші қызмет, портал сервистері",
      location: "Кампус ДҚ сервері, ішкі сегмент",
      info: "ЖСН, аты-жөні, байланыс, оқу мәртебесі",
      deps: ["dbms", "servers", "wifi"],
      c: 3,
      i: 3,
      a: 2,
      protect: [
        "RBAC: тек тіркеуші және рұқсат етілген сервистерге қолжетімділік",
        "Сақтауда және берілісте шифрлау (at rest + TLS)",
        "Күнделікті резервтік көшірме және тоқсан сайын қалпына келтіру сынағы",
      ],
    },
    {
      id: "access-logs",
      name: "Өткізу журналы және RFID карта деректері",
      type: "data",
      owner: "Кампус қауіпсіздік қызметі",
      users: "Күзет операторлары, АҚ офицері",
      location: "ACS сервері",
      info: "Кіру/шығу уақыты, карта идентификаторы, бөлме",
      deps: ["acs", "iam", "wifi"],
      c: 3,
      i: 3,
      a: 2,
      protect: [
        "Журналға жазу құқығын тек ACS пен АҚ рөлдеріне беру",
        "Тұтастықты бақылау: өзгертуді тыйым салу, append-only журнал",
        "Сақтау мерзімі: кемінде 12 ай, кейін мұрағаттау саясаты",
      ],
    },
    {
      id: "lms-grades",
      name: "LMS оқу нәтижелері",
      type: "data",
      owner: "Оқу бөлімі",
      users: "Оқытушылар, студенттер (тек өз нәтижесі)",
      location: "LMS дерекқоры",
      info: "Баға, қатысу, тапсырма статусы",
      deps: ["portal", "dbms"],
      c: 2,
      i: 3,
      a: 2,
    },
    {
      id: "portal",
      name: "Smart Campus порталы",
      type: "software",
      owner: "Цифрлық кампус бөлімі",
      users: "Студенттер, оқытушылар, әкімшілік",
      location: "Веб-сервер / қолданба контейнері",
      info: "Жеке кабинет, өтініштер, хабарламалар",
      deps: ["iam", "student-db", "wifi"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "SSO және міндетті MFA арқылы кіру",
        "Патчтар, тәуелділіктерді жаңарту және қолданбалық брандмауэр",
        "Қолжетімділікті мониторингтеу: uptime, қате журналы, инцидент рәсімі",
      ],
    },
    {
      id: "acs",
      name: "Қолжетімділікті басқару жүйесі (ACS)",
      type: "software",
      owner: "Кампус қауіпсіздік қызметі",
      users: "Күзет, ғимарат әкімшісі",
      location: "ACS сервері және есік контроллерлері",
      info: "Рұқсат ережелері, карта мәртебесі, бөлме аймақтары",
      deps: ["iam", "access-logs", "servers"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "Контроллерлерді бөлек VLAN-ға шығару",
        "Рұқсат ережелерінің өзгеріс журналы және екі адамдық бекіту",
        "Авариялық қолжетімділік тәртібі және артық контроллер",
      ],
    },
    {
      id: "dbms",
      name: "Дерекқорды басқару жүйесі (ДҚБЖ)",
      type: "software",
      owner: "Дерекқор әкімшісі",
      users: "Портал сервистері, шектеулі әзірлеушілер",
      location: "ДҚ сервері, сервер бөлмесі",
      info: "Құрылымдық деректер, есептік жазбалар, журналдар",
      deps: ["servers", "student-db", "backup"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "Әкімшілік қолжетімділікті бөлу және least privilege",
        "Аутентификацияланған қосылым, TLS, құпия сөзді қоймада сақтамау",
        "Аудит журналы, нүктелік қалпына келтіру, сынақ ортасын бөлу",
      ],
    },
    {
      id: "servers",
      name: "Кампус серверлері",
      type: "hardware",
      owner: "ИТ инфрақұрылым бөлімі",
      users: "Жүйелік әкімшілер",
      location: "Кампус сервер бөлмесі",
      info: "Сервистердің жұмыс жүктемесі, жүйелік журнал",
      deps: ["wifi", "backup", "officer"],
      c: 2,
      i: 3,
      a: 3,
      protect: [
        "Физикалық қолжетімділік: карта + бейнебақылау + келу журналы",
        "UPS, климат бақылауы және жабдық мониторингі",
        "ОЖ патчтары, қажетсіз қызметтерді өшіру, резервтік алаң",
      ],
    },
    {
      id: "cctv",
      name: "Бейнебақылау камералары",
      type: "hardware",
      owner: "Кампус қауіпсіздік қызметі",
      users: "Күзет операторлары",
      location: "Кіреберістер, дәліздер, тұрақ",
      info: "Бейнеағын, қозғалыс метадеректері",
      deps: ["wifi", "servers"],
      c: 2,
      i: 2,
      a: 2,
    },
    {
      id: "wifi",
      name: "Кампус Wi-Fi және коммутаторлар",
      type: "network",
      owner: "Желілік әкімші",
      users: "Студенттер, қызметкерлер, қонақ VLAN",
      location: "Ғимарат коммутация шкафтары",
      info: "Трафик, MAC/IP, желілік аутентификация",
      deps: ["iam", "servers", "iot"],
      c: 2,
      i: 3,
      a: 3,
      protect: [
        "WPA3 / 802.1X және қонақ желісін бөлу",
        "VLAN сегментациясы: ACS, IoT, пайдаланушы, сервер",
        "Firmware жаңартуы, порт қауіпсіздігі және желі журналы",
      ],
    },
    {
      id: "iot",
      name: "IoT сенсорлар желісі",
      type: "network",
      owner: "Smart building инженері",
      users: "Әкімшілік қызметкерлер",
      location: "Аудиториялар, жарық және жылу жүйелері",
      info: "Температура, жарық, бөлменің бос/толы мәртебесі",
      deps: ["wifi", "servers"],
      c: 1,
      i: 1,
      a: 2,
    },
    {
      id: "officer",
      name: "Ақпараттық қауіпсіздік офицері",
      type: "human",
      owner: "Ректорат / АҚ бөлімі",
      users: "АҚ командасы",
      location: "АҚ бөлімі, кампус",
      info: "Саясат, инцидент шешімдері, қолжетімділік келісімі",
      deps: ["iam", "servers", "portal", "wifi"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "Ең аз құқық қағидасы және артықшылықты есептерді бөлу",
        "Міндетті MFA, құзыретті арттыру, құпиялылық міндеттемесі",
        "Орынбасарды тағайындау: офицер болмағанда процесс тоқтамауы тиіс",
      ],
    },
    {
      id: "staff",
      name: "Әкімшілік қызметкерлер",
      type: "human",
      owner: "HR және ИТ бөлімі",
      users: "Әкімшілік кеңсе",
      location: "Кампус, портал",
      info: "Қызметтік жұмыс порталда. Желіге бөлек Wi-Fi арқылы шығады, IoT сенсорлар соларға керек. Студенттер дерекқорына кірмейді",
      deps: ["iam", "portal", "wifi", "iot"],
      c: 2,
      i: 2,
      a: 2,
    },
    {
      id: "students",
      name: "Студенттер",
      type: "human",
      owner: "Оқу бөлімі",
      users: "Студенттер",
      location: "Кампус, портал, Wi-Fi",
      info: "Жеке кабинет, өз бағасы, кампус картасы",
      deps: ["iam", "portal", "lms-grades", "wifi"],
      c: 2,
      i: 2,
      a: 2,
    },
    {
      id: "teachers",
      name: "Оқытушылар",
      type: "human",
      owner: "Оқу бөлімі",
      users: "Оқытушылар",
      location: "Кампус, портал, LMS",
      info: "Пән, баға қою, оқу материалдары",
      deps: ["iam", "portal", "lms-grades", "wifi"],
      c: 2,
      i: 3,
      a: 2,
    },
    {
      id: "guards",
      name: "Күзет",
      type: "human",
      owner: "Кампус қауіпсіздік қызметі",
      users: "Күзет операторлары",
      location: "Күзет бекеті, ACS, бейнебақылау",
      info: "Кіру рұқсаты, өткізу журналы, бейне",
      deps: ["iam", "acs", "access-logs", "cctv", "wifi"],
      c: 2,
      i: 2,
      a: 3,
    },
    {
      id: "registrar",
      name: "Тіркеуші офис",
      type: "human",
      owner: "Тіркеуші офис",
      users: "Тіркеуші қызмет, деканат",
      location: "Тіркеуші офис, студенттер дерекқоры",
      info: "Жеке дерек, оқу мәртебесі, бұйрық",
      deps: ["iam", "student-db", "portal", "wifi"],
      c: 3,
      i: 3,
      a: 2,
      protect: [
        "Студент дерекқорына тек тіркеуші рөлімен кіру",
        "Жеке дерек өзгерісінің журналы және екі адамдық бекіту",
        "Жұмыстан шыққанда есепті дереу жабу",
      ],
    },
    {
      id: "sysadmin",
      name: "Жүйелік әкімшілер",
      type: "human",
      owner: "ИТ инфрақұрылым бөлімі",
      users: "Жүйелік және желілік әкімшілер",
      location: "Сервер бөлмесі, әкімшілік консоль",
      info: "Сервер, ДҚБЖ, желі және резерв құқықтары",
      deps: ["iam", "servers", "dbms", "backup", "wifi"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "Артықшылықты есепке міндетті MFA және бөлек әкімшілік рөл",
        "Әкімшілік әрекеттің толық журналы",
        "Кезекші әкімші: біреуі болмағанда кампус тоқтамауы тиіс",
      ],
    },
    {
      id: "guests",
      name: "Қонақтар",
      type: "human",
      owner: "Желілік әкімші",
      users: "Қонақтар, іс-шара қатысушылары",
      location: "Қонақ Wi-Fi",
      info: "Уақытша желілік кіру",
      deps: ["wifi"],
      c: 1,
      i: 1,
      a: 1,
    },
    {
      id: "iam",
      name: "Сәйкестендіру және қолжетімділік қызметі (IAM)",
      type: "service",
      owner: "ИТ қауіпсіздік бөлімі",
      users: "Кампустың барлық пайдаланушылары",
      location: "Каталог сервері / SSO",
      info: "Логин, рөл, токен, MFA статусы",
      deps: ["portal", "acs", "wifi"],
      c: 3,
      i: 3,
      a: 3,
      protect: [
        "Міндетті MFA және құпия сөз саясаты",
        "RBAC / ең аз құқық, жұмыстан шыққанда дереу есепті жабу",
        "Сәтсіз кіру журналы, сессияны басқару, артықшылықты есептер аудиті",
      ],
    },
    {
      id: "backup",
      name: "Резервтік көшіру қызметі",
      type: "service",
      owner: "ИТ инфрақұрылым бөлімі",
      users: "Жүйелік әкімшілер",
      location: "Екінші алаң және офлайн қойма",
      info: "ДҚ және жүйе көшірмелері",
      deps: ["servers", "student-db", "dbms"],
      c: 2,
      i: 3,
      a: 3,
      protect: [
        "3-2-1 ережесі: үш көшірме, екі тасымалдағыш, бір офсайт",
        "Көшірмені шифрлау және қалпына келтіру құқығын шектеу",
        "Тоқсан сайын restore-тест және сақтау мерзімін бекіту",
      ],
    },
  ],
  diagram: {
    edges: [
      ["students", "iam", "use"],
      ["teachers", "iam", "use"],
      ["staff", "iam", "use"],
      ["guards", "iam", "use"],
      ["registrar", "iam", "use"],
      ["officer", "iam", "use"],
      ["sysadmin", "iam", "use"],
      ["iam", "portal"],
      ["iam", "acs"],
      ["portal", "student-db"],
      ["portal", "lms-grades"],
      ["portal", "dbms"],
      ["acs", "access-logs"],
      ["access-logs", "servers"],
      ["dbms", "lms-grades"],
      ["lms-grades", "backup"],
      ["student-db", "wifi"],
      ["servers", "wifi"],
      ["wifi", "iot"],
      ["wifi", "cctv"],
    ],
  },
  conclusion: {
    text:
      "Smart Campus-та қорғау жеке құрылғыдан емес, өзара тәуелді активтер торынан басталады. Жоғары санат IAM, портал, ДҚБЖ, студенттер дерекқоры, ACS және серверлер төңірегінде шоғырланған. Егер желі немесе сәйкестендіру қызметі әлсіз болса, жеке активті қорғау жеткіліксіз.",
    recs: [
      "Активтер тізілімін тірі құжат ретінде жүргізу: жаңа жүйе, иесі немесе орналасуы өзгергенде дереу жаңарту.",
      "Әр жоғары активке нақты ие мен үш қорғау талабын бекіту: қолжетімділік тәртібі, шифрлау/журнал, резерв.",
      "Тәуелділікті ескеру: IAM, желі және резервтік көшіру — көп активтің ортақ нүктесі.",
      "CIA бағасын оқу жылында кемінде бір рет және ірі өзгерістен кейін қайта қарау.",
    ],
  },
  literature: [
    {
      n: "1",
      title: "ISO/IEC 27001:2022. Information security management systems — Requirements",
      note: "АҚБЖ талаптары: активтерді басқару және қорғау шараларының негізі",
      url: "https://www.iso.org/standard/27001",
      source: "iso.org",
    },
    {
      n: "2",
      title: "ISO/IEC 27002:2022. Information security controls",
      note: "Қолжетімділік, шифрлау, резерв, журналдау сияқты бақылау шаралары",
      url: "https://www.iso.org/standard/75652.html",
      source: "iso.org",
    },
  ],
  questions: [
    {
      num: 1,
      text: "Ақпараттық актив пен ақпараттық ресурс ұғымдарының айырмашылығы қандай?",
      answer:
        "Ақпараттық ресурс — ақпаратты сақтауға, өңдеуге немесе беруге қолданылатын құрал: сервер, желі, дерекқор, құжат. Ақпараттық актив кеңірек: бұл ұйым үшін құнды және қорғауды қажет ететін кез келген объект, оның ішінде дерек, бағдарлама, жабдық, қызмет, адам құзыреті. Ресурс — құрал, актив — бизнес-процестегі құндылық. Жобалау ресурстың тізімінен емес, активтің рөлі мен CIA талаптарынан басталады.",
    },
    {
      num: 2,
      text: "Актив иесі қандай шешімдерге жауап береді?",
      answer:
        "Иесі активтің жіктеуін, қолжетімділік тәртібін, қорғау талаптарын, сақтау мерзімін және кімнің пайдаланатынын бекітеді. Ол жіктеу деңгейін өзгертуге, жаңа пайдаланушыға рұқсат беруге немесе тәуекелді қабылдауға жауапты. Пайдаланушы активті күнделікті қолданады, бірақ саясатты бекітпейді. Мысалы, студенттер дерекқорының иесі — тіркеуші офис, ал деканат — пайдаланушы.",
    },
    {
      num: 3,
      text: "Неліктен активтің құны тек сатып алу бағасымен өлшенбейді?",
      answer:
        "Құн — жоғалту, бұрмалау немесе қолжетімсіздік кезіндегі зиян. Арзан дерекқорда жеке деректер болса, оның құны қымбат, бірақ аз қолданылатын жабдықтан жоғары болуы мүмкін. Бағаға заңдық жауапкершілік, бедел, қалпына келтіру уақыты және тәуелді активтердің тоқтауы кіреді. Сондықтан бағалау C, I, A бойынша жүргізіледі.",
    },
    {
      num: 4,
      text: "Құпиялылық, тұтастық және қолжетімділік бағалары қалай негізделеді?",
      answer:
        "Әр баға активтің бизнес-процестегі рөліне және салдарға сүйенеді. Құпиялылық — кім көрмеуі керек (жеке дерек — 3, жария контент — 1). Тұтастық — рұқсатсыз өзгерту не әкеледі (баға мен өткізу журналы — жоғары). Қолжетімділік — қызмет тоқтаса процесс жүре ме (IAM мен ACS тоқтаса кампус жұмысы бұзылады — 3). Негіздеме нақты сценариймен жазылады, сандар жай қойылмайды.",
    },
    {
      num: 5,
      text: "Активтердің тәуелділігін елемеу қандай жобалау қатесіне әкелуі мүмкін?",
      answer:
        "Жеке актив қорғалған болып көрінеді, бірақ оны ұстап тұрған IAM, желі немесе резерв әлсіз қалады. Сонда шабуыл немесе істен шығу тәуелділік арқылы өтеді: порталды қорғап, Wi-Fi-ды ашық қалдыру. Бұл жалған қорғаныс сезімін және толық емес тәуекел моделін тудырады. Сондықтан тізілімде әр активке кемінде екі тәуелділік көрсетіледі.",
    },
    {
      num: 6,
      text: "Активтер тізілімі қаншалықты жиі жаңартылуы тиіс?",
      answer:
        "Тізілім өзгеріс болған сайын жаңартылады: жаңа жүйе, есептен шығару, иесінің ауысуы, орналасудың өзгеруі. Сонымен қатар жоспарлы қайта қарау керек — оқу кампусында кемінде семестрде немесе жылына бір рет. Инциденттен, аудиттен және ірі енгізуден кейін де қайта қаралады. Ескірген тізілім қате жіктеуге және қорғаудың олқылығына әкеледі.",
    },
  ],
};

function lab2Category(asset) {
  const sum = asset.c + asset.i + asset.a;
  if (sum >= 8) return { key: "high", label: "Жоғары", sum };
  if (sum >= 5) return { key: "medium", label: "Орташа", sum };
  return { key: "low", label: "Төмен", sum };
}

function lab2AssetById(id) {
  return LAB2.assets.find((a) => a.id === id);
}

function lab2TypeLabel(typeId) {
  return LAB2.types.find((t) => t.id === typeId)?.label || typeId;
}

const LAB2_SHORT = {
  "student-db": "Студенттер ДҚ",
  "access-logs": "Өткізу журналы",
  "lms-grades": "LMS нәтижесі",
  portal: "Портал",
  acs: "ACS",
  dbms: "ДҚБЖ",
  servers: "Серверлер",
  cctv: "Бейнебақылау",
  wifi: "Wi-Fi",
  iot: "IoT сенсорлар",
  officer: "АҚ офицері",
  staff: "Әкімшілік",
  students: "Студенттер",
  teachers: "Оқытушылар",
  guards: "Күзет",
  registrar: "Тіркеуші",
  sysadmin: "Жүйе әкімшісі",
  guests: "Қонақтар",
  iam: "IAM",
  backup: "Резерв",
};

const LAB2_USE = {
  students: "портал, LMS, Wi-Fi",
  teachers: "портал, LMS, Wi-Fi",
  staff: "портал, IoT, Wi-Fi",
  guards: "ACS, бейне, Wi-Fi",
  registrar: "дерекқор, Wi-Fi",
  officer: "IAM, Wi-Fi",
  sysadmin: "сервер, ДҚБЖ, Wi-Fi",
  guests: "қонақ Wi-Fi",
};

function lab2Stats() {
  const counts = { high: 0, medium: 0, low: 0 };
  LAB2.assets.forEach((asset) => {
    counts[lab2Category(asset).key] += 1;
  });
  return { total: LAB2.assets.length, ...counts };
}

function viewLab2() {
  const stats = lab2Stats();
  const typeCards = LAB2.types
    .map((type) => {
      const n = LAB2.assets.filter((a) => a.type === type.id).length;
      return `<span class="type-pill"><strong>${type.label}</strong><em>${n}</em></span>`;
    })
    .join("");

  const filters = [
    { id: "all", label: `Барлығы · ${stats.total}` },
    ...LAB2.types.map((t) => ({ id: t.id, label: t.label })),
    { id: "high", label: "Жоғары" },
    { id: "medium", label: "Орташа" },
    { id: "low", label: "Төмен" },
  ]
    .map(
      (f, i) =>
        `<button type="button" class="chip${i === 0 ? " is-on" : ""}" data-filter="${f.id}">${f.label}</button>`
    )
    .join("");

  const rows = LAB2.assets
    .map((asset) => {
      const cat = lab2Category(asset);
      const deps = asset.deps
        .map((id) => LAB2_SHORT[id] || lab2AssetById(id)?.name || id)
        .join(", ");
      const protect = asset.protect
        ? `<ul class="protect-list">${asset.protect.map((p) => `<li>${p}</li>`).join("")}</ul>`
        : `<p class="muted">Базалық қорғау: рөлдік қолжетімділік және өзгеріс журналы. Үш міндетті талап жоғары санатқа жазылады.</p>`;
      return `
        <tr class="asset-row" data-id="${asset.id}" data-type="${asset.type}" data-cat="${cat.key}">
          <td>
            <strong>${asset.name}</strong>
            <span class="cell-sub">${asset.info}</span>
          </td>
          <td>${lab2TypeLabel(asset.type)}</td>
          <td>${asset.owner}</td>
          <td class="num">${asset.c}</td>
          <td class="num">${asset.i}</td>
          <td class="num">${asset.a}</td>
          <td class="num">${cat.sum}</td>
          <td><span class="cat cat-${cat.key}">${cat.label}</span></td>
        </tr>
        <tr class="asset-detail" data-detail="${asset.id}" hidden>
          <td colspan="8">
            <div class="detail-grid">
              <p><em>Пайдаланушы</em>${asset.users}</p>
              <p><em>Орналасуы</em>${asset.location}</p>
              <p><em>Тәуелділік</em>${deps}</p>
              <div class="detail-protect"><em>Қорғау талабы</em>${protect}</div>
            </div>
          </td>
        </tr>`;
    })
    .join("");

  const cia = LAB2.scale.cia
    .map(
      (item) => `
      <article class="cia-card">
        <span class="cia-key">${item.key}</span>
        <h3>${item.name}</h3>
        <ul>${item.items.map((line) => `<li>${line}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  const cats = LAB2.scale.cats
    .map(
      (cat) => `
      <article class="cat-card">
        <strong>${cat.range}</strong>
        <h3>${cat.label}</h3>
        <p>${cat.note}</p>
      </article>`
    )
    .join("");

  const highCards = LAB2.assets
    .filter((asset) => lab2Category(asset).key === "high")
    .map((asset) => {
      const cat = lab2Category(asset);
      return `
        <article class="protect-card">
          <header>
            <h3>${asset.name}</h3>
            <span class="cat cat-high">${cat.sum} · ${cat.label}</span>
          </header>
          <ul class="protect-list">${asset.protect.map((p) => `<li>${p}</li>`).join("")}</ul>
        </article>`;
    })
    .join("");

  const questions = LAB2.questions
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

  const literature = LAB2.literature
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

  const tasks = LAB2.tasks
    .map(
      (t, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${t.n}</span>
        <h3>${t.title}</h3>
        <p>${t.text}</p>
      </article>`
    )
    .join("");

  const processes = LAB2.object.processes
    .map(
      (p) => `
      <article class="process-card">
        <h3>${p.title}</h3>
        <p>${p.text}</p>
      </article>`
    )
    .join("");

  const recs = LAB2.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  return `
    <div class="view lab2">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab2-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB2.lab}</p>
          <h1 class="hero-title reveal">${LAB2.title}</h1>
          <p class="hero-lead reveal">${LAB2.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Тізілім жиынтығы">
          <div><strong>${stats.total}</strong><span>актив</span></div>
          <div><strong>${stats.high}</strong><span>жоғары санат</span></div>
          <div><strong>${LAB2.types.length}</strong><span>актив түрі</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/2">1. Мақсат</a>
        <a href="#lab/2/object">2. Нысан</a>
        <a href="#lab/2/registry">3. Тізілім</a>
        <a href="#lab/2/scale">4. Жіктеу</a>
        <a href="#lab/2/diagram">5. Сызба</a>
        <a href="#lab/2/quiz">6. Сұрақтар</a>
        <a href="#lab/2/conclusion">7. Қорытынды</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және тапсырма</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB2.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB2.equipment}</p>
        </div>
        <div class="task-grid">${tasks}</div>
      </section>

      <section class="block" id="object">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 2</p>
          <h2>Зерттеу нысаны</h2>
        </div>
        <article class="goal-card reveal">
          <h3>${LAB2.object.name}</h3>
          <p>${LAB2.object.text}</p>
        </article>
        <div class="process-grid">${processes}</div>
        <p class="theory reveal">${LAB2.theory}</p>
      </section>

      <section class="block" id="registry">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 3</p>
          <h2>Активтер тізілімі</h2>
          <p>${stats.total} актив: ${stats.high} жоғары, ${stats.medium} орташа, ${stats.low} төмен. Жолды ашсаңыз, пайдаланушы, орналасу және қорғау талабы шығады.</p>
        </div>
        <div class="type-row reveal">${typeCards}</div>
        <div class="chip-row reveal" id="asset-filters">${filters}</div>
        <div class="table-wrap reveal">
          <table class="reg-table">
            <thead>
              <tr>
                <th>Актив</th>
                <th>Түрі</th>
                <th>Иесі</th>
                <th>C</th>
                <th>I</th>
                <th>A</th>
                <th>Σ</th>
                <th>Санат</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="scale">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 4</p>
          <h2>Жіктеу шкаласы</h2>
          <p>${LAB2.scale.lead}</p>
        </div>
        <div class="cia-grid">${cia}</div>
        <div class="cat-grid">${cats}</div>
        <article class="goal-card reveal">
          <h3>Негіздеме</h3>
          <p>Сан активтің бағасынан емес, Smart Campus процесіндегі салдардан шығады. Студенттер дерекқорында жеке дерек бар, сондықтан құпиялылық — 3. Өткізу журналы мен баға өзгерсе, заңдық және оқу салдар туады, сондықтан тұтастық — 3. IAM, портал және ACS тоқтаса, кампус кіруі мен сәйкестендіру тоқтайды, сондықтан қолжетімділік — 3. IoT сенсорының деректері жарияға жақын және тез қалпына келеді: C = 1, I = 1.</p>
        </article>
      </section>

      <section class="block" id="diagram">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 5</p>
          <h2>Тәуелділік сызбасы</h2>
          <p>Адамды бассаңыз, соның жолы ашылады. IoT сенсорлар әкімшілікке керек: Wi-Fi-дан соларға ғана ашылады. Қонақтар порталға кірмейді: оларда тек Wi-Fi сызығы бар.</p>
        </div>
        <div class="diagram-layout">
          <div class="dep-wrap reveal">${lab2DiagramSvg()}</div>
          <aside class="dep-panel reveal" id="dep-panel">
            <p class="eyebrow">Таңдалған актив</p>
            <h3 id="dep-title">Түйінді таңдаңыз</h3>
            <p id="dep-text">Ортадағы сызық рет-ретімен жүреді: пайдаланушы → сәйкестендіру → портал → дерекқор → Wi-Fi → құрылғы.</p>
          </aside>
        </div>
        <div class="block-head protect-head reveal">
          <h2>Жоғары санаттың қорғау талаптары</h2>
          <p>Әр жоғары активке кемінде үш талап: қолжетімділік тәртібі, шифрлау немесе журнал, резерв не қолжетімділік.</p>
        </div>
        <div class="protect-grid">${highCards}</div>
      </section>

      <section class="block" id="quiz">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 6</p>
          <h2>Бақылау сұрақтарына жауап</h2>
        </div>
        <div class="qa-list">${questions}</div>
      </section>

      <section class="block" id="conclusion">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 7</p>
          <h2>Қорытынды және ұсынымдар</h2>
        </div>
        <article class="goal-card reveal">
          <p>${LAB2.conclusion.text}</p>
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

function lab2DiagramLayout() {
  const userW = 132;
  const userH = 58;
  const userGap = 14;
  const users = [
    "students",
    "teachers",
    "staff",
    "guards",
    "registrar",
    "officer",
    "sysadmin",
    "guests",
  ];
  const originX = 158;
  const originY = 16;
  const userSpan = users.length * userW + (users.length - 1) * userGap;
  const userNodes = users.map((id, index) => ({
    id,
    x: originX + index * (userW + userGap),
    y: originY,
    w: userW,
    h: userH,
    sub: LAB2_USE[id],
  }));

  const boxW = 200;
  const boxH = 46;
  const gapX = 48;
  const stepY = 112;
  const sysSpan = boxW * 3 + gapX * 2;
  const sysX = originX + (userSpan - sysSpan) / 2;
  const col = (index) => sysX + index * (boxW + gapX);
  const pair = (index) =>
    sysX + (sysSpan - (boxW * 2 + gapX)) / 2 + index * (boxW + gapX);
  const center = sysX + (sysSpan - boxW) / 2;
  const iamY = originY + userH + 72;
  const rowY = (row) => iamY + (row - 1) * stepY + (row === 5 ? 36 : 0);
  const node = (id, x, row) => ({ id, x, y: rowY(row), w: boxW, h: boxH });

  const nodes = [
    ...userNodes,
    node("iam", center, 1),
    node("acs", col(0), 2),
    node("portal", col(1), 2),
    node("dbms", col(2), 2),
    node("access-logs", col(0), 3),
    node("student-db", col(1), 3),
    node("lms-grades", col(2), 3),
    node("servers", col(0), 4),
    node("wifi", col(1), 4),
    node("backup", col(2), 4),
    node("iot", pair(0), 5),
    node("cctv", pair(1), 5),
  ];

  const labelY = (row) => (row === 0 ? originY + userH / 2 : rowY(row) + boxH / 2);

  return {
    nodes,
    labels: [
      ["Пайдаланушылар", 0],
      ["Сәйкестендіру", 1],
      ["Жүйелер", 2],
      ["Деректер", 3],
      ["Инфрақұрылым", 4],
      ["Құрылғылар", 5],
    ].map(([text, row]) => ({ text, y: labelY(row) })),
    stepY,
    railBase: originX + userSpan + 36,
    height: rowY(5) + boxH + 24,
    userIds: users,
  };
}

function lab2WifiPaths(layout, byId) {
  const people = LAB2.assets
    .filter((asset) => asset.type === "human" && asset.deps?.includes("wifi"))
    .map((asset) => byId[asset.id])
    .filter(Boolean);
  const wifi = byId.wifi;
  const busY = people[0].y + people[0].h + 18;
  const rail = byId.guests.x + byId.guests.w + 28;
  const approach = byId["access-logs"].y + byId["access-logs"].h + 16;
  const wifiX = wifi.x + wifi.w / 2;
  return people
    .map((person) => {
      const x = person.x + person.w / 2 + (person.id === "guests" ? 0 : 10);
      const d = `M ${x} ${person.y + person.h} L ${x} ${busY} L ${rail} ${busY} L ${rail} ${approach} L ${wifiX} ${approach} L ${wifiX} ${wifi.y}`;
      return `<path class="d-wifi" data-from="${person.id}" data-to="wifi" d="${d}" />`;
    })
    .join("");
}

function lab2SameRowPath(a, b, nodes) {
  const left = a.x <= b.x ? a : b;
  const right = a.x <= b.x ? b : a;
  const midY = left.y + left.h / 2;
  const blocked = nodes.some(
    (node) =>
      node.id !== left.id &&
      node.id !== right.id &&
      node.y === left.y &&
      node.x > left.x &&
      node.x < right.x
  );
  if (!blocked) return `M ${left.x + left.w} ${midY} L ${right.x} ${midY}`;

  const lane = left.y + left.h + 22;
  const x1 = left.x + 24;
  const x2 = right.x + right.w - 24;
  return `M ${x1} ${left.y + left.h} L ${x1} ${lane} L ${x2} ${lane} L ${x2} ${right.y + right.h}`;
}

function lab2SkipPath(top, bot, nodes) {
  const sx = top.x + top.w / 2;
  const tx = bot.x + bot.w / 2;
  const sy = top.y + top.h;
  const ty = bot.y;
  const yOut = sy + 18;
  const yIn = ty - 28;
  const aligned = Math.abs(sx - tx) < 2;
  let channel;

  if (aligned) {
    const hasLeft = nodes.some(
      (node) => node.y === bot.y && node.x + node.w <= bot.x && node.x + node.w >= bot.x - 40
    );
    const hasRight = nodes.some(
      (node) => node.y === bot.y && node.x >= bot.x + bot.w && node.x <= bot.x + bot.w + 40
    );
    if (!hasRight) channel = bot.x + bot.w + 18;
    else if (!hasLeft) channel = bot.x - 18;
    else channel = bot.x - 13;
  } else {
    channel = tx < sx ? bot.x - 18 : bot.x + bot.w + 18;
  }

  return `M ${sx} ${sy} L ${sx} ${yOut} L ${channel} ${yOut} L ${channel} ${yIn} L ${tx} ${yIn} L ${tx} ${ty}`;
}

function lab2EdgePath(a, b, nodes, stepY) {
  if (a.y === b.y) return lab2SameRowPath(a, b, nodes);

  const top = a.y < b.y ? a : b;
  const bot = a.y < b.y ? b : a;
  const sx = top.x + top.w / 2;
  const sy = top.y + top.h;
  const tx = bot.x + bot.w / 2;
  const ty = bot.y;
  const gap = ty - sy;

  if (gap < stepY) {
    if (Math.abs(sx - tx) < 2) return `M ${sx} ${sy} L ${tx} ${ty}`;
    const mid = Math.round(sy + gap / 2);
    return `M ${sx} ${sy} L ${sx} ${mid} L ${tx} ${mid} L ${tx} ${ty}`;
  }

  return lab2SkipPath(top, bot, nodes);
}

function lab2DiagramSvg() {
  const layout = lab2DiagramLayout();
  const byId = Object.fromEntries(layout.nodes.map((node) => [node.id, node]));
  const edges = LAB2.diagram.edges
    .map(([from, to, kind], index) => {
      const a = byId[from];
      const b = byId[to];
      if (!a || !b) return "";
      const d = lab2EdgePath(a, b, layout.nodes, layout.stepY);
      const use = kind === "use" ? " d-use" : "";
      return `<path class="d-edge${use}" data-from="${from}" data-to="${to}" data-index="${index}" d="${d}" />`;
    })
    .join("");

  const labels = layout.labels
    .map(
      (label) =>
        `<text class="d-label" x="12" y="${label.y}">${label.text}</text>`
    )
    .join("");

  const nodes = layout.nodes
    .map((node) => {
      const asset = lab2AssetById(node.id);
      const cat = asset ? lab2Category(asset).key : "low";
      const label = LAB2_SHORT[node.id] || node.id;
      const cx = node.x + node.w / 2;
      const text = node.sub
        ? `<text class="d-node-title" x="${cx}" y="${node.y + 22}">${label}</text>
           <text class="d-node-sub" x="${cx}" y="${node.y + 40}">${node.sub}</text>`
        : `<text x="${cx}" y="${node.y + node.h / 2}">${label}</text>`;
      return `
        <g class="d-node" data-id="${node.id}" data-cat="${cat}" tabindex="0" role="button">
          <title>${asset ? asset.name : label}</title>
          <rect x="${node.x}" y="${node.y}" width="${node.w}" height="${node.h}" rx="12" />
          ${text}
        </g>`;
    })
    .join("");

  const width = layout.railBase + 28;
  const height = layout.height;

  return `
    <div class="dep-figure">
      <svg class="dep-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Smart Campus активтерінің орындалу реті">
        <defs>
          <marker id="dep-arrow" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 1 L 10 5 L 0 9 Z" fill="#0d5c4b" />
          </marker>
          <marker id="dep-arrow-use" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 1 L 10 5 L 0 9 Z" fill="#8a3b12" />
          </marker>
          <marker id="dep-arrow-wifi" viewBox="0 0 10 10" markerWidth="14" markerHeight="14" refX="9" refY="5" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M 0 1 L 10 5 L 0 9 Z" fill="#1a4f6e" />
          </marker>
        </defs>
        ${labels}
        <g class="d-edges">${edges}</g>
        ${lab2WifiPaths(layout, byId)}
        ${nodes}
      </svg>
      <div class="dep-legend">
        <span><i class="dot dot-high"></i>Жоғары</span>
        <span><i class="dot dot-medium"></i>Орташа</span>
        <span><i class="dot dot-low"></i>Төмен</span>
        <span><i class="dash"></i>Пайдаланушы → IAM</span>
        <span><i class="wifi-line"></i>Бөлек Wi-Fi</span>
      </div>
    </div>`;
}

function lab2PersonRoute(id) {
  const asset = lab2AssetById(id);
  if (!asset || asset.type !== "human") return null;
  const goals = new Set(asset.deps || []);
  goals.delete("wifi");
  goals.delete("iot");
  const closed = new Set(id === "students" || id === "teachers" || id === "staff" ? ["student-db"] : []);
  const adj = new Map();
  LAB2.diagram.edges.forEach(([from, to], index) => {
    if (closed.has(to)) return;
    if (!adj.has(from)) adj.set(from, []);
    adj.get(from).push({ from, to, index });
  });

  const chosen = new Set();
  const nodes = new Set([id]);
  goals.forEach((goal) => {
    const dist = new Map([[id, 0]]);
    const prev = new Map();
    const queue = [id];
    while (queue.length) {
      queue.sort((a, b) => dist.get(a) - dist.get(b));
      const node = queue.shift();
      if (node === goal) break;
      for (const edge of adj.get(node) || []) {
        const step = goals.has(edge.to) ? 0.01 : 1;
        const next = dist.get(node) + step;
        if (next < (dist.get(edge.to) ?? Infinity)) {
          dist.set(edge.to, next);
          prev.set(edge.to, edge);
          queue.push(edge.to);
        }
      }
    }
    let cursor = goal;
    while (prev.has(cursor)) {
      const edge = prev.get(cursor);
      chosen.add(edge.index);
      nodes.add(edge.from);
      nodes.add(edge.to);
      cursor = edge.from;
    }
  });
  return { chosen, nodes };
}

function lab2RouteText(id, chosen) {
  const names = [];
  const seen = new Set();
  const walk = (node) => {
    if (seen.has(node)) return;
    seen.add(node);
    names.push(LAB2_SHORT[node] || node);
    LAB2.diagram.edges.forEach(([from, to], index) => {
      if (from === node && chosen.has(index)) walk(to);
    });
  };
  walk(id);
  return names.join(" → ");
}

function bindLab2() {
  const filters = document.getElementById("asset-filters");
  const panelTitle = document.getElementById("dep-title");
  const panelText = document.getElementById("dep-text");
  if (!filters || filters.dataset.bound) return;
  filters.dataset.bound = "1";

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const key = button.dataset.filter;
    filters.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.toggle("is-on", chip === button);
    });
    document.querySelectorAll(".asset-row").forEach((row) => {
      const show =
        key === "all" || row.dataset.type === key || row.dataset.cat === key;
      row.hidden = !show;
      const detail = document.querySelector(`[data-detail="${row.dataset.id}"]`);
      if (!show && detail) detail.hidden = true;
      row.classList.toggle("is-open", show && detail && !detail.hidden);
    });
  });

  document.querySelectorAll(".asset-row").forEach((row) => {
    row.addEventListener("click", () => {
      const detail = document.querySelector(`[data-detail="${row.dataset.id}"]`);
      if (!detail || row.hidden) return;
      const open = detail.hidden;
      document.querySelectorAll(".asset-detail").forEach((item) => {
        item.hidden = true;
      });
      document.querySelectorAll(".asset-row").forEach((item) => {
        item.classList.remove("is-open");
      });
      detail.hidden = !open;
      row.classList.toggle("is-open", open);
    });
  });

  function showAsset(id) {
    const asset = lab2AssetById(id);
    if (!asset || !panelTitle || !panelText) return;
    const cat = lab2Category(asset);
    const deps = asset.deps
      .map((dep) => LAB2_SHORT[dep] || dep)
      .join(", ");
    const route = lab2PersonRoute(id);
    const linked = route ? route.nodes : new Set([id, ...(asset.deps || [])]);
    if (!route) {
      LAB2.assets.forEach((item) => {
        if (item.deps?.includes(id)) linked.add(item.id);
      });
      LAB2.diagram.edges.forEach(([from, to]) => {
        if (from === id) linked.add(to);
        if (to === id) linked.add(from);
      });
    }

    panelTitle.textContent = asset.name;
    const routeLabel = route ? lab2RouteText(id, route.chosen) : "";
    const withWifi = asset.deps?.includes("wifi")
      ? `${routeLabel}${routeLabel ? " → " : ""}Wi-Fi`
      : routeLabel;
    if (route && asset.deps?.includes("wifi")) linked.add("wifi");
    if (route && asset.deps?.includes("iot")) linked.add("iot");
    const iotTail = route && asset.deps?.includes("iot") ? " → IoT сенсорлар" : "";
    panelText.textContent = route
      ? `${lab2TypeLabel(asset.type)} · ${cat.label} (${asset.c}/${asset.i}/${asset.a} = ${cat.sum}). Жолы: ${withWifi}${iotTail}.`
      : `${lab2TypeLabel(asset.type)} · ${cat.label} (${asset.c}/${asset.i}/${asset.a} = ${cat.sum}). Иесі: ${asset.owner}. Байланыс: ${deps}.`;

    document.querySelector(".dep-svg")?.classList.add("is-active");
    document.querySelectorAll(".d-node").forEach((node) => {
      const on = linked.has(node.dataset.id);
      node.classList.toggle("is-on", node.dataset.id === id);
      node.classList.toggle("is-dim", !on);
    });
    const usesWifi = id === "wifi" || asset.deps?.includes("wifi");
    document.querySelectorAll(".d-edge").forEach((edge) => {
      const onIot =
        route &&
        asset.deps?.includes("iot") &&
        edge.dataset.from === "wifi" &&
        edge.dataset.to === "iot";
      const on = route
        ? route.chosen.has(Number(edge.dataset.index)) || onIot
        : edge.dataset.from === id || edge.dataset.to === id;
      edge.classList.toggle("is-on", on);
    });
    document.querySelectorAll(".d-wifi").forEach((edge) => {
      const on = id === "wifi" || (usesWifi && edge.dataset.from === id);
      edge.classList.toggle("is-on", on);
    });
  }

  document.querySelectorAll(".d-node").forEach((node) => {
    node.addEventListener("click", () => showAsset(node.dataset.id));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showAsset(node.dataset.id);
      }
    });
  });
}
