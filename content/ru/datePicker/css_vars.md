# Date Picker

CSS-переменные, которые читает `DatePicker` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
Поле — это `TextInput`, поэтому его переменные `--text-input-*` задаются через проп `style` самого `DatePicker`. Инлайн-стили сильнее классов размеров, поэтому переопределение заменяет значение для любого `size`:

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  style={{ "--text-input-font-size": "18px" } as React.CSSProperties}
/>
```

Календарь открывается в портале, вне поля, поэтому переменная, заданная через `style`, до него не дойдёт. Чтобы изменить попап, задайте переменные `--date-picker-*` на корне `Application` — это изменит их сразу для всех пикеров.

Что переопределить нельзя:

- **Вид в состоянии disabled.** `disabled` принудительно подставляет в `--box-fill` и `--box-tone-text` токены заблокированного состояния.
- **Сетка дней.** Ячейки дней рисует [Calendar](/ru/components/content/calendar/css-vars), и на них действуют его переменные.
:::

## Внутренние переменные

Определяются самим `DatePicker`. Они оформляют попап, поэтому читаются с корня приложения.

::::css-vars
:::css-var[--date-picker-header-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет месяца и года в заголовке попапа. По умолчанию: `var(--text-2)`
:::

:::css-var[--date-picker-header-text-size]{kind="font" type="Размер шрифта"}
Размер шрифта заголовка попапа. По умолчанию: `14px`
:::

:::css-var[--date-picker-header-hover-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет кнопок заголовка при наведении. По умолчанию: `var(--accent-11)`
:::

:::css-var[--date-picker-cell-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет ячеек в сетках месяцев и лет. По умолчанию: `var(--text-2)`
:::

:::css-var[--date-picker-cell-text-size]{kind="font" type="Размер шрифта"}
Размер шрифта ячеек в сетках месяцев и лет. По умолчанию: `14px`
:::

:::css-var[--date-picker-cell-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка ячейки при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--date-picker-cell-selected-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет выбранного месяца или года. По умолчанию: `var(--accent-11)`
:::
::::

## Глобальные переменные

Не определяются `DatePicker`: переменные `TextInput` и `Box`, на которых построено поле, и глобальные токены дизайна.

::::css-vars
:::css-var[--text-input-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта значения. По умолчанию: `14px`
:::

:::css-var[--text-input-icon-size]{kind="size" type="Размер"}
Размер иконки календаря. По умолчанию: `16px`
:::

:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка поля. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет значения. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-padding-x]{kind="gap" type="Отступ"}
Горизонтальный отступ поля. По умолчанию: `var(--space-control-x-m)` (`8px`)
:::

:::css-var[--box-size]{kind="size" type="Размер"}
Высота поля. По умолчанию: `32px`
:::

:::css-var[--box-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления поля. По умолчанию: `var(--radius-pill)`
:::

:::css-var[--accent-11]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Акцентный цвет текста при наведении и выборе. По умолчанию: `var(--accent-11)`
:::
::::
