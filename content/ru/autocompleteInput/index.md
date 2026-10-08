# AutocompleteInput

Текстовое поле с выпадающим списком подсказок. Пользователь печатает, список сужается, а клик или `Enter` подставляет выбранный пункт в поле. Подходит там, где значением может быть что угодно, но подсказка экономит набор: город, тег, адрес, имя пользователя.

`AutocompleteInput` — это `TextInput` со списком, поэтому всё, что вы знаете про [TextInput](/ru/components/controls/textInput), работает и здесь: острова, размеры, состояния, `inputRef`. Подсказки приходят из вашей функции — синхронной или асинхронной. Поле ждёт, пока пользователь закончит печатать, на время запроса показывает индикатор загрузки, а если ничего не нашлось — пустое состояние.

## Базовое использование

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

::playground{src=autocompleteInput/AutocompleteInputBasicDemo caption="Введите часть названия города"}

`↑` и `↓` перемещаются по списку, `Enter` выбирает подсвеченный пункт, `Escape` закрывает список. После выбора в поле остаётся выбранный текст, и новые подсказки не запрашиваются, пока пользователь его не изменит.

:::note
`onChange` работает так же, как в `TextInput`: первым аргументом приходит строка, вторым — нативное событие, `(value: string, event: ChangeEvent) => void`. Он вызывается и тогда, когда значение записано выбором подсказки.
:::

## Асинхронный источник

`getSuggestions` может вернуть промис, поэтому список можно получать с сервера. Пока идёт запрос, в конце поля показывается спиннер. Если запрос ничего не вернул, список показывает пустое состояние, а не пропадает.

```tsx
const getSuggestions = async ({ value }: { value: string }) => {
  const response = await fetch(`/api/cities?q=${encodeURIComponent(value)}`);
  return (await response.json()) as string[];
};

<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} />
```

Поле вызывает `getSuggestions` через 300 мс после последнего нажатия, поэтому быстрый набор даёт один запрос, а не по запросу на каждую букву. Задержка встроена и не настраивается — не добавляйте поверх свой дебаунс.

## Минимальная длина

По умолчанию подсказки запрашиваются с первого символа. Задайте `minChars`, чтобы дождаться более осмысленного запроса: сервер получит меньше обращений, а пользователь не увидит длинный список на одну букву.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} minChars={2} />
```

::playground{src=autocompleteInput/AutocompleteInputMinCharsDemo caption="Список появляется со второго символа"}

## Кэширование результатов

`cacheResults` запоминает ответ для каждого введённого значения, пока поле смонтировано. Возврат к уже запрошенному префиксу — например, через `Backspace` — показывает список сразу, без нового вызова.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} cacheResults />
```

::playground{src=autocompleteInput/AutocompleteInputCacheDemo caption="Счётчик показывает, сколько раз вызвался getSuggestions"}

Кэш очищается при размонтировании поля. Включайте его, когда данные стабильны в рамках сессии — страны, теги, категории, — а не когда результаты могут меняться, пока пользователь печатает.

## Объекты в подсказках

Подсказка не обязана быть строкой. По умолчанию `T` — это `string`; если `getSuggestions` возвращает объекты, укажите через `getSuggestionValue`, какую строку записывать в поле. `onSelect` получает объект целиком, так что искать его заново не нужно.

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

::playground{src=autocompleteInput/AutocompleteInputObjectDemo caption="Выберите язык — в onSelect придёт сам объект"}

`onSelect` срабатывает при клике и при `Enter`. Его аргументы — подсказка, текст, записанный в поле, и нативное событие: `(suggestion: T, inputValue: string, event) => void`.

## Своя строка подсказки

`renderSuggestion` управляет тем, что рисуется **внутри** строки. Сама строка — цель клика, навигация с клавиатуры и подсветка, скользящая между пунктами, — принадлежит полю, поэтому рендерер возвращает только содержимое. Он получает подсказку и текущий текст поля.

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

::playground{src=autocompleteInput/AutocompleteInputRenderDemo caption="Совпавшая часть выделена жирным, год — справа"}

Не кладите в строку кнопки и ссылки: вся строка уже является интерактивным элементом.

## Ошибки загрузки

