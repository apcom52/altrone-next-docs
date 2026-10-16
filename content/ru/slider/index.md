# Slider

Ползунок выбирает число из диапазона перетаскиванием или клавишами со стрелками. Подходит для значений, где важна не точная цифра, а положение на шкале: громкость, яркость, прозрачность, цена в вилке.

## Основное использование

```tsx
const [volume, setVolume] = useState(40);

<Slider aria-label="Volume" value={volume} onChange={setVolume} />
```

::playground{src=slider/SliderBasicDemo caption="Управляемый ползунок"}

`Slider` не хранит состояния: передавайте `value` и `onChange` вместе. `onChange` получает следующее значение первым аргументом и событие вторым — сеттер из `useState` можно передать напрямую. Ползунок занимает всю ширину родителя, поэтому ограничивайте её контейнером.

:::note
`Slider` не рисует подписи. Дайте ему имя через `aria-label` (он попадает на корневой элемент с `role="slider"`) и покажите видимую подпись рядом — например, с помощью `Text` или `Form.Field`.
:::

## Диапазон и шаг

`min` и `max` задают границы (по умолчанию `0` и `100`), `step` — шаг (по умолчанию `1`). Значение всегда округляется до ближайшего шага и ограничивается границами, в том числе при дробном шаге.

```tsx
<Slider value={opacity} onChange={setOpacity} min={0} max={1} step={0.05} />
```

::playground{src=slider/SliderRangeStepDemo caption="Дробный шаг и узкий целочисленный диапазон"}

## Варианты

`variant="default"` — тонкая дорожка с круглым ползунком, привычная форма нативного ползунка. Заполненная часть окрашена в акцентный цвет.

`variant="fill"` — «плита»: весь контрол служит дорожкой, а уровень заливки играет роль ручки. Значение и иконка показываются внутри плиты. Выразительный, но тяжёлый для плотных форм вариант.

`icon` ставит иконку в начало дорожки у `default` и внутрь плиты у `fill`.

```tsx
<Slider value={brightness} onChange={setBrightness} variant="fill" icon={<Sun />} />
```

