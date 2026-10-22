# Skeleton

CSS-переменные, которые читает `Skeleton` и которые можно переопределять.

:::spoiler[Как переопределить переменные]
Переменные заданы на корне приложения, поэтому их можно изменить для одного скелетона через его проп `style` или для всей заглушки через `style` обёртки — скелетоны внутри унаследуют значение.

```tsx
<Flex
  orientation="vertical"
  gap="xs"
  style={{
    "--skeleton-background-color": "var(--accent-a3)",
    "--skeleton-animate-background-color": "var(--accent-a5)",
  } as React.CSSProperties}
>
  <Skeleton width="100%" height="14px" radius="4px" />
  <Skeleton width="70%" height="14px" radius="4px" />
</Flex>
```

::playground{src=skeleton/SkeletonCssVarsDemo caption="Заглушка в акцентном цвете"}

Блок пульсирует между `--skeleton-background-color` и `--skeleton-animate-background-color`; задайте им одно значение, чтобы получить неподвижный блок. Держите оба цвета полупрозрачными, чтобы скелетон подходил к любой поверхности, на которой лежит. Размер и скругление через переменные не настраиваются — для них есть пропы `width`, `height` и `radius`.
:::

## Внутренние переменные

Определены самим компонентом.

::::css-vars
:::css-var[--skeleton-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Цвет блока в покое и на краях пульсации. По умолчанию: `var(--interactive-a1)`
:::

:::css-var[--skeleton-animate-background-color]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Цвет блока на пике пульсации. По умолчанию: `var(--interactive-a2)`
:::
::::

## Глобальные переменные

Не определены самим компонентом, но влияют на его вид.

::::css-vars
:::css-var[--interactive-a1]{kind="fill" type="Цвет заливки" color="var(--interactive-a1)"}
Значение по умолчанию для `--skeleton-background-color`. По умолчанию: `var(--gray-a3)`
:::

:::css-var[--interactive-a2]{kind="fill" type="Цвет заливки" color="var(--interactive-a2)"}
Значение по умолчанию для `--skeleton-animate-background-color`. По умолчанию: `var(--gray-a4)`
:::
::::
