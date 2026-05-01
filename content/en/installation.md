# Installation

## Install the package

```bash
npm install altrone-ui
```

Or with other package managers:

```bash
yarn add altrone-ui
pnpm add altrone-ui
```

## Import styles

Add the stylesheet import to your app's entry point:

```tsx filename="app/layout.tsx"
import 'altrone-ui/dist/style.css'
```

:::warning
The CSS import must come before any custom styles to allow proper overrides.
:::

## Set up the provider

Wrap your application with `AltroneApplication` to enable theming:

```tsx filename="app/layout.tsx"
import { AltroneApplication } from 'altrone-ui'
import 'altrone-ui/dist/style.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AltroneApplication accent="purple">
          {children}
        </AltroneApplication>
      </body>
    </html>
  )
}
```

## Available accent colors

The `accent` prop on `AltroneApplication` controls the primary color used across all components:

| Value | Description |
|-------|-------------|
| `purple` | Default accent |
| `blue` | Blue accent |
| `green` | Green accent |
| `red` | Red accent |

## Verify the setup

Create a simple component to confirm everything works:

```tsx
import { Button } from 'altrone-ui'

export default function Page() {
  return <Button label="Hello, Altrone!" />
}
```

:::note
If styles aren't applying, check that `AltroneApplication` wraps the component and the CSS import is present.
:::
