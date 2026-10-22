# Close Button

`CloseButton` is a ready-made icon button for dismissing panels, cards, messages and notifications. It is a `Button` with the `X` icon, a hidden label and a localized accessible name, so a close control looks and behaves the same everywhere in the product. Unlike a regular icon-only `Button`, it shows no tooltip on hover: the cross is clear without one.

```tsx
import { CloseButton } from 'altrone-ui';
```

## Basic usage

No props are required. Pass `onClick` to hide whatever the button belongs to.

```tsx
<CloseButton onClick={() => setOpen(false)} />
```

::playground{src=closeButton/CloseButtonBasicDemo caption="Click the cross to dismiss the card"}

The accessible name comes from the library's localization — "Close" in English — and follows the `language` prop of [Application](/en/components/layout/application). There is no `aria-label` prop: to name the button differently, use `label`.

## Sizes

`size` takes the same five steps as every other control. The button is always a circle, and the icon scales with it. At `mini` the button is 16px, but an invisible ring keeps its clickable area at 24px.

```tsx
<CloseButton size="mini" />
<CloseButton size="s" />
<CloseButton size="m" />
<CloseButton size="l" />
<CloseButton size="xl" />
```

::playground{src=closeButton/CloseButtonSizesDemo caption="mini, s, m, l, xl"}

## In a panel header

The usual place for the button is the trailing edge of a header, next to the title. When several close buttons are on screen, give each one a specific `label` — a screen reader then announces "Close Filters" instead of the same "Close" several times.

```tsx
<Flex align="center" justify="between">
  <Text weight="medium">Filters</Text>
  <CloseButton size="s" label="Close Filters" onClick={closeFilters} />
</Flex>
```

::playground{src=closeButton/CloseButtonHeaderDemo caption="Each panel has its own close button"}

:::note
`Modal` and `Drawer` render a `CloseButton` in their header by default, `Popover` does it with `showCloseButton`, `Message` when `onClose` is passed, and toasts and notifications always have one. Add one by hand only to your own cards and panels.
:::

## Disabled button

`disabled` blocks the button and dims the icon.

```tsx
<CloseButton disabled />
```

::playground{src=closeButton/CloseButtonDisabledDemo caption="Enabled and disabled"}

The icon is replaced with the `icon` prop on one button or with the `dismiss` role in `Application` for all of them — see the [Icons](/en/components/controls/closeButton/icons) tab.

## Props

`CloseButton` takes a narrow set of props, not the whole `Button` API: `variant`, `danger`, `badge`, `state`, `tooltip` and `kbd` are not available, and `showLabel` is always `false`.

:::prop[onClick]{type="(event: React.MouseEvent<HTMLButtonElement>) => void"}
Click handler.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Button size.
:::

:::prop[label]{type="string"}
Accessible name. Defaults to the localized "Close".
:::

:::prop[icon]{type="ReactElement"}
Replaces the icon. Defaults to the `dismiss` role from `Application` — a cross. More on the [Icons](/en/components/controls/closeButton/icons) tab.
:::

:::prop[disabled]{type="boolean" default="false"}
Disables the button.
:::

:::prop[type]{type="'button' | 'submit' | 'reset'" default="'button'"}
The HTML button type. Defaults to `"button"`, so the button never submits a form.
:::

:::prop[asChild]{type="boolean" default="false"}
Merges the button's styling and behavior onto its only child element instead of rendering a `<button>`.
:::

:::prop[ref]{type="Ref<HTMLButtonElement>"}
Reference to the `<button>` element.
:::

Other `<button>` attributes (`id`, `className`, `style`, `data-*`, `onFocus`, …) are passed to the element, except `aria-label` — use `label` for it.

## Related topics

- [Button](/en/components/controls/button) — the component `CloseButton` is built on
- [Modal](/en/components/overlays/modal) — a dialog with a close button in the header
- [Drawer](/en/components/overlays/drawer) — a side panel with a close button in the header
- [Popover](/en/components/overlays/popover) — `showCloseButton` adds the button to a popover
- [Message](/en/components/feedback/message) — a message that can be dismissed
- [Application](/en/components/layout/application) — the label language and the shared `dismiss` icon
- [Accessibility](/en/foundations/accessibility) — the accessible-name rule for icon-only controls
