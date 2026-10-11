# Color Picker

`ColorPicker` — поле выбора цвета. Выглядит как обычное поле ввода с кружком-образцом, а по клику открывает попап: цвет можно подобрать на палитре с точностью до канала или выбрать из заранее заданного набора.

## Основное использование

```tsx
const [color, setColor] = useState<string | undefined>("#5b5bd6");

<ColorPicker value={color} onChange={setColor} />
```

::playground{src=colorPicker/ColorPickerBasicDemo caption="Управляемое поле выбора цвета"}

`value` — любой цвет в виде строки `#rrggbb` или `#rrggbbaa`, если нужна прозрачность. `onChange` всегда отдаёт значение в нижнем регистре, а при очистке — `undefined`. Изменения приходят сразу, пока пользователь двигает палитру, поэтому кнопка «Применить» только закрывает попап.

:::note
`onChange` получает значение первым аргументом и событие вторым: `(value: string | undefined, event?: SyntheticEvent) => void`. Событие необязательно — палитра не отдаёт нативных событий.
:::

## Палитра

В попапе есть поле для подбора цвета с ползунками оттенка и прозрачности, а под ним — hex-поле и три поля для каналов R, G и B. Значение в hex-поле применяется, когда оно теряет фокус; если там не шесть шестнадцатеричных цифр, цвет сбрасывается.

## Набор цветов

`colorPresets` добавляет вкладку с готовыми цветами. Каждый цвет описывается объектом `{ name, title, value }`, где `title` показывается в подсказке к образцу. Пока заданы и пресеты, и палитра, попап показывает вкладки «Сохранённые цвета» и «Палитра». `allowPalette={false}` убирает палитру, и пользователь выбирает только из набора. Без пресетов палитра показывается всегда, а `allowPalette` ни на что не влияет.

```tsx
const BRAND_COLORS: ColorPreset[] = [
  { name: "iris", title: "Iris", value: "#5b5bd6" },
  { name: "mint", title: "Mint", value: "#3dd68c" },
];

<ColorPicker value={color} onChange={setColor} colorPresets={BRAND_COLORS} />
<ColorPicker value={color} onChange={setColor} colorPresets={BRAND_COLORS} allowPalette={false} />
```

::playground{src=colorPicker/ColorPickerPresetsDemo caption="Набор вместе с палитрой и только набор"}

## Пустое значение

Пока `value` не задан, вместо образца показывается серый кружок, а в поле — подсказка. Текст подсказки меняется через `placeholder`.

::playground{src=colorPicker/ColorPickerEmptyDemo caption="Цвет ещё не выбран"}

## Очистка

`clearable` добавляет в попап кнопку «Очистить» рядом с «Применить». Она вызывает `onChange(undefined)` и закрывает попап.

```tsx
<ColorPicker value={color} onChange={setColor} clearable />
```

::playground{src=colorPicker/ColorPickerClearableDemo caption="Кнопка «Очистить» в попапе"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он меняет высоту поля, размер образца и размер полей внутри попапа.

::playground{src=colorPicker/ColorPickerSizesDemo caption="Пять размеров"}

## Только чтение и недоступное состояние

`readOnly` оставляет значение видимым, но попап не открывается, а стрелка пропадает. `disabled` блокирует поле целиком.

```tsx
<ColorPicker value="#5b5bd6" onChange={() => {}} readOnly />
<ColorPicker value="#5b5bd6" onChange={() => {}} disabled />
```

::playground{src=colorPicker/ColorPickerStatesDemo caption="Только чтение и недоступное поле"}

## Свой триггер

С `asChild` вместо поля ввода срабатывает ваш собственный элемент. Он должен быть единственным дочерним элементом и принимать `ref` и обработчики событий. На него передаются атрибуты `data-value` с текущим цветом и `data-opened`, пока попап открыт.

```tsx
<ColorPicker value={color} onChange={setColor} asChild>
  <button type="button" aria-label="Pick a color" style={{ background: color }} />
</ColorPicker>
```

::playground{src=colorPicker/ColorPickerAsChildDemo caption="Круглая кнопка вместо поля"}

## Внутри формы

Внутри `Form.Field` поле берёт `disabled` и `size` из формы. Проп, переданный самому `ColorPicker`, приоритетнее.

```tsx
<Form size="l">
  <Form.Field name="primary">
    <ColorPicker value={primary} onChange={setPrimary} />
  </Form.Field>
  <Form.Field name="secondary" disabled>
    <ColorPicker value={secondary} onChange={setSecondary} />
  </Form.Field>
</Form>
```

::playground{src=colorPicker/ColorPickerFormDemo caption="Размер берётся из формы; второе поле заблокировано"}

## Ref и стилизация

`ref` указывает на нативный `<input>` внутри поля, а при `asChild` — на ваш элемент. `className` и `style` применяются к корню поля, остальные атрибуты `<input>` передаются полю. Внешний вид самого поля определяют [CSS-переменные TextInput](/ru/components/controls/textInput/css-vars).

## Свойства

:::prop[value]{type="string"}
Текущий цвет в виде CSS-строки, обычно `#rrggbb` или `#rrggbbaa`. Без значения показывается пустое состояние.
:::

:::prop[onChange*]{type="(value: string | undefined, event?: SyntheticEvent) => void"}
Вызывается при каждом изменении цвета. Значение приведено к нижнему регистру, а после очистки равно `undefined`. Событие передаётся не всегда.
:::

:::prop[colorPresets]{type="ColorPreset[]" default="[]"}
Готовые цвета для вкладки «Сохранённые цвета». Каждый элемент — `{ name: string; title: string; value: string }`.
:::

:::prop[allowPalette]{type="boolean" default="true"}
Показывать ли палитру. Учитывается только вместе с `colorPresets`: без них палитра нужна всегда.
:::

:::prop[clearable]{type="boolean" default="false"}
Добавляет в попап кнопку «Очистить».
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля, образца и полей в попапе. Если не задан, читается из контекста формы.
:::

:::prop[placeholder]{type="string"}
Подсказка, пока цвет не выбран. По умолчанию — локализованная строка.
:::

:::prop[readOnly]{type="boolean" default="false"}
Показывает значение, но не открывает попап.
:::

:::prop[disabled]{type="boolean"}
Блокирует поле. Если не задан, читается из контекста формы.
:::

:::prop[transparent]{type="boolean"}
Рисует поле без фона и рамки.
:::

:::prop[asChild]{type="boolean" default="false"}
Использует единственный дочерний элемент как триггер вместо поля ввода.
:::

:::prop[children]{type="ReactElement"}
Триггер для `asChild`.
:::

:::prop[openIcon]{type="ReactElement"}
Иконка поля, пока попап закрыт. См. вкладку «Иконки».
:::

:::prop[closeIcon]{type="ReactElement"}
Иконка поля, пока попап открыт. См. вкладку «Иконки».
:::

:::prop[presetsTabIcon]{type="ReactElement"}
Иконка вкладки с набором цветов. См. вкладку «Иконки».
:::

:::prop[paletteTabIcon]{type="ReactElement"}
Иконка вкладки с палитрой. См. вкладку «Иконки».
:::

:::prop[ref]{type="Ref<HTMLInputElement>"}
Ref нативного `<input>`; при `asChild` — ref вашего элемента.
:::

Все остальные атрибуты `<input>`, кроме `onChange`, `size`, `value` и `children`, передаются полю.

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — на нём построено поле, он же определяет его внешний вид
- [Popover](/ru/components/overlays/popover) — попап открывается через него
- [Form](/ru/components/controls/form) — `Form.Field` передаёт полю `disabled` и `size`
