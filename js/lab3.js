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
    name: "Студенттердің жеке деректер қоры",
    text:
      "№2 тізілімдегі жоғары санатты актив. Құпиялылық 3, тұтастық 3, қолжетімділік 2, жиынтық 8. Иесі — тіркеуші офис. Қоймада ЖСН, аты-жөні, байланыс және оқу мәртебесі сақталады. Оған қызмет ететін жүйе — Smart Campus порталы, IAM және ДҚБЖ: портал қолданбалық есік, IAM кім екенін растайды, ДҚБЖ жазбаны оқиды және резервке көшіреді.",
  },
  theory:
    "Қауіптерді модельдеу жүйе іске қосылғаннан кейін ғана емес, жобалау кезінде жасалады. Модель қорғалатын активті, сенім шекарасын, дерек ағынын, қауіп көзін, осалдықты, әрекетті және бар бақылауды бір тізбекке жинайды. Бұзушы моделі адамның суреті емес: ішкі немесе сыртқы субъектінің уәжін, қолжетімділігін, білімін, ресурсын және әрекет ету мүмкіндігін сипаттайды. Табиғи, техногендік және кездейсоқ оқиғалар бөлек қауіп көзі. STRIDE әр шекара мен ағынды түпнұсқалық, тұтастық, есеп берушілік, құпиялылық, қолжетімділік және авторизация бойынша тексереді. Ұпай ықтималдық пен әсердің көбейтіндісі: 1–3 шкала. Ең жоғары бес ұпай басым сценарий болады.",
  tasks: [
    { n: "01", title: "Актив", text: "№2 жұмыстан жоғары санатты актив және оған қызмет ететін жүйе таңдалады." },
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
      nodes: ["student", "teachers", "staff", "outsider", "portal"],
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
      nodes: ["dbms", "store"],
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
      nodes: ["portal", "lms", "student", "teachers"],
      text: "Студенттер мен оқытушылар порталдан LMS-ке өтеді. Олар студенттер дерекқорына кірмейді.",
    },
    {
      id: "DF7",
      name: "Әкімші арнасы",
      nodes: ["sysadmin", "dbms"],
      text: "№2 тізілімдегі жүйе әкімшісі порталды айналып, ДҚБЖ-ға жетеді. Мердігердің уақытша арнасы осы жолмен өтеді.",
    },
  ],
  nodes: {
    student: { title: "Студенттер", text: "№2 тізілім. Порталдан LMS-ке өтеді, студенттер дерекқорына кірмейді." },
    teachers: { title: "Оқытушылар", text: "№2 тізілім. Порталдан LMS-ке өтеді, қоймаға кірмейді." },
    staff: { title: "Әкімшілік", text: "№2 тізілім. Порталда тоқтайды, студенттер дерекқорына кірмейді." },
    outsider: { title: "Сыртқы бұзушы", text: "Шекарадан тыс. Порталға дейін ғана жетеді, қоймаға тікелей жолы жоқ." },
    registrar: { title: "Тіркеуші", text: "№2 тізілім. Студенттер дерекқорына кіретін рөл. Өзгеріс бекітіліп, журналдалады." },
    sysadmin: { title: "Жүйе әкімшісі", text: "№2 тізілім. ДҚБЖ мен резервке жетеді. Мердігердің уақытша арнасы осы жолмен өтеді." },
    portal: { title: "Портал", text: "№2 тізілімдегі қолданбалық есік. Студент, оқытушы, әкімшілік және тіркеуші осында кіреді." },
    iam: { title: "IAM", text: "№2 тізілімдегі сәйкестендіру. Портал кім екенін осы қызметтен сұрайды." },
    lms: { title: "LMS нәтижесі", text: "№2 тізілім. Студент пен оқытушының жолы осында бітеді." },
    dbms: { title: "ДҚБЖ", text: "№2 тізілім. Тіркеушінің сұрауын қойма мен резервке жеткізеді." },
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
      "Модель №2 жұмыстағы жоғары активке — студенттердің жеке деректер қорына — байланды. Қызмет шекарасының ішінде портал, IAM, ДҚБЖ, қойма және резерв бар. Сыртта студент, сыртқы бұзушы, тіркеуші және мердігер. Жеті ағынға STRIDE қолданып, 12 қауіп жазылды. Ықтималдық × әсер бойынша басым бесеуі: фишинг, бөтен жазбаны оқу, мердігердің ашық әкімші арнасы, шифрланбаған резерв және бақылаусыз өзгерту. Қалған сценарийлер төмен ұпаймен тізілімде қалады, өшірілмейді.",
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
          <td class="num">${threat.likelihood}/${threat.impact}<span class="cell-sub">${score}</span></td>
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
          <span class="num">${threat.likelihood}/${threat.impact} · ${lab3Score(threat)}</span>
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
          <p>Таңдау №2 тізілімнен. Жоғары санат — жиынтық 8–9. Қызмет ететін жүйе сол активтің тәуелділігінен алынды.</p>
        </div>
        <article class="goal-card reveal">
          <h3>${lab2AssetById("student-db").name}</h3>
          <p>№2 тізілімнен алынған жоғары актив. Құпиялылық ${lab2AssetById("student-db").c}, тұтастық ${lab2AssetById("student-db").i}, қолжетімділік ${lab2AssetById("student-db").a}, жиынтық ${lab2Category(lab2AssetById("student-db")).sum}. Иесі — ${lab2AssetById("student-db").owner}. ${lab2AssetById("student-db").info}. Субъектілер де №2-ден: студенттер мен оқытушылар порталдан LMS-ке өтеді, әкімшілік порталда тоқтайды, тіркеуші қоймаға кіреді, жүйе әкімшісі ДҚБЖ мен резервке жетеді.</p>
          <p class="meta"><span>Тізілім</span><a href="#lab/2/registry">№2 активтер тізілімі</a></p>
        </article>
        <div class="process-grid">${["portal", "iam", "lms-grades", "dbms", "backup"]
          .map((id) => {
            const item = lab2AssetById(id);
            const itemCat = lab2Category(item);
            return `<article class="process-card"><h3>${LAB2_SHORT[id]}</h3><p>${item.info}. C/I/A ${item.c}/${item.i}/${item.a} · ${itemCat.label}.</p></article>`;
          })
          .join("")}</div>
        <p class="theory reveal">${LAB3.theory}</p>
        <div class="stride-grid">${stride}</div>
      </section>

      <section class="block" id="diagram">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 3</p>
          <h2>Контекстік сызба</h2>
          <p>Субъектілер мен жүйелер №2 тізілімнен. Студент, оқытушы және әкімшілік дерекқорға кірмейді. Қоймаға тіркеуші кіреді. Ағынды бассаңыз, сол шекарадағы қауіптер тізілімде ерекшеленеді.</p>
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
          <p>12 қауіп. Ұпай — ықтималдық × әсер. Жолды ашсаңыз, көз → осалдық → әрекет → салдар тізбегі шығады.</p>
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
                <th>Ықт./әсер</th>
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
  const nodes = [
    { id: "student", x: 200, y: 16, w: 156, h: 50, title: "Студенттер", sub: "портал, LMS", kind: "ext" },
    { id: "teachers", x: 368, y: 16, w: 156, h: 50, title: "Оқытушылар", sub: "портал, LMS", kind: "ext" },
    { id: "staff", x: 536, y: 16, w: 156, h: 50, title: "Әкімшілік", sub: "портал", kind: "ext" },
    { id: "registrar", x: 704, y: 16, w: 156, h: 50, title: "Тіркеуші", sub: "дерекқор", kind: "ext" },
    { id: "outsider", x: 12, y: 188, w: 148, h: 52, title: "Бұзушы", sub: "сыртқы", kind: "ext" },
    { id: "sysadmin", x: 980, y: 320, w: 168, h: 52, title: "Жүйе әкімшісі", sub: "ДҚБЖ, резерв", kind: "ext" },
    { id: "portal", x: 250, y: 188, w: 210, h: 52, title: "Портал", sub: "қолданбалық есік", kind: "proc" },
    { id: "iam", x: 530, y: 188, w: 180, h: 52, title: "IAM", sub: "сәйкестендіру", kind: "proc" },
    { id: "lms", x: 250, y: 320, w: 210, h: 52, title: "LMS нәтижесі", sub: "баға, қатысу", kind: "proc" },
    { id: "dbms", x: 530, y: 320, w: 210, h: 52, title: "ДҚБЖ", sub: "сұраулар", kind: "proc" },
    { id: "store", x: 250, y: 460, w: 210, h: 68, title: "Студенттер ДҚ", sub: "жеке дерек", kind: "store" },
    { id: "backup", x: 530, y: 468, w: 210, h: 52, title: "Резерв", sub: "көшірме", kind: "proc" },
  ];

  const flows = [
    {
      id: "DF1",
      nodes: ["student", "teachers", "staff", "outsider", "portal"],
      paths: [
        "M 278 66 L 278 100 L 355 100 L 355 188",
        "M 446 66 L 446 100 L 355 100 L 355 188",
        "M 614 66 L 614 100 L 355 100 L 355 188",
        "M 160 214 L 250 214",
      ],
      labels: [
        { x: 300, y: 92, text: "DF1" },
        { x: 190, y: 206, text: "DF1" },
      ],
    },
    {
      id: "DF2",
      nodes: ["registrar", "portal"],
      paths: ["M 782 66 L 782 118 L 430 118 L 430 188"],
      labels: [{ x: 600, y: 110, text: "DF2" }],
    },
    {
      id: "DF3",
      nodes: ["portal", "iam"],
      paths: ["M 460 214 L 530 214"],
      labels: [{ x: 478, y: 206, text: "DF3" }],
    },
    {
      id: "DF8",
      nodes: ["portal", "lms", "student", "teachers"],
      paths: ["M 320 240 L 320 320"],
      labels: [{ x: 332, y: 286, text: "DF8" }],
    },
    {
      id: "DF4",
      nodes: ["portal", "dbms"],
      paths: ["M 420 240 L 420 286 L 635 286 L 635 320"],
      labels: [{ x: 520, y: 278, text: "DF4" }],
    },
    {
      id: "DF5",
      nodes: ["dbms", "store"],
      paths: ["M 635 372 L 635 420 L 355 420 L 355 460"],
      labels: [{ x: 500, y: 412, text: "DF5" }],
    },
    {
      id: "DF6",
      nodes: ["dbms", "backup"],
      paths: ["M 700 372 L 700 468"],
      labels: [{ x: 712, y: 420, text: "DF6" }],
    },
    {
      id: "DF7",
      nodes: ["sysadmin", "dbms"],
      paths: ["M 980 346 L 740 346"],
      labels: [{ x: 850, y: 338, text: "DF7" }],
    },
  ];

  const boxes = nodes
    .map((node) => {
      const cx = node.kind === "store" ? node.x + 16 + (node.w - 16) / 2 : node.x + node.w / 2;
      const bar =
        node.kind === "store"
          ? `<line class="store-bar" x1="${node.x + 16}" y1="${node.y + 8}" x2="${node.x + 16}" y2="${node.y + node.h - 8}" />`
          : "";
      return `
        <g class="dfd-node" data-id="${node.id}" data-kind="${node.kind}" tabindex="0" role="button">
          <title>${node.title}</title>
          <rect x="${node.x}" y="${node.y}" width="${node.w}" height="${node.h}" rx="${node.kind === "store" ? 8 : 12}" />
          ${bar}
          <text class="dfd-title" x="${cx}" y="${node.y + 23}">${node.title}</text>
          <text class="dfd-sub" x="${cx}" y="${node.y + 41}">${node.sub}</text>
        </g>`;
    })
    .join("");

  const lines = flows
    .map((flow) => {
      const paths = flow.paths
        .map(
          (d) => `
          <path class="dfd-hit" d="${d}" />
          <path class="dfd-line" marker-end="url(#dfd-arrow)" d="${d}" />`
        )
        .join("");
      const labels = flow.labels
        .map((label) => `<text class="dfd-tag" x="${label.x}" y="${label.y}">${label.text}</text>`)
        .join("");
      return `<g class="dfd-flow" data-flow="${flow.id}" data-nodes="${flow.nodes.join(" ")}" tabindex="0" role="button">${paths}${labels}</g>`;
    })
    .join("");

  return `
    <div class="dep-figure">
      <svg class="dfd-svg" viewBox="0 0 1180 640" role="img" aria-label="№2 тізілімдегі активтердің контекстік сызбасы">
        <defs>
          <marker id="dfd-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 Z" fill="#8a3b12" />
          </marker>
        </defs>
        <rect class="dfd-boundary" x="210" y="150" width="720" height="420" rx="18" />
        <text class="dfd-boundary-label" x="228" y="174">Сенім шекарасы</text>
        ${boxes}
        ${lines}
      </svg>
      <div class="dep-legend">
        <span><i class="bound-swatch"></i>Шекара</span>
        <span><i class="ext-swatch"></i>Субъект</span>
        <span><i class="proc-swatch"></i>Процесс</span>
        <span><i class="store-swatch"></i>Қойма</span>
        <span><i class="flow-swatch"></i>Дерек ағыны</span>
      </div>
    </div>`;
}

