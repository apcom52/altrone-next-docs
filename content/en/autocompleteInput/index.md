# AutocompleteInput

A text field with a dropdown list of suggestions. The user types, the list narrows down, and a click or `Enter` puts the chosen item into the field. Use it when the value can be anything, but a suggestion saves typing: a city, a tag, an address, a username.

`AutocompleteInput` is a `TextInput` with a list attached, so everything you know about [TextInput](/en/components/controls/textInput) works here too: islands, sizes, states, `inputRef`. Suggestions come from your own function, synchronous or asynchronous. The field waits until the user stops typing, shows a loading indicator in the meantime, and displays an empty state if nothing was found.

## Basic usage

```tsx
const [value, setValue] = useState('');

const getSuggestions = ({ value }: { value: string }) =>
  CITIES.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  placeholder="Type a city"
/>
```

::playground{src=autocompleteInput/AutocompleteInputBasicDemo caption="Type part of a city name"}

`↑` and `↓` move through the list, `Enter` picks the highlighted item, `Escape` closes the list. After a pick the field holds the chosen text and does not ask for suggestions again until the user edits it.

:::note
`onChange` works the same as in `TextInput`: it receives the string first and the native event second — `(value: string, event: ChangeEvent) => void`. It also fires when the value is set by picking a suggestion.
:::

## Asynchronous source

`getSuggestions` may return a promise, so the list can come from a server. While the request is running, a spinner appears at the end of the field. If the request returns nothing, the list shows an empty state instead of disappearing.

```tsx
const getSuggestions = async ({ value }: { value: string }) => {
  const response = await fetch(`/api/cities?q=${encodeURIComponent(value)}`);
  return (await response.json()) as string[];
};

<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} />
```

The field calls `getSuggestions` 300 ms after the last keystroke, so a fast typist triggers one request, not one per letter. The delay is built in and can't be changed — don't add your own debounce on top.

## Minimum length

By default suggestions are requested from the first character. Set `minChars` to wait for a more meaningful query: the server gets fewer requests, and the user doesn't see a long list for a single letter.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} minChars={2} />
```

::playground{src=autocompleteInput/AutocompleteInputMinCharsDemo caption="The list appears from the second character"}

## Caching results

`cacheResults` remembers the answer for every typed value while the field is mounted. Going back to a prefix that was already requested — for example with `Backspace` — shows the list at once, without a new call.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} cacheResults />
```

::playground{src=autocompleteInput/AutocompleteInputCacheDemo caption="The counter shows how many times getSuggestions was called"}

The cache is cleared when the field unmounts. Use it only when the data is stable during a session — countries, tags, categories — not when results can change while the user types.

## Object suggestions

A suggestion doesn't have to be a string. By default `T` is `string`; if `getSuggestions` returns objects, tell the field which string to write into the input with `getSuggestionValue`. `onSelect` receives the whole object, so you don't have to look it up again.

```tsx
type Language = { name: string; year: number };

<AutocompleteInput<Language>
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  getSuggestionValue={(language) => language.name}
  onSelect={(language) => setSelected(language)}
/>
```

::playground{src=autocompleteInput/AutocompleteInputObjectDemo caption="Pick a language — the object itself arrives in onSelect"}

`onSelect` runs on a click and on `Enter`. Its arguments are the suggestion, the text written into the field, and the native event: `(suggestion: T, inputValue: string, event) => void`.

## Custom suggestion row

`renderSuggestion` controls what is drawn **inside** a row. The row itself — the click target, keyboard navigation and the highlight that slides between items — belongs to the field, so the renderer returns only the content. It receives the suggestion and the current text of the field.

```tsx
<AutocompleteInput<Language>
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  getSuggestionValue={(language) => language.name}
  renderSuggestion={({ suggestion, inputValue }) => (
    <Flex justify="between" style={{ width: '100%' }}>
      <Text>{suggestion.name}</Text>
      <Text color="muted">{suggestion.year}</Text>
    </Flex>
  )}
/>
```

