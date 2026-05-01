# Getting Started

Altrone UI is a React component library for building modern, accessible web applications. It ships with 50+ ready-made components, a built-in theming system, and full TypeScript support.

## Features

- **50+ components** — buttons, forms, modals, navigation, data display, and more
- **Theming** — customize colors, fonts, and spacing via CSS custom properties
- **Accessibility** — WAI-ARIA compliant, keyboard-navigable out of the box
- **TypeScript** — fully typed API with auto-complete support

## Requirements

Altrone UI requires the following peer dependencies:

- React 18 or higher
- TypeScript 4.9+

## Quick example

```tsx
import { Button } from "altrone-ui";
import "altrone-ui/dist/style.css";

export default function App() {
  return <Button label="Click me" onClick={() => alert("Hello!")} />;
}
```

:::tip
Wrap your app with `AltroneApplication` to enable theming and consistent styling across all components.
:::

## Next steps

Head to [Installation](installation) to add Altrone UI to your project and configure the provider.
