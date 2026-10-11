# Application

`Application` is the root of an Altrone app. Put it at the very top and place everything else inside it. It doesn't draw any layout itself — its job is to set things up for the components below it: the theme, the accent color, the language, shared icons, dialogs, toasts and notifications, and reduced motion. Without it, components can't find their colors and settings. For the page layout, put a [Screen](/en/components/layout/screen) inside.

## Minimal setup

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

With no props it follows the system theme, uses the blue accent and speaks English. The Inter and JetBrains Mono fonts come with the library and load on their own — you don't need to add anything.

## Theme

The `theme` prop chooses between light and dark mode. The default, `auto`, follows the system setting and switches right away when the user changes it — no page reload needed.

```tsx
{/* Follows the system theme — default behavior */}
<Application theme="auto">

{/* Always light */}
<Application theme="light">

{/* Always dark */}
<Application theme="dark">
```

The current theme is written to the `data-altrone-theme` attribute on the root element and on `<html>`. Popovers, tooltips and dropdowns open inside the root, so they pick up the theme and the accent automatically. The attribute on `<html>` is for global styles, and for overlays whose trigger sits outside any `Application`.

:::note
`Application` also copies the app background to `<body>` and `<html>`, and puts things back when it's removed. Without this, the strip you see when you scroll past the edge of the page (the "bounce" in Safari) would flash white, because the colors are defined on the root element and not on `<html>`.
:::

### Reading and changing the theme

Any component inside `Application` can read the current theme and change it with `useAltroneTheme()`:

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

### Persisting the chosen theme

Add `persistTheme` to remember the user's choice in `localStorage` (under the `altrone-theme` key) and use it on the next visit. A saved choice wins over `theme` and over the system setting.

```tsx
<Application persistTheme>
  <App />
</Application>
```

:::note
The choice is saved only after the user switches the theme at least once. Until then, `theme` and the system setting decide.
:::

### Avoiding a flash of the wrong theme

The server can't know which theme the user's system uses, so someone in dark mode might briefly see a light page before the app loads. To prevent this, `Application` adds a tiny script that sets the theme on `<html>` before anything is painted. It works well in most cases. If you need a guarantee with streaming SSR, put `getThemeInitScript()` in your document `<head>` yourself, using the same `theme` and `persistTheme` values you give `Application`:

```tsx
<script
  dangerouslySetInnerHTML={{ __html: getThemeInitScript('auto', true) }}
/>
```

To see how theme switching works under the hood, read [Dark theme](/en/foundations/darkTheme).

## Accent color

`accent` is the main color of your app. You see it in `submit` buttons, checked switches and checkboxes, sliders and progress bars.

```tsx
<Application accent="indigo">
```

Available values: `red`, `orange`, `amber`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`, `brown`.

:::note
The accent also sets the color of `info` messages and the `--accent-*` tokens, so they follow your brand. `danger`, `success` and `warning` keep their own colors whatever the accent is, so they always stay recognizable. See [Color](/en/foundations/color).
:::

## Localization

### Interface language

`language` sets the language of the texts built into the library: empty states, validation messages, pagination labels and so on. It doesn't touch your own content.

```tsx
<Application language="ru">
```

Available languages: `en` (English), `ru` (Russian), `fr` (French), `de` (German), `es` (Spanish), `zh` (Chinese), `pt` (Portuguese), `tr` (Turkish).

### Overriding individual strings

To change a single phrase without writing a whole translation, use `customLabels`. Keys look like `component.string` and are applied on top of the chosen language.

```tsx
<Application
  language="en"
  customLabels={{
    'autocompleteInput.loadError': 'Failed to load suggestions',
    'dataTable.empty': 'Nothing here yet',
  }}
>
```

### Using the strings in your own components

`useLocalization()` gives you the same translate function the library uses, so your own components can read the same texts — including your `customLabels`:

```tsx
import { useLocalization } from 'altrone-ui';

function EmptyState() {
  const t = useLocalization();

  return <p>{t('dataTable.empty')}</p>;
}
```

## Icons

Some components use the same icon for the same job — for example, the arrows in `Calendar`, `DatePicker` and `Pagination`, or the open/close chevron in `Select` and `ColorPicker`. Instead of changing it in every component, change it once with `icons`:

```tsx
import { Application } from 'altrone-ui';
import { MyChevronLeft, MyChevronRight } from './my-icons';

