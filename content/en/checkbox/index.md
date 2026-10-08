# Checkbox

A checkbox answers a yes/no question: "apply this to the item?". Unlike radio buttons, checkboxes are independent — the user can pick any number of them at once.

## Basic usage

```tsx
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onChange={setChecked}>
  I accept the terms
</Checkbox>
```

::playground{src=checkbox/CheckboxBasicDemo caption="A controlled checkbox with a label"}

The component keeps no state of its own: pass `checked` and `onChange` together. The text inside becomes the label, and clicking it toggles the checkbox.

:::note
`onChange` receives the **next** value first and the native event second: `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void`. Don't read `event.target.checked` — pass a `useState` setter straight in.
:::

## Without a label

When there is no text next to the checkbox — a row selector in a table, for example — give it a name with `aria-label` or `aria-labelledby`. They land on the `<input>` itself, not on the wrapper.

```tsx
<Checkbox aria-label="Select row" checked={checked} onChange={setChecked} />
```

::playground{src=checkbox/CheckboxNoLabelDemo caption="Only the box, named for screen readers"}

## Partial selection

`indeterminate` shows a dash instead of the check mark. Use it on a "select all" checkbox when only some of the items in its group are selected.

```tsx
const allChecked = selected.length === OPTIONS.length;
const someChecked = selected.length > 0 && !allChecked;

<Checkbox checked={allChecked} indeterminate={someChecked} onChange={toggleAll}>
  All permissions
</Checkbox>
```

::playground{src=checkbox/CheckboxIndeterminateDemo caption="The parent shows a dash while only some children are selected"}

`indeterminate` doesn't change `checked` — the "some are selected" logic is yours to write. The state is also set on the native `<input>`, so screen readers announce the checkbox as `mixed`.

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It scales the box, the check mark and the label together. The clickable row never gets lower than 24px, even at `mini`.

```tsx
<Checkbox size="s" checked={checked} onChange={setChecked}>Compact</Checkbox>
<Checkbox size="l" checked={checked} onChange={setChecked}>Large</Checkbox>
```

::playground{src=checkbox/CheckboxSizesDemo caption="Five sizes"}

## Dangerous choices

`danger` colors the label in the danger tone. Use it when ticking the box leads to an irreversible result.

```tsx
<Checkbox checked={checked} onChange={setChecked} danger>
  Delete all data permanently
</Checkbox>
```

::playground{src=checkbox/CheckboxDangerDemo caption="A danger label"}

## Disabled

`disabled` is set on the native `<input>`: the checkbox ignores clicks and keyboard, and looks neutral whether it is checked or not.

```tsx
<Checkbox disabled onChange={() => {}}>Unavailable, unchecked</Checkbox>
<Checkbox checked disabled onChange={() => {}}>Unavailable, checked</Checkbox>
```

::playground{src=checkbox/CheckboxDisabledDemo caption="Disabled, unchecked and checked"}

## Inside a form

Inside `Form.Field` the checkbox picks up `name`, `disabled` and `size` from the form. A prop passed to `Checkbox` directly wins. `name` is also what makes the value part of a native form submit.

```tsx
<Form size="l">
  <Form.Field name="newsletter">
    <Checkbox checked={newsletter} onChange={setNewsletter}>
      Subscribe to the newsletter
    </Checkbox>
  </Form.Field>
  <Form.Field name="terms" disabled>
    <Checkbox checked={terms} onChange={setTerms}>Accept the terms</Checkbox>
  </Form.Field>
</Form>
```

::playground{src=checkbox/CheckboxFormDemo caption="Size from the form; the second field is locked"}

## Keyboard

Focus lands on the real `<input>`, so the checkbox is reachable with `Tab`. `Space` toggles it; `Enter` doesn't, just like a native checkbox. The focus ring appears only for keyboard focus.

## Refs and styling

`ref` points to the root `<label>`. `className` and `style` apply to it as well, and every other `<label>` attribute is passed to it. To restyle the checkbox, override its [CSS variables](/en/components/controls/checkbox/css-vars).

## Props

:::prop[checked]{type="boolean" default="false"}
The controlled state.
:::

:::prop[onChange*]{type="(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void"}
Called when the user toggles the checkbox. The first argument is the next value, the second is the native event.
:::

:::prop[indeterminate]{type="boolean" default="false"}
Shows a dash instead of the check mark and sets the native `indeterminate` property. Doesn't change `checked`.
:::

:::prop[danger]{type="boolean" default="false"}
Colors the label in the danger tone.
:::

:::prop[disabled]{type="boolean"}
Disables the checkbox. Read from the form context when not set.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Size of the box, the check mark and the label. Read from the form context when not set.
:::

:::prop[name]{type="string"}
The `name` of the `<input>`. Read from the form context when not set.
:::

:::prop[children]{type="ReactNode"}
The label next to the box. Accepts text or any React node.
:::

:::prop[aria-label]{type="string"}
The accessible name when there is no `children`. Applied to the `<input>`; `aria-labelledby` and `aria-describedby` work the same way.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref of the root `<label>`.
:::

Every other attribute of `<label>`, `className` and `style` included, is passed to the root element.

## Related topics

- [Switch](/en/components/controls/switch) — the same contract for settings that apply instantly
- [Form](/en/components/controls/form) — `Form.Field` hands `name`, `disabled` and `size` down to the checkbox
- [Select](/en/components/controls/select) — pick one value, or several, from a long list
