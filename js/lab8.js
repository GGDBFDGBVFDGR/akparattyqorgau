const LAB8 = {
  lab: "№8 зертханалық жұмыс",
  title: "Ақпаратты қорғау жүйесінің архитектурасын жобалау",
  lead:
    "Smart Campus үшін көпдеңгейлі қорғаныс: талап тәуекелге байланған, сенім аймағы мен дерек ағыны сызбада, құралдың орны мен істен шығуы жазылған.",
  goal:
    "Таңдалған ақпараттық жүйе үшін заманауи стандарттар, қауіпсіздік қағидаттары мен қорғаныс механизмдері негізінде көпдеңгейлі қорғаныс архитектурасын әзірлеу.",
  equipment:
    "Дербес компьютер, №5 желі аймақтары, №6 тәуекел бағасы және №7 үздіксіздік көрсеткіштері.",
  limit:
    "Жұмыс оқу сценарийі. Нақты кампус желісіне ереже жүктелмейді. Өнім атауы көрсетілмейді: әр құрал функционалдық талаппен жазылған. Электр үзілісі №6 бойынша қабылданған, генератор бұл архитектураға кірмейді.",
  tasks: [
    { n: "01", title: "Талап", text: "Пайдаланушы, актив, сыртқы жүйе және сенім деңгейі. Кемінде он талап, әрқайсысы №6 тәуекеліне байланған." },
    { n: "02", title: "Аймақ", text: "Internet, DMZ, пайдаланушылар, сервер, әкімшілік, көшірме және мониторинг. Әр ағында хаттама мен қорғаныс." },
    { n: "03", title: "Құрал", text: "Кемінде бес құрал: жабылатын тәуекел, орны, баптау, журнал, істен шығу және балама." },
    { n: "04", title: "Қалдық", text: "Архитектура не істемейтіні және №6 бағасынан кейін қалатын тәуекел." },
  ],
  object: {
    name: "Smart Campus — жоғары оқу орнының цифрлық кампусы",
    purpose:
      "Студент, оқытушы, тіркеуші және күзет бір портал арқылы оқу нәтижесін, жеке дерек пен ғимаратқа кіруді жүргізеді. Нысан №6 жұмыстағымен бір.",
    boundary:
      "Жобалау шекарасы — кампус желісінің сыртқы шлюзінен резервтік көшірме сейфіне және SIEM-ге дейін. Шекараның сыртындағы жүйені бұл сызба басқармайды: оған тек рұқсат етілген арна шығады.",
  },
  inside: [
    "Портал, IAM, LMS, өткізу жүйесі және студенттердің деректер қоры",
    "Пайдаланушы станциясы, сервер бөлмесі және ондағы үзіліссіз қуат көзі",
    "№5 VLAN-дар, әкімшілік bastion және SIEM",
    "№7 бойынша көшірменің желідегі оқшау данасы және сейфтегі желісіз данасы",
  ],
  outside: [
    "Студенттің үйдегі құрылғысы, портал сессиясынан тыс",
    "Қалалық электр операторының ішкі жүйесі",
    "Банк төлемі және бөгде жоғары оқу орнының өз кампусы",
    "Серіктес ұйымның ішкі желісі: біздің жақта тек allowlist арқылы API",
  ],
  users: [
    { role: "Студент", place: "Пайдаланушылар желісі", trust: "2", limit: "Өз бағасын оқиды. Қоймаға және әкімшілік VLAN-ға жолы жоқ." },
    { role: "Оқытушы", place: "Пайдаланушылар желісі", trust: "2", limit: "Тек өз пәнін енгізеді. Баға екінші адам бекіткенде сақталады." },
    { role: "Тіркеуші", place: "Пайдаланушылар желісі", trust: "2", limit: "ЖСН экспорты рөлмен және журналмен шектеледі. DLP әлі толық емес, бұл қалдық тәуекел." },
    { role: "Күзет", place: "Пайдаланушылар желісі", trust: "2", limit: "Тек өткізу жүйесі. Оқу қорына кірмейді." },
    { role: "Жүйелік әкімші", place: "Әкімшілік сегмент", trust: "4", limit: "Күнделікті желіде отырмайды. Кіру: VPN, MFA, bastion." },
    { role: "Қауіпсіздік офицері", place: "Мониторинг", trust: "4", limit: "SIEM-ді оқиды. Сервердің түбірлік құқығын алмайды." },
    { role: "Қонақ", place: "Қонақ Wi-Fi", trust: "0", limit: "Тек интернетке шығыс. Ішкі VLAN көрінбейді." },
    { role: "Қашықтағы қызметкер", place: "VPN, содан кейін өз рөлінің VLAN-ы", trust: "0→2 немесе 4", limit: "Тоннель дерекқорға тікелей ашылмайды." },
  ],
  principles: [
    { name: "Көпдеңгейлі қорғаныс", how: "Желі, жүйе, қолданба және дерек әртүрлі құралмен жабылады. Біреуі тоқтаса, келесісі активті ұстайды." },
    { name: "Ең аз артықшылық", how: "Құқық №4 матрицадан. Қолданба қоймаға тек қызметтік тіркелгімен кіреді." },
    { name: "Әдепкі бойынша тыйым", how: "Тізімде жоқ ағын жабық. Жаңа порт өздігінен ашылмайды." },
    { name: "Сенім шекарасы", how: "Жоғары аймаққа өту тек шлюзде тексеріледі. Орналасқан жері сенім бермейді." },
    { name: "Қауіпсіз күй", how: "NGFW немесе IAM тоқтаса, жаңа кіру ашылмайды." },
    { name: "Орталық бақылау", how: "Шекара, кіру, соңғы құрылғы және көшірме журналы SIEM-ге кетеді." },
    { name: "Үздіксіздік", how: "Көшірме №7 3-2-1 сызбасымен. Бір дана желісіз сейфте." },
    { name: "Сәйкестік", how: "Дербес дерек сақтауда шифрланған. Қолжетімділік пен баға өзгерісі журналда қалады." },
  ],
  requirements: [
    { id: "F-01", kind: "f", kindLabel: "Функционалдық", text: "Портал сырттан тек TLS 1.2+ және WAF арқылы ашылады.", risk: "№6-1. Дербес дерек портал арқылы сыртқа кетуі мүмкін.", asset: "Портал және жеке дерек қоры" },
    { id: "F-02", kind: "f", kindLabel: "Функционалдық", text: "Қызметкер, әкімші және қашықтағы кіру MFA-сыз сессия ашпайды.", risk: "№6-2. Фишинг құпия сөзді алады.", asset: "IAM тіркелгісі" },
    { id: "F-03", kind: "f", kindLabel: "Функционалдық", text: "Сәйкестендіру LDAP немесе Kerberos арқылы орталықтан. Құқық №4 рөлдік матрицадан аспайды.", risk: "№6-5. Ішкі тұлға өз құқығын теріс пайдаланады.", asset: "IAM және LMS" },
    { id: "F-04", kind: "f", kindLabel: "Функционалдық", text: "DMZ дерекқор портын көрмейді. Сұраныс қолданба API-ге ғана өтеді.", risk: "№6-3. Порталдағы зиянды кодтың қоймаға жетуі.", asset: "Студенттердің деректер қоры" },
    { id: "F-05", kind: "f", kindLabel: "Функционалдық", text: "Көшірме оқшау VLAN-да тұрады. Өндіріс тіркелгісі дананы өшіре алмайды.", risk: "№6-6. Бопсалаушы бағдарлама онлайн көшірмені жабады.", asset: "Резервтік көшіру" },
    { id: "F-06", kind: "f", kindLabel: "Функционалдық", text: "Пайдаланушы станциясы мен серверде EDR агенті тұрады. Агенті жоқ құрылғы ішкі VLAN-ға өтпейді.", risk: "№6-3. Серверде патч кешігеді, EDR жоқ.", asset: "Жұмыс станциясы және сервер" },
    { id: "F-07", kind: "f", kindLabel: "Функционалдық", text: "Қонақ желісі ішкі сегментке, серверге және әкімшілік VLAN-ға өтпейді.", risk: "№6-7. Қонақ желісінен ішкі VLAN-ға өту.", asset: "Кампус желісі" },
    { id: "F-08", kind: "f", kindLabel: "Функционалдық", text: "Баға екінші адам бекіткенде ғана сақталады. Өзгеріс кім, қашан, нені жазғанын қалдырады.", risk: "№6-5. Баға бір оқытушының әрекетімен өзгереді.", asset: "LMS" },
    { id: "F-09", kind: "f", kindLabel: "Функционалдық", text: "Қашықтағы қолжетімділік VPN-мен шекарада бітеді. Тоннель дерекқорға тікелей ашылмайды.", risk: "№6-2 және №6-3. Ұрланған тіркелгімен сырттан ішке кіру.", asset: "Әкімшілік және серверлік сегмент" },
    { id: "N-01", kind: "n", kindLabel: "Функционалдық емес", text: "Дерекқор мен көшірме сақтауда AES-256. Кілт дерек орналасқан серверден бөлек басқарылады.", risk: "№6-1. Тасымалдағыш немесе диск сыртқа шықса, дерек ашық оқылады.", asset: "Дерекқор және көшірме" },
    { id: "N-02", kind: "n", kindLabel: "Функционалдық емес", text: "Порталдың RTO-сы 8 сағат, LMS үшін RPO 4 сағат. Электрдің қысқа үзілісін үзіліссіз қуат көзі көтереді.", risk: "№6-4. Электр үзілісі, R = 2, қабылданған. Генератор алынбайды.", asset: "Портал және сервер бөлмесі" },
    { id: "N-03", kind: "n", kindLabel: "Функционалдық емес", text: "Қауіпсіздік журналы кемінде 90 күн сақталады. SIEM-дегі дананы сол оқиғаның қатысушысы өшіре алмайды.", risk: "№6-5. Баға немесе экспорт өзгерісін жасыру.", asset: "Мониторинг" },
    { id: "N-04", kind: "n", kindLabel: "Функционалдық емес", text: "NGFW немесе IAM тоқтаса, жаңа кіру ашылмайды. Соңғы ашық күймен қалмайды.", risk: "№6-3. Шекара ашық қалса, зиянды код кампус бойынша таралады.", asset: "Шекара және IAM" },
  ],
  zones: [
    { id: "internet", name: "Internet", sub: "Сенім 0", level: "0", vlan: "—", x: 28, y: 18, w: 180, h: 74, fill: "#f8e8e6", color: "#b1362c", text: "Сенім жоқ. Кампусқа кіру тек шекаралық сүзгіден кейін. Порталға TLS, қызметкерге VPN." },
    { id: "guest", name: "Қонақ Wi-Fi", sub: "VLAN 10 · сенім 0", level: "0", vlan: "10", x: 28, y: 128, w: 180, h: 70, fill: "#f8efe6", color: "#c45a27", text: "Қонақ ішкі мекенжайды көрмейді. Шығыс интернетке шекара арқылы. №6 тәуекел 7 осы шекарамен жабылады." },
    { id: "users", name: "Пайдаланушылар", sub: "VLAN 15 · сенім 2", level: "2", vlan: "15", x: 28, y: 248, w: 200, h: 108, fill: "#e8f1f6", color: "#1a4f6e", text: "Студент, оқытушы, тіркеуші және күзет. IAM-ды көреді. Дерекқор порты мен көшірме VLAN-ы жабық." },
    { id: "dmz", name: "DMZ", sub: "VLAN 20 · сенім 1", level: "1", vlan: "20", x: 340, y: 108, w: 230, h: 100, fill: "#f6f0e4", color: "#8a5a12", text: "Портал, кері прокси және WAF. Сыртқы сұраныс осында бітеді. Қоймаға тікелей порт жоқ." },
    { id: "servers", name: "Серверлер", sub: "VLAN 40 және 50", level: "3", vlan: "40 / 50", x: 328, y: 268, w: 260, h: 128, fill: "#e7f3ef", color: "#0d5c4b", text: "LMS, IAM және өткізу жүйесі — VLAN 40. Студенттер қоры — VLAN 50, ішкі микросегмент. Қоймаға тек қызметтік тіркелгі, TCP/5432." },
    { id: "backup", name: "Көшірме", sub: "VLAN 60 · оқшау", level: "оқшау", vlan: "60", x: 328, y: 456, w: 260, h: 96, fill: "#e5f2ec", color: "#1b4d3e", text: "№7 3-2-1. Желідегі дана логикалық оқшау. Үшінші дана сейфте, желіге қосылмайды. Өндіріс тіркелгісі суретті өшірмейді." },
    { id: "admin", name: "Әкімшілік", sub: "VLAN 99 · сенім 4", level: "4", vlan: "99", x: 800, y: 18, w: 210, h: 100, fill: "#f3eef6", color: "#5c3d7a", text: "VPN саясаты, MFA және bastion. Күнделікті пайдаланушы бұл VLAN-да жоқ. Басқару тек осыдан шығады." },
    { id: "monitor", name: "Мониторинг", sub: "SIEM · VLAN 70", level: "бақылау", vlan: "70", x: 800, y: 268, w: 210, h: 128, fill: "#e8ecf4", color: "#243056", text: "SIEM журналды қабылдайды. Кері басқару арнасы жоқ: мониторингтен серверге кіру әкімшілік сегмент арқылы ғана." },
  ],
  links: [
    { n: "01", from: "internet", to: "dmz", decision: "Рұқсат", proto: "HTTPS, TLS 1.2+", control: "NGFW, WAF", why: "Сыртқы пайдаланушы порталды тек шекара және қолданбалы сүзгі арқылы көреді.", kind: "allow", d: "M 208 78 L 274 78 L 274 158 L 340 158", label: "TLS · NGFW", lx: 246, ly: 100 },
    { n: "02", from: "internet", to: "admin", decision: "Рұқсат", proto: "IPsec немесе TLS VPN", control: "NGFW, MFA", why: "Қашықтағы қызметкер мен әкімші шекарада туннель ашады. Тоннель дерекқорға созылмайды.", kind: "mgmt", d: "M 208 48 L 800 48", label: "VPN · MFA", lx: 500, ly: 32 },
    { n: "03", from: "guest", to: "internet", decision: "Рұқсат", proto: "HTTPS шығыс", control: "NGFW", why: "Қонақ тек интернетке шығады. Ішкі мекенжайға маршрут жоқ.", kind: "allow", d: "M 118 128 L 118 92", label: "тек шығыс", lx: 168, ly: 110 },
    { n: "04", from: "guest", to: "servers", decision: "Тыйым", proto: "кез келген", control: "NGFW, VLAN", why: "Қонақ желісі серверге, әкімшілікке және көшірмеге өтпейді. №6 тәуекел 7.", kind: "deny", d: "M 208 163 L 300 163", label: "тыйым", lx: 254, ly: 184 },
    { n: "05", from: "users", to: "dmz", decision: "Рұқсат", proto: "HTTPS, TLS", control: "NGFW, WAF", why: "Кампустегі пайдаланушы порталды қонақпен бірдей жария арнамен ашады.", kind: "allow", d: "M 150 248 L 150 228 L 340 186", label: "HTTPS", lx: 214, ly: 214 },
    { n: "06", from: "users", to: "servers", decision: "Рұқсат", proto: "LDAP немесе Kerberos, TLS", control: "IAM, MFA", why: "Пайдаланушы желісі тек сәйкестендіру қызметін көреді, қойма портын көрмейді.", kind: "allow", d: "M 228 312 L 328 332", label: "LDAP · TLS", lx: 278, ly: 292 },
    { n: "07", from: "dmz", to: "servers", decision: "Рұқсат", proto: "TCP/8443, TLS", control: "IPS", why: "Кері прокси тек LMS және IAM API-ге барады.", kind: "allow", d: "M 456 208 L 456 268", label: "TLS · IPS", lx: 522, ly: 238 },
    { n: "08", from: "servers", to: "servers", decision: "Рұқсат", proto: "TCP/5432, TLS", control: "Қызметтік тіркелгі", why: "Қолданба қоймаға ішкі микросегментте барады. Пайдаланушы мен DMZ бұл портты көрмейді.", kind: "allow" },
    { n: "09", from: "dmz", to: "servers", decision: "Тыйым", proto: "TCP/5432", control: "NGFW", why: "DMZ қоймаға тікелей қосылмайды.", kind: "deny" },
    { n: "10", from: "servers", to: "backup", decision: "Рұқсат", proto: "Көшіру арнасы, TLS", control: "AES-256, бір бағыт", why: "Сервер суретті оқшау VLAN-ға жібереді. Кері өшіру құқығы жоқ.", kind: "allow", d: "M 458 396 L 458 456", label: "AES · бір бағыт", lx: 560, ly: 426 },
    { n: "11", from: "users", to: "backup", decision: "Тыйым", proto: "кез келген", control: "VLAN, default deny", why: "Пайдаланушы мен DMZ көшірме аймағына кірмейді.", kind: "deny" },
    { n: "12", from: "admin", to: "servers", decision: "Рұқсат", proto: "TCP/22, bastion", control: "VPN, MFA", why: "Сервер мен DMZ басқаруы тек әкімшілік сегменттен, bastion арқылы.", kind: "mgmt", d: "M 800 90 L 700 90 L 700 324 L 588 324", label: "bastion", lx: 748, ly: 176 },
    { n: "13", from: "servers", to: "monitor", decision: "Рұқсат", proto: "syslog, TLS/6514", control: "Бір бағытты журнал", why: "DMZ, сервер, әкімшілік және EDR журналы SIEM-ге кетеді. Кері басқару жоқ.", kind: "log", d: "M 588 372 L 800 372", label: "syslog", lx: 694, ly: 352 },
    { n: "14", from: "admin", to: "monitor", decision: "Рұқсат", proto: "HTTPS, TLS", control: "MFA, рөл", why: "Офицер журналды оқиды. Мониторинг сегментінен серверге кіру осы жолмен ашылмайды.", kind: "log", d: "M 905 118 L 905 268", label: "оқу", lx: 962, ly: 190 },
    { n: "15", from: "internet", to: "backup", decision: "Тыйым", proto: "кез келген", control: "NGFW, default deny", why: "Интернеттен серверге, көшірмеге және SIEM-ге тікелей жол жоқ.", kind: "deny" },
  ],
  layers: [
    { name: "Физикалық", aim: "Үй-жай мен жабдық", how: "Сервер бөлмесінің құлпы, кіруді бақылау, бейнебақылау. Үзіліссіз қуат көзі қысқа электр үзілісін көтереді." },
    { name: "Желілік", aim: "Трафик және сегмент арасы", how: "NGFW, VLAN, VPN, NAC. Қонақ, DMZ, сервер, әкімшілік және көшірме бір-біріне default deny." },
    { name: "Жүйелік", aim: "Операциялық жүйе және сервер", how: "Қатаң баптау, патч терезесі, EDR, жергілікті әкімші құқығын бөлек саясат." },
    { name: "Қолданбалы", aim: "Портал, LMS және API", how: "MFA, WAF, қысқа сессия, енгізуді тексеру, бағаны екі адам бекітеді." },
    { name: "Деректер", aim: "Сақталатын және берілетін ақпарат", how: "TLS арнада, AES-256 сақтауда, кілт бөлек, көшірме оқшау." },
    { name: "Ұйымдастырушылық", aim: "Процесс және адам", how: "№4 рөл, оқыту, журналды шолу, инцидентке офицер жауапты. Өнім емес, процесс." },
  ],
  technologies: [
    { n: "1", name: "VPN", aim: "Қашықтағы трафикті қорғалған арнамен беру", use: "Қызметкер мен әкімші шекарада туннель ашады. Ішке өткен соң өз VLAN-ына түседі." },
    { n: "2", name: "NGFW", aim: "Кіріс және шығыс трафикті сүзу", use: "Интернет, қонақ желісі және ішкі сегменттердің шекарасы. Көрсетілмеген ағын жабық." },
    { n: "3", name: "IDS/IPS", aim: "Шабуылды анықтау немесе бұғаттау", use: "DMZ шекарасында IPS. Серверлік сегментте алдымен анықтау, расталған ереже кейін бұғаттайды." },
    { n: "4", name: "TLS", aim: "Қосылымды криптографиялық қорғау", use: "Портал, API, LDAP және журнал арнасы. TLS 1.2-ден төмен нұсқа өшіріледі." },
    { n: "5", name: "AES және ашық кілт", aim: "Дерек пен кілт алмасуды қорғау", use: "Қойма мен көшірме AES-256. VPN мен TLS кілт алмасуды ашық кілтпен бастайды." },
    { n: "6", name: "LDAP немесе Kerberos", aim: "Орталықтандырылған сәйкестендіру", use: "Пайдаланушы мен қызметтік тіркелгі бір каталогта. №4 рөл осында тексеріледі." },
    { n: "7", name: "Резервтік көшіру", aim: "Апаттан кейін қалпына келтіру", use: "Оқшау VLAN және сейфтегі желісіз дана. Жиілік №7 RPO-дан сирек емес." },
    { n: "8", name: "EDR", aim: "Соңғы құрылғыдағы қауіпті көру", use: "Жұмыс станциясы мен сервер. Агенті жоқ құрылғыны NAC ішкі VLAN-ға жібермейді." },
    { n: "9", name: "SIEM", aim: "Журналды жинау және корреляциялау", use: "Мониторинг аймағы. Шекара, кіру, EDR және көшірме бір ескертуге басылады." },
  ],
  tools: [
    {
      name: "NGFW",
      risk: "№6-1 және №6-7. Сырттан порталға еркін кіру, қонақтың ішкі VLAN-ға өтуі.",
      place: "Интернет, қонақ желісі, DMZ және ішкі сегменттердің шекарасы.",
      need: "Default deny. Сырттан DMZ-ге тек 443. Қонақтан ішкі мекенжайға тыйым. VPN тек MFA өткен тіркелгіге.",
      logs: "Рұқсат, тыйым, VPN сессиясы және IPS оқиғасы SIEM-ге.",
      fail: "Құрылғы тоқтаса трафик өтпейді. Портал сырттан жабылады, ішкі шабуылға жол ашылмайды. Қалпына келтіру №7 RTO ішінде.",
      alt: "Сыртқы және ішкі екі бөлек сүзгі, VPN жеке шлюзде. Бір құрылғыға тәуелділік кемиді, баптау екі жерде жүргізіледі.",
      metric: "Рұқсатсыз ішкі кіру саны нөл. VPN сессиясының MFA үлесі 100 пайыз.",
    },
    {
      name: "WAF",
      risk: "№6-1. Портал сұранысы арқылы дербес дерекке жету.",
      place: "DMZ, порталдың алдында.",
      need: "Қолданбалы шабуылдың негізгі қолтаңбасы, сұраныс өлшемінің шегі, DMZ-ден тек API мекенжайы.",
      logs: "Бұғатталған сұраныс пен ереже нөмірі SIEM-ге.",
      fail: "WAF өшсе NGFW портал портын жабады. Ашық күйде сүзгісіз қалмайды.",
      alt: "Қолданбадағы енгізуді тексеру және API шлюзі. WAF оны алмастырмайды, қатар тұрады.",
      metric: "Бұғатталған қолданбалы оқиға саны және жалған бұғаттау үлесі.",
    },
    {
      name: "EDR",
      risk: "№6-3. Патч кешіккен сервер мен станциядағы зиянды бағдарлама.",
      place: "Пайдаланушы станциясы және серверлік сегмент.",
      need: "Серверде рұқсат етілген процесс тізімі. Агенті жоқ құрылғыны NAC бөлек VLAN-да ұстайды.",
      logs: "Ескерту, процесс және агенттің үзілуі SIEM-ге.",
      fail: "Агент өшсе құрылғы ішкі VLAN-нан шығады. Қорғаныс журналсыз жалғаспайды.",
      alt: "Хосттық сүзгі, апталық патч және қолданбаның ақ тізімі. Мінез-құлықты көру әлсірейді.",
      metric: "Агент қамтуы және патчтың орташа кешігуі.",
    },
    {
      name: "SIEM",
      risk: "№6-2 және №6-5. Фишинг пен баға өзгерісін кеш байқау, журналды өшіру.",
      place: "Мониторинг аймағы, VLAN 70.",
      need: "NGFW, VPN, IAM, WAF, EDR және көшірме көзі. Мысал корреляция: жаңа елден VPN және сол тіркелгінің MFA сәтсіздігі.",
      logs: "SIEM-нің өз аудит журналы бөлек сақталады. Оқырман оны өшірмейді.",
      fail: "SIEM тоқтаса сүзгі, MFA және EDR өз орнында қалады. Жоғалатыны — корреляция. Кезекші шекара консолін қарайды.",
      alt: "Журналды орталық файлға жинап, апта сайын қолмен шолу. Байланысты оқиға бір ескертуге жиналмайды.",
      metric: "Анықтау уақыты. Көз 15 минуттан ұзақ үзілсе ескерту.",
    },
    {
      name: "Оқшау көшірме",
      risk: "№6-6. Бопсалау сервер мен желідегі көшірмені бірге жабады.",
      place: "Көшірме VLAN-ы және екінші ғимараттағы сейф.",
      need: "AES-256. Өндіріс тіркелгісінің өшіру құқығы жоқ. Үшінші дана желіге қосылмайды. Сынақ 90 күннен сирек емес.",
      logs: "Сәтті және сәтсіз көшіру SIEM-ге.",
      fail: "Соңғы сау данаға дейін жоғалту терезесі өседі. Қызмет №7 RPO және RTO бойынша сол данадан қайтады.",
      alt: "Екінші алаңға үздіксіз реплика. Ол да желіде болса, бопсалаудан бөлек қорғамайды, сондықтан желісіз дана қалады.",
      metric: "Соңғы сәтті қалпына келтіру сынағының жасы 90 күннен аспайды.",
    },
    {
      name: "IAM",
      risk: "№6-2 және №6-5. Фишинг және артық құқықпен баға өзгерту.",
      place: "Серверлік сегмент. Әкімшілік кіру VLAN 99 арқылы.",
      need: "LDAP немесе Kerberos, MFA, сессия мерзімі, №4 рөл. LMS-те екі адамдық бекіту.",
      logs: "Кіру, сәтсіз MFA және рөл өзгерісі SIEM-ге.",
      fail: "Каталог тоқтаса жаңа кіру жабылады. Ашық сессия қысқа мерзімде өшеді. Апаттық тіркелгі сейфте, екі адаммен.",
      alt: "Жергілікті тіркелгі. Ол №4 матрицаны бұзады, сондықтан тек апаттық кіруге қалдырылады.",
      metric: "MFA қамтуы. Тоқсандық шолуда артық рөл қалмауы.",
    },
  ],
  residual: [
    { name: "Электр үзілісі", why: "№6-да R = 2, қабылданған. Генератор алынбаған.", left: "Үзіліссіз қуат көзі және ретті жабу. Ұзақ үзіліс №7 жоспарымен өтеледі." },
    { name: "Үйдегі құрылғы", why: "Шекарадан тыс. Кампус оның операциялық жүйесін басқармайды.", left: "Сессия MFA-мен қысқа. Портал деректі құрылғыда сақтамайды." },
    { name: "Заңды құқықты теріс пайдалану", why: "Тіркеушінің экспортына DLP әлі толық қойылмаған.", left: "Экспорт рөлмен шектеледі және журналға түседі. DLP — келесі шара, бұл сызбаның орнын баспайды." },
    { name: "Нөлдік күн", why: "Қолтаңба жаңарғанша IPS танымауы мүмкін.", left: "Сегмент залалды бір VLAN-да ұстайды. EDR мінез-құлықты қарайды. Патч терезесі ай сайын." },
    { name: "SIEM соқыр дағы", why: "Жіберілмеген журнал корреляцияға кірмейді.", left: "Көз үзілсе 15 минутта ескерту. Агенті жоқ құрылғыны NAC жібермейді." },
    { name: "Бір шекаралық құрылғы", why: "NGFW тоқтаса портал сырттан жабылады.", left: "Жабылу әдейі. Ішке жол ашылмайды. Қайтару мерзімі порталдың RTO-сына сыяды." },
    { name: "Көшірме сынағы ашық", why: "№7 сынағы 60 күн ішінде жоспарланған, әлі өткізілмеген.", left: "Оқшау дана бар. Сынақ өтпей тұрып қалпына келтіру уақыты расталмаған." },
  ],
  questions: [
    {
      num: 1,
      text: "Қауіпсіздік архитектурасы мен қорғаныс құралдарының тізімі несімен ерекшеленеді?",
      answer:
        "Архитектура — сенім шекарасы, дерек ағыны және құралдардың бір-біріне қалай сүйенетіні. Тізім мұны айтпайды. Бұл жобада WAF DMZ-де тұрғаны жеткіліксіз: ол дерекқор портын ашпауы керек, журналы SIEM-ге кетуі керек, өзі тоқтаса NGFW порталды жабуы керек. Тізімде үшеуі қатар тұрады. Архитектурада біреуі тоқтатса, екіншісі көреді, үшіншісі ашық қалдырмайды.",
    },
    {
      num: 2,
      text: "Көпдеңгейлі қорғаныс қағидаты қалай іске асырылады?",
      answer:
        "Бір қабат бұзылса келесісі активті ұстайды. Фишинг құпия сөзді алса, MFA сессияны ашпайды. MFA өтсе, рөл студентке қойманы бермейді. Рөл қате берілсе, пайдаланушы желісінен дерекқор порты өтпейді. Портал осал болса, DMZ қоймаға бармайды. Желідегі көшірме шифрланса, сейфтегі дана желісіз қалады. Сондықтан NGFW, IAM, EDR, WAF және көшірме бір-бірінің орнын баспайды.",
    },
    {
      num: 3,
      text: "DMZ не үшін қажет?",
      answer:
        "DMZ — интернетке ашық жалғыз қызметтік қабат. Портал мен WAF осында. Шабуыл осы сегментке жетсе де серверлік VLAN-ның дерекқор порты көрінбейді. Сұраныс қолданба API-ге TLS 8443 арқылы ғана өтеді. Бұл №5 жұмыстағы шешіммен бір: DMZ қоймаға тікелей қосылмайды.",
    },
    {
      num: 4,
      text: "IDS пен IPS арасындағы айырмашылық қандай?",
      answer:
        "IDS трафикті оқиды және ескертеді, ағынды өзі үзбейді. IPS ағынның үстінде тұрады және ережеге сай бұғаттайды. Бұл жобада DMZ шекарасында IPS: белгілі шабуыл порталға жетпей тұрып тоқтайды. Серверлік сегментте алдымен анықтау, өйткені жалған бұғаттау баға жазуды үзбеуі керек. Офицер растаған ереже кейін бұғаттауға көшеді. Екеуінің журналы SIEM-ге түседі.",
    },
    {
      num: 5,
      text: "Ең аз артықшылық қағидаты нені білдіреді?",
      answer:
        "Әр рөлге жұмысқа қажетті ең кіші құқық беріледі. Студент өз бағасын оқиды, өзгертпейді. Оқытушы тек өз пәнін жазады, оны екінші адам бекітеді. Қолданба қоймаға қызметтік тіркелгімен және тек қажетті портпен кіреді. Әкімші күнделікті VLAN-да отырмайды: VPN, MFA, bastion. Қауіпсіздік офицері SIEM-ді оқиды, сервердің түбірлік құқығын алмайды.",
    },
    {
      num: 6,
      text: "Желіні сегменттеу шабуылдың таралуын қалай шектейді?",
      answer:
        "Бұзылған хост келесі VLAN-ға default deny арқылы өте алмайды. Қонақ желісінен серверге маршрут жоқ. DMZ-ден көшірме VLAN-ына жол жоқ, сондықтан порталдағы зиянды код көшірмені шифрлай алмайды. Пайдаланушы желісі дерекқор портын көрмейді, тек IAM-ды көреді. Әкімшілік басқаруы bastion-мен шектелген: бір станцияны алған адам бүкіл кампусты басқармайды.",
    },
    {
      num: 7,
      text: "SIEM архитектурада қандай міндет атқарады?",
      answer:
        "SIEM қорғаныс құралының орнын баспайды. Ол NGFW, WAF, VPN, IAM, EDR және көшірме журналын бір жерге жинап, байланыстырады. Мысалы, түнде жаңа елден VPN және сол тіркелгінің MFA сәтсіздігі бір ескерту болады. SIEM өшсе сүзгі мен MFA тоқтамайды, тек корреляция кідіреді. Көз 15 минут үзілсе, ол да бөлек ескерту.",
    },
    {
      num: 8,
      text: "Архитектураның тиімділігін қандай көрсеткіштермен бағалауға болады?",
      answer:
        "Сызбаның өзі көрсеткіш емес. Өлшенетіні: MFA қамтуы, EDR агентінің үлесі, рұқсатсыз ішкі ағын саны, журнал көзінің үзілуі, анықтау уақыты, көшірме сынағының жасы, патч кешігуі және №6 шкаласындағы қалдық тәуекел. Көрсеткіш шектен асқанда жауаптыға ескерту түсуі керек. Сынақ өтпеген көшірме бар дана болып саналмайды.",
    },
  ],
  conclusion: {
    text:
      "Smart Campus №6 нысанымен бір шекарада қалды. Он үш талап жазылды, әрқайсысы нақты тәуекелге байланды. Сызбада Internet, қонақ желісі, DMZ, пайдаланушылар, сервер, әкімшілік, көшірме және мониторинг бар. DMZ қоймаға бармайды, VPN дерекқорға созылмайды, көшірмені өндіріс тіркелгісі өшірмейді, журнал SIEM-ге бір бағытта кетеді. Алты құралдың орны, істен шығуы және баламасы бөлек. Электр үзілісі қабылданған күйінде қалды. Көшірме сынағы мен тіркеушідегі DLP әлі ашық қалдық.",
    recs: [
      "DMZ-ден дерекқор портын ашпау.",
      "VPN-ды MFA-сыз қоспау және тоннельді қоймаға созбау.",
      "Көшірме VLAN-ын өндіріс тіркелгісінен жабу.",
      "Журнал көзі 15 минут үзілсе SIEM ескерту берсін.",
      "№7 қалпына келтіру сынағын 60 күн ішінде өткізу.",
    ],
  },
  literature: [
    { n: "1", title: "NIST SP 800-207. Zero Trust Architecture", note: "Сенім орналасуына қарай берілмейді. Әр ағын шекарада бөлек тексеріледі.", source: "csrc.nist.gov", url: "https://csrc.nist.gov/pubs/sp/800/207/final" },
    { n: "2", title: "NIST SP 800-53 Rev. 5. Security and Privacy Controls", note: "Қолжетімділік, аудит, жүйе қорғанысы және үздіксіздік бақылауларының құрылымы.", source: "csrc.nist.gov", url: "https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final" },
    { n: "3", title: "ISO/IEC 27033-1. Network security — Overview and concepts", note: "Желіні сегменттеу және аймақтар арасындағы шлюз.", source: "iso.org", url: "https://www.iso.org/standard/63461.html" },
    { n: "4", title: "NIST SP 800-41 Rev. 1. Guidelines on Firewalls and Firewall Policy", note: "Шекаралық сүзгі саясаты және default deny.", source: "csrc.nist.gov", url: "https://csrc.nist.gov/pubs/sp/800/41/r1/final" },
  ],
};

