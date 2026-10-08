# Splitter

CSS-переменные, которые читает `Splitter` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
`className` и `style`, переданные `Splitter`, попадают на его корневой элемент, а переменные наследуются разделителями и панелями внутри. Переопределяйте их через `style`:

```tsx
<Splitter
  style={{
    "--splitter-handle-color": "var(--accent-a6)",
    "--splitter-handle-length": "56px",
  } as React.CSSProperties}
>
  ...
</Splitter>
```

::playground{src=splitter/SplitterCssVarsDemo caption="Окрашенная и более длинная ручка"}

Что переопределить нельзя:

- **Какие цвета ручка использует в каждом состоянии.** Цвета при наведении и перетаскивании — отдельные переменные, поэтому если переопределить только `--splitter-handle-color`, реакция на наведение и перетаскивание останется прежней.
- **Направление раскладки и `flex` панелей.** Они задаются из `orientation` и текущих размеров.
:::

## Внутренние переменные

Определены самим `Splitter`.

::::css-vars
:::css-var[--splitter-gutter]{kind="size" type="Размер"}
Видимая ширина полосы между двумя панелями. По умолчанию: `10px`
:::

:::css-var[--splitter-touch-hit-area]{kind="size" type="Размер"}
Невидимая область касания и наведения вокруг полосы. По умолчанию: `24px`
:::

:::css-var[--splitter-handle-length]{kind="size" type="Размер"}
Длина ручки вдоль разделителя. По умолчанию: `32px`
:::

:::css-var[--splitter-handle-thickness]{kind="size" type="Размер"}
Толщина ручки поперёк разделителя. По умолчанию: `6px`
:::

:::css-var[--splitter-handle-color]{kind="fill" type="Цвет заливки" color="var(--border-a3)"}
Ручка в покое. По умолчанию: `var(--border-a3)`
:::

:::css-var[--splitter-handle-hover-color]{kind="fill" type="Цвет заливки" color="var(--solid-a1)"}
Ручка при наведении на разделитель. По умолчанию: `var(--solid-a1)`
:::

:::css-var[--splitter-handle-active-color]{kind="fill" type="Цвет заливки" color="var(--accent-a12)"}
Ручка при перетаскивании или фокусе. По умолчанию: `var(--accent-a12)`
:::

:::css-var[--splitter-panel-transition]{kind="size" type="Переход"}
Длительность и функция сворачивания и разворачивания панели. По умолчанию: `var(--motion-duration-base) var(--motion-easing-standard)`
:::
::::

## Глобальные переменные

Не определены самим `Splitter`: дизайн-токены, которые он читает напрямую. Кнопки сворачивания и разворачивания — обычные `Button`, поэтому действуют и их собственные переменные — см. [CSS-переменные Button](/ru/components/controls/button/css-vars).

::::css-vars
:::css-var[--xl-gap]{kind="gap" type="Отступ"}
Отступ кнопок сворачивания и разворачивания от ручки. По умолчанию: `var(--xl-gap)`
:::

:::css-var[--radius-pill]{kind="radius" type="Радиус скругления"}
Скругление ручки. По умолчанию: `var(--radius-pill)`
:::

:::css-var[--border-a3]{kind="fill" type="Цвет заливки" color="var(--border-a3)"}
Источник цвета ручки в покое. По умолчанию: `var(--border-a3)`
:::

:::css-var[--solid-a1]{kind="fill" type="Цвет заливки" color="var(--solid-a1)"}
Источник цвета ручки при наведении. По умолчанию: `var(--solid-a1)`
:::

:::css-var[--accent-a12]{kind="fill" type="Цвет заливки" color="var(--accent-a12)"}
Источник цвета активной ручки. По умолчанию: `var(--accent-a12)`
:::

:::css-var[--motion-duration-fast]{kind="size" type="Переход"}
Длительность смены цвета ручки и кнопок. По умолчанию: `var(--motion-duration-fast)`
:::

:::css-var[--motion-duration-base]{kind="size" type="Переход"}
Длительность изменения размера панели. По умолчанию: `var(--motion-duration-base)`
:::

:::css-var[--motion-easing-standard]{kind="size" type="Переход"}
Функция плавности всех переходов `Splitter`. По умолчанию: `var(--motion-easing-standard)`
:::
::::
