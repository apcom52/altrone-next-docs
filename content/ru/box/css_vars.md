# Box

CSS-переменные, которые `Box` определяет и читает и которые можно переопределить. Одни и те же переменные `--box-*` есть у каждого компонента, построенного на `Box`, — `Button`, `Toolbar.Action`, текстовых полей.

:::spoiler[Как переопределять переменные]
Все переменные `--box-*` задаются на самом элементе блока. Надёжный способ изменить переменную у одного блока — проп `style`: инлайновое значение перебивает любое значение из классов, в любой теме. Правило в таблице стилей тоже подойдёт, но селектор должен быть специфичнее классов материала, тона и размера (например, `.my-box.my-box`).

```tsx
<Box
  material="translucent"
  tone="accent"
  style={{
    "--box-tone-translucent": "var(--teal-a3)",
    "--box-tone-text": "var(--teal-11)",
  } as React.CSSProperties}
/>
```

::playground{src=box/BoxCssVarsDemo caption="Переопределение переменных через проп style"}

Переменные `--box-tone-*` — это цветовые роли, из которых читает каждый материал, поэтому переопределяйте их, чтобы перекрасить блок и сохранить наведение, нажатие и фокус. Переопределение `--box-fill` заменяет заливку во всех состояниях, включая наведение и нажатие. Вид при наведении и нажатии строится из переменных тона и `--box-fill`, отдельной переменной у него нет.

Что нельзя переопределить через переменную:

- **`--box-color` и размеры из пропов.** `color`, `width`, `height`, произвольный `size` и `padding` компонент записывает инлайн, поэтому используйте проп, а не переменную.
- **Концентрический радиус.** `--radius-outer` — окружающая область, общая со всем вложенным; задавайте её пропом `radius`.
- **Тонкая кромка `plate`.** Это фиксированная многослойная тень, поэтому `--box-border-*` на неё не действует.
:::

## Внутренние переменные

Определены самим блоком.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="transparent"}
Фон. По умолчанию: `transparent`, заменяется материалом
:::

:::css-var[--box-border-color]{kind="border" type="Цвет обводки" color="transparent"}
Цвет обводки. По умолчанию: `transparent`
:::

:::css-var[--box-border-width]{kind="size" type="Толщина обводки"}
Толщина обводки. По умолчанию: `0px`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона. По умолчанию: `none`
:::

:::css-var[--box-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления, задаётся `shape`. По умолчанию: `2px` для `rounded`
:::

:::css-var[--box-size]{kind="size" type="Размер"}
Минимальная высота, задаётся `size`. По умолчанию: `32px`
:::

:::css-var[--box-padding-x]{kind="gap" type="Размер отступа"}
Горизонтальный отступ. По умолчанию: `8px`
:::

:::css-var[--box-padding-y]{kind="gap" type="Размер отступа"}
Вертикальный отступ. По умолчанию: `6px`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень, задаётся `elevation`. По умолчанию: `var(--elevation-flat-shadow)`
:::

:::css-var[--box-tone-solid]{kind="fill" type="Цвет заливки" color="var(--solid-1)"}
Заливка `solid`. По умолчанию: `var(--solid-1)` для нейтрального тона
:::

:::css-var[--box-tone-solid-text]{kind="text" type="Цвет текста" color="var(--background-1)"}
Текст на заливке `solid`. По умолчанию: `var(--background-1)` для нейтрального тона
:::

:::css-var[--box-tone-translucent]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка `translucent` и подсветка пустых материалов при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--box-tone-translucent-strong]{kind="fill" type="Цвет заливки" color="var(--interactive-a3)"}
Заливка `translucent` при нажатии. По умолчанию: `var(--interactive-a3)`
:::

:::css-var[--box-tone-pale]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Заливка `pale`. По умолчанию: `var(--interactive-1)`
:::

:::css-var[--box-tone-pale-strong]{kind="fill" type="Цвет заливки" color="var(--interactive-3)"}
Заливка `pale` при нажатии. По умолчанию: `var(--interactive-3)`
:::

:::css-var[--box-tone-border]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Обводка `outline`, `ghost` и `dotted`. По умолчанию: `var(--border-a2)`
:::

