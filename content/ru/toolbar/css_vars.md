# Toolbar

CSS-переменные, которые читает `Toolbar` и которые можно переопределить.

:::spoiler[Как переопределить переменные]
`className` и `style` попадают на корневой элемент `Toolbar`, поэтому переменные, заданные через `style`, действуют только на этот тулбар. Инлайн-переменные побеждают значения, заданные через `size`:

```tsx
<Toolbar
  style={{ "--toolbar-size": "72px", "--toolbar-inset": "24px" } as React.CSSProperties}
>
  ...
</Toolbar>
```

::playground{src=toolbar/ToolbarCssVarsDemo caption="Более высокий тулбар с увеличенными отступами"}

Чтобы изменить все тулбары сразу, задайте переменные в своих стилях, но на самом `Toolbar`, а не на родителе: `size` назначает `--toolbar-size`, `--toolbar-inset`, `--toolbar-title-size`, `--toolbar-title-line-height` и `--toolbar-logo-size` на корне, и это сильнее унаследованного значения.

Что нельзя переопределить:

- **Баланс секций.** Ширины `Toolbar.Leading` и `Toolbar.Trailing` измеряются и выставляются из скрипта.
- **Тень пилюли группы.** Она берётся из глобальной роли elevation `sticky`, а не из переменной тулбара.
:::

## Внутренние переменные

Определены самим `Toolbar`.

::::css-vars
:::css-var[--toolbar-size]{kind="size" type="Размер"}
Высота тулбара (ширина, если он вертикальный). По умолчанию: `56px`
:::

:::css-var[--toolbar-inset]{kind="gap" type="Отступ"}
Отступ по краям тулбара. По умолчанию: `12px`
:::

:::css-var[--toolbar-inset-start]{kind="gap" type="Отступ"}
Отступ у начального края; задайте отдельно, чтобы обойти сайдбар. По умолчанию: `var(--toolbar-inset)`
:::

:::css-var[--toolbar-inset-end]{kind="gap" type="Отступ"}
Отступ у конечного края. По умолчанию: `var(--toolbar-inset)`
:::

:::css-var[--toolbar-gap]{kind="gap" type="Отступ"}
Расстояние между группами и секциями. По умолчанию: `var(--gap)`
:::

:::css-var[--toolbar-background]{kind="fill" type="Цвет заливки" color="var(--accent-a3)"}
Заливка тулбара `solid`; по умолчанию не задана, поэтому действует заливка по умолчанию. По умолчанию: `var(--toolbar-glass-fill)`
:::

:::css-var[--toolbar-glass-fill]{kind="fill" type="Цвет заливки" color="var(--accent-a3)"}
Акцентно-тонированная заливка тулбара `solid`. По умолчанию: `var(--color-header-backdrop)`
:::

:::css-var[--toolbar-glass-blur]{kind="blur" type="Размытие"}
Размытие фона тулбара `solid`. По умолчанию: `blur(32px) saturate(180%)`, светлая тема
:::

:::css-var[--toolbar-glass-rim]{kind="border" type="Цвет границы" color="var(--glass-border-color)"}
Хайрлайн на кромке тулбара `solid`, обращённой к контенту. По умолчанию: `var(--glass-border-color)`
:::

:::css-var[--toolbar-glass-highlight]{kind="border" type="Цвет границы" color="rgb(255 255 255 / 0.55)" dark="rgb(255 255 255 / 0.12)"}
Светлая подсветка по верхней кромке тулбара `solid`. По умолчанию: `rgb(255 255 255 / 0.55)`, светлая тема
:::

:::css-var[--toolbar-pill-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка пилюли группы. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--toolbar-pill-blur]{kind="blur" type="Размытие"}
Размытие фона пилюли группы. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--toolbar-title-size]{kind="font" type="Размер шрифта"}
Размер шрифта `Toolbar.Title`. По умолчанию: `var(--text-size-5)`
:::

:::css-var[--toolbar-title-line-height]{kind="font" type="Высота строки"}
Высота строки `Toolbar.Title`. По умолчанию: `var(--line-height-5)`
:::

:::css-var[--toolbar-logo-size]{kind="size" type="Размер"}
Ширина и высота `Toolbar.Logo`. По умолчанию: `32px`
:::
::::

## Глобальные переменные

Не определены `Toolbar`: глобальные дизайн-токены, которые он читает напрямую.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Значение, в которое разрешается `--toolbar-gap`. По умолчанию: `8px`
:::

:::css-var[--xs-gap]{kind="gap" type="Отступ"}
Отступ внутри пилюли группы, вокруг заголовка и разделителей. По умолчанию: `4px`
:::

:::css-var[--narrow-gap]{kind="gap" type="Отступ"}
Расстояние между действиями внутри группы. По умолчанию: `2px`
:::

:::css-var[--radius-pill]{kind="radius" type="Радиус скругления"}
Радиус скругления пилюли группы. По умолчанию: `9999px`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Цвет, в который разрешается `--toolbar-pill-fill`. По умолчанию (светлая тема): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Размытие"}
Размытие, в которое разрешается `--toolbar-pill-blur`. По умолчанию (светлая тема): `blur(64px) saturate(180%)`
:::

:::css-var[--glass-border-color]{kind="border" type="Цвет границы" color="var(--glass-border-color)"}
Цвет, в который разрешается `--toolbar-glass-rim`. По умолчанию (светлая тема): `color(display-p3 0 0 0 / 0.08)`
:::

:::css-var[--color-header-backdrop]{kind="fill" type="Цвет заливки" color="var(--accent-a3)"}
Цвет, в который разрешается `--toolbar-glass-fill`; следует `accent` у `Application`. По умолчанию: `var(--accent-a3)`
:::

:::css-var[--border-1]{kind="border" type="Цвет границы" color="var(--gray-6)"}
Цвет разделителя `line`. По умолчанию (светлая тема): `var(--gray-6)`
:::

:::css-var[--text-12]{kind="text" type="Цвет текста" color="var(--text-12)"}
Цвет `Toolbar.Title`.
:::

:::css-var[--text-weight-bold]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта `Toolbar.Title`. По умолчанию: `600`
:::

:::css-var[--gray-a8]{kind="fill" type="Цвет заливки" color="var(--gray-a8)"}
Начальный цвет градиентной подложки `showBackdrop`.
:::

:::css-var[--elevation-sticky-shadow]{kind="shadow" type="Тень"}
Тень пилюли группы и закреплённого тулбара `solid` со `sticky`. По умолчанию: `var(--shadow-1)`
:::

:::css-var[--elevation-sticky-z-index]{kind="size" type="Размер"}
`z-index` тулбара со `sticky`. По умолчанию: `var(--level-sticky)`
:::
::::
