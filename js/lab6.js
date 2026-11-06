const LAB6 = {
  lab: "№6 зертханалық жұмыс",
  title: "Ақпараттық қауіпсіздік тәуекелдерін талдау және бағалау",
  lead:
    "Smart Campus активтері бойынша сапалық тәуекел бағасы: SWOT, R = V × I матрицасы және орташа мен жоғары тәуекелдің өңдеу жоспары.",
  goal:
    "Таңдалған ақпараттық жүйенің активтерін, қауіптері мен осалдықтарын анықтау, тәуекелдерді сапалық әдіспен бағалау және оларды өңдеу жоспарын әзірлеу.",
  equipment:
    "Дербес компьютер, №2 активтер тізілімі, №4 рөлдік матрица және №5 желі аймақтары.",
  limit:
    "Жұмыс оқу сценарийі. Нақты кампусқа шара енгізілмейді. Қабылданатын тәуекел деңгейі — төмен: R = 1–2. Орташа мен жоғары тәуекел өңделеді.",
  scale:
    "Ықтималдық V және әсер I үш балдық шкаламен бағаланады: 1 — төмен, 2 — орташа, 3 — жоғары. Тәуекел деңгейі R = V × I. 1–2 — төмен, 3–4 — орташа, 6–9 — жоғары.",
  tasks: [
    { n: "01", title: "Нысан", text: "Smart Campus мақсаты, пайдаланушылары, деректері, сыртқы байланысы және бағалау шекарасы." },
    { n: "02", title: "SWOT", text: "Күшті және әлсіз жақ, мүмкіндік пен қауіп. Әр бөлімде кемінде үш тармақ." },
    { n: "03", title: "Баға", text: "Сегіз активтік қауіп. V, I және R = V × I. Қолданыстағы шара ескеріледі." },
    { n: "04", title: "Жоспар", text: "Орташа және жоғары тәуекелге жауапты, мерзім, ресурс, құн мен қалдық тәуекел." },
  ],
  methods: [
    {
      name: "OCTAVE",
      text: "Ұйым тәуекелді өзі бағалайды. Бастапқы нүкте — актив және сол актив бұзылса бизнеске тиетін салдар.",
    },
    {
      name: "ISO/IEC 27005",
      text: "Ақпараттық қауіпсіздікті басқару жүйесінің ішіндегі үдеріс: контекст, бағалау, өңдеу және кейінгі мониторинг.",
    },
    {
      name: "NIST SP 800-30",
      text: "Қауіп көзі, қауіп оқиғасы, осалдық, ықтималдық және әсер арқылы тәуекелді сипаттайды.",
    },
  ],
  object: {
    name: "Smart Campus — жоғары оқу орнының цифрлық кампусы",
    purpose:
      "Студент, оқытушы, тіркеуші және күзет бір портал арқылы оқу нәтижесін, жеке дерек пен ғимаратқа кіруді жүргізеді.",
    users:
      "Студенттер, оқытушылар, тіркеуші офис, жүйелік әкімшілер, ақпараттық қауіпсіздік офицері, күзет және қонақтар.",
    data: "ЖСН және оқу мәртебесі, баға, өткізу журналы, тіркелгі мен рөл.",
    links:
      "Интернет DMZ және WAF арқылы, қонақ Wi-Fi, серіктес API (Extranet), пошта арнасы және қалалық электр желісі.",
    inside: [
      "Smart Campus порталы және IAM",
      "Студенттердің жеке деректер қоры және ДҚБЖ",
      "LMS оқу нәтижелері",
      "Кампус серверлері, №5 VLAN-дар және резервтік көшіру",
      "Сервер бөлмесі мен ондағы үзіліссіз қуат көзі",
    ],
    outside: [
      "Студенттің үйдегі құрылғысы, портал сессиясынан тыс",
      "Қалалық электр операторының ішкі жүйесі",
      "Банк төлемі және бөгде жоғары оқу орнының кампусы",
    ],
  },
  swot: [
    {
      id: "s",
      key: "S",
      title: "Күшті жақтар",
      items: [
        "№2 тізілімде активтің иесі, құпиялылық, тұтастық және қолжетімділік талабы жазылған.",
        "№4 рөлдік матрица артықшылықты есепті күнделікті тіркелгіден бөледі, кіру MFA арқылы.",
        "№5 алты сенім аймағы және default deny: DMZ дерекқорға тікелей бармайды.",
        "Резервтік көшіру 3-2-1 қағидасымен жобаланған, иесі инфрақұрылым бөлімі.",
      ],
    },
    {
      id: "w",
      key: "W",
      title: "Әлсіз жақтар",
      items: [
        "Тіркеуші станциясында DLP жоқ, ЖСН экспорты толық бақыланбайды.",
        "LMS-те баға бір оқытушының әрекетімен сақталады, екінші бекіту жоқ.",
        "Көшірменің желідегі данасы бопсалаудан бөлек қорғалмаған, қалпына келтіру сынағы әлі өтпеген.",
        "Қауіпсіздік оқытуы біркелкі емес: студент пен оқытушы фишингті әртүрлі таниды.",
      ],
    },
    {
      id: "o",
      key: "O",
      title: "Мүмкіндіктер",
      items: [
        "ISO/IEC 27005 үдерісін дайын активтер тізіліміне отырғызуға болады.",
        "Admin аймағындағы SIEM журналды тәуекел мониторингіне береді.",
        "Өзгертілмейтін офлайн көшірме бопсалаудың қалдық тәуекелін түсіреді.",
        "Емтихан алдындағы қысқа оқыту фишинг ықтималдығын шағын бюджетпен төмендетеді.",
      ],
    },
    {
      id: "t",
      key: "T",
      title: "Қауіптер",
      items: [
        "Сыртқы шабуылдаушы портал мен тіркелгі арқылы дербес дерекке жетеді.",
        "Фишинг хат студент пен оқытушы тіркелгісін ашады.",
        "Бопсалаушы бағдарлама сервер мен онлайн көшірмені бірге жабады.",
        "Ішкі тұлға — тіркеуші немесе әкімші — өз құқығын теріс пайдаланады.",
        "Сервер бөлмесінде өрт немесе электр үзілісі қызметті тоқтатады.",
      ],
    },
  ],
  risks: [
    {
      n: "1",
      asset: "Студенттердің жеке деректер қоры",
      threat: "Дербес деректердің таралуы",
      source: "Ішкі және сыртқы",
      vuln: "Тіркеуші ЖСН-ді жұмыс станциясынан экспорттай алады, DLP жоқ.",
      existing: "RBAC, сақтауда шифрлау және TLS. №4 бойынша студент қоймаға кірмейді.",
      v: 3,
      i: 3,
      measure: "Шифрлауды сақтау, қолжетімділікті шектеу, DLP. ЖСН-ді DMZ кэшінде сақтамау.",
      approach: "Азайту және болдырмау",
      owner: "Дерек қорғау офицері",
      deadline: "60 күн",
      resource: "DLP лицензиясы, тіркеушінің 2 жұмыс күні",
      damage: "8 000 000 теңге",
      cost: "1 200 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 3,
      residualNote: "Ықтималдық түседі. ЖСН таралса, салдар жоғары күйінде қалады.",
    },
    {
      n: "2",
      asset: "Портал және IAM тіркелгілері",
      threat: "Фишинг",
      source: "Сыртқы",
      vuln: "Хатты тексеру әдеті біркелкі емес, антиспам толық жабылмаған.",
      existing: "№4 MFA жобаланған. Оқыту мен пошта сүзгісі әлі толық емес.",
      v: 2,
      i: 2,
      measure: "Оқыту, MFA, антиспам сүзгісі",
      approach: "Азайту",
      owner: "Ақпараттық қауіпсіздік офицері",
      deadline: "30 күн",
      resource: "Оқытудың 1 күні, пошта сүзгісінің лицензиясы",
      damage: "1 500 000 теңге",
      cost: "600 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 1,
      residualNote: "MFA ұрланған құпия сөздің өзін сессияға айналдырмайды.",
    },
    {
      n: "3",
      asset: "Кампус серверлері",
      threat: "Зиянды бағдарламалық қамтылым",
      source: "Сыртқы",
      vuln: "Патч терезесі ұзарады, серверде EDR жоқ.",
      existing: "№5 сегменттеу. Операциялық жүйені жаңарту жоспарланған.",
      v: 2,
      i: 3,
      measure: "EDR, жаңарту, сегменттеу",
      approach: "Азайту",
      owner: "Жүйелік әкімші",
      deadline: "45 күн",
      resource: "EDR лицензиясы, ай сайынғы патч терезесі",
      damage: "5 000 000 теңге",
      cost: "900 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Сегмент залалдың кампус бойынша таралуын шектейді.",
    },
    {
      n: "4",
      asset: "Кампус серверлері",
      threat: "Электр қуатының үзілуі",
      source: "Техногендік",
      vuln: "Үзіліссіз қуат көзі қысқа үзілісті көтереді, генератор жоқ.",
      existing: "Үзіліссіз қуат көзі және резервтік көшіру жоспары.",
      v: 1,
      i: 2,
      measure: "Қабылдау: үзіліссіз қуат көзі және резервтік көшіру",
      approach: "Қабылдау",
      owner: "ИТ инфрақұрылым бөлімі",
      deadline: "—",
      resource: "Қолданыстағы үзіліссіз қуат көзі",
      damage: "400 000 теңге",
      cost: "—",
      compare: "Генератор бұл қатарға кірмейді.",
      rv: 1,
      ri: 2,
      residualNote: "Төмен тәуекел қолданыстағы шарамен қабылданады.",
    },
    {
      n: "5",
      asset: "LMS оқу нәтижелері",
      threat: "Бағаның рұқсатсыз өзгеруі",
      source: "Ішкі",
      vuln: "Баға екінші адамның бекітуінсіз сақталады.",
      existing: "№4: студент өз бағасын өзгертпейді, оқытушы тек өз пәнін көреді.",
      v: 2,
      i: 3,
      measure: "Екі адамдық бекіту, өзгеріс журналы, MFA",
      approach: "Азайту",
      owner: "Оқу бөлімі",
      deadline: "30 күн",
      resource: "LMS баптауы, оқу бөлімінің 3 жұмыс күні",
      damage: "2 000 000 теңге",
      cost: "350 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Журнал өзгерісті жасыруды қиындатады.",
    },
    {
      n: "6",
      asset: "Резервтік көшіру қызметі",
      threat: "Бопсалаушы бағдарлама онлайн көшірмені жабады",
      source: "Сыртқы",
      vuln: "Көшірменің бір данасы желіде тұр, қалпына келтіру сыналмаған.",
      existing: "3-2-1 жобасы. Тоқсандық сынақ жоспарланған, әлі өткізілмеген.",
      v: 2,
      i: 3,
      measure: "Өзгертілмейтін офлайн көшірме және қалпына келтіру сынағы",
      approach: "Азайту",
      owner: "ИТ инфрақұрылым бөлімі",
      deadline: "60 күн",
      resource: "Офлайн тасымалдағыш, сынаққа 2 жұмыс күні",
      damage: "6 000 000 теңге",
      cost: "700 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Офлайн дана желідегі шифрлаудан кейін де қалады.",
    },
    {
      n: "7",
      asset: "Кампус Wi-Fi және коммутаторлар",
      threat: "Қонақ желісінен ішкі VLAN-ға өту",
      source: "Сыртқы",
      vuln: "VLAN конфигурациясының қатесі тұрақты тексерілмейді.",
      existing: "№5: қонақ желісі дерекқор мен әкімшілік VLAN-нан бөлек, default deny.",
      v: 2,
      i: 2,
      measure: "Қонақ VLAN конфигурациясын тексеру және бекіту",
      approach: "Азайту",
      owner: "Желі әкімшісі",
      deadline: "21 күн",
      resource: "Желі әкімшісінің 2 жұмыс күні",
      damage: "900 000 теңге",
      cost: "150 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Тексеру қате конфигурацияның тұрып қалуын азайтады.",
    },
    {
      n: "8",
      asset: "IAM және жүйелік әкімшілер",
      threat: "Артықшылықты құқықтың теріс пайдаланылуы",
      source: "Ішкі",
      vuln: "Әкімші әрекетін екінші адам бекітпейді, журнал аптасына бір рет қаралады.",
      existing: "№4 MFA және №5 bastion. Әкімші күнделікті VLAN-да отырмайды.",
      v: 2,
      i: 3,
      measure: "Екі адамдық бекіту және журналды күнде қарау",
      approach: "Азайту",
      owner: "Ақпараттық қауіпсіздік офицері",
      deadline: "45 күн",
      resource: "SIEM ережесі, офицердің апталық 2 сағаты",
      damage: "4 500 000 теңге",
      cost: "800 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Bastion қалады. Күнделікті шолу әрекетті кеш байқауды қысқартады.",
    },
    {
      n: "9",
      asset: "Сервер бөлмесі",
      threat: "Сервер бөлмесіндегі өрт",
      source: "Табиғи және техногендік",
      vuln: "Бөлмеде түтін датчигі мен сақтандыру шарты жоқ.",
      existing: "Физикалық қолжетімділік картамен, бейнебақылау бар.",
      v: 1,
      i: 3,
      measure: "Түтін датчигі және сақтандыру",
      approach: "Азайту және беру",
      owner: "ИТ инфрақұрылым бөлімі",
      deadline: "90 күн",
      resource: "Датчик, сақтандыру сыйақысы, ректораттың бекітуі",
      damage: "2 500 000 теңге",
      cost: "500 000 теңге",
      compare: "Құны залалдан төмен.",
      rv: 1,
      ri: 2,
      residualNote: "Офсайт көшірме өрттен кейін дерек қолжетімділігін қайтарады. Сақтандыру шығынның бір бөлігін жабады.",
    },
  ],
  rejected: [
    {
      name: "Генератор",
      cost: "3 500 000 теңге",
      damage: "қысқа үзілістің залалы 400 000 теңге",
      text: "Құны залалдан жоғары. Электр үзілісі төмен тәуекел, ол үзіліссіз қуат көзі және көшірмемен қабылданады.",
    },
    {
      name: "Тәулік бойы жұмыс істейтін бақылау орталығы",
      cost: "4 000 000 теңге",
      damage: "фишинг залалы 1 500 000 теңге",
      text: "Құны залалдан жоғары. Орнына оқыту, MFA және антиспам алынады, олардың құны 600 000 теңге.",
    },
    {
      name: "Газбен өрт сөндіру жүйесі",
      cost: "3 000 000 теңге",
      damage: "өрт залалы 2 500 000 теңге",
      text: "Құны залалдан жоғары, қосымша негіздеме жоқ. Орнына датчик және сақтандыру алынады, олардың құны 500 000 теңге.",
    },
  ],
  questions: [
    {
      num: 7,
      text: "Таңдалған ақпараттық жүйе үшін негізгі қауіптер қандай?",
      answer:
        "Smart Campus үшін ең жоғары қауіп — студенттердің дербес деректерінің таралуы, R = 9. Одан кейін зиянды бағдарлама, бопсалаушы бағдарлама, бағаның рұқсатсыз өзгеруі және әкімші құқығының теріс пайдаланылуы, әрқайсысының R = 6. Орташа деңгейде фишинг, қонақ VLAN-ның ішке өтуі және сервер бөлмесіндегі өрт. Электр қуатының үзілуі төмен, R = 2, ол қабылданады.",
    },
    {
      num: 8,
      text: "Ішкі, сыртқы, табиғи және техногендік қауіп көздері қалай ажыратылады?",
      answer:
        "Ішкі көз — ұйымның адамы, оның заңды құқығы бар: тіркеуші, оқытушы, әкімші. Сыртқы көз — ұйымнан тыс тұлға: интернеттегі шабуылдаушы, фишинг жіберуші, қонақ. Табиғи көз ниетсіз табиғи оқиға: су, найзағай, өрттің табиғи себебі. Техногендік көз — техникалық ортаның істен шығуы: электр үзілісі, жабдықтың тоқтауы. Зиянды кодты жіберетін адам сыртқы көз, ал электр үзілісі техногендік. Өрттің себебі табиғи да, техногендік те болуы мүмкін, сондықтан ол екеуімен бірге жазылады.",
    },
    {
      num: 9,
      text: "Активтің құндылығы тәуекел деңгейіне қалай әсер етеді?",
      answer:
        "Құндылық әсер балына I кіреді. ЖСН бар қойманың құпиялылық құны жоғары, сондықтан таралудың I = 3 және R = 9. Қонақ Wi-Fi-дың өз құны төмен, ал №5 бойынша ол дерекқорға тікелей бармайды, сондықтан I = 2. Құндылық ықтималдықты V өзі көтермейді. Сирек оқиға да құнды активте жоғары тәуекел береді, өйткені R = V × I.",
    },
    {
      num: 10,
      text: "Сапалық және сандық бағалау тәсілдерінің айырмашылығы қандай?",
      answer:
        "Сапалық тәсіл деңгеймен жұмыс істейді. Бұл жұмыста V және I: 1 төмен, 2 орташа, 3 жоғары, ал R = V × I. 1–2 төмен, 3–4 орташа, 6–9 жоғары. Сандық тәсіл жиілік пен ақшаны есептейді, мысалы жылдық күтілетін залал. Мұнда шкала сапалық. Ақша тек шара құнын ықтимал залалмен салыстыру үшін қолданылады.",
    },
    {
      num: 11,
      text: "Тәуекелді азайту, болдырмау, беру және қабылдау нені білдіреді?",
      answer:
        "Азайту — ықтималдықты немесе салдарды төмендету: DLP, MFA, EDR, офлайн көшірме. Болдырмау — тәуекел тудыратын әрекеттен бас тарту: ЖСН порталдың DMZ кэшінде сақталмайды. Беру — салдардың бір бөлігін үшінші тарапқа өткізу: өрт сақтандыруы. Жауапкершілік толық кетпейді. Қабылдау — тәуекелді саналы түрде қалдыру. Электр үзілісі R = 2 осылай қабылданады.",
    },
    {
      num: 12,
      text: "Қалдық тәуекел дегеніміз не және оны кім қабылдауы тиіс?",
      answer:
        "Қалдық тәуекел — таңдалған шарадан кейін қалған деңгей. Ол нөлге түспейді. Дербес деректе ықтималдық 3-тен 1-ге түседі, салдар 3 күйінде қалады, қалдық R = 3. Оны қабылдайтын — актив иесі және ректорат. Бағалауды жүргізген маман ұсыныс береді, қабылдау туралы шешімге өзі қол қоймайды. Келесі семестрде қалдық қайта бағаланады.",
    },
    {
      num: 13,
      text: "Қорғаныс шарасының экономикалық орындылығы қалай бағаланады?",
      answer:
        "Шара құны ықтимал залалмен салыстырылады. DLP 1 200 000 теңге, дерек таралуының залалы 8 000 000 теңге, сондықтан шара орынды. Генератор 3 500 000 теңге, қысқа үзілістің залалы 400 000 теңге, сондықтан генератор таңдалмайды. Тәулік бойы жұмыс істейтін бақылау орталығы 4 000 000 теңге, фишинг залалы 1 500 000 теңге, сондықтан орнына 600 000 теңгелік оқыту, MFA және антиспам алынады. Құны залалдан жоғары шара заң талабы немесе орны толмайтын салдар болғанда ғана бөлек негіздемемен алынады.",
    },
  ],
  conclusion: {
    text:
      "Smart Campus шекарасында тоғыз қауіп бағаланды. Бесеуі жоғары, үшеуі орташа, біреуі төмен. Ең үлкен тәуекел — дербес деректердің таралуы, R = 9. Орташа мен жоғары тәуекелдің сегізіне жауапты, мерзім және бюджет белгіленді. Әр таңдалған шараның құны ықтимал залалдан төмен. Электр үзілісі R = 2 қабылданады. Қалдық тәуекелді актив иесі мен ректорат қабылдайды, келесі семестрде баға қайталанады.",
    recs: [
      "Дербес дерекке DLP қою және ЖСН-ді DMZ кэшінде сақтамау. Бұл R = 9, залалы 8 000 000 теңге.",
      "Бопсалауға қарсы өзгертілмейтін офлайн көшірме жасап, қалпына келтіруді сынау. Залалы 6 000 000 теңге.",
      "Баға өзгерісі мен әкімші әрекетіне екі адамдық бекіту қою. Екеуінің де R = 6.",
    ],
  },
  literature: [
    {
      n: "1",
      title: "ISO/IEC 27005:2022. Information security risk management",
      note: "Тәуекелді бағалау, өңдеу және мониторинг үдерісі.",
      source: "iso.org",
      url: "https://www.iso.org/standard/80585.html",
    },
    {
      n: "2",
      title: "NIST SP 800-30 Rev. 1. Guide for Conducting Risk Assessments",
      note: "Қауіп көзі, осалдық, ықтималдық және әсер.",
      source: "csrc.nist.gov",
      url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
    },
    {
      n: "3",
      title: "OCTAVE Allegro. Improving the Information Security Risk Assessment Process",
      note: "Актив пен бизнес-салдардан басталатын ұйымдық бағалау.",
      source: "sei.cmu.edu",
      url: "https://insights.sei.cmu.edu/library/introducing-octave-allegro-improving-the-information-security-risk-assessment-process/",
    },
  ],
};

