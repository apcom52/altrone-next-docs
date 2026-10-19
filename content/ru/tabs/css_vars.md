# Tabs

CSS-переменные, которые читает `Tabs` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у `Tabs` — надёжный способ изменить их для одной полосы: значение в нём сильнее и значений по умолчанию, и значений, заданных размером `size`.

```tsx
<Tabs
  style={{
    "--tabs-background-color": "var(--accent-3)",
    "--tabs-item-active-background-color": "var(--accent-9)",
    "--tabs-item-rounding": "6px",
  } as React.CSSProperties}
>
  ...
</Tabs>
```

::playground{src=tabs/TabsCssVarsDemo caption="Цветная полоса и меньшее скругление вкладок"}

Размеры вкладки (`--tabs-item-size`, `--tabs-item-icon-size`, `--tabs-item-font-size`, отступы) задаёт проп `size`; переопределяйте их, только если ни один из пяти размеров не подходит, и меняйте вместе с высотой самой полосы. `--tabs-item-background-color` управляет состояниями вкладки — не переопределяйте его, меняйте `--tabs-item-hover-background-color`. Цвет и размер бейджа принадлежат самому бейджу и здесь не настраиваются.
:::

## Внутренние переменные

Определены самим компонентом. Значения размеров показаны для `size="m"`; другие размеры подставляют свои.

::::css-vars
:::css-var[--tabs-background-color]{kind="fill" type="Цвет заливки" color="var(--background-a2)"}
Фон полосы. По умолчанию: `var(--background-a2)`
:::

:::css-var[--tabs-border-color]{kind="border" type="Цвет границы" color="var(--border-a1)"}
Граница полосы. По умолчанию: `var(--border-a1)`
:::

:::css-var[--tabs-item-hover-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Фон вкладки при наведении и фокусе. По умолчанию: `var(--interactive-a2)`
:::

:::css-var[--tabs-item-active-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Подложка выбранной вкладки. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--tabs-item-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста и иконки вкладки. По умолчанию: `var(--text-2)`
:::

:::css-var[--tabs-item-size]{kind="size" type="Размер"}
Высота вкладки. По умолчанию: `24px`
:::

:::css-var[--tabs-item-icon-size]{kind="size" type="Размер"}
Размер иконки вкладки. По умолчанию: `16px`
:::

:::css-var[--tabs-item-font-size]{kind="font" type="Размер шрифта"}
Размер подписи вкладки. По умолчанию: `14px`
:::

:::css-var[--tabs-item-rounding]{kind="radius" type="Скругление"}
Скругление вкладки и подложки. По умолчанию: `12px`
:::

:::css-var[--tabs-item-padding-x]{kind="gap" type="Отступ"}
Горизонтальный отступ внутри вкладки. По умолчанию: `8px`
:::

:::css-var[--tabs-item-padding-y]{kind="gap" type="Отступ"}
Вертикальный отступ внутри вкладки. По умолчанию: `4px`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Значение по умолчанию для `--tabs-item-active-background-color`.
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста и иконки отключённой вкладки.
:::

:::css-var[--s-gap]{kind="gap" type="Отступ"}
Расстояние между вкладками.
:::

:::css-var[--space-inline]{kind="gap" type="Отступ"}
Расстояние между иконкой, подписью и бейджем.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Тень"}
Тень подложки выбранной вкладки.
:::
::::
