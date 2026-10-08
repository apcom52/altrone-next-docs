# TextArea

Многострочное поле ввода для длинных текстов: комментариев, описаний, сообщений. Оно построено на `TextInput`, поэтому выглядит так же, принимает те же острова и читает те же настройки из формы.

## Базовый пример

```tsx
const [value, setValue] = useState('');

<TextArea value={value} onChange={setValue} placeholder="Tell us about yourself" />
```

::playground{src=textArea/TextAreaBasicDemo caption="Контролируемое поле"}

:::note
`onChange` первым аргументом получает строку, вторым — нативное событие: `(value: string, event: ChangeEvent) => void`.
:::

Высота поля — не меньше 72px, а пользователь может растянуть его по вертикали, потянув за угол. Передайте `rows`, чтобы поле сразу было выше.

## Острова

Острова работают так же, как в `TextInput` — см. [список островов](/ru/components/controls/textInput#острова). Отличается раскладка: в `TextArea` они не делят строку с текстом, а образуют нижнюю панель под ним — `placement="start"` слева, `placement="end"` справа. Так каждая строка текста остаётся во всю ширину.

```tsx
<TextArea value={value} onChange={setValue} maxLength={280} placeholder="Write a comment">
  <TextInput.CustomIsland placement="start">
    <Text kbd>⌘↵</Text>
  </TextInput.CustomIsland>
  <TextInput.CharCounterIsland placement="end" />
</TextArea>
```

::playground{src=textArea/TextAreaIslandsDemo caption="Подсказка о сочетании клавиш слева, счётчик справа"}

`TextInput.CharCounterIsland` берёт `maxLength` из поля, показывает `текущее/максимум` и краснеет, когда лимит превышен.

## Состояния

`invalid` подсвечивает поле как ошибочное и выставляет `aria-invalid`. `readOnly` делает значение похожим на обычный текст, но пользователь по-прежнему может сфокусироваться на поле и скопировать его. `disabled` затемняет поле и отключает острова внутри.

```tsx
<TextArea value="Invalid" onChange={() => {}} invalid />
<TextArea value="Read only" onChange={() => {}} readOnly />
<TextArea value="Disabled" onChange={() => {}} disabled />
```

::playground{src=textArea/TextAreaStatesDemo caption="Обычное, с ошибкой, только для чтения и отключённое"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он одновременно меняет шрифт, отступы и иконки островов.

```tsx
<TextArea size="s" />
<TextArea size="xl" />
```

::playground{src=textArea/TextAreaSizesDemo caption="Пять размеров"}

## Внутри формы

Внутри `Form.Field` поле берёт `name`, `disabled`, `invalid` и `size` из формы. Если передать любое из них в `TextArea` напрямую, оно имеет приоритет.

```tsx
<Form errorMessages={{ description: 'Describe the project in a few words' }}>
  <Form.Field name="description" label="Description">
    <TextArea value={description} onChange={setDescription} />
  </Form.Field>
</Form>
```

::playground{src=textArea/TextAreaFormDemo caption="Сообщение об ошибке из формы делает поле невалидным"}

## Ref и стили

Поле всегда занимает всю ширину родителя, поэтому ограничивайте ширину обёрткой. `ref`, `className` и `style` применяются к самому `<textarea>`, а не к рамке вокруг него.

```tsx
const ref = useRef<HTMLTextAreaElement>(null);

<div style={{ maxWidth: 400 }}>
  <TextArea ref={ref} value={value} onChange={setValue} />
</div>
```

## Пропсы

:::prop[value]{type="string"}
Контролируемое значение.
:::

:::prop[onChange]{type="(value: string, event: ChangeEvent) => void"}
Вызывается при каждом изменении. Первый аргумент — строка, второй — нативное событие.
:::

:::prop[variant]{type="'default' | 'transparent'" default="'default'"}
`default` — матовый фон с тонкой обводкой. `transparent` в покое без фона и границы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Если не задан, берётся из контекста формы.
:::

:::prop[invalid]{type="boolean"}
Состояние ошибки: опасный тон и `aria-invalid`. Если не задан, берётся из контекста формы.
:::

:::prop[disabled]{type="boolean"}
Отключает поле и его острова-действия. Если не задан, берётся из контекста формы.
:::

:::prop[name]{type="string"}
`name` у `<textarea>`. Если не задан, берётся из контекста формы.
:::

:::prop[readOnly]{type="boolean"}
Запрещает редактирование; поле остаётся фокусируемым.
:::

:::prop[readonlyStyles]{type="boolean" default="true"}
Выглядит ли поле `readOnly` как обычный текст, без фона и границы.
:::

:::prop[className]{type="string"}
Класс `<textarea>`.
:::

:::prop[style]{type="CSSProperties"}
Стили `<textarea>`.
:::

:::prop[ref]{type="Ref<HTMLTextAreaElement>"}
Ref на `<textarea>`.
:::

Все остальные атрибуты `<textarea>` (`placeholder`, `rows`, `maxLength`, `autoComplete`, …) передаются ему. Атрибут `type` не принимается. Острова передаются как дочерние элементы.

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — однострочное поле, на котором построен `TextArea`, с полным списком островов
- [Form](/ru/components/controls/form) — поля, подписи и сообщения об ошибках, которые `TextArea` читает из контекста
- [Button](/ru/components/controls/button) — компонент, на котором построены острова-действия