function lab6Band(score) {
  if (score >= 6) return { id: "high", label: "жоғары" };
  if (score >= 3) return { id: "medium", label: "орташа" };
  return { id: "low", label: "төмен" };
}

function lab6Score(risk) {
  return risk.v * risk.i;
}

function lab6Stepper(kind, risk) {
  const value = kind === "r" ? lab6Score(risk) : risk[kind];
  const tone = kind === "r" ? ` r-${lab6Band(value).id}` : "";
  const names = { v: "Ықтималдық", i: "Әсер", r: "Тәуекел" };
  const atMin = kind === "r" ? risk.v === 1 && risk.i === 1 : value <= 1;
  const atMax = kind === "r" ? risk.v === 3 && risk.i === 3 : value >= 3;
  return `
    <span class="score-step">
      <button type="button" data-step="${kind}" data-dir="-1" data-risk="${risk.n}" aria-label="${names[kind]}ты төмендету" ${atMin ? "disabled" : ""}>−</button>
      <strong class="${tone}" data-field="${kind}">${value}</strong>
      <button type="button" data-step="${kind}" data-dir="1" data-risk="${risk.n}" aria-label="${names[kind]}ты жоғарылату" ${atMax ? "disabled" : ""}>+</button>
    </span>`;
}

function lab6Nudge(risk, kind, dir) {
  const step = dir > 0 ? 1 : -1;
  if (kind === "v" || kind === "i") {
    const next = risk[kind] + step;
    if (next < 1 || next > 3) return false;
    risk[kind] = next;
    return true;
  }
  if (step < 0 && risk.v === 1 && risk.i === 1) return false;
  if (step > 0 && risk.v === 3 && risk.i === 3) return false;
  if (step > 0) {
    if (risk.v < 3) risk.v += 1;
    else risk.i += 1;
  } else if (risk.v > 1) risk.v -= 1;
  else risk.i -= 1;
  return true;
}

