# Screen

`Screen` is the frame of one page of your app. It arranges six areas: a header pinned to the top, a sidebar, the main content, a side panel next to it, a footer, and a navigation bar at the bottom. Put it inside [Application](/en/components/layout/application). You can render several screens — which one is shown is up to your router or state, not the library.

Areas — `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Aside`, `Screen.Footer`, `Screen.BottomNavigation` — go inside as children in any order. The layout decides where each one appears, not the order in your code. An area you don't add is simply not there.

**There are no ready-made templates.** Every kind of page — app frame, article, sign-in, error page, board — is built from this one component.

Each area uses the right HTML element, so screen readers and other assistive tools understand the structure of your page with no extra work:

| Area                      | Element                                                   |
| ------------------------- | --------------------------------------------------------- |
| `Screen`                  | `<div>`, a `region` named by `title` if you pass it       |
| `Screen.Header`           | `<header>`                                                |
| `Screen.Sidebar`          | `<aside>` labelled "Sidebar"                              |
| `Screen.Content`          | `<main>`                                                  |
| `Screen.Aside`            | `<aside>` labelled "Details"                              |
| `Screen.Footer`           | `<footer>`                                                |
| `Screen.BottomNavigation` | `<nav>` labelled "Bottom navigation"                      |

The labels come from the `screen.*` texts, so they follow the `language` of `Application` and can be changed with `customLabels`.

## App frame

```tsx
import { Screen, Toolbar, NavigationList, Avatar } from 'altrone-ui';
import { Inbox, Send, Search } from 'lucide-react';

<Screen title="Mail">
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.Title label="Mail" />
      <Toolbar.Separator />
      <Toolbar.Action label="Search" icon={<Search />} showLabel={false} />
      <Avatar firstName="Ada" lastName="Lovelace" size="s" />
    </Toolbar>
  </Screen.Header>
  <Screen.Sidebar>
    <NavigationList>
      <NavigationList.Link icon={<Inbox />} label="Inbox" badge={12} selected />
      <NavigationList.Link icon={<Send />} label="Sent" />
    </NavigationList>
  </Screen.Sidebar>
  <Screen.Content>
    <MessageList />
  </Screen.Content>
</Screen>
```

## Header

The header is a full-width area with no background of its own. What you see is the `Toolbar` you put inside it. For the usual frosted header with a light accent tint, use **`<Toolbar variant="solid" size="m">`** — size `m` matches the 56px height of the area. The toolbar's background stretches from edge to edge; only its content is moved in, so that the header, the content and the footer all start on the same vertical line, just past the sidebar. By default the header stays pinned to the top, and the content below it is pushed down so nothing hides underneath.

`insetStart` (`number | string`) changes where the toolbar's content starts. The background still runs the full width. `0` starts the content right at the edge.

`fixed` (`boolean`, default `true`) decides whether the header is pinned. When it is, `Screen.Content` and `Screen.Aside` leave room for it, and the sticky headers of a `DataTable` inside the content stop just below it (this is what `--top-safe-area` is for). With `fixed={false}` the header scrolls away together with the page: no room is left for it, `--top-safe-area` stays `0px`, and a `DataTable` header sticks to the very top of the window once the header is out of sight.

## Content width

By default `Screen.Content` takes all the space it gets. Two props limit its width and center it, leaving empty margins on the sides (or room for `Screen.Aside`):

- `size` on `Screen` — one limit for the whole app. `mini`, `s`, `m`, `l` and `xl` match the widths `--breakpoint-xs` … `--breakpoint-xl`. The header, sidebar and footer are not affected.
- `maxWidth` on `Screen.Content` — a limit for a single screen. A number is px, a string is used as is (`'clamp(320px, 50vw, 640px)'`), and it **wins over** `size`.

```tsx
<Screen size="m">
  <Screen.Content>{/* capped at --breakpoint-md */}</Screen.Content>
</Screen>

<Screen.Content maxWidth={550}>{/* one-off cap */}</Screen.Content>
```

### Edge-to-edge content

For a board or a table that should reach the edges of the window and scroll sideways, keep the areas, but remove the padding of `Screen.Content` and let the inner content handle the scrolling.

```tsx
<Screen title="Sprint board">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Sidebar>{/* boards nav */}</Screen.Sidebar>
  <Screen.Content style={{ padding: 0, overflowX: 'auto' }}>
    <Board />
  </Screen.Content>
</Screen>
```

## Centered screens

`contentAlign="center"` puts the content in the middle of the page, both horizontally and vertically. Together with `size` you get a narrow column in the center — a good fit for a single-task page without navigation, like sign-in. You add the heading yourself, inside the content.

```tsx
<Screen title="Sign in" contentAlign="center" size="s">
  <Screen.Content>
    <SignInCard />
  </Screen.Content>
</Screen>
```

Error and empty pages follow the same idea, with a `Result` inside — there is no separate template for them.

```tsx
<Screen title="Page not found" contentAlign="center">
  <Screen.Content>
    <Result
      status="error"
      title="Page not found"
      description="The page you were looking for doesn't exist or was moved."
      actions={<Button label="Go home" variant="submit" />}
    />
  </Screen.Content>
</Screen>
```

