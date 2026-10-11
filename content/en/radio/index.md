# Radio

`Radio` is a group of mutually exclusive options: the user picks exactly one. Every option is visible at once, so the group suits short lists where comparing the options by eye matters, such as plans or delivery methods.

## Basic usage

`Radio` is the group container, and each option is a `Radio.Item`.

```tsx
const [channel, setChannel] = useState("email");

<Radio value={channel} onChange={setChannel}>
  <Radio.Item value="email">Email</Radio.Item>
  <Radio.Item value="sms">SMS</Radio.Item>
  <Radio.Item value="push">Push notification</Radio.Item>
</Radio>
```

::playground{src=radio/RadioBasicDemo caption="A controlled group with three options"}

`Radio` keeps no state of its own, so pass `value` and `onChange` together. The option whose `value` matches the group's value is the selected one.

:::note
`onChange` receives the selected option's value first and the native event second: `(value: string, event: ChangeEvent<HTMLInputElement>) => void`. You can pass the setter from `useState` directly.
:::

## Layout

By default the options sit in a row and wrap when they don't fit. `orientation="vertical"` stacks them in a column, which reads better when the labels are long or there are more than three options.

```tsx
<Radio value={plan} onChange={setPlan} orientation="vertical">
  <Radio.Item value="free">Free — $0 per month</Radio.Item>
  <Radio.Item value="pro">Pro — $12 per month</Radio.Item>
  <Radio.Item value="enterprise">Enterprise — contact us</Radio.Item>
</Radio>
```