::playground{src=autocompleteInput/AutocompleteInputRenderDemo caption="The matching part is bold, the year is on the right"}

Don't put buttons or links inside the row: the whole row is already the interactive element.

## Loading errors

If `getSuggestions` throws or the promise rejects, the field shows an error icon at its end with a tooltip, and calls `onError`. The icon disappears when the next request starts. The user can keep typing — the field never gets stuck.

```tsx
<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  onError={() => showToast('Could not load suggestions')}
/>
```

::playground{src=autocompleteInput/AutocompleteInputErrorDemo caption="The request always fails: the icon appears, and so does the toast"}

The icon can be replaced — see the [Icons](/en/components/controls/autocompleteInput/icons) tab.

## Without the loading indicator

`showControls={false}` hides the spinner shown while suggestions load. The list, the keyboard and the error icon keep working.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} showControls={false} />
```

## Islands

Islands work as in `TextInput` and sit next to the spinner and the error icon.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions}>
  <TextInput.IconIsland icon={<Globe />} placement="start" />
</AutocompleteInput>
```

::playground{src=autocompleteInput/AutocompleteInputIslandsDemo caption="An icon at the start of the field"}

## Inside a form

Within `Form.Field` the field takes `name`, `disabled`, `invalid` and `size` from the form. An error from `errorMessages` turns the field red on its own.

```tsx
<Form errorMessages={{ city: 'Pick a city from the list' }}>
  <Form.Field name="city" label="City">
    <AutocompleteInput value={city} onChange={setCity} getSuggestions={getSuggestions} />
  </Form.Field>
</Form>
```

::playground{src=autocompleteInput/AutocompleteInputFormDemo caption="The error from the form highlights the field"}

## Props

`AutocompleteInput` accepts every [TextInput](/en/components/controls/textInput) prop. Here are only the props that are specific to it. The component is generic: `T` is the type of one suggestion and defaults to `string`.

:::prop[getSuggestions*]{type="(context: { value: string }) => T[] | Promise<T[]>"}
Returns the suggestions for the current text. Called 300 ms after the last keystroke, only when the text is at least `minChars` long. May be synchronous or asynchronous.
:::

:::prop[getSuggestionValue]{type="(suggestion: T) => string" default="String(suggestion)"}
Returns the string that is written into the field when a suggestion is picked. Required when `T` is not `string`.
:::

:::prop[renderSuggestion]{type="(context: { suggestion: T; inputValue: string }) => ReactNode"}
Draws the content of a suggestion row. The row itself is created by the field. By default the string from `getSuggestionValue` is shown.
:::

:::prop[onSelect]{type="(suggestion: T, inputValue: string, event) => void"}
Called when a suggestion is picked with a click or `Enter`. The last argument is the native event.
:::

:::prop[onError]{type="(error: unknown) => void"}
Called when `getSuggestions` throws or its promise rejects.
:::

:::prop[minChars]{type="number" default="1"}
The minimum text length (without surrounding spaces) at which `getSuggestions` is called.
:::

:::prop[cacheResults]{type="boolean" default="false"}
Remember the suggestions for each typed value while the field is mounted.
:::

:::prop[showControls]{type="boolean" default="true"}
Whether to show the spinner while suggestions are loading.
:::

:::prop[errorIcon]{type="ReactElement" default="<CircleAlert />"}
The icon shown when loading fails. See the [Icons](/en/components/controls/autocompleteInput/icons) tab.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the whole field.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
A reference to the `<input>` itself.
:::

## Related topics

- [TextInput](/en/components/controls/textInput) — the field `AutocompleteInput` is built on: islands, sizes, states
- [Search](/en/components/controls/search) — a search field built on `AutocompleteInput`
- [Dropdown](/en/components/overlays/dropdown) — the list of suggestions is a dropdown menu
- [Form](/en/components/controls/form) — labels, hints and error messages around the field
