# Dropdown

CSS-переменные, которые читает `Dropdown` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Внутренние переменные ниже задаются на каждом элементе `Dropdown.Action`/`Dropdown.Checkbox`/`Dropdown.RadioItem`, поэтому `style` — надёжный способ изменить их для одного пункта:

```tsx
<Dropdown.Action
  label="Highlighted item"
  icon={<Star />}
  style={{ "--dropdown-background-color": "var(--accent-3)", "--dropdown-text-color": "var(--accent-11)" } as React.CSSProperties}
/>
```

::playground{src=dropdown/DropdownCssVarsDemo caption="Переопределение цветов одного пункта через style"}

Что нельзя переопределить:

- **Заливку, блюр, тень и радиус скругления плавающей панели.** Панель — это `Popover` под капотом, см. CSS-переменные [Popover](/ru/components/overlays/popover).
- **Радиус скругления меню.** Он выводится автоматически из окружающего `--radius-outer` по концентрической формуле радиуса — см. раздел «Radius scope» в [Box](/ru/components/layout/box) — отдельной переменной `--dropdown-radius` не существует.
- **Шеврон `Dropdown.ChildMenu` и галочку `Dropdown.Checkbox`/`Dropdown.RadioItem`.** Это фиксированные иконки, они не выведены через проп или переменную.
:::

## Внутренние переменные

Определены самим `Dropdown`.

::::css-vars
:::css-var[--dropdown-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Фон пункта меню в покое и при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--dropdown-press-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Фон пункта меню при нажатии. По умолчанию: `var(--interactive-a2)`
:::

:::css-var[--dropdown-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста пункта меню. По умолчанию: `var(--text-2)`
:::

:::css-var[--dropdown-hint-text-color]{kind="text" type="Цвет текста" color="var(--solid-1)"}
Цвет `hintText`. По умолчанию: `var(--solid-1)`
:::

:::css-var[--dropdown-opened-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a3)"}
Фон пункта `Dropdown.ChildMenu`, пока открыто его подменю. По умолчанию: `var(--interactive-a3)`
:::

:::css-var[--dropdown-action-height]{kind="size" type="Размер"}
Высота строки пункта меню. По умолчанию: `32px`
:::

:::css-var[--dropdown-action-padding-x]{kind="gap" type="Размер отступа"}
Горизонтальный отступ строки пункта меню. По умолчанию: `var(--space-content)`
:::

:::css-var[--dropdown-action-font-size]{kind="font" type="Размер шрифта"}
Размер шрифта названия пункта. По умолчанию: `var(--text-size-4)`
:::

:::css-var[--dropdown-action-icon-size]{kind="size" type="Размер"}
Размер иконки пункта меню. По умолчанию: `18px`
:::

:::css-var[--dropdown-menu-max-height]{kind="size" type="Размер"}
Ограничивает высоту `Dropdown.Menu`, после которой появляется скролл. По умолчанию: `320px`
:::
::::

## Глобальные переменные

Не определены самим `Dropdown`: глобальные токены дизайн-системы, которые содержимое меню читает напрямую. Изменение такого токена перекрасит сразу все меню в приложении.

::::css-vars
:::css-var[--space-inline]{kind="gap" type="Размер отступа"}
Промежуток между иконкой, названием и hint/бейджем пункта. По умолчанию: `var(--s-gap)`
:::

:::css-var[--danger-interactive-a1]{kind="fill" type="Цвет заливки" color="var(--danger-interactive-a1)"}
Фон `danger`-пункта в покое и при наведении. По умолчанию: 3-я альфа-ступень шкалы danger (светлая тема).
:::

:::css-var[--danger-interactive-a2]{kind="fill" type="Цвет заливки" color="var(--danger-interactive-a2)"}
Фон `danger`-пункта при нажатии. По умолчанию: 4-я альфа-ступень шкалы danger (светлая тема).
:::

:::css-var[--danger-text-1]{kind="text" type="Цвет текста" color="var(--danger-text-1)"}
Цвет текста `danger`-пункта. По умолчанию: `var(--red-11)`
:::

:::css-var[--accent-12]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста заголовка `Dropdown.RadioList`. По умолчанию: `var(--blue-12)`
:::

:::css-var[--text-size-3]{kind="font" type="Размер шрифта"}
Размер шрифта `hintText` и заголовка `Dropdown.RadioList`. По умолчанию: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Размер шрифта"}
Высота строки `hintText`. По умолчанию: `16px`
:::

:::css-var[--text-weight-medium]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта названия пункта меню. По умолчанию: `500`
:::

:::css-var[--text-weight-bold]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта заголовка `Dropdown.RadioList`. По умолчанию: `600`
:::

:::css-var[--font-family-code]{kind="font" type="Семейство шрифта"}
Гарнитура `hintText`. По умолчанию: `'JetBrains Mono Variable', monospace`
:::
::::
