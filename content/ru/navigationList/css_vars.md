# NavigationList

CSS-переменные, которые читает `NavigationList` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у списка — надёжный способ изменить их для одного списка: значение в нём сильнее значений по умолчанию.

```tsx
<NavigationList
  style={{
    "--navigation-list-width": "220px",
    "--navigation-list-rounding": "12px",
    "--navigation-list-link-selected-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</NavigationList>
```

::playground{src=navigationList/NavigationListCssVarsDemo caption="Узкий список, меньшее скругление и красный выбранный пункт"}

Подсветка при наведении и фон выбранной ссылки — это отдельные переменные: меняйте обе, если переопределяете оформление состояний.
:::

## Внутренние переменные

Определены самим списком.

::::css-vars
:::css-var[--navigation-list-width]{kind="size" type="Размер"}
Ширина списка. По умолчанию: `300px`
:::

:::css-var[--navigation-list-rounding]{kind="radius" type="Скругление"}
Скругление углов списка. По умолчанию: `24px`
:::

:::css-var[--navigation-list-padding]{kind="gap" type="Отступ"}
Отступ вокруг содержимого списка. По умолчанию: `4px`
:::

:::css-var[--navigation-list-content-padding]{kind="gap" type="Отступ"}
Отступ ссылок внутри прокручиваемой области. По умолчанию: `4px`
:::

:::css-var[--navigation-list-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон списка. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--navigation-list-chrome-background-color]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Фон шапки и подвала. По умолчанию: `var(--background-1)`
:::

:::css-var[--navigation-list-chrome-border-color]{kind="border" type="Цвет границы" color="var(--border-1)"}
Граница между шапкой или подвалом и ссылками. По умолчанию: `var(--border-1)`
:::

:::css-var[--navigation-list-group-text-size]{kind="font" type="Размер шрифта"}
Размер заголовка группы. По умолчанию: `12px`
:::

:::css-var[--navigation-list-group-text-color]{kind="text" type="Цвет текста" color="var(--text-1)"}
Цвет заголовка группы. По умолчанию: `var(--text-1)`
:::

:::css-var[--navigation-list-link-background-color]{kind="fill" type="Цвет заливки" color="transparent"}
Фон ссылки. По умолчанию: `transparent`
:::

:::css-var[--navigation-list-link-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Подсветка при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--navigation-list-link-rounding]{kind="radius" type="Скругление"}
Скругление ссылки и подсветки. По умолчанию: `16px`
:::

:::css-var[--navigation-list-link-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста и иконки ссылки. По умолчанию: `var(--text-2)`
:::

:::css-var[--navigation-list-link-text-size]{kind="font" type="Размер шрифта"}
Размер текста ссылки. По умолчанию: `14px`
:::

:::css-var[--navigation-list-link-icon-size]{kind="size" type="Размер"}
Размер иконки ссылки. По умолчанию: `18px`
:::

:::css-var[--navigation-list-link-selected-background-color]{kind="fill" type="Цвет заливки" color="var(--background-1)"}
Фон выбранной ссылки. По умолчанию: `var(--background-1)`
:::

:::css-var[--navigation-list-link-selected-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста выбранной ссылки. По умолчанию: `var(--accent-12)`
:::

:::css-var[--navigation-list-secondary-link-border-color]{kind="border" type="Цвет границы" color="var(--border-1)"}
Линия рядом со ссылками третьего уровня. По умолчанию: `var(--border-1)`
:::
::::

## Глобальные переменные

Не определены самим списком, но влияют на его вид.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Значение по умолчанию для `--navigation-list-background-color`.
:::

:::css-var[--disabled-text-color]{kind="text" type="Цвет текста" color="var(--disabled-text-color)"}
Цвет текста и иконки отключённой ссылки.
:::

:::css-var[--space-content]{kind="gap" type="Отступ"}
Внутренний отступ шапки и подвала.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Тень"}
Тень списка.
:::
::::
