const LAB3 = {
  lab: "№3 зертханалық жұмыс",
  title: "Қауіптер мен ықтимал бұзушыны модельдеу",
  lead:
    "Студенттердің жеке деректер қоры үшін сенім шекарасын, бұзушы профилін және STRIDE қауіптерін бір модельге жинау.",
  goal:
    "Қорғалатын жүйенің шекарасын анықтау, қауіп көздерін, осалдықтарды және шабуыл сценарийлерін байланыстыру арқылы негізделген қауіптер моделін әзірлеу.",
  equipment:
    "Дербес компьютер, диаграмма құру құралы, №2 жұмыста жасалған активтер тізілімі.",
  limit:
    "Жұмыс тек оқытушы ұсынған оқу деректері мен сызба негізінде орындалады. Нақты ұйымның жүйесін рұқсатсыз сканерлеуге, есептік жазбаны тексеруге немесе конфигурациясын өзгертуге болмайды.",
  object: {
    name: "№2 тізілімдегі барлық актив",
    text:
      "Зерттеу нысаны — №2 жұмыстағы Smart Campus тізілімінің толық құрамы: адамдар, деректер, жүйелер, желі және құрылғылар. Жоғары санат — жиынтық 8–9, бірақ модель бір активпен шектелмейді.",
  },
  theory:
    "Қауіптерді модельдеу жүйе іске қосылғаннан кейін ғана емес, жобалау кезінде жасалады. Модель қорғалатын активті, сенім шекарасын, дерек ағынын, қауіп көзін, осалдықты, әрекетті және бар бақылауды бір тізбекке жинайды. Бұзушы моделі адамның суреті емес: ішкі немесе сыртқы субъектінің уәжін, қолжетімділігін, білімін, ресурсын және әрекет ету мүмкіндігін сипаттайды. Табиғи, техногендік және кездейсоқ оқиғалар бөлек қауіп көзі. STRIDE әр шекара мен ағынды түпнұсқалық, тұтастық, есеп берушілік, құпиялылық, қолжетімділік және авторизация бойынша тексереді. Ұпай ықтималдық пен әсердің көбейтіндісі: 1–3 шкала. Ең жоғары бес ұпай басым сценарий болады.",
  tasks: [
    { n: "01", title: "Актив", text: "№2 тізілімдегі барлық актив алынады. Жоғары санат — жиынтық 8–9." },
    { n: "02", title: "Шекара", text: "Сыртқы субъект, компонент және дерек ағыны бар контекстік сызба." },
    { n: "03", title: "Бұзушы", text: "Кемінде үш профиль: сыртқы, ішкі және мердігер." },
    { n: "04", title: "STRIDE", text: "Әр сенім шекарасы мен ағынға STRIDE. Кемінде 10 қауіп." },
    { n: "05", title: "Тізбек", text: "Әр қауіп: көз → осалдық → әрекет → активке салдар." },
    { n: "06", title: "Басымдық", text: "Ықтималдық пен әсер 1–3. Басым бес сценарий таңдалады." },
    { n: "07", title: "Шара", text: "Әр басым сценарийге алдын алу, анықтау және қалпына келтіру." },
  ],
  stride: [
    { key: "S", name: "Spoofing", property: "Түпнұсқалық", meaning: "Басқа субъект ретінде көріну", example: "Ұрланған тіркелгімен кіру" },
    { key: "T", name: "Tampering", property: "Тұтастық", meaning: "Деректі рұқсатсыз өзгерту", example: "Журнал жазбасын өзгерту" },
    { key: "R", name: "Repudiation", property: "Есеп берушілік", meaning: "Әрекетті жоққа шығару", example: "Операция дәлелінің болмауы" },
    { key: "I", name: "Information Disclosure", property: "Құпиялылық", meaning: "Ақпаратты жария ету", example: "Қате рұқсат арқылы жазбаны оқу" },
    { key: "D", name: "Denial of Service", property: "Қолжетімділік", meaning: "Қызметті қолжетімсіз ету", example: "Сұраулармен шамадан тыс жүктеу" },
    { key: "E", name: "Elevation of Privilege", property: "Авторизация", meaning: "Артықшылықты жоғарылату", example: "Қарапайым пайдаланушының әкімші болуы" },
  ],
  actors: [
    {
      id: "external",
      kind: "Сыртқы",
      name: "Сыртқы бұзушы",
      fields: [
        ["Субъект", "Кампуспен байланысы жоқ адам"],
        ["Уәж", "Жеке деректерді алу"],
        ["Қолжетімділік", "Тек жария портал. ДҚБЖ-ға тікелей жолы жоқ"],
        ["Білім", "Веб-интерфейс және жария нұсқау"],
        ["Ресурс", "Жеке құрал, шектеулі уақыт"],
        ["Мүмкіндік", "Фишинг, ұрланған тіркелгі, порталды жүктеу"],
      ],
    },
    {
      id: "internal",
      kind: "Ішкі",
      name: "Студент немесе тіркеуші",
      fields: [
        ["Субъект", "Заңды тіркелгісі бар кампус мүшесі"],
        ["Уәж", "Қызығушылық, жеке пайда, мәртебені өзгерту"],
        ["Қолжетімділік", "Кампус желісі және өз рөлі"],
        ["Білім", "Процесті, өрістерді және кім нені көретінін біледі"],
        ["Ресурс", "Өз сессиясы"],
        ["Мүмкіндік", "Рұқсатты теріс пайдалану, бөтен жазбаны ашу"],
      ],
    },
    {
      id: "partner",
      kind: "Мердігер",
      name: "ДҚБЖ қызметінің серіктесі",
      fields: [
        ["Субъект", "Шарт бойынша қызмет көрсететін қызметкер"],
        ["Уәж", "Жұмысты жылдамдату немесе дерек алу"],
        ["Қолжетімділік", "Уақытша әкімші арнасы"],
        ["Білім", "Сервер, көшірме және ДҚБЖ құрылымы"],
        ["Ресурс", "Қызметтік тіркелгі, шарт мерзімі"],
        ["Мүмкіндік", "Порталды айналып өтіп, қойма мен резервке шығу"],
      ],
    },
  ],
  flows: [
    {
      id: "DF1",
      name: "Порталға кіру",
      nodes: ["students", "teachers", "staff", "iam", "portal", "outsider"],
      text: "№2 тізілімдегі студенттер, оқытушылар және әкімшілік порталға кіреді. Сыртқы бұзушы да осы есікке дейін ғана жетеді.",
    },
    {
      id: "DF2",
      name: "Жазбаны өзгерту",
      nodes: ["registrar", "portal"],
      text: "Тіркеуші портал арқылы оқу мәртебесі мен байланысты жазады. Ішкі субъект те шекарадан өтеді: рөлі бар, бірақ әр өзгеріс дәлелденуі керек.",
    },
    {
      id: "DF3",
      name: "Сәйкестендіру",
      nodes: ["portal", "iam"],
      text: "Портал IAM-нан кім екенін сұрайды. Сессия осы ағында расталады.",
    },
    {
      id: "DF4",
      name: "Сұрау",
      nodes: ["portal", "dbms"],
      text: "Портал ДҚБЖ-ға оқу немесе жазу сұрауын жібереді. Қате жауап ішкі өрісті сыртқа шығармауы керек.",
    },
    {
      id: "DF5",
      name: "Қойма",
      nodes: ["dbms", "student-db"],
      text: "ДҚБЖ студенттердің жеке дерек қоймасын оқиды және жазады. Құпиялылық пен тұтастық осында шешіледі.",
    },
    {
      id: "DF6",
      name: "Резерв",
      nodes: ["dbms", "backup"],
      text: "ДҚБЖ көшірмені резервке береді. Көшірме — сол активтің екінші данасы.",
    },
    {
      id: "DF8",
      name: "LMS нәтижесі",
      nodes: ["portal", "lms-grades", "students", "teachers"],
      text: "Студенттер мен оқытушылар порталдан LMS-ке өтеді. Олар студенттер дерекқорына кірмейді.",
    },
    {
      id: "DF7",
      name: "Әкімші арнасы",
      nodes: ["sysadmin", "dbms"],
      text: "№2 тізілімдегі жүйе әкімшісі порталды айналып, ДҚБЖ-ға жетеді. Мердігердің уақытша арнасы осы жолмен өтеді.",
    },
    {
      id: "DF9",
      name: "Өткізу жүйесі",
      nodes: ["guards", "acs"],
      text: "Күзет ACS-ке кіреді. Студенттер дерекқоры мен порталға бармайды.",
    },
    {
      id: "DF10",
      name: "Қонақ желісі",
      nodes: ["guests", "wifi"],
      text: "Қонақтар тек Wi-Fi-ға шығады. Порталға кірмейді.",
    },
    {
      id: "DF11",
      name: "Офицер",
      nodes: ["officer", "portal"],
      text: "Ақпараттық қауіпсіздік офицері порталға кіреді. Қоймаға тікелей жолы жоқ.",
    },
  ],
  nodes: {
    student: { title: "Студенттер", text: "№2 тізілім. Порталдан LMS-ке өтеді, студенттер дерекқорына кірмейді." },
    teachers: { title: "Оқытушылар", text: "№2 тізілім. Порталдан LMS-ке өтеді, қоймаға кірмейді." },
    staff: { title: "Әкімшілік", text: "№2 тізілім. Порталда тоқтайды, студенттер дерекқорына кірмейді." },
    guards: { title: "Күзет", text: "№2 тізілім. ACS-ке кіреді, портал мен студенттер дерекқорына бармайды." },
    officer: { title: "АҚ офицері", text: "№2 тізілім. Порталға кіреді, қоймаға тікелей жолы жоқ." },
    guests: { title: "Қонақтар", text: "№2 тізілім. Тек Wi-Fi. Порталға кірмейді." },
    outsider: { title: "Сыртқы бұзушы", text: "Шекарадан тыс. Порталға дейін ғана жетеді, қоймаға тікелей жолы жоқ." },
    registrar: { title: "Тіркеуші", text: "№2 тізілім. Студенттер дерекқорына кіретін рөл. Өзгеріс бекітіліп, журналдалады." },
    sysadmin: { title: "Жүйе әкімшісі", text: "№2 тізілім. ДҚБЖ мен резервке жетеді. Мердігердің уақытша арнасы осы жолмен өтеді." },
    portal: { title: "Портал", text: "№2 тізілімдегі қолданбалық есік. Студент, оқытушы, әкімшілік және тіркеуші осында кіреді." },
    iam: { title: "IAM", text: "№2 тізілімдегі сәйкестендіру. Портал кім екенін осы қызметтен сұрайды." },
    lms: { title: "LMS нәтижесі", text: "№2 тізілім. Студент пен оқытушының жолы осында бітеді." },
    dbms: { title: "ДҚБЖ", text: "№2 тізілім. Тіркеушінің сұрауын қойма мен резервке жеткізеді." },
    acs: { title: "ACS", text: "№2 тізілім. Күзеттің өткізу жүйесі. Студенттер дерекқоры емес." },
    wifi: { title: "Wi-Fi", text: "№2 тізілім. Қонақтардың жалғыз кіруі. Порталдан бөлек." },
    store: { title: "Студенттер ДҚ", text: "№2 тізілімдегі қорғалатын актив. ЖСН, аты-жөні, байланыс, оқу мәртебесі." },
    backup: { title: "Резерв", text: "№2 тізілімдегі көшірме. Шифрланбаса, сол құпиялылық тәуекелі қайталанады." },
  },
  threats: [
    {
      id: "T-01",
      stride: "S",
      title: "Фишинг арқылы есептік жазбаны иелену",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "Порталда MFA жоқ",
      likelihood: 3,
      impact: 3,
      priority: 1,
      control: "MFA, оқыту, кіру журналы",
      flows: ["DF1"],
      boundary: "Сыртқы субъект → портал",
      chain: {
        source: "Сыртқы бұзушы, уәжі — жеке дерек",
        vuln: "Кіру тек құпиясөзбен расталады",
        action: "Ұрланған тіркелгімен порталға кіреді",
        impact: "Студент немесе тіркеуші атынан қоймаға сұрау кетеді",
      },
      prevent: "Порталға міндетті MFA және фишинг туралы қысқа оқыту.",
      detect: "Ерекше құрылғы мен уақыттағы кіруді журналдан көру.",
      recover: "Сессияны жабу, құпиясөзді ауыстыру, күдікті сұрауларды тіркеу.",
    },
    {
      id: "T-02",
      stride: "T",
      title: "Оқу мәртебесін бақылаусыз өзгерту",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "Өзгерісті екінші адам бекітпейді",
      likelihood: 2,
      impact: 3,
      priority: 5,
      control: "Екі адамдық бекіту, өзгеріс журналы",
      flows: ["DF2", "DF5"],
      boundary: "Тіркеуші → портал → қойма",
      chain: {
        source: "Тіркеуші, уәжі — мәртебені өзгерту",
        vuln: "Жазу бір рөлмен өтеді, себебі жазылмайды",
        action: "Байланыс немесе оқу мәртебесін өзгертеді",
        impact: "Ресми жазба бұрмаланады, оқу процесі бұзылады",
      },
      prevent: "Сезімтал өріске екінші адамның бекітуі.",
      detect: "Кім, қашан, қай өрісті өзгерткенінің журналы.",
      recover: "Соңғы тексерілген көшірмеден жазбаны қайтару.",
    },
    {
      id: "T-03",
      stride: "R",
      title: "Жазбаны өзгерткенін жоққа шығару",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "Журналда автор жазылмайды",
      likelihood: 2,
      impact: 2,
      control: "Өшірілмейтін журнал",
      flows: ["DF2"],
      boundary: "Тіркеуші → портал",
      chain: {
        source: "Ішкі пайдаланушы",
        vuln: "Өзгеріс журналын өшіруге немесе авторсыз қалдыруға болады",
        action: "Әрекетті өз атынан істемегенін айтады",
        impact: "Тергеуде операцияның дәлелі қалмайды",
      },
    },
    {
      id: "T-04",
      stride: "I",
      title: "Бөтен студенттің жазбасын оқу",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "Жазба иесі рөлмен салыстырылмайды",
      likelihood: 2,
      impact: 3,
      priority: 2,
      control: "Сұрау сайын рөлді тексеру",
      flows: ["DF4", "DF5"],
      boundary: "Портал → ДҚБЖ → қойма",
      chain: {
        source: "Студент тіркелгісі",
        vuln: "Сұраудағы жазба сол адамға тиесілі ме, сервер тексермейді",
        action: "Өз рөлімен бөтен жазбаны ашады",
        impact: "ЖСН мен байланыс жария болады",
      },
      prevent: "Әр оқу сұрауында жазба иесін рөлмен салыстыру.",
      detect: "Бір тіркелгіден көп жазба оқылғанын журналдан көру.",
      recover: "Сессияны жабу, қай жазба ашылғанын тіркеу, субъектіге хабарлау тәртібі.",
    },
    {
      id: "T-05",
      stride: "D",
      title: "Порталды шамадан тыс сұраумен бос ету",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "Кіру сұрауына шек жоқ",
      likelihood: 2,
      impact: 2,
      control: "Сұрау шегі, мониторинг",
      flows: ["DF1"],
      boundary: "Сыртқы субъект → портал",
      chain: {
        source: "Сыртқы бұзушы",
        vuln: "Портал кіру сұрауының жиілігін шектемейді",
        action: "Кіру бетін шамадан тыс сұраумен жүктейді",
        impact: "Тіркеуші мен студент қоймаға кіре алмайды",
      },
    },
    {
      id: "T-06",
      stride: "E",
      title: "Мердігердің әкімші құқығымен қоймаға шығуы",
      actor: "Мердігер",
      actorId: "partner",
      vuln: "Шарт бітсе де тіркелгі ашық",
      likelihood: 2,
      impact: 3,
      priority: 3,
      control: "Уақытша әкімші тіркелгісі",
      flows: ["DF7", "DF5"],
      boundary: "Мердігер → ДҚБЖ",
      chain: {
        source: "Серіктес ұйымның қызметкері",
        vuln: "Қызмет арнасы шарт мерзімімен жабылмайды",
        action: "Портал рөлін айналып, ДҚБЖ-ға тікелей шығады",
        impact: "Барлық жеке жазбаны оқуға немесе өзгертуге мүмкіндік туады",
      },
      prevent: "Тіркелгіні жұмыс терезесіне байлау, біткенде жабу.",
      detect: "Әкімші арнасындағы сессияны бөлек журналға жазу.",
      recover: "Тіркелгіні жабу, артық сұрауларды тізімдеу, қажет болса көшірмеден қалпына келтіру.",
    },
    {
      id: "T-07",
      stride: "S",
      title: "Ұрланған сессиямен порталда қалу",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "Сессия қайта тексерілмейді",
      likelihood: 2,
      impact: 2,
      control: "Қысқа сессия, қайта тексеру",
      flows: ["DF3"],
      boundary: "Портал → IAM",
      chain: {
        source: "Сыртқы бұзушы",
        vuln: "Портал мен IAM арасында сессия ұзақ өмір сүреді",
        action: "Бөтен сессиямен порталды ашады",
        impact: "Тіркелгі иесінің деректеріне қол жеткізеді",
      },
    },
    {
      id: "T-08",
      stride: "T",
      title: "Резерв көшірмесін бұрмалау",
      actor: "Мердігер",
      actorId: "partner",
      vuln: "Көшірменің тұтастығы тексерілмейді",
      likelihood: 1,
      impact: 3,
      control: "Бақылау сомасы, қалпына келтіру сынағы",
      flows: ["DF6"],
      boundary: "ДҚБЖ → резерв",
      chain: {
        source: "Мердігер",
        vuln: "Резерв файлының өзгермегені расталмайды",
        action: "Көшірмені өзгертеді",
        impact: "Қалпына келтіру кезінде жалған жазба қоймаға оралады",
      },
    },
    {
      id: "T-09",
      stride: "I",
      title: "Шифрланбаған резервтен дерек алу",
      actor: "Мердігер",
      actorId: "partner",
      vuln: "Көшірме ашық сақталады",
      likelihood: 2,
      impact: 3,
      priority: 4,
      control: "Көшірмені шифрлау, қолжетімділікті бөлу",
      flows: ["DF6"],
      boundary: "ДҚБЖ → резерв",
      chain: {
        source: "Мердігер немесе көшірмеге қолы жеткен адам",
        vuln: "Резерв шифрланбай, портал рөлінен бөлек жатады",
        action: "Көшірме файлын алады",
        impact: "Қойманың толық данасы жария болады",
      },
      prevent: "Резервті шифрлап, кілтті көшірмеден бөлек сақтау.",
      detect: "Көшірмеге қол жеткізуді журналдау.",
      recover: "Кілтті ауыстыру, көшірменің қайда кеткенін тіркеу, зақымдалған дананы есептен шығару.",
    },
    {
      id: "T-10",
      stride: "R",
      title: "Қойманы оқыған ізді өшіру",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "ДҚБЖ журналын өзгертуге болады",
      likelihood: 2,
      impact: 2,
      control: "Журналды бөлек сақтау",
      flows: ["DF5"],
      boundary: "ДҚБЖ → қойма",
      chain: {
        source: "Ішкі әкімші",
        vuln: "Оқу журналы сол серверде өңделеді",
        action: "Қай жазба оқылғанының ізин жояды",
        impact: "Құпиялылық бұзылғанын кейін дәлелдеу қиын",
      },
    },
    {
      id: "T-11",
      stride: "I",
      title: "Қате жауаптан ішкі өрісті көру",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "Қате хабарламасы артық дерек көрсетеді",
      likelihood: 2,
      impact: 2,
      control: "Қате жауапты қысқарту",
      flows: ["DF4"],
      boundary: "Портал → ДҚБЖ",
      chain: {
        source: "Сыртқы бұзушы",
        vuln: "Сұрау қатесі ішкі өріс атауын сыртқа шығарады",
        action: "Қате жауаптан қойма құрылымын оқиды",
        impact: "Кейінгі сценарийге ішкі атаулар белгілі болады",
      },
    },
    {
      id: "T-12",
      stride: "E",
      title: "Студенттің өз жазбасын жазуы",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "Жазу тек экранда жасырылған",
      likelihood: 1,
      impact: 3,
      control: "Жазуды серверде тексеру",
      flows: ["DF5"],
      boundary: "Портал → қойма",
      chain: {
        source: "Студент",
        vuln: "Жазу құқығы серверде емес, бетте ғана шектелген",
        action: "Өз рөлімен жазбаны өзгерту сұрауын жібереді",
        impact: "Ресми мәртебенің тұтастығы бұзылады",
      },
    },
    {
      id: "T-13",
      stride: "S",
      title: "Клондалған картамен өткізу жүйесіне кіру",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "RFID карта қайта ойнатылады",
      likelihood: 2,
      impact: 2,
      control: "Картаны қайта тексеру, өткізу журналы",
      flows: ["DF9"],
      boundary: "Сыртқы субъект → ACS",
      chain: {
        source: "Сыртқы бұзушы",
        vuln: "Өткізу картасының көшірмесі ACS-те ажыратылмайды",
        action: "Бөтен картамен кампус есігінен өтеді",
        impact: "Күзет журналында бөтен адам өз атымен көрінбейді",
      },
    },
    {
      id: "T-14",
      stride: "E",
      title: "Қонақ желісінен порталға өту",
      actor: "Сыртқы",
      actorId: "external",
      vuln: "Қонақ Wi-Fi ішкі желіден бөлінбеген",
      likelihood: 2,
      impact: 2,
      control: "Қонақ желісін оқшаулау",
      flows: ["DF10"],
      boundary: "Қонақ → Wi-Fi",
      chain: {
        source: "Қонақ немесе сыртқы бұзушы",
        vuln: "Қонақ желісі портал мен қойма желісінен бөлек емес",
        action: "Тек Wi-Fi рөлімен порталдың кіру бетіне шығады",
        impact: "Порталға кірмеуі керек қонақ шекараны кесіп өтеді",
      },
    },
    {
      id: "T-15",
      stride: "E",
      title: "Офицер тіркелгісімен қоймаға шығу",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "Офицер рөлі қоймадан бөлінбеген",
      likelihood: 1,
      impact: 3,
      control: "Офицер рөлін қоймадан бөлу",
      flows: ["DF11"],
      boundary: "АҚ офицері → портал",
      chain: {
        source: "Ақпараттық қауіпсіздік офицері",
        vuln: "Порталдағы офицер рөлі студенттер дерекқорын оқудан бөлек емес",
        action: "Қызметтік тіркелгімен қоймаға тікелей сұрау жібереді",
        impact: "Қоймаға бармауы керек рөл жеке жазбаны оқиды",
      },
    },
    {
      id: "T-16",
      stride: "I",
      title: "Бөтен студенттің бағасын көру",
      actor: "Ішкі",
      actorId: "internal",
      vuln: "LMS нәтижесі жазба иесімен салыстырылмайды",
      likelihood: 2,
      impact: 2,
      control: "Студент тек өз нәтижесін ашады",
      flows: ["DF8"],
      boundary: "Портал → LMS",
      chain: {
        source: "Студент тіркелгісі",
        vuln: "LMS сұрауындағы нәтиже сол адамға тиесілі ме, тексерілмейді",
        action: "Порталдан бөтен студенттің бағасын ашады",
        impact: "Баға мен қатысу жария болады, студенттер дерекқорына жол ашылмайды",
      },
    },
  ],
  questions: [
    {
      num: 1,
      text: "Қауіп, осалдық және тәуекел ұғымдары қалай байланысады?",
      answer:
        "Қауіп — осалдықты пайдалануы мүмкін оқиға немесе субъект. Осалдық — қорғаудың әлсіз жері, мысалы MFA жоқтығы. Тәуекел — осы кездесудің ықтималдығы мен активке салдары. Модельде тізбек былай жазылады: қауіп көзі → осалдық → әрекет → салдар. Ұпай ықтималдық пен әсердің көбейтіндісі, сондықтан әр қауіп бірдей басым болмайды.",
    },
    {
      num: 2,
      text: "Сенім шекарасы дегеніміз не және ол сызбада не үшін көрсетіледі?",
      answer:
        "Сенім шекарасы — сенім деңгейі әртүрлі аймақтардың шегі. Бұл модельде ол студенттер дерекқорының қызметін сыртқы субъектіден бөледі: портал, IAM, ДҚБЖ, қойма және резерв іште, студент, бұзушы, тіркеуші және мердігер сыртта. Сызбада шекара дерек ағыны қайда тексерілетінін көрсетеді. STRIDE сол қиылыстарға қолданылады, өйткені шабуылшы немесе артық құқық дәл осы жерден кіреді.",
    },
    {
      num: 3,
      text: "Ішкі бұзушы сыртқы бұзушыдан қандай мүмкіндіктерімен ерекшеленеді?",
      answer:
        "Ішкі бұзушының заңды тіркелгісі, рөлі және процесті білуі бар. Ол кіру бетінен өтіп қойған, сондықтан фишингсіз-ақ өз құқығын теріс пайдалана алады: бөтен жазбаны ашу, мәртебені өзгерту, ізді жою. Сыртқы бұзушы шекарадан тыс, алдымен порталдың түпнұсқалық тексеруінен өтуі керек. Мердігер екеуінің арасында: сыртқы ұйым, бірақ уақытша әкімші арнасы бар.",
    },
    {
      num: 4,
      text: "STRIDE тәсілінің артықшылығы мен шектеуі қандай?",
      answer:
        "Артықшылығы — әр ағын мен шекараны бір тізіммен тексереді: жасырыну, өзгерту, жоққа шығару, жария ету, қызметті тоқтату, құқықты көтеру. Сондықтан қауіп кездейсоқ емес, жүйелі шығады. Шектейтіні — ұпай мен бизнес-салдарды өзі қоймайды, табиғи және техногендік оқиғаны нашар сипаттайды. Сондықтан бос ұяшық та нәтиже: сол санат осы ағында шынайы сценарий бермеді, ал басымдық бөлек 1–3 шкаламен қойылады.",
    },
    {
      num: 5,
      text: "Қауіптер моделін жүйенің қандай өзгерістерінен кейін жаңарту қажет?",
      answer:
        "Жаңа дерек ағыны, жаңа сыртқы субъект немесе шекара өзгерсе, модель ескіреді. Мысалы, мердігерге тұрақты қолжетімділік берілсе, DF7 қайта бағаланады. Жаңа өріс, резервтің басқа жерге көшуі, MFA-ны алып тастау, №2 тізілімдегі санаттың өзгеруі және болған инцидент те себеп. Жоспарлы қайта қарау семестр сайын жеткілікті емес, егер арада ағын қосылса.",
    },
    {
      num: 6,
      text: "Қорғау шаралары қауіп сценарийінің қай бөлігін өзгерте алады?",
      answer:
        "Алдын алу осалдықты немесе әрекетті қиындатады: MFA фишингпен алынған құпиясөзді жеткіліксіз етеді. Анықтау әрекетті көрінетін етеді: журнал бөтен жазбаның оқылғанын көрсетеді. Қалпына келтіру салдарды азайтады: сессияны жабу, көшірмеден қайтару. Шара қауіп көзін жоймайды, тізбектің бір буынын өзгертеді. Сондықтан басым сценарийге үш шара да жазылады.",
    },
  ],
  conclusion: {
    text:
      "Модель №2 жұмыстағы жоғары активке — студенттердің жеке деректер қорына — байланды. Қызмет шекарасының ішінде портал, IAM, ДҚБЖ, қойма және резерв бар. Сыртта студент, сыртқы бұзушы, тіркеуші және мердігер. Он бір ағынға STRIDE қолданып, 16 қауіп жазылды. LMS-те бөтен бағаны көру, өткізу жүйесінде клондалған карта, қонақ желісінде порталға өту және офицер жолында қоймаға шығу бар, бірақ ұпайы басым бесеуден төмен. Ықтималдық × әсер бойынша басым бесеуі: фишинг, бөтен жазбаны оқу, мердігердің ашық әкімші арнасы, шифрланбаған резерв және бақылаусыз өзгерту. Қалған сценарийлер төмен ұпаймен тізілімде қалады, өшірілмейді.",
    recs: [
      "Порталға MFA қою және сезімтал әрекетте сессияны қайта тексеру.",
      "Әр оқу және жазу сұрауында жазба иесін рөлмен салыстыру.",
      "Мердігер тіркелгісін шарт мерзімі біткенде жабу.",
      "Резервті шифрлау және қалпына келтірмес бұрын тұтастығын тексеру.",
      "Өзгеріс журналын өшірілмейтін етіп, автормен бірге сақтау.",
      "Жаңа ағын немесе мердігер құқығы өзгерсе, модельді қайта қарау.",
    ],
  },
  literature: [
    {
      n: "1",
      title: "NIST SP 800-154 (Initial Public Draft). Guide to Data-Centric System Threat Modeling",
      note: "Дерекке бағытталған модель: актив, шекара, ағын және қорғау бір тізбекте қаралады.",
      source: "csrc.nist.gov",
      url: "https://csrc.nist.gov/pubs/sp/800/154/ipd",
    },
    {
      n: "2",
      title: "ISO/IEC 27005:2022. Guidance on managing information security risks",
      note: "Тәуекелді басқару: қауіп көзі, осалдық, салдар және бақылау шарасын жаңарту.",
      source: "iso.org",
      url: "https://www.iso.org/standard/80585.html",
    },
  ],
};

