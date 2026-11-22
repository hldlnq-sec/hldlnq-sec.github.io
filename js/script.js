/*
 * Personal cybersecurity portfolio
 * Before publishing, edit the PROFILE object below with real contact details.
 * The terminal is a client-side demonstration: it does not execute shell commands.
 */

const PROFILE = {
  // EDIT THIS OBJECT FIRST. It is the single quick-setup point for your personal data.
  name: "HLDLNQ-SEC",
  roleRu: "Студент факультета информационной безопасности · Junior / Internship",
  roleEn: "Information Security Student · Junior / Internship",
  summaryRu: "Студент БГУИР, изучаю сетевую безопасность, Linux и основы тестирования на проникновение. Закрепляю знания в собственной лаборатории и учебных проектах.",
  summaryEn: "Information Security student at BSUIR, learning network security, Linux, and penetration-testing fundamentals through a personal lab and academic projects.",
  university: "Белорусский государственный университет информатики и радиоэлектроники",
  facultyRu: "Факультет информационной безопасности",
  facultyEn: "Faculty of Information Security",
  studyPeriod: "2025—2028",
  gpa: "8.75",
  locationRu: "Минск, Беларусь",
  locationEn: "Minsk, Belarus",
  languages: "RU · EN · FR",
  languageLevelsRu: "Родной · A2–B1 · B1–B2",
  languageLevelsEn: "Native · A2–B1 · B1–B2",
  scholarshipRu: "Стипендиат",
  scholarshipEn: "Scholarship recipient",
  // Add only public contact details you are comfortable sharing. Empty fields stay hidden.
  email: "y.rimashevski.work@gmail.com",
  github: "https://github.com/hldlnq-sec",
  linkedin: "",
  telegram: "https://t.me/hldlnq",
  instagram: "https://www.instagram.com/hldlnq",
};

function applyProfileData() {
  const values = {
    name: PROFILE.name,
    role: currentLanguage === "ru" ? PROFILE.roleRu : PROFILE.roleEn,
    summary: currentLanguage === "ru" ? PROFILE.summaryRu : PROFILE.summaryEn,
    university: PROFILE.university,
    faculty: currentLanguage === "ru" ? PROFILE.facultyRu : PROFILE.facultyEn,
    studyPeriod: PROFILE.studyPeriod,
    gpa: PROFILE.gpa,
    location: currentLanguage === "ru" ? PROFILE.locationRu : PROFILE.locationEn,
    languages: PROFILE.languages,
    languageLevels: currentLanguage === "ru" ? PROFILE.languageLevelsRu : PROFILE.languageLevelsEn,
    scholarship: currentLanguage === "ru" ? PROFILE.scholarshipRu : PROFILE.scholarshipEn,
  };
  document.querySelectorAll("[data-profile]").forEach((node) => {
    const value = values[node.dataset.profile];
    if (typeof value === "string" && value.trim()) node.textContent = value;
  });
  document.querySelectorAll("[data-profile-name]").forEach((node) => {
    node.textContent = PROFILE.name === "YOUR NAME" ? "YOUR NAME" : PROFILE.name;
  });
}

