# Splitter

`Splitter` divides the available space into panels, and the user can drag the border between them. It hands control over screen space to the user: in an IDE, an editor or a dashboard, different zones have different value at different moments, and the user decides how much room each one gets.

## Basic usage

Put `Splitter.Panel` elements inside `Splitter`. `Splitter` fills its parent, so give the parent a fixed height.

```tsx
<div style={{ height: 400 }}>
  <Splitter>
    <Splitter.Panel defaultSize={30} minSize={20} maxSize={60}>
      <Sidebar />
    </Splitter.Panel>
    <Splitter.Panel>
      <MainContent />
    </Splitter.Panel>
  </Splitter>
</div>
```

::playground{src=splitter/SplitterBasicDemo caption="Drag the divider to resize the panels"}

Sizes are percentages of the container. A panel without `defaultSize` shares the remaining space equally with the other such panels. `minSize` and `maxSize` limit how far the divider can go. Each panel's content scrolls on its own.

## Vertical split

`orientation="vertical"` stacks the panels on top of each other. A typical case is an editor with a preview or a terminal below it.

```tsx
<Splitter orientation="vertical">
  <Splitter.Panel defaultSize={60}>
    <CodeEditor />
  </Splitter.Panel>
  <Splitter.Panel>
    <Preview />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterVerticalDemo caption="A vertical split — editor and output"}

## Any number of panels

`Splitter` isn't limited to two panels — every pair of neighbours gets its own divider. Set `defaultSize`, `minSize` and `maxSize` per panel.

```tsx
<Splitter>
  <Splitter.Panel defaultSize={20} minSize={15} maxSize={30}>
    <FileTree />
  </Splitter.Panel>
  <Splitter.Panel defaultSize={55}>
    <CodeEditor />
  </Splitter.Panel>
  <Splitter.Panel>
    <Problems />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterThreePanelsDemo caption="An IDE-style layout with three panels"}

## Collapsible panels

`collapsible` lets the user collapse a panel completely with a button on the divider. A collapsed panel keeps an expand button on the divider; `collapsedControlsVisibility` controls when that button is shown (`'always'`, `'hover'` or `'never'`), and `showControls={false}` removes the buttons altogether. `onCollapse` reports every change.

To collapse and expand a panel from your own code, pass a `controlRef` — it exposes `collapse`, `expand` and `toggle` (each takes a panel index), plus `getSizes` and `getCollapsed`.

```tsx
const controlRef = useRef<SplitterHandle>(null);

<>
  <Button label="Collapse sidebar" onClick={() => controlRef.current?.collapse(0)} />
  <Button label="Expand sidebar" onClick={() => controlRef.current?.expand(0)} />

  <Splitter controlRef={controlRef}>
    <Splitter.Panel defaultSize={30} collapsible>
      <Sidebar />
    </Splitter.Panel>
    <Splitter.Panel>
      <Content />
    </Splitter.Panel>
  </Splitter>
</>
```

::playground{src=splitter/SplitterCollapsibleDemo caption="Use the buttons or the arrow on the divider"}

## Keyboard

Each divider is focusable. `←`/`→` (`↑`/`↓` in a vertical splitter) move it by 1%, with `Shift` by 10%. `Home` and `End` push it to the nearest limit.

## Controlled sizes

Pass `sizes` together with `onSizesChange` to own the layout yourself — to reset it, sync it between views or keep it in a store. `onSizesChange` fires when a drag ends and when a panel collapses or expands.

```tsx
const [sizes, setSizes] = useState([30, 70]);

<Splitter sizes={sizes} onSizesChange={setSizes}>
  <Splitter.Panel>
    <Left />
  </Splitter.Panel>
  <Splitter.Panel>
    <Right />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterControlledDemo caption="The layout lives in state and can be reset"}

For live updates during a drag use `onResize`; `onResizeStart` and `onResizeEnd` mark its boundaries.

## Props

### Splitter

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Direction of the split. `horizontal` — panels side by side, `vertical` — stacked.
:::

:::prop[sizes]{type="number[]"}
Controlled panel sizes in percent, in panel order. Pairs with `onSizesChange`. Omit for uncontrolled mode, where each panel starts from its `defaultSize`.
:::

:::prop[onSizesChange]{type="(sizes: number[]) => void"}
Fires when sizes settle — at the end of a drag or when a panel collapses or expands.
:::

:::prop[onResize]{type="(sizes: number[], event: PointerEvent) => void"}
Fires on every pointer move during a drag.
:::

:::prop[onResizeStart]{type="(sizes: number[], event: PointerEvent) => void"}
Fires when a drag begins.
:::

:::prop[onResizeEnd]{type="(sizes: number[], event: PointerEvent) => void"}
Fires once when a drag ends. A good moment to save the layout.
:::

:::prop[onCollapse]{type="(panelIndex: number, collapsed: boolean, event?: MouseEvent) => void"}
Fires when a panel is collapsed or expanded. `event` is missing when the change comes from `controlRef`.
:::

:::prop[showControls]{type="boolean" default="true"}
Collapse and expand buttons on the dividers of collapsible panels.
:::

:::prop[collapsedControlsVisibility]{type="'always' | 'hover' | 'never'" default="'always'"}
When the expand button of a collapsed panel is shown. `never` hides it — expand such a panel through `controlRef`.
:::

:::prop[controlRef]{type="Ref<SplitterHandle>"}
Imperative handle with `collapse`, `expand`, `toggle`, `getSizes` and `getCollapsed`.
:::

:::prop[icons]{type="Partial<SplitterIconSet>"}
Replacements for the divider's chevron icons. See [Icons](/en/components/layout/splitter/icons).
:::

### Splitter.Panel

:::prop[defaultSize]{type="number"}
Initial size in percent (0–100). Panels without one share the remaining space equally.
:::

:::prop[minSize]{type="number" default="0"}
Minimum size in percent.
:::

:::prop[maxSize]{type="number" default="100"}
Maximum size in percent.
:::

:::prop[collapsible]{type="boolean" default="false"}
Lets the user collapse the panel completely with a button on the divider.
:::

:::prop[resizable]{type="boolean" default="true"}
When `false`, the dividers next to this panel can't be dragged.
:::

:::prop[className]{type="string"}
Added to the panel's root `<div>`.
:::

:::prop[style]{type="CSSProperties"}
Inline styles for the panel's root `<div>`. The internal `flex` that sizes the panel always wins over a conflicting value.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref to the panel's root `<div>`.
:::

## Related topics

- [Scrollable](/en/components/layout/scrollable) — every panel's content is wrapped in it
- [Screen](/en/components/layout/screen) — the page-level layout a `Splitter` often lives in
- [Keyboard](/en/foundations/keyboard) — keyboard conventions across the library
