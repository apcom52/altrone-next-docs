# Layout & responsiveness

Layout in Altrone is two related but separate concerns: how you *compose* a screen (`Flex`, `Grid`, `Box`, `Screen`) and how that composition *adapts* as the viewport or a container's own size changes. This article covers both — the primitives you build with, and the model Altrone uses to make them responsive without every component reinventing its own breakpoint logic.

## Composing a layout

**`Flex`** is the one-dimensional workhorse — a row or column with a gap, alignment, and wrapping:

```tsx
<Flex orientation="vertical" gap="m" align="start">
  <Text size={9} weight="bold">Title</Text>
  <Text color="muted">Lead paragraph</Text>
</Flex>
```

**`Grid`** is the two-dimensional counterpart — a 12-column grid, where each `Grid.Column` claims a span (`1`–`12`, or `'auto'`) and an optional offset:

```tsx
<Grid gap="m" rowGap="m">
  <Grid.Column size={8}>
    <Text>Main content</Text>
  </Grid.Column>
  <Grid.Column size={4}>
    <Text>Sidebar</Text>
  </Grid.Column>
</Grid>
```

`size` on `Grid.Column` is a single, explicit value — it doesn't take a responsive object (`{ xs: 12, md: 6 }`). If a column's span needs to change at a breakpoint, you decide that explicitly in your own code (see [Viewport breakpoints](#viewport-breakpoints) below) rather than the grid inferring it for you.

**`Box`** is the general-purpose surface primitive underneath a lot of the library (shape, material, tone, elevation) — reach for it when you need a styled container that isn't quite any of the above.

**`Splitter`** covers resizable, user-draggable layout — two or more `Splitter.Panel`s with a draggable divider between them, each optionally collapsible. Use it when a boundary should be adjustable by the user (a sidebar the user can resize or hide), not just responsive to viewport size.

**`Screen`** is the app-shell layout — `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Aside`, `Screen.Footer`, `Screen.BottomNavigation` as named zones in one grid, rather than positioning each by hand. This is also where most of the responsive behavior below actually lives.

## The two-level responsive model

Altrone splits "responsive" into two distinct mechanisms, matched to two distinct kinds of decision:

- **Viewport breakpoints** (`useBreakpoint()`) — for *app-level* decisions: should the sidebar be a persistent column or an overlay, should mobile navigation show at all.
- **Container queries** (`useContainerQuery()` / `useElementSize()`) — for *component-level* decisions: does this specific box (which might sit inside a `Splitter` panel, a card, a narrow column) currently have room for a side-by-side layout, independent of the viewport.

Reach for viewport breakpoints when the answer genuinely depends on the whole screen. Reach for container queries when it depends on the space a specific element actually has — a `Screen` embedded in a narrow `Splitter` panel should adapt to *that* panel's width, not the browser window's.

### Viewport breakpoints

```tsx
import { useBreakpoint } from "altrone-ui";

function Example() {
  const { isMd } = useBreakpoint();
  return isMd ? <SidebarNav /> : <BottomTabBar />;
}
```

| Name | Min width |
| --- | --- |
| `xs` | 520px |
| `sm` | 768px |
| `md` | 1024px |
| `lg` | 1280px |
| `xl` | 1640px |

Each `is{Name}` is `min-width` — "the viewport is at least this wide" — not a mutually exclusive band. The hook is SSR-safe: every flag is `false` until the component has mounted and can actually measure the viewport, so server-rendered markup never has to guess and then flash-correct itself.

### Container queries

For pure visual changes — hide an element, switch a grid's column count — prefer plain CSS `@container` over JS entirely; it's free of the SSR-desync concerns below and doesn't need a hook at all. Reach for `useContainerQuery`/`useElementSize` only when the decision has to happen in JS/React — a structural change like swapping which component renders, not just how it's styled:

```tsx
import { useRef } from "react";
import { useContainerQuery } from "altrone-ui";

function ListDetail() {
  const ref = useRef<HTMLDivElement>(null);
  const isNarrow = useContainerQuery(ref, { maxWidth: 480 });

  return (
    <div ref={ref}>
      {isNarrow ? <StackedLayout /> : <SideBySideLayout />}
    </div>
  );
}
```

Like `useBreakpoint`, this is SSR-safe: it reports `false` until the element is actually measured on mount, rather than guessing at a size the server can't know.

## Visual vs. structural adaptivity

Not every responsive change needs the same tool:

- **Visual adaptivity** — hiding an element, changing a grid's column count, adjusting spacing — is pure CSS (`@container`, media queries). No JS, no SSR-desync risk.
- **Structural adaptivity** — actually swapping which layout renders, like a List-Detail view collapsing from two panels into one — needs JS, because the two layouts are different component trees, not just different styling of the same one. This is what `useContainerQuery`/`useElementSize` and `useBreakpoint` are for.

## Adaptivity is a navigation idiom, not just resizing

The clearest example of structural adaptivity in Altrone is `Screen` switching navigation idiom entirely — not just shrinking a sidebar, but replacing it with a different pattern:

```tsx
<Screen mobileBreakpoint="md">
  <Screen.Sidebar visibleFrom="md">
    <SidebarNav />
  </Screen.Sidebar>

  <Screen.Content>{children}</Screen.Content>

  <Screen.BottomNavigation hiddenFrom="md">
    <BottomTabBar />
  </Screen.BottomNavigation>
</Screen>
```

`visibleFrom="md"` and `hiddenFrom="md"` mean exactly what they say — below `md`, there's no sidebar in the DOM at all (not just a hidden one costing layout space); at and above `md`, there's no bottom bar. Below `Screen`'s own `mobileBreakpoint`, `Screen.Sidebar` additionally switches from an inline grid column to an off-canvas overlay with a scrim — a separate axis from whether the zone renders at all.

:::tip
Set neither `visibleFrom` nor `hiddenFrom` to keep a zone always mounted — its *mode* can still adapt (the sidebar going overlay below `mobileBreakpoint`) even when its *presence* doesn't.
:::

## `size` stays explicit

A component's `size` prop (`mini`/`s`/`m`/`l`/`xl`) is always something the author sets — it never changes implicitly based on the current breakpoint. If a control should be smaller on mobile, that's a decision you make explicitly (with `useBreakpoint`, or a container query), not a behavior `size` springs on you. This matches the project's general preference for explicit configuration over hidden, breakpoint-driven magic.

## Building your own components

1. **Compose with `Flex`/`Grid`/`Box`, not raw `display: flex`/`grid` in hand-rolled CSS.** Consistent primitives mean consistent gap/alignment tokens and predictable behavior anywhere they're used.
2. **Pick the right responsive tool for the decision, not by default.** A purely visual change reaches for CSS `@container` first; a structural one reaches for `useContainerQuery`; an app-level layout decision reaches for `useBreakpoint`. Don't default to `useBreakpoint` for something that should really be scoped to a container.
3. **Never let `size` change itself based on viewport or container.** If smaller-on-mobile is the right call for your component, make the caller (or your own `useBreakpoint` check) pass a different `size` explicitly — don't have the component silently override what was set.
4. **Structural, JS-driven adaptivity needs the SSR-safe pattern.** Both `useBreakpoint` and `useContainerQuery` report a "not yet known" default (`false`) until mounted, specifically so server-rendered markup and the first client render agree. A component that measures its own size should follow the same shape rather than reading `window`/layout synchronously during render.

## Related topics

- [Materials](materials) — `Box`, the surface primitive this article covers alongside `Flex`/`Grid`/`Screen`
- [Accessibility](accessibility) — the ~24px hit-area minimum that applies regardless of viewport size
- [Touch devices](touchDevices) — `Screen.BottomNavigation`'s safe-area padding, in its own full context