const translations = {
  ru: {
    skip: "Перейти к содержанию", navAbout: "Обо мне", navUniversity: "БГУИР", navExpertise: "Компетенции", navProjects: "Проекты", navEducation: "Образование", navContact: "Контакты", headerCta: "Связаться",
    heroEyebrow: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ / ПОРТФОЛИО", heroTitleA: "Изучаю угрозы.", heroTitleB: "Строю понимание", heroTitleC: "цифровой защиты.", heroLead: "Студент факультета информационной безопасности БГУИР. Изучаю сетевую безопасность, Linux и основы тестирования на проникновение — и закрепляю знания на собственных учебных проектах.", heroProjects: "Смотреть проекты", heroContact: "Обсудить возможность", heroRange: "Исследовать Cyber Range", metaFocus: "ФОКУС", metaStatus: "СТАТУС", metaOpen: "Открыт к стажировке", codeStatus: "ПРОФИЛЬ АКТИВЕН", heroScroll: "ЛИСТАЙТЕ, ЧТОБЫ ИЗУЧИТЬ ПРОФИЛЬ",
    aboutIndex: "ПРОФИЛЬ", aboutKicker: "НЕМНОГО ОБО МНЕ", aboutTitle: "Интерес к безопасности начинается с <span class=\"text-accent\">понимания систем.</span>", aboutP1: "Я учусь на факультете информационной безопасности Белорусского государственного университета информатики и радиоэлектроники. Мне интересно разбираться в том, как устроены сети и операционные системы, где возникают уязвимости и как выстраиваются базовые механизмы защиты.", aboutP2: "Теорию стараюсь закреплять практикой: развернул изолированную виртуальную лабораторию на Kali Linux и Metasploitable, выполняю сетевые упражнения в Cisco Packet Tracer, изучаю Linux, Windows и основы анализа безопасности.", aboutP3: "Сейчас ищу возможность присоединиться к команде в качестве стажёра или начинающего специалиста, учиться у опытных коллег и постепенно брать на себя реальные технические задачи.", statGpa: "СРЕДНИЙ БАЛЛ", statScholarship: "Стипендиат", statStudy: "ОБУЧЕНИЕ", statLanguages: "ЯЗЫКИ", statLanguageLevels: "Родной · A2–B1 · B1–B2",
    universityIndex: "УНИВЕРСИТЕТ", universityKicker: "МОЯ ОБРАЗОВАТЕЛЬНАЯ СРЕДА", universityTitle: "БГУИР — место, где <span class=\"text-accent\">формируется моя техническая база.</span>", universityText: "Я учусь на факультете информационной безопасности Белорусского государственного университета информатики и радиоэлектроники. Учебная программа помогает выстраивать фундамент в сетях, операционных системах, программировании и принципах информационной безопасности, а самостоятельная практика позволяет закреплять эти знания в лабораторных проектах.", universityFactLocation: "ГОРОД", universityFactFaculty: "ФАКУЛЬТЕТ", universityFactFacultyValue: "Информационной безопасности", universityFactPeriod: "ПЕРИОД ОБУЧЕНИЯ", universityOfficial: "Официальный сайт университета", universityPhotoMain: "Главный корпус · Минск", universityPhotoAerial: "Корпус № 5 · вид с высоты", universityPhotoBuilding: "Учебный корпус № 6", universityPhotoNote: "Фотография учебного корпуса № 5 представлена для визуального контекста. Автор и условия лицензирования указаны под изображением.", universityAltMain: "Главный корпус Белорусского государственного университета информатики и радиоэлектроники", universityAltAerial: "Учебный корпус № 5 БГУИР, вид с высоты", universityAltBuilding: "Учебный корпус № 6 БГУИР", universityGalleryLabel: "Фотографии Белорусского государственного университета информатики и радиоэлектроники", terminalWindowLabel: "Интерактивный терминал с командами профиля",
    terminalStep1Title: "Выберите команду", terminalStep1Text: "Нажмите на одну из подсказок ниже или откройте справочник команд.", terminalStep2Title: "Посмотрите результат", terminalStep2Text: "Ответ появится в окне терминала. Можно вводить команды вручную и нажимать Enter.", terminalStep3Title: "Продолжайте исследовать", terminalStep3Text: "Команды не зависят друг от друга. Для очистки истории используйте clear.", terminalLocalDemo: "ЛОКАЛЬНАЯ ДЕМО-СЕССИЯ", terminalSafetyNote: "Безопасная демонстрация: команды показывают только информацию портфолио и не запускают системные процессы.", terminalCommandsKicker: "СПРАВОЧНИК", terminalCommandsTitle: "Команды, которые можно попробовать", terminalCommandsText: "Нажмите на карточку — команда выполнится автоматически. Или введите её самостоятельно в строке терминала.", terminalCmdHelp: "Показать полный список команд и краткую справку.", terminalCmdWhoami: "Кратко представить профиль, обучение и карьерный фокус.", terminalCmdSkills: "Посмотреть технические навыки и инструменты.", terminalCmdNetwork: "Узнать, с какими сетевыми технологиями я работаю.", terminalCmdLab: "Посмотреть состав и назначение учебной лаборатории.", terminalCmdProjects: "Получить список проектов и перейти к их описанию.", terminalCmdEducation: "Посмотреть образование, GPA и курсы.", terminalCmdContact: "Узнать о доступных способах связи.", terminalCmdClear: "Очистить историю вывода и начать заново.",

    expertiseIndex: "КОМПЕТЕНЦИИ", expertiseKicker: "ЧТО Я ИЗУЧАЮ", expertiseTitle: "Техническая база<br>и <span class=\"text-accent\">направления развития.</span>", expertiseLead: "Мои текущие знания и учебная практика. Уровень навыков — начальный; список отражает технологии, с которыми я знакомлюсь и работаю в учебной среде.", skillNetwork: "Основы сетевой архитектуры и взаимодействия устройств. OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS, базовая настройка и проверка соединений.", skillCyber: "Основы информационной безопасности, знакомство с анализом уязвимостей, моделями безопасности, цифровыми подписями и базовыми концепциями реагирования на инциденты.", skillLinux: "Работа с командной строкой Linux и Windows, основы администрирования и изучение системной информации и событий безопасности Windows.", skillPentest: "Знакомство с методами контролируемого тестирования в собственной лаборатории, анализом поведения уязвимых систем и вводными CTF-заданиями.", toolkitLabel: "ИНСТРУМЕНТЫ И ТЕХНОЛОГИИ",
    terminalIndex: "ИНТЕРАКТИВ", terminalKicker: "ПОПРОБУЙТЕ КОМАНДЫ", terminalTitle: "Загляните в мой <span class=\"text-accent\">терминал.</span>", terminalText: "Это интерактивная версия моего профиля. Через короткие команды можно посмотреть направления обучения, проекты, инструменты и контакты, не переходя по всей странице.", terminalHintLabel: "БЫСТРЫЙ СТАРТ:", terminalWelcome: "Локальная демонстрационная консоль профиля. Начните с help, чтобы увидеть все доступные команды.", terminalPlaceholder: "например, skills или projects...", terminalKeyboardHelp: "ENTER — выполнить команду · ↑ / ↓ — история команд · clear — очистить консоль",
    projectsIndex: "ПРОЕКТЫ", projectsKicker: "ПРАКТИКА И ОБУЧЕНИЕ", projectsTitle: "Практика — мой способ<br><span class=\"text-accent\">закреплять знания.</span>", projectsLead: "Учебные и самостоятельные проекты, в которых я применяю изучаемые концепции. Описания отражают выполненную работу без преувеличения результатов.", projectPersonal: "ЛИЧНЫЙ ПРОЕКТ", projectAcademic: "УЧЕБНЫЙ / ТРЕНИНГОВЫЙ ПРОЕКТ", projectIndependent: "САМОСТОЯТЕЛЬНОЕ ОБУЧЕНИЕ", projectLabText: "Создал изолированную виртуальную среду для изучения анализа уязвимостей и контролируемого тестирования. Настроил Kali Linux и Metasploitable в VirtualBox, изучал поведение системы и сетевое взаимодействие в лабораторных условиях.", projectNetworkText: "Выполнял упражнения по основам сетевой настройки и проверке связности в Cisco Packet Tracer. Работал с концепциями OSI и TCP/IP, адресацией IPv4/IPv6 и назначением DNS, DHCP, HTTP и HTTPS.", projectWindowsText: "Изучал основы безопасности Windows и вводные концепции реагирования на инциденты. Практиковал работу с командной строкой, системной информацией и журналами, имеющими отношение к безопасности.", projectCtfText: "Знакомился с вводными заданиями Capture The Flag, применяя базовые знания информационной безопасности и навыки решения задач. Самостоятельно изучал принципы OSINT и работу с общедоступной информацией.", projectCText: "Разработал учебный проект на языке C для подбора и рекомендации подходящих вакансий. Применял алгоритмические концепции, реализовывал основную логику и обработку данных, тестировал функциональность.", outcomeLabel: "РЕЗУЛЬТАТ", outcomeLab: "Практика работы с виртуализированной лабораторией и базовыми сценариями оценки уязвимостей.", outcomeNetwork: "Закрепление базовых принципов сетевой архитектуры, адресации и взаимодействия протоколов.", outcomeWindows: "Знакомство с источниками системной информации и базовыми подходами к анализу событий.", outcomeCtf: "Первичное знакомство с форматом практических задач и методами анализа открытых источников.",
    educationIndex: "ОБРАЗОВАНИЕ", educationKicker: "ОБУЧЕНИЕ И СЕРТИФИКАТЫ", educationTitle: "Фундамент для <span class=\"text-accent\">дальнейшего роста.</span>", university: "Белорусский государственный университет информатики и радиоэлектроники", faculty: "Факультет информационной безопасности · Бакалавриат", scholarship: "Стипендиат", courseworkLabel: "ПРОФИЛЬНЫЕ ДИСЦИПЛИНЫ", course1: "Информационная безопасность", course2: "Компьютерные сети", course3: "Программирование и алгоритмы", course4: "Операционные системы", course5: "Цифровые подписи", course6: "Модели безопасности", certTitle: "Курсы и сертификаты", certNote: "Также самостоятельно изучал вводные материалы по OSINT (без сертификата).",
    resumeKicker: "08 / РЕЗЮМЕ В PDF", resumeTitle: "Подробности моего<br><span class=\"text-accent\">профессионального профиля.</span>", resumeText: "Подготовлены три версии резюме с разными акцентами — общий профиль информационной безопасности, сетевая безопасность и основы Pentest / Red Team.", resumeGeneral: "Общий профиль ИБ", resumeNetwork: "Сетевая безопасность", resumePentest: "Pentest / Red Team",
    contactIndex: "КОНТАКТЫ", contactKicker: "НА СВЯЗИ", contactTitle: "Давайте обсудим <span class=\"text-accent\">возможности.</span>", contactText: "Открыт к стажировкам, Junior-возможностям и профессиональному общению в сфере информационной безопасности. Напишите мне через удобный канал или посмотрите мои проекты в профессиональных профилях.", contactGithubMeta: "КОД И ПРОЕКТЫ", contactLinkedinMeta: "ПРОФЕССИОНАЛЬНЫЕ КОНТАКТЫ", contactTelegramMeta: "БЫСТРАЯ СВЯЗЬ", contactInstagramMeta: "ЛИЧНЫЙ ПРОФИЛЬ", contactEmailMeta: "ЭЛЕКТРОННАЯ ПОЧТА", contactSetupNote: "Ссылки на профили появятся после заполнения контактных данных в файле js/script.js перед публикацией.", footerTagline: "Постоянное обучение. Осознанная практика. Ответственный подход к безопасности.", backTop: "НАВЕРХ ↑", footerRights: "Все права защищены.", footerLocation: "ПОРТФОЛИО ПО ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ",
    rangeIndex: "CYBER RANGE",
    rangeKicker: "ИНТЕРАКТИВНАЯ ЛАБОРАТОРИЯ",
    rangeTitle: "Исследуй сеть. <span class=\"text-accent\">Разбери инцидент.</span>",
    rangeLead: "Небольшая учебная симуляция: изучи условную сетевую топологию, запусти визуальную трассировку и попробуй разобрать набор тестовых событий. Все данные вымышлены, сетевых запросов не выполняется.",
    networkPanelTitle: "КАРТА УЧЕБНОЙ СЕТИ",
    networkPanelTag: "LOCAL SIMULATION / 01",
    networkPanelText: "Выбери узел, чтобы посмотреть его роль. Кнопка трассировки последовательно подсветит маршрут пакета.",
    networkNodeGateway: "Шлюз",
    networkNodeFirewall: "Firewall",
    networkNodeSensor: "IDS-сенсор",
    networkNodeWorkstation: "Рабочая станция",
    networkNodeServer: "Сервер",
    networkNodeSelect: "ОТКРЫТЬ УЗЕЛ",
    networkDetailKicker: "КАРТОЧКА УЗЛА",
    networkDetailAddress: "ДЕМО-АДРЕС",
    networkDetailRole: "РОЛЬ В СХЕМЕ",
    networkDetailDefault: "Выбери один из узлов на карте. Ты увидишь его назначение в этой условной учебной сети.",
    networkTraceStart: "Запустить трассировку",
    networkTraceStop: "Остановить трассировку",
    networkTraceAgain: "Повторить трассировку",
    networkReset: "Сбросить выбор",
    networkStatusReady: "Симуляция готова. Это иллюстрация, а не реальная сеть.",
    networkStatusRunning: "Визуальная трассировка выполняется локально…",
    networkStatusComplete: "Маршрут пройден: все узлы учебной схемы обработаны.",
    networkStatusStopped: "Трассировка остановлена пользователем.",
    networkSafety: "СХЕМА И IP-АДРЕСА ДЕМОНСТРАЦИОННЫЕ. НИКАКИЕ УСТРОЙСТВА И СЕТИ НЕ СКАНИРУЮТСЯ.",
    missionKicker: "МИССИЯ 01 / INCIDENT RESPONSE",
    missionTitle: "Разбери тестовый инцидент",
    missionText: "Представь, что ты дежурный аналитик. Прочитай три ситуации и выбери наиболее обоснованное действие. Это учебный сценарий, а не проверка реальной инфраструктуры.",
    missionQuestionLabel: "ВОПРОС",
    missionNext: "Следующий вопрос",
    missionFinish: "Завершить миссию",
    missionRestart: "Пройти ещё раз",
    missionCorrect: "Верно. Хорошее решение — опираться на признаки и сохранять контекст события.",
    missionIncorrect: "Не совсем. Посмотри на объяснение и попробуй применить его в следующей ситуации.",
    missionQuestionCount: "ВОПРОС",
    missionScoreLabel: "РЕЗУЛЬТАТ",
    missionCompleteTitle: "Миссия завершена",
    missionCompleteText: "Твой результат: {score} из 3. Сценарий завершён — можешь повторить его и сравнить решения.",
    missionCompletePerfect: "Отлично: все три решения верны. Ты внимательно читаешь события и выбираешь осторожные шаги.",
    missionCompletePartial: "Миссия завершена. Изучи пояснения к ответам и попробуй ещё раз.",
    achievementsTitle: "ДОСТИЖЕНИЯ СЕССИИ",
    achievementLocked: "ЗАБЛОКИРОВАНО",
    achievementUnlocked: "ОТКРЫТО",
    achievementExplorer: "Исследователь сети",
    achievementExplorerText: "Открыл все пять узлов топологии.",
    achievementTracer: "Аналитик маршрута",
    achievementTracerText: "Завершил визуальную трассировку.",
    achievementResponder: "Incident responder",
    achievementResponderText: "Завершил учебную миссию.",
    cyberRangeSafety: "Вся интерактивность работает локально в браузере. Нет сканирования, подключения к внешним адресам, запуска команд ОС или сбора пользовательских данных.",
    terminalCmdMap: "Открыть интерактивную карту учебной сети.",
    terminalCmdTrace: "Запустить визуальную трассировку маршрута.",
    terminalCmdMission: "Перейти к учебному сценарию реагирования.",
    terminalUnknown: "Команда не найдена. Введите help, чтобы посмотреть доступные команды.",
  },
  en: {
    skip: "Skip to content", navAbout: "About", navUniversity: "BSUIR", navExpertise: "Expertise", navProjects: "Projects", navEducation: "Education", navContact: "Contact", headerCta: "Get in touch",
    heroEyebrow: "INFORMATION SECURITY / PORTFOLIO", heroTitleA: "Studying threats.", heroTitleB: "Building an understanding", heroTitleC: "of digital defense.", heroLead: "Information Security student at BSUIR. I study network security, Linux, and penetration-testing fundamentals, then reinforce that knowledge through hands-on academic and personal projects.", heroProjects: "Explore projects", heroContact: "Discuss an opportunity", heroRange: "Explore Cyber Range", metaFocus: "FOCUS", metaStatus: "STATUS", metaOpen: "Open to internships", codeStatus: "PROFILE ACTIVE", heroScroll: "SCROLL TO EXPLORE THE PROFILE",
    aboutIndex: "PROFILE", aboutKicker: "A LITTLE ABOUT ME", aboutTitle: "My interest in security starts with <span class=\"text-accent\">understanding systems.</span>", aboutP1: "I study at the Faculty of Information Security at the Belarusian State University of Informatics and Radioelectronics. I enjoy understanding how networks and operating systems work, where vulnerabilities arise, and how foundational security mechanisms are designed.", aboutP2: "I reinforce theory with practice: I built an isolated virtual lab using Kali Linux and Metasploitable, complete networking exercises in Cisco Packet Tracer, and study Linux, Windows, and security analysis fundamentals.", aboutP3: "I am looking for an opportunity to join a team as an intern or junior-level candidate, learn from experienced colleagues, and gradually take on real technical tasks.", statGpa: "GRADE POINT AVERAGE", statScholarship: "Scholarship recipient", statStudy: "EDUCATION", statLanguages: "LANGUAGES", statLanguageLevels: "Native · A2–B1 · B1–B2",
    universityIndex: "UNIVERSITY", universityKicker: "MY ACADEMIC ENVIRONMENT", universityTitle: "BSUIR is where <span class=\"text-accent\">I am building my technical foundation.</span>", universityText: "I study at the Faculty of Information Security at the Belarusian State University of Informatics and Radioelectronics. The programme helps me build a foundation in networking, operating systems, programming, and information-security principles, while independent practice lets me reinforce this knowledge through lab projects.", universityFactLocation: "LOCATION", universityFactFaculty: "FACULTY", universityFactFacultyValue: "Information Security", universityFactPeriod: "STUDY PERIOD", universityOfficial: "University official website", universityPhotoMain: "Main building · Minsk", universityPhotoAerial: "Academic building No. 5 · aerial view", universityPhotoBuilding: "Academic building No. 6", universityPhotoNote: "The photograph of academic building No. 5 is included for visual context. Photographer credit and license details are provided below the image.", universityAltMain: "Main building of the Belarusian State University of Informatics and Radioelectronics", universityAltAerial: "BSUIR academic building No. 5, aerial view", universityAltBuilding: "BSUIR academic building No. 6", universityGalleryLabel: "Photographs of the Belarusian State University of Informatics and Radioelectronics", terminalWindowLabel: "Interactive portfolio command terminal",
    terminalStep1Title: "Choose a command", terminalStep1Text: "Click one of the shortcuts or choose a command from the reference below.", terminalStep2Title: "Read the output", terminalStep2Text: "The result appears in the terminal window. You can also type a command and press Enter.", terminalStep3Title: "Explore further", terminalStep3Text: "Commands are independent. Use clear to remove the output and start again.", terminalLocalDemo: "LOCAL DEMO SESSION", terminalSafetyNote: "Safe demo: commands only display portfolio information and do not run system processes.", terminalCommandsKicker: "REFERENCE", terminalCommandsTitle: "Commands to try", terminalCommandsText: "Click a card to run its command, or type it yourself in the terminal input.", terminalCmdHelp: "Show the full command list and a short help message.", terminalCmdWhoami: "See a short profile summary, study details, and career focus.", terminalCmdSkills: "Review technical foundations and tools.", terminalCmdNetwork: "See the networking technologies I study and practise.", terminalCmdLab: "Explore the setup and purpose of my learning lab.", terminalCmdProjects: "List my projects and find their descriptions on the page.", terminalCmdEducation: "Review education, GPA, and completed courses.", terminalCmdContact: "See the available ways to contact me.", terminalCmdClear: "Clear the terminal output and start over.",

    expertiseIndex: "EXPERTISE", expertiseKicker: "AREAS I STUDY", expertiseTitle: "Technical foundations<br>and <span class=\"text-accent\">areas of development.</span>", expertiseLead: "My current knowledge and hands-on learning. These are foundational skills; the list reflects technologies I have studied and used in an academic or lab environment.", skillNetwork: "Networking architecture and device communication fundamentals. OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS, basic configuration, and connectivity testing.", skillCyber: "Information security fundamentals, introduction to vulnerability analysis, security models, digital signatures, and basic incident response concepts.", skillLinux: "Linux and Windows command-line use, basic administration concepts, and an introduction to Windows system information and security events.", skillPentest: "An introduction to controlled testing in a personal lab, observing vulnerable systems, and working through introductory CTF exercises.", toolkitLabel: "TOOLS & TECHNOLOGIES",
    terminalIndex: "INTERACTIVE", terminalKicker: "TRY A FEW COMMANDS", terminalTitle: "Take a look at my <span class=\"text-accent\">terminal.</span>", terminalText: "An interactive version of my profile. Explore my learning areas, projects, tools, and contact details through short terminal commands instead of browsing the whole page.", terminalHintLabel: "QUICK START:", terminalWelcome: "Local profile demo console. Start with help to see all available commands.", terminalPlaceholder: "e.g. skills or projects...", terminalKeyboardHelp: "ENTER — run command · ↑ / ↓ — command history · clear — reset the console",
    projectsIndex: "PROJECTS", projectsKicker: "PRACTICE & LEARNING", projectsTitle: "Practice is how I <br><span class=\"text-accent\">reinforce knowledge.</span>", projectsLead: "Academic and independent projects where I apply the concepts I study. The descriptions are intentionally factual and do not overstate the outcomes.", projectPersonal: "PERSONAL PROJECT", projectAcademic: "ACADEMIC / TRAINING PROJECT", projectIndependent: "INDEPENDENT LEARNING", projectLabText: "Built an isolated virtual environment to study vulnerability analysis and controlled security testing. Configured Kali Linux and Metasploitable in VirtualBox and explored system behavior and network interaction in a lab setting.", projectNetworkText: "Completed networking configuration and connectivity exercises in Cisco Packet Tracer. Worked with OSI and TCP/IP concepts, IPv4/IPv6 addressing, and the roles of DNS, DHCP, HTTP, and HTTPS.", projectWindowsText: "Studied Windows security fundamentals and introductory incident response concepts. Practiced command-line interaction and reviewed system information and security-relevant logs.", projectCtfText: "Worked through introductory Capture The Flag exercises, applying foundational security knowledge and problem-solving skills. Independently studied OSINT principles and the use of publicly available information.", projectCText: "Developed an academic project in C to select and recommend suitable vacancies. Applied algorithmic concepts, implemented core logic and data processing, and tested the functionality.", outcomeLabel: "OUTCOME", outcomeLab: "Hands-on experience with a virtualized lab and introductory vulnerability-assessment scenarios.", outcomeNetwork: "Reinforced foundational concepts in network architecture, addressing, and protocol communication.", outcomeWindows: "Initial familiarity with system information sources and basic approaches to event analysis.", outcomeCtf: "An introduction to practical challenge formats and open-source information analysis.",
    educationIndex: "EDUCATION", educationKicker: "STUDY & CERTIFICATIONS", educationTitle: "A foundation for <span class=\"text-accent\">continued growth.</span>", university: "Belarusian State University of Informatics and Radioelectronics", faculty: "Faculty of Information Security · Bachelor's degree", scholarship: "Scholarship recipient", courseworkLabel: "RELEVANT COURSEWORK", course1: "Information Security", course2: "Computer Networks", course3: "Programming & Algorithms", course4: "Operating Systems", course5: "Digital Signatures", course6: "Security Models", certTitle: "Courses & certifications", certNote: "Also completed self-directed introductory OSINT study (no certificate).",
    resumeKicker: "08 / PDF RESUMES", resumeTitle: "More details about my<br><span class=\"text-accent\">professional profile.</span>", resumeText: "Three resume versions are available, each with a different focus: general information security, network security, and Pentest / Red Team foundations.", resumeGeneral: "General InfoSec profile", resumeNetwork: "Network Security", resumePentest: "Pentest / Red Team",
    contactIndex: "CONTACT", contactKicker: "LET'S CONNECT", contactTitle: "Let's discuss <span class=\"text-accent\">opportunities.</span>", contactText: "I am open to internships, junior-level opportunities, and professional conversations in information security. Reach out through a channel that works for you, or explore my professional profiles and projects.", contactGithubMeta: "CODE & PROJECTS", contactLinkedinMeta: "PROFESSIONAL NETWORK", contactTelegramMeta: "DIRECT MESSAGES", contactInstagramMeta: "PERSONAL PROFILE", contactEmailMeta: "EMAIL", contactSetupNote: "Your profile links will appear here after you add your contact details in js/script.js before publishing.", footerTagline: "Continuous learning. Deliberate practice. A responsible approach to security.", backTop: "BACK TO TOP ↑", footerRights: "All rights reserved.", footerLocation: "INFORMATION SECURITY PORTFOLIO",
    rangeIndex: "CYBER RANGE",
    rangeKicker: "INTERACTIVE LAB",
    rangeTitle: "Explore the network. <span class=\"text-accent\">Investigate an incident.</span>",
    rangeLead: "A small learning simulation: explore a fictional network topology, run a visual route trace, and review a set of sample events. All data is fictional and no network requests are made.",
    networkPanelTitle: "LEARNING NETWORK MAP",
    networkPanelTag: "LOCAL SIMULATION / 01",
    networkPanelText: "Select a node to inspect its role. The trace control highlights the packet route step by step.",
    networkNodeGateway: "Gateway",
    networkNodeFirewall: "Firewall",
    networkNodeSensor: "IDS sensor",
    networkNodeWorkstation: "Workstation",
    networkNodeServer: "Server",
    networkNodeSelect: "INSPECT NODE",
    networkDetailKicker: "NODE DETAILS",
    networkDetailAddress: "DEMO ADDRESS",
    networkDetailRole: "ROLE IN TOPOLOGY",
    networkDetailDefault: "Select a node on the map to see what it represents in this fictional learning network.",
    networkTraceStart: "Run route trace",
    networkTraceStop: "Stop route trace",
    networkTraceAgain: "Run trace again",
    networkReset: "Reset selection",
    networkStatusReady: "Simulation ready. This is an illustration, not a real network.",
    networkStatusRunning: "Visual route trace is running locally…",
    networkStatusComplete: "Route complete: every node in the learning topology was visited.",
    networkStatusStopped: "The trace was stopped by the visitor.",
    networkSafety: "TOPOLOGY AND IP ADDRESSES ARE FOR DEMONSTRATION ONLY. NO DEVICES OR NETWORKS ARE SCANNED.",
    missionKicker: "MISSION 01 / INCIDENT RESPONSE",
    missionTitle: "Investigate a sample incident",
    missionText: "Imagine you are an on-duty analyst. Read three situations and choose the most reasonable response. This is a learning scenario, not a check of real infrastructure.",
    missionQuestionLabel: "QUESTION",
    missionNext: "Next question",
    missionFinish: "Finish mission",
    missionRestart: "Try again",
    missionCorrect: "Correct. A good response is based on evidence and preserves the context of the event.",
    missionIncorrect: "Not quite. Review the explanation and apply it to the next situation.",
    missionQuestionCount: "QUESTION",
    missionScoreLabel: "SCORE",
    missionCompleteTitle: "Mission complete",
    missionCompleteText: "Your result: {score} out of 3. The scenario is complete — replay it and compare your decisions.",
    missionCompletePerfect: "Excellent: all three decisions are correct. You read events carefully and choose measured actions.",
    missionCompletePartial: "Mission complete. Review the explanations and try again.",
    achievementsTitle: "SESSION ACHIEVEMENTS",
    achievementLocked: "LOCKED",
    achievementUnlocked: "UNLOCKED",
    achievementExplorer: "Network explorer",
    achievementExplorerText: "Inspected all five topology nodes.",
    achievementTracer: "Route analyst",
    achievementTracerText: "Completed the visual route trace.",
    achievementResponder: "Incident responder",
    achievementResponderText: "Completed the learning mission.",
    cyberRangeSafety: "All interactions run locally in the browser. No scanning, external connections, operating-system commands, or visitor data collection take place.",
    terminalCmdMap: "Open the interactive learning network map.",
    terminalCmdTrace: "Run the visual route trace.",
    terminalCmdMission: "Jump to the incident-response learning scenario.",
    terminalUnknown: "Command not found. Type help to see the available commands.",
  }
};