Если `getSuggestions` выбросил исключение или промис отклонён, в конце поля появляется иконка ошибки с подсказкой, и вызывается `onError`. Иконка исчезает, когда начинается следующий запрос. Пользователь может продолжать печатать — поле не зависает.

```tsx
<AutocompleteInput
  value={value}
  onChange={setValue}
  getSuggestions={getSuggestions}
  onError={() => showToast('Could not load suggestions')}
/>
```

::playground{src=autocompleteInput/AutocompleteInputErrorDemo caption="Запрос всегда падает: появляются и иконка, и тост"}

Иконку можно заменить — см. вкладку [Иконки](/ru/components/controls/autocompleteInput/icons).

## Без индикатора загрузки

`showControls={false}` скрывает спиннер, который показывается, пока подсказки загружаются. Список, клавиатура и иконка ошибки продолжают работать.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions} showControls={false} />
```

## Острова

Острова работают как в `TextInput` и стоят рядом со спиннером и иконкой ошибки.

```tsx
<AutocompleteInput value={value} onChange={setValue} getSuggestions={getSuggestions}>
  <TextInput.IconIsland icon={<Globe />} placement="start" />
</AutocompleteInput>
```

::playground{src=autocompleteInput/AutocompleteInputIslandsDemo caption="Иконка в начале поля"}

## Внутри формы

Внутри `Form.Field` поле берёт `name`, `disabled`, `invalid` и `size` из формы. Ошибка из `errorMessages` сама подсвечивает поле красным.

```tsx
<Form errorMessages={{ city: 'Pick a city from the list' }}>
  <Form.Field name="city" label="City">
    <AutocompleteInput value={city} onChange={setCity} getSuggestions={getSuggestions} />
  </Form.Field>
</Form>
```

::playground{src=autocompleteInput/AutocompleteInputFormDemo caption="Ошибка из формы подсвечивает поле"}

## Свойства

`AutocompleteInput` принимает все свойства [TextInput](/ru/components/controls/textInput). Здесь — только те, что относятся именно к нему. Компонент обобщённый: `T` — тип одной подсказки, по умолчанию `string`.

:::prop[getSuggestions*]{type="(context: { value: string }) => T[] | Promise<T[]>"}
Возвращает подсказки для текущего текста. Вызывается через 300 мс после последнего нажатия и только когда текст не короче `minChars`. Может быть синхронной или асинхронной.
:::

:::prop[getSuggestionValue]{type="(suggestion: T) => string" default="String(suggestion)"}
Возвращает строку, которая записывается в поле при выборе подсказки. Обязателен, когда `T` — не `string`.
:::

:::prop[renderSuggestion]{type="(context: { suggestion: T; inputValue: string }) => ReactNode"}
Рисует содержимое строки подсказки. Саму строку создаёт поле. По умолчанию показывается строка из `getSuggestionValue`.
:::

:::prop[onSelect]{type="(suggestion: T, inputValue: string, event) => void"}
Вызывается, когда подсказка выбрана кликом или `Enter`. Последний аргумент — нативное событие.
:::

:::prop[onError]{type="(error: unknown) => void"}
Вызывается, когда `getSuggestions` выбросил исключение или его промис отклонён.
:::

:::prop[minChars]{type="number" default="1"}
Минимальная длина текста (без пробелов по краям), с которой вызывается `getSuggestions`.
:::

:::prop[cacheResults]{type="boolean" default="false"}
Запоминать подсказки для каждого введённого значения, пока поле смонтировано.
:::

:::prop[showControls]{type="boolean" default="true"}
Показывать ли спиннер, пока подсказки загружаются.
:::

:::prop[errorIcon]{type="ReactElement" default="<CircleAlert />"}
Иконка, которая показывается при ошибке загрузки. См. вкладку [Иконки](/ru/components/controls/autocompleteInput/icons).
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на всё поле целиком.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ссылка на сам `<input>`.
:::

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — поле, на котором построен `AutocompleteInput`: острова, размеры, состояния
- [Search](/ru/components/controls/search) — строка поиска на основе `AutocompleteInput`
- [Dropdown](/ru/components/overlays/dropdown) — список подсказок — это выпадающее меню
- [Form](/ru/components/controls/form) — подписи, подсказки и сообщения об ошибках вокруг поля
