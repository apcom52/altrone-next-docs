# Search

Поиск — один из самых прямых путей пользователя к нужному контенту. `Search` — это поле ввода, которое в пустом состоянии выглядит как приглашение: иконка лупы и плейсхолдер занимают всю ширину. Когда пользователь начинает вводить — интерфейс переключается: появляется кнопка очистки, а опционально — выпадающий список подсказок. Простой случай требует двух строк кода; сложный — добавления одной функции.

## Базовое поле поиска

Для простой фильтрации без выпадающего списка достаточно `value` и `onChange`.

```tsx
const [query, setQuery] = useState("");

<Search
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Найти компонент..."
/>
```

::playground{src=SearchBasicDemo caption="Введите запрос — список фильтруется в реальном времени"}

:::note
`onChange` принимает стандартный `React.ChangeEvent<HTMLInputElement>`, а не строку. Используйте `e.target.value` для получения значения.
:::

## Поиск с подсказками

`getSuggestions` принимает строку запроса и возвращает массив `{ value, label }` — синхронно или через `Promise`. При выборе подсказки значение поля обновляется автоматически.

```tsx
const getSuggestions = async (q: string) => {
  const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  return data.map((item) => ({ value: item.id, label: item.name }));
};

<Search
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  getSuggestions={getSuggestions}
  placeholder="Найти город..."
/>
```

::playground{src=SearchSuggestionsDemo caption="Введите несколько букв — появятся подсказки"}

## Поиск в тулбаре

`Search` органично встраивается в `Toolbar.Center` как центральный элемент шапки приложения.

```tsx
<Toolbar>
  <Toolbar.Leading>
    <Toolbar.Title label="Проекты" />
  </Toolbar.Leading>
  <Toolbar.Center>
    <Search
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Поиск по проектам..."
      style={{ width: 280 }}
    />
  </Toolbar.Center>
</Toolbar>
```

## Без кнопки очистки

`showControls={false}` убирает кнопку `×`. Уместно, когда очистка поля предполагается другим способом — например, кнопкой «Сбросить фильтры».

```tsx
<Search
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  showControls={false}
/>
```

## Свойства

:::prop[value*]{type="string"}
Контролируемое значение поля.
:::

:::prop[onChange*]{type="(e: ChangeEvent<HTMLInputElement>) => void"}
Обработчик изменения. Получает стандартный React-событие с `e.target.value`.
:::

:::prop[getSuggestions]{type="(query: string) => Promise<Suggestion[]> | Suggestion[]"}
Функция получения подсказок. Принимает текущее значение, возвращает массив `{ value, label }`. При отсутствии — выпадающий список не отображается.
:::

:::prop[placeholder]{type="string"}
Текст плейсхолдера в пустом состоянии. По умолчанию — локализованное значение.
:::

:::prop[showControls]{type="boolean" default="true"}
Показывает кнопку очистки `×`, когда поле не пустое.
:::

:::prop[disabled]{type="boolean" default="false"}
Отключает поле.
:::

## Рекомендации

**Ищите немедленно, не ждите Enter.** Пользователь ожидает результата по мере ввода. Если поиск дорогой — используйте debounce (300–500 мс), но не требуйте нажимать кнопку «Найти».

**Пишите плейсхолдер как приглашение, а не как инструкцию.** «Найти компонент...» работает лучше, чем «Введите название компонента для поиска». Краткость снижает когнитивную нагрузку.

**Показывайте пустое состояние.** Если поиск ничего не нашёл — скажите об этом явно. «Ничего не найдено по запросу "…"» полезнее, чем пустой экран.

**Не используйте `Search` для фильтрации одного поля.** Если пользователь ищет по имени в форме редактирования — используйте `TextInput`. `Search` уместен там, где ищут по большому набору данных или переходят к нужной записи.

**Кнопка `×` должна убирать запрос и возвращать исходное состояние.** Когда пользователь очищает поиск, он хочет вернуться к полному списку — не к пустому экрану.