function lab8Zone(id) {
  return LAB8.zones.find((zone) => zone.id === id);
}

function lab8ZoneName(id) {
  const zone = lab8Zone(id);
  return zone ? zone.name : id;
}

function lab8Svg() {
  const boxes = LAB8.zones
    .map((zone) => {
      const cx = zone.x + zone.w / 2;
      const cy = zone.y + zone.h / 2;
      return `
        <g class="arch-node" data-zone="${zone.id}" tabindex="0" role="button" aria-label="${zone.name}">
          <rect x="${zone.x}" y="${zone.y}" width="${zone.w}" height="${zone.h}" rx="12" style="fill:${zone.fill};stroke:${zone.color}" />
          <text class="arch-title" x="${cx}" y="${cy - 8}">${zone.name}</text>
          <text class="arch-sub" x="${cx}" y="${cy + 14}">${zone.sub}</text>
        </g>`;
    })
    .join("");
  const edges = LAB8.links
    .filter((link) => link.d)
    .map((link) => {
      const width = Math.ceil(link.label.length * 7.1 + 18);
      return `
        <path class="arch-edge arch-${link.kind}" data-from="${link.from}" data-to="${link.to}" d="${link.d}" />
        <g class="arch-tag${link.kind === "deny" ? " is-deny" : ""}" data-from="${link.from}" data-to="${link.to}">
          <rect x="${link.lx - width / 2}" y="${link.ly - 10}" width="${width}" height="20" rx="9"></rect>
          <text x="${link.lx}" y="${link.ly + 1}">${link.label}</text>
        </g>`;
    })
    .join("");
  return `
    <svg class="arch-svg" viewBox="0 0 1040 572" role="img" aria-label="Smart Campus қорғаныс архитектурасының сызбасы">
      <defs>
        <marker id="lab8-arrow" viewBox="0 0 10 10" markerWidth="12" markerHeight="12" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 1.2 L 9 5 L 0 8.8 Z" fill="#243056" />
        </marker>
        <marker id="lab8-mgmt" viewBox="0 0 10 10" markerWidth="12" markerHeight="12" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 1.2 L 9 5 L 0 8.8 Z" fill="#5c3d7a" />
        </marker>
        <marker id="lab8-log" viewBox="0 0 10 10" markerWidth="12" markerHeight="12" refX="8" refY="5" orient="auto" markerUnits="userSpaceOnUse">
          <path d="M 0 1.2 L 9 5 L 0 8.8 Z" fill="#1a4f6e" />
        </marker>
      </defs>
      ${edges}
      ${boxes}
    </svg>`;
}

