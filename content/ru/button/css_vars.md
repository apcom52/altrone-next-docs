# Button

CSS-переменные, которые читает `Button` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Все они задаются на самом элементе кнопки. Надёжный способ изменить переменную у одной кнопки — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме. Правило в таблице стилей тоже подойдёт, но селектор должен быть специфичнее классов размера и варианта (например, `.my-button.my-button`).

```tsx
<Button
  label="Roomy gap"
  icon={<Send />}
  style={{ "--button-gap": "16px" } as React.CSSProperties}
/>
```

::playground{src=button/ButtonCssVarsDemo caption="Переопределение переменных через проп style"}

Вид при наведении и нажатии у варианта `text` и у выбранной кнопки строится из переменных `--box-tone-*`, поэтому переопределяйте их, чтобы интерактивные состояния сохранились. Переопределение `--box-fill` заменяет заливку во всех состояниях, включая наведение, нажатие и блокировку.

Что переопределить нельзя:

- **Горизонтальный padding.** Кнопка задаёт его инлайн-стилем. Для более широкой или узкой кнопки выберите другой `size`.
- **Тонкое кольцо варианта `default`.** Это фиксированная тень, поэтому `--box-border-*` на нём не действует; если нужна своя рамка — используйте `variant="text"` или `submit`.
- **Размеры бейджа.** Они принадлежат бейджу и следуют за `size` кнопки.
:::

## Внутренние переменные

Определены самой кнопкой.

::::css-vars
:::css-var[--button-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта подписи. По умолчанию: `14px`
:::

:::css-var[--button-icon-size]{kind="size" type="Размер"}
Размер иконки. По умолчанию: `16px`
:::

:::css-var[--button-gap]{kind="gap" type="Размер отступа"}
Промежуток между иконкой, подписью и бейджем. По умолчанию: `var(--gap)`
:::
::::

## Глобальные переменные

Не определены самой кнопкой: переменные примитива `Box`, на котором она построена, и глобальные дизайн-токены, которые она читает. Изменение токена перекрашивает сразу все кнопки.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон кнопки. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста и иконок. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка варианта `text` при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--box-tone-translucent-strong]{kind="fill" type="Цвет заливки" color="var(--interactive-a3)"}
Заливка варианта `text` при нажатии. По умолчанию: `var(--interactive-a3)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Заливка выбранной кнопки. По умолчанию: `var(--accent-3)`
:::

:::css-var[--box-tone-pale-strong]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Заливка выбранной кнопки при наведении и нажатии. По умолчанию: `var(--accent-5)`
:::

:::css-var[--box-border-color]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Цвет рамки вариантов `submit` и `text`. По умолчанию: `transparent`
:::

:::css-var[--box-border-width]{kind="size" type="Толщина обводки"}
Толщина рамки вариантов `submit` и `text`. По умолчанию: `0px`
:::

:::css-var[--box-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления. По умолчанию: `var(--radius-pill)`
:::

:::css-var[--box-size]{kind="size" type="Размер"}
Минимальная высота. По умолчанию: `32px`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона варианта `default`. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень. По умолчанию: `var(--elevation-flat-shadow)`
:::

:::css-var[--accent-9]{kind="fill" type="Цвет заливки" color="var(--accent-9)"}
Заливка варианта `submit`. По умолчанию: `var(--blue-9)`
:::

:::css-var[--accent-3]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Заливка выбранной кнопки. По умолчанию: `var(--blue-3)`
:::

:::css-var[--accent-5]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Заливка выбранной кнопки при наведении и нажатии. По умолчанию: `var(--blue-5)`
:::

:::css-var[--accent-11]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет текста выбранной кнопки. По умолчанию: `var(--blue-11)`
:::

:::css-var[--danger-solid-1]{kind="fill" type="Цвет заливки" color="var(--danger-solid-1)"}
Заливка кнопки `submit` с `danger`. По умолчанию: `var(--red-9)`
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет текста кнопки с `danger`. По умолчанию: `var(--red-11)`
:::

:::css-var[--danger-interactive-1]{kind="fill" type="Цвет заливки" color="var(--danger-interactive-1)"}
Заливка выбранной кнопки с `danger`. По умолчанию: `var(--red-3)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста нейтральной кнопки. По умолчанию: `var(--gray-12)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка нейтральной кнопки `text` при наведении. По умолчанию: `var(--gray-a3)`
:::

:::css-var[--interactive-a3]{kind="fill" type="Цвет заливки" color="var(--interactive-a3)"}
Заливка нейтральной кнопки `text` при нажатии. По умолчанию: `var(--gray-a5)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка варианта `default`. По умолчанию: `color(display-p3 1 1 1 / 0.7)` в светлой теме
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие фона варианта `default`. По умолчанию: `blur(64px) saturate(180%)`
:::

:::css-var[--glass-press-effects]{kind="blur" type="Фильтр фона"}
Размытие фона варианта `default` при нажатии. По умолчанию: `blur(64px) saturate(180%) brightness(1.1)`
:::

:::css-var[--disabled-background]{kind="fill" type="Цвет заливки" color="var(--disabled-background)"}
Заливка заблокированной кнопки `submit`. По умолчанию: `var(--gray-3)`
:::

:::css-var[--disabled-border]{kind="border" type="Цвет обводки" color="var(--disabled-border)"}
Цвет рамки заблокированной кнопки `submit`. По умолчанию: `var(--gray-6)`
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста заблокированной кнопки. По умолчанию: `var(--gray-9)`
:::

:::css-var[--focus-color]{kind="border" type="Цвет обводки" color="var(--focus-color)"}
Цвет контура фокуса. По умолчанию: `color(display-p3 0 0 0)` в светлой теме
:::

:::css-var[--gap]{kind="gap" type="Размер отступа"}
Промежуток содержимого по умолчанию. По умолчанию: `8px`
:::

:::css-var[--l-gap]{kind="gap" type="Размер отступа"}
Горизонтальный padding. По умолчанию: `12px`
:::

:::css-var[--radius-pill]{kind="radius" type="Радиус скругления"}
Радиус скругления кнопки с подписью. По умолчанию: `9999px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Тень"}
Тень в покое. По умолчанию: `var(--shadow-none)`
:::
::::
