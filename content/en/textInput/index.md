# TextInput

A single-line text field. You can put icons, buttons, prefixes and indicators right inside it — they are called islands and sit in one row with the text. The field is drawn the same way as `Button`, so the two look like parts of one family.

## Basic usage

```tsx
const [value, setValue] = useState('');

<TextInput value={value} onChange={setValue} placeholder="Enter your name" />
```

::playground{src=textInput/TextInputBasicDemo caption="A controlled field"}

:::note
`onChange` receives the string value first and the native event second: `(value: string, event: ChangeEvent) => void`.
:::

## Islands

An island is a small element inside the field next to the text: an icon, a button, a counter. Put it in `TextInput` as a child, and the text will never run under it. `placement="start"` (the default) puts the island before the text, `placement="end"` after it. Several islands on one side go in the order you write them.

| Component | Purpose |
| --- | --- |
| `TextInput.IconIsland` | A non-interactive icon |
| `TextInput.ActionIsland` | A button inside the field |
| `TextInput.TextIsland` | A static prefix or suffix |
| `TextInput.LoadingIsland` | A spinner for async work |
| `TextInput.CharCounterIsland` | A character counter |
| `TextInput.CustomIsland` | Arbitrary content |

### Icons

`TextInput.IconIsland` adds an icon that tells the user what the field is for before they type anything. The icon follows the field's `size`.

```tsx
<TextInput value={email} onChange={setEmail} placeholder="Email">
  <TextInput.IconIsland icon={<Mail />} />
</TextInput>
```

::playground{src=textInput/TextInputIconDemo caption="The icon sets expectations before typing"}

### Action buttons

`TextInput.ActionIsland` is a `Button` locked to the in-field chip look, so it accepts the whole `Button` API except `variant` (`state`, `badge`, `tooltip`, `selected`, …). With `showLabel={false}` it becomes a round icon button, and `label` turns into its `aria-label` and tooltip. Its `size` defaults to one tier below the field, and a disabled field disables its actions too.

```tsx
<TextInput value={search} onChange={setSearch} placeholder="Search">
  <TextInput.IconIsland icon={<Search />} />
  {search && (
    <TextInput.ActionIsland
      label="Clear"
      icon={<X />}
      showLabel={false}
      placement="end"
      onClick={() => setSearch('')}
    />
  )}
</TextInput>
```

::playground{src=textInput/TextInputClearDemo caption="The clear button appears only when there is something to clear"}

### Prefixes and suffixes

`TextInput.TextIsland` adds static text: a unit, a currency symbol, a URL scheme — anything that is part of the format but not part of the value.

```tsx
<TextInput value={domain} onChange={setDomain} placeholder="mysite">
  <TextInput.TextIsland label="https://" />
  <TextInput.TextIsland label=".com" placement="end" />
</TextInput>
```

::playground{src=textInput/TextInputTextIslandDemo caption="The affix clarifies the format without taking space outside the field"}

### Loading indicator

`TextInput.LoadingIsland` shows a spinner while something happens asynchronously — a search, an availability check. It carries `role="status"` and a localized `aria-label`.

```tsx
<TextInput value={query} onChange={setQuery}>
  <TextInput.IconIsland icon={<Search />} />
  {isLoading && <TextInput.LoadingIsland placement="end" />}
</TextInput>
```

::playground{src=textInput/TextInputLoadingDemo caption="Type something — the spinner appears for a second"}

### Character counter

`TextInput.CharCounterIsland` shows the current length. With `maxLength` set on the field it reads `current/max` and turns red once the limit is exceeded.

```tsx
<TextInput value={bio} onChange={setBio} maxLength={160}>
  <TextInput.CharCounterIsland placement="end" />
</TextInput>
```

::playground{src=textInput/TextInputCharCounterDemo caption="The counter shows how much of the limit is used"}

### Custom content

`TextInput.CustomIsland` holds anything that does not fit the other islands. Unlike the passive ones it keeps pointer events, so the content stays interactive.

```tsx
<TextInput value={value} onChange={setValue}>
  <TextInput.CustomIsland placement="end">
    <Text kbd>⌘K</Text>
  </TextInput.CustomIsland>
</TextInput>
```

## States

`invalid` highlights the field as an error and tells screen readers about it through `aria-invalid`. `readOnly` makes the value look like plain text, but the user can still focus it and copy it; pass `readonlyStyles={false}` if you want the usual look. `disabled` grays the field out and turns off the buttons inside it.

