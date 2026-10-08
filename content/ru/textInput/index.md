# TextInput

Однострочное поле ввода. Прямо внутри него можно разместить иконки, кнопки, префиксы и индикаторы — они называются островами и стоят в одном ряду с текстом. Поле оформлено так же, как `Button`, поэтому они выглядят как части одного семейства.

## Базовый пример

```tsx
const [value, setValue] = useState('');

<TextInput value={value} onChange={setValue} placeholder="Enter your name" />
```

::playground{src=textInput/TextInputBasicDemo caption="Контролируемое поле"}

:::note
`onChange` первым аргументом получает строку, вторым — нативное событие: `(value: string, event: ChangeEvent) => void`.
:::

## Острова

Остров — маленький элемент внутри поля рядом с текстом: иконка, кнопка, счётчик. Положите его в `TextInput` как дочерний, и текст никогда не заедет под него. `placement="start"` (по умолчанию) ставит остров перед текстом, `placement="end"` — после. Несколько островов с одной стороны идут в том порядке, в каком вы их написали.

| Компонент | Назначение |
| --- | --- |
| `TextInput.IconIsland` | Неинтерактивная иконка |
| `TextInput.ActionIsland` | Кнопка внутри поля |
| `TextInput.TextIsland` | Статический префикс или суффикс |
| `TextInput.LoadingIsland` | Спиннер для асинхронных операций |
| `TextInput.CharCounterIsland` | Счётчик символов |
| `TextInput.CustomIsland` | Произвольное содержимое |

### Иконки

`TextInput.IconIsland` добавляет иконку, которая подсказывает назначение поля ещё до начала ввода. Размер иконки следует за `size` поля.

```tsx
<TextInput value={email} onChange={setEmail} placeholder="Email">
  <TextInput.IconIsland icon={<Mail />} />
</TextInput>
```

::playground{src=textInput/TextInputIconDemo caption="Иконка задаёт ожидания ещё до ввода"}

### Кнопки действий

`TextInput.ActionIsland` — это `Button`, зафиксированный в виде «чипа» внутри поля, поэтому он принимает весь API `Button`, кроме `variant` (`state`, `badge`, `tooltip`, `selected`, …). С `showLabel={false}` он становится круглой иконочной кнопкой, а `label` превращается в её `aria-label` и подсказку. `size` по умолчанию на ступень меньше поля, а отключённое поле отключает и свои кнопки.

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

::playground{src=textInput/TextInputClearDemo caption="Кнопка очистки появляется только когда есть что очищать"}

### Префиксы и суффиксы

`TextInput.TextIsland` добавляет статический текст: единицу измерения, символ валюты, протокол URL — всё, что входит в формат, но не в значение.

```tsx
<TextInput value={domain} onChange={setDomain} placeholder="mysite">
  <TextInput.TextIsland label="https://" />
  <TextInput.TextIsland label=".com" placement="end" />
</TextInput>
```

::playground{src=textInput/TextInputTextIslandDemo caption="Аффикс уточняет формат, не занимая места снаружи поля"}

### Индикатор загрузки

`TextInput.LoadingIsland` показывает спиннер, пока выполняется асинхронная операция — поиск, проверка доступности. У него есть `role="status"` и локализованный `aria-label`.

```tsx
<TextInput value={query} onChange={setQuery}>
  <TextInput.IconIsland icon={<Search />} />
  {isLoading && <TextInput.LoadingIsland placement="end" />}
</TextInput>
```

::playground{src=textInput/TextInputLoadingDemo caption="Начните вводить текст — на секунду появится спиннер"}

### Счётчик символов

`TextInput.CharCounterIsland` показывает текущую длину. Если у поля задан `maxLength`, формат — `текущая/максимум`, а при превышении лимита счётчик краснеет.

```tsx
<TextInput value={bio} onChange={setBio} maxLength={160}>
  <TextInput.CharCounterIsland placement="end" />
</TextInput>
```

::playground{src=textInput/TextInputCharCounterDemo caption="Счётчик показывает, сколько лимита использовано"}

### Произвольное содержимое

`TextInput.CustomIsland` вмещает всё, что не подходит под другие острова. В отличие от пассивных, он сохраняет pointer-события, поэтому содержимое остаётся интерактивным.

```tsx
<TextInput value={value} onChange={setValue}>
  <TextInput.CustomIsland placement="end">
    <Text kbd>⌘K</Text>
  </TextInput.CustomIsland>
</TextInput>
```

## Состояния

`invalid` подсвечивает поле как ошибочное и сообщает об этом скринридерам через `aria-invalid`. `readOnly` делает значение похожим на обычный текст, но пользователь по-прежнему может поставить в него фокус и скопировать; если нужен привычный вид, передайте `readonlyStyles={false}`. `disabled` делает поле серым и отключает кнопки внутри него.

```tsx
<TextInput value="Invalid" onChange={() => {}} invalid />
<TextInput value="Read only" onChange={() => {}} readOnly />
<TextInput value="Disabled" onChange={() => {}} disabled />
```

::playground{src=textInput/TextInputStatesDemo caption="Обычное, с ошибкой, только для чтения и отключённое"}

## Прозрачный вариант

