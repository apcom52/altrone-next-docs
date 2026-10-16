# Calendar

`Calendar` показывает один месяц на сетке из шести недель, поэтому его высота не меняется при переключении месяцев. Он умеет выбирать один день, несколько дней или диапазон, сам рисует шапку с навигацией и подписи дней недели и подхватывает язык приложения.

Компонент требует `dayjs` как peer-зависимость. Даты передаются и возвращаются как объекты `Dayjs`.

## Один день

`mode="single"` включает выбор одной даты. Значение — `Dayjs` или `undefined`.

```tsx
const [value, setValue] = useState<Dayjs>();

<Calendar mode="single" value={value} onSelect={(next) => setValue(next as Dayjs)} />
```

::playground{src=calendar/CalendarSingleDemo caption="Выбор одной даты"}

`onSelect` получает следующее значение первым аргументом и событие вторым. Форма значения зависит от `mode`, а тип у колбэка общий, поэтому его приходится сужать. Если состояние не нужно снаружи, задайте только `defaultValue` — `Calendar` сохранит выбор сам.

## Несколько дней

`mode="multiple"` превращает клик в переключатель: выбранный день снимается, невыбранный добавляется. Значение — массив `Dayjs[]`.

```tsx
const [value, setValue] = useState<Dayjs[]>([]);

<Calendar mode="multiple" value={value} onSelect={(next) => setValue(next as Dayjs[])} />
```

::playground{src=calendar/CalendarMultipleDemo caption="Произвольный набор дат"}

## Диапазон

`mode="range"` выбирает период. Значение — `{ from?: Dayjs; to?: Dayjs }`. Первый клик задаёт начало, второй — конец; границы упорядочиваются автоматически, так что `from` никогда не позже `to`. Клик по уже выбранному диапазону начинает новый. Пока выбрано только начало, наведение на день показывает предварительную полосу.

```tsx
const [range, setRange] = useState<{ from?: Dayjs; to?: Dayjs }>({});

<Calendar mode="range" value={range} onSelect={(next) => setRange(next as typeof range)} />
```

::playground{src=calendar/CalendarRangeDemo caption="Полоса диапазона с закруглёнными внешними углами"}

:::note
Для выбора даты в форме обычно нужен [DatePicker](/ru/components/controls/datePicker): он построен на `Calendar` и добавляет поле, попап и очистку. `Calendar` — строительный блок и самостоятельный виджет, когда сетка должна быть видна всегда.
:::

## Отображаемый месяц

Месяц можно вести снаружи через `month` и `onMonthChange` или оставить `Calendar` самому — тогда стартовый месяц задаёт `defaultMonth` (по умолчанию текущий). Используются только год и месяц, число дня игнорируется. `onMonthChange` вызывается, когда пользователь листает месяцы кнопками шапки.

```tsx
const [month, setMonth] = useState(dayjs());

<Calendar mode="single" month={month} onMonthChange={setMonth} />
```

::playground{src=calendar/CalendarMonthDemo caption="Месяц вынесен в состояние родителя"}

## Ограничение выбора

`minDate` и `maxDate` отключают дни за границами, `isDateDisabled` — отдельные дни по правилу. `disabled` блокирует все ячейки сразу. Отключённый день виден, но не реагирует на клик и наведение.

```tsx
<Calendar
  mode="single"
  minDate={dayjs()}
  isDateDisabled={(date) => date.day() === 0 || date.day() === 6}
/>
```

::playground{src=calendar/CalendarLimitsDemo caption="Доступны будни с 5 по 25 октября"}

## Язык и первый день недели

Подпись месяца и названия дней недели берутся из языка приложения (`Application.language`). `locale` в формате BCP-47 переопределяет его для одного календаря. Первый день недели по умолчанию вычисляется из локали (`firstDayOfWeek="auto"`); его можно зафиксировать: `'monday'` или `'sunday'`.

```tsx
<Calendar mode="single" locale="de-DE" />
<Calendar mode="single" firstDayOfWeek="monday" />
```