::playground{src=radio/RadioVerticalDemo caption="A vertical group"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It scales the circle, the dot and the label of every option at once. The clickable row is never shorter than 24px, even at `mini`. A single option can override the size through `size` on `Radio.Item`.

```tsx
<Radio size="s" value={value} onChange={setValue}>
  <Radio.Item value="a">Compact</Radio.Item>
  <Radio.Item value="b">Compact</Radio.Item>
</Radio>
```

::playground{src=radio/RadioSizesDemo caption="Five sizes"}

## Unavailable options

`disabled` on `Radio` locks the whole group, and on `Radio.Item` only one option. A disabled option can't be focused or clicked, and its circle and label turn gray. The two levels add up: an option is unavailable if either of them is disabled.

```tsx
<Radio value={role} onChange={setRole}>
  <Radio.Item value="viewer">Viewer</Radio.Item>
  <Radio.Item value="editor">Editor</Radio.Item>
  <Radio.Item value="admin" disabled>Admin</Radio.Item>
</Radio>
```

::playground{src=radio/RadioDisabledDemo caption="A single unavailable option and a fully disabled group"}

## No option selected

`value` is optional. Leave it out and the group renders with nothing selected; after the first click your `onChange` receives the value. The user can't go back to "nothing selected" afterwards — that is how native radio buttons work.

```tsx
const [answer, setAnswer] = useState<string>();

<Radio value={answer} onChange={setAnswer}>
  <Radio.Item value="yes">Yes</Radio.Item>
  <Radio.Item value="no">No</Radio.Item>
</Radio>
```

::playground{src=radio/RadioNoSelectionDemo caption="A group with nothing selected yet"}

## Numeric values

`value` on `Radio` and `Radio.Item` can be a number, but `onChange` always hands back a **string**: the value is read from the native `<input>`. Convert it yourself when you need a number.

```tsx
const [quantity, setQuantity] = useState(5);

<Radio value={quantity} onChange={(next) => setQuantity(Number(next))}>
  <Radio.Item value={1}>1</Radio.Item>
  <Radio.Item value={5}>5</Radio.Item>
  <Radio.Item value={10}>10</Radio.Item>
</Radio>
```

::playground{src=radio/RadioNumericDemo caption="Numeric values are converted in onChange"}

## Conditional options

A child can be `null` or `false`, so you can render a `Radio.Item` conditionally without extra checks.

```tsx
<Radio value={size} onChange={setSize}>
  <Radio.Item value="s">Small</Radio.Item>
  <Radio.Item value="m">Medium</Radio.Item>
  {isPremium && <Radio.Item value="l">Large</Radio.Item>}
</Radio>
```

## Without a label

When an option has no text, give it a name through `aria-label` or `aria-labelledby`. They land on the `<input>` itself, not on the wrapper.

```tsx
<Radio.Item value="a" aria-label="Option A" />
```

::playground{src=radio/RadioNoLabelDemo caption="Just the circles, names set through aria-label"}

## Inside a form

Inside a `Form.Field` the group takes `name`, `disabled` and `size` from the form. A prop passed to the group itself wins. With neither a form `name` nor its own, the group generates a unique name, so several groups on one page don't interfere.

```tsx
<Form size="l">
  <Form.Field name="delivery">
    <Radio value={delivery} onChange={setDelivery}>
      <Radio.Item value="courier">Courier</Radio.Item>
      <Radio.Item value="pickup">Pickup</Radio.Item>
    </Radio>
  </Form.Field>
  <Form.Field name="payment" disabled>
    <Radio value={payment} onChange={setPayment}>
      <Radio.Item value="card">Card</Radio.Item>
      <Radio.Item value="cash">Cash</Radio.Item>
    </Radio>
  </Form.Field>
</Form>
```

::playground{src=radio/RadioFormDemo caption="The size comes from the form; the second group is locked"}

## Keyboard

Every option is a real `<input type="radio">`, hidden visually but available to assistive technology. `Tab` moves focus into the group: the selected option gets it, or the first one when nothing is selected. The arrow keys move focus between options and select them at once, and `Space` selects the focused option. The focus ring appears only for keyboard navigation.

## Ref and styling

The group's `ref` points to the root `<div>`, and the `ref` of a `Radio.Item` points to its `<label>`. `className` and `style` apply to the same elements, and the remaining attributes are passed to them too. To change the look, override the [CSS variables](/en/components/controls/radio/css-vars).

## Props

### Radio

:::prop[value]{type="string | number"}
The value of the selected option. Leave it out to render the group with nothing selected.
:::

:::prop[onChange*]{type="(value: string, event: ChangeEvent<HTMLInputElement>) => void"}
Called when the user selects an option. The first argument is the option's value as a string, the second is the native event.
:::

:::prop[children*]{type="ReactElement<RadioItemProps> | (ReactElement<RadioItemProps> | null | false)[]"}
The `Radio.Item` elements. `null` and `false` are allowed for conditional rendering.
:::

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
The direction the options are laid out in.
:::

:::prop[name]{type="string"}
The `name` attribute of every `<input>` in the group. When unset, it is read from the form context and then generated automatically.
:::

:::prop[disabled]{type="boolean"}
Locks the whole group. When unset, it is read from the form context.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
The size of the circle, dot and label of every option. When unset, it is read from the form context.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref of the root `<div>`.
:::

All other `<div>` attributes, including `className` and `style`, are passed to the root element.

### Radio.Item

:::prop[value*]{type="string | number"}
The option's value.
:::

:::prop[children]{type="ReactNode"}
The label next to the circle. Accepts text or any React node.
:::

:::prop[disabled]{type="boolean" default="false"}
Locks only this option. Adds up with the group's `disabled`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Overrides the group's size for this option.
:::

:::prop[aria-label]{type="string"}
The accessible name when there are no `children`. Applied to the `<input>`; `aria-labelledby` and `aria-describedby` work the same way.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref of the root `<label>`.
:::

All other `<label>` attributes, including `className` and `style`, are passed to the option's root element.

## Related topics

- [Checkbox](/en/components/controls/checkbox) — when several options, or none, can be selected
- [Select](/en/components/controls/select) — when there are many options and they shouldn't take up room on screen
- [Form](/en/components/controls/form) — `Form.Field` passes `name`, `disabled` and `size` to the group