<Application icons={{ prev: <MyChevronLeft />, next: <MyChevronRight /> }}>
  <App />
</Application>;
```

Each value is a ready icon element (`<MyIcon />`), just like icon props elsewhere in the library. Pass only the roles you want to change — the rest keep their default `lucide-react` icons.

| Role      | Default        | Used by                            |
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

If an icon belongs to a single component (like the arrow of `Spoiler` or the sort icons of `DataTable`), change it through that component's own props instead. Your own components can read the current set with `useIcons()`, so they stay in step with your changes.

## Dialogs

`Application` makes `showAlert`, `showConfirm` and `showPrompt` available everywhere — in components, in store actions, in plain modules. Each one returns a promise that finishes when the user answers.

```tsx
import { showConfirm } from 'altrone-ui';

const confirmed = await showConfirm({
  title: 'Delete project?',
  message: 'This cannot be undone.',
  danger: true,
});
```

`showAlert` returns nothing, `showConfirm` returns `true` or `false`, and `showPrompt` returns the entered text or number, or `null` if the user cancelled. If there is no `Application` on the page, the call logs a warning and immediately returns the "cancelled" value.

## Toasts and notifications

`Application` also turns on `showToast`, `showNotification` and `dismissNotification`. Call them from anywhere, even outside React. Where they appear is set once for the whole app: `toastPlacement` picks the top or bottom edge (toasts are always centered), and `notificationPlacement` picks a corner.

```tsx
<Application toastPlacement="top" notificationPlacement="top-start">
  <App />
</Application>
```

:::note
`notificationPlacement` reads like the `placement` of `Popover` and `Tooltip`: the first word is the physical side (`top` or `bottom`), the second is the alignment (`start` or `end`), which follows the text direction — in left-to-right languages `start` is the left and `end` is the right.
:::

## Document title

`applicationName` is the name of your app. Whenever a [Screen](/en/components/layout/screen) with a `title` is mounted inside, `Application` keeps `document.title` in sync: "`<screen title>` - `<applicationName>`". With no `Screen.title`, the document title is just `applicationName`; with no `applicationName`, it's just the screen title.

```tsx
<Application applicationName="Altrone Mail">
  <Screen title="Inbox">{/* … */}</Screen>
</Application>
```

Switching between `Screen`s (in your router, say) updates the title on its own — nothing else to sync.

:::note
Pass `manageTitle={false}` to turn off the automatic sync and own `document.title` yourself.
:::

### Overriding it manually

For something beyond the usual title — an unread-message count, say — use `setPageTitle`. It works from anywhere, including outside React, and holds the override until `resetPageTitle()` reverts to the computed title.

```tsx
import { setPageTitle, resetPageTitle } from 'altrone-ui';

setPageTitle('3 unread — Inbox');
// ...
resetPageTitle();
```

:::note
`setPageTitle` applies even with `manageTitle={false}` — it's a manual mechanism, separate from the automatic sync.
:::

## Overriding part of the app

`Application` exists once, at the top. To change the theme, accent, language or icons for one block only, wrap it in `Override`. Everything you don't pass is inherited from the surrounding `Application`.

```tsx
<Override theme="dark" accent="red">
  <Button label="Delete project" />
</Override>
```

::playground{src="application/ApplicationOverrideDemo" caption="A dark block with its own accent inside a light page"}

`Override` draws its own background, so a different theme looks like a real panel. Popovers and tooltips opened from inside it follow its theme.

`customLabels` and `icons` are merged over the inherited ones. If you set `language`, the dictionary of that language replaces the inherited one, and `customLabels` from `Application` don't carry over.

:::note
`Modal`, `Drawer`, `Dialog` and notifications still render under the top-level `Application`, so they don't pick up the theme of an `Override`.
:::

## Reduced motion

Some people ask their system to reduce animations. `Application` respects that for you: animated components like `Modal`, `Popover`, `Tooltip`, `Spoiler` and notifications calm down on their own, and you don't need to add anything. See [Motion](/en/foundations/motion) for what changes and what deliberately stays.

## Root element

By default `Application` renders a `<div>` with three attributes: `data-altrone-root="true"`, `data-altrone-accent` and `data-altrone-theme`. The library's styles and overlays rely on them. `className`, `style`, `id`, `ref` and any other `div` attributes are applied to this element.

### Rendering into your own root element (asChild)

With `asChild`, `Application` doesn't add a `<div>`. It puts its attributes and classes on the one child you pass instead — for example, your own `<body>`.

```tsx
<Application asChild theme="auto" language="en">
  <body>
    <App />
  </body>