::playground{src=calendar/CalendarLocaleDemo caption="en-US, de-DE и en-US с принудительным понедельником"}

## Шапка и соседние дни

С `mode` календарь показывает шапку с навигацией и строку дней недели. Отключайте части по отдельности: `showHeader`, `showNavigation`, `showWeekdays`. `showOutsideDays={false}` убирает дни соседних месяцев — вместо них остаются пустые ячейки, а сетка сохраняет размер.

```tsx
<Calendar mode="single" showOutsideDays={false} />
<Calendar mode="single" showNavigation={false} showWeekdays={false} />
```

::playground{src=calendar/CalendarChromeDemo caption="Без дней соседних месяцев; без навигации и дней недели"}

Дни соседних месяцев приглушены и не выбираются.

## Своя ячейка дня

`DateComponent` заменяет ячейку дня. Он получает [`CalendarRenderDateProps`](#свойства-ячейки-дня): дату, флаги состояния и колбэки `onSelect`/`onHover`. Чтобы изменить только внешний вид, отрисуйте стандартную `Calendar.Date` и передайте ей `className` или `style`.

```tsx
const EventDay = (props: CalendarRenderDateProps) => (
  <Calendar.Date
    {...props}
    style={events.includes(props.currentDate.date()) ? { textDecoration: 'underline' } : undefined}
  />
);

<Calendar mode="single" DateComponent={EventDay} />
```

::playground{src=calendar/CalendarCustomDayDemo caption="Дни с событиями подчёркнуты"}

:::warning
Если вы пишете ячейку с нуля, сами вызывайте `onSelect(currentDate, event)` и `onHover(currentDate, event)`. Без них клики не попадут в выбор, а предпросмотр диапазона не сработает.
:::

## Низкоуровневый режим

Если не задавать `mode`, `Calendar` превращается в голую сетку: без шапки и дней недели, без собственного состояния выбора. Вы подаёте `month`, `selectedDates` и обрабатываете `onDateChange` сами. На этом режиме построены `DatePicker` и другие компоненты, которым нужна своя шапка.

```tsx
<Calendar
  month={month}
  selectedDates={selected ? [selected] : []}
  onDateChange={setSelected}
/>
```

::playground{src=calendar/CalendarLowLevelDemo caption="Сетка без шапки: выбор ведёт код вызывающей стороны"}

`cursorDate` в этом режиме подсвечивает полосу между `selectedDates[0]` и датой наведения в обе стороны — из него собирается предпросмотр диапазона. Календарь сам за мышью не следит: обновляйте `cursorDate` из `onHover` своей ячейки и сбрасывайте при уходе курсора.

## Свойства ячейки дня

Каждая ячейка, которую рисует `DateComponent`, получает такие пропы:

| Проп | Тип | Описание |
| ---- | --- | -------- |
| `currentDate` | `Dayjs` | Дата ячейки |
| `weekDay` | `number` | День недели: 0 — воскресенье … 6 — суббота |
| `fromAnotherMonth` | `boolean` | День-заполнитель из соседнего месяца |
| `today` | `boolean` | Сегодняшний день |
| `selected` | `boolean` | День выбран |
| `disabled` | `boolean` | День отключён |
| `inRange` | `boolean` | День внутри диапазона, включая предпросмотр при наведении |
| `rangeStart` / `rangeEnd` | `boolean` | Границы диапазона |
| `cursorHighlighted` | `boolean` | День внутри полосы от `cursorDate` |
| `startOfWeek` / `endOfWeek` | `boolean` | Первая и последняя колонка строки |
| `inRangeAbove` / `inRangeBelow` | `boolean` | Полоса продолжается в ячейке выше / ниже — по ним скругляют только внешние углы |
| `onSelect` | `(date, event) => void` | Сообщить о выборе даты |
| `onHover` | `(date, event) => void` | Управлять предпросмотром диапазона |

## Ref и стилизация

`ref` указывает на корневой `<div>`. `className`, `style` и остальные атрибуты `<div>` применяются к нему же. Чтобы изменить размеры и цвета, переопределите [CSS-переменные](/ru/components/content/calendar/css-vars); иконки навигации заменяются на вкладке [Иконки](/ru/components/content/calendar/icons).

## Свойства

:::prop[mode]{type="'single' | 'multiple' | 'range'"}
Включает выбор и собственное состояние. Без него календарь — голая сетка.
:::

:::prop[value]{type="Dayjs | Dayjs[] | { from?: Dayjs; to?: Dayjs }"}
Управляемое значение. Форма зависит от `mode`.
:::

:::prop[defaultValue]{type="Dayjs | Dayjs[] | { from?: Dayjs; to?: Dayjs }"}
Начальное значение, если календарь неуправляемый.
:::

:::prop[onSelect]{type="(value, event: MouseEvent<HTMLButtonElement>) => void"}
Вызывается на каждый клик по дню со следующим значением той же формы, что и `value`.
:::

:::prop[month]{type="Dayjs"}
Управляемый отображаемый месяц. Используются только год и месяц.
:::

:::prop[defaultMonth]{type="Dayjs" default="dayjs()"}
Начальный месяц, если он не управляется снаружи.
:::

:::prop[onMonthChange]{type="(month: Dayjs, event: MouseEvent<HTMLButtonElement>) => void"}
Вызывается, когда навигация в шапке меняет месяц.
:::

:::prop[locale]{type="string" default="язык приложения"}
Локаль BCP-47 для подписи месяца и названий дней недели.
:::

:::prop[firstDayOfWeek]{type="'monday' | 'sunday' | 'auto'" default="'auto'"}
Первый день недели. `'auto'` вычисляет его из локали.
:::

:::prop[minDate]{type="Dayjs"}
Дни раньше этой даты отключаются.
:::

:::prop[maxDate]{type="Dayjs"}
Дни позже этой даты отключаются.
:::

:::prop[isDateDisabled]{type="(date: Dayjs) => boolean"}
Предикат для отключения отдельных дней.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует все ячейки.
:::

:::prop[showHeader]{type="boolean"}
Шапка с подписью месяца. По умолчанию видна, если задан `mode`.
:::

:::prop[showNavigation]{type="boolean" default="true"}
Кнопки «назад» и «вперёд» в шапке.
:::

:::prop[showWeekdays]{type="boolean"}
Строка названий дней недели. По умолчанию видна, если задан `mode`.
:::

:::prop[showOutsideDays]{type="boolean" default="true"}
Рисовать дни соседних месяцев (приглушённо) вместо пустых ячеек.
:::

:::prop[prevIcon]{type="ReactElement" default="Application.icons.prev"}
Иконка кнопки предыдущего месяца.
:::

:::prop[nextIcon]{type="ReactElement" default="Application.icons.next"}
Иконка кнопки следующего месяца.
:::

:::prop[DateComponent]{type="FC<CalendarRenderDateProps>" default="Calendar.Date"}
Свой компонент ячейки дня.
:::

:::prop[selectedDates]{type="Dayjs[]"}
Низкоуровневый режим: дни в выбранном состоянии.
:::

:::prop[cursorDate]{type="Dayjs"}
Низкоуровневый режим: дата наведения для предпросмотра полосы от `selectedDates[0]`.
:::

:::prop[onDateChange]{type="(date: Dayjs, event: MouseEvent<HTMLButtonElement>) => void"}
Низкоуровневый режим: вызывается при клике на день, состояния нет.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref корневого элемента.
:::

Все остальные атрибуты `<div>`, включая `className` и `style`, передаются корневому элементу.

## Похожие темы

- [DatePicker](/ru/components/controls/datePicker) — поле с попапом-календарём для выбора даты в форме
- [Application](/ru/components/layout/application) — язык приложения и общие иконки `prev`/`next`
- [Цвет](/ru/foundations/color) — токены акцентных цветов, которыми окрашены выбранные дни и полоса диапазона
