# Application

`Application` — это корень приложения на Altrone UI. Поставьте его в самый верх, а всё остальное положите внутрь. Свою вёрстку он не рисует: его задача — подготовить всё для компонентов внутри: тему, акцентный цвет, язык, общие иконки, диалоги, тосты и уведомления, а также поведение при отключённой анимации. Без него компоненты не найдут свои цвета и настройки. Для раскладки страницы положите внутрь [Screen](/ru/components/layout/screen).

## Минимальная настройка

```tsx
import { Application } from 'altrone-ui';
import 'altrone-ui/dist/style.css';

export default function App() {
  return (
    <Application>
      {/* your app */}
    </Application>
  );
}
```

Без пропов он следует системной теме, использует синий акцент и английский язык. Шрифты Inter и JetBrains Mono идут вместе с библиотекой и подключаются сами — добавлять ничего не нужно.

## Тема

Проп `theme` выбирает светлый или тёмный режим. Значение по умолчанию, `auto`, следует системной настройке и переключается сразу, как только пользователь её меняет, — перезагружать страницу не нужно.

```tsx
{/* Follows the system theme — default behavior */}
<Application theme="auto">

{/* Always light */}
<Application theme="light">

{/* Always dark */}
<Application theme="dark">
```

Текущая тема записывается в атрибут `data-altrone-theme` на корневом элементе и на `<html>`. Поповеры, тултипы и выпадающие меню открываются внутри корня, поэтому сами получают тему и акцент. Атрибут на `<html>` нужен для глобальных стилей и для оверлеев, у которых триггер находится вне какого-либо `Application`.

:::note
`Application` также копирует фон приложения на `<body>` и `<html>`, а при удалении возвращает всё как было. Без этого полоска, которую видно при прокрутке за край страницы («резинка» в Safari), мигала бы белым: цвета заданы на корневом элементе, а не на `<html>`.
:::

### Чтение и смена темы

Любой компонент внутри `Application` может узнать текущую тему и сменить её через `useAltroneTheme()`. `theme` — тема, которая показана на самом деле, всегда `'light'` или `'dark'`. `themePreference` — то, что выбрано, поэтому там может быть и `'auto'`, а `setTheme('auto')` возвращает тему к системной настройке.

```tsx
import { useAltroneTheme } from 'altrone-ui';

function ThemeSwitcher() {
  const { theme, setTheme } = useAltroneTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current: {theme}
    </button>
  );
}
```

### Сохранение выбранной темы

Добавьте `persistTheme`, чтобы выбор пользователя, в том числе `'auto'`, запоминался в `localStorage` (под ключом `altrone-theme`) и применялся при следующем визите. Сохранённый выбор важнее `theme`.

```tsx
<Application persistTheme>
  <App />
</Application>
```

:::note
Выбор сохраняется только после того, как пользователь хотя бы раз переключил тему. До этого момента решают `theme` и системная настройка.
:::

### Защита от вспышки неправильной темы

Сервер не знает, какая тема стоит в системе у пользователя, поэтому человек с тёмной темой мог бы на мгновение увидеть светлую страницу, пока приложение не загрузилось. Чтобы этого не случилось, `Application` добавляет крошечный скрипт, который выставляет тему на `<html>` ещё до отрисовки. В большинстве случаев этого достаточно. Если нужна гарантия при streaming SSR, положите `getThemeInitScript()` в `<head>` документа сами, с теми же `theme` и `persistTheme`, что вы передаёте в `Application`:

```tsx
<script
  dangerouslySetInnerHTML={{ __html: getThemeInitScript('auto', true) }}
/>
```

Как устроено переключение темы изнутри, читайте в статье [Тёмная тема](/ru/foundations/darkTheme).

## Акцентный цвет

`accent` — главный цвет вашего приложения. Его видно в кнопках `submit`, включённых переключателях и чекбоксах, слайдерах и индикаторах прогресса.

```tsx
<Application accent="indigo">
```

