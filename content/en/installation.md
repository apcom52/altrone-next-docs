# Installation

Altrone works with any React 19 project built by a modern bundler — Vite, Next.js, webpack, Rsbuild. Setting it up takes three steps: install the package, import the stylesheet once, and wrap the app in `Application`.

## Requirements

- **React 19** and **React DOM 19** — they are peer dependencies, so the library uses the copies already in your project.
- **An ES module bundler.** The package is published as ES modules only, with no CommonJS build.
- **TypeScript is optional.** Type definitions ship with the package, so there is nothing extra to install.

## Install the package

Altrone 4 is published under the `beta` tag. Without it, your package manager installs Altrone 3, which has a different API.

```bash
npm install altrone-ui@beta
```

```bash
pnpm add altrone-ui@beta
```

```bash
yarn add altrone-ui@beta
```

Everything the components need — `motion` for animations, `lucide-react` for the built-in icons, `dayjs` for dates — is installed with the package.

## Import the styles

All component styles are in one stylesheet. Import it once, at the entry point of your app, before your own styles so that your rules can override it:

```tsx
import 'altrone-ui/dist/style.css';
```

The stylesheet also brings the Inter and JetBrains Mono fonts, so you don't need to load them yourself.

## Add Application

`Application` must wrap every other Altrone component — without it they have no colors, texts or theme. Put it at the root of your app, once.

### Vite

```tsx filename="src/main.tsx"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Application } from 'altrone-ui';
import 'altrone-ui/dist/style.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application applicationName="Acme">
      <App />
    </Application>
  </StrictMode>,
);
```

### Next.js

`Application` uses state and effects, so in the App Router it has to be rendered from a client component. Create a small wrapper marked `'use client'` and use it in your root layout:

```tsx filename="app/AltroneProvider.tsx"
'use client';

import { Application } from 'altrone-ui';

export function AltroneProvider({ children }: { children: React.ReactNode }) {
  return (
    <Application applicationName="Acme" persistTheme>
      {children}
    </Application>
  );
}
```

```tsx filename="app/layout.tsx"
import 'altrone-ui/dist/style.css';
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
The library doesn't mark itself as client code, so any file that renders Altrone components needs `'use client'` too. Importing them straight into a server component fails.
:::

## Configure the app

`Application` works with no props: it follows the system theme, uses the blue accent and speaks English. The props you are most likely to set first:

:::prop[theme]{type="'auto' | 'light' | 'dark'" default="'auto'"}
The color theme. `auto` follows the system setting and switches when it changes.
:::

:::prop[accent]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown'" default="'blue'"}
The main color of buttons, links, selection and focus rings across all components.
:::

:::prop[language]{type="'en' | 'ru' | 'fr' | 'de' | 'es' | 'zh' | 'pt' | 'tr'" default="'en'"}
The language of the built-in texts. Individual texts can be replaced with `customLabels`.
:::

:::prop[persistTheme]{type="boolean" default="false"}
Remembers the theme the user picked and restores it on the next visit.
:::

:::prop[applicationName]{type="string"}
The app name, added to the browser tab title next to the title of the current `Screen`.
:::

The full list — icons, toast placement, rendering into your own `<body>` — is on the [Application](/en/components/layout/application) page.

## Check the setup

Render a button and call a toast. If the button has the accent color and the toast appears at the bottom of the window, everything is connected:

```tsx
import { Button, showToast } from 'altrone-ui';

export function App() {
  return <Button label="Say hello" variant="submit" onClick={() => showToast('Hello, Altrone!')} />;
}
```

:::note If something looks wrong
- **Components have no styles** — check that `altrone-ui/dist/style.css` is imported.
- **Colors are missing, toasts and dialogs don't appear** — the component is rendered outside `Application`.
- **An error about hooks or `'use client'` in Next.js** — the component is rendered from a server component; move it into a client one.
:::

## Related topics

- [Getting Started](/en/getting-started) — what Altrone is and how an app is built with it
- [Application](/en/components/layout/application) — all the settings of the root component
- [Screen](/en/components/layout/screen) — building the layout of a page
- [Dark theme](/en/foundations/darkTheme) — switching the theme and avoiding a flash of the wrong one
- [MCP](/en/foundations/mcp) — giving AI agents the current Altrone docs
