# TextArea

A multi-line text field for longer input: comments, descriptions, messages. It is built on `TextInput`, so it looks the same, accepts the same islands and reads the same settings from the form.

## Basic usage

```tsx
const [value, setValue] = useState('');

<TextArea value={value} onChange={setValue} placeholder="Tell us about yourself" />
```

::playground{src=textArea/TextAreaBasicDemo caption="A controlled field"}

:::note
`onChange` receives the string value first and the native event second: `(value: string, event: ChangeEvent) => void`.
:::

The field is at least 72px tall and the user can stretch it vertically by dragging the corner. Pass `rows` to start with a taller field.

## Islands

Islands work as in `TextInput` — see the [list of islands](/en/components/controls/textInput#islands). The difference is the layout: on a `TextArea` they don't share a line with the text. They form a footer under it — `placement="start"` on the left, `placement="end"` on the right. This keeps every line of the text full width.

```tsx
<TextArea value={value} onChange={setValue} maxLength={280} placeholder="Write a comment">
  <TextInput.CustomIsland placement="start">
    <Text kbd>⌘↵</Text>
  </TextInput.CustomIsland>
  <TextInput.CharCounterIsland placement="end" />
</TextArea>
```

::playground{src=textArea/TextAreaIslandsDemo caption="A shortcut hint on the left, the counter on the right"}

`TextInput.CharCounterIsland` reads `maxLength` from the field, shows `current/max` and turns red once the limit is exceeded.

## States

`invalid` highlights the field as an error and sets `aria-invalid`. `readOnly` makes the value look like plain text, but the user can still focus and copy it. `disabled` grays the field out and turns off the islands inside it.

```tsx
<TextArea value="Invalid" onChange={() => {}} invalid />
<TextArea value="Read only" onChange={() => {}} readOnly />
<TextArea value="Disabled" onChange={() => {}} disabled />
```

::playground{src=textArea/TextAreaStatesDemo caption="Default, invalid, read-only and disabled"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. It changes the font, the padding and the icons of the islands together.

```tsx
<TextArea size="s" />
<TextArea size="xl" />
```

::playground{src=textArea/TextAreaSizesDemo caption="Five sizes"}

## Inside a form

Inside `Form.Field` the field picks up `name`, `disabled`, `invalid` and `size` from the form. If you pass one of them to `TextArea` directly, it wins.

```tsx
<Form errorMessages={{ description: 'Describe the project in a few words' }}>
  <Form.Field name="description" label="Description">
    <TextArea value={description} onChange={setDescription} />
  </Form.Field>
</Form>
```

::playground{src=textArea/TextAreaFormDemo caption="The error message from the form turns the field invalid"}

## Refs and styling

The field always takes the full width of its parent, so limit the width with a wrapper. `ref`, `className` and `style` apply to the `<textarea>` itself, not to the frame around it.

```tsx
const ref = useRef<HTMLTextAreaElement>(null);

<div style={{ maxWidth: 400 }}>
  <TextArea ref={ref} value={value} onChange={setValue} />
</div>
```

## Props

:::prop[value]{type="string"}
The controlled value.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Called on every change. The first argument is the string, the second is the native event.
:::

:::prop[variant]{type="'default' | 'transparent'" default="'default'"}
`default` is a frosted background with a thin outline. `transparent` has neither a background nor a border at rest.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Field size. Read from the form context when not set.
:::

:::prop[invalid]{type="boolean"}
The error state: danger tone and `aria-invalid`. Read from the form context when not set.
:::

:::prop[disabled]{type="boolean"}
Disables the field and its action islands. Read from the form context when not set.
:::

:::prop[name]{type="string"}
The `name` of the `<textarea>`. Read from the form context when not set.
:::

:::prop[readOnly]{type="boolean"}
Forbids editing; the field stays focusable.
:::

:::prop[readonlyStyles]{type="boolean" default="true"}
Whether a `readOnly` field looks like plain text, without a background or border.
:::

:::prop[className]{type="string"}
Class of the `<textarea>`.
:::

:::prop[style]{type="CSSProperties"}
Styles of the `<textarea>`.
:::

:::prop[ref]{type="Ref<HTMLTextAreaElement>"}
Ref of the `<textarea>`.
:::

Every other attribute of `<textarea>` (`placeholder`, `rows`, `maxLength`, `autoComplete`, …) is passed to it. The `type` attribute is not accepted. The islands are passed as children.

## Related topics

- [TextInput](/en/components/controls/textInput) — the single-line field `TextArea` is built on, with the full list of islands
- [Form](/en/components/controls/form) — fields, labels and error messages that `TextArea` reads from context
- [Button](/en/components/controls/button) — the component action islands are built on