## Collapsible sidebar

`Screen.Sidebar` floats above the page, a small gap (`--space-content`) away from the edges. On wide screens it also pushes the content aside, and the content slides smoothly when the sidebar opens or closes. On narrow screens (below `mobileBreakpoint`, `md` by default) it stops pushing the content and opens on top of it with a dimmed background instead. The `collapsed` prop closes the panel: it slides out the same way a `Drawer` does and is removed, while its `<aside>` stays in the page but can't be focused or clicked (`inert`).

**Uncontrolled (default)** — don't pass `collapsed` at all (set the starting state with `defaultCollapsed`). The sidebar keeps track of its own state and closes itself when the screen becomes narrow, so it never covers the page without a way to close it. A `Toolbar.SidebarToggleAction` that has no `collapsed` of its own finds this sidebar by itself and toggles it — there is nothing to connect:

```tsx
<Screen mobileBreakpoint="md">
  <Screen.Sidebar>
    <AppNavigation />
  </Screen.Sidebar>
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.SidebarToggleAction />
      <Toolbar.Title label="Overview" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
</Screen>
```

**Controlled** — needed only if the sidebar's state has to live outside `Screen` (for example, saved in `localStorage`). You keep the boolean and pass it to both `Screen.Sidebar` and `Toolbar.SidebarToggleAction`. Clicking the dimmed area or pressing `Escape` calls `onClose` — set `collapsed` to `true` there. Even without `onClose` the overlay still closes, and focus goes back to where it was before the panel opened.

```tsx
const [collapsed, setCollapsed] = useState(false);

<Screen mobileBreakpoint="md">
  <Screen.Sidebar collapsed={collapsed} onClose={() => setCollapsed(true)}>
    <AppNavigation />
  </Screen.Sidebar>
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.SidebarToggleAction
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      />
      <Toolbar.Title label="Overview" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
</Screen>
```

## Side panel

`Screen.Aside` is a column to the right of `Screen.Content` — good for details, an inspector or other context. Unlike `Screen.Sidebar`, it is part of the page grid: it shares a row with the content, sits below the header and has no background of its own. On its own it is `asideWidth` wide; `collapsed` shrinks it to zero and the content takes the freed space.

It can't be resized by itself. If you want a draggable border, put `Screen.Content` and `Screen.Aside` each in their own `Splitter.Panel`. Then `Splitter` controls the widths and collapsing, and `Screen` places it in the content row for you:

```tsx
<Screen>
  <Screen.Header>{/* … */}</Screen.Header>
  <Screen.Sidebar>{/* … */}</Screen.Sidebar>

  <Splitter>
    <Splitter.Panel min={40}>
      <Screen.Content>{/* list */}</Screen.Content>
    </Splitter.Panel>
    <Splitter.Panel defaultSize={34} min={24} collapsible>
      <Screen.Aside>{/* inspector */}</Screen.Aside>
    </Splitter.Panel>
  </Splitter>

  <Screen.Footer>{/* … */}</Screen.Footer>
</Screen>
```

## Footer

A band at the bottom of the page with a `--background-2` fill and a thin line on top, so it stands apart from the content. Like the header, it spans the full width and goes under the sidebar; its content is moved in to stay clear of it.

**Bottom safe area.** The last area before the bottom edge — the footer, or `Screen.Content` / `Screen.Aside` if there is no footer — leaves extra space for the home indicator on iPhones (`env(safe-area-inset-bottom)`), and for the whole `Screen.BottomNavigation` if there is one. The background still reaches the very edge; only the content is lifted. This space is more than zero only when your page has `<meta name="viewport" content="viewport-fit=cover">`.

## Bottom navigation

A bar pinned to the bottom of the screen — the touch-screen counterpart of `Screen.Sidebar`. `Screen` takes care only of its position: the bar is fixed, keeps a `--space-content` gap from every edge (plus the notch area on iPhones at the bottom), and makes the content, the footer and an inline sidebar leave room for it, so nothing hides behind the bar. The footer's background still reaches the bottom; only its content moves up.

