# Avatar

CSS-переменные, которые читает `Avatar` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому проп `style` у `Avatar` — надёжный способ изменить их для одного аватара: значение в нём сильнее и значений по умолчанию, и значений, заданных размером `size`.

```tsx
<Avatar
  firstName="Alex"
  lastName="Morgan"
  style={{
    "--avatar-size": "64px",
    "--avatar-text-size": "26px",
  } as React.CSSProperties}
/>
```

::playground{src=avatar/AvatarCssVarsDemo caption="Нестандартный размер и более тонкие инициалы"}

Размеры (`--avatar-size`, `--avatar-image-size`, `--avatar-text-size`, `--avatar-icon-size`) задаёт проп `size`; при нестандартном размере меняйте их вместе, а `--avatar-image-size` держите чуть меньше `--avatar-size`. Фон и цвет текста через переменные не настраиваются — для них есть пропы `backgroundColor` и `textColor`.
:::

## Внутренние переменные

Определены самим компонентом. Значения размеров показаны для `size="m"`; другие размеры подставляют свои.

::::css-vars
:::css-var[--avatar-size]{kind="size" type="Размер"}
Диаметр аватара. По умолчанию: `32px`
:::

:::css-var[--avatar-image-size]{kind="size" type="Размер"}
Диаметр фотографии внутри аватара. По умолчанию: `28px`
:::

:::css-var[--avatar-text-size]{kind="font" type="Размер шрифта"}
Размер инициалов. По умолчанию: `16px`
:::

:::css-var[--avatar-text-weight]{kind="font" type="Начертание"}
Начертание инициалов. По умолчанию: `var(--text-weight-bold)`
:::

:::css-var[--avatar-icon-size]{kind="size" type="Размер"}
Размер иконки. По умолчанию: `18px`
:::

:::css-var[--avatar-sheen-color]{kind="fill" type="Цвет заливки" color="rgba(255, 255, 255, 0.25)"}
Блик в левом верхнем углу, одинаковый в обеих темах. По умолчанию: `rgba(255, 255, 255, 0.25)`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--category-1]{kind="fill" type="Цвет заливки" color="var(--category-1)"}
Фон, выбранный по имени, когда нет `backgroundColor`. Берётся одна из десяти переменных `--category-1`…`--category-10`.
:::

:::css-var[--text-weight-bold]{kind="font" type="Начертание"}
Значение по умолчанию для `--avatar-text-weight`.
:::
::::