let currentLanguage = "ru";
const languageToggle = document.querySelector(".language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "ru";
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translated = translations[currentLanguage][key];
    if (typeof translated === "string") element.innerHTML = translated;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    const translated = translations[currentLanguage][key];
    if (typeof translated === "string") element.alt = translated;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translated = translations[currentLanguage][key];
    if (typeof translated === "string") element.placeholder = translated;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    const translated = translations[currentLanguage][key];
    if (typeof translated === "string") element.setAttribute("aria-label", translated);
  });
  languageToggle.querySelector(".lang-current").textContent = currentLanguage.toUpperCase();
  languageToggle.querySelector(".lang-next").textContent = currentLanguage === "ru" ? "EN" : "RU";
  languageToggle.setAttribute("aria-label", currentLanguage === "ru" ? "Switch to English" : "Переключить на русский");
  const menuLabel = currentLanguage === "ru" ? "Открыть меню" : "Open menu";
  menuToggle.setAttribute("aria-label", menuLabel);
  document.title = currentLanguage === "ru" ? `${PROFILE.name} — Портфолио по кибербезопасности` : `${PROFILE.name} — Cybersecurity Portfolio`;
  applyProfileData();
  renderTerminalWelcome();
  refreshCyberRangeLanguage();
}

languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "ru" ? "en" : "ru"));

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  primaryNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});
primaryNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("resize", () => { if (window.innerWidth > 760) closeMenu(); });

