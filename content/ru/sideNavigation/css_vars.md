# SideNavigation

CSS-переменные, которые читает `SideNavigation` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у `SideNavigation` — надёжный способ изменить их для одного оглавления: значение в нём сильнее значений по умолчанию.

```tsx
<SideNavigation
  title="On this page"
  style={{
    "--side-navigation-link-text-color": "var(--text-1)",
    "--side-navigation-link-active-text-color": "var(--danger-text-1)",
    "--side-navigation-link-text-size": "16px",
  } as React.CSSProperties}
>
  ...
</SideNavigation>
```

::playground{src=sideNavigation/SideNavigationCssVarsDemo caption="Тёмные ссылки, красный акцент и крупнее шрифт"}

Цвет, заданный в `--side-navigation-link-active-text-color`, используется и для подсвеченной ссылки, и для ссылки при наведении и фокусе, поэтому менять его стоит осознанно. Заголовок берёт цвет из `--side-navigation-link-text-color`, а его размер и начертание заданы самим компонентом и не переопределяются.
:::

## Внутренние переменные

Определены самим компонентом.

::::css-vars
:::css-var[--side-navigation-link-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет ссылок и заголовка. По умолчанию: `var(--text-2)`
:::

:::css-var[--side-navigation-link-active-text-color]{kind="text" type="Цвет текста" color="var(--accent-11)"}
Цвет подсвеченной ссылки и ссылки при наведении. По умолчанию: `var(--accent-11)`
:::

:::css-var[--side-navigation-link-text-size]{kind="font" type="Размер шрифта"}
Размер текста ссылки. По умолчанию: `14px`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Расстояние между ссылками, между заголовком и списком, а также горизонтальный отступ оглавления.
:::

:::css-var[--l-gap]{kind="gap" type="Отступ"}
Отступ вложенных ссылок и верхний отступ списка.
:::

:::css-var[--xl-gap]{kind="gap" type="Отступ"}
Вертикальный отступ вокруг оглавления.
:::
::::