`variant="transparent"` убирает рамку и фон, так что в покое поле выглядит как обычный текст. При наведении и фокусе появляется лёгкая подсветка, как у `text`-кнопки. Подходит там, где поле — часть макета, например для редактирования заголовка карточки на месте.

```tsx
<TextInput value={title} onChange={setTitle} variant="transparent" size="xl" />
```

::playground{src=textInput/TextInputTransparentDemo caption="В покое выглядит как обычный текст, наведение и фокус проявляют поле"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Один проп меняет сразу высоту, отступы, шрифт и иконки.

```tsx
<TextInput size="mini" />
<TextInput size="xl" />
```

::playground{src=textInput/TextInputSizesDemo caption="Пять размеров"}

На сенсорных устройствах размер `m` поднимает шрифт до 16px, чтобы iOS Safari не увеличивал страницу при фокусе.

## Внутри формы

Внутри `Form.Field` поле читает `name`, `disabled`, `invalid` и `size` из контекста формы — дублировать их не нужно. Значение, переданное прямо в `TextInput`, приоритетнее контекстного.

```tsx
<Form errorMessages={{ email: 'This email is already registered' }}>
  <Form.Field name="email" label="Email">
    <TextInput value={email} onChange={setEmail}>
      <TextInput.IconIsland icon={<Mail />} />
    </TextInput>
  </Form.Field>
</Form>
```

::playground{src=textInput/TextInputFormDemo caption="Сообщение об ошибке из формы переводит поле в состояние invalid"}

## Свой элемент поля

С `asChild` полем ввода становится первый дочерний элемент, не являющийся островом. Рамка, острова и работа со значением остаются теми же, так что их можно использовать с `<textarea>` или компонентом из библиотеки масок ввода.

```tsx
<TextInput value={value} onChange={setValue} asChild>
  <textarea rows={3} />
  <TextInput.TextIsland label="note:" />
</TextInput>
```

## Ref и стили

`ref`, `className` и `style` применяются ко всему полю вместе с рамкой. Чтобы добраться до самого `<input>`, используйте `inputRef`, `inputClassName` и `inputStyle`.

```tsx
const inputRef = useRef<HTMLInputElement>(null);

<TextInput
  value={value}
  onChange={setValue}
  inputRef={inputRef}
  style={{ maxWidth: 360 }}
/>
```

## Свойства

:::prop[value]{type="string"}
Контролируемое значение.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Вызывается при каждом изменении. Первый аргумент — строка, второй — нативное событие.
:::

:::prop[variant]{type="'default' | 'transparent'" default="'default'"}
`default` — матовый фон с тонкой обводкой. `transparent` — в покое ни фона, ни рамки.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Если не задан, берётся из контекста формы.
:::

:::prop[invalid]{type="boolean"}
Состояние ошибки: тон опасности и `aria-invalid`. Если не задан, берётся из контекста формы.
:::

:::prop[disabled]{type="boolean"}
Отключает поле и его кнопки-острова. Если не задан, берётся из контекста формы.
:::

:::prop[name]{type="string"}
Атрибут `name` поля. Если не задан, берётся из контекста формы.
:::

:::prop[readOnly]{type="boolean"}
Запрещает редактирование; поле остаётся фокусируемым.
:::

:::prop[readonlyStyles]{type="boolean" default="true"}
Делать ли `readOnly`-поле похожим на обычный текст, без фона и рамки.
:::

:::prop[asChild]{type="boolean" default="false"}
Использует первый дочерний элемент, не являющийся островом, вместо `<input>`.
:::

:::prop[className]{type="string"}
Класс всего поля.
:::

:::prop[style]{type="CSSProperties"}
Стили всего поля. Используйте для задания ширины.
:::

:::prop[inputClassName]{type="string"}
Класс самого `<input>` или элемента из `asChild`.
:::

:::prop[inputStyle]{type="CSSProperties"}
Стили самого `<input>` или элемента из `asChild`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ref всего поля.
:::

:::prop[inputRef]{type="Ref<HTMLInputElement>"}
Ref самого `<input>` или элемента из `asChild`.
:::

Все остальные атрибуты `<input>` (`placeholder`, `maxLength`, `type`, `autoComplete`, …) передаются полю ввода.

### Острова

Каждый остров принимает `placement`, атрибуты своего корневого элемента и `ref`.

:::prop[placement]{type="'start' | 'end'" default="'start'"}
Сторона поля, на которой стоит остров. Общий для всех островов.
:::

:::prop[icon*]{type="ReactElement"}
`IconIsland`: иконка.
:::

:::prop[label*]{type="string"}
`TextIsland`: текст. `ActionIsland`: подпись кнопки, при `showLabel={false}` — ещё и её `aria-label` и подсказка.
:::

:::prop[showLabel]{type="boolean" default="true"}
`ActionIsland`: показывать ли подпись рядом с иконкой.
:::

`ActionIsland` принимает и все пропы `Button`, кроме `variant`: `state`, `badge`, `tooltip`, `selected`, `danger`, `size` и другие.

## Related topics

- [Form](/ru/components/controls/form) — поля, подписи и сообщения об ошибках, которые `TextInput` читает из контекста
- [Button](/ru/components/controls/button) — компонент, на котором построен `TextInput.ActionIsland`
- [Box](/ru/components/layout/box) — строительный блок, из которого сделан внешний вид поля
