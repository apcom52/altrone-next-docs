# Breadcrumbs

CSS-переменные, которые читает `Breadcrumbs` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у `Breadcrumbs` — надёжный способ изменить их для одних крошек: значение в нём сильнее значений по умолчанию.

```tsx
<Breadcrumbs
  style={{
    "--breadcrumbs-text-size": "16px",
    "--breadcrumbs-item-text-color": "var(--text-1)",
    "--breadcrumbs-current-item-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</Breadcrumbs>
```

::playground{src=breadcrumbs/BreadcrumbsCssVarsDemo caption="Крупнее шрифт, тёмные крошки и красная текущая страница"}

Цвет при наведении (`--breadcrumbs-item-hover-text-color`) меняйте вместе с обычным цветом крошки. Текущая страница не реагирует на наведение и всегда сохраняет свой цвет. Жирное начертание текущей крошки и расстояния между элементами заданы самим компонентом и не переопределяются.
:::

## Внутренние переменные

Определены самим компонентом.

::::css-vars
:::css-var[--breadcrumbs-item-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста и иконки крошки. По умолчанию: `var(--text-2)`
:::

:::css-var[--breadcrumbs-item-hover-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет крошки при наведении и фокусе. По умолчанию: `var(--accent-11)`
:::

:::css-var[--breadcrumbs-current-item-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текущей страницы. По умолчанию: `var(--accent-12)`
:::

:::css-var[--breadcrumbs-text-size]{kind="font" type="Размер шрифта"}
Размер текста крошки. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--breadcrumbs-icon-size]{kind="size" type="Размер"}
Размер иконки крошки. По умолчанию: `16px`
:::

:::css-var[--breadcrumbs-separator-color]{kind="text" type="Цвет текста" color="var(--border-3)"}
Цвет разделителя. По умолчанию: `var(--border-3)`
:::

:::css-var[--breadcrumbs-separator-size]{kind="size" type="Размер"}
Размер разделителя. По умолчанию: `16px`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--l-gap]{kind="gap" type="Отступ"}
Расстояние между крошками.
:::

:::css-var[--gap]{kind="gap" type="Отступ"}
Расстояние между крошкой и её разделителем.
:::

:::css-var[--s-gap]{kind="gap" type="Отступ"}
Расстояние между иконкой и текстом крошки.
:::
::::
