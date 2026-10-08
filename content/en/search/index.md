# Search

A field for looking things up. While it is empty it works as an invitation: a magnifier icon and a placeholder fill the whole width. As soon as the user starts typing, the field switches over — the icon moves to the start, a clear button appears, and, if you passed `getSuggestions`, a dropdown with suggestions opens. The simple case takes two props; the complex one adds a single function.

`Search` is an [AutocompleteInput](/en/components/controls/autocompleteInput) with search styling, and that one is a [TextInput](/en/components/controls/textInput). Islands, sizes, states, `inputRef` and the suggestion options all work here too.

## Basic usage

For plain filtering without a dropdown, `value` and `onChange` are enough.

```tsx
const [query, setQuery] = useState('');

<Search value={query} onChange={setQuery} placeholder="Find a component" />
```

::playground{src=search/SearchBasicDemo caption="Type a query — the list is filtered as you type"}

:::note
`onChange` works the same as in `TextInput`: it receives the string first and the native event second — `(value: string, event: ChangeEvent) => void`.
:::

The field never filters anything itself: `onChange` fires on every keystroke, and what to do with the query is up to you. If the filtering is expensive, debounce it on your side.

## Suggestions

`getSuggestions` receives an object with the current `value` and returns an array of suggestions, synchronously or as a `Promise`. It is called after the user pauses typing for 300 ms. Picking a suggestion writes it into the field.

```tsx
const getSuggestions = async ({ value }: { value: string }) => {
  const response = await fetch(`/api/cities?q=${encodeURIComponent(value)}`);
  return (await response.json()) as string[];
};

<Search value={query} onChange={setQuery} getSuggestions={getSuggestions} placeholder="Find a city" />
```

::playground{src=search/SearchSuggestionsDemo caption="Type a few letters — suggestions appear below"}

The arrow keys move through the list, `Enter` picks the highlighted suggestion and `Escape` closes the list.

## Rich suggestions

A suggestion does not have to be a string. For objects, tell the field which string goes into the input with `getSuggestionValue`, draw the row with `renderSuggestion` and react to a pick with `onSelect`. Search takes these from `AutocompleteInput` unchanged.

```tsx
type Article = { title: string; section: string };

<Search<Article>
  value={query}
  onChange={setQuery}
  getSuggestions={getSuggestions}
  getSuggestionValue={(article) => article.title}
  renderSuggestion={({ suggestion }) => (
    <Flex gap="s" justify="between" style={{ width: '100%' }}>
      <Text>{suggestion.title}</Text>
      <Text color="muted">{suggestion.section}</Text>
    </Flex>
  )}
  onSelect={(article) => openArticle(article)}
/>
```

::playground{src=search/SearchRichSuggestionsDemo caption="Each row shows a title and a section; picking one opens the article"}

`minChars`, `cacheResults` and `onError` are described in the [AutocompleteInput](/en/components/controls/autocompleteInput) article.

## Loading and errors

While `getSuggestions` is running, a spinner appears next to the clear button. If it throws, `onError` is called and a warning icon with a tooltip appears in the field. The spinner follows `showControls`: with `showControls={false}` it is not shown. The error icon can be replaced with `errorIcon`.

## Search in a toolbar

`Search` fits naturally into `Toolbar.Center` as the central element of an application header.

```tsx
<Toolbar>
  <Toolbar.Leading>
    <Toolbar.Title title="Projects" />
  </Toolbar.Leading>
  <Toolbar.Center>
    <Search value={query} onChange={setQuery} placeholder="Search projects" style={{ width: 280 }} />
  </Toolbar.Center>
</Toolbar>
```

::playground{src=search/SearchToolbarDemo caption="The search sits in the center of the header"}

## Without the clear button

`showControls={false}` removes the clear button. This fits when the field is cleared another way, for example with a "Reset filters" button.

```tsx
<Search value={query} onChange={setQuery} showControls={false} />
```

::playground{src=search/SearchNoControlsDemo caption="The field has no clear button — a separate button resets it"}

## Extra icons and buttons

Islands work as in `TextInput`, with one difference: children of `Search` are rendered only while the field has a value, so they never compete with the placeholder.

```tsx
<Search value={query} onChange={setQuery}>
  <TextInput.ActionIsland placement="end" label="Filters" icon={<SlidersHorizontal />} showLabel={false} />
</Search>
```

## Props

`Search` accepts every [AutocompleteInput](/en/components/controls/autocompleteInput) prop (`getSuggestionValue`, `renderSuggestion`, `onSelect`, `onError`, `minChars`, `cacheResults`, `errorIcon`) and every [TextInput](/en/components/controls/textInput) prop, except `type` — it is always `search`. Here are only the props that are specific to it.

:::prop[value*]{type="string"}
The controlled value.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Called on every change, including clearing with the clear button. The first argument is the string, the second is the native event.
:::

:::prop[getSuggestions]{type="(context: { value: string }) => T[] | Promise<T[]>"}
Returns the suggestions for the current value. Called 300 ms after the last keystroke. Without it, the field has no dropdown.
:::

:::prop[placeholder]{type="string" default="'Search'"}
The text next to the magnifier in the empty field. It is drawn by the component itself, not by the native `placeholder`, and the default is localized.
:::

:::prop[showControls]{type="boolean" default="true"}
Whether to show the clear button and the loading spinner while the field has a value.
:::

:::prop[searchIcon]{type="ReactElement" default="Application.icons.search"}
Replaces the magnifier, both in the placeholder and at the start of the filled field. See the [Icons](/en/components/controls/search/icons) tab.
:::

:::prop[clearIcon]{type="ReactElement" default="Application.icons.clear"}
Replaces the icon of the clear button. See the [Icons](/en/components/controls/search/icons) tab.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
A reference to the whole field.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
A reference to the `<input>` itself.
:::

## Related topics

- [AutocompleteInput](/en/components/controls/autocompleteInput) — the field `Search` is built on: suggestion options, caching, errors
- [TextInput](/en/components/controls/textInput) — islands, sizes and states
- [Toolbar](/en/components/layout/toolbar) — where a search usually lives
