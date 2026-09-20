# Application

`Application` is the root component of every Altrone UI app. It sets up the theme, accent color, interface language, and the dialog and notification systems. Every other component must live inside it — without this wrapper they won't get the CSS variables and contexts they need.

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

With no props, the component works with sensible defaults: theme `auto`, accent `blue`, language `en`.

## Theme

The `theme` prop controls the color scheme. `auto` follows the OS-level `prefers-color-scheme` and switches in real time — if the user changes their system theme, the interface adapts without a page reload.

```tsx
{/* Follows the system theme — default behavior */}
<Application theme="auto">

{/* Always light */}
<Application theme="light">

{/* Always dark */}
<Application theme="dark">
```

:::note
When the theme changes, Altrone sets the `data-altrone-theme` attribute on both `<html>` and the root element. This is needed so portals (dialogs, tooltips, dropdowns) that render outside the main tree also get the right CSS variables.
:::

:::note
`Application` also mirrors the app background onto `<body>` and `<html>` (inline style, restored on unmount) and updates it when the theme changes. Without this, the overscroll area (rubber-band scrolling, notably in Safari) would flash white — the color tokens are declared on the root element, not on `<html>`.
:::

### Persisting the chosen theme

The `persistTheme` prop remembers the user's chosen theme in `localStorage` and restores it on the next visit — taking priority over `theme`/the system theme once a value has been stored.

```tsx
<Application persistTheme>
  <App />
</Application>
```

:::note
Persistence only kicks in after the user has explicitly switched the theme at least once (via `useAltroneTheme()`) — until then, the `theme` prop/system preference decides. See [Dark theme](darkTheme) for more on theme switching and the `useAltroneTheme()` hook.
:::

## Accent color

`accent` sets the primary color used across all components: `submit` buttons, the checked state of `Switch`/`Checkbox`/`Radio`, sliders, and progress/loading indicators. Pick it once — mixing accents within a single app isn't a good idea.

```tsx
<Application accent="indigo">
```

Available values: `red`, `pink`, `purple`, `indigo`, `blue`, `teal`, `amber`, `brown`.

## Localization

### Interface language

The `language` prop sets the language of built-in strings: empty states, validation error messages, pagination labels, and similar text in other components. It doesn't affect your own content — only text inside the library itself.

```tsx
<Application language="ru">
```

Available languages: `en` (English), `ru` (Russian), `fr` (French), `de` (German), `es` (Spanish), `zh` (Chinese), `pt` (Portuguese), `tr` (Turkish).

### Overriding individual strings

To replace a specific phrase without creating a full translation, use `customLabels`. Keys follow the `<component>.<string>` format.

```tsx
<Application
  language="en"
  customLabels={{
    'autocompleteInput.loadError': 'Failed to load suggestions',
    'dataTable.empty': 'Nothing here yet',
  }}
>
```

## Toasts and notifications

`Application` mounts the toast and notification system (`showToast`/`showNotification`/`dismissNotification`) — you can call these from anywhere, including code outside React. Stack placement is app-wide, not per call: set it once via `toastPlacement` (vertical edge, always centered horizontally) and `notificationPlacement` (screen corner).

```tsx
<Application toastPlacement="top" notificationPlacement="top-start">
  <App />
</Application>
```

:::note
`notificationPlacement` uses the same side-align shape as `Popover`/`Tooltip`'s `placement`: the side (`top`/`bottom`) is physical, while the alignment (`start`/`end`) is logical and resolves against the writing direction (`start` = left, `end` = right in LTR).
:::

## Full configuration

```tsx
<Application theme="auto" accent="blue" language="en">
  <App />
</Application>
```

## Rendering into your own root element (asChild)

By default, `Application` renders its own `<div>`. The `asChild` prop moves its attributes and classes onto the single child element passed to it instead — for example, to use your own `<body>` as the root.

```tsx
<Application asChild theme="auto" language="en">
  <body>
    <App />
  </body>
</Application>
```

## Usage with Next.js

In the Next.js App Router, `Application` must live inside a client component. Usually that's the root layout.

```tsx
// app/layout.tsx
import { Application } from 'altrone-ui';
import 'altrone-ui/dist/style.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Application asChild theme="auto" language="en">
        <body>{children}</body>
      </Application>
    </html>
  );
}
```

:::warning
If you're using server components, don't import `Application` directly into a server module — wrap it in a separate client component marked `'use client'`.
:::

## Props

:::prop[theme]{type="'auto' | 'light' | 'dark'" default="'auto'"}
Color theme. `auto` follows the system `prefers-color-scheme` and updates in real time.
:::

:::prop[persistTheme]{type="boolean" default="false"}
Remembers the chosen theme (`light`/`dark`) in `localStorage` and restores it on the next visit — once the user has explicitly switched it at least once.
:::

:::prop[accent]{type="'red' | 'pink' | 'purple' | 'indigo' | 'blue' | 'teal' | 'amber' | 'brown'" default="'blue'"}
Accent color of the design system. Applied globally to all components via CSS variables.
:::

:::prop[language]{type="'en' | 'ru' | 'fr' | 'de' | 'es' | 'zh' | 'pt' | 'tr'" default="'en'"}
Language of built-in component strings. Doesn't affect your own content.
:::

:::prop[customLabels]{type="Partial<Localization>" default="{}"}
Overrides individual localization strings. Adds to, rather than replaces, the selected `language`.
:::

:::prop[toastPlacement]{type="'top' | 'bottom'" default="'bottom'"}
Vertical edge of the toast stack (always centered horizontally).
:::

:::prop[notificationPlacement]{type="'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" default="'bottom-end'"}
Corner of the notification stack — the same side-align shape as `placement` on `Popover`/`Tooltip`.
:::

:::prop[asChild]{type="boolean" default="false"}
Moves the root's attributes and classes onto the single child element instead of rendering its own `<div>` — for example, to use your own `<body>` as the root.
:::

:::prop[children]{type="ReactNode"}
The app wrapped by `Application`. With `asChild`, must be a single React element — its own children become the provider tree's content.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref to the root element — a plain `<div>`, or, with `asChild`, the child element the attributes were moved onto.
:::

## Recommendations

**One instance per app.** `Application` isn't meant to be nested or used more than once. A single root instance establishes one shared environment for the whole component tree.

**`theme="auto"` is the right default.** Users who picked a dark theme at the OS level expect it everywhere. Don't take that away from them without a reason.

**Don't change the accent dynamically without a reason.** If the goal is to let the user pick a theme, that's fine. But if the accent changes depending on page context, that's a sign the interface has lost its consistency.

## Related topics

- [Dark theme](darkTheme) — how theme switching actually works, the `useAltroneTheme()` hook, and flash-of-wrong-theme (FOUC) prevention
- [Screen](screen) — the screen layout shell that goes inside `Application`'s `children`
- [Color](color) — the tokens controlled by the `accent` prop