// Contact cards are rendered only for valid, explicitly configured public links.
// This prevents placeholder URLs or generic social-network homepages from appearing as real contacts.
function safeProfileUrl(value, allowedHosts) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const parsed = new URL(value.trim());
    const hostname = parsed.hostname.toLowerCase();
    const pathname = parsed.pathname.replace(/\/+$/, "");
    if (parsed.protocol !== "https:" || !allowedHosts.includes(hostname)) return null;
    if (!pathname || pathname === "/" || parsed.username || parsed.password) return null;
    return parsed;
  } catch {
    return null;
  }
}

const contactCards = {
  github: { hosts: ["github.com"] },
  linkedin: { hosts: ["linkedin.com", "www.linkedin.com"] },
  telegram: { hosts: ["t.me", "www.t.me"] },
  instagram: { hosts: ["instagram.com", "www.instagram.com"] },
};
let configuredContactCount = 0;
document.querySelectorAll("[data-contact-social]").forEach((element) => {
  const key = element.dataset.contactSocial;
  const valueNode = element.querySelector("[data-contact-value]");
  if (key === "email") {
    const email = typeof PROFILE.email === "string" ? PROFILE.email.trim() : "";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      element.hidden = true;
      return;
    }
    element.href = `mailto:${encodeURIComponent(email).replace(/%40/gi, "@")}`;
    if (valueNode) valueNode.textContent = email;
    element.hidden = false;
    configuredContactCount += 1;
    return;
  }

  const config = contactCards[key];
  const parsed = config ? safeProfileUrl(PROFILE[key], config.hosts) : null;
  if (!parsed) {
    element.hidden = true;
    return;
  }
  element.href = parsed.href;
  if (valueNode) valueNode.textContent = `${parsed.hostname}${parsed.pathname}`;
  element.hidden = false;
  configuredContactCount += 1;
});

