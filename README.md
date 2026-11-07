# Cybersecurity Portfolio

Адаптивное двуязычное портфолио специалиста по информационной безопасности. Проект рассчитан на публикацию как статический сайт через **GitHub Pages**: HTML, CSS и vanilla JavaScript, без сборки и серверной части.

## Возможности

- переключение русского и английского языков;
- адаптивная навигация и мобильное меню;
- интерактивный демонстрационный терминал с allow-list командами;
- проекты, компетенции, образование и три PDF-версии резюме;
- фотография учебного корпуса № 5 БГУИР с атрибуцией автора и лицензии;
- клиентская валидация контактной формы (подготовка письма через `mailto:`);
- базовые меры безопасности: Content Security Policy через meta-тег, ограничение источников ресурсов, проверка URL социальных ссылок, ограничения длины пользовательского ввода и безопасный вывод текста через `textContent`.

## Структура репозитория

```text
.
├── index.html
├── README.md
├── README-FILL-INSTRUCTIONS.md
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
