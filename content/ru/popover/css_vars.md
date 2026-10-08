# Popover

CSS-переменные, которые читает `Popover` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
В отличие от `Drawer`/`Modal`, `className` и `style`, переданные `Popover`, попадают прямо на саму плавающую панель — она и есть тот `Box`, что задаёт материал, тон и уровень. Поэтому через `style` можно переопределить и собственные переменные `Popover`, и переменные `Box`, на котором построена панель:

```tsx
<Popover
  content={<Text>...</Text>}
  style={{ "--popover-radius": "4px", "--box-fill": "var(--teal-3)" } as React.CSSProperties}
>
  <Button label="Open popover" />
</Popover>
```

::playground{src=popover/PopoverCssVarsDemo caption="Переопределение --popover-radius и --box-fill через проп style"}

Что переопределить нельзя:

- **Тонкую обводку и составную тень материала `plate`.** Это фиксированный рецепт `box-shadow` (обводка + контактная и внешняя тень), а не отдельная переменная — `--box-elevation-shadow` в нём лишь последнее слагаемое. Чтобы полностью заменить тень панели, переопределяйте `box-shadow` целиком через `className`.
- **Позицию панели** (`left`/`top`/`transform-origin`) — она вычисляется Floating UI на каждый рендер и переопределяется автоматически.
:::

## Внутренние переменные

Определены самим `Popover`.

::::css-vars
:::css-var[--popover-radius]{kind="radius" type="Радиус скругления"}
Радиус скругления панели, передаётся в `Box` как `radius`. По умолчанию: `24px`
:::
::::

## Глобальные переменные

Не определены самим `Popover`: переменные `Box`, на котором построена панель (материал `plate`, тон `neutral`, уровень `overlay`), и глобальные дизайн-токены, которые она читает напрямую.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка панели (материал `plate`). По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста содержимого по умолчанию (тон `neutral`). По умолчанию: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона за панелью. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Внешний слой тени панели (уровень `overlay`) — складывается с фиксированной обводкой материала `plate`. По умолчанию: `var(--elevation-overlay-shadow)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="color(display-p3 1 1 1 / 0.7)"}
Заливка материала `plate`, на который опирается `--box-fill`. По умолчанию (светлая тема): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие материала `plate`, на который опирается `--box-blur`. По умолчанию: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-overlay-shadow]{kind="shadow" type="Тень"}
Тень уровня `overlay`, на который опирается `--box-elevation-shadow`. По умолчанию: `var(--shadow-1), var(--shadow-4)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Базовый цвет текста, на который опирается `--box-tone-text` и заголовок панели. По умолчанию: `var(--gray-12)`
:::

:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Размер шрифта содержимого и заголовка панели. По умолчанию: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Размер шрифта"}
Межстрочный интервал содержимого и заголовка панели. По умолчанию: `20px`
:::

:::css-var[--space-stack]{kind="gap" type="Размер отступа"}
Отступ между шапкой и содержимым панели. По умолчанию: `var(--gap)`
:::

:::css-var[--level-toast]{kind="size" type="Z-index"}
Уровень z-index, на который панель переключается автоматически, если триггер лежит внутри `Notifications` — иначе панель оказалась бы под тостом. По умолчанию: `1090`
:::
::::
