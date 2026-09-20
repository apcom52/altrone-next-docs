# Screen

The layout shell for one application view: a CSS grid with six zones — a fixed header, a sidebar, scrollable content, a trailing companion pane, a footer, and a bottom navigation bar. The component is placed inside `Application`'s `children` — you can render several `Screen`s, switching which one is active stays on the consumer's side (their own router/state), not the library's.

Zones — `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Footer`, `Screen.BottomNavigation` — are passed as `children` in any order; their layout position is set by the grid, not by JSX order. A zone you don't render is simply absent from the grid.

**There are no presets** — every screen shape (app frame, reader, sign-in, error page, board) is composed from this one primitive.

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

## Screen.Header

**A full-width zone, but transparent** — it carries no fill of its own. The visible bar is drawn by the `Toolbar` you place inside it: for the frosted, accent-tinted header surface use **`<Toolbar variant="solid" size="m">`** (the `solid` variant's fill points at the `--color-header-backdrop` token; `m` matches the 56px zone). The toolbar spans the full viewport width — its fill runs edge to edge — and only its *content padding* is inset: the header, `Screen.Content` and the footer line their content up on one shared vertical line (`--screen-content-inset-start`, which sits `2 × --space-content` past the sidebar). The zone's height is `--screen-header-height` (default `56px`). By default the header is `position: fixed` and content below it is automatically offset by that height.

The `insetStart` prop (`number | string`) overrides the header toolbar's leading content padding (via `--toolbar-inset-start`; the fill still runs full width, and by default the line matches `Screen.Content` and the footer). `0` starts the content right at the edge.

The `fixed` prop (`boolean`, default `true`) controls whether the header is pinned. `true` sticks it to the top of the viewport; `Screen.Content`/`Screen.Aside` reserve clearance for it, and `DataTable`'s sticky column header/footer inside the content are offset by `--top-safe-area` so they clear it too. With `fixed={false}` the header goes back into normal flow and scrolls away with the page — no clearance is reserved, `--top-safe-area` stays `0px`, and `DataTable`'s sticky header sticks flush to the true viewport top once the header scrolls out of view.

## Screen.Footer

A chrome band with a `--background-2` fill and a hairline top border — clearly distinct from the content surface. Like the header, it runs the full width, extends behind the sidebar, and insets its own content past the sidebar (via an inner wrapper).

**Bottom-edge safe area.** The last band before the screen edge — the footer, or `Screen.Content` / `Screen.Aside` when there's no footer — adds a bottom padding for the iOS home indicator (`env(safe-area-inset-bottom)`), and clearance for the whole `Screen.BottomNavigation` reservation when it's present. The band's own background still reaches the very bottom edge; only its content is lifted. Non-zero only when the document opts into `<meta name="viewport" content="viewport-fit=cover">`.

## Screen.Aside

A trailing companion column to `Screen.Content` — an inspector/context pane (`<aside>`, `aria-label` "Details"). Unlike `Screen.Sidebar` it lives **in the grid**: it shares the content row, sits below the fixed header, and carries **no background** of its own. Bare, it's a grid column `asideWidth` wide (the `--screen-aside-width` variable, default `320px`); `collapsed` drops that column to zero and content reclaims the space.

It has **no resize logic of its own**. For a draggable boundary, wrap `Screen.Content` and `Screen.Aside` each in their own `Splitter.Panel`. Then `Splitter` owns widths and collapse, and `Screen` places the bare `<Splitter>` into the content row without a `gridArea`:

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

Props: `collapsed` (collapses the bare column; has no effect inside a `Splitter` — the panel owns collapse there), `defaultCollapsed` (initial state for the uncontrolled mode, ignored once `collapsed` is passed), `visibleFrom` / `hiddenFrom` (breakpoint gating), `ref` (forwarded to the `<aside>`).

## Screen.BottomNavigation

**A fixed, full-width bar** pinned to the bottom of the screen — the touch counterpart to `Screen.Sidebar`. `Screen` owns only the geometry: `position: fixed`, a `--space-content` gutter off every edge (plus the iOS safe-area cutout `env(safe-area-inset-bottom)` at the bottom), and the bottom clearance added to `Screen.Content`, `Screen.Footer` (extra bottom **padding** — the band's grey background still reaches the bottom edge, only its text clears the bar) and an inline `Screen.Sidebar` (so the bar and sidebar don't overlap on desktop). Bar height is `--screen-bottom-nav-height` (default `64px`).

Put the navigation itself inside — usually the standalone `BottomNavigation` with `floating={false}` (so it doesn't re-fix itself) or your own component. The zone is `pointer-events: none` with its direct children re-enabled — the gaps around a centered pill stay click-through.

```tsx
<Screen.BottomNavigation hiddenFrom="lg">
  <BottomNavigation floating={false}>
    <BottomNavigation.Link icon={<Home />} label="Home" selected />
    <BottomNavigation.Link icon={<Search />} label="Search" />
    <BottomNavigation.Link icon={<User />} label="Profile" />
  </BottomNavigation>
</Screen.BottomNavigation>
```

Renders a `<nav>` (`aria-label` from `screen.bottomNavigationLabel`), forwards `ref`. Without the `visibleFrom` / `hiddenFrom` props the bar is visible on every viewport — desktop included.

## Adaptive zones: `visibleFrom` / `hiddenFrom`

`Screen.Sidebar`, `Screen.Aside` and `Screen.BottomNavigation` accept two props for gating by viewport breakpoint (`xs` / `sm` / `md` / `lg` / `xl` tokens, type `ScreenBreakpoint`):

- `visibleFrom` — render the zone only at width `>=` the breakpoint;
- `hiddenFrom` — render the zone only at width `<` the breakpoint.

Set neither and the zone is always mounted (its mode still adapts — the sidebar goes to overlay below `mobileBreakpoint`). Set one, or both, to bound the zone to a "band" (`visibleFrom="sm" hiddenFrom="lg"`). Out of range, the zone renders **nothing** and reserves no layout space — so an inline sidebar hidden on mobile leaves the grid a plain single column. These props are independent of `mobileBreakpoint`.

Resolved through `useBreakpoint()` — like `mobileBreakpoint`, this is SSR-safe, but the zone can flash in/out on the first client paint.

```tsx
{/* Sidebar summonable everywhere; on touch devices the primary nav is the bottom bar */}
<Screen.Sidebar collapsed={collapsed} onClose={() => setCollapsed(true)}>…</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">…</Screen.BottomNavigation>

{/* Hard split: sidebar on desktop only, bottom bar on touch only */}
<Screen.Sidebar visibleFrom="lg">…</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">…</Screen.BottomNavigation>
```

## Collapsible and mobile sidebar

`Screen.Sidebar` is `position: fixed` in both modes, always floating 8px in from the screen edges. The `collapsed` prop closes the panel: it slides out with a `Drawer`-style animation and unmounts, while the `<aside>` anchor stays in the DOM with the `inert` attribute.

**Uncontrolled (default)** — don't pass `collapsed` at all (set the initial state via `defaultCollapsed`). The sidebar tracks its own state and collapses itself on entering overlay mode — it never covers the screen with no way to close it. A `Toolbar.SidebarToggleAction`, if also left without `collapsed`, reads and toggles this same sidebar automatically through `Screen`'s context — no state to wire up yourself:

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

**Controlled** — needed only when the sidebar's state must live outside `Screen` (persisted to `localStorage`, say). `Screen` no longer decides when to collapse — the consumer holds the boolean, syncing `Screen.Sidebar.collapsed` and `Toolbar.SidebarToggleAction.collapsed` by hand. A scrim click or `Escape` fires `onClose` — set `collapsed = true` there. Even without `onClose`, the scrim / `Escape` still visually dismiss the overlay (it's never a trap).

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
  <Screen.Footer>
    <SyncStatus />
  </Screen.Footer>
</Screen>
```

By default the sidebar reserves layout space (`Screen` animates its own `padding-inline-start`, content reflows without clipping — no `overflow`). Below the `mobileBreakpoint` (default `md`) it stops reserving space and just floats over the content with a scrim. Opening/closing uses the same animation as `Drawer`, via `motion`.

## Reader — no sidebar, narrow column

`maxWidth` on `Screen.Content` holds the text to a comfortable measure and centers the column; the free space falls to the margins (or to a `Screen.Aside` column). Use it instead of `size` when only this one screen needs the tighter column.

```tsx
<Screen title="Essay">
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.Title label="Essays" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content maxWidth={550}>
    <Article />
  </Screen.Content>
</Screen>
```

## Edge-to-edge content

For a board / table that needs to run to the window's edges and scroll horizontally — keep the zones, but zero `Screen.Content`'s padding and hand overflow to the inner content.

```tsx
<Screen title="Sprint board">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Sidebar>{/* boards nav */}</Screen.Sidebar>
  <Screen.Content style={{ padding: 0, overflowX: 'auto' }}>
    <Board />
  </Screen.Content>
</Screen>
```

## Sign in / centered screen

A single-task screen with no chrome: `contentAlign="center"` centers content on both axes, `size` keeps the column narrow. You place the heading inside the content yourself.

```tsx
<Screen title="Sign in" contentAlign="center" size="s">
  <Screen.Content>
    <SignInCard />
  </Screen.Content>
</Screen>
```

## Error page

Error and empty-state screens are the `Result` component inside a centered `Screen` — no separate preset.

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

## Props

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Constrains the maximum width of `Screen.Content` only — the header, sidebar and footer are unaffected.
:::

:::prop[title]{type="string"}
Accessible name for the root region (`aria-label`, `role="region"`). Renders nothing visible.
:::

:::prop[contentAlign]{type="'start' | 'center'" default="'start'"}
`'center'` centers `Screen.Content` on both axes (together with `size` — a narrow centered column): for sign-in/onboarding forms and full-page `Result` states.
:::

:::prop[mobileBreakpoint]{type="'sm' | 'md' | 'lg'" default="'md'"}
Viewport width below which `Screen.Sidebar` stops reserving layout space and floats over the content with a scrim.
:::

:::prop[sidebarWidth]{type="string" default="'300px'"}
Width of the sidebar column in inline mode (same as the `--screen-sidebar-width` CSS variable).
:::

:::prop[asideWidth]{type="string" default="'320px'"}
Width of the `Screen.Aside` column when it's a bare grid zone (ignored when `Screen.Aside` is wrapped in a `Splitter` — that owns sizing instead). Same as `--screen-aside-width`.
:::

:::prop[children]{type="ReactNode"}
Any of `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Aside`, `Screen.Footer`, `Screen.BottomNavigation`, in any order. Any *other* direct child (e.g. a `Splitter` wrapping Content + Aside) lands in the content row automatically.
:::

### Screen.Content

:::prop[maxWidth]{type="number | string"}
Caps the content column's width and centers it in the space it's given — empty gutters on either side (or the `Screen.Aside` column on the trailing side). A number is px, a string is used verbatim (`'clamp(320px, 50vw, 640px)'`). **Overrides** the width `Screen`'s `size` prop imposes — set it on one specific `Screen.Content` when that screen needs a narrower column than the others (e.g. a reader at `550`).
:::

### Screen.Sidebar

:::prop[collapsed]{type="boolean"}
Controlled flag: the panel slides out (`Drawer`-style) and unmounts; inline, `Screen` animatedly removes the reserved inset and content reflows. Omit the prop for uncontrolled mode — see `defaultCollapsed`.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Initial state for an uncontrolled sidebar. Ignored once `collapsed` is passed. An uncontrolled sidebar collapses itself on entering overlay mode (never covers the screen with no way out), and a `Toolbar.SidebarToggleAction` without its own `collapsed` reads and toggles it automatically through `Screen`'s context.
:::

:::prop[onCollapsedChange]{type="(collapsed: boolean) => void"}
Fires on any request to change the state — the scrim, `Escape`, a toggle click. Pairs with `collapsed`; in uncontrolled mode it's just a notification, the sidebar already updated itself.
:::

:::prop[onClose]{type="(event: MouseEvent | KeyboardEvent) => void"}
Narrower than `onCollapsedChange` — specifically a scrim click or `Escape` in overlay mode. In controlled mode, set `collapsed = true` here. Even without it, the scrim / `Escape` still visually close the overlay — it's never a trap.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Render the sidebar only at viewport widths `>=` the breakpoint. Out of range, the zone doesn't render and reserves no space.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Render the sidebar only at viewport widths `<` the breakpoint.
:::

### Screen.BottomNavigation

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Render the bottom navigation only at viewport widths `>=` the breakpoint.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Render the bottom navigation only at viewport widths `<` the breakpoint. Without either prop, the bar is visible on every viewport.
:::

## Recommendations

**One `Screen` per active view.** The component builds a full-viewport layout — nesting it inside another `Screen` doesn't make sense. For nested scrollable areas, use `Scrollable` instead.

The header height is the `--screen-header-height` CSS variable (default `56px`); content below it is offset automatically.
