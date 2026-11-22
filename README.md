> **Быстрое заполнение:** все основные личные данные собраны в объекте `PROFILE` в начале `js/script.js`. Пошаговая карта заполнения всех разделов находится в [`PROFILE-QUICK-SETUP.md`](PROFILE-QUICK-SETUP.md).

# Cybersecurity Portfolio

Адаптивное двуязычное портфолио специалиста по информационной безопасности. Проект рассчитан на публикацию как статический сайт через **GitHub Pages**: HTML, CSS и vanilla JavaScript, без сборки и серверной части.

## Возможности

- переключение русского и английского языков;
- адаптивная навигация и мобильное меню;
- интерактивный демонстрационный терминал с allow-list командами;
- интерактивный Cyber Range: карта вымышленной сети из пяти узлов, локальная анимация трассировки и мини-миссия по Incident Response;
- три достижения сессии за исследование карты, трассировку и прохождение учебного сценария;
- быстрые команды терминала `map`, `trace` и `mission` для перехода к интерактивным модулям;
- проекты, компетенции, образование и три PDF-версии резюме;
- фотография учебного корпуса № 5 БГУИР с атрибуцией автора и лицензии;
- контактный блок со ссылками на GitHub, LinkedIn, Telegram, Instagram и Email (показываются только настроенные и проверенные ссылки);
- базовые меры безопасности: Content Security Policy через meta-тег, ограничение источников ресурсов, проверка URL социальных ссылок, ограничения длины пользовательского ввода и безопасный вывод текста через `textContent`.

## Структура репозитория

```text
.
├── index.html
├── README.md
├── README-FILL-IN-INSTRUCTIONS.md
├── SECURITY.md
├── PHOTO-CREDITS.md
├── .nojekyll
├── robots.txt
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── documents/
        ├── cv-general-security-source.pdf
        ├── cv-network-security-source.pdf
        └── cv-pentest-red-team-source.pdf
```

## Локальный запуск

Можно открыть `index.html` напрямую. Для более близкого к хостингу тестирования запустите сервер из корня проекта:

```bash
python -m http.server 8000
```

Затем откройте <http://localhost:8000>.

## Публикация на GitHub Pages

1. Создайте **публичный** GitHub-репозиторий, например `cybersecurity-portfolio`.
2. Загрузите в корень репозитория `index.html`, папки `css/`, `js/`, `assets/` и служебные файлы проекта.
3. Откройте репозиторий → **Settings → Pages**.
4. В разделе **Build and deployment** выберите **Deploy from a branch**.
5. Выберите ветку `main` и папку `/(root)`, затем нажмите **Save**.
6. Дождитесь успешного workflow в разделе **Actions**. Адрес сайта появится в Settings → Pages; обычно он имеет вид `https://USERNAME.github.io/REPOSITORY/`.
7. Включите **Enforce HTTPS**, когда настройка станет доступна.

Для сайта проекта `index.html` должен находиться в корне выбранной публикуемой папки. В репозитории уже есть пустой `.nojekyll`, чтобы GitHub Pages не пытался обрабатывать файлы через Jekyll.

## Перед публикацией

Обязательно выполните шаги из отдельной инструкции: [README-FILL-IN-INSTRUCTIONS.md](README-FILL-IN-INSTRUCTIONS.md). В частности, замените имя и контакты, проверьте публичность PDF-резюме и не коммитьте секреты, приватные документы или реальные данные клиентов.

## Контакты

Форма обратной связи намеренно не используется: GitHub Pages — статический хостинг и не принимает сообщения на сервер сайта. Вместо формы предусмотрены прямые ссылки на GitHub, LinkedIn, Telegram, Instagram и Email. Настройте нужные значения в объекте `PROFILE` в `js/script.js`. Пустые, некорректные или ведущие только на главную страницу соцсети ссылки скрываются. Email открывает почтовое приложение пользователя через `mailto:`; фактическая отправка зависит от настроек его устройства.


## Ограничения и безопасность

GitHub Pages — статический хостинг. Он не исполняет PHP/Python backend, не хранит секреты и не обеспечивает серверную обработку форм. Если когда-нибудь понадобится форма с отправкой непосредственно со страницы, потребуется отдельный form-service или backend; API-ключи нельзя помещать в публичный JavaScript.

