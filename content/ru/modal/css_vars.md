# Modal

CSS-переменные, которые читает `Modal` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
`className`, `style` и остальные `HTMLAttributes`, переданные `Modal`, попадают на внешнюю позиционированную обёртку окна, а не на саму видимую карточку. Собственные переменные `Modal` (ниже, во «Внутренних переменных») читаются заголовком, содержимым и футером, которые лежат глубже и ничего не переопределяют сами, поэтому наследование до них доходит. Надёжный способ изменить одну из них — проп `style`:

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Custom title color"
  content={<Text>...</Text>}
  style={{ "--modal-header-text-color": "var(--accent-9)" } as React.CSSProperties}
/>
```

::playground{src=modal/ModalCssVarsDemo caption="Переопределение --modal-header-text-color через проп style"}

Что переопределить через `style`/`className` **нельзя**:

- **Заливку, цвет текста, размытие и тень окна** (`--box-fill`, `--box-tone-text`, `--box-blur`, `--box-elevation-shadow`). Эти переменные `Modal` наследует от `Box`, на котором построена видимая карточка, но материал (`glass`), тон (`neutral`) и уровень (`modal`) заданы самим `Modal` классами прямо на этом элементе, поэтому значение с внешней обёртки до него не доходит. Чтобы изменить эти цвета, переопределяйте сам глобальный токен (`--glass-background-color`, `--text-2` и так далее): это перекрасит окно везде, где оно используется.
- **Цвет подложки** (`--sheet-backdrop-color`) наследуется от обёртки, но для одного экземпляра его менять бессмысленно: подложка одинакова у всех оверлеев библиотеки, меняйте `--color-overlay-scrim` глобально.
:::

## Внутренние переменные

Определены самим `Modal`.

::::css-vars
:::css-var[--modal-header-text-color]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет заголовка окна. По умолчанию: `var(--text-2)`
:::

:::css-var[--modal-padding]{kind="gap" type="Размер отступа"}
Отступ вокруг шапки, содержимого и футера; от него же отсчитывается положение кнопки закрытия. По умолчанию: `var(--space-content)`
:::
::::

## Глобальные переменные

Не определены самим `Modal`: переменные примитивов `Box` и `Sheet`, на которых построено окно, и глобальные дизайн-токены, которые оно читает. Изменение токена затрагивает не только `Modal`, но и все остальные компоненты, которые его используют.

::::css-vars
:::css-var[--box-fill]{kind="fill" type="Цвет заливки" color="var(--glass-background-color)"}
Заливка окна (материал `glass`). По умолчанию: `var(--glass-background-color)`
:::

:::css-var[--box-tone-text]{kind="text" type="Цвет текста" color="var(--text-2)"}
Цвет текста содержимого окна по умолчанию (тон `neutral`). По умолчанию: `var(--text-2)`
:::

:::css-var[--box-blur]{kind="blur" type="Фильтр фона"}
Размытие фона за окном. По умолчанию: `var(--glass-effects)`
:::

:::css-var[--box-elevation-shadow]{kind="shadow" type="Тень"}
Тень окна (уровень `modal`). По умолчанию: `var(--elevation-modal-shadow)`
:::

:::css-var[--sheet-backdrop-color]{kind="fill" type="Цвет заливки" color="var(--color-overlay-scrim)"}
Цвет затемнённой подложки за окном. По умолчанию: `var(--color-overlay-scrim)`
:::

:::css-var[--glass-background-color]{kind="fill" type="Цвет заливки" color="color(display-p3 1 1 1 / 0.7)"}
Заливка материала `glass`, на который опирается `--box-fill`. По умолчанию (светлая тема): `color(display-p3 1 1 1 / 0.7)`
:::

:::css-var[--glass-effects]{kind="blur" type="Фильтр фона"}
Размытие материала `glass`, на который опирается `--box-blur`. По умолчанию: `blur(64px) saturate(180%)`
:::

:::css-var[--elevation-modal-shadow]{kind="shadow" type="Тень"}
Тень уровня `modal`, на который опирается `--box-elevation-shadow`. По умолчанию: `var(--shadow-1), var(--shadow-5)`
:::

:::css-var[--color-overlay-scrim]{kind="fill" type="Цвет заливки" color="var(--black-a3)"}
Общий для всех оверлеев библиотеки цвет подложки, на который опирается `--sheet-backdrop-color`. По умолчанию (светлая тема): `var(--black-a3)`
:::

:::css-var[--text-2]{kind="text" type="Цвет текста" color="var(--text-2)"}
Базовый цвет текста, на который опираются `--modal-header-text-color` и `--box-tone-text`. По умолчанию: `var(--gray-12)`
:::

:::css-var[--text-size-5]{kind="font" type="Размер шрифта"}
Размер шрифта заголовка окна. По умолчанию: `16px`
:::

:::css-var[--line-height-8]{kind="font" type="Размер шрифта"}
Межстрочный интервал заголовка окна. По умолчанию: `30px`
:::

:::css-var[--text-size-4]{kind="font" type="Размер шрифта"}
Размер шрифта содержимого окна. По умолчанию: `14px`
:::

:::css-var[--line-height-4]{kind="font" type="Размер шрифта"}
Межстрочный интервал содержимого окна. По умолчанию: `20px`
:::

:::css-var[--l-gap]{kind="gap" type="Размер отступа"}
Промежуток между заголовком, содержимым и футером. По умолчанию: `12px`
:::

:::css-var[--gap]{kind="gap" type="Размер отступа"}
Промежуток между кнопками в футере. По умолчанию: `8px`
:::

:::css-var[--space-content]{kind="gap" type="Размер отступа"}
Токен отступов внутри контентных контейнеров, на который по умолчанию опирается `--modal-padding`. По умолчанию: `var(--gap)`
:::
::::
