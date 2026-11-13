const LAB10 = {
  lab: "№10 зертханалық жұмыс",
  title: "Ақпаратты қорғау жүйесін әзірлеу және сынау",
  lead:
    "Smart Campus қорғанысының оқу стенді: он екі өлшенетін талап, алты механизм және әр талапқа оң мен теріс сынақ.",
  goal:
    "Курстық жобадағы Smart Campus үшін қорғаныс шешімін оқшау стендте прототиптеу, баптау және функционалдық сынақтан өткізу.",
  equipment:
    "Оқу компьютерінің браузері. Web Crypto бар. Желіге ереже жүктелмейді, өндірістік дерек қосылмайды.",
  limit:
    "Стенд осы беттің жадында жұмыс істейді. Кампус порталына, NGFW-ға және нақты дерек қорына қосылмайды. Құпия сөз, фактор және кілт есеп мәтініне жазылмайды: олар бет жаңартылғанда жойылатын жадта ғана тұрады.",
  tasks: [
    { n: "01", title: "Талдау", text: "№6–9 нәтижесімен ағымдағы күйді сипаттау. Он екі талап, әрқайсысына қабылдау өлшемі және тексеру әдісі." },
    { n: "02", title: "Прототип", text: "Стендте алты механизм: бұғат пен MFA, рөл, шифрлау, журнал, көшірме, қауіпсіз конфигурация." },
    { n: "03", title: "Сынақ", text: "Әр талапқа бір оң және бір теріс сынақ. Хаттамада күтілген нәтиже, нақты нәтиже, дәлел және мәртебе." },
  ],
  stages: [
    { n: "1", name: "Талап", result: "Он екі REQ", text: "№6 тәуекелі, №8 архитектурасы және ҚР заңы өлшенетін қабылдау шартына айналады." },
    { n: "2", name: "Жобалау", result: "№8 сызбасы", text: "Аймақ, рөл және құрал таңдалған. Бұл жұмыс сол жобаның сыналатын кесіндісін алады." },
    { n: "3", name: "Енгізу", result: "Оқу стенді", text: "Механизм браузерде бапталады. Персонал рөлі бөлінген: студент, оқытушы, офицер." },
    { n: "4", name: "Сынау", result: "Хаттама", text: "Оң сынақ күтілген рұқсатты, теріс сынақ тыйымды көрсетеді. Екеуі де өтуі керек." },
    { n: "5", name: "Сүйемелдеу", result: "Журнал және жоспар", text: "Сәйкессіздік жабылады, қайта сыналады. Семестр сайын қалдық тәуекел қайта бағаланады." },
  ],
  principles: [
    { name: "Толықтық", text: "Жабылатын нысан: баға жазбасы, оқу идентификаторы, журнал, көшірме және жаңарту. Бос қалғаны — тіркеуші экспортының мазмұндық бақылауы, ол ашық ұсыныс." },
    { name: "Негізділік", text: "Жоғары басымдық №6-дағы R = 9 және R = 6 тәуекелге байланған: дерек, тіркелгі, рөл, шифр, желі. Орташа басымдық журнал, көшірме және конфигурация." },
    { name: "Құзырет", text: "Студент тек өз бағасын оқиды. Оқытушы өз пәнін жазады. Офицер журнал мен экспортты көреді. Журналды ешбір рөл өшірмейді." },
    { name: "Тексерілетіндік", text: "Әр REQ-ке қабылдау өлшемі және T-нөмірі бар. Өлшем орындалмаса, хаттамада мәртебе «өтпеді» болады." },
  ],
  baseline: [
    { area: "Қолжетімділік", source: "№4", state: "Рөлдік матрица және MFA жобаланған.", gap: "Стендте бұғат, фактор және тыйым әлі орындалмаған." },
    { area: "Желі", source: "№5", state: "Алты аймақ, жиырма үш ереже, әдепкі тыйым.", gap: "Ереже кампус жабдығына жүктелмейді. Стенд тек шешім кестесін тексереді." },
    { area: "Тәуекел", source: "№6", state: "Дербес дерек R = 9. Зиянды код, бопсалау, баға және әкімші құқығы R = 6.", gap: "Шама шарасыз қағазда қалады, қабылдау өлшемі жоқ." },
    { area: "Үздіксіздік", source: "№7", state: "3-2-1 көшірме. Портал RTO — 8 сағат, LMS RPO — 4 сағат.", gap: "Қалпына келтіру уақыты өлшенбеген." },
    { area: "Архитектура", source: "№8", state: "Он үш талап, сегіз аймақ, алты құрал. Кілт деректен бөлек болуы керек.", gap: "DLP толық емес. Көшірме сынағы ашық. Құрал өнім ретінде емес, талап ретінде жазылған." },
    { area: "Инцидент", source: "№9", state: "Сегіз инцидент, төрт алгоритм, карточка, MTTD және MTTR.", gap: "Карточкаға дәлел болатын журнал стендте әлі шықпайды." },
  ],
  requirements: [
    { id: "REQ-01", prio: "Жоғары", text: "Үш қате құпия сөзден кейін тіркелгі 15 минутқа бұғатталады.", accept: "Үшінші қате бұғат қояды. Бұғат кезінде дұрыс құпия сөз сессия ашпайды. Басқа тіркелгінің есептегіші өзгермейді.", method: "Функционалдық сынақ", law: "№4 кіру ережесі, №8 F-02, «Ақпараттандыру туралы» заң" },
    { id: "REQ-02", prio: "Жоғары", text: "Құпия сөз жеткіліксіз: екінші факторсыз сессия ашылмайды.", accept: "Фактор сәйкес болса сессия біреу. Фактор бос болса сессия нөл, бұғат есептегіші өспейді.", method: "Функционалдық сынақ", law: "№4 MFA, №8 F-02" },
    { id: "REQ-03", prio: "Жоғары", text: "Рұқсаты жоқ рөл жаппай экспортты аша алмайды.", accept: "Офицер үшін admin.export рұқсат. Студент үшін сол әрекет тыйым.", method: "Функционалдық сынақ", law: "№4 матрица, дербес деректер туралы заң, №6 R = 9" },
    { id: "REQ-04", prio: "Жоғары", text: "Баға жазбасы AES-256-GCM-мен шифрланады, кілт жазбада тұрмайды.", accept: "Ашық JSON шифрмәтінде жоқ. Өз кілті бағаны қайтарады. Бөгде кілт қайтармайды. Кілт экспортталмайды.", method: "Функционалдық сынақ", law: "№8 N-01, дербес деректер туралы заң" },
    { id: "REQ-05", prio: "Орташа", text: "Кіру мен тыйым журналға түседі. Журнал өшірілмейді.", accept: "Жазбада уақыт, субъект, әрекет және нәтиже бар. Өшіру әрекеті алдыңғы сәтті кіруді жоймайды.", method: "Журналды қарау", law: "№8 N-03, №9 карточка дәлелі" },
    { id: "REQ-06", prio: "Орташа", text: "Көшірме SHA-256 хэшімен қабылданады. Өзгертілген көшірме қабылданбайды.", accept: "Өзгермеген жүктеме өтеді. Баға өрісі ауысса, хэш сәйкес емес.", method: "Тұтастық сынағы", law: "№7 3-2-1, №8 F-05" },
    { id: "REQ-07", prio: "Орташа", text: "Сәтті қалпына келтірудің уақыты өлшенеді және стенд шегіне сыяды.", accept: "Сәтті қайтаруда уақыт жазылады және 2000 мс-тен аз. Бүлінген көшірме сәтті қайтару деп саналмайды.", method: "Қалпына келтіру сынағы", law: "№7 портал RTO 8 сағат. 2000 мс тек осы стендтің шегі" },
    { id: "REQ-08", prio: "Орташа", text: "Қолтаңбасы жоқ немесе бұзылған жаңарту орнатылмайды.", accept: "Жарамды HMAC қабылданады. Қолтаңбасыз пакет және өзгертілген қолтаңба бас тартылады.", method: "Функционалдық сынақ", law: "№8 өзгерістерді басқару" },
    { id: "REQ-09", prio: "Жоғары", text: "Журнал оқу идентификаторын маскалайды.", accept: "Журнал жолында соңғы екі таңба ғана. Толық LAB-0142 журнал мәтінінде жоқ.", method: "Журналды қарау", law: "Дербес деректер туралы заң, №6 R = 9" },
    { id: "REQ-10", prio: "Орташа", text: "Оқытушы өз пәнінің бағасын жазады, жаппай экспорт жасай алмайды.", accept: "grade.write.own рұқсат. admin.export тыйым.", method: "Функционалдық сынақ", law: "№4 матрица, №8 F-08" },
    { id: "REQ-11", prio: "Жоғары", text: "Қонақ дерекқорға өтпейді. Тізімде жоқ ағын жабық.", accept: "users→iam рұқсат. guest→db тыйым. users→db әдепкі тыйым.", method: "Конфигурацияны тексеру", law: "№5 әдепкі тыйым, №8 F-04 және F-07" },
    { id: "REQ-12", prio: "Орташа", text: "TLS 1.2-ден төмен нұсқа және кілтті шифрмәтінмен сақтау қабылданбайды.", accept: "TLS 1.2 қабылданады. TLS 1.0 бас тартылады. Шифр нысанында key өрісі жоқ.", method: "Конфигурацияны тексеру", law: "№8 F-01 және N-01" },
  ],
  mechanisms: [
    { n: "1", name: "Бұғат және MFA", covers: "REQ-01, REQ-02. Фишинг бір құпия сөзді алса, сессия ашылмайды.", secret: "Әр тіркелгінің өз құпиясы жадта, салыстырылатыны SHA-256 хэш. Фактор әр жүктеуде жаңа. Есепке жазылмайды." },
    { n: "2", name: "Рөлдік қолжетімділік", covers: "REQ-03, REQ-10. Әрекет рөл жиынында болмаса, тыйым.", secret: "Құқық кодтағы жиын. Сессия рөлді таңдамайды, кірген тіркелгі береді." },
    { n: "3", name: "AES-256-GCM", covers: "REQ-04, REQ-12. Баға жазбасы сақтауда шифрланады.", secret: "Кілт Web Crypto generateKey арқылы, extractable = false. Шифр нысанында тек iv және шифрмәтін." },
    { n: "4", name: "Аудит журналы", covers: "REQ-05, REQ-09. Кіру, тыйым және оқу ізі қалады.", secret: "Журналға құпия сөз, фактор және толық идентификатор жазылмайды. Өшіру әрекеті тыйым." },
    { n: "5", name: "Көшірме және қайтару", covers: "REQ-06, REQ-07. Хэш өзгерсе, қайтару басталмайды.", secret: "Тұтастық SHA-256. Уақыт performance.now. Бұл өндіріс RTO-сын алмастырмайды." },
    { n: "6", name: "Қауіпсіз конфигурация", covers: "REQ-08, REQ-11, REQ-12. Жаңарту, желі шешімі және TLS нұсқасы.", secret: "Жаңарту HMAC-SHA-256. Желі кестесі пакет сүзбейді: ол №5 ережесінің оқу шешімі. Өндірісте қолтаңба ашық кілтпен тексерілуі керек." },
  ],
  findings: [
    { id: "NC-01", text: "Алғашқы нұсқа журналына толық оқу идентификаторы түсті.", fix: "maskId қосылды: журналда соңғы екі таңба.", retest: "Төмендегі қайта сынау. Қорғаныс қосулы кезде T-17 және T-18 өтеді.", state: "Жабық" },
    { id: "NC-02", text: "№8-де қалпына келтіру уақыты өлшенбеген.", fix: "Қайтару алдында хэш тексеріледі, сәтті болса уақыт жазылады.", retest: "T-13 және T-14.", state: "Жабық" },
    { id: "NC-03", text: "Тіркеуші экспортының мазмұнын қарайтын DLP жоқ. №8 қалдық тәуекелі.", fix: "Стенд шегінен тыс. Келесі қадам: экспортқа екінші адамның бекітуі.", retest: "Жоспарланған, бұл қабылдауға кірмейді.", state: "Ашық" },
  ],
  snippets: {
    auth: [
      "function login(account, password, factor) {",
      "  if (account.lockedUntil > Date.now()) return deny(\"бұғат\");",
      "  if (sha256(password) !== account.hash) {",
      "    account.fails += 1;",
      "    if (account.fails >= 3)",
      "      account.lockedUntil = Date.now() + 15 * 60 * 1000;",
      "    return deny(\"қате құпия сөз\");",
      "  }",
      "  if (factor !== issuedFactor) return deny(\"екінші фактор\");",
      "  return openSession(account.role);",
      "}",
    ].join("\n"),
    access: [
      "const PERMS = {",
      "  student: [\"grade.read.own\"],",
      "  teacher: [\"grade.read.own\", \"grade.write.own\"],",
      "  officer: [\"grade.read.own\", \"audit.read\", \"admin.export\"],",
      "};",
      "function allow(role, action) {",
      "  const ok = PERMS[role].includes(action);",
      "  writeLog(role, action, ok ? \"рұқсат\" : \"тыйым\");",
      "  return ok;",
      "}",
    ].join("\n"),
    crypto: [
      "const key = await crypto.subtle.generateKey(",
      "  { name: \"AES-GCM\", length: 256 }, false, [\"encrypt\", \"decrypt\"]",
      ");",
      "const cipher = { iv, data };",
      "function acceptBackup(payload, hash) {",
      "  return sha256(payload) === hash;",
      "}",
      "function acceptUpdate(body, signature) {",
      "  if (!signature) return false;",
      "  return hmacVerify(updateKey, body, signature);",
      "}",
    ].join("\n"),
    acl: [
      "function decide(from, to) {",
      "  const rule = acl.find((row) => row.from === from && row.to === to);",
      "  if (!rule) return \"әдепкі тыйым\";",
      "  return rule.allow ? \"рұқсат\" : \"тыйым\";",
      "}",
    ].join("\n"),
  },
  questions: [
    {
      num: 1,
      text: "Ақпаратты қорғау жүйесінің негізгі мақсаты қандай?",
      answer:
        "Рұқсатсыз қол жеткізуді, дерекді ұрлау мен өзгертуді, қызмет үзілісін және ақпаратты ұстап қалуды болдырмау немесе салдарын азайту. Smart Campus үшін бұл баға мен оқу жазбасының құпиялығы, бағаның тұтастығы және порталдың №7 бойынша 8 сағаттық RTO-сы. Стенд сол мақсаттың сыналатын кесіндісі: бөгде адам сессия ашпайды, студент экспортты көрмейді, өзгертілген көшірме қабылданбайды.",
    },
    {
      num: 2,
      text: "Қорғаныс жүйесін әзірлеу қандай кезеңдерден тұрады?",
      answer:
        "Бес кезең: талапты анықтау, жобалау, енгізу, сынау және қабылдау, сүйемелдеу. Бұл жұмыста талап №6–9-дан шықты, жоба №8-де дайын, енгізу — беттегі алты механизм, сынау — жиырма төрт сценарий, сүйемелдеу — журнал, NC-01 түзетуі және семестрлік қайта бағалау.",
    },
    {
      num: 3,
      text: "Функционалдық талап пен қабылдау өлшемінің айырмашылығы қандай?",
      answer:
        "Талап жүйе не істеуі керектігін айтады: «үш қатеден кейін бұғаттау». Қабылдау өлшемі оны қалай тексеретінімізді айтады: «үшінші қатеден кейін дұрыс құпия сөз де сессия ашпайды, басқа тіркелгінің есептегіші нөлде қалады». Өлшемсіз талапты қабылдауға болмайды, талапсыз өлшемнің нені дәлелдейтіні жоқ.",
    },
    {
      num: 4,
      text: "Пайдалану құжаттамасы не үшін қажет?",
      answer:
        "Баптау, рөл, кілт орны, сынақ және қайтару қадамы адам ауысса да қайталануы үшін. Бұл бет соның оқу нұсқасы: бұғат 15 минут, көшірме ашылар алдында хэш тексеріледі, қолтаңбасыз жаңарту орнатылмайды. Құпия сөз бен кілт құжатқа жазылмайды, әйтпесе құжаттың өзі құпияны таратады.",
    },
    {
      num: 5,
      text: "Оң және теріс сынақ сценарийлері қалай ерекшеленеді?",
      answer:
        "Оң сынақ күтілген рұқсатты немесе қорғаныс әрекетін көрсетеді: офицер экспортты ашады, жарамды көшірме өтеді, үшінші қате бұғат қояды. Теріс сынақ тыйымды көрсетеді: студент экспортты ашпайды, бүлінген көшірме қабылданбайды, бұғат кезінде дұрыс құпия сөз өтпейді. Теріс сынақтың «өтті» дегені — бас тарту болды. Біреуі ғана өтсе, талап жабылмайды.",
    },
    {
      num: 6,
      text: "Сәйкессіздік анықталғанда қандай әрекеттер орындалады?",
      answer:
        "Олқылық жазылады, түзету енгізіледі, сол тексеру қайта орындалады. NC-01: журналға толық LAB-0142 түскен. Түзету — маска. Қайта сынауда журналда соңғы екі таңба ғана, мәртебе өтті. Жабылмаған NC-03 қабылдау хаттамасына сәтті деп кірмейді: DLP әлі жоқ.",
    },
    {
      num: 7,
      text: "Қалпына келтіру сынағы неліктен маңызды?",
      answer:
        "Хэші бар файл әлі де оқылмауы немесе тым ұзақ ашылуы мүмкін. №7 портал RTO-сы 8 сағат, LMS RPO-сы 4 сағат. №8-де бұл сынақ ашық еді. Стенд сәтті қайтарудың уақытын жазады және бүлінген көшірмені сәтті деп санамайды. Стендтегі миллисекунд өндіріс RTO-сын алмастырмайды: кампустағы толық сынақ бөлек қалады.",
    },
    {
      num: 8,
      text: "Қорғаныс жүйесін енгізгеннен кейін мерзімдік қайта бағалау не үшін қажет?",
      answer:
        "Қауіп, құрам және заң өзгереді. №6 қалдық тәуекелді семестр сайын қайта қарайды. Жаңа рөл, өтпеген көшірме сынағы немесе ашық DLP ескі қабылдауды жарамсыз етеді. Сүйемелдеусіз өлшем қағазда қалады, ал кампус сол осалдықпен жұмыс істей береді.",
    },
  ],
  conclusion: {
    text:
      "Smart Campus қорғанысы №6–9-да жобаланған, бұл жұмыста оның сыналатын кесіндісі стендке түсті. Қабылдау прогоны бет ашылғанда орындалады: әр талаптың оң және теріс сынағы хаттамаға жазылады. Жабық олқылық — журнал маскасы және қалпына келтіру уақыты. Ашық қалғаны — экспорт мазмұнын қарайтын DLP және кампустағы толық RTO сынағы.",
    recs: [
      "Құпия сөз хэшін өндірісте баяу функцияға көшіру: Argon2id немесе bcrypt, әр тіркелгіде өз тұзы. Стендтегі SHA-256 тек оқу салыстыруы.",
      "Жаңартуды жеке кілтпен қол қойып, тексеруді ашық кілтпен жасау. HMAC кілті тексерушінің жадында тұрмауы керек.",
      "Тіркеуші экспортына екінші адамның бекітуін қосу. Бұл NC-03 және №8-дегі DLP олқылығы.",
      "Кампуста №7 жоспарымен көшірмеден қайтаруды өлшеу. Стенд шегі 2000 мс өндіріс RTO-сы 8 сағатты алмастырмайды.",
      "Журналды 90 күнге SIEM-ге жіберу. Бұл беттің журналы жабылғанда жойылады.",
      "Семестр сайын №6 қалдық тәуекелін және осы он екі өлшемді қайта өткізу.",
    ],
  },
  literature: [
    { n: "1", title: "Қазақстан Республикасының «Дербес деректер және оларды қорғау туралы» Заңы, 2013 жылғы 21 мамыр, № 94-V", note: "Дербес дерекке рұқсатсыз қол жеткізуден және таратудан қорғау. REQ-03, REQ-04 және REQ-09 осы міндетке байланған.", source: "adilet.zan.kz", url: "https://adilet.zan.kz/kaz/docs/Z1300000094" },
    { n: "2", title: "Қазақстан Республикасының «Ақпараттандыру туралы» Заңы, 2015 жылғы 24 қараша, № 418-V", note: "Ақпараттық жүйе иесінің қорғау міндеті. Стенд сол міндеттің оқу прототипі, өндірістік енгізу емес.", source: "adilet.zan.kz", url: "https://adilet.zan.kz/kaz/docs/Z1500000418" },
    { n: "3", title: "ISO/IEC 27001:2022. Information security management systems — Requirements", note: "Талап, енгізу, тексеру және жақсарту циклі. Бес кезең осы құрылымға сәйкес.", source: "iso.org", url: "https://www.iso.org/standard/82875.html" },
    { n: "4", title: "NIST SP 800-53 Rev. 5. Security and Privacy Controls", note: "Қолжетімділік, аудит, конфигурация және қалпына келтіру бақылауларының атауы. Стенд осы топтардың оқу кесіндісі.", source: "csrc.nist.gov", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
  ],
};

const LAB10_ROLES = [
  ["student", "Студент"],
  ["teacher", "Оқытушы"],
  ["officer", "Қауіпсіздік офицері"],
];

const LAB10_ACTIONS = [
  ["grade.read.own", "Өз бағасын оқу"],
  ["grade.write.own", "Өз пәнінің бағасын жазу"],
  ["admin.export", "Жаппай экспорт"],
  ["audit.read", "Журналды оқу"],
  ["audit.erase", "Журналды өшіру"],
];

const LAB10_ZONES = [
  ["guest", "Қонақ"],
  ["users", "Пайдаланушылар"],
  ["dmz", "DMZ"],
  ["admin", "Әкімшілік"],
];

const LAB10_TARGETS = [
  ["db", "Дерекқор"],
  ["iam", "IAM"],
  ["servers", "Сервер"],
  ["backup", "Көшірме"],
];

function lab10Esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function lab10Prio(prio) {
  return prio === "Жоғары" ? "sev sev-high" : "sev sev-mid";
}

function createLab10Engine() {
  const LOCK_MS = 15 * 60 * 1000;
  const enc = new TextEncoder();
  const ACL = [
    { from: "users", to: "iam", allow: true },
    { from: "guest", to: "db", allow: false },
    { from: "dmz", to: "db", allow: false },
    { from: "admin", to: "servers", allow: true },
  ];
  const PERMS = {
    student: new Set(["grade.read.own"]),
    teacher: new Set(["grade.read.own", "grade.write.own"]),
    officer: new Set(["grade.read.own", "audit.read", "admin.export"]),
  };
  const secrets = {};
  const hashes = {};
  let factor = "";
  const state = {
    accounts: {
      student: { role: "student", fails: 0, lockedUntil: 0 },
      teacher: { role: "teacher", fails: 0, lockedUntil: 0 },
      officer: { role: "officer", fails: 0, lockedUntil: 0 },
    },
    sessions: [],
    log: [],
    key: null,
    otherKey: null,
    updateKey: null,
    cipher: null,
    backup: null,
    restored: null,
    masking: true,
  };

  function hex(bytes) {
    return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  function b64(bytes) {
    let text = "";
    bytes.forEach((b) => {
      text += String.fromCharCode(b);
    });
    return btoa(text);
  }

  function bytesInclude(hay, needle) {
    if (!needle.length || needle.length > hay.length) return false;
    for (let i = 0; i <= hay.length - needle.length; i += 1) {
      let same = true;
      for (let j = 0; j < needle.length; j += 1) {
        if (hay[i + j] !== needle[j]) {
          same = false;
          break;
        }
      }
      if (same) return true;
    }
    return false;
  }

  async function sha256(text) {
    const buf = await crypto.subtle.digest("SHA-256", enc.encode(text));
    return hex(new Uint8Array(buf));
  }

  function writeLog(entry) {
    state.log.push({
      time: new Date().toISOString(),
      actor: entry.actor,
      action: entry.action,
      result: entry.result,
      detail: entry.detail || "",
    });
  }

  function logBody() {
    return state.log.map((e) => `${e.actor} ${e.action} ${e.result} ${e.detail}`).join("\n");
  }

  function reset() {
    Object.values(state.accounts).forEach((acc) => {
      acc.fails = 0;
      acc.lockedUntil = 0;
    });
    state.sessions = [];
    state.log = [];
    state.cipher = null;
    state.backup = null;
    state.restored = null;
    state.masking = true;
  }

  async function init() {
    if (!crypto.subtle) throw new Error("Web Crypto жоқ");
    for (const id of Object.keys(state.accounts)) {
      secrets[id] = hex(crypto.getRandomValues(new Uint8Array(16)));
      hashes[id] = await sha256(secrets[id]);
    }
    const sample = crypto.getRandomValues(new Uint8Array(3));
    const num = ((sample[0] << 16) | (sample[1] << 8) | sample[2]) % 1000000;
    factor = String(num).padStart(6, "0");
    state.key = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    state.otherKey = await crypto.subtle.generateKey({ name: "AES-GCM", length: 256 }, false, ["decrypt"]);
    state.updateKey = await crypto.subtle.generateKey({ name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
    reset();
  }

  async function login({ id, password = "", factor: given = "", useSecret = false }) {
    const acc = state.accounts[id];
    if (!acc) return { ok: false, reason: "тіркелгі жоқ", fails: 0 };
    if (acc.lockedUntil > Date.now()) {
      writeLog({ actor: id, action: "auth.login", result: "бұғат" });
      return { ok: false, reason: "тіркелгі уақытша бұғатталған", fails: acc.fails };
    }
    const hash = await sha256(useSecret ? secrets[id] : password);
    if (hash !== hashes[id]) {
      acc.fails += 1;
      if (acc.fails >= 3) {
        acc.lockedUntil = Date.now() + LOCK_MS;
        writeLog({ actor: id, action: "auth.login", result: "бұғат", detail: "3 қате" });
        return { ok: false, reason: "үш қатеден кейін бұғат", fails: acc.fails };
      }
      writeLog({ actor: id, action: "auth.login", result: "қате құпия сөз" });
      return { ok: false, reason: "құпия сөз қате", fails: acc.fails };
    }
    if (given !== factor) {
      writeLog({ actor: id, action: "auth.mfa", result: "бас тартылды" });
      return { ok: false, reason: "екінші фактор қабылданбады", fails: acc.fails };
    }
    acc.fails = 0;
    state.sessions.push({ id, role: acc.role });
    writeLog({ actor: id, action: "auth.login", result: "сәтті" });
    return { ok: true, role: acc.role, reason: "сессия ашылды", fails: 0 };
  }

  function allow(role, action) {
    const ok = Boolean(PERMS[role] && PERMS[role].has(action));
    writeLog({ actor: role, action, result: ok ? "рұқсат" : "тыйым" });
    return { ok };
  }

  function erase(role) {
    const kept = state.log.slice();
    writeLog({ actor: role, action: "audit.erase", result: "тыйым" });
    const same = kept.every((entry, index) => state.log[index] === entry);
    return {
      ok: false,
      kept: same,
      loginRemains: state.log.some((entry) => entry.action === "auth.login" && entry.result === "сәтті"),
    };
  }

  function readPersonal(actor, id) {
    const detail = state.masking ? `••••${id.slice(-2)}` : id;
    writeLog({ actor, action: "data.read", result: "журнал", detail });
    return detail;
  }

  async function encryptSample() {
    const plain = JSON.stringify({ id: "LAB-0142", mark: 87 });
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const raw = new Uint8Array(
      await crypto.subtle.encrypt({ name: "AES-GCM", iv }, state.key, enc.encode(plain))
    );
    state.cipher = { iv, raw };
    return {
      leaked: bytesInclude(raw, enc.encode(plain)),
      preview: b64(raw).slice(0, 48),
      keyInside: Object.hasOwn(state.cipher, "key"),
      extractable: state.key.extractable,
    };
  }

  async function decryptWith(key) {
    if (!state.cipher) return { ok: false, reason: "шифрмәтін жоқ" };
    try {
      const buf = await crypto.subtle.decrypt({ name: "AES-GCM", iv: state.cipher.iv }, key, state.cipher.raw);
      const obj = JSON.parse(new TextDecoder().decode(buf));
      return { ok: true, id: obj.id, mark: obj.mark };
    } catch (err) {
      return { ok: false, reason: "ашылмады" };
    }
  }

  async function createBackup() {
    const payload = JSON.stringify({ id: "LAB-0142", mark: 87, at: "2026-11-13T06:00:00" });
    state.backup = { payload, hash: await sha256(payload) };
    state.restored = null;
    writeLog({ actor: "backup", action: "backup.create", result: "жасалды" });
    return { hash: state.backup.hash.slice(0, 16) };
  }

  function tamperBackup() {
    if (!state.backup) return { ok: false, reason: "көшірме жоқ" };
    state.backup.payload = state.backup.payload.replace('"mark":87', '"mark":0');
    return { ok: true };
  }

  async function verifyBackup() {
    if (!state.backup) return { ok: false, reason: "көшірме жоқ" };
    const ok = (await sha256(state.backup.payload)) === state.backup.hash;
    return { ok, reason: ok ? "хэш сәйкес" : "хэш сәйкес емес" };
  }

  async function restore() {
    const t0 = performance.now();
    const check = await verifyBackup();
    const ms = Number((performance.now() - t0).toFixed(2));
    if (!check.ok) return { ok: false, ms, reason: check.reason };
    state.restored = JSON.parse(state.backup.payload);
    return { ok: true, ms, mark: state.restored.mark, reason: "қайтарылды" };
  }

  async function acceptSigned() {
    const body = enc.encode("campus-portal 1.0.1");
    const sig = await crypto.subtle.sign("HMAC", state.updateKey, body);
    const ok = await crypto.subtle.verify("HMAC", state.updateKey, sig, body);
    return { ok, reason: ok ? "қолтаңба жарамды" : "жарамсыз" };
  }

  async function acceptUnsigned() {
    return { ok: false, reason: "қолтаңба жоқ" };
  }

  async function acceptBad() {
    const body = enc.encode("campus-portal 1.0.1");
    const sig = new Uint8Array(await crypto.subtle.sign("HMAC", state.updateKey, body));
    sig[0] ^= 255;
    const ok = await crypto.subtle.verify("HMAC", state.updateKey, sig, body);
    return { ok, reason: ok ? "қабылданды" : "қолтаңба бұзылған" };
  }

  function acl(from, to) {
    const found = ACL.find((rule) => rule.from === from && rule.to === to);
    const allow = found ? found.allow : false;
    const reason = found ? (found.allow ? "рұқсат" : "тыйым") : "әдепкі тыйым";
    writeLog({ actor: from, action: `net.${to}`, result: reason });
    return { allow, reason };
  }

  function checkTls(version) {
    const ok = version === "1.2" || version === "1.3";
    writeLog({ actor: "config", action: `tls.${version}`, result: ok ? "қабылданды" : "бас тартылды" });
    return { ok, reason: ok ? "қабылданды" : "бас тартылды" };
  }

  function logSafe() {
    const body = logBody();
    if (body.includes(factor)) return false;
    return Object.entries(secrets).every(([id, secret]) => !body.includes(secret) && !body.includes(hashes[id]));
  }

  return {
    init,
    reset,
    factor: () => factor,
    lockMinutes: () => LOCK_MS / 60000,
    fails: (id) => state.accounts[id].fails,
    locked: (id) => state.accounts[id].lockedUntil > Date.now(),
    sessionCount: () => state.sessions.length,
    login,
    allow,
    erase,
    readPersonal,
    encryptSample,
    decrypt: () => decryptWith(state.key),
    decryptForeign: () => decryptWith(state.otherKey),
    createBackup,
    tamperBackup,
    verifyBackup,
    restore,
    acceptSigned,
    acceptUnsigned,
    acceptBad,
    acl,
    checkTls,
    logSafe,
    logHas: (text) => logBody().includes(text),
    logText: () =>
      state.log.length
        ? state.log.map((e) => `${e.time}  ${e.actor}  ${e.action}  ${e.result}  ${e.detail}`).join("\n")
        : "",
    lastLog: () => state.log[state.log.length - 1] || null,
    entries: () => state.log.slice(),
    setMasking: (on) => {
      state.masking = on;
    },
    maskingTrial(on) {
      reset();
      state.masking = on;
      const detail = readPersonal("officer", "LAB-0142");
      return { detail, leaked: logBody().includes("LAB-0142") };
    },
  };
}

async function runLab10Acceptance(engine) {
  const tests = [
    {
      id: "T-01",
      req: "REQ-01",
      kind: "pos",
      label: "Оң",
      pre: "Студент тіркелгісі бос.",
      expected: "Үшінші қате құпия сөз бұғат қояды, оқытушы есептегіші нөлде қалады.",
      async run(engine) {
        await engine.login({ id: "student", password: "no-1", factor: "" });
        await engine.login({ id: "student", password: "no-2", factor: "" });
        const third = await engine.login({ id: "student", password: "no-3", factor: "" });
        const pass = third.ok === false && engine.locked("student") && engine.fails("student") === 3 && engine.fails("teacher") === 0;
        return {
          pass,
          actual: pass ? "Үшінші қатеден кейін студент бұғатталды." : "Бұғат күткендей қосылмады.",
          evidence: `студент қатесі ${engine.fails("student")}, мерзім ${engine.lockMinutes()} мин, оқытушы қатесі ${engine.fails("teacher")}`,
        };
      },
    },
    {
      id: "T-02",
      req: "REQ-01",
      kind: "neg",
      label: "Теріс",
      pre: "Студент үш қатеден кейін бұғаттаулы.",
      expected: "Дұрыс құпия сөз және фактор сессия ашпайды.",
      async run(engine) {
        await engine.login({ id: "student", password: "no-1", factor: "" });
        await engine.login({ id: "student", password: "no-2", factor: "" });
        await engine.login({ id: "student", password: "no-3", factor: "" });
        const retry = await engine.login({ id: "student", useSecret: true, factor: engine.factor() });
        const pass = retry.ok === false && engine.sessionCount() === 0 && engine.locked("student");
        return {
          pass,
          actual: pass ? "Бұғат кезінде дұрыс құпия сөз қабылданбады." : "Бұғатталған тіркелгі сессия ашты.",
          evidence: retry.reason,
        };
      },
    },
    {
      id: "T-03",
      req: "REQ-02",
      kind: "pos",
      label: "Оң",
      pre: "Оқытушы бұғатсыз. Фактор стенд шығарған мән.",
      expected: "Сессия біреу. Журналда құпия мен фактор жоқ.",
      async run(engine) {
        const res = await engine.login({ id: "teacher", useSecret: true, factor: engine.factor() });
        const pass = res.ok === true && res.role === "teacher" && engine.sessionCount() === 1 && engine.logSafe();
        return {
          pass,
          actual: pass ? "Екінші фактормен оқытушы сессиясы ашылды." : "Сессия ашылмады немесе журналға құпия түсті.",
          evidence: `сессия саны ${engine.sessionCount()}, журнал таза ${engine.logSafe() ? "иә" : "жоқ"}`,
        };
      },
    },
    {
      id: "T-04",
      req: "REQ-02",
      kind: "neg",
      label: "Теріс",
      pre: "Оқытушының құпия сөзі дұрыс, фактор бос.",
      expected: "Сессия ашылмайды, қате есептегіші өспейді.",
      async run(engine) {
        const res = await engine.login({ id: "teacher", useSecret: true, factor: "" });
        const pass = res.ok === false && engine.sessionCount() === 0 && engine.fails("teacher") === 0;
        return {
          pass,
          actual: pass ? "Факторсыз кіру бас тартылды." : "Факторсыз сессия ашылды.",
          evidence: `${res.reason}, қате есептегіші ${engine.fails("teacher")}`,
        };
      },
    },
    {
      id: "T-05",
      req: "REQ-03",
      kind: "pos",
      label: "Оң",
      pre: "Офицер рөлі.",
      expected: "admin.export рұқсат, журналға рұқсат жазылады.",
      async run(engine) {
        const res = engine.allow("officer", "admin.export");
        const pass = res.ok === true && engine.lastLog().result === "рұқсат";
        return {
          pass,
          actual: pass ? "Офицер жаппай экспортты ашты." : "Офицерге экспорт жабық қалды.",
          evidence: engine.lastLog() ? `${engine.lastLog().actor} ${engine.lastLog().result}` : "журнал жоқ",
        };
      },
    },
    {
      id: "T-06",
      req: "REQ-03",
      kind: "neg",
      label: "Теріс",
      pre: "Студент рөлі.",
      expected: "admin.export тыйым.",
      async run(engine) {
        const res = engine.allow("student", "admin.export");
        const pass = res.ok === false && engine.lastLog().result === "тыйым";
        return {
          pass,
          actual: pass ? "Студенттің экспорты бас тартылды." : "Студент экспортты ашты.",
          evidence: engine.lastLog() ? `${engine.lastLog().action} ${engine.lastLog().result}` : "журнал жоқ",
        };
      },
    },
    {
      id: "T-07",
      req: "REQ-04",
      kind: "pos",
      label: "Оң",
      pre: "Жазба LAB-0142, баға 87. Кілт жадта.",
      expected: "Ашық JSON шифрмәтінде жоқ, өз кілті бағаны қайтарады, кілт экспортталмайды.",
      async run(engine) {
        const encRes = await engine.encryptSample();
        const opened = await engine.decrypt();
        const pass = encRes.leaked === false && encRes.keyInside === false && encRes.extractable === false && opened.ok && opened.mark === 87;
        return {
          pass,
          actual: pass ? "Жазба шифрланды және өз кілтімен ашылды." : "Шифрлау қабылдау өлшеміне сай емес.",
          evidence: `ашық JSON ішінде ${encRes.leaked ? "бар" : "жоқ"}, key өрісі ${encRes.keyInside ? "бар" : "жоқ"}, баға ${opened.mark ?? "—"}`,
        };
      },
    },
    {
      id: "T-08",
      req: "REQ-04",
      kind: "neg",
      label: "Теріс",
      pre: "Сол шифрмәтін, бөгде AES кілті.",
      expected: "Бөгде кілт жазбаны қайтармайды.",
      async run(engine) {
        await engine.encryptSample();
        const opened = await engine.decryptForeign();
        const pass = opened.ok === false;
        return {
          pass,
          actual: pass ? "Бөгде кілт жазбаны ашпады." : "Бөгде кілт жазбаны ашты.",
          evidence: opened.reason,
        };
      },
    },
    {
      id: "T-09",
      req: "REQ-05",
      kind: "pos",
      label: "Оң",
      pre: "Бір қате, содан кейін сәтті кіру.",
      expected: "Екі жазбада да уақыт, субъект, әрекет және нәтиже бар.",
      async run(engine) {
        await engine.login({ id: "student", password: "bad", factor: "" });
        await engine.login({ id: "student", useSecret: true, factor: engine.factor() });
        const entries = engine.entries();
        const full = entries.every((e) => e.time && e.actor && e.action && e.result);
        const pass = full && entries.some((e) => e.result === "қате құпия сөз") && entries.some((e) => e.result === "сәтті") && engine.logSafe();
        return {
          pass,
          actual: pass ? "Қате және сәтті кіру журналға түсті." : "Журнал өрісі толық емес.",
          evidence: `${entries.length} жазба, құпия журналға түспеген`,
        };
      },
    },
    {
      id: "T-10",
      req: "REQ-05",
      kind: "neg",
      label: "Теріс",
      pre: "Сәтті кіру жазбасы бар.",
      expected: "Студент те, офицер де журналды өшіре алмайды. Сәтті кіру орнында қалады.",
      async run(engine) {
        await engine.login({ id: "student", useSecret: true, factor: engine.factor() });
        const student = engine.erase("student");
        const officer = engine.erase("officer");
        const pass = student.ok === false && officer.ok === false && student.kept && student.loginRemains;
        return {
          pass,
          actual: pass ? "Өшіру бас тартылды, сәтті кіру журналда қалды." : "Журнал өшірілді.",
          evidence: `студент тыйым, офицер тыйым, алдыңғы жазба ${student.loginRemains ? "сақталды" : "жоғалды"}`,
        };
      },
    },
    {
      id: "T-11",
      req: "REQ-06",
      kind: "pos",
      label: "Оң",
      pre: "Жаңа көшірме, жүктеме өзгермеген.",
      expected: "SHA-256 хэші сәйкес.",
      async run(engine) {
        await engine.createBackup();
        const res = await engine.verifyBackup();
        const pass = res.ok === true;
        return {
          pass,
          actual: pass ? "Өзгермеген көшірме қабылданды." : "Өзгермеген көшірме өтпеді.",
          evidence: res.reason,
        };
      },
    },
    {
      id: "T-12",
      req: "REQ-06",
      kind: "neg",
      label: "Теріс",
      pre: "Көшірме жасалған, баға өрісі ауыстырылған, хэш сол күйде.",
      expected: "Хэш сәйкес емес, көшірме қабылданбайды.",
      async run(engine) {
        await engine.createBackup();
        engine.tamperBackup();
        const res = await engine.verifyBackup();
        const pass = res.ok === false;
        return {
          pass,
          actual: pass ? "Өзгертілген көшірме қабылданбады." : "Өзгертілген көшірме өтті.",
          evidence: res.reason,
        };
      },
    },
    {
      id: "T-13",
      req: "REQ-07",
      kind: "pos",
      label: "Оң",
      pre: "Хэші сәйкес көшірме.",
      expected: "Қайтару сәтті, уақыт жазылған және 2000 мс-тен аз, баға 87.",
      async run(engine) {
        await engine.createBackup();
        const res = await engine.restore();
        const pass = res.ok === true && res.mark === 87 && res.ms < 2000 && Number.isFinite(res.ms);
        return {
          pass,
          actual: pass ? `Қайтару ${res.ms} мс, баға ${res.mark}.` : "Қайтару өлшемге сай емес.",
          evidence: `өлшенген уақыт ${res.ms} мс, стенд шегі 2000 мс, өндіріс RTO 8 сағат`,
        };
      },
    },
    {
      id: "T-14",
      req: "REQ-07",
      kind: "neg",
      label: "Теріс",
      pre: "Хэші бұзылған көшірме.",
      expected: "Қайтару сәтті деп саналмайды.",
      async run(engine) {
        await engine.createBackup();
        engine.tamperBackup();
        const res = await engine.restore();
        const pass = res.ok === false && res.reason === "хэш сәйкес емес";
        return {
          pass,
          actual: pass ? "Бүлінген көшірмеден қайтару тоқтатылды." : "Бүлінген көшірме қайтарылды.",
          evidence: `${res.reason}, уақыт ${res.ms} мс, сәттілік жоқ`,
        };
      },
    },
    {
      id: "T-15",
      req: "REQ-08",
      kind: "pos",
      label: "Оң",
      pre: "Пакет денесі және соған шыққан HMAC.",
      expected: "Жаңарту қабылданады.",
      async run(engine) {
        const res = await engine.acceptSigned();
        return {
          pass: res.ok === true,
          actual: res.ok ? "Қолтаңбалы жаңарту қабылданды." : "Қолтаңбалы жаңарту өтпеді.",
          evidence: res.reason,
        };
      },
    },
    {
      id: "T-16",
      req: "REQ-08",
      kind: "neg",
      label: "Теріс",
      pre: "Бір пакетте қолтаңба жоқ, екіншісінде қолтаңбаның бір байты өзгерген.",
      expected: "Екеуі де орнатылмайды.",
      async run(engine) {
        const missing = await engine.acceptUnsigned();
        const bad = await engine.acceptBad();
        const pass = missing.ok === false && bad.ok === false;
        return {
          pass,
          actual: pass ? "Қолтаңбасыз және бұзылған пакет бас тартылды." : "Жарамсыз пакет өтті.",
          evidence: `${missing.reason}; ${bad.reason}`,
        };
      },
    },
    {
      id: "T-17",
      req: "REQ-09",
      kind: "pos",
      label: "Оң",
      pre: "Офицер LAB-0142 жазбасын оқиды. Маска қосулы.",
      expected: "Журнал жолы соңғы екі таңбамен жазылады.",
      async run(engine) {
        const detail = engine.readPersonal("officer", "LAB-0142");
        const pass = detail.endsWith("42") && !detail.includes("LAB-0142");
        return {
          pass,
          actual: pass ? `Журнал жолы: ${detail}.` : "Маска қолданылмады.",
          evidence: engine.lastLog() ? `${engine.lastLog().action} ${engine.lastLog().detail}` : "журнал жоқ",
        };
      },
    },
    {
      id: "T-18",
      req: "REQ-09",
      kind: "neg",
      label: "Теріс",
      pre: "Сол оқу, толық идентификаторды журналға түсіру әрекеті.",
      expected: "Толық LAB-0142 журнал мәтінінде жоқ.",
      async run(engine) {
        engine.readPersonal("officer", "LAB-0142");
        const pass = engine.logHas("LAB-0142") === false;
        return {
          pass,
          actual: pass ? "Толық идентификатор журналға түспеді." : "Толық идентификатор журналға түсті.",
          evidence: pass ? "іздеу нәтижесі бос" : "іздеу идентификаторды тапты",
        };
      },
    },
    {
      id: "T-19",
      req: "REQ-10",
      kind: "pos",
      label: "Оң",
      pre: "Оқытушы рөлі.",
      expected: "grade.write.own рұқсат.",
      async run(engine) {
        const res = engine.allow("teacher", "grade.write.own");
        const pass = res.ok === true;
        return {
          pass,
          actual: pass ? "Оқытушы өз пәнінің бағасын жаза алады." : "Баға жазу жабық.",
          evidence: engine.lastLog() ? engine.lastLog().result : "журнал жоқ",
        };
      },
    },
    {
      id: "T-20",
      req: "REQ-10",
      kind: "neg",
      label: "Теріс",
      pre: "Оқытушы рөлі, жаппай экспорт.",
      expected: "admin.export тыйым.",
      async run(engine) {
        const res = engine.allow("teacher", "admin.export");
        const pass = res.ok === false && engine.lastLog().result === "тыйым";
        return {
          pass,
          actual: pass ? "Оқытушының жаппай экспорты бас тартылды." : "Оқытушы экспортты ашты.",
          evidence: engine.lastLog() ? `${engine.lastLog().actor} ${engine.lastLog().result}` : "журнал жоқ",
        };
      },
    },
    {
      id: "T-21",
      req: "REQ-11",
      kind: "pos",
      label: "Оң",
      pre: "Пайдаланушылар аймағынан IAM-ға сұраныс.",
      expected: "Ереже рұқсат.",
      async run(engine) {
        const res = engine.acl("users", "iam");
        const pass = res.allow === true && res.reason === "рұқсат";
        return {
          pass,
          actual: pass ? "users→iam рұқсат етілді." : "Күтілген рұқсат жоқ.",
          evidence: res.reason,
        };
      },
    },
    {
      id: "T-22",
      req: "REQ-11",
      kind: "neg",
      label: "Теріс",
      pre: "Қонақтан дерекқорға және тізімде жоқ users→db ағыны.",
      expected: "Біріншісі ережемен тыйым, екіншісі әдепкі тыйым.",
      async run(engine) {
        const guest = engine.acl("guest", "db");
        const missing = engine.acl("users", "db");
        const pass = guest.allow === false && guest.reason === "тыйым" && missing.allow === false && missing.reason === "әдепкі тыйым";
        return {
          pass,
          actual: pass ? "Қонақ дерекқорға өтпеді, тізімнен тыс ағын жабық." : "Тыйым салынған ағын өтті.",
          evidence: `guest→db ${guest.reason}; users→db ${missing.reason}`,
        };
      },
    },
    {
      id: "T-23",
      req: "REQ-12",
      kind: "pos",
      label: "Оң",
      pre: "TLS 1.2 және жаңа шифрмәтін.",
      expected: "Нұсқа қабылданады, шифр нысанында кілт жоқ.",
      async run(engine) {
        const tls = engine.checkTls("1.2");
        const encRes = await engine.encryptSample();
        const pass = tls.ok === true && encRes.keyInside === false && encRes.extractable === false;
        return {
          pass,
          actual: pass ? "TLS 1.2 қабылданды, кілт шифрмәтінмен сақталмады." : "Конфигурация өлшемге сай емес.",
          evidence: `TLS ${tls.reason}, key өрісі ${encRes.keyInside ? "бар" : "жоқ"}`,
        };
      },
    },
    {
      id: "T-24",
      req: "REQ-12",
      kind: "neg",
      label: "Теріс",
      pre: "Ұсынылған TLS нұсқасы 1.0.",
      expected: "Нұсқа бас тартылады.",
      async run(engine) {
        const tls = engine.checkTls("1.0");
        const pass = tls.ok === false;
        return {
          pass,
          actual: pass ? "TLS 1.0 қабылданбады." : "TLS 1.0 өтті.",
          evidence: tls.reason,
        };
      },
    },
  ];

  const results = [];
  for (const test of tests) {
    engine.reset();
    try {
      const outcome = await test.run(engine);
      results.push({ ...test, ...outcome });
    } catch (err) {
      results.push({
        ...test,
        pass: false,
        actual: "Сынақ қатемен тоқтады.",
        evidence: err && err.name ? err.name : "Error",
      });
    }
  }
  engine.reset();
  return results;
}

function bindLab10() {
  const root = document.querySelector(".lab10");
  if (!root || root.dataset.bound) return;
  root.dataset.bound = "1";

  const engine = createLab10Engine();
  let ready = false;
  let session = null;
  const roleLabel = Object.fromEntries(LAB10_ROLES);

  const factorView = root.querySelector("#factor-view");
  const factorInput = root.querySelector("#auth-factor");
  const authUser = root.querySelector("#auth-user");
  const authPass = root.querySelector("#auth-pass");
  const authMsg = root.querySelector("#auth-msg");
  const authState = root.querySelector("#auth-state");
  const sessionView = root.querySelector("#session-view");
  const rbacMsg = root.querySelector("#rbac-msg");
  const encMsg = root.querySelector("#enc-msg");
  const bakMsg = root.querySelector("#bak-msg");
  const aclMsg = root.querySelector("#acl-msg");
  const tlsMsg = root.querySelector("#tls-msg");
  const logBox = root.querySelector("#stand-log");
  const testBody = root.querySelector("#test-body");
  const testSummary = root.querySelector("#test-summary");
  const passCount = root.querySelector("#pass-count");
  const ncBefore = root.querySelector("#nc-before");
  const ncAfter = root.querySelector("#nc-after");

  function setMsg(el, text, good) {
    if (!el) return;
    el.textContent = text;
    el.className = `stand-msg${good === true ? " ok" : good === false ? " bad" : ""}`;
  }

  function paintFactor() {
    if (factorView) factorView.textContent = engine.factor();
    if (factorInput && factorInput.dataset.touched !== "1") factorInput.value = engine.factor();
  }

  function paintSession() {
    if (!sessionView) return;
    sessionView.textContent = session ? `Сессия: ${roleLabel[session.role]}.` : "Сессия жоқ.";
  }

  function paintAuth() {
    if (!authState || !authUser) return;
    const id = authUser.value;
    authState.textContent = engine.locked(id)
      ? `${roleLabel[id]} 15 минутқа бұғатталған.`
      : `${roleLabel[id]}: қате ${engine.fails(id)} / 3.`;
  }

  function paintLog() {
    if (!logBox) return;
    logBox.textContent = engine.logText() || "Журнал бос.";
  }

  function paintStand() {
    paintFactor();
    paintSession();
    paintAuth();
    paintLog();
  }

  function paintNc(before, after) {
    if (ncBefore) {
      ncBefore.textContent = before.leaked
        ? `Түзетуге дейін: журналға ${before.detail} түсті. Мәртебе: өтпеді.`
        : "Түзетуге дейінгі олқылық қайталанбады.";
    }
    if (ncAfter) {
      const closed = !after.leaked && after.detail.endsWith("42") && !after.detail.includes("LAB-0142");
      ncAfter.textContent = closed
        ? `Түзетуден кейін: журналда ${after.detail}. Толық идентификатор жоқ. Мәртебе: өтті.`
        : "Қайта сынау өтпеді.";
    }
  }

  function paintTests(results) {
    if (passCount) {
      const passed = results.filter((item) => item.pass).length;
      passCount.textContent = `${passed}/${results.length}`;
    }
    if (testSummary) {
      const failed = results.filter((item) => !item.pass);
      testSummary.textContent = failed.length
        ? `${results.length - failed.length} / ${results.length} өтті. Өтпегені: ${failed.map((item) => item.id).join(", ")}.`
        : `${results.length} / ${results.length} сынақ өтті. Он екі талаптың әрқайсысында оң және теріс сценарий бар.`;
    }
    if (!testBody) return;
    testBody.innerHTML = results
      .map(
        (item) => `
        <tr data-test-kind="${item.kind}">
          <th scope="row">${lab10Esc(item.id)}</th>
          <td>${lab10Esc(item.req)}</td>
          <td>${lab10Esc(item.label)}</td>
          <td>${lab10Esc(item.pre)}</td>
          <td>${lab10Esc(item.expected)}</td>
          <td>${lab10Esc(item.actual)}</td>
          <td>${lab10Esc(item.evidence)}</td>
          <td><span class="${item.pass ? "sev sev-low" : "sev sev-high"}">${item.pass ? "Өтті" : "Өтпеді"}</span></td>
        </tr>`
      )
      .join("");
    applyTestFilter(root.querySelector("[data-test-filter].is-on")?.dataset.testFilter || "all");
  }

  function applyTestFilter(value) {
    root.querySelectorAll("[data-test-filter]").forEach((chip) => {
      const on = chip.dataset.testFilter === value;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll("#test-body tr").forEach((row) => {
      row.hidden = value !== "all" && row.dataset.testKind !== value;
    });
  }

  async function loginAs(mode) {
    const id = authUser.value;
    const given = mode === "nofactor" ? "" : factorInput.value.trim();
    const res = await engine.login({
      id,
      password: authPass.value,
      factor: given,
      useSecret: mode !== "bad",
    });
    if (res.ok) session = { id, role: res.role };
    setMsg(authMsg, res.ok ? `${roleLabel[res.role]} сессиясы ашылды.` : res.reason, res.ok);
    paintStand();
  }

  root.addEventListener("submit", (event) => event.preventDefault());
  if (factorInput) {
    factorInput.addEventListener("input", () => {
      factorInput.dataset.touched = "1";
    });
  }

  root.addEventListener("click", async (event) => {
    const filter = event.target.closest("[data-test-filter]");
    if (filter) {
      applyTestFilter(filter.dataset.testFilter);
      return;
    }
    if (!ready) return;
    const id = event.target.closest("button")?.id;
    if (!id) return;

    if (id === "auth-ok") await loginAs("ok");
    if (id === "auth-bad") await loginAs("bad");
    if (id === "auth-nofactor") await loginAs("nofactor");
    if (id === "stand-reset") {
      engine.reset();
      session = null;
      if (factorInput) delete factorInput.dataset.touched;
      if (authPass) authPass.value = "";
      setMsg(authMsg, "Стенд тазартылды. Кілттер сол күйде, сессия жабылды.", true);
      setMsg(rbacMsg, "", null);
      setMsg(encMsg, "", null);
      setMsg(bakMsg, "", null);
      setMsg(aclMsg, "", null);
      setMsg(tlsMsg, "", null);
      paintStand();
    }
    if (id === "rbac-run") {
      if (!session) {
        setMsg(rbacMsg, "Алдымен кіріңіз.", false);
        return;
      }
      const action = root.querySelector("#rbac-action").value;
      const res = engine.allow(session.role, action);
      const name = LAB10_ACTIONS.find((item) => item[0] === action)?.[1] || action;
      setMsg(rbacMsg, res.ok ? `${name}: рұқсат.` : `${name}: тыйым.`, res.ok);
      paintLog();
    }
    if (id === "enc-run") {
      const res = await engine.encryptSample();
      setMsg(
        encMsg,
        res.leaked || res.keyInside
          ? "Шифрмәтін қабылдау өлшеміне сай емес."
          : `Шифрмәтін: ${res.preview}… Ашық JSON жоқ. Кілт өрісі жоқ.`,
        !res.leaked && !res.keyInside
      );
      paintLog();
    }
    if (id === "enc-open") {
      const res = await engine.decrypt();
      setMsg(encMsg, res.ok ? `Ашылды: ${res.id}, баға ${res.mark}.` : res.reason, res.ok);
    }
    if (id === "enc-foreign") {
      const res = await engine.decryptForeign();
      const rejected = res.reason === "ашылмады";
      setMsg(encMsg, res.ok ? "Бөгде кілт жазбаны ашты." : res.reason === "шифрмәтін жоқ" ? res.reason : "Бөгде кілт қабылданбады.", rejected);
    }
    if (id === "bak-create") {
      const res = await engine.createBackup();
      setMsg(bakMsg, `Көшірме жасалды. Хэш басы: ${res.hash}.`, true);
      paintLog();
    }
    if (id === "bak-tamper") {
      const res = engine.tamperBackup();
      setMsg(bakMsg, res.ok ? "Баға өрісі ауыстырылды, хэш өзгермеді." : res.reason, res.ok);
    }
    if (id === "bak-verify") {
      const res = await engine.verifyBackup();
      setMsg(bakMsg, res.reason, res.ok);
    }
    if (id === "bak-restore") {
      const res = await engine.restore();
      setMsg(
        bakMsg,
        res.ok ? `Қайтарылды, ${res.ms} мс, баға ${res.mark}.` : `${res.reason}. Сәтті қайтару жоқ, ${res.ms} мс.`,
        res.ok
      );
    }
    if (id === "upd-ok") {
      const res = await engine.acceptSigned();
      setMsg(bakMsg, res.reason, res.ok);
    }
    if (id === "upd-no") {
      const res = await engine.acceptUnsigned();
      setMsg(bakMsg, res.reason, res.ok === false);
    }
    if (id === "acl-run") {
      const from = root.querySelector("#acl-from").value;
      const to = root.querySelector("#acl-to").value;
      const res = engine.acl(from, to);
      setMsg(aclMsg, `${from} → ${to}: ${res.reason}.`, res.allow);
      paintLog();
    }
    if (id === "tls-run") {
      const version = root.querySelector("#tls-ver").value;
      const res = engine.checkTls(version);
      setMsg(tlsMsg, `TLS ${version}: ${res.reason}.`, res.ok);
      paintLog();
    }
    if (id === "test-run") {
      ready = false;
      if (testSummary) testSummary.textContent = "Сынақ қайта орындалуда.";
      const results = await runLab10Acceptance(engine);
      session = null;
      if (factorInput) delete factorInput.dataset.touched;
      paintTests(results);
      paintStand();
      ready = true;
    }
    if (id === "nc-show") {
      const before = engine.maskingTrial(false);
      if (ncBefore) ncBefore.textContent = `Түзетуге дейін: журналға ${before.detail} түсті. Мәртебе: өтпеді.`;
      if (ncAfter) ncAfter.textContent = "Маска қазір өшірулі. Түзетуді қайта сынау оны қайтарады.";
      session = null;
      paintSession();
      paintLog();
      setMsg(authMsg, "Журнал маскасыз қалдырылды. Бұл NC-01 дәлелі.", false);
    }
    if (id === "nc-fix") {
      const after = engine.maskingTrial(true);
      if (ncAfter) {
        ncAfter.textContent = !after.leaked
          ? `Түзетуден кейін: журналда ${after.detail}. Толық идентификатор жоқ. Мәртебе: өтті.`
          : "Қайта сынау өтпеді.";
      }
      paintLog();
      setMsg(authMsg, "Маска қайта қосылды.", true);
    }
  });

  engine
    .init()
    .then(async () => {
      paintFactor();
      const results = await runLab10Acceptance(engine);
      paintTests(results);
      const before = engine.maskingTrial(false);
      const after = engine.maskingTrial(true);
      paintNc(before, after);
      engine.reset();
      session = null;
      paintStand();
      ready = true;
    })
    .catch(() => {
      if (testSummary) testSummary.textContent = "Сынақ басталмады. Браузердің Web Crypto қызметі керек.";
    });
}

function viewLab10() {
  const tasks = LAB10.tasks
    .map(
      (task, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${task.n}</span>
        <h3>${task.title}</h3>
        <p>${task.text}</p>
      </article>`
    )
    .join("");

  const stages = LAB10.stages
    .map(
      (item) => `
      <article class="process-card">
        <span class="cat">${item.n}</span>
        <h3>${item.name}</h3>
        <p><strong>${item.result}.</strong> ${item.text}</p>
      </article>`
    )
    .join("");

  const principles = LAB10.principles
    .map(
      (item) => `
      <article class="process-card">
        <span class="cat">${item.name}</span>
        <h3>${item.name}</h3>
        <p>${item.text}</p>
      </article>`
    )
    .join("");

  const baseline = LAB10.baseline
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.area}</th>
        <td>${item.source}</td>
        <td>${item.state}</td>
        <td>${item.gap}</td>
      </tr>`
    )
    .join("");

  const requirements = LAB10.requirements
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.text}</td>
        <td><span class="${lab10Prio(item.prio)}">${item.prio}</span></td>
        <td>${item.accept}</td>
        <td>${item.method}</td>
        <td>${item.law}</td>
      </tr>`
    )
    .join("");

  const mechanisms = LAB10.mechanisms
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.n}</th>
        <td>${item.name}</td>
        <td>${item.covers}</td>
        <td>${item.secret}</td>
      </tr>`
    )
    .join("");

  const findings = LAB10.findings
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.id}</th>
        <td>${item.text}</td>
        <td>${item.fix}</td>
        <td>${item.retest}</td>
        <td><span class="${item.state === "Жабық" ? "sev sev-low" : "sev sev-mid"}">${item.state}</span></td>
      </tr>`
    )
    .join("");

  const roleOptions = LAB10_ROLES.map(([id, label]) => `<option value="${id}">${label}</option>`).join("");
  const actionOptions = LAB10_ACTIONS.map(([id, label]) => `<option value="${id}">${label}</option>`).join("");
  const zoneOptions = LAB10_ZONES.map(([id, label]) => `<option value="${id}">${label}</option>`).join("");
  const targetOptions = LAB10_TARGETS.map(([id, label]) => `<option value="${id}">${label}</option>`).join("");

  const questions = LAB10.questions
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

  const recs = LAB10.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  const literature = LAB10.literature
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

  const high = LAB10.requirements.filter((item) => item.prio === "Жоғары").length;

  return `
    <div class="view lab10">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab3-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB10.lab}</p>
          <h1 class="hero-title reveal">${LAB10.title}</h1>
          <p class="hero-lead reveal">${LAB10.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Қорғаныс прототипінің жиынтығы">
          <div><strong>${LAB10.requirements.length}</strong><span>талап, ${high} жоғары</span></div>
          <div><strong>${LAB10.mechanisms.length}</strong><span>механизм</span></div>
          <div><strong id="pass-count">…</strong><span>сынақ өтті</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/10">1. Мақсат</a>
        <a href="#lab/10/baseline">2. Күй</a>
        <a href="#lab/10/requirements">3. Талап</a>
        <a href="#lab/10/stand">4. Стенд</a>
        <a href="#lab/10/tests">5. Сынақ</a>
        <a href="#lab/10/findings">6. Олқылық</a>
        <a href="#lab/10/quiz">7. Сұрақтар</a>
        <a href="#lab/10/conclusion">8. Қорытынды</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және стенд</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB10.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB10.equipment}</p>
        </div>
        <p class="limit-note reveal">${LAB10.limit}</p>
        <div class="task-grid">${tasks}</div>
        <div class="block-head reveal">
          <h2>Құру кезеңдері</h2>
          <p>Әр кезеңнің шығысы келесісінің кірісі. Стенд енгізу мен сынауды оқу ортасында жабады, кампус желісін өзгертпейді.</p>
        </div>
        <div class="process-grid">${stages}</div>
      </section>

      <section class="block" id="baseline">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 2</p>
          <h2>Бастапқы қорғаныс күйі</h2>
          <p>Қазақстан Республикасының «Дербес деректер және оларды қорғау туралы» Заңы (2013 жылғы 21 мамыр, № 94-V) дерекке рұқсатсыз қол жеткізуден қорғауды талап етеді. «Ақпараттандыру туралы» Заң (2015 жылғы 24 қараша, № 418-V) жүйе иесіне қорғау шарасын жүктейді. Ішкі негіз — алдыңғы зертханалардың құжаттары. Төменде солардың стендке кірмеген жері.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab10-base">
            <thead>
              <tr>
                <th>Сала</th>
                <th>Дереккөз</th>
                <th>Қолданыстағы күй</th>
                <th>Стендке дейінгі олқылық</th>
              </tr>
            </thead>
            <tbody>${baseline}</tbody>
          </table>
        </div>
        <div class="process-grid">${principles}</div>
      </section>

      <section class="block" id="requirements">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 3</p>
          <h2>Талаптар және қабылдау өлшемдері</h2>
          <p>${LAB10.requirements.length} талап. Жоғары басымдық дерек, тіркелгі, рөл және желі шекарасына қатысты. Өлшем орындалмаса, сынақ «өтпеді» болады.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab10-req">
            <thead>
              <tr>
                <th>ID</th>
                <th>Қауіпсіздік талабы</th>
                <th>Басымдық</th>
                <th>Қабылдау өлшемі</th>
                <th>Тексеру әдісі</th>
                <th>Негіз</th>
              </tr>
            </thead>
            <tbody>${requirements}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="stand">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 4</p>
          <h2>Қорғаныс прототипі</h2>
          <p>Кітапхана — браузердің Web Crypto қызметі. Кілт әр жүктеуде generateKey арқылы шығады, extractable мәні false, сондықтан оны файлға шығаруға болмайды. Құпия сөз сақталмайды: сақталатыны әр тіркелгінің SHA-256 хэші. Өндірісте бұл хэш баяу функциямен және тұзбен ауыстырылады. Желі тақтасы пакетті сүзбейді, ол №5 ережесінің шешімін тексереді.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab10-mech">
            <thead>
              <tr>
                <th>№</th>
                <th>Механизм</th>
                <th>Нені жабады</th>
                <th>Құпия қалай ұсталады</th>
              </tr>
            </thead>
            <tbody>${mechanisms}</tbody>
          </table>
        </div>

        <div class="stand-grid">
          <article class="stand-panel">
            <h3>Кіру</h3>
            <p>Оқу факторы <span class="secret" id="factor-view">……</span>. Бұл санды хаттамаға көшірмеңіз. Құпия сөз экранда көрсетілмейді.</p>
            <form class="stand-form" id="auth-form">
              <label>Тіркелгі
                <select id="auth-user">${roleOptions}</select>
              </label>
              <label>Қате сынаққа арналған мән
                <input id="auth-pass" type="password" autocomplete="off" spellcheck="false" placeholder="кез келген мәтін">
              </label>
              <label>Екінші фактор
                <input id="auth-factor" inputmode="numeric" autocomplete="off" spellcheck="false">
              </label>
              <div class="btn-row">
                <button type="button" class="btn btn-primary" id="auth-ok">Дұрыс құпия сөзбен кіру</button>
                <button type="button" class="btn btn-ghost" id="auth-bad">Осы мәнмен байқау</button>
                <button type="button" class="btn btn-ghost" id="auth-nofactor">Факторсыз кіру</button>
                <button type="button" class="btn btn-ghost" id="stand-reset">Тазалау</button>
              </div>
            </form>
            <p class="stand-msg" id="auth-msg" aria-live="polite"></p>
            <p id="auth-state"></p>
          </article>

          <article class="stand-panel">
            <h3>Рөл</h3>
            <p id="session-view">Сессия жоқ.</p>
            <form class="stand-form">
              <label>Әрекет
                <select id="rbac-action">${actionOptions}</select>
              </label>
              <div class="btn-row">
                <button type="button" class="btn btn-primary" id="rbac-run">Тексеру</button>
              </div>
            </form>
            <p class="stand-msg" id="rbac-msg" aria-live="polite"></p>
          </article>

          <article class="stand-panel">
            <h3>Шифрлау</h3>
            <p>Жазба идентификаторы LAB-0142, баға 87. Кілт AES-256-GCM, жазбамен бірге сақталмайды.</p>
            <div class="btn-row">
              <button type="button" class="btn btn-primary" id="enc-run">Шифрлау</button>
              <button type="button" class="btn btn-ghost" id="enc-open">Өз кілтімен ашу</button>
              <button type="button" class="btn btn-ghost" id="enc-foreign">Бөгде кілтпен ашу</button>
            </div>
            <p class="stand-msg" id="enc-msg" aria-live="polite"></p>
          </article>

          <article class="stand-panel">
            <h3>Көшірме және жаңарту</h3>
            <p>Қайтару алдында хэш тексеріледі. Қолтаңбасыз пакет орнатылмайды.</p>
            <div class="btn-row">
              <button type="button" class="btn btn-primary" id="bak-create">Көшірме</button>
              <button type="button" class="btn btn-ghost" id="bak-tamper">Өзгерту</button>
              <button type="button" class="btn btn-ghost" id="bak-verify">Хэшті тексеру</button>
              <button type="button" class="btn btn-ghost" id="bak-restore">Қалпына келтіру</button>
              <button type="button" class="btn btn-primary" id="upd-ok">Қолтаңбалы жаңарту</button>
              <button type="button" class="btn btn-ghost" id="upd-no">Қолтаңбасыз</button>
            </div>
            <p class="stand-msg" id="bak-msg" aria-live="polite"></p>
          </article>

          <article class="stand-panel">
            <h3>Желі ережесі</h3>
            <p>Шешім кестеден шығады. Тізімде жоқ жұп әдепкі бойынша жабық. Пакет жіберілмейді.</p>
            <form class="stand-form">
              <label>Қайдан
                <select id="acl-from">${zoneOptions}</select>
              </label>
              <label>Қайда
                <select id="acl-to">${targetOptions}</select>
              </label>
              <div class="btn-row">
                <button type="button" class="btn btn-primary" id="acl-run">Шешім</button>
              </div>
            </form>
            <p class="stand-msg" id="acl-msg" aria-live="polite"></p>
          </article>

          <article class="stand-panel">
            <h3>TLS нұсқасы</h3>
            <p>1.2 және 1.3 қабылданады. Одан төмен нұсқа бас тартылады.</p>
            <form class="stand-form">
              <label>Нұсқа
                <select id="tls-ver">
                  <option value="1.3">1.3</option>
                  <option value="1.2" selected>1.2</option>
                  <option value="1.0">1.0</option>
                </select>
              </label>
              <div class="btn-row">
                <button type="button" class="btn btn-primary" id="tls-run">Тексеру</button>
              </div>
            </form>
            <p class="stand-msg" id="tls-msg" aria-live="polite"></p>
          </article>

          <article class="stand-panel span-2">
            <h3>Журнал</h3>
            <p>Құпия сөз бен фактор жазылмайды. Маска қосулы кезде оқу идентификаторының соңғы екі таңбасы ғана қалады.</p>
            <pre class="log-box" id="stand-log">Журнал бос.</pre>
          </article>

          <article class="stand-panel span-2">
            <h3>Кодтың маңызды үзінділері</h3>
            <p>Бұл стендте орындалатын логиканың қысқа көшірмесі. Толық сценарий бетпен бірге жүреді.</p>
            <pre class="snippet">${lab10Esc(LAB10.snippets.auth)}</pre>
            <pre class="snippet">${lab10Esc(LAB10.snippets.access)}</pre>
            <pre class="snippet">${lab10Esc(LAB10.snippets.crypto)}</pre>
            <pre class="snippet">${lab10Esc(LAB10.snippets.acl)}</pre>
          </article>
        </div>
      </section>

      <section class="block" id="tests">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 5</p>
          <h2>Сынақ бағдарламасы және хаттама</h2>
          <p>Сынақ тек осы бетте орындалады. Оң сценарий күтілген әрекетті, теріс сценарий тыйымды тексереді. Нәтиже төмендегі прогоннан шығады.</p>
        </div>
        <div class="btn-row reveal">
          <button type="button" class="btn btn-primary" id="test-run">Сынақты қайта орындау</button>
        </div>
        <p class="role-note reveal" id="test-summary" aria-live="polite">Сынақ орындалуда.</p>
        <div class="chip-row reveal" role="group" aria-label="Сынақ түрі">
          <button type="button" class="chip is-on" data-test-filter="all" aria-pressed="true">Барлығы</button>
          <button type="button" class="chip" data-test-filter="pos" aria-pressed="false">Оң</button>
          <button type="button" class="chip" data-test-filter="neg" aria-pressed="false">Теріс</button>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab10-test">
            <thead>
              <tr>
                <th>Тест ID</th>
                <th>Талап</th>
                <th>Түрі</th>
                <th>Алғышарт</th>
                <th>Күтілетін нәтиже</th>
                <th>Нақты нәтиже</th>
                <th>Дәлел</th>
                <th>Мәртебе</th>
              </tr>
            </thead>
            <tbody id="test-body">
              <tr><td colspan="8">Сынақ орындалуда.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="block" id="findings">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 6</p>
          <h2>Сәйкессіздік және түзету</h2>
          <p>NC-01 қайталанады: маскасыз журнал толық идентификаторды көрсетеді, түзетуден кейін сол жол жабылады. NC-02 қабылдау хаттамасындағы T-13 және T-14. NC-03 ашық, өйткені стенд файл мазмұнын қарамайды.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab10-nc">
            <thead>
              <tr>
                <th>ID</th>
                <th>Сәйкессіздік</th>
                <th>Түзету</th>
                <th>Қайта сынау</th>
                <th>Күйі</th>
              </tr>
            </thead>
            <tbody>${findings}</tbody>
          </table>
        </div>
        <div class="btn-row reveal">
          <button type="button" class="btn btn-ghost" id="nc-show">Олқылықты қайталау</button>
          <button type="button" class="btn btn-primary" id="nc-fix">Түзетуді қайта сынау</button>
        </div>
        <article class="goal-card reveal">
          <p id="nc-before">Прогон аяқталғанда толтырылады.</p>
          <p id="nc-after"></p>
        </article>
      </section>

      <section class="block" id="quiz">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 7</p>
          <h2>Бақылау сұрақтарына жауап</h2>
        </div>
        <div class="qa-list">${questions}</div>
      </section>

      <section class="block" id="conclusion">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 8</p>
          <h2>Қорытынды және жетілдіру</h2>
        </div>
        <article class="goal-card reveal">
          <p>${LAB10.conclusion.text}</p>
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
