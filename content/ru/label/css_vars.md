# Label

CSS-переменные, которые читает `Label` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Собственные переменные метки заданы на её корневом элементе и зависят от `size`; переменные `--box-*` выставляют там же классы `variant` и `color`. Проп `style` у `Label` сильнее и тех и других, поэтому это надёжный способ изменить их для одной метки.

```tsx
<Label
  color="teal"
  style={{
    "--label-padding-x": "12px",
    "--label-radius": "2px",
  } as React.CSSProperties}
>
  Release 2.0
</Label>
```

::playground{src=label/LabelCssVarsDemo caption="Шире отступы и острее углы; крупнее точка без рамки"}

Отступы и скругление меняйте через собственные переменные метки: она сама записывает `--label-padding-x`/`--label-padding-y` в `--box-padding-x`/`--box-padding-y`, а `--label-radius` — в `--radius-outer`, поэтому прямое переопределение этих переменных Box не сработает. Статусная точка повторяет скругление метки; при `shape="pill"` скругление берётся из `--radius-pill`, и `--label-radius` не действует. `--box-color` задаётся пропом `color` и не переопределяется.
:::

## Внутренние переменные

Определены самим компонентом. Значения показаны для `size="m"`; другие размеры подставляют свои.

::::css-vars
:::css-var[--label-padding-x]{kind="gap" type="Отступ"}
Горизонтальный отступ. По умолчанию: `8px`
:::

:::css-var[--label-padding-y]{kind="gap" type="Отступ"}
Вертикальный отступ. По умолчанию: `4px`
:::

:::css-var[--label-status-padding-left]{kind="gap" type="Отступ"}
Левый отступ варианта `status`, перед точкой. По умолчанию: `4px`
:::

:::css-var[--label-dot-size]{kind="size" type="Размер"}
Диаметр статусной точки. По умолчанию: `15px`
:::

:::css-var[--label-icon-size]{kind="size" type="Размер"}
Размер иконки перед текстом. По умолчанию: `12px`
:::

:::css-var[--label-radius]{kind="radius" type="Скругление"}
Скругление `shape="rounded"`. По умолчанию: `8px`
:::

:::css-var[--label-gap]{kind="gap" type="Отступ"}
Промежуток между иконкой или точкой и текстом. По умолчанию: `4px`
:::

:::css-var[--label-font-size]{kind="font" type="Размер шрифта"}
Размер текста. По умолчанию: `var(--text-size-3)`
:::

:::css-var[--label-line-height]{kind="font" type="Размер шрифта"}
Высота строки. По умолчанию: `var(--line-height-3)`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид. Цвета показаны для `color="default"`.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--solid-1)"}
Фон метки. По умолчанию: `var(--solid-1)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--background-1)"}
Цвет текста и иконки. По умолчанию: `var(--background-1)`
:::

:::css-var[--box-tone-solid]{kind="fill" type="Цвет заливки" color="var(--solid-1)"}
Заливка варианта `solid` и статусной точки. По умолчанию: `var(--solid-1)`
:::

:::css-var[--box-tone-solid-text]{kind="text" type="Цвет текста" color="var(--background-1)"}
Цвет иконки внутри статусной точки. По умолчанию: `var(--background-1)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Заливка вариантов `soft` и `status`. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--box-tone-border]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Рамка вариантов `outline` и `status`. По умолчанию: `var(--border-a2)`
:::

:::css-var[--box-border-color]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Цвет рамки вариантов `outline` и `status`. По умолчанию: `var(--box-tone-border)`
:::

:::css-var[--box-border-width]{kind="size" type="Толщина обводки"}
Толщина рамки вариантов `outline` и `status`. По умолчанию: `1px`
:::

:::css-var[--box-radius]{kind="radius" type="Скругление"}
Итоговое скругление метки и статусной точки. По умолчанию: `var(--label-radius)`
:::

:::css-var[--solid-1]{kind="fill" type="Цвет заливки" color="var(--solid-1)"}
Нейтральная сплошная заливка.
:::

:::css-var[--background-1]{kind="text" type="Цвет текста" color="var(--background-1)"}
Цвет текста на нейтральной сплошной заливке.
:::

:::css-var[--interactive-1]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Нейтральная бледная заливка.
:::

:::css-var[--border-a2]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Нейтральная рамка.
:::

:::css-var[--blue-9]{kind="fill" type="Цвет заливки" color="var(--blue-9)"}
Основа цвета `blue`; остальные категориальные цвета берут свою `--<hue>-9`.
:::

:::css-var[--radius-pill]{kind="radius" type="Скругление"}
Скругление `shape="pill"`.
:::

:::css-var[--text-size-3]{kind="font" type="Размер шрифта"}
Значение по умолчанию для `--label-font-size`. По умолчанию: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Размер шрифта"}
Значение по умолчанию для `--label-line-height`. По умолчанию: `16px`
:::

:::css-var[--text-weight-medium]{kind="font" type="Начертание"}
Начертание текста.
:::
::::
