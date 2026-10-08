# Tooltip

A short floating hint anchored to an element. Opens after a 500 ms delay on hover, or immediately on focus — and disappears as soon as the pointer leaves or focus moves away. The trigger mode is configurable via `trigger`, including click. `Tooltip` adds context without permanently cluttering the interface with visible text.

:::warning
Never wrap a `Button` (or `CloseButton`, which is a `Button` underneath) in `Tooltip`. `Button` already renders its own internal tooltip whenever `showLabel={false}` — pass `tooltip`/`kbd` to `Button` directly instead. Wrapping it in a second, external `Tooltip` nests two tooltip instances on the same trigger and breaks rendering. See [Button](/en/components/controls/button) for its own tooltip props.
:::

## Basic example

```tsx
<Tooltip content="Copy to clipboard">
  <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Copy">
    <Copy size={14} />
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipBasicDemo caption="Hover over a button to see its tooltip"}

## Title and keyboard shortcut

`title` adds a bold heading above the text. `kbd` renders a keyboard-shortcut badge. Use them together for toolbar buttons.

```tsx
<Tooltip title="Save document" content="Saves all unsaved changes." kbd="⌘S">
  <Box shape="circle" size="s" material="translucent" pressable focusable role="button" tabIndex={0} aria-label="Save">
    <Save size={14} />
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipTitleKbdDemo caption="title and kbd work well for icon-only buttons"}

## Help icon (no children)

If `children` is omitted, `Tooltip` renders its own button with a `?` icon. Use it next to form fields and technical terms.

```tsx
<Flex gap="xs" align="center">
  <span>API key</span>
  <Tooltip content="A secret key for accessing the API. Never share it publicly." />
</Flex>
```

::playground{src=tooltip/TooltipHelpIconDemo}

## Placement

By default the tooltip appears above the trigger. `placement` accepts any Floating UI placement string: `top`, `bottom`, `left`, `right`, and their `-start`/`-end` variants. It flips automatically when there isn't enough room.

```tsx
<Tooltip content="Top"    placement="top">…</Tooltip>
<Tooltip content="Bottom" placement="bottom">…</Tooltip>
<Tooltip content="Left"   placement="left">…</Tooltip>
<Tooltip content="Right"  placement="right">…</Tooltip>
```

::playground{src=tooltip/TooltipPlacementsDemo}

## Trigger modes

By default a tooltip opens on both hover and focus (`trigger={['hover', 'focus']}`). `trigger` accepts a single value or an array: `'hover'`, `'focus'`, `'click'`.

```tsx
<Tooltip content="Opens only on click" trigger="click">
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Info
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipTriggerModesDemo caption="Three independent trigger modes"}

## Initial state and change tracking

`defaultOpen` opens the tooltip immediately on first render. `onOpenChange` fires on every state change — its `reason` comes from floating-ui (`'hover'`, `'focus'`, `'escape-key'`, `'outside-press'`, and so on). `Tooltip` has no controlled (`open`) mode.

```tsx
<Tooltip
  content="Visible right away, before any hover"
  defaultOpen
  onOpenChange={(open, event, reason) => console.log(open, reason)}
>
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Open by default
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipOpenStateDemo}

## Tooltip on a disabled element

A natively `disabled` element doesn't fire mouse events, so the tooltip never appears. Mark the trigger with `aria-disabled="true"` instead and keep it focusable with `tabIndex={0}` — then the hint works on hover and from the keyboard.

```tsx
<Tooltip content="Select at least one item first">
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} style={{ opacity: 0.5 }} role="button" aria-disabled="true" tabIndex={0}>
    Delete
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipDisabledDemo}

## Rich content

`content` accepts any `ReactNode`. Use it for structured, multi-line hints.

```tsx
<Tooltip
  content={
    <Flex orientation="vertical" gap="xs">
      <strong>Plan limits</strong>
      <span>5 projects · 3 members · 10 GB</span>
    </Flex>
  }
  maxWidth={240}
>
  <span>Current plan</span>
</Tooltip>
```

::playground{src=tooltip/TooltipRichContentDemo}

## Props

`className`/`style` are the one exception to how HTML attributes are forwarded: every other native attribute (`id`, `aria-*`, `data-*`, event handlers) lands on the **trigger** element (the same one `ref` points to), but `className`/`style` target the floating tooltip panel itself.

:::prop[content*]{type="string | ReactElement"}
Text or element shown inside the tooltip.
:::

:::prop[children]{type="ReactNode"}
The trigger element. If omitted, a button with a `?` icon is rendered.
:::

:::prop[title]{type="string"}
Bold heading above `content`.
:::

:::prop[kbd]{type="string"}
Keyboard-shortcut badge, shown after `content`.
:::

:::prop[placement]{type="Placement" default="'top'"}
The tooltip's position relative to the trigger. Flips automatically when there isn't enough room.
:::

:::prop[maxWidth]{type="number | string"}
Maximum width of the tooltip panel.
:::

:::prop[trigger]{type="'hover' | 'focus' | 'click' | ('hover' | 'focus' | 'click')[]" default="['hover', 'focus']"}
Which interaction(s) open the tooltip.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Initial state for the uncontrolled tooltip.
:::

:::prop[onOpenChange]{type="(open: boolean, event?: Event, reason?: OpenChangeReason) => void"}
Fires on every open-state change. `reason` comes from floating-ui.
:::

:::prop[triggerIcon]{type="ReactElement"}
Icon for the auto-generated trigger button (when `children` is omitted). Defaults to the shared `icons.help` role (see `Application`). Has no effect with a custom trigger via `children`.
:::

:::prop[triggerClassName]{type="string"}
Extra class for the auto-generated trigger button. Has no effect with a custom trigger via `children`.
:::

:::prop[triggerStyle]{type="CSSProperties"}
Inline styles for the auto-generated trigger button. Has no effect with a custom trigger via `children`.
:::

## Related topics

- [Popover](/en/components/overlays/popover) — the heavier floating-content primitive `Tooltip` split off from; use it when you need a title bar, focus trap, or arbitrary interactive content
- [Button](/en/components/controls/button) — has its own `tooltip`/`kbd` props for an icon-only button; never wrap a `Button` in a standalone `Tooltip`
- [Box](/en/components/layout/box) — the primitive used above to build a custom trigger, without `Button`'s own auto-tooltip getting in the way
- [Accessibility](/en/foundations/accessibility) — the `aria-label` requirement for icon-only triggers, which `Tooltip` content is never a substitute for