Доступные значения: `red`, `orange`, `amber`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`, `brown`.

:::note
Акцент также задаёт цвет сообщений `info` и токены `--accent-*`, так что они следуют вашему бренду. У `danger`, `success` и `warning` свои цвета, которые не зависят от акцента, — поэтому их всегда легко узнать. Подробнее — в статье [Цвет](/ru/foundations/color).
:::

## Локализация

### Язык интерфейса

`language` задаёт язык текстов, встроенных в библиотеку: пустые состояния, сообщения валидации, подписи пагинации и так далее. На ваш собственный контент он не влияет.

```tsx
<Application language="ru">
```

Доступные языки: `en` (английский), `ru` (русский), `fr` (французский), `de` (немецкий), `es` (испанский), `zh` (китайский), `pt` (португальский), `tr` (турецкий).

### Замена отдельных строк

Чтобы поменять одну фразу, не делая целый перевод, используйте `customLabels`. Ключи выглядят как `компонент.строка` и применяются поверх выбранного языка.

```tsx
<Application
  language="en"
  customLabels={{
    'autocompleteInput.loadError': 'Failed to load suggestions',
    'dataTable.empty': 'Nothing here yet',
  }}
>
```

### Строки в ваших компонентах

`useLocalization()` даёт ту же функцию перевода, которой пользуется сама библиотека, — ваши компоненты могут брать из неё те же тексты, включая ваши `customLabels`:

```tsx
import { useLocalization } from 'altrone-ui';

function EmptyState() {
  const t = useLocalization();

  return <p>{t('dataTable.empty')}</p>;
}
```

## Иконки

Некоторые компоненты используют одну и ту же иконку для одного и того же дела — например, стрелки в `Calendar`, `DatePicker` и `Pagination` или шеврон открытия и закрытия в `Select` и `ColorPicker`. Чтобы не менять её в каждом компоненте отдельно, замените её один раз через `icons`:

```tsx
import { Application } from 'altrone-ui';
import { MyChevronLeft, MyChevronRight } from './my-icons';

<Application icons={{ prev: <MyChevronLeft />, next: <MyChevronRight /> }}>
  <App />
</Application>;
```

Каждое значение — готовый элемент иконки (`<MyIcon />`), как и в иконочных пропах по всей библиотеке. Передавайте только те роли, которые хотите изменить, — остальные останутся стандартными иконками `lucide-react`.

| Роль      | По умолчанию   | Где используется                   |
| --------- | -------------- | ---------------------------------- |
| `prev`    | `ChevronLeft`  | Calendar, DatePicker, Pagination   |
| `next`    | `ChevronRight` | Calendar, DatePicker, Pagination   |
| `open`    | `ChevronDown`  | ColorPicker, Select, CollapsedList |
| `close`   | `ChevronUp`    | ColorPicker, Select, CollapsedList |
| `search`  | `Search`       | Search, Select                     |
| `clear`   | `Delete`       | Search, Select                     |
| `error`   | `CircleAlert`  | AutocompleteInput, FilePicker      |
| `help`    | `HelpCircle`   | Form, Tooltip                      |
| `info`    | `Info`         | Notifications, Result              |
| `success` | `CheckCircle2` | Notifications, Result              |
| `warning` | `AlertTriangle`| Notifications, Result              |
| `danger`  | `XCircle`      | Notifications, Result              |
| `dismiss` | `X`            | CloseButton (Modal, Drawer, Popover, Message, toasts and notifications) |

Если иконка принадлежит одному компоненту (например, стрелка у `Spoiler` или иконки сортировки у `DataTable`), меняйте её через собственные пропы этого компонента. Ваши компоненты могут узнать текущий набор через `useIcons()`, чтобы ваши замены работали и в них.

## Диалоги

`Application` делает `showAlert`, `showConfirm` и `showPrompt` доступными везде — в компонентах, в экшенах стора, в обычных модулях. Каждая функция возвращает промис, который завершается, когда пользователь ответил.

```tsx
import { showConfirm } from 'altrone-ui';

const confirmed = await showConfirm({
  title: 'Delete project?',
  message: 'This cannot be undone.',
  danger: true,
});
```

`showAlert` ничего не возвращает, `showConfirm` возвращает `true` или `false`, а `showPrompt` — введённый текст или число, либо `null`, если пользователь отменил. Если на странице нет `Application`, вызов пишет предупреждение в консоль и сразу возвращает значение «отмены».

## Тосты и уведомления

`Application` также включает `showToast`, `showNotification` и `dismissNotification`. Вызывайте их откуда угодно, даже из кода вне React. Где они появятся, задаётся один раз для всего приложения: `toastPlacement` выбирает верхний или нижний край (тосты всегда по центру), а `notificationPlacement` — угол экрана.

```tsx
<Application toastPlacement="top" notificationPlacement="top-start">
  <App />
