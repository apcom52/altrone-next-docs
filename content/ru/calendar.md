# Calendar

`Calendar` — это низкоуровневый компонент-сетка для одного месяца. Он берёт на себя расчёт дней, множественный выбор и подсветку диапазона, но не решает за вас, как выглядит навигация между месяцами — переключение месяца реализуется в родительском компоненте. Это делает `Calendar` строительным блоком для `DatePicker`, инлайн-выбора дат в формах и любых кастомных сценариев с датами.

Требует `dayjs` как peer-зависимость.

## Базовое использование

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

## Первый день недели

По умолчанию неделя начинается с воскресенья. `firstDayOfWeek="monday"` сдвигает сетку под европейский календарь.

```tsx
<Calendar month={dayjs()} firstDayOfWeek="monday" />
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

:::prop[month]{type="Dayjs" default="dayjs()"}
Отображаемый месяц. Используется только год и месяц — день игнорируется.
:::

:::prop[selectedDates]{type="Dayjs[]" default="[dayjs()]"}
Массив выбранных дат. Каждый совпадающий день рендерится в выбранном состоянии.
:::

:::prop[cursorDate]{type="Dayjs"}
Дата наведения для предпросмотра диапазона. Когда задана, все даты между `selectedDates[0]` и `cursorDate` подсвечиваются в обе стороны.
:::

:::prop[onDateChange]{type="(date: Dayjs, event: MouseEvent) => void"}
Вызывается при клике на ячейку дня.
:::

:::prop[DateComponent]{type="React.FC<CalendarRenderDateProps>" default="CalendarDate"}
Кастомный компонент ячейки дня. Заменяет рендерер по умолчанию.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует все ячейки календаря.
:::

:::prop[firstDayOfWeek]{type="'monday' | 'sunday'" default="'sunday'"}
Определяет, с какого дня начинается каждая строка недели.
:::

## CalendarRenderDateProps

Пропы, которые получает каждый экземпляр `DateComponent`:

| Проп | Тип | Описание |
|---|---|---|
| `currentDate` | `Dayjs` | Дата, которую представляет ячейка |
| `weekDay` | `number` | День недели (0 — воскресенье … 6 — суббота) |
| `fromAnotherMonth` | `boolean` | `true` для дней-заполнителей из соседнего месяца |
| `today` | `boolean` | `true`, если дата — сегодняшний день |
| `selected` | `boolean` | `true`, если дата входит в `selectedDates` |
| `disabled` | `boolean` | `true`, если весь календарь отключён |
| `cursorHighlighted` | `boolean` | `true`, если дата попадает в диапазон между `selectedDates[0]` и `cursorDate` |
| `onSelect` | `(date, event) => void` | Вызовите внутри кастомного компонента, чтобы запустить `onDateChange` |

## Рекомендации

**Не храните `month` внутри `selectedDates`.** Это два независимых состояния: `month` — что показано, `selectedDates` — что выбрано. Смешивание их усложняет логику навигации.

**Для одиночного выбора даты в форме используйте `DatePicker`, а не голый `Calendar`.** `Calendar` — строительный блок; `DatePicker` уже включает поле ввода, popover и валидацию.

**Сбрасывайте `cursorDate` при уходе курсора с календаря.** Иначе подсветка диапазона «залипнет» на последней наведённой дате после того, как пользователь увёл мышь.

**Дни соседних месяцев (`fromAnotherMonth`) должны оставаться кликабельными, но визуально приглушёнными.** Это помогает ориентироваться в сетке недель, не создавая ложного ощущения, что они принадлежат текущему месяцу.