const contactSetupNote = document.getElementById("contact-setup-note");
if (contactSetupNote) contactSetupNote.hidden = configuredContactCount > 0;

document.querySelector(".brand").setAttribute("aria-label", `${PROFILE.name} — home`);
document.getElementById("current-year").textContent = new Date().getFullYear();

// Interactive profile terminal: commands are a small, local allow-list. No shell or network calls are made.
const terminalOutput = document.getElementById("terminal-output");
const terminalForm = document.getElementById("terminal-form");
const terminalInput = document.getElementById("terminal-input");
const terminalHistory = [];
let terminalHistoryIndex = 0;

const terminalResponses = {
  help: {
    ru: [
      ["heading", "ДОСТУПНЫЕ КОМАНДЫ"],
      ["result", "whoami     — краткая информация обо мне"],
      ["result", "skills     — навыки и инструменты"],
      ["result", "network    — сетевые технологии"],
      ["result", "lab        — виртуальная лаборатория"],
      ["result", "projects   — учебные и личные проекты"],
      ["result", "education  — университет и курсы"],
      ["result", "contact    — способы связи"],
      ["result", "about / university / skills / projects / education / certificates / home — навигация по сайту"],
      ["result", "map        — интерактивная карта сети"],
      ["result", "trace      — визуальная трассировка"],
      ["result", "mission    — учебный сценарий реагирования"],
      ["result", "clear      — очистить вывод"],
      ["muted", "Введите команду в строке ниже или нажмите карточку справочника."],
    ],
    en: [
      ["heading", "AVAILABLE COMMANDS"],
      ["result", "whoami     — profile summary"],
      ["result", "skills     — skills and tools"],
      ["result", "network    — networking technologies"],
      ["result", "lab        — virtual learning lab"],
      ["result", "projects   — academic and personal projects"],
      ["result", "education  — university and courses"],
      ["result", "contact    — contact options"],
      ["result", "about / university / skills / projects / education / certificates / home — navigate the site"],
      ["result", "map        — interactive network map"],
      ["result", "trace      — visual route trace"],
      ["result", "mission    — incident-response scenario"],
      ["result", "clear      — clear output"],
      ["muted", "Type a command below or click a command card."],
    ],
  },
  whoami: {
    ru: [["heading", "ПРОФИЛЬ"], ["result", `${PROFILE.roleRu}`], ["result", `GPA: ${PROFILE.gpa} / 10 · обучение: ${PROFILE.studyPeriod}`], ["result", "Фокус: Network Security · Information Security · Pentest Foundations"], ["muted", "Открыт к стажировке и Junior-возможностям."]],
    en: [["heading", "PROFILE"], ["result", `${PROFILE.roleEn}`], ["result", `GPA: ${PROFILE.gpa} / 10 · study period: ${PROFILE.studyPeriod}`], ["result", "Focus: Network Security · Information Security · Pentest Foundations"], ["muted", "Open to internship and junior-level opportunities."]],
  },
  skills: {
    ru: [["heading", "ТЕХНИЧЕСКАЯ БАЗА"], ["result", "Networking: OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS"], ["result", "Systems: Linux CLI, Windows, базовый анализ журналов Windows"], ["result", "Tools: Kali Linux, VirtualBox, Metasploitable, Cisco Packet Tracer"], ["result", "Programming: C, алгоритмы и базовая обработка данных"], ["muted", "Уровень — начальный; навыки развиваются в учебной среде."]],
    en: [["heading", "TECHNICAL FOUNDATIONS"], ["result", "Networking: OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS"], ["result", "Systems: Linux CLI, Windows, basic Windows log review"], ["result", "Tools: Kali Linux, VirtualBox, Metasploitable, Cisco Packet Tracer"], ["result", "Programming: C, algorithms, and basic data processing"], ["muted", "Foundational level; skills are developed through academic practice."]],
  },
  network: {
    ru: [["heading", "СЕТЕВЫЕ ТЕХНОЛОГИИ"], ["result", "Модели и протоколы: OSI, TCP/IP, HTTP/HTTPS"], ["result", "Адресация: IPv4 и IPv6"], ["result", "Сетевые службы: DNS и DHCP"], ["result", "Практика: базовая настройка и проверка соединений в Cisco Packet Tracer"], ["muted", "Подробности: раздел «Компетенции» и проект Network Fundamentals Laboratory."]],
    en: [["heading", "NETWORKING"], ["result", "Models and protocols: OSI, TCP/IP, HTTP/HTTPS"], ["result", "Addressing: IPv4 and IPv6"], ["result", "Network services: DNS and DHCP"], ["result", "Practice: basic configuration and connectivity checks in Cisco Packet Tracer"], ["muted", "More details: Expertise and Network Fundamentals Laboratory sections."]],
  },
  lab: {
    ru: [["heading", "VIRTUAL CYBERSECURITY LAB"], ["result", "Hypervisor: VirtualBox"], ["result", "Analysis environment: Kali Linux"], ["result", "Intentionally vulnerable target: Metasploitable"], ["result", "Цель: изучать поведение систем и базовые сценарии оценки уязвимостей в изолированной среде"], ["muted", "Практика выполняется в собственной лаборатории, не на реальных внешних системах."]],
    en: [["heading", "VIRTUAL CYBERSECURITY LAB"], ["result", "Hypervisor: VirtualBox"], ["result", "Analysis environment: Kali Linux"], ["result", "Intentionally vulnerable target: Metasploitable"], ["result", "Purpose: study system behaviour and introductory vulnerability-assessment workflows in an isolated environment"], ["muted", "Practice takes place in a personal lab, not against real external systems."]],
  },
  projects: {
    ru: [["heading", "ИЗБРАННЫЕ ПРОЕКТЫ"], ["result", "01  Virtual Cybersecurity Laboratory"], ["result", "02  Network Fundamentals Laboratory"], ["result", "03  Windows Security & Incident Response"], ["result", "04  Introductory CTF Practice & OSINT"], ["result", "05  Vacancy Recommendation System (C)"], ["muted", "Прокрутите страницу до раздела «Проекты», чтобы прочитать подробности."]],
    en: [["heading", "SELECTED PROJECTS"], ["result", "01  Virtual Cybersecurity Laboratory"], ["result", "02  Network Fundamentals Laboratory"], ["result", "03  Windows Security & Incident Response"], ["result", "04  Introductory CTF Practice & OSINT"], ["result", "05  Vacancy Recommendation System (C)"], ["muted", "Scroll to the Projects section for full descriptions."]],
  },
  education: {
    ru: [["heading", "ОБРАЗОВАНИЕ И ОБУЧЕНИЕ"], ["result", `${PROFILE.university} · ${PROFILE.facultyRu} · ${PROFILE.studyPeriod}`], ["result", `GPA: ${PROFILE.gpa} / 10 · ${PROFILE.scholarshipRu}`], ["result", "Cisco Networking Academy: Introduction to Cybersecurity, Networking Basics, Packet Tracer"], ["result", "Stepik: The Basics of Linux Terminal, Basics of C Programming. Tasks"], ["muted", "Языки: русский — родной · английский — A2–B1 · французский — B1–B2."]],
    en: [["heading", "EDUCATION & TRAINING"], ["result", `${PROFILE.university} · ${PROFILE.facultyEn} · ${PROFILE.studyPeriod}`], ["result", `GPA: ${PROFILE.gpa} / 10 · ${PROFILE.scholarshipEn}`], ["result", "Cisco Networking Academy: Introduction to Cybersecurity, Networking Basics, Packet Tracer"], ["result", "Stepik: The Basics of Linux Terminal, Basics of C Programming. Tasks"], ["muted", "Languages: Russian — native · English — A2–B1 · French — B1–B2."]],
  },
  contact: {
    ru: [["heading", "КАНАЛЫ СВЯЗИ"], ["result", "Настроенные публичные профили указаны в блоке «Контакты» ниже."], ["muted", "Открыт к стажировкам и начальным позициям в сфере информационной безопасности."]],
    en: [["heading", "CONTACT CHANNELS"], ["result", "Configured public profiles are listed in the Contact section below."], ["muted", "Currently open to internships and entry-level information security roles."]],
  },
  about: { ru: [["heading", "ПРОФИЛЬ / ABOUT"], ["result", "Перехожу к разделу обо мне."]], en: [["heading", "PROFILE / ABOUT"], ["result", "Opening the About section."]] },
  university: { ru: [["heading", "ОБРАЗОВАНИЕ / БГУИР"], ["result", "Перехожу к информации об университете."]], en: [["heading", "EDUCATION / BSUIR"], ["result", "Opening the university section."]] },
  expertise: { ru: [["heading", "КОМПЕТЕНЦИИ"], ["result", "Открываю технические направления и инструменты."]], en: [["heading", "EXPERTISE"], ["result", "Opening technical skills and tools."]] },
  certificates: { ru: [["heading", "СЕРТИФИКАТЫ"], ["result", "Сертификаты находятся в разделе образования."]], en: [["heading", "CERTIFICATES"], ["result", "Certificates are listed in the Education section."]] },
  home: { ru: [["heading", "ГЛАВНАЯ"], ["result", "Возвращаюсь к началу портфолио."]], en: [["heading", "HOME"], ["result", "Returning to the portfolio start."]] },
  map: {
    ru: [["heading", "CYBER RANGE / NETWORK MAP"], ["result", "Открываю условную сетевую топологию."], ["muted", "Карта — учебная симуляция без реальных сетевых запросов."]],
    en: [["heading", "CYBER RANGE / NETWORK MAP"], ["result", "Opening the fictional network topology."], ["muted", "The map is a learning simulation and makes no real network requests."]],
  },
  trace: {
    ru: [["heading", "LOCAL ROUTE TRACE"], ["result", "Запускаю визуальную трассировку пакета по пяти узлам."], ["muted", "Это анимация учебной схемы, а не системная команда traceroute."]],
    en: [["heading", "LOCAL ROUTE TRACE"], ["result", "Starting a visual packet trace across five nodes."], ["muted", "This is a learning-topology animation, not the system traceroute command."]],
  },
  mission: {
    ru: [["heading", "INCIDENT RESPONSE / TRAINING"], ["result", "Перехожу к учебной миссии по анализу событий."], ["muted", "Все события в сценарии вымышлены."]],
    en: [["heading", "INCIDENT RESPONSE / TRAINING"], ["result", "Opening the event-analysis learning mission."], ["muted", "Every event in this scenario is fictional."]],
  },
};

