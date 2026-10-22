# Pagination

CSS-переменные, которые читает `Pagination` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения (кроме `--pagination-gap` — она задана на самой полосе), поэтому проп `style` у `Pagination` — надёжный способ изменить их для одной полосы: значение в нём сильнее значений по умолчанию.

```tsx
<Pagination
  totalPages={12}
  style={{
    "--pagination-background": "var(--background-a2)",
    "--pagination-rounding": "4px",
    "--pagination-gap": "8px",
  } as React.CSSProperties}
/>
```

::playground{src=pagination/PaginationCssVarsDemo caption="Фон, меньшее скругление и больший отступ"}

Скругление полосы вычисляется как `--pagination-rounding` плюс `--pagination-gap`, чтобы кнопки внутри оставались концентричными её краю. Размер многоточия задаёт проп `size`. Сами кнопки — это `Button`: их цвета и скругления настраиваются [переменными кнопки](/ru/components/controls/button/css-vars), а не переменными полосы.
:::

## Внутренние переменные

Определены самим компонентом. Размер многоточия показан для `size="m"`; другие размеры подставляют свои.

::::css-vars
:::css-var[--pagination-background]{kind="fill" type="Цвет заливки" color="transparent"}
Фон полосы. По умолчанию: `transparent`
:::

:::css-var[--pagination-rounding]{kind="radius" type="Скругление"}
Скругление кнопок внутри полосы. По умолчанию: `var(--radius-m)`
:::

:::css-var[--pagination-gap]{kind="gap" type="Отступ"}
Отступ между краем полосы и кнопками. По умолчанию: `4px`
:::

:::css-var[--pagination-ellipsis-size]{kind="size" type="Размер"}
Ширина и высота многоточия. По умолчанию: `32px`
:::

:::css-var[--pagination-ellipsis-font-size]{kind="font" type="Размер шрифта"}
Размер знака многоточия. По умолчанию: `var(--text-size-4)`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--radius-m]{kind="radius" type="Скругление"}
Значение по умолчанию для `--pagination-rounding`.
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет многоточия.
:::

:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Значение по умолчанию для `--pagination-ellipsis-font-size`.
:::
::::
