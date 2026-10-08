# Text

CSS-переменные, которые читает `Text` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Переменные `--text-*` определены на корне приложения, поэтому изменение в таблице стилей перекрашивает сразу все `Text`, а изменение на любом предке — `Text` внутри него. Для одного элемента используйте проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме.

```tsx
<Text
  code
  style={{ "--text-code-background-color": "var(--teal-3)" } as React.CSSProperties}
>
  npm install
</Text>
```

::playground{src=text/TextCssVarsDemo caption="Переопределение цветов code и highlighted и отступа списка"}

У цветов `code` и `highlighted` есть собственные значения для тёмной темы, и они перебивают переопределение, заданное на корне приложения. Используйте проп `style` или повторите переопределение под `[data-altrone-theme='dark']`. Чтобы `Text` брал цвет от родителя, задайте `--text-color: currentcolor`.

Что переопределить нельзя:

- **Размерную шкалу для отдельного элемента.** `size` выбирает ступень из глобальных токенов `--text-size-*` и `--line-height-*`; меняйте токен или выберите другой `size`.
- **Ограничение строк.** Число строк приходит из пропа `lineClamp`.
- **Вид ссылки.** Ссылка читает акцентные токены напрямую, поэтому перекрашивайте её через `--accent-11` и `--accent-12`.
:::

## Внутренние переменные

Определены самим `Text` на корне приложения.

::::css-vars
:::css-var[--text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста по умолчанию. По умолчанию: `var(--text-2)`
:::

:::css-var[--text-color-muted]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет `muted`. По умолчанию: `var(--text-1)`
:::

:::css-var[--text-color-danger]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет `danger`. По умолчанию: `var(--danger-text-1)`
:::

:::css-var[--text-color-success]{kind="text" type="Цвет текста" color="var(--success-text-1)"}
Цвет `success`. По умолчанию: `var(--success-text-1)`
:::

:::css-var[--text-color-warning]{kind="text" type="Цвет текста" color="var(--warning-text-1)"}
Цвет `warning`. По умолчанию: `var(--warning-text-1)`
:::

:::css-var[--text-code-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-1)"}
Фон `code`. По умолчанию: `var(--accent-1)` в светлой теме
:::

:::css-var[--text-code-border-color]{kind="border" type="Цвет обводки" color="var(--accent-6)"}
Рамка `code`. По умолчанию: `var(--accent-6)` в светлой теме
:::

:::css-var[--text-code-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста `code`. По умолчанию: `var(--accent-12)` в светлой теме
:::

:::css-var[--text-highlighted-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Фон `highlighted`. По умолчанию: `var(--accent-3)` в светлой теме
:::

:::css-var[--text-highlighted-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста `highlighted`. По умолчанию: `var(--accent-12)`
:::

:::css-var[--text-rounding]{kind="radius" type="Радиус скругления"}
Радиус скругления `code` и `highlighted`. По умолчанию: `8px`
:::

:::css-var[--text-list-offset]{kind="gap" type="Размер отступа"}
Левый отступ списка. По умолчанию: `24px`
:::

:::css-var[--text-block-line-height]{kind="size" type="Межстрочный интервал"}
Межстрочный интервал `block` без `size`. По умолчанию: `1.6`
:::
::::

## Глобальные переменные

Не определены `Text`: глобальные токены дизайна, которые он читает. Изменение токена перекрашивает сразу все `Text`.

::::css-vars
:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Размер шрифта ступени; остальные ступени читают `--text-size-{1..9}`. По умолчанию: `14px`
:::

:::css-var[--line-height-4]{kind="size" type="Межстрочный интервал"}
Межстрочный интервал ступени; остальные читают `--line-height-{1..9}`. По умолчанию: `20px`
:::

:::css-var[--text-weight-regular]{kind="font" type="Насыщенность шрифта"}
Обычное начертание; остальные читают `--text-weight-{light,medium,bold}`. По умолчанию: `400`
:::

:::css-var[--font-family-base]{kind="font" type="Семейство шрифта"}
Шрифт всего текста, кроме `code` и `kbd`. По умолчанию: `'Inter Variable'`, затем системные шрифты
:::

:::css-var[--font-family-code]{kind="font" type="Семейство шрифта"}
Шрифт `code` и `kbd`. По умолчанию: `'JetBrains Mono Variable'`, затем monospace
:::

:::css-var[--xs-gap]{kind="gap" type="Размер отступа"}
Горизонтальный отступ `code` и `highlighted`. По умолчанию: `4px`
:::

:::css-var[--text-1]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет `muted` и текста `code` в тёмной теме. По умолчанию: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста по умолчанию. По умолчанию: `var(--gray-12)`
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет `danger`. По умолчанию: `var(--red-11)`
:::

:::css-var[--success-text-1]{kind="text" type="Цвет текста" color="var(--success-text-1)"}
Цвет `success`. По умолчанию: `var(--green-11)`
:::

:::css-var[--warning-text-1]{kind="text" type="Цвет текста" color="var(--warning-text-1)"}
Цвет `warning`. По умолчанию: `var(--amber-11)`
:::

:::css-var[--accent-1]{kind="fill" type="Цвет заливки" color="var(--accent-1)"}
Фон `code` в светлой теме. По умолчанию: `var(--blue-1)`
:::

:::css-var[--accent-3]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Фон `highlighted` в светлой теме. По умолчанию: `var(--blue-3)`
:::

:::css-var[--accent-6]{kind="border" type="Цвет обводки" color="var(--accent-6)"}
Рамка `code` в светлой теме. По умолчанию: `var(--blue-6)`
:::

:::css-var[--accent-11]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет ссылки. По умолчанию: `var(--blue-11)`
:::

:::css-var[--accent-12]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет ссылки при наведении и фокусе, а также текста `highlighted` и `code` в светлой теме. По умолчанию: `var(--blue-12)`
:::

:::css-var[--interactive-2]{kind="fill" type="Цвет заливки" color="var(--interactive-2)"}
Фон `code` и `highlighted` в тёмной теме. По умолчанию: `var(--gray-4)`
:::

:::css-var[--border-a1]{kind="border" type="Цвет обводки" color="var(--border-a1)"}
Рамка `code` в тёмной теме. По умолчанию: `var(--gray-a6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет `deleted`, `kbd` и маркеров списка. По умолчанию: `var(--gray-9)`
:::
::::
