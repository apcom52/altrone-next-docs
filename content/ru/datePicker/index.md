# Date Picker

`DatePicker` — поле выбора даты. Выглядит как обычное поле ввода с иконкой календаря, а по клику открывает попап с календарём. Есть четыре варианта: день, месяц, год и диапазон дат.

`DatePicker` работает с объектами `dayjs`. Чтобы создавать их тем же настроенным экземпляром, что и библиотека (с локалями и плагинами), импортируйте `dayjsInstance` из `altrone-ui`.

## Основное использование

```tsx
import { dayjsInstance as dayjs } from "altrone-ui";

const [date, setDate] = useState<Dayjs | undefined>(dayjs("2026-10-09"));

<DatePicker value={date} onChange={setDate} />
```

::playground{src=datePicker/DatePickerBasicDemo caption="Управляемое поле выбора даты"}

`value` — это `Dayjs`. `onChange` вызывается при выборе даты, а при очистке поля получает `undefined`. Текст в поле следует языку приложения (`Application.language`).

:::note
`onChange` получает значение первым аргументом и событие вторым: `(value?: Dayjs, event?: MouseEvent<HTMLButtonElement>) => void`. Событие необязательно — значение может измениться и без клика, например при очистке поля.
:::

## День, месяц, год и диапазон

Компонент — семейство из четырёх пикеров с общими пропами. Точность выбора определяется самим компонентом:

| Компонент | Что выбирает | Значение |
| --------- | ------------ | -------- |
| `DatePicker` | День | `Dayjs` |
| `DatePicker.MonthPicker` | Месяц | `Dayjs` |
| `DatePicker.YearPicker` | Год | `Dayjs` |
| `DatePicker.RangePicker` | Диапазон дней | `(Dayjs \| undefined)[]` |

```tsx
<DatePicker.MonthPicker value={month} onChange={setMonth} />
<DatePicker.YearPicker value={year} onChange={setYear} />
<DatePicker.RangePicker value={range} onChange={setRange} />
```

::playground{src=datePicker/DatePickerVariantsDemo caption="Четыре варианта пикера"}

В `RangePicker` значение — массив из двух элементов `[начало, конец]`, и пока диапазон не завершён, любой из них может быть `undefined`. Заголовок попапа позволяет углубляться: клик по месяцу открывает сетку месяцев, клик по году — сетку лет.

## Допустимые даты

`minDate` и `maxDate` ограничивают выбираемые даты. Всё за пределами интервала в календаре заблокировано, а кнопки быстрого выбора «Сегодня», «Этот месяц» и «Этот год» блокируются, если выходят за него.

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  minDate={dayjs("2026-10-05")}
  maxDate={dayjs("2026-10-20")}
/>
```

::playground{src=datePicker/DatePickerLimitsDemo caption="Можно выбрать только 5–20 октября"}

Если `minDate` позже `maxDate`, значения меняются местами, а в консоль выводится предупреждение.

## Формат отображения

По умолчанию дата показывается в формате языка приложения. `format` принимает любую строку формата `dayjs` и меняет только текст в поле.

```tsx
<DatePicker value={date} onChange={setDate} format="DD/MM/YYYY" />
```

::playground{src=datePicker/DatePickerFormatDemo caption="Свой формат"}

## Очистка

`clearable` добавляет в футер попапа кнопку «Очистить». Она вызывает `onChange(undefined)` и закрывает попап. Через `placeholder` подскажите, что означает пустое поле.

```tsx
<DatePicker value={date} onChange={setDate} clearable placeholder="No date" />
```

::playground{src=datePicker/DatePickerClearableDemo caption="Кнопка «Очистить» в попапе"}

## Закрытие попапа

Попап закрывается сразу после выбора даты. `autoClose={false}` оставляет его открытым — пользователь может полистать календарь и передумать; закрыть можно кликом снаружи или клавишей `Escape`.

```tsx
<DatePicker value={date} onChange={setDate} autoClose={false} />
```

::playground{src=datePicker/DatePickerAutoCloseDemo caption="Попап остаётся открытым после выбора"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Пикер построен на `TextInput`, поэтому размер меняет высоту и шрифт поля.

::playground{src=datePicker/DatePickerSizesDemo caption="Пять размеров"}

## Только чтение, блокировка и ошибка

`readOnly` оставляет значение видимым, но попап не открывается; поле остаётся доступным для фокуса, в том числе для скринридеров. `disabled` полностью блокирует поле. `invalid` подсвечивает его как ошибочное.

```tsx
<DatePicker value={date} onChange={() => {}} readOnly />
<DatePicker value={date} onChange={() => {}} disabled />
<DatePicker value={undefined} onChange={() => {}} invalid />
```

::playground{src=datePicker/DatePickerStatesDemo caption="Поля только для чтения, заблокированное и с ошибкой"}

## Свой триггер

С `asChild` попап открывает ваш собственный элемент вместо текстового поля. Это должен быть один дочерний элемент, принимающий `ref` и обработчики клика.

```tsx
<DatePicker value={date} onChange={setDate} asChild>
  <Button label={date ? date.format("D MMM YYYY") : "Pick a date"} />
