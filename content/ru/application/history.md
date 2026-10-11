# Application

:::release[Altrone 4 Decent Dragon]{icon="/logos/altrone-4.png" logo="Application" name="Application" open="true"}
**4.0**

- Новый дизайн.
- Переименован из `AltroneApplication` в `Application`.
- Добавлен `asChild` для переноса атрибутов корня на ваш собственный элемент.
- Добавлен `persistTheme` для сохранения темы между визитами.
- Добавлен `Override` для смены темы, акцента, языка, подписей и иконок в части приложения.
- Добавлен проп `icons` для замены встроенных иконок сразу во всех компонентах.
- Добавлен проп `applicationName` и автоматическая синхронизация `document.title` со `Screen.title` (отключается пропом `manageTitle`).
- Добавлены императивные функции `setPageTitle`/`resetPageTitle` для ручного переопределения заголовка страницы.
- Добавлены языки: китайский (упрощённый), португальский и турецкий. Для немецкого и испанского исправлены коды — теперь `de` и `es`.
- Фон приложения теперь копируется на `<body>` и `<html>` — это убирает белые полосы в Safari.
- Удалены проп `config`, `useConfiguration()` и `Configuration`.
:::

:::release[Altrone 3 Curious CatZilla]{icon="/logos/altrone-3.png" image="/logos/altrone-3.png" name="AltroneApplication"}
**3.0**

- Новый дизайн.
- Добавлена обёртка `Configuration`, которая прокидывает `className`, `style` и другие параметры во все вложенные компоненты.
- Добавлен проп `customLabels` для переопределения отдельных строк локализации.
:::

:::release[Altrone 2 Blind Basilisk]{icon="/logos/altrone-2.png" image="/logos/altrone-2.png" name="AltroneApplication"}
**2.2**

- Хук `useThemeContext` помечен устаревшим в пользу `useAltrone`.

**2.1**

- Добавлены **Altrone Options** — глобальные настройки поведения компонентов (например, отключение анимаций) — и HOC `AltroneConfig` для переопределения опций в поддереве.

**2.0**

- Фокус-стили переведены на `:focus-visible`.
:::

:::release[Altrone 1 Angry Acromantula]{icon="/logos/altrone-1.png" image="/logos/altrone-1.png" name="AltroneApplication"}
**1.3**

- Исправлено отсутствие пропа `className` у `AltroneApplication`.

**1.0**

- Компонент появился как корневая обёртка приложения.
:::
