# Application

## One instance per app

`Application` sets up one shared environment for the whole app. It writes the theme to `<html>` and copies the background to `<body>`, so a second `Application` — nested or next to the first — would fight it over both. Add it once, at the very top, and keep everything else inside.

::::good-bad
:::good
```tsx
<Application>
  <Screen>{/* pages */}</Screen>
</Application>
```
:::

:::bad
```tsx
<Application>
  <Sidebar />
  <Application theme="dark">
    <Screen>{/* pages */}</Screen>
  </Application>
</Application>
```
:::
::::

If one part of the page needs a different look, use the component's own props or its CSS variables instead of a second root.

## Follow the system theme

People who chose dark mode on their device expect to see it everywhere. Force `light` or `dark` only if your product really has a single look. If you add a manual switch, pair it with `persistTheme` so the choice survives a reload.

::::good-bad
:::good
```tsx
<Application persistTheme>
  <ThemeSwitcher />
</Application>
```
:::

:::bad
```tsx
<Application theme="light">
  <ThemeSwitcher />
</Application>
```
:::
::::

In the bad example the switcher works only until the page is reloaded: every visit starts in light mode, and nothing remembers what the user picked.

## Pick one accent

The accent is your app's brand color: main buttons, checked controls, sliders, progress bars. Choose it once and stick with it. If it changes from page to page, the same button looks like part of a different product on every screen.

::::good-bad
:::good
```tsx
<Application accent="indigo">
  <App />
</Application>
```
:::

:::bad
```tsx
<Application accent={isBilling ? 'green' : 'blue'}>
  <App />
</Application>
```
:::
::::

## Override shared icons once

Change a shared icon in `Application` and every component that uses it follows. If you change it component by component, the ones you forget keep the old icon.

::::good-bad
:::good
```tsx
<Application icons={{ prev: <ArrowLeft />, next: <ArrowRight /> }}>
  <App />
</Application>
```
:::

:::bad
```tsx
<Calendar prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
<Pagination prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
<DatePicker prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
```
:::
::::

## Accessibility

Set `lang` on your `<html>` element to match `language`. `Application` translates the library's texts, but it doesn't change the page's `lang`, and screen readers use that to choose the right voice.
