# Calendar

`Calendar` показывает один месяц на фиксированной сетке из шести строк (42 ячейки), поэтому его высота не меняется при переключении месяцев. У компонента два уровня API:

- **Высокоуровневый** — задайте `mode`, и `Calendar` сам хранит выбор (`value` / `defaultValue` / `onSelect`), рисует шапку с навигацией и строку дней недели, а также подсвечивает диапазон при наведении.
- **Низкоуровневый** — не указывайте `mode` и управляйте сеткой через `selectedDates` + `DateComponent`. Шапка и строка дней недели по умолчанию скрыты; навигация и хранение выбора — на стороне вызывающего кода. На этом уровне построен `DatePicker`.

Требует `dayjs` как peer-зависимость.

## Высокоуровневый API

```tsx
const [value, setValue] = useState<Dayjs>();

<Calendar mode="single" value={value} onSelect={setValue} />
```

`mode` определяет форму значения: `Dayjs` для `single`, `Dayjs[]` для `multiple`, `{ from, to }` для `range`. Первый клик по диапазону задаёт `from`, второй — закрывает диапазон (границы автоматически упорядочиваются). Пока выбран только `from`, наведение на день показывает предпросмотр полосы — та же логика, что в `DatePicker.Range`.

```tsx
const [range, setRange] = useState<{ from?: Dayjs; to?: Dayjs }>({});

<Calendar mode="range" value={range} onSelect={setRange} />
```

Отображаемый месяц управляется через `month` / `defaultMonth` / `onMonthChange`. Ограничить выбор можно через `minDate`, `maxDate` и предикат `isDateDisabled`.

## Базовое использование (низкоуровневый API)

```tsx
import dayjs from "dayjs";

const [month] = useState(dayjs());
const [selected, setSelected] = useState<Dayjs | null>(null);

<Calendar
  month={month}
  selectedDates={selected ? [selected] : []}
  onDateChange={(date) => setSelected(date)}
/>
```

::playground{src=CalendarBasicDemo caption="Нажмите на день, чтобы выбрать его"}

`month` определяет, какой месяц отображается — используется только год и месяц, число дня игнорируется. `selectedDates` — массив выбранных дат; каждый совпавший день отрисовывается в выбранном состоянии.

## Диапазон с подсветкой курсора

`cursorDate` подсвечивает все даты между `selectedDates[0]` и текущим наведением — в обе стороны. Это стандартный способ показать предварительный диапазон до второго клика.

```tsx
const [range, setRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
const [cursor, setCursor] = useState<Dayjs | undefined>();

const handleSelect = (date: Dayjs) => {
  const [start, end] = range;
  if (!start || (start && end)) {
    setRange([date, null]);
  } else {
    setRange([start, date]);
  }
};

<div onMouseLeave={() => setCursor(undefined)}>
  <Calendar
    month={month}
    selectedDates={range.filter(Boolean) as Dayjs[]}
    cursorDate={cursor}
    onDateChange={handleSelect}
  />
</div>
```

::playground{src=CalendarRangeDemo caption="Первый клик задаёт начало диапазона, второй — конец"}

:::tip
`cursorDate` нужно обновлять на `onMouseEnter` (или аналогичном событии) отдельных дней — сам `Calendar` его не отслеживает. Это осознанное решение: подсветка курсора — забота вызывающего кода, не компонента.
:::

## Локали и первый день недели

Подпись месяца и названия дней недели берутся из активной локали приложения (или из пропа `locale` в формате BCP-47). Первый день недели по умолчанию вычисляется из локали (`firstDayOfWeek="auto"`): воскресенье для `en-US`, понедельник для `ru-RU`. Его можно зафиксировать явно.

```tsx
<Calendar mode="single" locale="ru-RU" />          {/* auto → понедельник */}
<Calendar month={dayjs()} firstDayOfWeek="monday" /> {/* зафиксировано */}
```

::playground{src=CalendarMondayDemo caption="Неделя начинается с понедельника"}

## Навигация по месяцам

`Calendar` не содержит кнопок «вперёд» / «назад» — это ответственность родителя.

```tsx
const [month, setMonth] = useState(dayjs());

<div>
  <button onClick={() => setMonth((m) => m.subtract(1, "month"))}>←</button>
  <span>{month.format("MMMM YYYY")}</span>
  <button onClick={() => setMonth((m) => m.add(1, "month"))}>→</button>
  <Calendar month={month} selectedDates={[]} onDateChange={handleSelect} />
</div>
```

:::warning
Кнопки навигации в примере выше — это иллюстрация логики переключения месяца. В реальном интерфейсе используйте `Button`, а не голый `<button>`.
:::

## Кастомная ячейка дня

Замените `DateComponent`, чтобы добавить точки событий, подсказки или любое другое содержимое ячейки.

```tsx
const CustomDay: React.FC<CalendarRenderDateProps> = ({
  currentDate,
  selected,
  today,
  fromAnotherMonth,
  disabled,
  onSelect,
}) => (
  <button
    onClick={(e) => onSelect?.(currentDate, e)}
    disabled={disabled}
    style={{
      opacity: fromAnotherMonth ? 0.3 : 1,
      fontWeight: today ? "bold" : "normal",
      background: selected ? "var(--primary-500)" : "transparent",
    }}
  >
    {currentDate.date()}
  </button>
);

<Calendar month={dayjs()} DateComponent={CustomDay} onDateChange={handleSelect} />
```