function lab3Score(threat) {
  return threat.likelihood * threat.impact;
}

function lab3ScaleSelect(threat, key, label) {
  const options = [1, 2, 3]
    .map((n) => `<option value="${n}"${n === threat[key] ? " selected" : ""}>${n}</option>`)
    .join("");
  return `<select class="cia-input" data-scale="${key}" aria-label="${label}">${options}</select>`;
}

function viewLab3() {
  const tasks = LAB3.tasks
    .map(
      (task, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${task.n}</span>
        <h3>${task.title}</h3>
        <p>${task.text}</p>
      </article>`
    )
    .join("");

  const stride = LAB3.stride
    .map(
      (item) => `
      <article class="stride-card">
        <span class="stride-key">${item.key}</span>
        <h3>${item.name}</h3>
        <p>${item.meaning}</p>
        <p class="stride-meta"><em>${item.property}</em>${item.example}</p>
      </article>`
    )
    .join("");

  const actors = LAB3.actors
    .map(
      (actor) => `
      <article class="actor-card">
        <p class="eyebrow">${actor.kind}</p>
        <h3>${actor.name}</h3>
        <dl>
          ${actor.fields.map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("")}
        </dl>
      </article>`
    )
    .join("");

  const filters = [
    { id: "all", label: `Барлығы · ${LAB3.threats.length}` },
    ...LAB3.stride.map((item) => ({ id: item.key, label: item.key })),
    { id: "priority", label: "Басым" },
  ]
    .map(
      (item, i) =>
        `<button type="button" class="chip${i === 0 ? " is-on" : ""}" data-filter="${item.id}">${item.label}</button>`
    )
    .join("");

  const rows = LAB3.threats
    .map((threat) => {
      const score = lab3Score(threat);
      const badge = threat.priority ? `<span class="prio-badge">${threat.priority}</span>` : "";
      const measures = threat.priority
        ? `<div class="prio-measures">
            <p><em>Алдын алу</em>${threat.prevent}</p>
            <p><em>Анықтау</em>${threat.detect}</p>
            <p><em>Қалпына келтіру</em>${threat.recover}</p>
          </div>`
        : "";
      return `
        <tr class="threat-row" data-id="${threat.id}" data-stride="${threat.stride}" data-prio="${threat.priority ? "1" : "0"}" data-flows="${threat.flows.join(" ")}">
          <td><strong>${threat.id}</strong>${badge}<span class="cell-sub">${threat.stride}</span></td>
          <td>${threat.title}</td>
          <td>${threat.actor}</td>
          <td>${threat.vuln}</td>
          <td class="num score-cell">
            ${lab3ScaleSelect(threat, "likelihood", "Ықтималдық")}
            <span class="score-times">×</span>
            ${lab3ScaleSelect(threat, "impact", "Әсер")}
            <span class="cell-sub score-product">${score}</span>
          </td>
          <td>${threat.control}</td>
        </tr>
        <tr class="threat-detail" data-detail="${threat.id}" hidden>
          <td colspan="6">
            <p class="chain-lead">${threat.boundary} · ${threat.flows.join(", ")}</p>
            <ol class="chain">
              <li><em>Қауіп көзі</em>${threat.chain.source}</li>
              <li><em>Осалдық</em>${threat.chain.vuln}</li>
              <li><em>Әрекет</em>${threat.chain.action}</li>
              <li><em>Салдар</em>${threat.chain.impact}</li>
            </ol>
            ${measures}
          </td>
        </tr>`;
    })
    .join("");

  const matrixRows = LAB3.flows
    .map((flow) => {
      const cells = LAB3.stride
        .map((item) => {
          const found = LAB3.threats.filter(
            (threat) => threat.stride === item.key && threat.flows.includes(flow.id)
          );
          if (!found.length) return "<td>—</td>";
          const links = found
            .map(
              (threat) =>
                `<button type="button" class="matrix-link" data-threat="${threat.id}">${threat.id}</button>`
            )
            .join(" ");
          return `<td>${links}</td>`;
        })
        .join("");
      return `<tr><th scope="row">${flow.id} · ${flow.name}</th>${cells}</tr>`;
    })
    .join("");

  const priority = LAB3.threats
    .filter((threat) => threat.priority)
    .sort((a, b) => a.priority - b.priority)
    .map(
      (threat) => `
      <article class="prio-card">
        <header>
          <span class="prio-badge">${threat.priority}</span>
          <h3>${threat.id} · ${threat.title}</h3>
          <span class="num score-readout" data-id="${threat.id}">${threat.likelihood}×${threat.impact} = ${lab3Score(threat)}</span>
        </header>
        <p>${threat.chain.source} → ${threat.chain.vuln} → ${threat.chain.action} → ${threat.chain.impact}</p>
        <div class="prio-measures">
          <p><em>Алдын алу</em>${threat.prevent}</p>
          <p><em>Анықтау</em>${threat.detect}</p>
          <p><em>Қалпына келтіру</em>${threat.recover}</p>
        </div>
      </article>`
    )
    .join("");

  const questions = LAB3.questions
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

  const literature = LAB3.literature
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

  const recs = LAB3.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  return `
    <div class="view lab3">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab3-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB3.lab}</p>
          <h1 class="hero-title reveal">${LAB3.title}</h1>
          <p class="hero-lead reveal">${LAB3.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Модель жиынтығы">
          <div><strong>${LAB3.threats.length}</strong><span>қауіп</span></div>
          <div><strong>5</strong><span>басым сценарий</span></div>
          <div><strong>${LAB3.actors.length}</strong><span>бұзушы профилі</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/3">1. Мақсат</a>
        <a href="#lab/3/object">2. Нысан</a>
        <a href="#lab/3/diagram">3. Сызба</a>
        <a href="#lab/3/actors">4. Бұзушы</a>
        <a href="#lab/3/registry">5. Тізілім</a>
        <a href="#lab/3/quiz">6. Сұрақтар</a>
        <a href="#lab/3/conclusion">7. Қорытынды</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және тапсырма</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB3.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB3.equipment}</p>
        </div>
        <p class="limit-note reveal">${LAB3.limit}</p>
        <div class="task-grid">${tasks}</div>
      </section>

      <section class="block" id="object">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 2</p>
          <h2>Зерттеу нысаны</h2>
          <p>Нысан — №2 тізілімдегі барлық ${LAB2.assets.length} актив. Жоғары санат — жиынтық 8–9. Субъектілер де сол тізілімнен: студенттер мен оқытушылар LMS-ке, әкімшілік пен офицер порталға, тіркеуші қоймаға, жүйе әкімшісі ДҚБЖ-ға, күзет ACS-ке, қонақтар тек Wi-Fi-ға барады.</p>
        </div>
        <p class="reveal"><a href="#lab/2/registry">№2 активтер тізілімі</a></p>
        <div class="process-grid">${LAB2.assets
          .map((item) => {
            const itemCat = lab2Category(item);
            return `<article class="process-card" data-cat="${itemCat.key}"><h3>${item.name}</h3><p>${item.info}</p><p>C/I/A ${item.c}/${item.i}/${item.a} · ${itemCat.label} · ${itemCat.sum}</p></article>`;
          })
          .join("")}</div>
        <p class="theory reveal">${LAB3.theory}</p>
        <div class="stride-grid">${stride}</div>
      </section>

      <section class="block" id="diagram">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 3</p>
          <h2>Контекстік сызба</h2>
          <p>Әр ағын сызықтың жанында DF1 · Порталға кіру түрінде белгіленген.</p>
        </div>
        <div class="diagram-layout">
          <div class="dep-wrap reveal">${lab3DfdSvg()}</div>
          <aside class="dep-panel reveal" id="dfd-panel">
            <p class="eyebrow">Таңдалған ағын</p>
            <h3 id="dfd-title">Ағынды таңдаңыз</h3>
            <p id="dfd-text">DF1 — порталға кіру. DF8 — LMS. DF7 — жүйе әкімшісінің арнасы. Шекараны кесіп өткен әр сызық жеке тексеріледі.</p>
          </aside>
        </div>
      </section>

      <section class="block" id="actors">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 4</p>
          <h2>Бұзушы профильдері</h2>
          <p>Үш профиль: сыртқы, ішкі және мердігер. Әрқайсысында уәж, қолжетімділік, білім, ресурс және мүмкіндік бар.</p>
        </div>
        <div class="actor-grid">${actors}</div>
      </section>

      <section class="block" id="registry">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 5</p>
          <h2>Қауіптер тізілімі</h2>
          <p>${LAB3.threats.length} қауіп. Ұпай — ықтималдық × әсер, екеуін де 1–3 аралығында өзгертуге болады. Жолды ашсаңыз, көз → осалдық → әрекет → салдар тізбегі шығады.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix">
            <thead>
              <tr>
                <th>Ағын</th>
                ${LAB3.stride.map((item) => `<th>${item.key}</th>`).join("")}
              </tr>
            </thead>
            <tbody>${matrixRows}</tbody>
          </table>
        </div>
        <p class="theory reveal">Сызықша — сол ағында бұл STRIDE санаты шынайы сценарий бермеді. Әр ағын тексерілді, бос ұяшық та нәтиже.</p>
        <div class="chip-row reveal" id="threat-filters">${filters}</div>
        <div class="table-wrap reveal">
          <table class="reg-table threat-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Қауіп сценарийі</th>
                <th>Бұзушы</th>
                <th>Осалдық</th>
                <th>Ұпай</th>
                <th>Қорғаныс шарасы</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        <div class="block-head protect-head reveal">
          <h2>Басым бес сценарий</h2>
          <p>Бірінші орында ұпайы 9 болатын T-01. Ұпайы 6 болатын төртеуі құпиялылыққа тікелей әсер етуі және шекараны кесіп өтуі бойынша реттелді: бөтен жазба, мердігер арнасы, резервтің толық көшірмесі, содан кейін тұтастық.</p>
        </div>
        <div class="prio-list">${priority}</div>
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
          <p>${LAB3.conclusion.text}</p>
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

function lab3DfdSvg() {
  const layout = lab2DiagramLayout();
  const byId = Object.fromEntries(layout.nodes.map((node) => [node.id, node]));
  const flowByEdge = {
    "students|iam": "DF1",
    "teachers|iam": "DF1",
    "staff|iam": "DF1",
    "registrar|iam": "DF2",
    "officer|iam": "DF11",
    "guards|iam": "DF9",
    "sysadmin|iam": "DF7",
    "iam|portal": "DF1 DF2 DF3 DF8 DF11",
    "iam|acs": "DF9",
    "portal|lms-grades": "DF8",
    "portal|student-db": "DF2 DF5",
    "portal|dbms": "DF4 DF7",
    "dbms|lms-grades": "",
    "lms-grades|backup": "DF6",
    "acs|access-logs": "DF9",
    "access-logs|servers": "DF9",
    "servers|wifi": "DF9",
    "wifi|cctv": "DF9",
    "student-db|wifi": "DF5",
  };

  const markup = (d, from, to, flows, kind) => {
    const use = kind === "use" ? " d-use" : "";
    const attrs = `data-from="${from}" data-to="${to}" data-flow="${flows.split(" ")[0] || ""}" data-flows="${flows}" data-nodes="${from} ${to}"`;
    const hit = flows ? `<path class="d-hit dfd-flow" ${attrs} d="${d}" tabindex="0" role="button"><title>${flows}</title></path>` : "";
    const visible = kind === "wifi"
      ? `<path class="d-wifi${flows ? " dfd-flow" : ""}" ${attrs} d="${d}" />`
      : `<path class="d-edge${use}${flows ? " dfd-flow" : ""}" ${attrs} d="${d}" />`;
    return visible + hit;
  };

  const edges = LAB2.diagram.edges
    .map(([from, to, kind]) => {
      const a = byId[from];
      const b = byId[to];
      if (!a || !b) return "";
      return markup(lab2EdgePath(a, b, layout.nodes, layout.stepY), from, to, flowByEdge[`${from}|${to}`] || "", kind);
    })
    .join("");

  const people = LAB2.assets
    .filter((asset) => asset.type === "human" && asset.deps?.includes("wifi"))
    .map((asset) => byId[asset.id])
    .filter(Boolean);
  const wifi = byId.wifi;
  const busY = people[0].y + people[0].h + 18;
  const rail = byId.guests.x + byId.guests.w + 28;
  const approach = byId["access-logs"].y + byId["access-logs"].h + 16;
  const wifiX = wifi.x + wifi.w / 2;
  const wifiPaths = people
    .map((person) => {
      const x = person.x + person.w / 2 + (person.id === "guests" ? 0 : 10);
      const d = `M ${x} ${person.y + person.h} L ${x} ${busY} L ${rail} ${busY} L ${rail} ${approach} L ${wifiX} ${approach} L ${wifiX} ${wifi.y}`;
      return markup(d, person.id, "wifi", person.id === "guests" ? "DF10" : "", "wifi");
    })
    .join("");

  const portal = byId.portal;
  const iam = byId.iam;
  const outsider = { x: -168, y: portal.y, w: 140, h: portal.h };
  const outX = outsider.x + outsider.w / 2;
  const lane = iam.y - 18;
  const iamX = iam.x + iam.w / 2;
  const outsiderPath = markup(
    `M ${outX} ${outsider.y} L ${outX} ${lane} L ${iamX} ${lane} L ${iamX} ${iam.y}`,
    "outsider",
    "iam",
    "DF1",
    ""
  );

  const systems = layout.nodes.filter((node) => lab2AssetById(node.id)?.type !== "human");
  const minX = Math.min(...systems.map((node) => node.x)) - 36;
  const minY = Math.min(...systems.map((node) => node.y)) - 28;
  const maxX = Math.max(...systems.map((node) => node.x + node.w)) + 36;
  const maxY = Math.max(...systems.map((node) => node.y + node.h)) + 18;

  const labels = layout.labels
    .map((label) => `<text class="d-label" x="12" y="${label.y}">${label.text}</text>`)
    .join("");

  const nodes = layout.nodes
    .map((node) => {
      const asset = lab2AssetById(node.id);
      const cat = asset ? lab2Category(asset).key : "low";
      const label = LAB2_SHORT[node.id] || node.id;
      const cx = node.x + node.w / 2;
      const text = node.sub
        ? `<text class="d-node-title" x="${cx}" y="${node.y + 22}">${label}</text><text class="d-node-sub" x="${cx}" y="${node.y + 40}">${node.sub}</text>`
        : `<text x="${cx}" y="${node.y + node.h / 2}">${label}</text>`;
      return `<g class="d-node dfd-node" data-id="${node.id}" data-cat="${cat}" tabindex="0" role="button"><title>${asset ? asset.name : label}</title><rect x="${node.x}" y="${node.y}" width="${node.w}" height="${node.h}" rx="12" />${text}</g>`;
    })
    .join("") + `
      <g class="d-node dfd-node" data-id="outsider" data-kind="ext" data-cat="low" tabindex="0" role="button">
        <title>Сыртқы бұзушы</title>
        <rect x="${outsider.x}" y="${outsider.y}" width="${outsider.w}" height="${outsider.h}" rx="12" />
        <text class="d-node-title" x="${outsider.x + outsider.w / 2}" y="${outsider.y + 20}">Бұзушы</text>
        <text class="d-node-sub" x="${outsider.x + outsider.w / 2}" y="${outsider.y + 36}">шекарадан тыс</text>
      </g>`;

  return `
    <div class="dep-figure">
      <svg class="dep-svg" viewBox="-188 0 ${layout.railBase + 216} ${layout.height}" role="img" aria-label="№2 тәуелділік сызбасының жалғасы">
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
        <rect class="dfd-boundary" x="${minX}" y="${minY}" width="${maxX - minX}" height="${maxY - minY}" rx="18" />
        <text class="dfd-boundary-label" x="${minX + 16}" y="${minY + 16}">Сенім шекарасы</text>
        ${labels}
        ${edges}
        ${wifiPaths}
        ${outsiderPath}
        ${nodes}
        ${flowMarks(byId)}
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

function flowMarks(byId) {
  const iam = byId.iam;
  const spots = [
    ["DF1", iam.x + iam.w + 12, iam.y + iam.h + 18],
    ["DF3", iam.x - 168, iam.y + iam.h + 18],
    ["DF9", 150, byId.acs.y - 16],
    ["DF4", byId.portal.x + byId.portal.w - 16, byId.portal.y - 14],
    ["DF2", byId.portal.x + byId.portal.w + 12, byId.portal.y + byId.portal.h + 18],
    ["DF5", byId["student-db"].x - 96, byId["student-db"].y - 26],
    ["DF8", byId["lms-grades"].x + byId["lms-grades"].w + 12, byId["lms-grades"].y - 20],
    ["DF6", byId.backup.x + byId.backup.w + 12, byId["lms-grades"].y + byId["lms-grades"].h + 32],
    ["DF11", byId.officer.x, byId.officer.y + byId.officer.h + 54],
    ["DF7", byId.sysadmin.x, byId.sysadmin.y + byId.sysadmin.h + 54],
    ["DF10", byId.guests.x - 20, byId.iam.y + 62],
  ];
  return spots
    .map(([id, x, y]) => {
      const flow = LAB3.flows.find((item) => item.id === id);
      const label = `${flow.id} · ${flow.name}`;
      const width = Math.ceil(label.length * 6.8) + 14;
      const height = 18;
      return `<g class="dfd-mark" data-flow="${id}"><rect x="${x}" y="${y - height / 2}" width="${width}" height="${height}" rx="5" /><text x="${x + 7}" y="${y}">${label}</text></g>`;
    })
    .join("");
}

function bindLab3() {
  const filters = document.getElementById("threat-filters");
  const panelTitle = document.getElementById("dfd-title");
  const panelText = document.getElementById("dfd-text");
  if (!filters || filters.dataset.bound) return;
  filters.dataset.bound = "1";

  const threatTable = document.querySelector(".threat-table");
  threatTable?.addEventListener(
    "click",
    (event) => {
      if (event.target.closest(".cia-input")) event.stopPropagation();
    },
    true
  );
  threatTable?.addEventListener("change", (event) => {
    const input = event.target.closest(".cia-input");
    if (!input) return;
    const row = input.closest(".threat-row");
    const threat = LAB3.threats.find((item) => item.id === row?.dataset.id);
    const key = input.dataset.scale;
    const value = Number(input.value);
    if (!threat || !["likelihood", "impact"].includes(key) || value < 1 || value > 3) return;
    threat[key] = value;
    const score = lab3Score(threat);
    const product = row.querySelector(".score-product");
    if (product) product.textContent = String(score);
    const readout = document.querySelector(`.score-readout[data-id="${threat.id}"]`);
    if (readout) readout.textContent = `${threat.likelihood}×${threat.impact} = ${score}`;
  });

  let focus = null;

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    const key = button.dataset.filter;
    filters.querySelectorAll(".chip").forEach((chip) => {
      chip.classList.toggle("is-on", chip === button);
    });
    document.querySelectorAll(".threat-row").forEach((row) => {
      const show =
        key === "all" ||
        row.dataset.stride === key ||
        (key === "priority" && row.dataset.prio === "1");
      row.hidden = !show;
      const detail = document.querySelector(`[data-detail="${row.dataset.id}"]`);
      if (!show && detail) detail.hidden = true;
      row.classList.toggle("is-open", show && detail && !detail.hidden);
    });
  });

  document.querySelectorAll(".threat-row").forEach((row) => {
    row.addEventListener("click", () => openThreat(row.dataset.id, false));
  });

  document.querySelectorAll(".matrix-link").forEach((button) => {
    button.addEventListener("click", () => openThreat(button.dataset.threat, true));
  });

  function clearFocus() {
    focus = null;
    document.querySelector(".dep-svg")?.classList.remove("is-active");
    document.querySelectorAll(".dfd-flow, .d-node, .threat-row, .dfd-mark").forEach((node) => {
      node.classList.remove("is-on", "is-dim", "is-hit");
    });
    if (panelTitle) panelTitle.textContent = "Ағынды таңдаңыз";
    if (panelText) {
      panelText.textContent =
        "Сызықтар №2 тәуелділік ретімен жүреді: адам → IAM → портал немесе ACS. Сызықты бассаңыз, сол ағынның қаупі ашылады.";
    }
  }

  function paint(flowIds, title, text) {
    const ids = new Set(flowIds);
    const nodeIds = new Set();
    document.querySelectorAll(".dfd-flow").forEach((flow) => {
      const names = (flow.dataset.flows || "").split(" ").filter(Boolean);
      const on = names.some((id) => ids.has(id));
      flow.classList.toggle("is-on", on);
      if (on) flow.dataset.nodes.split(" ").forEach((id) => nodeIds.add(id));
    });
    document.querySelectorAll(".d-node").forEach((node) => {
      const on = nodeIds.has(node.dataset.id);
      node.classList.toggle("is-on", on);
      node.classList.toggle("is-dim", !on);
    });
    document.querySelectorAll(".dfd-mark").forEach((mark) => {
      const on = ids.has(mark.dataset.flow);
      mark.classList.toggle("is-on", on);
      mark.classList.toggle("is-dim", !on);
    });
    document.querySelector(".dep-svg")?.classList.add("is-active");
    document.querySelectorAll(".threat-row").forEach((row) => {
      const on = row.dataset.flows.split(" ").some((id) => ids.has(id));
      row.classList.toggle("is-hit", on);
      row.classList.toggle("is-dim", !on);
    });
    if (panelTitle) panelTitle.textContent = title;
    if (panelText) panelText.textContent = text;
  }

  function showFlow(id, toggle) {
    if (toggle && focus?.kind === "flow" && focus.id === id) {
      clearFocus();
      return;
    }
    const flow = LAB3.flows.find((item) => item.id === id);
    if (!flow) return;
    focus = { kind: "flow", id };
    const related = LAB3.threats.filter((threat) => threat.flows.includes(id)).map((threat) => threat.id);
    paint([id], `${flow.id} · ${flow.name}`, `${flow.text} Қауіптер: ${related.join(", ") || "—"}.`);
  }

  function showNode(id) {
    if (focus?.kind === "node" && focus.id === id) {
      clearFocus();
      return;
    }
    const aliases = { students: "student", "lms-grades": "lms", "student-db": "store" };
    const asset = lab2AssetById(id);
    const node =
      LAB3.nodes[id] ||
      LAB3.nodes[aliases[id]] ||
      (asset ? { title: LAB2_SHORT[id] || asset.name, text: asset.info } : null);
    if (!node) return;
    const flowIds = LAB3.flows.filter((flow) => flow.nodes.includes(id)).map((flow) => flow.id);
    focus = { kind: "node", id };
    paint(flowIds, node.title, `${node.text} Ағындар: ${flowIds.join(", ")}.`);
  }

  function openThreat(id, scroll) {
    const row = document.querySelector(`.threat-row[data-id="${id}"]`);
    const detail = document.querySelector(`[data-detail="${id}"]`);
    if (!row || !detail) return;
    if (row.hidden) filters.querySelector('[data-filter="all"]')?.click();
    const open = detail.hidden;
    document.querySelectorAll(".threat-detail").forEach((item) => {
      item.hidden = true;
    });
    document.querySelectorAll(".threat-row").forEach((item) => item.classList.remove("is-open"));
    detail.hidden = !open;
    row.classList.toggle("is-open", open);
    const threat = LAB3.threats.find((item) => item.id === id);
    if (open && threat) showFlow(threat.flows[0], false);
    if (scroll && open) row.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  document.querySelectorAll(".d-hit").forEach((flow) => {
    flow.addEventListener("click", () => showFlow(flow.dataset.flow, true));
    flow.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showFlow(flow.dataset.flow, true);
      }
    });
  });

  document.querySelectorAll(".d-node").forEach((node) => {
    node.addEventListener("click", () => showNode(node.dataset.id));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showNode(node.dataset.id);
      }
    });
  });
}