function appendTerminalLine(className, text) {
  const line = document.createElement("p");
  line.className = `${className} terminal-line-enter`;
  line.textContent = text;
  terminalOutput.appendChild(line);
}

function appendTerminalPrompt() {
  const prompt = document.createElement("p");
  prompt.className = "terminal-prompt-line";
  const user = document.createElement("span");
  user.className = "prompt-user";
  user.textContent = "guest@yourname";
  const path = document.createElement("span");
  path.className = "prompt-path";
  path.textContent = "~";
  prompt.append(user, document.createTextNode(":"), path, document.createTextNode("$ "));
  const caret = document.createElement("span");
  caret.className = "terminal-caret";
  prompt.appendChild(caret);
  terminalOutput.appendChild(prompt);
}

function renderTerminalWelcome() {
  terminalOutput.innerHTML = "";
  appendTerminalLine("terminal-welcome", "SECURITY PROFILE TERMINAL v2.0");
  appendTerminalLine("terminal-muted", translations[currentLanguage].terminalWelcome);
  appendTerminalPrompt();
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function updateActiveTerminalCommand(command) {
  document.querySelectorAll("[data-command]").forEach((button) => {
    const active = command !== "clear" && button.dataset.command === command;
    button.classList.toggle("is-active", active);
    if (button.classList.contains("terminal-command-card")) button.setAttribute("aria-pressed", String(active));
  });
}

function runCommand(rawCommand) {
  const submitted = String(rawCommand || "").trim();
  if (!submitted) return;
  // Only a short, plain-text command token is accepted; never interpret shell syntax.
  if (submitted.length > 32 || !/^[a-z-]+$/i.test(submitted)) {
    appendTerminalLine("terminal-error", translations[currentLanguage].terminalUnknown);
    appendTerminalPrompt();
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    return;
  }
  const command = submitted.toLowerCase();
  updateActiveTerminalCommand(command);

  appendTerminalLine("terminal-command-line", `guest@yourname:~$ ${rawCommand}`);

  if (command === "clear") {
    renderTerminalWelcome();
    return;
  }

  const response = terminalResponses[command];
  if (!response) {
    appendTerminalLine("terminal-error", translations[currentLanguage].terminalUnknown);
    appendTerminalPrompt();
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    return;
  }

  response[currentLanguage].forEach(([kind, text]) => {
    const className = kind === "heading" ? "terminal-result terminal-result-heading" : kind === "muted" ? "terminal-result terminal-result-muted" : "terminal-result";
    appendTerminalLine(className, text);
  });
  appendTerminalPrompt();
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  const sectionTargets = { home: "top", about: "about", university: "university", expertise: "expertise", skills: "expertise", projects: "projects", education: "experience", certificates: "experience", contact: "contact" };
  if (sectionTargets[command]) {
    document.getElementById(sectionTargets[command])?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (command === "home") window.scrollTo({ top: 0, behavior: "smooth" });
  }
  dispatchTerminalShortcut(command);
}

terminalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const command = terminalInput.value.trim();
  if (!command) return;
  terminalHistory.push(command);
  if (terminalHistory.length > 30) terminalHistory.shift();
  terminalHistoryIndex = terminalHistory.length;
  runCommand(command);
  terminalInput.value = "";
  terminalInput.focus();
});

terminalInput.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!terminalHistory.length) return;
    terminalHistoryIndex = Math.max(0, terminalHistoryIndex - 1);
    terminalInput.value = terminalHistory[terminalHistoryIndex] || "";
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    terminalHistoryIndex = Math.min(terminalHistory.length, terminalHistoryIndex + 1);
    terminalInput.value = terminalHistory[terminalHistoryIndex] || "";
  }
});

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    runCommand(button.dataset.command);
    terminalInput.focus();
  });
});


// CYBER RANGE: an offline, fictional network topology and incident-response mini challenge.
// It does not scan, connect to, or send data to any host. All IPs/events are documentation-only examples.
const rangeRoot = document.getElementById("cyber-range");
const networkStage = document.getElementById("network-stage");
const networkDetailTitle = document.getElementById("network-detail-title");
const networkDetailRole = document.getElementById("network-detail-role");
const networkDetailAddressValue = document.getElementById("network-detail-address-value");
const networkDetailText = document.getElementById("network-detail-text");
const networkStatus = document.getElementById("network-status");
const traceRouteButton = document.getElementById("trace-route-button");
const resetNetworkButton = document.getElementById("reset-network-button");
const missionQuestion = document.getElementById("mission-question");
const missionStep = document.getElementById("mission-step");
const missionOptions = document.getElementById("mission-options");
const missionFeedback = document.getElementById("mission-feedback");
const missionNextButton = document.getElementById("mission-next-button");
const missionProgressBar = document.getElementById("mission-progress-bar");
const missionScoreValue = document.getElementById("mission-score-value");
const achievementAnnouncer = document.getElementById("achievement-announcer");

const networkNodes = {
  ru: {
    gateway: { title: "Пограничный шлюз", role: "Входная точка условной сети", address: "198.51.100.1", text: "Принимает входящий и исходящий трафик в учебной схеме. В реальной инфраструктуре здесь обычно применяются маршрутизация, фильтрация и журналирование." },
    firewall: { title: "Межсетевой экран", role: "Контроль сетевых соединений", address: "198.51.100.10", text: "Иллюстрирует точку применения сетевых правил: разрешённые направления трафика отделяются от нежелательных. Карта не содержит действующих правил или реального устройства." },
    sensor: { title: "IDS-сенсор", role: "Обнаружение подозрительных событий", address: "198.51.100.20", text: "Условный датчик наблюдает за копией сетевого трафика и помогает заметить необычные шаблоны. IDS здесь показан только как концепт." },
    workstation: { title: "Рабочая станция", role: "Пользовательская конечная точка", address: "192.0.2.25", text: "Пример пользовательского устройства в локальном сегменте. В настоящей сети для защиты важны обновления, контроль доступа и сбор событий безопасности." },
    server: { title: "Защищённый сервер", role: "Внутренний сервис", address: "203.0.113.10", text: "Условный сервер внутреннего приложения. Доступ к нему должен предоставляться только необходимым субъектам и по минимально достаточным правилам." },
  },
  en: {
    gateway: { title: "Edge gateway", role: "Entry point to the fictional network", address: "198.51.100.1", text: "Represents the entry and exit point for traffic in this learning topology. In a real environment, routing, filtering, and logging may be applied here." },
    firewall: { title: "Firewall", role: "Network connection control", address: "198.51.100.10", text: "Illustrates where network rules are enforced: expected traffic is separated from unwanted traffic. This map contains no live rules or real device." },
    sensor: { title: "IDS sensor", role: "Suspicious activity detection", address: "198.51.100.20", text: "A fictional sensor observes a traffic copy and helps identify unusual patterns. IDS is represented as a concept only." },
    workstation: { title: "Workstation", role: "User endpoint", address: "192.0.2.25", text: "An example user device in a local segment. In a real network, updates, access control, and security event collection are important safeguards." },
    server: { title: "Protected server", role: "Internal service", address: "203.0.113.10", text: "A fictional internal application server. Access should be limited to the necessary identities and minimum required permissions." },
  },
};

