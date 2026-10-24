# Getting Started

Altrone is a React component library for building application interfaces: dashboards, admin panels, internal tools and other apps where people work with data. It gives you about fifty components — from the page frame and navigation to forms, tables and dialogs — that share one look, one set of design tokens and one way of doing things.

::playground{src=gettingStarted/GettingStartedDemo caption="Altrone components work together out of the box: a field, a button and a toast"}

:::warning Altrone 4 is in beta
These docs describe Altrone 4. It is published under the `beta` tag, so the API can still change between releases. The `latest` tag on npm still points to Altrone 3. What changed in each beta is listed in the [release notes](/en/project/release-notes).
:::

## What's inside

Components are grouped by what they are for:

- [Layout](/en/components/layout) — the root of the app, the page frame, and the primitives to arrange content: `Application`, `Screen`, `Flex`, `Grid`, `Box`, `Toolbar`, `Splitter`
- [Controls](/en/components/controls) — everything a user acts on or types into: `Button`, `Form`, text and number fields, `Select`, `DatePicker`, `FilePicker`, checkboxes and switches
- [Overlays](/en/components/overlays) — content shown above the page: `Modal`, `Drawer`, `Popover`, `Dropdown`, `Tooltip` and dialogs
- [Content](/en/components/content) — what people read: `Text`, `Image`, `Avatar`, `Tags`, `Calendar`, `DataTable`
- [Feedback](/en/components/feedback) — what the app is doing right now: toasts and notifications, `Message`, `Progress`, `Loading`, `Skeleton`, `Result`
- [Navigation](/en/components/navigation) — moving between places: `Tabs`, `NavigationList`, `SideNavigation`, `BottomNavigation`, `Breadcrumbs`, `Pagination`

## How an Altrone app is built

`Application` sits at the very top. It renders no layout of its own — it provides the theme, the accent color, the interface language, shared icons, dialogs and toasts to everything below it. Inside it, each page is a `Screen`: a frame with a header, a sidebar, the main content and other areas that rearranges itself on small screens.

```tsx
import { Application, Screen, Toolbar, Button } from 'altrone-ui';

export default function App() {
  return (
    <Application applicationName="Acme">
      <Screen title="Projects">
        <Screen.Header>
          <Toolbar>
            <Toolbar.Title label="Projects" />
          </Toolbar>
        </Screen.Header>
        <Screen.Content>
          <Button label="New project" variant="submit" />
        </Screen.Content>
      </Screen>
    </Application>
  );
}
```

A few ideas run through the whole library:

- **Light and dark themes.** `Application` follows the system theme by default; every color is a CSS custom property with a value for each theme.
- **One accent color.** Pick one of ten accents with the `accent` prop, and every component follows it. Status colors — danger, success, warning — stay the same regardless of the accent.
- **Sizes.** Controls take a `size` prop from `mini` to `xl`, and it scales the padding, text, icons and corner radius together.
- **Eight languages.** Built-in texts — button labels, empty states, screen reader labels — come in English, Russian, French, German, Spanish, Chinese, Portuguese and Turkish; any of them can be replaced.
- **Your own elements.** Components that render a link or a button accept `asChild`, so you can put your router's `<Link>` in their place and keep the styling.
- **Calls from anywhere.** Toasts, notifications and dialogs are plain functions — `showToast`, `showConfirm` — that you can call from a click handler, a store or any module.
- **Accessibility.** Components use native elements where they exist, support the keyboard, and respect the reduced-motion setting.

## Using Altrone with AI agents

If you write code with Claude, Cursor or another AI assistant, connect the [Altrone MCP server](/en/foundations/mcp). It gives the agent the current documentation of every component, so it doesn't have to guess props from outdated training data.

## Next steps

Go to [Installation](/en/installation) to add the package to your project, import the styles and set up `Application`.

## Related topics

- [Installation](/en/installation) — adding Altrone to a Vite or Next.js project
- [Application](/en/components/layout/application) — the root component and everything it configures
- [Screen](/en/components/layout/screen) — the frame of a page
- [Color](/en/foundations/color) — accents, status colors and tokens
- [Release notes](/en/project/release-notes) — what changed in each Altrone 4 beta