```tsx
<TextInput value="Invalid" onChange={() => {}} invalid />
<TextInput value="Read only" onChange={() => {}} readOnly />
<TextInput value="Disabled" onChange={() => {}} disabled />
```

::playground{src=textInput/TextInputStatesDemo caption="Default, invalid, read-only and disabled"}

## Transparent variant

`variant="transparent"` removes the border and the background, so at rest the field looks like plain text. On hover and focus a light tint appears, just like on a `text` button. It fits places where the field is part of the layout, such as editing a card title in place.

```tsx
<TextInput value={title} onChange={setTitle} variant="transparent" size="xl" />
```

::playground{src=textInput/TextInputTransparentDemo caption="At rest it looks like plain text, hover and focus reveal the field"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. One prop changes the height, the padding, the font and the icons together.

```tsx
<TextInput size="mini" />
<TextInput size="xl" />
```

::playground{src=textInput/TextInputSizesDemo caption="Five sizes"}

On touch devices the `m` size raises the font to 16px so iOS Safari does not zoom the page on focus.

## Inside a form

Inside `Form.Field` the field picks up `name`, `disabled`, `invalid` and `size` from the form, so you don't need to repeat them. If you pass one of them to `TextInput` directly, it wins.

```tsx
<Form errorMessages={{ email: 'This email is already registered' }}>
  <Form.Field name="email" label="Email">
    <TextInput value={email} onChange={setEmail}>
      <TextInput.IconIsland icon={<Mail />} />
    </TextInput>
  </Form.Field>
</Form>
```

::playground{src=textInput/TextInputFormDemo caption="The error message from the form turns the field invalid"}

## Custom field element

With `asChild` the first child that is not an island becomes the input itself. The border, the islands and the value handling stay the same, so you can use them with a `<textarea>` or a component from an input-masking library.

```tsx
<TextInput value={value} onChange={setValue} asChild>
  <textarea rows={3} />
  <TextInput.TextIsland label="note:" />
</TextInput>
```

## Refs and styling

`ref`, `className` and `style` apply to the whole field including its border. To reach the `<input>` itself, use `inputRef`, `inputClassName` and `inputStyle`.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<TextInput
  value={value}
  onChange={setValue}
  inputRef={inputRef}
  style={{ maxWidth: 360 }}
/>
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
The input's `name`. Read from the form context when not set.
:::

:::prop[readOnly]{type="boolean"}
Forbids editing; the field stays focusable.
:::

:::prop[readonlyStyles]{type="boolean" default="true"}
Whether a `readOnly` field looks like plain text, without a background or border.
:::

:::prop[asChild]{type="boolean" default="false"}
Uses the first non-island child as the field element instead of `<input>`.
:::

:::prop[className]{type="string"}
Class of the whole field.
:::

:::prop[style]{type="CSSProperties"}
Styles of the whole field. Use it to set the width.
:::

:::prop[inputClassName]{type="string"}
Class of the `<input>` itself, or of the `asChild` element.
:::

:::prop[inputStyle]{type="CSSProperties"}
Styles of the `<input>` itself, or of the `asChild` element.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ref of the whole field.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ref of the `<input>`, or of the `asChild` element.
:::

Every other attribute of `<input>` (`placeholder`, `maxLength`, `type`, `autoComplete`, …) is passed to the input.

### Islands

Every island accepts `placement` and the attributes of its root element plus `ref`.

:::prop[placement]{type="'start' | 'end'" default="'start'"}
The side of the input the island sits on. Common to all islands.
:::

:::prop[icon*]{type="ReactElement"}
`IconIsland`: the icon to draw.
:::

:::prop[label*]{type="string"}
`TextIsland`: the text to show. `ActionIsland`: the button label, also its `aria-label` and tooltip when `showLabel` is `false`.
:::

:::prop[showLabel]{type="boolean" default="true"}
`ActionIsland`: whether the label is shown next to the icon.
:::

`ActionIsland` also accepts every `Button` prop except `variant`: `state`, `badge`, `tooltip`, `selected`, `danger`, `size` and so on.

## Related topics

- [Form](/en/components/controls/form) — fields, labels and error messages that `TextInput` reads from context
- [Button](/en/components/controls/button) — the component `TextInput.ActionIsland` is built on
- [Box](/en/components/layout/box) — the building block the field's look is made from
