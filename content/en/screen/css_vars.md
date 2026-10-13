# Screen

The CSS variables you can override on `Screen`. They set the width of the sidebar and the side panel, the height of the pinned bars, and the width and padding of the content.

:::spoiler[How to override variables]
The most reliable way is the `style` prop of the element that owns the variable: a value set directly on the element beats everything else. Most variables are used across the whole screen, so set them on `Screen`:

```tsx
<Screen
  style={{ '--screen-sidebar-width': '260px' } as React.CSSProperties}
>
  {/* areas */}
</Screen>
```

Three of the variables have props that set them for you: `sidebarWidth`, `asideWidth`, and `maxWidth` on `Screen.Content` (plus `size`). `--screen-header-inset-start` is set by `insetStart` on `Screen.Header` and only makes sense on the header. When a prop exists, prefer it.

`--screen-header-height` and `--screen-bottom-nav-height` set the size of the pinned bars and the room the content leaves for them. The toolbar inside the header doesn't resize by itself, so change its `size` together with the header height.

What you can't override:

- **`--top-safe-area` and `--bottom-safe-area`.** `Screen` calculates them from the header and the bottom bar. Read them to place your own sticky elements (`top: var(--top-safe-area)`), but don't set them.
- **The shared content line** (`--screen-content-inset-start`) and the space reserved for the sidebar. They come from the sidebar width and the content padding; changing either one would misalign the header, content and footer.
- **The footer's vertical padding.** It is fixed at three times `--space-content` (plus the bottom safe area). Only the content padding variable below can be changed.
:::

## Internal variables

Defined by `Screen` itself.

::::css-vars
:::css-var[--screen-sidebar-width]{kind="size" type="Size"}
Width of the sidebar next to the content. Default: `300px`
:::

:::css-var[--screen-aside-width]{kind="size" type="Size"}
Width of the side panel in the page grid. Default: `320px`
:::

:::css-var[--screen-header-height]{kind="size" type="Size"}
Height of the header and the room left for it. Default: `56px`
:::

:::css-var[--screen-bottom-nav-height]{kind="size" type="Size"}
Height of the bottom navigation bar. Default: `64px`
:::

:::css-var[--screen-content-max-width]{kind="size" type="Size"}
Maximum width of the content column. Default: `none`
:::

:::css-var[--screen-content-padding-block]{kind="gap" type="Spacing"}
Top and bottom padding of the content and the side panel. Default: `calc(var(--space-content) * 2)`
:::

:::css-var[--screen-header-inset-start]{kind="gap" type="Spacing"}
Where the header toolbar's content starts. Default: lines up with `Screen.Content`
:::
::::

## Global variables

Not defined by `Screen`: global tokens it uses for gaps, surfaces and layering. Changing a token restyles every screen at once.

::::css-vars
:::css-var[--space-content]{kind="gap" type="Spacing"}
Gap around the sidebar and bottom bar, and the side padding of the content. Default: `var(--gap)`
:::

:::css-var[--xs-gap]{kind="gap" type="Spacing"}
Small extra gap added to the safe-area offsets. Default: `4px`
:::

:::css-var[--background-2]{kind="fill" type="Fill color" color="var(--background-2)"}
Fill of the footer. Default: `var(--gray-2)`
:::

:::css-var[--border-1]{kind="border" type="Border color" color="var(--border-1)"}
Thin line above the footer. Default: `var(--gray-6)`
:::

:::css-var[--color-overlay-scrim]{kind="fill" type="Fill color" color="var(--color-overlay-scrim)"}
Dimmed background behind the sidebar when it opens over the content. Default: `var(--black-a3)`
:::

:::css-var[--level-fixed]{kind="size" type="Layer"}
Layer of the sidebar and bottom bar; the header sits one level below. Default: `1030`
:::

:::css-var[--level-offcanvas-backdrop]{kind="size" type="Layer"}
Layer of the dimmed background behind the sidebar. Default: `1040`
:::

:::css-var[--level-offcanvas]{kind="size" type="Layer"}
Layer of the sidebar when it opens over the content. Default: `1045`
:::

:::css-var[--breakpoint-xs]{kind="size" type="Size"}
Width limit of the content for `size="mini"`. Default: `520px`
:::

:::css-var[--breakpoint-sm]{kind="size" type="Size"}
Width limit of the content for `size="s"`. Default: `768px`
:::

:::css-var[--breakpoint-md]{kind="size" type="Size"}
Width limit of the content for `size="m"`. Default: `1024px`
:::

:::css-var[--breakpoint-lg]{kind="size" type="Size"}
Width limit of the content for `size="l"`. Default: `1280px`
:::

:::css-var[--breakpoint-xl]{kind="size" type="Size"}
Width limit of the content for `size="xl"`. Default: `1640px`
:::
::::
