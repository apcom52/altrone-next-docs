# Tooltip

CSS-переменные, которые читает `Tooltip` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
В отличие от большинства других пропов, `className`/`style`, переданные в `Tooltip`, попадают на саму плавающую панель, а не на триггер — поэтому `style` надёжно переопределяет переменную для одного тултипа:

```tsx
<Tooltip
  content="A themed tooltip"
  style={{ "--tooltip-background-color": "var(--accent-9)", "--tooltip-text-color": "white" } as React.CSSProperties}
>
  <Box shape="rounded" material="translucent" padding={{ x: 12, y: 6 }} pressable focusable role="button" tabIndex={0}>
    Hover me
  </Box>
</Tooltip>
```

::playground{src=tooltip/TooltipCssVarsDemo caption="Переопределение цветов панели через style"}

Что нельзя переопределить:

- **Тень или обводку панели.** Их нет по замыслу — тень или тонкая обводка не может правильно обогнуть треугольник стрелки, поэтому тултип выделяется только за счёт осветления собственной заливки на фоне страницы.
- **Форму стрелки.** Её размер и радиус угла зафиксированы в компоненте; переопределить можно только цвет заливки через `--tooltip-arrow-color`.
- **Размер и форму автоматически создаваемой кнопки-триггера.** Заменить можно только её иконку, через `triggerIcon`.
:::

## Внутренние переменные

Определены самим `Tooltip`.

::::css-vars
:::css-var[--tooltip-background-color]{kind="fill" type="Цвет заливки" color="color(display-p3 0.064 0.07 0.067)"}
Заливка панели — «инвертированная» поверхность, тёмная даже в светлой теме. По умолчанию (светлая тема): `color(display-p3 0.064 0.07 0.067)`; тёмная тема: `var(--gray-6)`
:::

:::css-var[--tooltip-text-color]{kind="text" type="Цвет текста" color="color(display-p3 0.927 0.933 0.93)"}
Цвет текста панели. По умолчанию: `color(display-p3 0.927 0.933 0.93)`
:::

:::css-var[--tooltip-arrow-color]{kind="fill" type="Цвет заливки" color="var(--tooltip-background-color)"}
Заливка стрелки — по умолчанию совпадает с панелью, поэтому стрелка читается как её заострённое продолжение. По умолчанию: `var(--tooltip-background-color)`
:::

:::css-var[--tooltip-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления панели, задаёт окружающий `--radius-outer`. По умолчанию: `10px`
:::

:::css-var[--tooltip-button-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста/иконки автоматически создаваемой кнопки `?`. По умолчанию: `var(--text-2)`
:::

:::css-var[--tooltip-button-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка автоматически создаваемой кнопки `?`. По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--tooltip-button-border-color]{kind="border" type="Цвет обводки" color="var(--border-1)"}
Цвет обводки автоматически создаваемой кнопки `?`. По умолчанию: `var(--border-1)`
:::
::::

## Глобальные переменные

Не определены самим `Tooltip`: глобальные токены дизайн-системы, которые напрямую читают панель и автоматически создаваемая кнопка-триггер. Изменение такого токена перекрасит сразу все тултипы в приложении.

::::css-vars
:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Источник значения по умолчанию для `--tooltip-button-text-color`. По умолчанию: `var(--gray-12)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Источник значения по умолчанию для `--tooltip-button-background-color`. По умолчанию (светлая тема): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--border-1]{kind="border" type="Цвет обводки" color="var(--border-1)"}
Источник значения по умолчанию для `--tooltip-button-border-color`. По умолчанию: `var(--gray-6)`
:::

:::css-var[--text-weight-medium]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта содержимого панели. По умолчанию: `500`
:::

:::css-var[--text-size-3]{kind="font" type="Размер шрифта"}
Размер шрифта содержимого панели и `title`. По умолчанию: `12px`
:::

:::css-var[--line-height-3]{kind="font" type="Размер шрифта"}
Высота строки содержимого панели и `title`. По умолчанию: `16px`
:::

:::css-var[--text-weight-bold]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта `title`. По умолчанию: `600`
:::

:::css-var[--solid-2]{kind="text" type="Цвет текста" color="var(--solid-2)"}
Цвет бейджа `kbd`. По умолчанию: `var(--gray-10)`
:::

:::css-var[--radius-circle]{kind="radius" type="Радиус скругления"}
Радиус скругления автоматически создаваемой кнопки `?`. По умолчанию: `50%`
:::

:::css-var[--level-tooltip]{kind="size" type="Z-index"}
Z-index панели. По умолчанию: `1080`
:::
::::