## Свойства

:::prop[mode]{type="'single' | 'multiple' | 'range'"}
Включает высокоуровневый API. Когда задан, `Calendar` сам хранит выбор и показывает шапку и строку дней недели.
:::

:::prop[value / defaultValue]{type="Dayjs | Dayjs[] | { from?: Dayjs; to?: Dayjs }"}
Управляемое / начальное значение. Форма зависит от `mode`.
:::

:::prop[onSelect]{type="(value, event: MouseEvent) => void"}
Вызывается на каждый клик по дню со следующим значением (той же формы, что `value`).
:::

:::prop[month / defaultMonth]{type="Dayjs" default="dayjs()"}
Отображаемый месяц (управляемый / начальный). Используется только год и месяц.
:::

:::prop[onMonthChange]{type="(month: Dayjs, event: MouseEvent) => void"}
Вызывается, когда навигация в шапке меняет месяц.
:::

:::prop[locale]{type="string" default="язык приложения"}
Локаль BCP-47 для подписи месяца и названий дней недели.
:::

:::prop[firstDayOfWeek]{type="'monday' | 'sunday' | 'auto'" default="'auto'"}
`'auto'` вычисляет первый день недели из локали.
:::

:::prop[minDate / maxDate]{type="Dayjs"}
Дни за пределами диапазона отключаются.
:::

:::prop[isDateDisabled]{type="(date: Dayjs) => boolean"}
Предикат для отключения отдельных дней.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует все ячейки календаря.
:::

:::prop[showHeader / showWeekdays]{type="boolean"}
Шапка и строка дней недели. По умолчанию видимы, если задан `mode`.
:::

:::prop[showNavigation]{type="boolean" default="true"}
Кнопки `‹` / `›` в шапке.
:::

:::prop[showOutsideDays]{type="boolean" default="true"}
Рисовать дни соседних месяцев (приглушённо) вместо пустых ячеек.
:::

:::prop[prevIcon / nextIcon]{type="ReactElement" default="Application.icons.prev / .next"}
Переопределяют иконки навигации по месяцам в шапке.
:::

:::prop[selectedDates]{type="Dayjs[]"}
Низкоуровневый API: дни в выбранном состоянии (когда `mode` не задан).
:::

:::prop[cursorDate]{type="Dayjs"}
Низкоуровневый API: дата наведения для предпросмотра диапазона между `selectedDates[0]` и `cursorDate` (в обе стороны).
:::

:::prop[onDateChange]{type="(date: Dayjs, event: MouseEvent) => void"}
Низкоуровневый API: вызывается при клике на ячейку дня; `Calendar` не хранит состояние.
:::

:::prop[DateComponent]{type="React.FC<CalendarRenderDateProps>" default="Calendar.Date"}
Кастомный компонент ячейки дня. Заменяет рендерер по умолчанию.
:::

## CalendarRenderDateProps

Пропы, которые получает каждый экземпляр `DateComponent`:

| Проп | Тип | Описание |
|---|---|---|
| `currentDate` | `Dayjs` | Дата, которую представляет ячейка |
| `weekDay` | `number` | День недели (0 — воскресенье … 6 — суббота) |
| `fromAnotherMonth` | `boolean` | `true` для дней-заполнителей из соседнего месяца |
| `today` | `boolean` | `true`, если дата — сегодняшний день |
| `selected` | `boolean` | `true`, если дата выбрана |
| `disabled` | `boolean` | `true`, если этот день отключён |
| `cursorHighlighted` | `boolean` | `true` для предпросмотра диапазона через `cursorDate` |
| `inRange` | `boolean` | `true`, если день внутри диапазона (с учётом предпросмотра при наведении) |
| `rangeStart` / `rangeEnd` | `boolean` | `true` на границах диапазона |
| `startOfWeek` / `endOfWeek` | `boolean` | Первая / последняя отрисованная колонка строки недели |
| `inRangeAbove` / `inRangeBelow` | `boolean` | `true`, если подложка накрывает ячейку прямо сверху / снизу — чтобы скруглять только внешние углы подложки |
| `onSelect` | `(date, event) => void` | Сообщить о выборе даты |
| `onHover` | `(date: Dayjs \| undefined, event: MouseEvent) => void` | Управлять предпросмотром диапазона при наведении |

## Рекомендации

**Не храните `month` внутри `selectedDates`.** Это два независимых состояния: `month` — что показано, `selectedDates` — что выбрано. Смешивание их усложняет логику навигации.

**Для одиночного выбора даты в форме используйте `DatePicker`, а не голый `Calendar`.** `Calendar` — строительный блок; `DatePicker` уже включает поле ввода, popover и валидацию.

**Сбрасывайте `cursorDate` при уходе курсора с календаря.** Иначе подсветка диапазона «залипнет» на последней наведённой дате после того, как пользователь увёл мышь.

**Дни соседних месяцев (`fromAnotherMonth`) должны оставаться кликабельными, но визуально приглушёнными.** Это помогает ориентироваться в сетке недель, не создавая ложного ощущения, что они принадлежат текущему месяцу.
