# Typography 1

Altrone UI is a React _component library_ for building modern, accessible web applications. It ships with 50+ ready-made components, a built-in theming system, and full TypeScript support.

Altrone UI is a React **component library** for building modern, accessible web applications. It ships with 50+ ready-made components, a built-in theming system, and full TypeScript support.

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

:::tip{icon=circle-alert compact=true}
Wrap your app with `AltroneApplication` to enable theming and consistent styling across all components.
:::

## Next steps

Head to [Installation](installation) to add Altrone UI to your project and configure the provider.

## Two columns

:::col-2
### Before

Use raw HTML, hand-write class names, and manage your own responsive breakpoints.

```html
<div class="grid grid-cols-2 gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

---

### After

Just import a component and pass your content. Altrone UI handles layout, spacing, and accessibility for you.

```tsx
import { Button } from "altrone-ui";

<Button label="Click me" />
```
:::

## Three columns

:::col-3
### Install

Add the package to your project with a single command.

```bash
npm install altrone-ui
```

---

### Configure

Wrap your application with `AltroneApplication` to enable theming.

```tsx
import { AltroneApplication } from "altrone-ui";
```

---

### Use

Import any component and start building. All 50+ components are ready to go.

```tsx
import { Button, Input } from "altrone-ui";
```
:::

:::tip
Columns can contain any standard Markdown — paragraphs, **bold text**, `inline code`, lists, and code blocks.
:::

## Playground

::playground{src=CounterDemo caption="Click the buttons to update the counter"}
