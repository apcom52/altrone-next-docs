# Search

Поле для поиска. Пока оно пустое, оно работает как приглашение: иконка лупы и плейсхолдер занимают всю ширину. Как только пользователь начинает печатать, поле переключается: иконка уходит в начало, появляется кнопка очистки, а если вы передали `getSuggestions` — открывается выпадающий список подсказок. Простой случай требует двух пропов; сложный добавляет одну функцию.

`Search` — это [AutocompleteInput](/ru/components/controls/autocompleteInput) с поисковым оформлением, а тот, в свою очередь, — [TextInput](/ru/components/controls/textInput). Острова, размеры, состояния, `inputRef` и все опции подсказок работают и здесь.

## Базовый пример

Для простой фильтрации без выпадающего списка достаточно `value` и `onChange`.

```tsx
const [query, setQuery] = useState('');

<Search value={query} onChange={setQuery} placeholder="Find a component" />
```

::playground{src=search/SearchBasicDemo caption="Введите запрос — список фильтруется по мере набора"}

:::note
`onChange` работает так же, как в `TextInput`: первым аргументом приходит строка, вторым — нативное событие, `(value: string, event: ChangeEvent) => void`.
:::

Сам по себе компонент ничего не фильтрует: `onChange` вызывается на каждое нажатие, а что делать с запросом — решаете вы. Если фильтрация тяжёлая, добавьте дебаунс у себя.

## Подсказки

`getSuggestions` получает объект с текущим `value` и возвращает массив подсказок — синхронно или через `Promise`. Функция вызывается, когда пользователь на 300 мс остановился в наборе. Выбранная подсказка записывается в поле.

```tsx
const getSuggestions = async ({ value }: { value: string }) => {
  const response = await fetch(`/api/cities?q=${encodeURIComponent(value)}`);
  return (await response.json()) as string[];
};

<Search value={query} onChange={setQuery} getSuggestions={getSuggestions} placeholder="Find a city" />
```

::playground{src=search/SearchSuggestionsDemo caption="Введите несколько букв — ниже появятся подсказки"}

Стрелки перемещаются по списку, `Enter` выбирает подсвеченную подсказку, `Escape` закрывает список.

## Подсказки-объекты

Подсказка не обязана быть строкой. Для объектов скажите полю, какая строка попадёт в ввод, через `getSuggestionValue`, нарисуйте строку через `renderSuggestion` и отреагируйте на выбор через `onSelect`. `Search` берёт эти пропы у `AutocompleteInput` без изменений.

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

::playground{src=search/SearchRichSuggestionsDemo caption="В каждой строке — заголовок и раздел; выбор открывает статью"}

`minChars`, `cacheResults` и `onError` описаны в статье про [AutocompleteInput](/ru/components/controls/autocompleteInput).

## Загрузка и ошибки

Пока выполняется `getSuggestions`, рядом с кнопкой очистки появляется спиннер. Если функция выбросила исключение, вызывается `onError`, а в поле показывается иконка предупреждения с подсказкой. Спиннер подчиняется `showControls`: при `showControls={false}` он не показывается. Иконку ошибки можно заменить через `errorIcon`.

## Поиск в тулбаре

`Search` органично встраивается в `Toolbar.Center` как центральный элемент шапки приложения.

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

::playground{src=search/SearchToolbarDemo caption="Поиск стоит по центру шапки"}

## Без кнопки очистки

`showControls={false}` убирает кнопку очистки. Это уместно, когда очистка поля предполагается другим способом — например, кнопкой «Сбросить фильтры».

```tsx
<Search value={query} onChange={setQuery} showControls={false} />
```

::playground{src=search/SearchNoControlsDemo caption="В поле нет кнопки очистки — его сбрасывает отдельная кнопка"}

## Дополнительные иконки и кнопки

Острова работают как в `TextInput`, с одним отличием: дети `Search` рендерятся только пока в поле есть значение, поэтому они не конкурируют с плейсхолдером.

```tsx
<Search value={query} onChange={setQuery}>
  <TextInput.ActionIsland placement="end" label="Filters" icon={<SlidersHorizontal />} showLabel={false} />
</Search>
```

## Свойства

`Search` принимает все пропы [AutocompleteInput](/ru/components/controls/autocompleteInput) (`getSuggestionValue`, `renderSuggestion`, `onSelect`, `onError`, `minChars`, `cacheResults`, `errorIcon`) и все пропы [TextInput](/ru/components/controls/textInput), кроме `type` — он всегда `search`. Здесь перечислены только те, что свойственны именно ему.

:::prop[value*]{type="string"}
Контролируемое значение поля.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Вызывается при каждом изменении, в том числе при очистке кнопкой очистки. Первый аргумент — строка, второй — нативное событие.
:::

:::prop[getSuggestions]{type="(context: { value: string }) => T[] | Promise<T[]>"}
Возвращает подсказки для текущего значения. Вызывается через 300 мс после последнего нажатия. Без него у поля нет выпадающего списка.
:::

:::prop[placeholder]{type="string" default="'Search'"}
Текст рядом с лупой в пустом поле. Его рисует сам компонент, а не нативный `placeholder`; значение по умолчанию локализуется.
:::

:::prop[showControls]{type="boolean" default="true"}
Показывать ли кнопку очистки и спиннер загрузки, пока в поле есть значение.
:::

:::prop[searchIcon]{type="ReactElement" default="Application.icons.search"}
Заменяет лупу — и в плейсхолдере, и в начале заполненного поля. См. вкладку [Иконки](/ru/components/controls/search/icons).
:::

:::prop[clearIcon]{type="ReactElement" default="Application.icons.clear"}
Заменяет иконку кнопки очистки. См. вкладку [Иконки](/ru/components/controls/search/icons).
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на всё поле целиком.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ссылка на сам `<input>`.
:::

## Похожие темы

- [AutocompleteInput](/ru/components/controls/autocompleteInput) — поле, на котором построен `Search`: опции подсказок, кэш, ошибки
- [TextInput](/ru/components/controls/textInput) — острова, размеры и состояния
- [Toolbar](/ru/components/layout/toolbar) — место, где обычно живёт поиск
