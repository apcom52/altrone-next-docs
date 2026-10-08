# Scrollable

CSS-переменные, которые читает полоса прокрутки `Scrollable` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Полоса рисуется библиотекой OverlayScrollbars, а переменные `--os-*` объявлены прямо на элементе `.os-scrollbar` внутри обёртки. Поэтому проп `style` на `Scrollable` их не переопределит: значение, унаследованное от обёртки, перекрывается объявлением на самом элементе. Переопределяйте их CSS-правилом с селектором `.os-scrollbar` внутри нужной обёртки:

```css
.thick-scrollbar .os-scrollbar {
  --os-size: 12px;
  --os-handle-bg: var(--accent-9);
}
```

```tsx
<Scrollable className="thick-scrollbar">...</Scrollable>
```

::playground{src=scrollable/ScrollableCssVarsDemo caption="Толстая полоса с акцентным цветом ползунка"}

Что переопределять **не стоит**: размеры области и сам режим прокрутки — они задаются пропами (`maxHeight`, `overflowX`, `overflowY`), а не переменными.
:::

## Внутренние переменные

Определены самим `Scrollable` (файл темы полосы). Имена с префиксом `--os-` принадлежат OverlayScrollbars.

::::css-vars
:::css-var[--os-size]{kind="gap" type="Размер"}
Толщина полосы. По умолчанию: `6px`
:::

:::css-var[--os-handle-bg]{kind="fill" type="Цвет заливки" color="var(--solid-2)"}
Цвет ползунка в покое. По умолчанию: `var(--solid-2)`
:::

:::css-var[--os-handle-bg-hover]{kind="fill" type="Цвет заливки" color="var(--text-1)"}
Цвет ползунка при наведении. По умолчанию: `var(--text-1)`
:::

:::css-var[--os-handle-bg-active]{kind="fill" type="Цвет заливки" color="var(--text-2)"}
Цвет ползунка при перетаскивании. По умолчанию: `var(--text-2)`
:::

:::css-var[--os-track-bg-hover]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Заливка дорожки при наведении. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--os-track-bg-active]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Заливка дорожки при перетаскивании ползунка. По умолчанию: `var(--interactive-a2)`
:::

:::css-var[--os-handle-border-radius]{kind="radius" type="Радиус скругления"}
Скругление ползунка. По умолчанию: `4px`
:::

:::css-var[--os-track-border-radius]{kind="radius" type="Радиус скругления"}
Скругление дорожки. По умолчанию: `3px`
:::

:::css-var[--os-handle-min-size]{kind="size" type="Размер"}
Минимальная длина ползунка. По умолчанию: `32px`
:::
::::

## Глобальные переменные

Не определены самим `Scrollable`: дизайн-токены, на которые опираются цвета полосы. Изменение токена затрагивает не только `Scrollable`, но и все остальные компоненты, которые его используют.

::::css-vars
:::css-var[--solid-2]{kind="fill" type="Цвет заливки" color="var(--solid-2)"}
Токен, на который опирается `--os-handle-bg`. По умолчанию: `var(--gray-10)`
:::

:::css-var[--text-1]{kind="text" type="Цвет текста" color="var(--text-1)"}
Токен, на который опирается `--os-handle-bg-hover`. По умолчанию: `var(--gray-11)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Токен, на который опирается `--os-handle-bg-active`. По умолчанию: `var(--gray-12)`
:::

:::css-var[--interactive-a1]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Токен, на который опирается `--os-track-bg-hover`. По умолчанию: `var(--gray-a3)`
:::

:::css-var[--interactive-a2]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Токен, на который опирается `--os-track-bg-active`. По умолчанию: `var(--gray-a4)`
:::
::::
