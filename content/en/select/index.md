# Select

A drop-down list for choosing one or several values from a known set of options. The trigger is a `TextInput`, so the field looks like the other text controls, and the list opens in a `Dropdown`.

## Basic usage

`options` is a list of `{ value, label }` objects, and `value` is the `value` of the chosen option. `onChange` is required: without it the control has nowhere to keep the choice.

```tsx
const [country, setCountry] = useState<string | undefined>();

<Select
  value={country}
  onChange={(value) => setCountry(value as string | undefined)}
  placeholder="Select a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
  ]}
/>
```

::playground{src=select/SelectBasicDemo caption="Choosing an option closes the list"}

:::note
`onChange` receives the new value first and, when the change comes from a click or a key press, the native event second: `(value: string | string[] | undefined, event?: MouseEvent | KeyboardEvent) => void`.
:::

## Clearing the choice

`clearable` adds a clear button while something is selected. It calls `onChange` with `undefined` (or an empty array in `multiple` mode), so the field returns to the placeholder.

```tsx
<Select value={status} onChange={setStatus} options={options} clearable placeholder="All statuses" />
```

::playground{src=select/SelectClearableDemo caption="The clear button appears only when there is something to clear"}

## Multiple choice

With `multiple` the value is an array of strings. The list stays open after each pick, so the user can mark several options in a row; clicking a chosen option removes it. The selected labels are joined with commas in the field.

```tsx
const [tags, setTags] = useState<string[]>([]);

<Select
  multiple
  value={tags}
  onChange={(value) => setTags((value as string[] | undefined) ?? [])}
  options={options}
  placeholder="Select tags"
/>
```

::playground{src=select/SelectMultipleDemo caption="The list stays open until the user clicks outside"}

## Search

`searchable` turns the field into an input while it is focused: the user types, and the list is filtered by a case-insensitive substring of the label. The chosen label stays in the field as a placeholder while typing. When nothing matches, the list says so.

```tsx
<Select searchable value={country} onChange={setCountry} options={countries} placeholder="Search countries" />
```

::playground{src=select/SelectSearchableDemo caption="Start typing to filter the list"}

## Disabled options

An option with `disabled: true` stays in the list but can't be chosen. Use it for choices that exist but aren't available right now.

```tsx
const options = [
  { value: 'sev1', label: 'SEV-1 · Critical' },
  { value: 'sev0', label: 'SEV-0 · Page everyone', disabled: true },
];
```

::playground{src=select/SelectDisabledOptionDemo caption="The last option is visible but unavailable"}

## Transparent variant

`transparent` removes the border and the background, so at rest the field looks like plain text. On hover and focus a light tint appears. It fits places where the choice is part of the layout, such as a sort order above a list.

```tsx
<Select transparent value={sort} onChange={setSort} options={sorts} />
```

::playground{src=select/SelectTransparentDemo caption="At rest it looks like plain text"}

## Sizes

`size` accepts `mini`, `s`, `m` (the default), `l` and `xl`. One prop changes the height, the padding, the font and the icons together.

```tsx
<Select size="s" />
<Select size="xl" />
```

::playground{src=select/SelectSizesDemo caption="Five sizes"}

## Custom trigger

With `asChild` the only child becomes the trigger instead of the text field. The list works the same way, and `useSelectContext()` gives the child the state of the select: `expanded`, `value`, `selectedOptions`, `disabled`, `multiple` and the `clear` function. The hook only works inside a `Select`. The child must accept `ref`.

```tsx
const CountryTrigger = ({ ref }: { ref?: Ref<HTMLButtonElement> }) => {
  const { expanded, selectedOptions } = useSelectContext();

  return (
    <Button
      ref={ref}
      label={selectedOptions?.label ?? 'Select country'}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
};

<Select asChild value={country} onChange={setCountry} options={options}>
  <CountryTrigger />
</Select>
```

::playground{src=select/SelectCustomTriggerDemo caption="A button shows the choice and the state of the list"}

## Inside a form

Inside `Form.Field` the select picks up `name`, `disabled` and `size` from the form, so you don't need to repeat them. If you pass one of them to `Select` directly, it wins.

```tsx
<Form errorMessages={{ role: 'Choose a role to continue' }}>
  <Form.Field name="role" label="Role">
    <Select value={role} onChange={setRole} options={roles} placeholder="Choose a role" />
  </Form.Field>
</Form>
```

::playground{src=select/SelectFormDemo caption="The select takes its name from the field"}

When the form is submitted natively, the value goes out in hidden inputs: one `name` field in single mode, and one `name[]` field per chosen value in `multiple` mode. Without a `name` an automatic one is generated.

## Refs and styling

`ref` points to the wrapper around the field, which spans the whole control. `className` and `style` go to the field itself and its frame. The height of the list is set with `menuHeight`, in pixels; by default the list fits its content and scrolls only past 250px.

```tsx
<Select value={value} onChange={setValue} options={options} menuHeight={160} style={{ maxWidth: 320 }} />
```

By default the list is as wide as the field; pass `parentWidth={false}` to let it take the width of its content.

## Props

:::prop[value]{type="string | string[]"}
The controlled value: a string for a single choice, an array of strings with `multiple`.
:::

:::prop[onChange*]{type="(value: string | string[] | undefined, event?: MouseEvent | KeyboardEvent) => void"}
Called when the choice changes. `undefined` (or `[]` with `multiple`) means the choice was cleared.
:::

:::prop[options*]{type="{ value: string; label: string; disabled?: boolean }[]"}
The options of the list. `disabled` leaves an option visible but not selectable.
:::

:::prop[multiple]{type="boolean" default="false"}
Allows choosing several options. `value` must be an array.
:::

:::prop[clearable]{type="boolean" default="false"}
Shows a clear button while something is selected.
:::

:::prop[searchable]{type="boolean" default="false"}
Lets the user filter the list by typing in the field.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Field size. Read from the form context when not set.
:::

:::prop[transparent]{type="boolean" default="false"}
Removes the border and the background of the field at rest.
:::

:::prop[placeholder]{type="string"}
Text shown while nothing is selected.
:::

:::prop[disabled]{type="boolean" default="false"}
Disables the select. Read from the form context when not set.
:::

:::prop[name]{type="string"}
The name of the hidden input used when the form is submitted. Read from the form context when not set, otherwise generated.
:::

:::prop[menuHeight]{type="number" default="250"}
The maximum height of the list in pixels. Overrides `--select-menu-height`.
:::

:::prop[parentWidth]{type="boolean" default="true"}
Makes the list as wide as the field.
:::

:::prop[openIcon]{type="ReactElement"}
The chevron while the list is closed. See [Icons](/en/components/controls/select/icons).
:::

:::prop[closeIcon]{type="ReactElement"}
The chevron while the list is open.
:::

:::prop[searchIcon]{type="ReactElement"}
The icon while the user is searching.
:::

:::prop[clearIcon]{type="ReactElement"}
The icon of the clear button.
:::

:::prop[asChild]{type="boolean" default="false"}
Uses the only child as the trigger instead of the text field.
:::

:::prop[className]{type="string"}
Class of the field.
:::

:::prop[style]{type="CSSProperties"}
Styles of the field.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref of the wrapper around the field.
:::

## Related topics

- [TextInput](/en/components/controls/textInput) — the field the trigger is made of
- [Form](/en/components/controls/form) — fields, labels and error messages that `Select` reads from context
- [Dropdown](/en/components/overlays/dropdown) — the list the options are shown in
