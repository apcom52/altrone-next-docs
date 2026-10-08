# Scrollable

Browser scrollbars take up space and look different on every operating system. `Scrollable` solves both problems: overlay scrollbars are drawn on top of the content without changing the container's width, and they hide when the user isn't interacting with the area. Scrolling shows up only when it's needed.

## Basic usage

Wrap the content in `Scrollable`. By default the component fills 100% of its parent's height, so the parent needs a set height.

```tsx
<Box height={240}>
  <Scrollable>
    {messages.map((message) => <Message key={message.id} {...message} />)}
  </Scrollable>
</Box>
```

::playground{src=scrollable/ScrollableBasicDemo caption="Scroll the list — the bar appears on movement"}

The bar hides 300 ms after the pointer stops and reappears on scroll or hover. Its color follows the app theme.

## Capping the height

If the parent has no set height, pass `maxHeight`: the container grows with its content up to that value, then scrolls. Short content gets neither extra space nor a bar.

```tsx
<Scrollable maxHeight={120}>
  {options.map((option) => <Option key={option} label={option} />)}
</Scrollable>
```

::playground{src=scrollable/ScrollableMaxHeightDemo caption="A long list stops at 120px and scrolls, a short one keeps its own height"}

## Scroll direction

`overflowX` and `overflowY` set the behavior of each axis and default to `'scroll'`. `'hidden'` turns an axis off completely: no bar, and no scrolling by gesture either. For a horizontal strip, turn off the vertical axis and give the content `width: max-content`.

```tsx
<Scrollable overflowX="scroll" overflowY="hidden">
  <Flex gap="s" style={{ width: 'max-content' }}>
    {tags.map((tag) => <Label key={tag}>{tag}</Label>)}
  </Flex>
</Scrollable>
```

::playground{src=scrollable/ScrollableAxesDemo caption="A horizontal strip of tags"}

Besides `'scroll'` and `'hidden'`, `'visible'`, `'visible-hidden'`, and `'visible-scroll'` are accepted — they're passed to OverlayScrollbars as is.

## Programmatic scrolling

`ref` points at the outer wrapper, not at the scrolling element: the real viewport is managed by OverlayScrollbars inside. To get it — for `scrollTo`, `scrollTop`, or a `scroll` listener — use `controlRef` and its `getViewport()` method. It returns `null` until the scrollbar has initialized.

```tsx
const controlRef = useRef<ScrollableRef>(null);

const scrollToTop = () => {
  controlRef.current?.getViewport()?.scrollTo({ top: 0, behavior: 'smooth' });
};

<Scrollable controlRef={controlRef}>
  <LongContent />
</Scrollable>
```

::playground{src=scrollable/ScrollableProgrammaticDemo caption="The buttons drive scrolling through controlRef"}

## Several areas on one screen

`Scrollable` lets zones of the interface scroll independently — for example, a sidebar and the main content. Inside a flex column the wrapper has `min-height: 0`, so it shrinks and scrolls next to a fixed header or footer instead of stretching the column.

```tsx
<Flex style={{ height: 600 }}>
  <Box width={200} style={{ flexShrink: 0 }}>
    <Scrollable><Navigation /></Scrollable>
  </Box>
  <Box style={{ flex: 1, minWidth: 0 }}>
    <Scrollable><PageContent /></Scrollable>
  </Box>
</Flex>
```

::playground{src=scrollable/ScrollableLayoutDemo caption="The sidebar and the content scroll independently"}

## Props

:::prop[children]{type="ReactNode"}
The scrollable content.
:::

:::prop[overflowX]{type="'scroll' | 'hidden' | 'visible' | 'visible-hidden' | 'visible-scroll'" default="'scroll'"}
Behavior of the horizontal axis. `'hidden'` turns the axis off completely.
:::

:::prop[overflowY]{type="'scroll' | 'hidden' | 'visible' | 'visible-hidden' | 'visible-scroll'" default="'scroll'"}
Behavior of the vertical axis.
:::

:::prop[maxHeight]{type="number | string"}
Maximum height: the container grows with its content up to this value, then scrolls. Without it, the container fills its parent's full height.
:::

:::prop[controlRef]{type="Ref<ScrollableRef>"}
Imperative access to the real viewport — `{ getViewport: () => HTMLElement | null }`. Use it for programmatic scrolling or to subscribe to the native `scroll` event.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Reference to the outer wrapper (the visible box), not to the scrolling viewport.
:::

:::note
`className`, `style`, and the other `HTMLAttributes` are applied to the outer wrapper, not the viewport. Use `controlRef` to reach the viewport.
:::

## Related topics

- [Drawer](/en/components/overlays/drawer) — a side panel whose long content scrolls on top of `Scrollable`
- [Modal](/en/components/overlays/modal) — a dialog whose tall panel scrolls as a whole
- [Dropdown](/en/components/overlays/dropdown) — a menu whose list stops at `maxHeight` and scrolls
- [Flex](/en/components/layout/flex) — a component for laying out content inside `Scrollable`
