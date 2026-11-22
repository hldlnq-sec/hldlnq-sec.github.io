# Быстрое заполнение портфолио — 10–15 минут

Все основные персональные поля собраны в одном месте: `js/script.js`, объект `PROFILE` в самом начале файла. Для базовой персонализации достаточно изменить только его. Не нужно искать имя и контакты по всему HTML.

## 1. Заполните PROFILE

```js
const PROFILE = {
  name: "Имя Фамилия",
  roleRu: "Студент ИБ · открыт к стажировке",
  roleEn: "Information Security Student · Open to Internship",
  summaryRu: "Кратко: кто вы, что изучаете и чем подтверждаете навыки.",
  summaryEn: "A concise English summary of your focus and practical work.",
  university: "Название университета",
  facultyRu: "Название факультета",
  facultyEn: "Faculty name",
  studyPeriod: "2025—2028",
  gpa: "8.75",
  locationRu: "Город, страна",
  locationEn: "City, Country",
  languages: "RU · EN · FR",
  languageLevelsRu: "Русский — родной · English — B1 · Français — A2",
  languageLevelsEn: "Russian — native · English — B1 · French — A2",
  scholarshipRu: "Стипендиат",
  scholarshipEn: "Scholarship recipient",
  email: "name@example.com",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username/",
  telegram: "https://t.me/username",
  instagram: "https://www.instagram.com/username/",
};
```

Оставьте ненужные контакты пустыми (`""`). Карточки пустых или некорректных контактов не отображаются. Используйте только публичные данные.

## 2. Что ещё персонализировать

| Что | Где искать | Что заменить |
|---|---|---|
| Текст «Обо мне» | `js/script.js` → `translations.ru` / `translations.en` | `aboutP1`, `aboutP2`, `aboutP3` |
| Заголовок и специализация | `translations` | `heroTitleA`, `heroTitleB`, `heroTitleC`, `heroLead` |
| Навыки | `translations` | `skillNetwork`, `skillCyber`, `skillLinux`, `skillPentest` |
| Проекты | `translations` | `projectLabText`, `projectNetworkText`, `projectWindowsText`, `projectCtfText`, `projectCText` и `outcome...` |
| Образование | `translations` | `university`, `faculty`, `course1`…`course6`, `certNote` |
| Сертификаты | `index.html` | Карточки в секции `#experience` |
| Фотография университета | `index.html` | `src` изображения и подпись/атрибуция |
| Резюме PDF | `assets/documents/` и `index.html` | Заменить PDF и проверить ссылки на них |

Тексты на двух языках редактируются отдельно: сначала `ru`, затем `en`. Не добавляйте в публичный сайт сведения, которые нельзя раскрывать. Не заявляйте коммерческий опыт или сертификаты, которых нет.

## 3. Навигация через терминал

После открытия доступа терминал становится навигацией по сайту. Введите команду и нажмите Enter. Поддерживаются: 

- `help` — список команд; `whoami` — краткий профиль;
- `about` — обо мне; `university` — университет;
- `skills` или `expertise` — компетенции;
- `projects` — проекты; `education` или `certificates` — образование и сертификаты;
- `contact` — контакты; `home` — начало страницы;
- `map`, `trace`, `mission` — интерактивная учебная зона;
- `clear` — очистить вывод.

Команды навигации плавно прокручивают страницу к нужному разделу. Это локальная allow-list-логика: команды ОС не исполняются.

## 4. Проверка перед GitHub Pages

1. Найдите в проекте `YOUR NAME`, `YOUR_EMAIL`, `example.com`, `username` и замените демонстрационные значения.
2. Проверьте, что каждый контакт ведёт на ваш реальный профиль.
3. Откройте сайт и переключите RU/EN.
4. Проверьте все команды терминала, включая `home` и `contact`.
5. Откройте сайт на узком экране телефона.
6. Проверьте, что PDF-файлы не содержат шаблонных полей и личных данных, которые не следует публиковать.
7. Загрузите содержимое папки проекта в корень репозитория `username.github.io`.

## 5. Важно

GitHub Pages — статический хостинг. Сайт не хранит данные посетителей и не отправляет форму обратной связи. Терминал — демонстрационная навигация по заранее заданным командам, а не настоящий shell.