function bindLab3() {
  const filters = document.getElementById("threat-filters");
  const panelTitle = document.getElementById("dfd-title");
  const panelText = document.getElementById("dfd-text");
  if (!filters || filters.dataset.bound) return;
  filters.dataset.bound = "1";

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
    document.querySelector(".dfd-svg")?.classList.remove("is-active");
    document.querySelectorAll(".dfd-flow, .dfd-node, .threat-row").forEach((node) => {
      node.classList.remove("is-on", "is-dim", "is-hit");
    });
    if (panelTitle) panelTitle.textContent = "Ағынды таңдаңыз";
    if (panelText) {
      panelText.textContent =
        "DF1 — порталға кіру. DF8 — LMS. DF7 — жүйе әкімшісінің арнасы. Шекараны кесіп өткен әр сызық жеке тексеріледі.";
    }
  }

  function paint(flowIds, title, text) {
    const ids = new Set(flowIds);
    const nodeIds = new Set();
    document.querySelectorAll(".dfd-flow").forEach((flow) => {
      const on = ids.has(flow.dataset.flow);
      flow.classList.toggle("is-on", on);
      if (on) flow.dataset.nodes.split(" ").forEach((id) => nodeIds.add(id));
    });
    document.querySelectorAll(".dfd-node").forEach((node) => {
      const on = nodeIds.has(node.dataset.id);
      node.classList.toggle("is-on", on);
      node.classList.toggle("is-dim", !on);
    });
    document.querySelector(".dfd-svg")?.classList.add("is-active");
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
    const node = LAB3.nodes[id];
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

  document.querySelectorAll(".dfd-flow").forEach((flow) => {
    flow.addEventListener("click", () => showFlow(flow.dataset.flow, true));
    flow.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showFlow(flow.dataset.flow, true);
      }
    });
  });

  document.querySelectorAll(".dfd-node").forEach((node) => {
    node.addEventListener("click", () => showNode(node.dataset.id));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showNode(node.dataset.id);
      }
    });
  });
}