:::css-var[--box-tone-border-strong]{kind="border" type="Цвет обводки" color="var(--border-a3)"}
Обводка при нажатии и точки `dotted`. По умолчанию: `var(--border-a3)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста и иконок. По умолчанию: `var(--text-2)`
:::

:::css-var[--box-dotted-gap]{kind="gap" type="Размер отступа"}
Расстояние между точками `dotted`. По умолчанию: `12px`
:::

:::css-var[--box-dotted-radius]{kind="size" type="Размер"}
Радиус одной точки `dotted`. По умолчанию: `1.2px`
:::
::::

## Глобальные переменные

Не определены блоком: глобальные токены дизайна, которые он читает. Изменение токена перекрашивает сразу все блоки. Тона `danger`, `success` и `warning` читают тот же набор ролей из своих шкал, например `--danger-solid-1` и `--danger-text-1`.

::::css-vars
:::css-var[--radius-outer]{kind="radius" type="Радиус скругления"}
Окружающий радиус, которому следуют `rounded` и `squircle`; задаётся `radius`. По умолчанию: `0px`
:::

:::css-var[--radius-mini]{kind="radius" type="Радиус скругления"}
Нижняя граница `rounded`. По умолчанию: `2px`
:::

:::css-var[--radius-pill]{kind="radius" type="Радиус скругления"}
Радиус скругления `pill`. По умолчанию: `9999px`
:::

:::css-var[--squircle-fallback-ratio]{kind="size" type="Коэффициент"}
Уменьшает `squircle` там, где нет `corner-shape`. По умолчанию: `0.5`
:::

:::css-var[--base-control-size]{kind="size" type="Размер"}
Минимальная высота блока размера `m`. По умолчанию: `32px`
:::

:::css-var[--space-control-x-m]{kind="gap" type="Размер отступа"}
Горизонтальный отступ `size="m"`; остальные размеры читают `--space-control-x-{mini,s,l,xl}`. По умолчанию: `8px`
:::

:::css-var[--space-control-y-m]{kind="gap" type="Размер отступа"}
Вертикальный отступ `size="m"`; остальные размеры читают `--space-control-y-{mini,s,l,xl}`. По умолчанию: `6px`
:::

:::css-var[--elevation-flat-shadow]{kind="shadow" type="Тень"}
Тень `elevation="flat"`; остальные роли читают `--elevation-<role>-shadow`. По умолчанию: `var(--shadow-none)`
:::

:::css-var[--elevation-flat-z-index]{kind="size" type="Порядок наложения"}
Порядок наложения `elevation="flat"`; остальные роли читают `--elevation-<role>-z-index`. По умолчанию: `auto`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка `glass` и `plate`. По умолчанию: `color(display-p3 1 1 1 / 0.7)` в светлой теме
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие фона `glass` и `plate`. По умолчанию: `blur(64px) saturate(180%)` в светлой теме
:::

:::css-var[--glass-press-effects]{kind="blur" type="Фильтр фона"}
Размытие фона нажатых `glass` и `plate`. По умолчанию: `blur(64px) saturate(180%) brightness(1.1)`
:::

:::css-var[--gray-a3]{kind="border" type="Цвет обводки" color="var(--gray-a3)"}
Тонкая кромка `plate`. По умолчанию: `color(display-p3 0.004 0.004 0.204 / 0.059)` в светлой теме
:::

:::css-var[--focus-color]{kind="border" type="Цвет обводки" color="var(--focus-color)"}
Цвет кольца фокуса. По умолчанию: `color(display-p3 0 0 0)` в светлой теме
:::

:::css-var[--solid-1]{kind="fill" type="Цвет заливки" color="var(--solid-1)"}
Нейтральная заливка `solid`. По умолчанию: `var(--gray-9)`
:::

:::css-var[--background-1]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Текст на нейтральной заливке `solid` и основа, с которой смешивается подкраска `color`. По умолчанию: `var(--gray-1)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Нейтральная полупрозрачная заливка. По умолчанию: `var(--gray-a3)`
:::

:::css-var[--interactive-a3]{kind="fill" type="Цвет заливки" color="var(--interactive-a3)"}
Нейтральная полупрозрачная заливка при нажатии. По умолчанию: `var(--gray-a5)`
:::

:::css-var[--interactive-1]{kind="fill" type="Цвет заливки" color="var(--interactive-1)"}
Нейтральная заливка `pale`. По умолчанию: `var(--gray-3)`
:::

:::css-var[--interactive-3]{kind="fill" type="Цвет заливки" color="var(--interactive-3)"}
Нейтральная заливка `pale` при нажатии. По умолчанию: `var(--gray-5)`
:::

:::css-var[--border-a2]{kind="border" type="Цвет обводки" color="var(--border-a2)"}
Нейтральная обводка. По умолчанию: `var(--gray-a7)`
:::

:::css-var[--border-a3]{kind="border" type="Цвет обводки" color="var(--border-a3)"}
Нейтральная усиленная обводка. По умолчанию: `var(--gray-a8)`
:::

:::css-var[--text-1]{kind="text" type="Цвет текста" color="var(--text-1)"}
Нейтральный текст и то, с чем смешивается текст подкраски `color`. По умолчанию: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет нейтрального текста. По умолчанию: `var(--gray-12)`
:::

:::css-var[--accent-9]{kind="fill" type="Цвет заливки" color="var(--accent-9)"}
Акцентная заливка `solid`. По умолчанию: `var(--blue-9)`
:::

:::css-var[--accent-a3]{kind="fill" type="Цвет заливки" color="var(--accent-a3)"}
Акцентная полупрозрачная заливка. По умолчанию: `var(--blue-a3)`
:::

:::css-var[--accent-a5]{kind="fill" type="Цвет заливки" color="var(--accent-a5)"}
Акцентная полупрозрачная заливка при нажатии. По умолчанию: `var(--blue-a5)`
:::

:::css-var[--accent-3]{kind="fill" type="Цвет заливки" color="var(--accent-3)"}
Акцентная заливка `pale`. По умолчанию: `var(--blue-3)`
:::

:::css-var[--accent-5]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Акцентная заливка `pale` при нажатии. По умолчанию: `var(--blue-5)`
:::

:::css-var[--accent-a7]{kind="border" type="Цвет обводки" color="var(--accent-a7)"}
Акцентная обводка. По умолчанию: `var(--blue-a7)`
:::

:::css-var[--accent-a9]{kind="border" type="Цвет обводки" color="var(--accent-a9)"}
Акцентная усиленная обводка. По умолчанию: `var(--blue-a9)`
:::

:::css-var[--accent-11]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет акцентного текста. По умолчанию: `var(--blue-11)`
:::

:::css-var[--white]{kind="text" type="Цвет текста" color="var(--white)"}
Текст на заливке `solid` акцентного, `danger`, `success` и `warning` тонов. По умолчанию: `color(display-p3 1 1 1)`
:::

:::css-var[--danger-solid-1]{kind="fill" type="Цвет заливки" color="var(--danger-solid-1)"}
Заливка `solid` тона `danger`. По умолчанию: `var(--red-9)`
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет текста тона `danger`. По умолчанию: `var(--red-11)`
:::
::::