::playground{src=slider/SliderVariantsDemo caption="Тонкая дорожка с иконкой и плита"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он меняет толщину дорожки, диаметр ручки и высоту плиты у `fill`. Область нажатия не бывает ниже 24px даже на `mini`.

```tsx
<Slider size="s" value={value} onChange={setValue} />
```

::playground{src=slider/SliderSizesDemo caption="Пять размеров"}

## Текущее значение

`showCurrentValue` управляет подсказкой со значением:

- `'active'` (по умолчанию) — пока ползунок наведён, в фокусе с клавиатуры или перетаскивается;
- `'always'` — всегда;
- `false` — никогда.

`renderLabel` форматирует значение: единицы измерения, валюта, проценты. Результат показывается в подсказке и попадает в `aria-valuetext`, поэтому скринридер читает «250 долларов», а не «250».

```tsx
<Slider
  value={price}
  onChange={setPrice}
  max={1000}
  showCurrentValue="always"
  renderLabel={(value) => `$${value}`}
/>
```

::playground{src=slider/SliderValueLabelDemo caption="Форматированное значение и ползунок без подсказки"}

Подсказка ручки у `default` выводится через портал, поэтому её не обрежет `overflow: hidden` у родителя — например, в теле `Drawer`, в `Popover` или в ячейке таблицы. У `fill` подсказка живёт внутри плиты.

## Ориентация

`orientation="vertical"` делает ползунок вертикальным: минимум внизу, максимум вверху. Высоту задаёт родитель, поэтому у контейнера должна быть явная высота.

```tsx
<Flex style={{ height: 180 }}>
  <Slider orientation="vertical" value={level} onChange={setLevel} />
</Flex>
```

::playground{src=slider/SliderOrientationDemo caption="Вертикальные ползунки обоих вариантов"}

## Фиксация значения

`onChange` вызывается на каждый сдвиг при перетаскивании. Если на изменение нужна дорогая реакция — запрос на сервер, пересчёт, сохранение, — повесьте её на `onChangeEnd`: он вызывается один раз, когда пользователь отпустил ручку или нажал клавишу.

```tsx
<Slider value={value} onChange={setValue} onChangeEnd={save} />
```

::playground{src=slider/SliderCommitDemo caption="Сохранённое значение обновляется только по окончании перетаскивания"}

## Недоступное состояние и только чтение

`disabled` блокирует ползунок: он не реагирует на указатель и клавиатуру, не получает фокус и становится серым.

`readOnly` заменяет ползунок статичной подписью со значением (результат `renderLabel`, если он задан). Подходит для показа готового значения в тех же формах, где его можно редактировать.

```tsx
<Slider value={40} onChange={noop} disabled />
<Slider value={75} onChange={noop} readOnly renderLabel={(value) => `${value}% complete`} />
```

::playground{src=slider/SliderStatesDemo caption="Недоступный и только для чтения"}

## Внутри формы

Внутри `Form.Field` ползунок берёт `name`, `disabled` и `size` из формы. Проп, переданный самому `Slider`, приоритетнее. Значение попадает в нативную отправку формы через скрытый `<input>` с этим `name`.

```tsx
<Form size="l">
  <Form.Field name="volume">
    <Slider value={volume} onChange={setVolume} />
  </Form.Field>
</Form>
```

::playground{src=slider/SliderFormDemo caption="Размер берётся из формы; второе поле заблокировано"}

## Клавиатура

Ползунок получает фокус клавишей `Tab`; кольцо фокуса видно только при навигации с клавиатуры.

| Клавиша | Действие |
| ------- | -------- |
| `←` / `↓` | Уменьшить на `step` |
| `→` / `↑` | Увеличить на `step` |
| `Home` | Перейти к `min` |
| `End` | Перейти к `max` |

Каждое нажатие вызывает и `onChange`, и `onChangeEnd`.

## Ref и стилизация

`ref` указывает на корневой `<div role="slider">`. `className`, `style` и остальные атрибуты `<div>` применяются к нему же. Заполненную часть дорожки можно оформить отдельно через `activeClassName` и `activeStyle`. Чтобы изменить внешний вид целиком, переопределите [CSS-переменные](/ru/components/controls/slider/css-vars).

## Свойства

:::prop[value*]{type="number"}
Текущее значение. Ползунок управляемый и не хранит состояния.
:::

:::prop[onChange*]{type="(value: number, event: PointerEvent | KeyboardEvent) => void"}
Вызывается на каждое изменение при перетаскивании и нажатии клавиш. Первый аргумент — следующее значение, второй — нативное событие.
:::

:::prop[onChangeEnd]{type="(value: number, event: PointerEvent | KeyboardEvent) => void"}
Вызывается один раз, когда пользователь отпустил ручку или нажал клавишу. Для дорогих побочных эффектов.
:::

:::prop[min]{type="number" default="0"}
Минимальное значение.
:::

:::prop[max]{type="number" default="100"}
Максимальное значение.
:::

:::prop[step]{type="number" default="1"}
Шаг значения.
:::

:::prop[variant]{type="'default' | 'fill'" default="'default'"}
`default` — тонкая дорожка с круглой ручкой, `fill` — плита, где уровень заливки играет роль ручки.
:::

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление ползунка. У вертикального минимум внизу.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Толщина дорожки, размер ручки и высота плиты у `fill`. Если не задан, читается из контекста формы.
:::

:::prop[showCurrentValue]{type="'active' | 'always' | false" default="'active'"}
Когда показывать подсказку со значением: пока ползунок активен, всегда или никогда.
:::

:::prop[renderLabel]{type="(value: number) => ReactNode"}
Форматирует значение для подсказки, режима `readOnly` и `aria-valuetext`.
:::

:::prop[icon]{type="ReactElement"}
Иконка в начале дорожки (`default`) или внутри плиты (`fill`).
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует ползунок. Если не задан, читается из контекста формы.
:::

:::prop[readOnly]{type="boolean" default="false"}
Показывает статичную подпись со значением вместо ползунка.
:::

:::prop[name]{type="string"}
Атрибут `name` скрытого `<input>`. Если не задан, читается из контекста формы.
:::

:::prop[activeClassName]{type="string"}
Класс для заполненной части дорожки.
:::

:::prop[activeStyle]{type="CSSProperties"}
Инлайновые стили заполненной части дорожки.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref корневого элемента.
:::

Все остальные атрибуты `<div>`, включая `className`, `style` и `aria-*`, передаются корневому элементу.

## Похожие темы

- [NumberInput](/ru/components/controls/numberInput) — когда нужно ввести точное число, а не выбрать положение на шкале
- [Form](/ru/components/controls/form) — `Form.Field` передаёт ползунку `name`, `disabled` и `size`
- [Клавиатура](/ru/keyboard) — общие правила клавиатурной навигации