Put the navigation itself inside — usually the standalone `BottomNavigation` with `floating={false}` (so it doesn't pin itself a second time) or your own component. The area itself ignores clicks and only its direct children respond, so the gaps around a centered pill can be clicked through.

```tsx
<Screen.BottomNavigation>
  <BottomNavigation floating={false}>
    <BottomNavigation.Link icon={<Home />} label="Home" selected />
    <BottomNavigation.Link icon={<Search />} label="Search" />
    <BottomNavigation.Link icon={<User />} label="Profile" />
  </BottomNavigation>
</Screen.BottomNavigation>
```

Without `visibleFrom` / `hiddenFrom` the bar shows at every window size, desktop included.

## Showing areas by screen size

`Screen.Sidebar`, `Screen.Aside` and `Screen.BottomNavigation` can be shown or hidden depending on the window width (`xs` / `sm` / `md` / `lg` / `xl`, type `ScreenBreakpoint`):

- `visibleFrom` — show the area only when the width is at least the breakpoint;
- `hiddenFrom` — show the area only when the width is below the breakpoint.

With neither, the area is always there (it still adapts — the sidebar turns into an overlay below `mobileBreakpoint`). Use one or both to limit an area to a range of widths (`visibleFrom="sm" hiddenFrom="lg"`). A hidden area renders nothing and takes no space, so a sidebar hidden on phones leaves a simple one-column page. These props don't depend on `mobileBreakpoint`.

```tsx
<Screen.Aside visibleFrom="lg">{/* inspector, desktop only */}</Screen.Aside>
```

The width is checked in the browser, so on the very first paint an area may briefly appear or disappear.

## Props

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Limits the width of `Screen.Content` only. The header, sidebar and footer are not affected.
:::

:::prop[title]{type="string"}
Name of the whole screen for assistive tools (`aria-label`, `role="region"`). Nothing is shown on the page. Also feeds the automatic browser tab title — see ["Document title" in Application](/en/components/layout/application#document-title).
:::

:::prop[contentAlign]{type="'start' | 'center'" default="'start'"}
`'center'` puts `Screen.Content` in the middle, both ways. Together with `size` you get a narrow centered column, good for sign-in and onboarding forms and full-page `Result` states.
:::

:::prop[mobileBreakpoint]{type="'sm' | 'md' | 'lg'" default="'md'"}
The window width below which `Screen.Sidebar` stops pushing the content and opens over it with a dimmed background.
:::

:::prop[sidebarWidth]{type="string" default="'300px'"}
Width of the sidebar when it sits next to the content (same as the `--screen-sidebar-width` CSS variable).
:::

:::prop[asideWidth]{type="string" default="'320px'"}
Width of `Screen.Aside` when it sits in the page grid on its own. Ignored inside a `Splitter`, which sets the sizes itself. Same as `--screen-aside-width`.
:::

:::prop[children]{type="ReactNode"}
Any of the `Screen` areas, in any order. Any *other* direct child (for example, a `Splitter` around Content and Aside) is placed in the content row automatically.
:::

### Screen.Header

:::prop[insetStart]{type="number | string"}
Where the toolbar's content starts, measured from the leading edge. A number is px, a string is used as is (`'var(--space-section)'`). By default it lines up with `Screen.Content` and the footer; `0` starts at the edge.
:::

:::prop[fixed]{type="boolean" default="true"}
Pins the header to the top of the window. `false` puts it back into the normal flow: it scrolls away with the page and no room is left for it.
:::

### Screen.Content

:::prop[maxWidth]{type="number | string"}
Limits the width of the content column and centers it in the space it gets. A number is px, a string is used as is. **Wins over** the `size` prop of `Screen`.
:::

### Screen.Sidebar

:::prop[collapsed]{type="boolean"}
Closes the panel: it slides out like a `Drawer` and is removed. Next to the content, the freed space is given back smoothly. Leave it out for the uncontrolled mode — see `defaultCollapsed`.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Starting state of an uncontrolled sidebar. Ignored once `collapsed` is passed. An uncontrolled sidebar closes itself on narrow screens, and a `Toolbar.SidebarToggleAction` without its own `collapsed` toggles it automatically.
:::

:::prop[onCollapsedChange]{type="(collapsed: boolean) => void"}
Called whenever the state is about to change — a click on the dimmed area, `Escape`, or the toggle button. Use it together with `collapsed`. When uncontrolled, it is only a notification: the sidebar has already updated itself.
:::

:::prop[onClose]{type="(event: MouseEvent | KeyboardEvent) => void"}
Narrower than `onCollapsedChange`: called only when the user closes the overlay with a click on the dimmed area or `Escape`. When controlled, set `collapsed` to `true` here.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the sidebar only when the window width is at least the breakpoint. Otherwise it isn't rendered and takes no space.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the sidebar only when the window width is below the breakpoint.
:::

### Screen.Aside

:::prop[collapsed]{type="boolean"}
Shrinks the column to zero and the content takes the freed space. Has no effect inside a `Splitter`, where the panel handles collapsing. Leave it out for the uncontrolled mode.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Starting state of an uncontrolled side panel. Ignored once `collapsed` is passed.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the side panel only when the window width is at least the breakpoint.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the side panel only when the window width is below the breakpoint.
:::

### Screen.BottomNavigation

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the bottom navigation only when the window width is at least the breakpoint.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Show the bottom navigation only when the window width is below the breakpoint. With neither prop, the bar is shown at every width.
:::

`Screen.Footer` has no props of its own. Every area passes `ref` to its root element and accepts the usual HTML attributes.

## Related topics

- [Application](/en/components/layout/application) — the root that `Screen` goes inside
- [Layout & responsiveness](/en/foundations/layout) — the thinking behind breakpoints and container queries, which `mobileBreakpoint` and `visibleFrom`/`hiddenFrom` build on
- [Touch devices](/en/foundations/touchDevices) — safe areas and other screen-edge concerns that `Screen.BottomNavigation` already handles
- [Accessibility](/en/foundations/accessibility) — the focus and labelling rules followed by the sidebar overlay and icon-only toolbar actions