</Application>
```

## Usage with Next.js

`Application` uses state and effects, so in the Next.js App Router it has to be rendered from a client component. Create a small wrapper marked `'use client'` and use it in your root layout:

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
Don't import `Application` straight into a server component. It will fail, because the library doesn't mark itself as client code.
:::

## Props

:::prop[theme]{type="'auto' | 'light' | 'dark'" default="'auto'"}
Light or dark mode. `auto` follows the system setting and updates right away.
:::

:::prop[persistTheme]{type="boolean" default="false"}
Remembers the chosen theme in `localStorage` and uses it on the next visit, once the user has switched it at least once.
:::

:::prop[accent]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown'" default="'blue'"}
The main color of the app, applied to all components.
:::

:::prop[applicationName]{type="string"}
The app's name. Appended to `document.title` as "`<screen title>` - `applicationName`" while a `Screen` with a `title` is mounted.
:::

:::prop[manageTitle]{type="boolean" default="true"}
Turns off the automatic `document.title` sync with `Screen.title`/`applicationName`. `setPageTitle` still works when `false`.
:::

:::prop[language]{type="'en' | 'ru' | 'fr' | 'de' | 'es' | 'zh' | 'pt' | 'tr'" default="'en'"}
Language of the texts built into components. Doesn't affect your own content.
:::

:::prop[customLabels]{type="Partial<Localization>" default="{}"}
Replaces individual texts. Applied on top of the chosen `language`.
:::

:::prop[icons]{type="Partial<IconSet>" default="{}"}
Replaces icons shared by several components (`prev`, `next`, `open`, `close`, `search`, `clear`, `error`, `help`, `info`, `success`, `warning`, `danger`). An icon used by a single component is changed with that component's own props.
:::

:::prop[toastPlacement]{type="'top' | 'bottom'" default="'bottom'"}
Top or bottom edge for toasts. They are always centered.
:::

:::prop[notificationPlacement]{type="'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" default="'bottom-end'"}
Corner for notifications. Same side-and-alignment format as `placement` in `Popover` and `Tooltip`.
:::

:::prop[asChild]{type="boolean" default="false"}
Puts the root's attributes and classes on the single child element instead of adding its own `<div>` — for example, your own `<body>`.
:::

:::prop[className]{type="string"}
Extra class name for the root element.
:::

:::prop[style]{type="CSSProperties"}
Inline styles for the root element.
:::

:::prop[children]{type="ReactNode"}
Your app. With `asChild` it must be a single React element — that element's own children become the app content.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref to the root element: the `<div>`, or with `asChild`, the child element.
:::

All other `div` attributes (`id`, `data-*`, `aria-*`, event handlers) are passed to the root element.

### Override props

:::prop[theme]{type="'light' | 'dark'" default="inherited"}
Theme of the block.
:::

:::prop[accent]{type="Accent" default="inherited"}
Accent color of the block.
:::

:::prop[language]{type="Language" default="inherited"}
Language of the block.
:::

:::prop[customLabels]{type="Partial<Localization>"}
Texts merged over the inherited ones.
:::

:::prop[icons]{type="Partial<IconSet>"}
Icon roles merged over the inherited ones.
:::

All other `div` attributes, `className`, `style` and `ref` go to the block's root element.

## Related topics

- [Dark theme](/en/foundations/darkTheme) — how theme switching works, the `useAltroneTheme()` hook, and how to avoid a flash of the wrong theme
- [Screen](/en/components/layout/screen) — the page layout that goes inside `Application`
- [Color](/en/foundations/color) — the tokens the `accent` prop controls
- [Motion](/en/foundations/motion) — how reduced motion is handled across the library