const missionQuestions = {
  ru: [
    { question: "В журнале видно 28 неудачных входов в учётную запись admin с одного адреса за 50 секунд. Какой вывод наиболее обоснован?", options: ["Обычный DNS-запрос к внутреннему серверу", "Возможная попытка подбора пароля — событие нужно проверить", "Успешный HTTPS-запрос с кодом 200"], correct: 1, explanation: "Много повторных отказов для одной учётной записи за короткий период может указывать на password spraying или brute-force. Нужно сопоставить время, источник и другие события, а не делать вывод только по одной строке." },
    { question: "Какой первый шаг поможет корректно оценить это событие?", options: ["Удалить записи, чтобы уменьшить объём журналов", "Сохранить журналы и проверить, были ли успешные входы рядом по времени", "Немедленно выключить все серверы организации"], correct: 1, explanation: "Сначала сохраняют контекст и проверяют коррелирующие события: успешные входы, затронутые учётные записи, временной диапазон и источник. Это помогает оценить масштаб без преждевременных действий." },
    { question: "Какая комбинация мер лучше снижает вероятность повторения подобных попыток?", options: ["Отключить журналирование аутентификации", "Включить MFA, ограничение частоты попыток и мониторинг отказов", "Сделать административный интерфейс доступным из любой сети"], correct: 1, explanation: "MFA снижает риск компрометации при утечке пароля, rate limiting затрудняет массовые попытки, а мониторинг помогает быстрее заметить аномалии. Конкретные настройки зависят от системы и её рисков." },
  ],
  en: [
    { question: "The log shows 28 failed sign-ins to the admin account from one address in 50 seconds. Which conclusion is most reasonable?", options: ["A routine DNS query to an internal server", "A possible password-guessing attempt that needs investigation", "A successful HTTPS request with status 200"], correct: 1, explanation: "Many repeated failures for one account in a short period may indicate password spraying or brute force. Correlate timestamps, source, and other events rather than deciding from one line alone." },
    { question: "Which first step helps assess this event responsibly?", options: ["Delete the records to reduce log volume", "Preserve the logs and check for nearby successful sign-ins", "Immediately shut down every server in the organisation"], correct: 1, explanation: "First preserve context and correlate related events: successful logins, affected accounts, the time window, and the source. This helps assess scope without premature action." },
    { question: "Which combination of safeguards best reduces the chance of similar attempts succeeding?", options: ["Disable authentication logging", "Enable MFA, rate-limit attempts, and monitor failures", "Expose the administrative interface to every network"], correct: 1, explanation: "MFA reduces risk from compromised passwords, rate limiting makes mass attempts harder, and monitoring helps reveal anomalies sooner. Exact settings depend on the system and its risks." },
  ],
};

const visitedNetworkNodes = new Set();
const unlockedAchievements = { explorer: false, tracer: false, responder: false };
const routeOrder = ["gateway", "firewall", "sensor", "workstation", "server"];
let selectedNetworkNode = "gateway";
let traceTimer = null;
let traceIndex = 0;
let missionIndex = 0;
let missionScore = 0;
let missionAnswered = false;
let missionChoice = -1;

function getRangeText(key) {
  return translations[currentLanguage][key] || key;
}

function announceAchievement(key) {
  const labels = {
    explorer: getRangeText("achievementExplorer"),
    tracer: getRangeText("achievementTracer"),
    responder: getRangeText("achievementResponder"),
  };
  const badge = document.querySelector(`[data-achievement="${key}"]`);
  if (!badge || unlockedAchievements[key]) return;
  unlockedAchievements[key] = true;
  badge.classList.add("is-unlocked");
  badge.querySelector("[data-achievement-state]").textContent = getRangeText("achievementUnlocked");
  updateAchievementCount();
  if (achievementAnnouncer) achievementAnnouncer.textContent = `${getRangeText("achievementUnlocked")}: ${labels[key]}`;
}

function updateAchievementCount() {
  const countNode = document.getElementById("achievement-count");
  if (countNode) countNode.textContent = String(Object.values(unlockedAchievements).filter(Boolean).length);
}

function refreshAchievementLanguage() {
  document.querySelectorAll("[data-achievement]").forEach((badge) => {
    const key = badge.dataset.achievement;
    const state = badge.querySelector("[data-achievement-state]");
    const unlocked = Boolean(unlockedAchievements[key]);
    badge.classList.toggle("is-unlocked", unlocked);
    if (state) state.textContent = getRangeText(unlocked ? "achievementUnlocked" : "achievementLocked");
  });
  updateAchievementCount();
}

function renderNetworkDetail(nodeId, markVisited = false) {
  const node = networkNodes[currentLanguage][nodeId];
  if (!node) return;
  selectedNetworkNode = nodeId;
  networkDetailTitle.textContent = node.title;
  networkDetailRole.textContent = node.role;
  networkDetailAddressValue.textContent = node.address;
  networkDetailText.textContent = node.text;
  document.querySelectorAll("[data-network-node]").forEach((button) => {
    const selected = button.dataset.networkNode === nodeId;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  if (markVisited) {
    visitedNetworkNodes.add(nodeId);
    if (visitedNetworkNodes.size === routeOrder.length) announceAchievement("explorer");
  }
}

function stopNetworkTrace(showStatus = true) {
  if (traceTimer) window.clearTimeout(traceTimer);
  traceTimer = null;
  networkStage.classList.remove("is-tracing");
  traceRouteButton.textContent = getRangeText("networkTraceStart");
  if (showStatus) networkStatus.textContent = getRangeText("networkStatusStopped");
}

function runNetworkTraceStep() {
  if (traceIndex >= routeOrder.length) {
    traceTimer = null;
    networkStage.classList.remove("is-tracing");
    traceRouteButton.textContent = getRangeText("networkTraceAgain");
    networkStatus.textContent = getRangeText("networkStatusComplete");
    announceAchievement("tracer");
    return;
  }
  renderNetworkDetail(routeOrder[traceIndex], true);
  traceIndex += 1;
  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  traceTimer = window.setTimeout(runNetworkTraceStep, reducedMotion ? 180 : 680);
}

function startNetworkTrace() {
  stopNetworkTrace(false);
  traceIndex = 0;
  networkStage.classList.add("is-tracing");
  traceRouteButton.textContent = getRangeText("networkTraceStop");
  networkStatus.textContent = getRangeText("networkStatusRunning");
  runNetworkTraceStep();
}

function resetNetworkExplorer() {
  stopNetworkTrace(false);
  visitedNetworkNodes.clear();
  unlockedAchievements.explorer = false;
  unlockedAchievements.tracer = false;
  refreshAchievementLanguage();
  renderNetworkDetail("gateway", false);
  networkStatus.textContent = getRangeText("networkStatusReady");
}

function renderMission() {
  const questions = missionQuestions[currentLanguage];
  const questionCount = questions.length;
  const isComplete = missionIndex >= questionCount;
  missionOptions.replaceChildren();
  missionFeedback.hidden = true;
  missionNextButton.hidden = true;

  if (isComplete) {
    missionStep.textContent = `${getRangeText("missionQuestionCount")} ${questionCount}/${questionCount}`;
    missionQuestion.textContent = getRangeText("missionCompleteTitle");
    const scoreText = `${missionScore}/${questionCount}`;
    const summary = getRangeText("missionCompleteText").replace("{score}", scoreText);
    const detail = missionScore === questionCount
      ? getRangeText("missionCompletePerfect")
      : getRangeText("missionCompletePartial");
    missionFeedback.textContent = `${summary} ${detail}`;
    missionFeedback.hidden = false;
    missionScoreValue.textContent = scoreText;
    missionProgressBar.style.width = "100%";
    missionNextButton.textContent = getRangeText("missionRestart");
    missionNextButton.hidden = false;
    announceAchievement("responder");
    return;
  }

  const item = questions[missionIndex];
  missionStep.textContent = `${getRangeText("missionQuestionCount")} ${missionIndex + 1}/${questionCount}`;
  missionQuestion.textContent = item.question;
  missionScoreValue.textContent = `${missionScore}/${questionCount}`;
  missionProgressBar.style.width = `${(missionIndex / questionCount) * 100}%`;
  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mission-option";
    button.dataset.answer = String(index);
    const number = document.createElement("span");
    number.className = "mission-option-number";
    number.textContent = String(index + 1).padStart(2, "0");
    const text = document.createElement("span");
    text.className = "mission-option-text";
    text.textContent = option;
    const arrow = document.createElement("span");
    arrow.className = "mission-option-arrow";
    arrow.textContent = "↗";
    button.append(number, text, arrow);
    missionOptions.appendChild(button);
  });
  if (missionAnswered) {
    const answeredQuestion = questions[missionIndex];
    [...missionOptions.querySelectorAll("[data-answer]")].forEach((button) => {
      const choice = Number(button.dataset.answer);
      button.disabled = true;
      if (choice === answeredQuestion.correct) button.classList.add("is-correct");
      else if (choice === missionChoice) button.classList.add("is-incorrect");
    });
    const isCorrect = missionChoice === answeredQuestion.correct;
    missionFeedback.textContent = `${isCorrect ? getRangeText("missionCorrect") : getRangeText("missionIncorrect")} ${answeredQuestion.explanation}`;
    missionFeedback.hidden = false;
    missionNextButton.textContent = missionIndex === questionCount - 1
      ? getRangeText("missionFinish")
      : getRangeText("missionNext");
    missionNextButton.hidden = false;
  }
}

