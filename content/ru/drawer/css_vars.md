# Drawer

CSS-переменные, которые читает `Drawer` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
Большинство `HTMLAttributes` (`className`, `style`, `data-*` и другие), переданные `Drawer`, попадают на внешнюю позиционированную обёртку панели, а не на саму видимую карточку — но собственные переменные `Drawer` (ниже, в «Внутренних переменных») читаются заголовком, содержимым и футером, которые лежат глубже этой обёртки и ничего не переопределяют сами, поэтому наследование до них доходит. Надёжный способ изменить одну из них — проп `style`:

```tsx
<Drawer
  title="Custom title color"
  content={<Text>...</Text>}
  style={{ "--drawer-header-text-color": "var(--accent-9)" } as React.CSSProperties}
/>
```

::playground{src=drawer/DrawerCssVarsDemo caption="Переопределение --drawer-header-text-color через проп style"}

Что переопределить через `style`/`className` **нельзя**:

- **Заливку, цвет текста, размытие и тень панели** (`--box-fill`, `--box-tone-text`, `--box-blur`, `--box-elevation-shadow`). Эти переменные `Drawer` наследует от `Box`, на котором построена видимая карточка — но материал (`glass`), тон (`neutral`) и уровень (`overlay`) фиксированы самим `Drawer` и заданы классами прямо на этом элементе, поэтому значение, унаследованное с внешней обёртки, до него не доходит. Чтобы изменить эти цвета — переопределяйте сам глобальный токен (`--glass-background-color`, `--text-2` и так далее): это перекрасит панель везде, где она используется.
- **Цвет фона-подложки** (`--sheet-backdrop-color`) технически лежит в том же поддереве, что и панель, и наследуется от обёртки, но переопределять его для одного экземпляра нет смысла — подложка одинакова для всех оверлеев библиотеки, меняйте `--color-overlay-scrim` глобально.
:::

## Внутренние переменные

Определены самим `Drawer`.

::::css-vars
:::css-var[--drawer-header-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет заголовка панели. По умолчанию: `var(--text-2)`
:::

:::css-var[--drawer-padding]{kind="gap" type="Размер отступа"}
Внешний отступ панели — вокруг шапки, содержимого и футера. По умолчанию: `var(--space-content)`
:::

:::css-var[--drawer-content-padding]{kind="gap" type="Размер отступа"}
Отступ между шапкой/футером и прокручиваемым содержимым. По умолчанию: `var(--space-content)`
:::
::::

## Глобальные переменные

Не определены самим `Drawer`: переменные примитивов `Box` и `Sheet`, на которых построена панель, и глобальные дизайн-токены, которые она читает. Изменение токена затрагивает не только `Drawer`, но и все остальные компоненты, которые его используют.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка панели (материал `glass`). По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста содержимого панели по умолчанию (тон `neutral`). По умолчанию: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона за панелью. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень панели (уровень `overlay`). По умолчанию: `var(--elevation-overlay-shadow)`
:::

:::css-var[--sheet-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--color-overlay-scrim)"}
Цвет затемнённой подложки за панелью. По умолчанию: `var(--color-overlay-scrim)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="color(display-p3 1 1 1 / 0.7)"}
Заливка материала `glass`, на который опирается `--box-fill`. По умолчанию (светлая тема): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие материала `glass`, на который опирается `--box-blur`. По умолчанию: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-overlay-shadow]{kind="shadow" type="Тень"}
Тень уровня `overlay`, на который опирается `--box-elevation-shadow`. По умолчанию: `var(--shadow-1), var(--shadow-4)`
:::

:::css-var[--color-overlay-scrim]{kind="fill" type="Цвет заливки" color="var(--black-a3)"}
Общий для всех оверлеев библиотеки цвет подложки, на который опирается `--sheet-backdrop-color`. По умолчанию (светлая тема): `var(--black-a3)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Базовый цвет текста, на который опираются `--drawer-header-text-color` и `--box-tone-text`. По умолчанию: `var(--gray-12)`
:::

:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Размер шрифта заголовка панели. По умолчанию: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Размер шрифта"}
Межстрочный интервал заголовка панели. По умолчанию: `20px`
:::

:::css-var[--gap]{kind="gap" type="Размер отступа"}
Промежуток между шапкой, содержимым и футером внутри панели. По умолчанию: `8px`
:::

:::css-var[--space-content]{kind="gap" type="Размер отступа"}
Токен отступов внутри контентных контейнеров, на который по умолчанию опираются `--drawer-padding` и `--drawer-content-padding`. По умолчанию: `var(--gap)`
:::
::::
