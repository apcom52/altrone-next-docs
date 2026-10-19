# BottomNavigation

CSS-переменные, которые читает `BottomNavigation` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у `BottomNavigation` — надёжный способ изменить их для одной панели: значение в нём сильнее значений по умолчанию.

```tsx
<BottomNavigation
  style={{
    "--bottom-navigation-rounding": "12px",
    "--bottom-navigation-link-rounding": "8px",
    "--bottom-navigation-selected-link-text-color": "var(--danger-text-1)",
  } as React.CSSProperties}
>
  ...
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationCssVarsDemo caption="Меньшее скругление и красный выбранный раздел"}

Скругление ссылки и подложки задаёт одна переменная, `--bottom-navigation-link-rounding`, поэтому меняйте скругление панели и ссылки согласованно: ссылка должна лежать в панели концентрично. Фон самой панели и её тень берутся из глобальных переменных и здесь не настраиваются.
:::

## Внутренние переменные

Определены самим компонентом.

::::css-vars
:::css-var[--bottom-navigation-link-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет иконки и подписи ссылки. По умолчанию: `var(--text-2)`
:::

:::css-var[--bottom-navigation-selected-link-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет иконки и подписи выбранной ссылки. По умолчанию: `var(--accent-11)`
:::

:::css-var[--bottom-navigation-link-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Подложка под выбранной ссылкой. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--bottom-navigation-link-icon-size]{kind="size" type="Размер"}
Размер иконки ссылки. По умолчанию: `24px`
:::

:::css-var[--bottom-navigation-link-text-size]{kind="font" type="Размер шрифта"}
Размер подписи ссылки. По умолчанию: `12px`
:::

:::css-var[--bottom-navigation-link-rounding]{kind="radius" type="Скругление"}
Скругление ссылки и подложки. По умолчанию: `18px`
:::

:::css-var[--bottom-navigation-link-min-width]{kind="size" type="Размер"}
Минимальная ширина ссылки. По умолчанию: `64px`
:::

:::css-var[--bottom-navigation-rounding]{kind="radius" type="Скругление"}
Скругление панели. По умолчанию: `22px`
:::

:::css-var[--bottom-navigation-padding]{kind="gap" type="Отступ"}
Отступ между краем панели и ссылками. По умолчанию: `4px`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Фон панели и значение по умолчанию для `--bottom-navigation-link-backdrop-color`.
:::

:::css-var[--elevation-raised-shadow]{kind="shadow" type="Тень"}
Тень панели и подложки выбранной ссылки.
:::
::::