function answerMission(index) {
  if (missionAnswered || missionIndex >= missionQuestions.ru.length) return;
  const question = missionQuestions[currentLanguage][missionIndex];
  missionAnswered = true;
  missionChoice = index;
  const isCorrect = index === question.correct;
  if (isCorrect) missionScore += 1;
  [...missionOptions.querySelectorAll("[data-answer]")].forEach((button) => {
    const choice = Number(button.dataset.answer);
    button.disabled = true;
    if (choice === question.correct) button.classList.add("is-correct");
    else if (choice === index) button.classList.add("is-incorrect");
  });
  missionFeedback.textContent = `${isCorrect ? getRangeText("missionCorrect") : getRangeText("missionIncorrect")} ${question.explanation}`;
  missionFeedback.hidden = false;
  missionScoreValue.textContent = `${missionScore}/${missionQuestions[currentLanguage].length}`;
  missionNextButton.textContent = missionIndex === missionQuestions.ru.length - 1
    ? getRangeText("missionFinish")
    : getRangeText("missionNext");
  missionNextButton.hidden = false;
}

function advanceMission() {
  if (missionIndex >= missionQuestions.ru.length) {
    missionIndex = 0;
    missionScore = 0;
    missionAnswered = false;
    missionChoice = -1;
    unlockedAchievements.responder = false;
    refreshAchievementLanguage();
    renderMission();
    return;
  }
  if (!missionAnswered) return;
  missionIndex += 1;
  missionAnswered = false;
  missionChoice = -1;
  renderMission();
}

function dispatchTerminalShortcut(command) {
  if (command === "map" || command === "mission") {
    const target = command === "map" ? networkStage : document.getElementById("incident-mission");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    if (command === "mission") window.setTimeout(() => missionQuestion.focus(), 450);
  } else if (command === "trace") {
    document.getElementById("cyber-range").scrollIntoView({ behavior: "smooth", block: "center" });
    startNetworkTrace();
  }
}

function refreshCyberRangeLanguage() {
  renderNetworkDetail(selectedNetworkNode, false);
  if (traceTimer) {
    traceRouteButton.textContent = getRangeText("networkTraceStop");
    networkStatus.textContent = getRangeText("networkStatusRunning");
  } else if (unlockedAchievements.tracer) {
    traceRouteButton.textContent = getRangeText("networkTraceAgain");
    networkStatus.textContent = getRangeText("networkStatusComplete");
  } else {
    traceRouteButton.textContent = getRangeText("networkTraceStart");
  }
  renderMission();
  refreshAchievementLanguage();
}

function initCyberRange() {
  if (!rangeRoot) return;
  document.querySelectorAll("[data-network-node]").forEach((button) => {
    button.addEventListener("click", () => {
      if (traceTimer) stopNetworkTrace(false);
      renderNetworkDetail(button.dataset.networkNode, true);
      networkStatus.textContent = getRangeText("networkStatusReady");
    });
  });
  traceRouteButton.addEventListener("click", () => {
    if (traceTimer) stopNetworkTrace(true);
    else startNetworkTrace();
  });
  resetNetworkButton.addEventListener("click", resetNetworkExplorer);
  missionOptions.addEventListener("click", (event) => {
    const option = event.target.closest("[data-answer]");
    if (option) answerMission(Number(option.dataset.answer));
  });
  missionNextButton.addEventListener("click", advanceMission);
  renderNetworkDetail("gateway", false);
  renderMission();
}


// Basic active-section highlighting for the desktop/mobile navigation.
const navLinks = [...document.querySelectorAll(".primary-nav a")];
const observedSections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  observedSections.forEach((section) => sectionObserver.observe(section));
}


// Animate content as it enters the viewport; content remains visible when JS or IO is unavailable.
const revealTargets = document.querySelectorAll(
  ".section-heading, .about-main, .stat-card, .university-copy, .university-photo, .expertise-card, .terminal-copy, .terminal-window, .terminal-command-card, .range-intro, .network-panel, .mission-card, .achievement-strip, .project-card, .education-block, .cert-block, .resume-panel, .contact-copy, .contact-links"
);
revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
});
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

// Mark remote university images that fail to load; captions and source links remain available.
document.querySelectorAll(".university-photo img").forEach((image) => {
  image.addEventListener("error", () => image.closest(".university-photo")?.classList.add("image-failed"), { once: true });
});

// Reading progress indicator at the top edge of the page.
const progressIndicator = document.querySelector("#scroll-progress span");
function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
  progressIndicator.style.transform = `scaleX(${progress})`;
}
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();


// First-entry terminal gate: a fictional, local-only access animation (no real intrusion).
function initAccessSequence() {
  const gate = document.getElementById("access-sequence");
  if (!gate) return;
  const log = document.getElementById("access-log");
  const bar = document.getElementById("access-progress-bar");
  const value = document.getElementById("access-progress-value");
  const stage = document.getElementById("access-stage-label");
  const form = document.getElementById("access-command-form");
  const input = document.getElementById("access-command-input");
  const unlock = document.getElementById("access-unlock");
  const skip = document.getElementById("access-skip");
  const feedback = document.getElementById("access-feedback");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const steps = [
    [12, "BOOTSTRAP", "Loading isolated portfolio environment...", "Изолированная среда портфолио загружена..."],
    [29, "ROUTE CHECK", "Checking local navigation map...", "Проверка локальной карты навигации..."],
    [47, "IDENTITY", "Reading public profile metadata...", "Чтение открытых данных профиля..."],
    [66, "INTEGRITY", "Verifying static assets and access policy...", "Проверка статических ресурсов и политики доступа..."],
    [84, "AUTH CHALLENGE", "Generating fictional access challenge...", "Формирование демонстрационного запроса доступа..."],
    [100, "READY", "Simulation complete. Awaiting visitor command: unlock", "Симуляция завершена. Ожидается команда посетителя: unlock"]
  ];
  let index = 0;
  let unlocked = false;
  const langText = (ru, en) => currentLanguage === "ru" ? ru : en;
  function addLog(message, ok = false) {
    const line = document.createElement("p");
    const stamp = `[00:00:${String(steps[Math.max(0,index-1)]?.[0] || 1).padStart(2,"0")}]`;
    const time = document.createElement("b"); time.textContent = stamp;
    line.append(time, document.createTextNode(` ${message}`));
    if (ok) line.classList.add("log-ok");
    log.append(line);
    while (log.children.length > 7) log.firstElementChild.remove();
  }
  function runStep() {
    if (unlocked || index >= steps.length) return;
    const [percent, label, en, ru] = steps[index++];
    addLog(langText(ru, en), percent === 100);
    bar.style.width = `${percent}%`; value.textContent = `${String(percent).padStart(2,"0")}%`; stage.textContent = label;
    if (percent === 100) {
      input.disabled = false; unlock.disabled = false; input.focus({ preventScroll:true });
      input.placeholder = langText("введите unlock", "type unlock");
      feedback.textContent = langText("Подсказка: введите unlock или нажмите UNLOCK.", "Hint: type unlock or press UNLOCK.");
      return;
    }
    window.setTimeout(runStep, reduceMotion ? 80 : 560 + Math.random() * 260);
  }
  function enterPortfolio() {
    if (unlocked) return;
    unlocked = true;
    addLog(langText("ДОСТУП РАЗРЕШЁН — добро пожаловать.", "ACCESS GRANTED — welcome."), true);
    gate.classList.add("is-unlocked"); gate.setAttribute("aria-hidden", "true");
    document.body.classList.add("portfolio-access-granted");
    window.setTimeout(() => { gate.remove(); document.querySelector("#main")?.focus({preventScroll:true}); }, reduceMotion ? 0 : 700);
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim().toLowerCase() === "unlock") enterPortfolio();
    else { feedback.textContent = langText("Команда не распознана. Используйте unlock.", "Command not recognized. Use unlock."); input.select(); }
  });
  skip.addEventListener("click", enterPortfolio);
  document.querySelectorAll("[data-access-ru]").forEach((element) => {
    // Keep the gate language synchronized with the site language toggle.
    const observer = new MutationObserver(() => { element.textContent = langText(element.dataset.accessRu, element.dataset.accessEn); });
    observer.observe(document.documentElement, { attributes:true, attributeFilter:["lang"] });
  });
  runStep();
}

initCyberRange();
applyLanguage("ru");
initAccessSequence();
