/*
 * Personal cybersecurity portfolio
 * Before publishing, edit the PROFILE object below with real contact details.
 * The terminal is a client-side demonstration: it does not execute shell commands.
 */

const PROFILE = {
  name: "Ярослав Hldlnq",
  email: "y.rimashevski.work@gmail.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

const translations = {
  ru: {
    skip: "Перейти к содержанию", navAbout: "Обо мне", navUniversity: "БГУИР", navExpertise: "Компетенции", navProjects: "Проекты", navEducation: "Образование", navContact: "Контакты", headerCta: "Связаться",
    heroEyebrow: "ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ / ПОРТФОЛИО", heroTitleA: "Изучаю угрозы.", heroTitleB: "Строю понимание", heroTitleC: "цифровой защиты.", heroLead: "Студент факультета информационной безопасности БГУИР. Изучаю сетевую безопасность, Linux и основы тестирования на проникновение — и закрепляю знания на собственных учебных проектах.", heroProjects: "Смотреть проекты", heroContact: "Обсудить возможность", metaFocus: "ФОКУС", metaStatus: "СТАТУС", metaOpen: "Открыт к стажировке", codeStatus: "ПРОФИЛЬ АКТИВЕН", heroScroll: "ЛИСТАЙТЕ, ЧТОБЫ ИЗУЧИТЬ ПРОФИЛЬ",
    aboutIndex: "ПРОФИЛЬ", aboutKicker: "НЕМНОГО ОБО МНЕ", aboutTitle: "Интерес к безопасности начинается с <span class=\"text-accent\">понимания систем.</span>", aboutP1: "Я учусь на факультете информационной безопасности Белорусского государственного университета информатики и радиоэлектроники. Мне интересно разбираться в том, как устроены сети и операционные системы, где возникают уязвимости и как выстраиваются базовые механизмы защиты.", aboutP2: "Теорию стараюсь закреплять практикой: развернул изолированную виртуальную лабораторию на Kali Linux и Metasploitable, выполняю сетевые упражнения в Cisco Packet Tracer, изучаю Linux, Windows и основы анализа безопасности.", aboutP3: "Сейчас ищу возможность присоединиться к команде в качестве стажёра или начинающего специалиста, учиться у опытных коллег и постепенно брать на себя реальные технические задачи.", statGpa: "СРЕДНИЙ БАЛЛ", statScholarship: "Стипендиат", statStudy: "ОБУЧЕНИЕ", statLanguages: "ЯЗЫКИ", statLanguageLevels: "Родной · A2–B1 · B1–B2",
    universityIndex: "УНИВЕРСИТЕТ", universityKicker: "МОЯ ОБРАЗОВАТЕЛЬНАЯ СРЕДА", universityTitle: "БГУИР — место, где <span class=\"text-accent\">формируется моя техническая база.</span>", universityText: "Я учусь на факультете информационной безопасности Белорусского государственного университета информатики и радиоэлектроники. Учебная программа помогает выстраивать фундамент в сетях, операционных системах, программировании и принципах информационной безопасности, а самостоятельная практика позволяет закреплять эти знания в лабораторных проектах.", universityFactLocation: "ГОРОД", universityFactFaculty: "ФАКУЛЬТЕТ", universityFactFacultyValue: "Информационной безопасности", universityFactPeriod: "ПЕРИОД ОБУЧЕНИЯ", universityOfficial: "Официальный сайт университета", universityPhotoMain: "Главный корпус · Минск", universityPhotoAerial: "Корпус № 5 · вид с высоты", universityPhotoBuilding: "Учебный корпус № 6", universityPhotoNote: "Фотография учебного корпуса № 5 представлена для визуального контекста. Автор и условия лицензирования указаны под изображением.", universityAltMain: "Главный корпус Белорусского государственного университета информатики и радиоэлектроники", universityAltAerial: "Учебный корпус № 5 БГУИР, вид с высоты", universityAltBuilding: "Учебный корпус № 6 БГУИР", universityGalleryLabel: "Фотографии Белорусского государственного университета информатики и радиоэлектроники", terminalWindowLabel: "Интерактивный терминал с командами профиля",
    terminalStep1Title: "Выберите команду", terminalStep1Text: "Нажмите на одну из подсказок ниже или откройте справочник команд.", terminalStep2Title: "Посмотрите результат", terminalStep2Text: "Ответ появится в окне терминала. Можно вводить команды вручную и нажимать Enter.", terminalStep3Title: "Продолжайте исследовать", terminalStep3Text: "Команды не зависят друг от друга. Для очистки истории используйте clear.", terminalLocalDemo: "ЛОКАЛЬНАЯ ДЕМО-СЕССИЯ", terminalSafetyNote: "Безопасная демонстрация: команды показывают только информацию портфолио и не запускают системные процессы.", terminalCommandsKicker: "СПРАВОЧНИК", terminalCommandsTitle: "Команды, которые можно попробовать", terminalCommandsText: "Нажмите на карточку — команда выполнится автоматически. Или введите её самостоятельно в строке терминала.", terminalCmdHelp: "Показать полный список команд и краткую справку.", terminalCmdWhoami: "Кратко представить профиль, обучение и карьерный фокус.", terminalCmdSkills: "Посмотреть технические навыки и инструменты.", terminalCmdNetwork: "Узнать, с какими сетевыми технологиями я работаю.", terminalCmdLab: "Посмотреть состав и назначение учебной лаборатории.", terminalCmdProjects: "Получить список проектов и перейти к их описанию.", terminalCmdEducation: "Посмотреть образование, GPA и курсы.", terminalCmdContact: "Узнать о доступных способах связи.", terminalCmdClear: "Очистить историю вывода и начать заново.",

    expertiseIndex: "КОМПЕТЕНЦИИ", expertiseKicker: "ЧТО Я ИЗУЧАЮ", expertiseTitle: "Техническая база<br>и <span class=\"text-accent\">направления развития.</span>", expertiseLead: "Мои текущие знания и учебная практика. Уровень навыков — начальный; список отражает технологии, с которыми я знакомлюсь и работаю в учебной среде.", skillNetwork: "Основы сетевой архитектуры и взаимодействия устройств. OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS, базовая настройка и проверка соединений.", skillCyber: "Основы информационной безопасности, знакомство с анализом уязвимостей, моделями безопасности, цифровыми подписями и базовыми концепциями реагирования на инциденты.", skillLinux: "Работа с командной строкой Linux и Windows, основы администрирования и изучение системной информации и событий безопасности Windows.", skillPentest: "Знакомство с методами контролируемого тестирования в собственной лаборатории, анализом поведения уязвимых систем и вводными CTF-заданиями.", toolkitLabel: "ИНСТРУМЕНТЫ И ТЕХНОЛОГИИ",
    terminalIndex: "ИНТЕРАКТИВ", terminalKicker: "ПОПРОБУЙТЕ КОМАНДЫ", terminalTitle: "Загляните в мой <span class=\"text-accent\">терминал.</span>", terminalText: "Это интерактивная версия моего профиля. Через короткие команды можно посмотреть направления обучения, проекты, инструменты и контакты, не переходя по всей странице.", terminalHintLabel: "БЫСТРЫЙ СТАРТ:", terminalWelcome: "Локальная демонстрационная консоль профиля. Начните с help, чтобы увидеть все доступные команды.", terminalPlaceholder: "например, skills или projects...", terminalKeyboardHelp: "ENTER — выполнить команду · ↑ / ↓ — история команд · clear — очистить консоль",
    projectsIndex: "ПРОЕКТЫ", projectsKicker: "ПРАКТИКА И ОБУЧЕНИЕ", projectsTitle: "Практика — мой способ<br><span class=\"text-accent\">закреплять знания.</span>", projectsLead: "Учебные и самостоятельные проекты, в которых я применяю изучаемые концепции. Описания отражают выполненную работу без преувеличения результатов.", projectPersonal: "ЛИЧНЫЙ ПРОЕКТ", projectAcademic: "УЧЕБНЫЙ / ТРЕНИНГОВЫЙ ПРОЕКТ", projectIndependent: "САМОСТОЯТЕЛЬНОЕ ОБУЧЕНИЕ", projectLabText: "Создал изолированную виртуальную среду для изучения анализа уязвимостей и контролируемого тестирования. Настроил Kali Linux и Metasploitable в VirtualBox, изучал поведение системы и сетевое взаимодействие в лабораторных условиях.", projectNetworkText: "Выполнял упражнения по основам сетевой настройки и проверке связности в Cisco Packet Tracer. Работал с концепциями OSI и TCP/IP, адресацией IPv4/IPv6 и назначением DNS, DHCP, HTTP и HTTPS.", projectWindowsText: "Изучал основы безопасности Windows и вводные концепции реагирования на инциденты. Практиковал работу с командной строкой, системной информацией и журналами, имеющими отношение к безопасности.", projectCtfText: "Знакомился с вводными заданиями Capture The Flag, применяя базовые знания информационной безопасности и навыки решения задач. Самостоятельно изучал принципы OSINT и работу с общедоступной информацией.", projectCText: "Разработал учебный проект на языке C для подбора и рекомендации подходящих вакансий. Применял алгоритмические концепции, реализовывал основную логику и обработку данных, тестировал функциональность.", outcomeLabel: "РЕЗУЛЬТАТ", outcomeLab: "Практика работы с виртуализированной лабораторией и базовыми сценариями оценки уязвимостей.", outcomeNetwork: "Закрепление базовых принципов сетевой архитектуры, адресации и взаимодействия протоколов.", outcomeWindows: "Знакомство с источниками системной информации и базовыми подходами к анализу событий.", outcomeCtf: "Первичное знакомство с форматом практических задач и методами анализа открытых источников.",
    educationIndex: "ОБРАЗОВАНИЕ", educationKicker: "ОБУЧЕНИЕ И СЕРТИФИКАТЫ", educationTitle: "Фундамент для <span class=\"text-accent\">дальнейшего роста.</span>", university: "Белорусский государственный университет информатики и радиоэлектроники", faculty: "Факультет информационной безопасности · Бакалавриат", scholarship: "Стипендиат", courseworkLabel: "ПРОФИЛЬНЫЕ ДИСЦИПЛИНЫ", course1: "Информационная безопасность", course2: "Компьютерные сети", course3: "Программирование и алгоритмы", course4: "Операционные системы", course5: "Цифровые подписи", course6: "Модели безопасности", certTitle: "Курсы и сертификаты", certNote: "Также самостоятельно изучал вводные материалы по OSINT (без сертификата).",
    resumeKicker: "РЕЗЮМЕ В PDF", resumeTitle: "Подробности моего<br><span class=\"text-accent\">профессионального профиля.</span>", resumeText: "Подготовлены три версии резюме с разными акцентами — общий профиль информационной безопасности, сетевая безопасность и основы Pentest / Red Team.", resumeGeneral: "Общий профиль ИБ", resumeNetwork: "Сетевая безопасность", resumePentest: "Pentest / Red Team",
    contactIndex: "КОНТАКТЫ", contactKicker: "НА СВЯЗИ", contactTitle: "Давайте обсудим <span class=\"text-accent\">возможности.</span>", contactText: "Открыт к стажировкам, Junior-возможностям и профессиональному общению в сфере информационной безопасности. Буду рад рассказать о своих проектах и обсудить, чем могу быть полезен команде.", githubPlaceholder: "Добавить профиль GitHub", linkedinPlaceholder: "Добавить профиль LinkedIn", formEyebrow: "ФОРМА ОБРАТНОЙ СВЯЗИ", formSecure: "ЛОКАЛЬНАЯ ПРОВЕРКА", formName: "Ваше имя", formNamePlaceholder: "Имя", formEmail: "Email для ответа", formMessage: "Сообщение", formMessagePlaceholder: "Расскажите, по какому вопросу вы хотели бы связаться...", formSubmit: "Подготовить сообщение", formPrivacy: "Форма проверяет введённые данные в браузере. Для отправки потребуется указать рабочий email в настройках проекта или подключить сервис обработки форм.", footerTagline: "Постоянное обучение. Осознанная практика. Ответственный подход к безопасности.", backTop: "НАВЕРХ ↑", footerRights: "Все права защищены.", footerLocation: "ПОРТФОЛИО ПО ИНФОРМАЦИОННОЙ БЕЗОПАСНОСТИ",
    formInvalid: "Проверьте поля: укажите имя, корректный email и сообщение не короче 10 символов.", formNoRecipient: "Поля проверены. Укажите рабочий адрес в PROFILE.email в файле js/script.js, чтобы включить отправку через почтовый клиент.", formOpening: "Открываю почтовое приложение с подготовленным сообщением…", terminalUnknown: "Команда не найдена. Введите help, чтобы посмотреть доступные команды.",
  },
  en: {
    skip: "Skip to content", navAbout: "About", navUniversity: "BSUIR", navExpertise: "Expertise", navProjects: "Projects", navEducation: "Education", navContact: "Contact", headerCta: "Get in touch",
    heroEyebrow: "INFORMATION SECURITY / PORTFOLIO", heroTitleA: "Studying threats.", heroTitleB: "Building an understanding", heroTitleC: "of digital defense.", heroLead: "Information Security student at BSUIR. I study network security, Linux, and penetration-testing fundamentals, then reinforce that knowledge through hands-on academic and personal projects.", heroProjects: "Explore projects", heroContact: "Discuss an opportunity", metaFocus: "FOCUS", metaStatus: "STATUS", metaOpen: "Open to internships", codeStatus: "PROFILE ACTIVE", heroScroll: "SCROLL TO EXPLORE THE PROFILE",
    aboutIndex: "PROFILE", aboutKicker: "A LITTLE ABOUT ME", aboutTitle: "My interest in security starts with <span class=\"text-accent\">understanding systems.</span>", aboutP1: "I study at the Faculty of Information Security at the Belarusian State University of Informatics and Radioelectronics. I enjoy understanding how networks and operating systems work, where vulnerabilities arise, and how foundational security mechanisms are designed.", aboutP2: "I reinforce theory with practice: I built an isolated virtual lab using Kali Linux and Metasploitable, complete networking exercises in Cisco Packet Tracer, and study Linux, Windows, and security analysis fundamentals.", aboutP3: "I am looking for an opportunity to join a team as an intern or junior-level candidate, learn from experienced colleagues, and gradually take on real technical tasks.", statGpa: "GRADE POINT AVERAGE", statScholarship: "Scholarship recipient", statStudy: "EDUCATION", statLanguages: "LANGUAGES", statLanguageLevels: "Native · A2–B1 · B1–B2",
    universityIndex: "UNIVERSITY", universityKicker: "MY ACADEMIC ENVIRONMENT", universityTitle: "BSUIR is where <span class=\"text-accent\">I am building my technical foundation.</span>", universityText: "I study at the Faculty of Information Security at the Belarusian State University of Informatics and Radioelectronics. The programme helps me build a foundation in networking, operating systems, programming, and information-security principles, while independent practice lets me reinforce this knowledge through lab projects.", universityFactLocation: "LOCATION", universityFactFaculty: "FACULTY", universityFactFacultyValue: "Information Security", universityFactPeriod: "STUDY PERIOD", universityOfficial: "University official website", universityPhotoMain: "Main building · Minsk", universityPhotoAerial: "Academic building No. 5 · aerial view", universityPhotoBuilding: "Academic building No. 6", universityPhotoNote: "The photograph of academic building No. 5 is included for visual context. Photographer credit and license details are provided below the image.", universityAltMain: "Main building of the Belarusian State University of Informatics and Radioelectronics", universityAltAerial: "BSUIR academic building No. 5, aerial view", universityAltBuilding: "BSUIR academic building No. 6", universityGalleryLabel: "Photographs of the Belarusian State University of Informatics and Radioelectronics", terminalWindowLabel: "Interactive portfolio command terminal",
    terminalStep1Title: "Choose a command", terminalStep1Text: "Click one of the shortcuts or choose a command from the reference below.", terminalStep2Title: "Read the output", terminalStep2Text: "The result appears in the terminal window. You can also type a command and press Enter.", terminalStep3Title: "Explore further", terminalStep3Text: "Commands are independent. Use clear to remove the output and start again.", terminalLocalDemo: "LOCAL DEMO SESSION", terminalSafetyNote: "Safe demo: commands only display portfolio information and do not run system processes.", terminalCommandsKicker: "REFERENCE", terminalCommandsTitle: "Commands to try", terminalCommandsText: "Click a card to run its command, or type it yourself in the terminal input.", terminalCmdHelp: "Show the full command list and a short help message.", terminalCmdWhoami: "See a short profile summary, study details, and career focus.", terminalCmdSkills: "Review technical foundations and tools.", terminalCmdNetwork: "See the networking technologies I study and practise.", terminalCmdLab: "Explore the setup and purpose of my learning lab.", terminalCmdProjects: "List my projects and find their descriptions on the page.", terminalCmdEducation: "Review education, GPA, and completed courses.", terminalCmdContact: "See the available ways to contact me.", terminalCmdClear: "Clear the terminal output and start over.",

    expertiseIndex: "EXPERTISE", expertiseKicker: "AREAS I STUDY", expertiseTitle: "Technical foundations<br>and <span class=\"text-accent\">areas of development.</span>", expertiseLead: "My current knowledge and hands-on learning. These are foundational skills; the list reflects technologies I have studied and used in an academic or lab environment.", skillNetwork: "Networking architecture and device communication fundamentals. OSI, TCP/IP, IPv4/IPv6, DNS, DHCP, HTTP/HTTPS, basic configuration, and connectivity testing.", skillCyber: "Information security fundamentals, introduction to vulnerability analysis, security models, digital signatures, and basic incident response concepts.", skillLinux: "Linux and Windows command-line use, basic administration concepts, and an introduction to Windows system information and security events.", skillPentest: "An introduction to controlled testing in a personal lab, observing vulnerable systems, and working through introductory CTF exercises.", toolkitLabel: "TOOLS & TECHNOLOGIES",
    terminalIndex: "INTERACTIVE", terminalKicker: "TRY A FEW COMMANDS", terminalTitle: "Take a look at my <span class=\"text-accent\">terminal.</span>", terminalText: "An interactive version of my profile. Explore my learning areas, projects, tools, and contact details through short terminal commands instead of browsing the whole page.", terminalHintLabel: "QUICK START:", terminalWelcome: "Local profile demo console. Start with help to see all available commands.", terminalPlaceholder: "e.g. skills or projects...", terminalKeyboardHelp: "ENTER — run command · ↑ / ↓ — command history · clear — reset the console",
    projectsIndex: "PROJECTS", projectsKicker: "PRACTICE & LEARNING", projectsTitle: "Practice is how I <br><span class=\"text-accent\">reinforce knowledge.</span>", projectsLead: "Academic and independent projects where I apply the concepts I study. The descriptions are intentionally factual and do not overstate the outcomes.", projectPersonal: "PERSONAL PROJECT", projectAcademic: "ACADEMIC / TRAINING PROJECT", projectIndependent: "INDEPENDENT LEARNING", projectLabText: "Built an isolated virtual environment to study vulnerability analysis and controlled security testing. Configured Kali Linux and Metasploitable in VirtualBox and explored system behavior and network interaction in a lab setting.", projectNetworkText: "Completed networking configuration and connectivity exercises in Cisco Packet Tracer. Worked with OSI and TCP/IP concepts, IPv4/IPv6 addressing, and the roles of DNS, DHCP, HTTP, and HTTPS.", projectWindowsText: "Studied Windows security fundamentals and introductory incident response concepts. Practiced command-line interaction and reviewed system information and security-relevant logs.", projectCtfText: "Worked through introductory Capture The Flag exercises, applying foundational security knowledge and problem-solving skills. Independently studied OSINT principles and the use of publicly available information.", projectCText: "Developed an academic project in C to select and recommend suitable vacancies. Applied algorithmic concepts, implemented core logic and data processing, and tested the functionality.", outcomeLabel: "OUTCOME", outcomeLab: "Hands-on experience with a virtualized lab and introductory vulnerability-assessment scenarios.", outcomeNetwork: "Reinforced foundational concepts in network architecture, addressing, and protocol communication.", outcomeWindows: "Initial familiarity with system information sources and basic approaches to event analysis.", outcomeCtf: "An introduction to practical challenge formats and open-source information analysis.",
    educationIndex: "EDUCATION", educationKicker: "STUDY & CERTIFICATIONS", educationTitle: "A foundation for <span class=\"text-accent\">continued growth.</span>", university: "Belarusian State University of Informatics and Radioelectronics", faculty: "Faculty of Information Security · Bachelor's degree", scholarship: "Scholarship recipient", courseworkLabel: "RELEVANT COURSEWORK", course1: "Information Security", course2: "Computer Networks", course3: "Programming & Algorithms", course4: "Operating Systems", course5: "Digital Signatures", course6: "Security Models", certTitle: "Courses & certifications", certNote: "Also completed self-directed introductory OSINT study (no certificate).",
    resumeKicker: "PDF RESUMES", resumeTitle: "More details about my<br><span class=\"text-accent\">professional profile.</span>", resumeText: "Three resume versions are available, each with a different focus: general information security, network security, and Pentest / Red Team foundations.", resumeGeneral: "General InfoSec profile", resumeNetwork: "Network Security", resumePentest: "Pentest / Red Team",
    contactIndex: "CONTACT", contactKicker: "LET'S CONNECT", contactTitle: "Let's discuss <span class=\"text-accent\">opportunities.</span>", contactText: "I am open to internships, junior-level opportunities, and professional conversations in information security. I would be glad to walk you through my projects and discuss how I could contribute to a team.", githubPlaceholder: "Add GitHub profile", linkedinPlaceholder: "Add LinkedIn profile", formEyebrow: "CONTACT FORM", formSecure: "CLIENT-SIDE VALIDATION", formName: "Your name", formNamePlaceholder: "Name", formEmail: "Reply-to email", formMessage: "Message", formMessagePlaceholder: "Tell me what you would like to discuss...", formSubmit: "Prepare message", formPrivacy: "The form validates fields in your browser. To send messages, set a working email in the project configuration or connect a form-processing service.", footerTagline: "Continuous learning. Deliberate practice. A responsible approach to security.", backTop: "BACK TO TOP ↑", footerRights: "All rights reserved.", footerLocation: "INFORMATION SECURITY PORTFOLIO",
    formInvalid: "Please check the fields: enter your name, a valid email, and a message of at least 10 characters.", formNoRecipient: "Fields validated. Set a working address in PROFILE.email in js/script.js to enable email-client submission.", formOpening: "Opening your email app with a prepared message…", terminalUnknown: "Command not found. Type help to see the available commands.",
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
  renderTerminalWelcome();
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

// Personal contact details are centralized here for easy editing.
document.querySelectorAll("[data-contact-email]").forEach((element) => {
  element.href = `mailto:${PROFILE.email}`;
});
document.querySelectorAll("[data-contact-email-text]").forEach((element) => { element.textContent = PROFILE.email; });
const githubLink = document.querySelector('[data-contact-social="github"]');
const linkedinLink = document.querySelector('[data-contact-social="linkedin"]');
function safeHttpsUrl(value, fallback) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" ? parsed.href : fallback;
  } catch {
    return fallback;
  }
}

githubLink.href = safeHttpsUrl(PROFILE.github, "https://github.com/");
linkedinLink.href = safeHttpsUrl(PROFILE.linkedin, "https://www.linkedin.com/");
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
      ["result", "clear      — clear output"],
      ["muted", "Type a command below or click a command card."],
    ],
  },
  whoami: {
    ru: [["heading", "ПРОФИЛЬ"], ["result", "Студент факультета информационной безопасности БГУИР"], ["result", "GPA: 8.75 / 10 · обучение: 2025–2028"], ["result", "Фокус: Network Security · Information Security · Pentest Foundations"], ["muted", "Открыт к стажировке и Junior-возможностям."]],
    en: [["heading", "PROFILE"], ["result", "Information Security student at BSUIR"], ["result", "GPA: 8.75 / 10 · study period: 2025–2028"], ["result", "Focus: Network Security · Information Security · Pentest Foundations"], ["muted", "Open to internship and junior-level opportunities."]],
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
    ru: [["heading", "ОБРАЗОВАНИЕ И ОБУЧЕНИЕ"], ["result", "БГУИР · Факультет информационной безопасности · 2025–2028"], ["result", "GPA: 8.75 / 10 · стипендиат"], ["result", "Cisco Networking Academy: Introduction to Cybersecurity, Networking Basics, Packet Tracer"], ["result", "Stepik: The Basics of Linux Terminal, Basics of C Programming. Tasks"], ["muted", "Языки: русский — родной · английский — A2–B1 · французский — B1–B2."]],
    en: [["heading", "EDUCATION & TRAINING"], ["result", "BSUIR · Faculty of Information Security · 2025–2028"], ["result", "GPA: 8.75 / 10 · scholarship recipient"], ["result", "Cisco Networking Academy: Introduction to Cybersecurity, Networking Basics, Packet Tracer"], ["result", "Stepik: The Basics of Linux Terminal, Basics of C Programming. Tasks"], ["muted", "Languages: Russian — native · English — A2–B1 · French — B1–B2."]],
  },
  contact: {
    ru: [["heading", "КОНТАКТЫ"], ["result", `Email: ${PROFILE.email}`], ["result", "GitHub и LinkedIn: ссылки в блоке «Контакты» ниже."], ["muted", "Сейчас открыт к стажировкам и начальным позициям в сфере информационной безопасности."]],
    en: [["heading", "CONTACT"], ["result", `Email: ${PROFILE.email}`], ["result", "GitHub and LinkedIn links are available in the Contact section below."], ["muted", "Currently open to internships and entry-level information security roles."]],
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

// Client-side form validation. Configure PROFILE.email or connect a form endpoint for delivery.
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.classList.remove("is-error");
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim().slice(0, 80);
  const email = String(formData.get("email") || "").trim().slice(0, 254);
  const message = String(formData.get("message") || "").trim().slice(0, 2000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (name.length < 2 || !validEmail || message.length < 10) {
    formFeedback.textContent = translations[currentLanguage].formInvalid;
    formFeedback.classList.add("is-error");
    return;
  }
  const recipientConfigured = PROFILE.email && !PROFILE.email.includes("YOUR_EMAIL") && validEmailAddress(PROFILE.email);
  if (!recipientConfigured) {
    formFeedback.textContent = translations[currentLanguage].formNoRecipient;
    return;
  }
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nReply-to: ${email}\n\n${message}`);
  formFeedback.textContent = translations[currentLanguage].formOpening;
  window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
});

function validEmailAddress(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
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
  ".section-heading, .about-main, .stat-card, .university-copy, .university-photo, .expertise-card, .terminal-copy, .terminal-window, .terminal-command-card, .project-card, .education-block, .cert-block, .resume-panel, .contact-copy, .contact-form"
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

applyLanguage("ru");
