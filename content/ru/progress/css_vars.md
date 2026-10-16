# Progress

CSS-переменные, которые читает `Progress` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Переменные задаются на корневом элементе полосы, поэтому проп `style` — надёжный способ изменить их у одной полосы: инлайновое значение перебивает значение по умолчанию и значения из классов размера.

```tsx
<Progress
  value={70}
  style={{
    "--progress-active-background-color": "var(--teal-9)",
    "--progress-text-color": "var(--teal-12)",
  } as React.CSSProperties}
/>
```

::playground{src=progress/ProgressCssVarsDemo caption="Бирюзовая заливка и высота 40px"}

Фон пустой части задаёт `Box`, на котором построена полоса, и отдельной переменной `--progress-*` у него нет.
:::

## Внутренние переменные

Определены самой полосой.

::::css-vars
:::css-var[--progress-active-background-color]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Заливка выполненной части. По умолчанию: `var(--accent-5)`
:::

:::css-var[--progress-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет подписи. По умолчанию: `var(--accent-12)`
:::

:::css-var[--progress-height]{kind="size" type="Размер"}
Высота полосы. По умолчанию: `32px`
:::

:::css-var[--progress-padding-inline]{kind="gap" type="Размер отступа"}
Горизонтальный отступ подписи. По умолчанию: `8px`
:::
::::

## Глобальные переменные

Не определены полосой, но задают значения её переменных по умолчанию.

::::css-vars
:::css-var[--accent-5]{kind="fill" type="Цвет заливки" color="var(--accent-5)"}
Заливка выполненной части.
:::

:::css-var[--accent-12]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет подписи.
:::
::::
