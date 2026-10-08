# Screen

## One Screen per page

`Screen` builds a full-window layout with a pinned header and sidebar. Put one inside another and you get two headers fighting for the top of the window. Render one `Screen` for the page that is currently shown, and switch between pages with your router. For a smaller area that scrolls on its own, use `Scrollable` instead of a second `Screen`.

::::good-bad
:::good
```tsx
<Screen title="Projects">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Content>
    <Scrollable>{/* long list */}</Scrollable>
  </Screen.Content>
</Screen>
```
:::

:::bad
```tsx
<Screen title="Projects">
  <Screen.Content>
    <Screen title="Project details">
      <Screen.Header>{/* toolbar */}</Screen.Header>
    </Screen>
  </Screen.Content>
</Screen>
```
:::
::::

## Let the page scroll

The whole `Screen` scrolls together with the page. That is what lets the pinned header sit on top of the content and blur it. Don't turn `Screen.Content` into a scrolling box of its own with a fixed height: the header then has nothing to float over, and the sticky headers of a `DataTable` stop at the wrong place.

::::good-bad
:::good
```tsx
<Screen.Content>
  <DataTable {...tableProps} />
</Screen.Content>
```
:::

:::bad
```tsx
<Screen.Content style={{ height: '100vh', overflowY: 'auto' }}>
  <DataTable {...tableProps} />
</Screen.Content>
```
:::
::::

Scrolling sideways is the exception. A wide board or table should scroll inside its own wrapper, so the header and footer stay the width of the window.

## One main navigation per device

A sidebar works well with a mouse and a wide window; a bottom bar works well with a thumb. Showing both as the main navigation on the same screen repeats every link and uses up space twice. Use `visibleFrom` and `hiddenFrom` so each device gets just one.

::::good-bad
:::good
```tsx
<Screen.Sidebar visibleFrom="lg">{/* navigation */}</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">
  {/* the same destinations */}
</Screen.BottomNavigation>
```
:::

:::bad
```tsx
<Screen.Sidebar>{/* navigation */}</Screen.Sidebar>
<Screen.BottomNavigation>
  {/* the same destinations */}
</Screen.BottomNavigation>
```
:::
::::

Keep the links the same in both, so someone who rotates a tablet doesn't lose their way.

## Keep long text easy to read

Lines longer than about 70 characters are tiring to read. For an article, a form or any page with a lot of text, limit the width of `Screen.Content` instead of letting the text stretch across a wide window.

::::good-bad
:::good
```tsx
<Screen.Content maxWidth={640}>
  <Article />
</Screen.Content>
```
:::

:::bad
```tsx
<Screen.Content>
  <Article />
</Screen.Content>
```
:::
::::

Dashboards, tables and boards are the opposite: they benefit from the full width, so leave them unlimited.

## Accessibility

- Give every `Screen` a `title`. It becomes a named area of the page, which helps screen reader users tell one view from another.
- Use one `Screen.Content` per screen: it is the page's single `<main>` area.
- Icon-only actions in the header toolbar need a name — pass `label` together with `showLabel={false}`, so the name is still announced.