</DatePicker>
```

::playground{src=datePicker/DatePickerAsChildDemo caption="Кнопка вместо поля"}

Компонент внутри триггера может прочитать текущее состояние пикера через `useDatePickerTrigger()`, а не получать его через пропы. Хук возвращает `value`, `displayValue` (текст, который показало бы поле), `expanded` (открыт ли попап), `disabled` и `clear`. Вне `DatePicker` он бросает ошибку.

```tsx
function Trigger() {
  const { displayValue, expanded } = useDatePickerTrigger();

  return (
    <Button
      label={displayValue || "Pick a date"}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
}

<DatePicker value={date} onChange={setDate} asChild>
  <Trigger />
</DatePicker>
```

::playground{src=datePicker/DatePickerTriggerStateDemo caption="Стрелка следует за состоянием попапа"}

## Внутри формы

Внутри `Form.Field` поле берёт `disabled` и `size` из формы. Проп, переданный самому `DatePicker`, главнее.

```tsx
<Form size="l">
  <Form.Field name="start">
    <DatePicker value={start} onChange={setStart} />
  </Form.Field>
  <Form.Field name="end" disabled>
    <DatePicker value={end} onChange={setEnd} />
  </Form.Field>
</Form>
```

::playground{src=datePicker/DatePickerFormDemo caption="Размер берётся из формы; второе поле заблокировано"}

## Ref и стилизация

`ref` указывает на обёртку `<div>` поля. Остальные пропы [TextInput](/ru/components/controls/textInput) (`placeholder`, `invalid`, `size`, `disabled`, `className`, `style`) передаются полю, кроме `value` и `onChange`, которые пикер обрабатывает сам. В попапе показана сетка дней из [Calendar](/ru/components/content/calendar), поэтому дни недели, первый день недели и подсветка диапазона совпадают с ним.

## Свойства

:::prop[value]{type="Dayjs | (Dayjs | undefined)[]"}
Выбранная дата. `Dayjs` для пикеров дня, месяца и года, пара `[начало, конец]` для `RangePicker`.
:::

:::prop[onChange]{type="(value?: Dayjs, event?: MouseEvent<HTMLButtonElement>) => void"}
Вызывается при выборе даты или очистке поля; после очистки значение — `undefined`. Для `RangePicker` значение — массив из двух дат.
:::

:::prop[minDate]{type="Dayjs"}
Самая ранняя доступная дата. Более ранние даты заблокированы.
:::

:::prop[maxDate]{type="Dayjs"}
Самая поздняя доступная дата. Более поздние даты заблокированы.
:::

:::prop[format]{type="string"}
Строка формата `dayjs` для текста в поле. По умолчанию — формат языка приложения.
:::

:::prop[clearable]{type="boolean" default="false"}
Добавляет в футер попапа кнопку «Очистить».
:::

:::prop[autoClose]{type="boolean" default="true"}
Закрывает попап сразу после выбора даты.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер поля. Если не задан, берётся из контекста формы.
:::

:::prop[placeholder]{type="string"}
Подсказка, пока дата не выбрана.
:::

:::prop[readOnly]{type="boolean" default="false"}
Показывает значение, но не открывает попап.
:::

:::prop[disabled]{type="boolean"}
Блокирует поле. Если не задан, берётся из контекста формы.
:::

:::prop[invalid]{type="boolean"}
Подсвечивает поле как ошибочное.
:::

:::prop[asChild]{type="boolean" default="false"}
Использует единственный дочерний элемент как триггер вместо текстового поля.
:::

:::prop[children]{type="ReactElement"}
Триггер для `asChild`.
:::

:::prop[triggerIcon]{type="ReactElement"}
Иконка календаря в поле. См. вкладку «Иконки».
:::

:::prop[prevIcon]{type="ReactElement"}
Иконка «назад» в заголовке попапа. См. вкладку «Иконки».
:::

:::prop[nextIcon]{type="ReactElement"}
Иконка «вперёд» в заголовке попапа. См. вкладку «Иконки».
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref обёртки `<div>`.
:::

Остальные пропы [TextInput](/ru/components/controls/textInput), кроме `value`, `onChange`, `ref` и `children`, передаются полю.

## Похожие темы

- [TextInput](/ru/components/controls/textInput) — на нём построено поле, он определяет его внешний вид
- [Calendar](/ru/components/content/calendar) — сетка дней в попапе взята из него
- [Popover](/ru/components/overlays/popover) — попап открывается через него
- [Form](/ru/components/controls/form) — `Form.Field` передаёт полю `disabled` и `size`