</Application>
```

:::note
`notificationPlacement` читается так же, как `placement` у `Popover` и `Tooltip`: первое слово — физическая сторона (`top` или `bottom`), второе — выравнивание (`start` или `end`), которое зависит от направления текста: в языках слева направо `start` — это левый край, а `end` — правый.
:::

## Заголовок страницы

`applicationName` — название вашего приложения. Когда внутри смонтирован [Screen](/ru/components/layout/screen) с `title`, `Application` держит `document.title` в актуальном состоянии: «`<title экрана>` - `<applicationName>`». Без `title` у `Screen` заголовок — это просто `applicationName`; без `applicationName` — просто заголовок экрана.

```tsx
<Application applicationName="Altrone Mail">
  <Screen title="Входящие">{/* … */}</Screen>
</Application>
```

Переключение между `Screen` (например, в роутере) само обновляет заголовок — ничего дополнительно синхронизировать не нужно.

:::note
Чтобы отключить автоматическую синхронизацию и управлять `document.title` самостоятельно, передайте `manageTitle={false}`.
:::

### Ручное переопределение

Если нужно показать что-то сверх обычного заголовка — например, счётчик непрочитанных сообщений, — используйте `setPageTitle`. Она работает откуда угодно, включая код вне React, и держит переопределение до вызова `resetPageTitle()`, который возвращает вычисленный заголовок.

```tsx
import { setPageTitle, resetPageTitle } from 'altrone-ui';

setPageTitle('3 новых — Входящие');
// ...
resetPageTitle();
```

:::note
`setPageTitle` применяется даже при `manageTitle={false}` — это ручной механизм, отдельный от автоматической синхронизации.
:::

## Переопределение для части приложения

`Application` существует один раз, в самом верху. Чтобы поменять тему, акцент, язык или иконки только для одного блока, оберните его в `Override`. Всё, что вы не передали, наследуется от окружающего `Application`.

```tsx
<Override theme="dark" accent="red">
  <Button label="Delete project" />
</Override>
```

::playground{src="application/ApplicationOverrideDemo" caption="Тёмный блок со своим акцентом внутри светлой страницы"}

`Override` рисует собственный фон, поэтому другая тема выглядит как настоящая панель. Поповеры и тултипы, открытые изнутри, следуют его теме.

`customLabels` и `icons` объединяются с унаследованными. Если задать `language`, словарь этого языка заменяет унаследованный, и `customLabels` из `Application` не переносятся.

:::note
`Modal`, `Drawer`, `Dialog` и уведомления по-прежнему рендерятся под верхним `Application`, поэтому тему `Override` они не подхватывают.
:::

## Уменьшенная анимация

Некоторые люди просят систему уменьшать анимации. `Application` учитывает это за вас: анимированные компоненты вроде `Modal`, `Popover`, `Tooltip`, `Spoiler` и уведомлений сами становятся спокойнее, ничего добавлять не нужно. Что именно меняется и что намеренно остаётся, читайте в статье [Анимация](/ru/foundations/motion).

## Корневой элемент

По умолчанию `Application` рендерит `<div>` с тремя атрибутами: `data-altrone-root="true"`, `data-altrone-accent` и `data-altrone-theme`. На них опираются стили и оверлеи библиотеки. На этот элемент попадают `className`, `style`, `id`, `ref` и любые другие атрибуты `div`.

### Свой корневой элемент (asChild)

С `asChild` `Application` не добавляет `<div>`. Вместо этого он переносит свои атрибуты и классы на единственный переданный дочерний элемент — например, на ваш собственный `<body>`.

```tsx
<Application asChild theme="auto" language="en">
  <body>
    <App />
  </body>
</Application>
```

## Использование в Next.js

`Application` использует состояние и эффекты, поэтому в Next.js App Router его нужно рендерить из клиентского компонента. Сделайте небольшую обёртку с `'use client'` и подключите её в корневом layout:

```tsx filename="app/AltroneProvider.tsx"
'use client';

import { Application } from 'altrone-ui';
import 'altrone-ui/dist/style.css';

