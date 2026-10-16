# Calendar

CSS-переменные, которые читает `Calendar` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Все они задаются на корневом элементе, поэтому надёжный способ изменить переменную у одного календаря — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме.

```tsx
<Calendar
  mode="range"
  style={{ "--calendar-cell-size": "40px", "--calendar-width": "280px", "--calendar-band-color": "var(--teal-a4)" } as React.CSSProperties}
/>
```

::playground{src=calendar/CalendarCssVarsDemo caption="Крупные ячейки и бирюзовая полоса через проп style"}

Календарь ровно семь ячеек в ширину, но ширина считается один раз на уровне приложения, поэтому при смене `--calendar-cell-size` задайте и `--calendar-width` (семь размеров ячейки). Радиус плашки выбранного дня и полосы диапазона задаётся отдельно через `--calendar-cell-radius`: при крупных ячейках увеличьте и его, чтобы дни остались круглыми.

Что переопределить нельзя:

- **Кнопки навигации.** Это обычные `Button`, их вид задаётся переменными кнопки.
- **Состояния отключённого дня.** Цвет берётся из глобальной `--disabled-text-color`.
- **Анимацию плашки выбранного дня.** Она задана в коде.
:::

## Внутренние переменные

Определены самим календарём.

::::css-vars
:::css-var[--calendar-cell-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет числа в ячейке. По умолчанию: `var(--text-2)`
:::

:::css-var[--calendar-cell-weekend-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет числа в выходной день. По умолчанию: `var(--accent-12)`
:::

:::css-var[--calendar-cell-today-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет сегодняшнего дня. По умолчанию: `var(--accent-11)`
:::

:::css-var[--calendar-cell-selected-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет выбранного дня. По умолчанию: `var(--accent-11)`
:::

:::css-var[--calendar-cell-outside-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет дней соседних месяцев. По умолчанию: `var(--disabled-text-color)`
:::

:::css-var[--calendar-cell-hover-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Подложка дня при наведении и фокусе. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--calendar-band-color]{kind="fill" type="Цвет заливки" color="var(--accent-a3)"}
Заливка полосы диапазона. По умолчанию: `var(--accent-a3)`
:::

:::css-var[--calendar-weekday-text-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет названий дней недели. По умолчанию: `var(--text-1)`
:::

:::css-var[--calendar-header-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет подписи месяца в шапке. По умолчанию: `var(--text-2)`
:::

:::css-var[--calendar-cell-size]{kind="size" type="Размер"}
Сторона квадратной ячейки; ширина календаря — семь таких ячеек. По умолчанию: `32px`
:::

:::css-var[--calendar-width]{kind="size" type="Размер"}
Ширина календаря. По умолчанию: `calc(var(--calendar-cell-size) * 7)`
:::

:::css-var[--calendar-cell-radius]{kind="radius" type="Скругление"}
Скругление плашки выбранного дня, подложки и краёв полосы. По умолчанию: `16px`
:::

:::css-var[--calendar-cell-text-size]{kind="font" type="Размер шрифта"}
Размер числа в ячейке. По умолчанию: `14px`
:::

:::css-var[--calendar-weekday-text-size]{kind="font" type="Размер шрифта"}
Размер названий дней недели. По умолчанию: `10px`
:::

:::css-var[--calendar-header-text-size]{kind="font" type="Размер шрифта"}
Размер подписи месяца. По умолчанию: `14px`
:::
::::

## Глобальные переменные

Не определены самим календарём: глобальные токены дизайна, которые он читает. Изменение токена влияет сразу на все календари.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Отступ между элементами шапки. По умолчанию: `8px`
:::

:::css-var[--s-gap]{kind="gap" type="Отступ"}
Отступ между шапкой, днями недели и сеткой. По умолчанию: `6px`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка плашки выбранного дня. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Тень"}
Тень плашки выбранного дня. По умолчанию: `var(--elevation-raised-shadow)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет отключённого дня. По умолчанию: `var(--gray-9)`
:::
::::
