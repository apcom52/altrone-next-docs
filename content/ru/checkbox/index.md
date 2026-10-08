# Checkbox

Чекбокс отвечает на вопрос «да или нет»: «применить ли это к объекту?». В отличие от радио-кнопок, чекбоксы независимы друг от друга — можно выбрать любое их количество одновременно.

## Основное использование

```tsx
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onChange={setChecked}>
  I accept the terms
</Checkbox>
```

::playground{src=checkbox/CheckboxBasicDemo caption="Управляемый чекбокс с подписью"}

Компонент не хранит собственного состояния: передавайте `checked` и `onChange` вместе. Текст внутри становится подписью, и клик по нему переключает чекбокс.

:::note
`onChange` получает **следующее** значение первым аргументом и нативное событие вторым: `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void`. Не нужно читать `event.target.checked` — сеттер из `useState` можно передать напрямую.
:::

## Без подписи

Если рядом с чекбоксом нет текста — например, выбор строки в таблице, — задайте ему имя через `aria-label` или `aria-labelledby`. Они попадают на сам `<input>`, а не на обёртку.

```tsx
<Checkbox aria-label="Select row" checked={checked} onChange={setChecked} />
```

::playground{src=checkbox/CheckboxNoLabelDemo caption="Только бокс, имя для скринридеров задано через aria-label"}

## Частичный выбор

`indeterminate` показывает чёрточку вместо галочки. Используйте его на чекбоксе «выбрать всё», когда выбрана только часть элементов группы.

```tsx
const allChecked = selected.length === OPTIONS.length;
const someChecked = selected.length > 0 && !allChecked;

<Checkbox checked={allChecked} indeterminate={someChecked} onChange={toggleAll}>
  All permissions
</Checkbox>
```

::playground{src=checkbox/CheckboxIndeterminateDemo caption="Родитель показывает чёрточку, пока выбрана только часть дочерних"}

`indeterminate` не меняет `checked` — логику «выбрана часть» нужно написать самим. Состояние также проставляется на нативном `<input>`, поэтому скринридеры объявляют чекбокс как `mixed`.

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он масштабирует бокс, галочку и подпись вместе. Кликабельная строка не бывает ниже 24px даже на `mini`.

```tsx
<Checkbox size="s" checked={checked} onChange={setChecked}>Compact</Checkbox>
<Checkbox size="l" checked={checked} onChange={setChecked}>Large</Checkbox>
```

::playground{src=checkbox/CheckboxSizesDemo caption="Пять размеров"}

## Опасный выбор

`danger` окрашивает подпись в опасный цвет. Используйте его, когда выбор приводит к необратимому результату.

```tsx
<Checkbox checked={checked} onChange={setChecked} danger>
  Delete all data permanently
</Checkbox>
```

::playground{src=checkbox/CheckboxDangerDemo caption="Подпись в опасном цвете"}

## Недоступное состояние

`disabled` проставляется на нативный `<input>`: чекбокс не реагирует на клики и клавиатуру и выглядит нейтрально, выбран он или нет.

```tsx
<Checkbox disabled onChange={() => {}}>Unavailable, unchecked</Checkbox>
<Checkbox checked disabled onChange={() => {}}>Unavailable, checked</Checkbox>
```

::playground{src=checkbox/CheckboxDisabledDemo caption="Недоступный, без выбора и с выбором"}

## Внутри формы

Внутри `Form.Field` чекбокс берёт `name`, `disabled` и `size` из формы. Проп, переданный самому `Checkbox`, приоритетнее. `name` ещё и делает значение частью нативной отправки формы.

```tsx
<Form size="l">
  <Form.Field name="newsletter">
    <Checkbox checked={newsletter} onChange={setNewsletter}>
      Subscribe to the newsletter
    </Checkbox>
  </Form.Field>
  <Form.Field name="terms" disabled>
    <Checkbox checked={terms} onChange={setTerms}>Accept the terms</Checkbox>
  </Form.Field>
</Form>
```

::playground{src=checkbox/CheckboxFormDemo caption="Размер берётся из формы; второе поле заблокировано"}

## Клавиатура

Фокус попадает на настоящий `<input>`, поэтому до чекбокса можно дойти клавишей `Tab`. `Space` переключает его, `Enter` — нет, как и у нативного чекбокса. Кольцо фокуса появляется только при фокусе с клавиатуры.

## Ref и стилизация

`ref` указывает на корневой `<label>`. `className` и `style` тоже применяются к нему, а остальные атрибуты `<label>` передаются ему же. Чтобы изменить внешний вид чекбокса, переопределите его [CSS-переменные](/ru/components/controls/checkbox/css-vars).

## Свойства

:::prop[checked]{type="boolean" default="false"}
Управляемое состояние.
:::

:::prop[onChange*]{type="(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void"}
Вызывается, когда пользователь переключает чекбокс. Первый аргумент — следующее значение, второй — нативное событие.
:::

:::prop[indeterminate]{type="boolean" default="false"}
Показывает чёрточку вместо галочки и выставляет нативное свойство `indeterminate`. Не меняет `checked`.
:::

:::prop[danger]{type="boolean" default="false"}
Окрашивает подпись в опасный цвет.
:::

:::prop[disabled]{type="boolean"}
Блокирует чекбокс. Если не задан, читается из контекста формы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер бокса, галочки и подписи. Если не задан, читается из контекста формы.
:::

:::prop[name]{type="string"}
Атрибут `name` у `<input>`. Если не задан, читается из контекста формы.
:::

:::prop[children]{type="ReactNode"}
Подпись рядом с боксом. Принимает текст или любой React-узел.
:::

:::prop[aria-label]{type="string"}
Доступное имя, когда нет `children`. Применяется к `<input>`; `aria-labelledby` и `aria-describedby` работают так же.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref корневого `<label>`.
:::

Все остальные атрибуты `<label>`, включая `className` и `style`, передаются корневому элементу.

## Похожие темы

- [Switch](/ru/components/controls/switch) — тот же контракт для настроек, которые применяются мгновенно
- [Radio](/ru/components/controls/radio) — выбор ровно одного варианта из нескольких
- [Form](/ru/components/controls/form) — `Form.Field` передаёт чекбоксу `name`, `disabled` и `size`
