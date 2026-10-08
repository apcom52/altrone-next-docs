# Splitter

## Always set `minSize`

Without a lower bound the user can squeeze a panel down to nothing and lose its content from sight, then wonder where it went. 15–20% is a sensible minimum for most panels.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineMinSizeGoodDemo caption="Neither panel can be squeezed out of sight"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineMinSizeBadDemo caption="The divider can be dragged until a panel disappears"}
:::
::::

## Make rarely needed panels collapsible

A sidebar, a properties panel or a terminal isn't useful all the time. `collapsible` lets the user get it out of the way in one click and bring it back just as easily, instead of dragging the divider to the edge.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineCollapsibleGoodDemo caption="The panel folds away with a button on the divider"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineCollapsibleBadDemo caption="The panel can only be shrunk, never removed"}
:::
::::

## Use `Splitter` only when resizing matters

`Splitter` is for working interfaces where users tune the layout to their task. If no panel can be resized, there's nothing to split — a plain `Flex` or `Grid` layout is simpler and doesn't render dividers that do nothing.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineFixedGoodDemo caption="A fixed layout is just a Flex"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineFixedBadDemo caption="Every panel is locked, so the dividers are pointless"}
:::
::::

## Remember the layout

If users spent time arranging their workspace, they expect to find it the same next time. Save `sizes` in `onResizeEnd` (or `onSizesChange`) and feed them back through `defaultSize` or a controlled `sizes`.

```tsx
<Splitter
  sizes={sizes}
  onSizesChange={(next) => {
    setSizes(next);
    localStorage.setItem("layout", JSON.stringify(next));
  }}
>
  <Splitter.Panel>
    <Left />
  </Splitter.Panel>
  <Splitter.Panel>
    <Right />
  </Splitter.Panel>
</Splitter>
```

## Accessibility

- Each divider is a focusable `separator` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`, so screen readers announce its position.
- The divider can be moved with the arrow keys, `Shift` for larger steps, and `Home`/`End` for the limits.
- Each panel gets a localized `aria-label` ("Panel 1", "Panel 2", …).
- Collapse buttons are icon-only and carry localized labels. Don't set `showControls={false}` without giving users another way to restore a collapsed panel.
- A divider next to a collapsed panel or a `resizable={false}` panel is removed from the tab order.