function lab6SetBand(el, bandId) {
  el.classList.remove("r-high", "r-medium", "r-low");
  el.classList.add(`r-${bandId}`);
}

function bindLab6() {
  const root = document.querySelector(".lab6");
  if (!root || root.dataset.bound) return;
  root.dataset.bound = "1";

  let mode = "all";

  function apply(next) {
    mode = next;
    root.querySelectorAll("[data-risk-filter]").forEach((chip) => {
      const on = chip.dataset.riskFilter === mode;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll("[data-risk-cell]").forEach((cell) => {
      const on = mode === `cell:${cell.dataset.riskCell}`;
      cell.classList.toggle("is-on", on);
      cell.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll(".risk-item").forEach((row) => {
      const byLevel = mode.startsWith("level:") && row.dataset.level === mode.slice(6);
      const byCell = mode.startsWith("cell:") && row.dataset.cell === mode.slice(5);
      row.hidden = mode !== "all" && !byLevel && !byCell;
    });
    const shown = root.querySelectorAll("#risk-table tbody tr:not([hidden])").length;
    const note = root.querySelector("#risk-note");
    if (!note) return;
    if (mode === "all") note.textContent = `${LAB6.risks.length} қауіп. Деңгейді немесе матрица ұяшығын таңдаңыз.`;
    else if (shown === 0) note.textContent = "Бұл ұяшықта қауіп жоқ.";
    else note.textContent = `Көрсетілген қауіп: ${shown}.`;
  }

  function paint(risk) {
    const score = lab6Score(risk);
    const band = lab6Band(score);
    root.querySelectorAll(`.risk-item[data-risk="${risk.n}"]`).forEach((node) => {
      node.dataset.level = band.id;
      node.dataset.cell = `${risk.v}-${risk.i}`;
      const vEl = node.querySelector('[data-field="v"]');
      const iEl = node.querySelector('[data-field="i"]');
      const rEl = node.querySelector('[data-field="r"]');
      const levelEl = node.querySelector('[data-field="level"]');
      if (vEl) vEl.textContent = String(risk.v);
      if (iEl) iEl.textContent = String(risk.i);
      if (rEl) {
        rEl.textContent = node.classList.contains("risk-detail") ? `R = ${score}` : String(score);
        lab6SetBand(rEl, band.id);
      }
      if (levelEl) {
        levelEl.textContent = band.label;
        lab6SetBand(levelEl, band.id);
      }
      node.querySelectorAll("[data-step]").forEach((button) => {
        const kind = button.dataset.step;
        const down = button.dataset.dir === "-1";
        if (kind === "r") button.disabled = down ? risk.v === 1 && risk.i === 1 : risk.v === 3 && risk.i === 3;
        else button.disabled = down ? risk[kind] <= 1 : risk[kind] >= 3;
      });
    });
    const plan = root.querySelector(`[data-plan="${risk.n}"]`);
    if (plan) plan.hidden = band.id === "low";
  }

  function refreshSummary() {
    const highCount = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id === "high").length;
    const mediumCount = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id === "medium").length;
    const planCount = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id !== "low").length;
    const highEl = root.querySelector("#risk-high-count");
    const midEl = root.querySelector("#risk-mid-count");
    const planEl = root.querySelector("#risk-plan-count");
    const highInline = root.querySelector("#risk-high-inline");
    const midInline = root.querySelector("#risk-mid-inline");
    if (highEl) highEl.textContent = String(highCount);
    if (midEl) midEl.textContent = String(mediumCount);
    if (planEl) planEl.textContent = String(planCount);
    if (highInline) highInline.textContent = String(highCount);
    if (midInline) midInline.textContent = String(mediumCount);
    root.querySelectorAll("[data-risk-cell]").forEach((cell) => {
      const [likelihood, impact] = cell.dataset.riskCell.split("-").map(Number);
      const count = LAB6.risks.filter((risk) => risk.v === likelihood && risk.i === impact).length;
      const label = cell.querySelector("span");
      if (label) label.textContent = count === 0 ? "бос" : `${count} қауіп`;
    });
  }

  root.addEventListener("click", (event) => {
    const step = event.target.closest("[data-step]");
    if (step) {
      const risk = LAB6.risks.find((item) => item.n === step.dataset.risk);
      if (!risk || !lab6Nudge(risk, step.dataset.step, Number(step.dataset.dir))) return;
      paint(risk);
      refreshSummary();
      apply(mode);
      return;
    }
    const chip = event.target.closest("[data-risk-filter]");
    if (chip) {
      apply(chip.dataset.riskFilter);
      return;
    }
    const cell = event.target.closest("[data-risk-cell]");
    if (cell) apply(`cell:${cell.dataset.riskCell}`);
  });
}

function viewLab6() {
  const tasks = LAB6.tasks
    .map(
      (task, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${task.n}</span>
        <h3>${task.title}</h3>
        <p>${task.text}</p>
      </article>`
    )
    .join("");

  const methods = LAB6.methods
    .map(
      (item) => `
      <article class="process-card">
        <h3>${item.name}</h3>
        <p>${item.text}</p>
      </article>`
    )
    .join("");

  const inside = LAB6.object.inside.map((item) => `<li>${item}</li>`).join("");
  const outside = LAB6.object.outside.map((item) => `<li>${item}</li>`).join("");

  const swot = LAB6.swot
    .map(
      (block) => `
      <article class="swot-card swot-${block.id}">
        <header>
          <span>${block.key}</span>
          <h3>${block.title}</h3>
        </header>
        <ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  const high = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id === "high").length;
  const medium = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id === "medium").length;
  const planned = LAB6.risks.filter((risk) => lab6Band(lab6Score(risk)).id !== "low");

  const riskRows = LAB6.risks
    .map((risk) => {
      const score = lab6Score(risk);
      const band = lab6Band(score);
      return `
        <tr class="risk-item" data-risk="${risk.n}" data-level="${band.id}" data-cell="${risk.v}-${risk.i}">
          <th scope="row">${risk.n}</th>
          <td>${risk.asset}</td>
          <td>${risk.threat}</td>
          <td class="score-cell">${lab6Stepper("v", risk)}</td>
          <td class="score-cell">${lab6Stepper("i", risk)}</td>
          <td class="score-cell">${lab6Stepper("r", risk)}</td>
          <td class="r-${band.id}" data-field="level">${band.label}</td>
          <td>${risk.measure}</td>
        </tr>`;
    })
    .join("");

  const riskCards = LAB6.risks
    .map((risk) => {
      const score = lab6Score(risk);
      const band = lab6Band(score);
      return `
        <article class="risk-detail risk-item" data-risk="${risk.n}" data-level="${band.id}" data-cell="${risk.v}-${risk.i}">
          <header>
            <h3>${risk.n}. ${risk.threat}</h3>
            <span class="cat r-pill r-${band.id}" data-field="r">R = ${score}</span>
          </header>
          <p><strong>Актив:</strong> ${risk.asset}</p>
          <p><strong>Қауіп көзі:</strong> ${risk.source}</p>
          <p><strong>Осалдық:</strong> ${risk.vuln}</p>
          <p><strong>Қолданыстағы шара:</strong> ${risk.existing}</p>
        </article>`;
    })
    .join("");

  const matrixButtons = [3, 2, 1]
    .map((impact) => {
      const cells = [1, 2, 3]
        .map((likelihood) => {
          const score = likelihood * impact;
          const band = lab6Band(score);
          const count = LAB6.risks.filter((risk) => risk.v === likelihood && risk.i === impact).length;
          const countText = count === 0 ? "бос" : `${count} қауіп`;
          return `
            <button type="button" class="risk-cell risk-${band.id}" data-risk-cell="${likelihood}-${impact}" aria-pressed="false">
              <strong>R = ${score}</strong>
              <span>${countText}</span>
            </button>`;
        })
        .join("");
      return `<span class="risk-axis">Әсер ${impact}</span>${cells}`;
    })
    .join("");

  const planRows = LAB6.risks
    .map((risk) => {
      const left = risk.rv * risk.ri;
      const band = lab6Band(left);
      const current = lab6Band(lab6Score(risk));
      return `
        <tr data-plan="${risk.n}" ${current.id === "low" ? "hidden" : ""}>
          <th scope="row">${risk.n}</th>
          <td>${risk.threat}</td>
          <td>${risk.approach}</td>
          <td>${risk.owner}</td>
          <td>${risk.deadline}</td>
          <td>${risk.resource}</td>
          <td>${risk.damage}</td>
          <td>${risk.cost}</td>
          <td class="r-${band.id}">${risk.rv} × ${risk.ri} = ${left}, ${band.label}</td>
        </tr>`;
    })
    .join("");

  const rejected = LAB6.rejected
    .map(
      (item) => `
      <article class="protect-card">
        <header>
          <h3>${item.name}</h3>
          <span class="cat">${item.cost}</span>
        </header>
        <p><strong>Салыстыру:</strong> ${item.damage}</p>
        <p>${item.text}</p>
      </article>`
    )
    .join("");

  const questions = LAB6.questions
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

  const literature = LAB6.literature
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

  const recs = LAB6.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  const chips = [
    ["all", "Барлығы"],
    ["level:high", "Жоғары"],
    ["level:medium", "Орташа"],
    ["level:low", "Төмен"],
  ]
    .map(
      ([id, label], index) =>
        `<button type="button" class="chip${index === 0 ? " is-on" : ""}" data-risk-filter="${id}" aria-pressed="${index === 0 ? "true" : "false"}">${label}</button>`
    )
    .join("");

  return `
    <div class="view lab6">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab3-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB6.lab}</p>
          <h1 class="hero-title reveal">${LAB6.title}</h1>
          <p class="hero-lead reveal">${LAB6.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Тәуекел жиынтығы">
          <div><strong>${LAB6.risks.length}</strong><span>қауіп</span></div>
          <div><strong id="risk-high-count">${high}</strong><span>жоғары тәуекел</span></div>
          <div><strong id="risk-plan-count">${planned.length}</strong><span>өңдеу жоспарында</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/6">1. Мақсат</a>
        <a href="#lab/6/object">2. Нысан</a>
        <a href="#lab/6/swot">3. SWOT</a>
        <a href="#lab/6/risks">4. Тәуекел</a>
        <a href="#lab/6/plan">5. Жоспар</a>
        <a href="#lab/6/quiz">6. Сұрақтар</a>
        <a href="#lab/6/conclusion">7. Қорытынды</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және тапсырма</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB6.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB6.equipment}</p>
        </div>
        <p class="limit-note reveal">${LAB6.limit}</p>
        <div class="task-grid">${tasks}</div>
        <div class="block-head reveal">
          <h2>Үш тәсілдің мақсаты</h2>
          <p>Бағалау сапалық. Үдеріс осы үш құжаттың қадамымен жүреді, сандық жылдық залал есептелмейді.</p>
        </div>
        <div class="process-grid">${methods}</div>
      </section>

      <section class="block" id="object">
        <div class="block-head reveal">
          <p class="eyebrow">01 · Нысан</p>
          <h2>Талдау объектісі және шекара</h2>
          <p>${LAB6.object.name}</p>
        </div>
        <article class="goal-card reveal">
          <p><strong>Мақсаты.</strong> ${LAB6.object.purpose}</p>
          <p><strong>Пайдаланушылар.</strong> ${LAB6.object.users}</p>
          <p><strong>Деректер.</strong> ${LAB6.object.data}</p>
          <p><strong>Сыртқы байланыс.</strong> ${LAB6.object.links}</p>
        </article>
        <div class="scope-grid">
          <article class="swot-card swot-s">
            <header><span>Ішінде</span><h3>Бағалау шекарасы</h3></header>
            <ul>${inside}</ul>
          </article>
          <article class="swot-card swot-t">
            <header><span>Сыртында</span><h3>Бұл жұмысқа кірмейді</h3></header>
            <ul>${outside}</ul>
          </article>
        </div>
      </section>

      <section class="block" id="swot">
        <div class="block-head reveal">
          <p class="eyebrow">01 · SWOT</p>
          <h2>Ақпараттық қауіпсіздік тұрғысынан SWOT</h2>
          <p>Күшті және әлсіз жақ — қазіргі қорғаныс. Мүмкіндік пен қауіп — сыртқы өзгеріс.</p>
        </div>
        <div class="swot-grid">${swot}</div>
      </section>

      <section class="block" id="risks">
        <div class="block-head reveal">
          <p class="eyebrow">02 · Актив және тәуекел</p>
          <h2>Тәуекелдер матрицасы</h2>
          <p id="risk-scale-note">${LAB6.scale} Жоғары тәуекел: <span id="risk-high-inline">${high}</span>. Орташа: <span id="risk-mid-count">${medium}</span>. V мен I — 1-ден 3-ке дейін. R = V × I, оны − және + батырмасы да өзгертеді.</p>
        </div>
        <div class="risk-matrix reveal" role="group" aria-label="Ықтималдық және әсер матрицасы">
          <span class="risk-axis"></span>
          <span class="risk-axis">Ықтималдық 1</span>
          <span class="risk-axis">Ықтималдық 2</span>
          <span class="risk-axis">Ықтималдық 3</span>
          ${matrixButtons}
        </div>
        <div class="chip-row reveal">${chips}</div>
        <p class="role-note reveal" id="risk-note">${LAB6.risks.length} қауіп. Деңгейді немесе матрица ұяшығын таңдаңыз.</p>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab6-risks" id="risk-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Актив</th>
                <th>Қауіп</th>
                <th>V</th>
                <th>I</th>
                <th>R</th>
                <th>Деңгей</th>
                <th>Өңдеу шарасы</th>
              </tr>
            </thead>
            <tbody>${riskRows}</tbody>
          </table>
        </div>
        <div class="block-head reveal">
          <h2>Қауіп көзі, осалдық және қолданыстағы шара</h2>
        </div>
        <div class="protect-grid">${riskCards}</div>
      </section>

      <section class="block" id="plan">
        <div class="block-head reveal">
          <p class="eyebrow">03 · Өңдеу</p>
          <h2>Тәуекелдерді өңдеу жоспары</h2>
          <p>Жоспарға орташа және жоғары тәуекел кіреді. Электр үзілісі R = 2 жоспардан тыс қабылданады. Қалдық тәуекелді актив иесі және ректорат қабылдайды.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab6-plan">
            <thead>
              <tr>
                <th>№</th>
                <th>Тәуекел</th>
                <th>Өңдеу тәсілі</th>
                <th>Жауапты</th>
                <th>Мерзім</th>
                <th>Ресурс</th>
                <th>Залал</th>
                <th>Құны</th>
                <th>Қалдық тәуекел</th>
              </tr>
            </thead>
            <tbody>${planRows}</tbody>
          </table>
        </div>
        <div class="block-head reveal">
          <h2>Құны залалдан жоғары болғандықтан алынбаған шара</h2>
          <p>Мұндай шара заң талабы немесе орны толмайтын салдар болғанда ғана бөлек негіздемемен алынады.</p>
        </div>
        <div class="protect-grid">${rejected}</div>
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
          <h2>Қорытынды және басым үш ұсыныс</h2>
        </div>
        <article class="goal-card reveal">
          <p>${LAB6.conclusion.text}</p>
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