function bindLab8() {
  const root = document.querySelector(".lab8");
  if (!root || root.dataset.bound) return;
  root.dataset.bound = "1";

  const svg = root.querySelector(".arch-svg");
  const panel = root.querySelector("#arch-panel");
  const note = root.querySelector("#flow-note");

  function applyReq(kind) {
    root.querySelectorAll("[data-req-filter]").forEach((chip) => {
      const on = chip.dataset.reqFilter === kind;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll("#req-table tbody tr").forEach((row) => {
      row.hidden = kind !== "all" && row.dataset.kind !== kind;
    });
    const shown = root.querySelectorAll("#req-table tbody tr:not([hidden])").length;
    const reqNote = root.querySelector("#req-note");
    if (reqNote) {
      reqNote.textContent =
        kind === "all"
          ? `${LAB8.requirements.length} талап. Түрін таңдасаңыз, сол қатар қалады.`
          : `${shown} талап.`;
    }
  }

  function applyZone(id) {
    root.querySelectorAll("[data-zone-filter]").forEach((chip) => {
      const on = chip.dataset.zoneFilter === id;
      chip.classList.toggle("is-on", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
    root.querySelectorAll("#flow-table tbody tr").forEach((row) => {
      const zones = (row.dataset.zones || "").split(" ");
      row.hidden = id !== "all" && !zones.includes(id);
    });
    const linked = new Set();
    if (id !== "all") {
      linked.add(id);
      LAB8.links.forEach((link) => {
        if (link.from === id || link.to === id) {
          linked.add(link.from);
          linked.add(link.to);
        }
      });
    }
    if (svg) {
      svg.classList.toggle("is-active", id !== "all");
      svg.querySelectorAll(".arch-node").forEach((node) => {
        const zoneId = node.dataset.zone;
        node.classList.toggle("is-on", zoneId === id);
        node.classList.toggle("is-dim", id !== "all" && !linked.has(zoneId));
      });
      svg.querySelectorAll(".arch-edge, .arch-tag").forEach((edge) => {
        const on = id !== "all" && (edge.dataset.from === id || edge.dataset.to === id);
        edge.classList.toggle("is-on", on);
      });
    }
    const shown = root.querySelectorAll("#flow-table tbody tr:not([hidden])").length;
    if (id === "all") {
      if (note) note.textContent = `${LAB8.links.length} байланыс. Аймақты таңдасаңыз, сол аймақтың кірісі мен шығысы қалады.`;
      if (panel) {
        panel.innerHTML = "<h3>Сенім аймақтары</h3><p>Сызбадан аймақты таңдаңыз. Тұтас сызық — дерек ағыны. Күлгін үзік — басқару. Көк — журнал. Қызыл үзік — тыйым.</p>";
      }
      return;
    }
    const zone = lab8Zone(id);
    if (!zone || !panel) return;
    const flows = LAB8.links
      .filter((link) => link.from === id || link.to === id)
      .map((link) => `<li><strong>${link.decision}.</strong> ${lab8ZoneName(link.from)} → ${lab8ZoneName(link.to)}: ${link.proto}. ${link.control}.</li>`)
      .join("");
    if (note) note.textContent = `${zone.name}: ${shown} байланыс.`;
    panel.innerHTML = `<h3>${zone.name}</h3><p>${zone.text}</p><p class="meta"><span>Деңгей</span>${zone.level} · VLAN ${zone.vlan}</p><ul>${flows}</ul>`;
  }

  root.addEventListener("click", (event) => {
    const req = event.target.closest("[data-req-filter]");
    if (req) {
      applyReq(req.dataset.reqFilter);
      return;
    }
    const chip = event.target.closest("[data-zone-filter]");
    const node = event.target.closest(".arch-node[data-zone]");
    const id = chip?.dataset.zoneFilter || node?.dataset.zone;
    if (id) applyZone(id);
  });

  root.addEventListener("keydown", (event) => {
    const node = event.target.closest?.(".arch-node[data-zone]");
    if (!node || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    applyZone(node.dataset.zone);
  });
}

function viewLab8() {
  const tasks = LAB8.tasks
    .map(
      (task, i) => `
      <article class="task-card reveal" style="--d:${i * 0.05}s">
        <span class="task-n">${task.n}</span>
        <h3>${task.title}</h3>
        <p>${task.text}</p>
      </article>`
    )
    .join("");

  const inside = LAB8.inside.map((item) => `<li>${item}</li>`).join("");
  const outside = LAB8.outside.map((item) => `<li>${item}</li>`).join("");

  const users = LAB8.users
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.role}</th>
        <td>${item.place}</td>
        <td>${item.trust}</td>
        <td>${item.limit}</td>
      </tr>`
    )
    .join("");

  const principles = LAB8.principles
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.name}</th>
        <td>${item.how}</td>
      </tr>`
    )
    .join("");

  const reqChips = [
    ["all", "Барлығы"],
    ["f", "Функционалдық"],
    ["n", "Функционалдық емес"],
  ]
    .map(
      ([id, label], index) =>
        `<button type="button" class="chip${index === 0 ? " is-on" : ""}" data-req-filter="${id}" aria-pressed="${index === 0 ? "true" : "false"}">${label}</button>`
    )
    .join("");

  const requirements = LAB8.requirements
    .map(
      (item) => `
      <tr data-kind="${item.kind}">
        <th scope="row">${item.id}</th>
        <td class="${item.kind === "f" ? "req-f" : "req-n"}">${item.kindLabel}</td>
        <td>${item.text}</td>
        <td>${item.asset}</td>
        <td>${item.risk}</td>
      </tr>`
    )
    .join("");

  const zoneCards = LAB8.zones
    .map(
      (zone) => `
      <article class="process-card" style="border-left: 4px solid ${zone.color}">
        <span class="cat" style="background:${zone.color};color:#fff">${zone.sub}</span>
        <h3>${zone.name}</h3>
        <p>${zone.text}</p>
      </article>`
    )
    .join("");

  const zoneChips = [
    `<button type="button" class="chip is-on" data-zone-filter="all" aria-pressed="true">Барлығы</button>`,
    ...LAB8.zones.map(
      (zone) =>
        `<button type="button" class="chip" data-zone-filter="${zone.id}" aria-pressed="false">${zone.name}</button>`
    ),
  ].join("");

  const flows = LAB8.links
    .map((link) => {
      const mark = link.decision === "Рұқсат" ? "rule-allow" : "rule-deny";
      return `
        <tr data-zones="${link.from} ${link.to}">
          <th scope="row">${link.n}</th>
          <td class="${mark}">${link.decision}</td>
          <td>${lab8ZoneName(link.from)} → ${lab8ZoneName(link.to)}</td>
          <td>${link.proto}</td>
          <td>${link.control}</td>
          <td>${link.why}</td>
        </tr>`;
    })
    .join("");

  const layers = LAB8.layers
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.name}</th>
        <td>${item.aim}</td>
        <td>${item.how}</td>
      </tr>`
    )
    .join("");

  const technologies = LAB8.technologies
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.n}</th>
        <td>${item.name}</td>
        <td>${item.aim}</td>
        <td>${item.use}</td>
      </tr>`
    )
    .join("");

  const toolRows = LAB8.tools
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.name}</th>
        <td>${item.risk}</td>
        <td>${item.place}</td>
        <td>${item.need}</td>
        <td>${item.metric}</td>
      </tr>`
    )
    .join("");

  const toolCards = LAB8.tools
    .map(
      (item) => `
      <article class="scenario-card arch-tool">
        <header><h3>${item.name}</h3></header>
        <p><strong>Журнал.</strong> ${item.logs}</p>
        <p><strong>Істен шығу.</strong> ${item.fail}</p>
        <p><strong>Балама.</strong> ${item.alt}</p>
      </article>`
    )
    .join("");

  const residual = LAB8.residual
    .map(
      (item) => `
      <tr>
        <th scope="row">${item.name}</th>
        <td>${item.why}</td>
        <td>${item.left}</td>
      </tr>`
    )
    .join("");

  const questions = LAB8.questions
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

  const literature = LAB8.literature
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

  const recs = LAB8.conclusion.recs
    .map((text, i) => `<li class="rec-item"><span>${i + 1}</span>${text}</li>`)
    .join("");

  const functional = LAB8.requirements.filter((item) => item.kind === "f").length;
  const nonFunctional = LAB8.requirements.length - functional;

  return `
    <div class="view lab8">
      <a class="back reveal" href="#labs">← Барлық зертханалар</a>
      <section class="lab3-hero" id="home">
        <div>
          <p class="eyebrow reveal">${LAB8.lab}</p>
          <h1 class="hero-title reveal">${LAB8.title}</h1>
          <p class="hero-lead reveal">${LAB8.lead}</p>
          <div class="meta-row reveal">
            <span><em>Автор</em>${COURSE.author}</span>
            <span><em>Нысан</em>${COURSE.campus}</span>
          </div>
        </div>
        <div class="stat-stack reveal" aria-label="Архитектура жиынтығы">
          <div><strong>${LAB8.requirements.length}</strong><span>талап</span></div>
          <div><strong>${LAB8.zones.length}</strong><span>сенім аймағы</span></div>
          <div><strong>${LAB8.tools.length}</strong><span>қорғаныс құралы</span></div>
        </div>
      </section>

      <nav class="report-nav reveal" aria-label="Есеп мазмұны">
        <a href="#lab/8">1. Мақсат</a>
        <a href="#lab/8/object">2. Нысан</a>
        <a href="#lab/8/requirements">3. Талап</a>
        <a href="#lab/8/zones">4. Сызба</a>
        <a href="#lab/8/tools">5. Құрал</a>
        <a href="#lab/8/residual">6. Қалдық</a>
        <a href="#lab/8/quiz">7. Сұрақтар</a>
        <a href="#lab/8/conclusion">8. Қорытынды</a>
      </nav>

      <section class="block" id="goal">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 1</p>
          <h2>Мақсат және тапсырма</h2>
        </div>
        <div class="goal-card reveal">
          <h3>Жұмыстың мақсаты</h3>
          <p>${LAB8.goal}</p>
          <p class="meta"><span>Жабдық</span>${LAB8.equipment}</p>
        </div>
        <p class="limit-note reveal">${LAB8.limit}</p>
        <div class="task-grid">${tasks}</div>
      </section>

      <section class="block" id="object">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 2</p>
          <h2>Жүйе сипаттамасы және жобалау шекарасы</h2>
          <p>${LAB8.object.name}</p>
        </div>
        <article class="goal-card reveal">
          <p><strong>Мақсаты.</strong> ${LAB8.object.purpose}</p>
          <p><strong>Шекара.</strong> ${LAB8.object.boundary}</p>
        </article>
        <div class="scope-grid">
          <article class="swot-card swot-s">
            <header><span>Ішінде</span><h3>Жобалау шекарасы</h3></header>
            <ul>${inside}</ul>
          </article>
          <article class="swot-card swot-t">
            <header><span>Сыртында</span><h3>Бұл сызба басқармайды</h3></header>
            <ul>${outside}</ul>
          </article>
        </div>
        <div class="block-head reveal">
          <h2>Пайдаланушылар және сенім</h2>
          <p>Сенім деңгейі адамның рөліне байланған. Қонақ пен интернет — 0. Пайдаланушы — 2. Әкімшілік — 4.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-users">
            <thead>
              <tr>
                <th>Рөл</th>
                <th>Сегмент</th>
                <th>Сенім</th>
                <th>Шектеу</th>
              </tr>
            </thead>
            <tbody>${users}</tbody>
          </table>
        </div>
        <div class="block-head reveal">
          <h2>Жобалау қағидаты қайда отырды</h2>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-principle">
            <thead>
              <tr>
                <th>Қағидат</th>
                <th>Осы жобада</th>
              </tr>
            </thead>
            <tbody>${principles}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="requirements">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 3</p>
          <h2>Қауіпсіздік талаптары</h2>
          <p>${functional} функционалдық және ${nonFunctional} функционалдық емес талап. Әр жол №6 тәуекеліне байланған.</p>
        </div>
        <div class="chip-row reveal" role="group" aria-label="Талап түрі">${reqChips}</div>
        <p class="role-note reveal" id="req-note">${LAB8.requirements.length} талап. Түрін таңдасаңыз, сол қатар қалады.</p>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-req" id="req-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Түрі</th>
                <th>Талап</th>
                <th>Актив</th>
                <th>Тәуекел</th>
              </tr>
            </thead>
            <tbody>${requirements}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="zones">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 4</p>
          <h2>Сенім аймақтары және деректер ағыны</h2>
          <p>Қонақ желісі пайдаланушылар VLAN-ына кірмейді. Сервер ішінде қолданба мен қойма бөлек микросегмент.</p>
        </div>
        <div class="process-grid">${zoneCards}</div>
        <div class="block-head reveal">
          <h2>Архитектуралық сызба</h2>
          <p>Аймақты басыңыз. Тұтас сызық — дерек. Күлгін үзік — басқару. Көк — журнал. Қызыл үзік — тыйым.</p>
        </div>
        <div class="dep-wrap reveal">${lab8Svg()}</div>
        <p class="dep-legend reveal">
          <span><i class="arch-key arch-key-allow"></i>Дерек ағыны</span>
          <span><i class="arch-key arch-key-mgmt"></i>Басқару</span>
          <span><i class="arch-key arch-key-log"></i>Журнал</span>
          <span><i class="arch-key arch-key-deny"></i>Тыйым</span>
        </p>
        <article class="dep-panel reveal" id="arch-panel">
          <h3>Сенім аймақтары</h3>
          <p>Сызбадан аймақты таңдаңыз. Тұтас сызық — дерек ағыны. Күлгін үзік — басқару. Көк — журнал. Қызыл үзік — тыйым.</p>
        </article>
        <div class="chip-row reveal" id="zone-filters">${zoneChips}</div>
        <p class="role-note reveal" id="flow-note">${LAB8.links.length} байланыс. Аймақты таңдасаңыз, сол аймақтың кірісі мен шығысы қалады.</p>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-flow" id="flow-table">
            <thead>
              <tr>
                <th>№</th>
                <th>Шешім</th>
                <th>Бағыт</th>
                <th>Хаттама</th>
                <th>Қорғаныс</th>
                <th>Не үшін</th>
              </tr>
            </thead>
            <tbody>${flows}</tbody>
          </table>
        </div>
      </section>

      <section class="block" id="tools">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 5</p>
          <h2>Қорғаныс технологиясын таңдау</h2>
          <p>Қабат бір құралға жиналмайды. Төменде әр қабаттың осы кампустағы орны, содан кейін технология мен құралдың негіздемесі.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-layer">
            <thead>
              <tr>
                <th>Деңгей</th>
                <th>Қорғау мақсаты</th>
                <th>Smart Campus-та</th>
              </tr>
            </thead>
            <tbody>${layers}</tbody>
          </table>
        </div>
        <div class="block-head reveal">
          <h2>Технология және хаттама</h2>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-tech">
            <thead>
              <tr>
                <th>№</th>
                <th>Технология</th>
                <th>Мақсаты</th>
                <th>Жобада қолданылуы</th>
              </tr>
            </thead>
            <tbody>${technologies}</tbody>
          </table>
        </div>
        <div class="block-head reveal">
          <h2>Құралдың негіздемесі</h2>
          <p>Алты құрал. Өнім атауы жоқ. Кестеде тәуекел, орын, талап және көрсеткіш. Картада журнал, істен шығу және балама.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-tool">
            <thead>
              <tr>
                <th>Құрал</th>
                <th>Жабылатын тәуекел</th>
                <th>Орналасуы</th>
                <th>Негізгі талап</th>
                <th>Бақылау көрсеткіші</th>
              </tr>
            </thead>
            <tbody>${toolRows}</tbody>
          </table>
        </div>
        <div class="scenario-list">${toolCards}</div>
      </section>

      <section class="block" id="residual">
        <div class="block-head reveal">
          <p class="eyebrow">Есеп · 6</p>
          <h2>Шектеу және қалдық тәуекел</h2>
          <p>Архитектура тәуекелді нөлге түсірмейді. Төменде сызба жаппайтын нәрсе және ол қалай қалдырылғаны.</p>
        </div>
        <div class="table-wrap reveal">
          <table class="stride-matrix access-matrix lab8-left">
            <thead>
              <tr>
                <th>Не қалады</th>
                <th>Неге</th>
                <th>Қалай ұсталады</th>
              </tr>
            </thead>
            <tbody>${residual}</tbody>
          </table>
        </div>
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
          <h2>Қорытынды және ұсынымдар</h2>
        </div>
        <article class="goal-card reveal">
          <p>${LAB8.conclusion.text}</p>
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