GitHub Pages не предоставляет штатного способа задавать произвольные HTTP response headers для сайта из обычного репозитория. Поэтому CSP задана через HTML meta-тег; некоторые директивы, например `frame-ancestors`, работают только как HTTP-заголовок и здесь не могут быть включены. См. [SECURITY.md](SECURITY.md).

Сайт-портфолио и репозиторий публичны. Не размещайте там конфиденциальные сведения, персональные данные третьих лиц, внутренние адреса, токены, пароли или материалы, на публикацию которых у вас нет прав.

## Содержание

Описание обучения и проектов основано на предоставленных резюме. Учебная и лабораторная практика обозначена именно как учебная; коммерческий опыт и несуществующие рекомендации не добавлялись.


## Cyber Range — интерактивная учебная зона

На странице есть локальная симуляция Cyber Range: условная карта сети с пятью выбираемыми узлами, анимированная трассировка маршрута и мини-миссия из трёх вопросов по Incident Response. За исследование узлов, завершение трассировки и прохождение миссии посетитель открывает достижения текущей сессии.

Все узлы, адреса из специальных документационных диапазонов и записи событий вымышлены. Симуляция не сканирует устройства, не подключается к внешним системам, не выполняет команды ОС, не сохраняет результаты на сервере и не собирает данные посетителей. Реализация использует только HTML, CSS и JavaScript и работает на GitHub Pages без сборки и backend.

Быстрые команды терминала: `map` — открыть карту, `trace` — запустить визуальную трассировку, `mission` — перейти к учебному сценарию.

## Cyber Range — interactive learning area

The page includes a browser-only Cyber Range: a fictional five-node network map, an animated route trace, and a three-question Incident Response mini mission. Visitors can unlock session achievements by inspecting the nodes, completing the trace, and finishing the mission.

All nodes, documentation-range IP addresses, and event records are fictional. The simulation does not scan devices, connect to external systems, execute operating-system commands, store results on a server, or collect visitor data. It uses only HTML, CSS, and JavaScript and runs on GitHub Pages without a build step or backend.

Terminal shortcuts: `map` opens the map, `trace` starts the visual route animation, and `mission` opens the learning scenario.


## First-entry experience

On page load, visitors see a fictional terminal access sequence. The animation is a visual introduction only: it does not connect to targets, scan networks, run shell commands, or authenticate against a real system. Visitors can type `unlock` when the sequence completes or use **Skip simulation**. The portfolio remains a static GitHub Pages site.

The project cards use a responsive SVG network topology. The diagram scales within its visual panel on mobile screens, and the project outcome label stacks above its description on narrow viewports.

## Terminal navigation

After the access intro, the terminal can navigate the portfolio: `about`, `university`, `skills`, `expertise`, `projects`, `education`, `certificates`, `contact`, and `home`. Learning-area commands include `map`, `trace`, and `mission`. All commands are local allow-listed actions; no operating-system shell is exposed.


## Terminal-first interface

После демонстрационной заставки сайт открывает полноэкранную рабочую среду. Терминал остаётся закреплённым в нижней панели, а команды открывают разделы портфолио во внутренних окнах поверх рабочего пространства — без перехода на отдельные страницы. Команда `home` закрывает активное окно, `help` показывает команды. Раздел Cyber Range перемещается в окно целиком, поэтому интерактивная карта и учебная миссия сохраняют обработчики событий.

Фоновая панель Firewall — локальная визуальная симуляция условного сетевого трафика. `AUTO DEFENSE` меняет режим симуляции, `BLOCK NEXT` блокирует следующий демонстрационный пакет. Никакие реальные IP-адреса не опрашиваются, пакеты не отправляются, сканирование и системные команды не выполняются.

Основные команды: `help`, `about`, `whoami`, `university`, `skills`, `expertise`, `network`, `lab`, `projects`, `education`, `certificates`, `resume`, `contact`, `firewall`, `map`, `trace`, `mission`, `home`, `clear`.


## Firewall Defense

The command workspace includes an offline packet-triage mini-game. Inspect six fictional events and choose **ALLOW** or **BLOCK**. Five correct decisions unlock the local `SECURITY ANALYST` achievement. All source addresses are documentation-only examples; no network traffic is sent.

Terminal command: `defense`.
