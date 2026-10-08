# Spoiler

CSS-переменные, которые читает `Spoiler` и которые можно переопределить.

:::spoiler[Как переопределять переменные]
`className` и `style` попадают на корневой элемент `Spoiler`, поэтому переменные, заданные через `style`, действуют только на этот спойлер:

```tsx
<Spoiler
  title="Larger, tinted heading"
  style={{ "--spoiler-text-color": "var(--teal-11)", "--spoiler-text-size": "16px" } as React.CSSProperties}
>
  ...
</Spoiler>
```

::playground{src=spoiler/SpoilerCssVarsDemo caption="Переопределение цвета, размера заголовка и размера иконки через проп style"}

Чтобы изменить все спойлеры сразу, задайте переменные на родительском элементе или в своих стилях.

Что переопределить нельзя:

- **Анимацию.** Высоту и прозрачность анимирует `motion` с фиксированными параметрами пружины и твина, а не CSS.
- **Кольцо фокуса.** Оно использует `--accent-8` напрямую; меняйте акцент.
:::

## Внутренние переменные

Определены самим `Spoiler`.

::::css-vars
:::css-var[--spoiler-text-color]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет текста заголовка и иконки. По умолчанию: `var(--accent-12)`
:::

:::css-var[--spoiler-border-color]{kind="border" type="Цвет границы" color="var(--border-1)"}
Разделитель между соседними спойлерами. По умолчанию: `var(--border-1)`
:::

:::css-var[--spoiler-text-size]{kind="font" type="Размер шрифта"}
Размер шрифта заголовка. По умолчанию: `var(--text-size-3)`
:::

:::css-var[--spoiler-heading-line-height]{kind="font" type="Межстрочный интервал"}
Межстрочный интервал заголовка — задаёт его высоту. По умолчанию: `32px`
:::

:::css-var[--spoiler-icon-size]{kind="size" type="Размер"}
Ширина и высота иконки раскрытия. По умолчанию: `18px`
:::
::::

## Глобальные переменные

Не определены самим `Spoiler`: глобальные дизайн-токены, которые он читает напрямую.

::::css-vars
:::css-var[--gap]{kind="gap" type="Отступ"}
Расстояние между заголовком и содержимым, горизонтальные отступы заголовка и содержимого. По умолчанию: `8px`
:::

:::css-var[--accent-12]{kind="text" type="Цвет текста" color="var(--accent-12)"}
Цвет, в который разрешается `--spoiler-text-color`. Следует за `accent` у `Application`.
:::

:::css-var[--accent-8]{kind="border" type="Цвет границы" color="var(--accent-8)"}
Кольцо фокуса вокруг заголовка (`:focus-visible`). Следует за `accent` у `Application`.
:::

:::css-var[--border-1]{kind="border" type="Цвет границы" color="var(--gray-6)"}
Цвет, в который разрешается `--spoiler-border-color`. По умолчанию (светлая тема): `var(--gray-6)`
:::

:::css-var[--text-size-3]{kind="font" type="Размер шрифта"}
Размер, в который разрешается `--spoiler-text-size`. По умолчанию: `12px`
:::

:::css-var[--text-weight-bold]{kind="font" type="Насыщенность шрифта"}
Насыщенность шрифта заголовка. По умолчанию: `600`
:::
::::