export function AltroneProvider({ children }: { children: React.ReactNode }) {
  return <Application persistTheme>{children}</Application>;
}
```

```tsx filename="app/layout.tsx"
import { AltroneProvider } from './AltroneProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AltroneProvider>{children}</AltroneProvider>
      </body>
    </html>
  );
}
```

:::warning
Не импортируйте `Application` напрямую в серверный компонент. Это не сработает: библиотека сама не помечена как клиентский код.
:::

## Свойства

:::prop[theme]{type="'auto' | 'light' | 'dark'" default="'auto'"}
Светлый или тёмный режим. `auto` следует системной настройке и обновляется сразу.
:::

:::prop[persistTheme]{type="boolean" default="false"}
Запоминает выбранную тему в `localStorage` и применяет её при следующем визите — после того как пользователь хотя бы раз её переключил.
:::

:::prop[accent]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown'" default="'blue'"}
Главный цвет приложения, применяется ко всем компонентам.
:::

:::prop[applicationName]{type="string"}
Название приложения. Добавляется к `document.title` как «`<title экрана>` - `applicationName`», пока смонтирован `Screen` с `title`.
:::

:::prop[manageTitle]{type="boolean" default="true"}
Отключает автоматическую синхронизацию `document.title` со `Screen.title`/`applicationName`. `setPageTitle` продолжает работать и при `false`.
:::

:::prop[language]{type="'en' | 'ru' | 'fr' | 'de' | 'es' | 'zh' | 'pt' | 'tr'" default="'en'"}
Язык текстов, встроенных в компоненты. На ваш собственный контент не влияет.
:::

:::prop[customLabels]{type="Partial<Localization>" default="{}"}
Заменяет отдельные тексты. Применяется поверх выбранного `language`.
:::

:::prop[icons]{type="Partial<IconSet>" default="{}"}
Заменяет иконки, общие для нескольких компонентов (`prev`, `next`, `open`, `close`, `search`, `clear`, `error`, `help`, `info`, `success`, `warning`, `danger`, `dismiss`). Иконка одного компонента меняется через его собственные пропы.
:::

:::prop[toastPlacement]{type="'top' | 'bottom'" default="'bottom'"}
Верхний или нижний край для тостов. Они всегда по центру.
:::

:::prop[notificationPlacement]{type="'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" default="'bottom-end'"}
Угол для уведомлений. Тот же формат «сторона-выравнивание», что и у `placement` в `Popover` и `Tooltip`.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит атрибуты и классы корня на единственный дочерний элемент вместо собственного `<div>` — например, на ваш `<body>`.
:::

:::prop[className]{type="string"}
Дополнительный класс корневого элемента.
:::

:::prop[style]{type="CSSProperties"}
Инлайн-стили корневого элемента.
:::

:::prop[children]{type="ReactNode"}
Ваше приложение. С `asChild` это должен быть один React-элемент — его собственные дочерние элементы становятся содержимым приложения.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref на корневой элемент: `<div>` или, с `asChild`, дочерний элемент.
:::

Все остальные атрибуты `div` (`id`, `data-*`, `aria-*`, обработчики событий) передаются на корневой элемент.

### Свойства Override

:::prop[theme]{type="'light' | 'dark'" default="inherited"}
Тема блока.
:::

:::prop[accent]{type="Accent" default="inherited"}
Акцентный цвет блока.
:::

:::prop[language]{type="Language" default="inherited"}
Язык блока.
:::

:::prop[customLabels]{type="Partial<Localization>"}
Тексты, объединяемые с унаследованными.
:::

:::prop[icons]{type="Partial<IconSet>"}
Роли иконок, объединяемые с унаследованными.
:::

Остальные атрибуты `div`, `className`, `style` и `ref` попадают на корневой элемент блока.

## Похожие темы

- [Тёмная тема](/ru/foundations/darkTheme) — как работает переключение темы, хук `useAltroneTheme()` и защита от вспышки неправильной темы
- [Screen](/ru/components/layout/screen) — раскладка страницы, которая кладётся внутрь `Application`
- [Цвет](/ru/foundations/color) — токены, которыми управляет проп `accent`
- [Анимация](/ru/foundations/motion) — как в библиотеке обрабатывается уменьшенная анимация
