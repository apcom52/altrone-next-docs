# Skeleton

`Skeleton` — блок-заглушка, который стоит на месте контента, пока тот загружается. Он повторяет форму настоящего содержимого — строки текста, аватара, картинки — и заранее занимает его место, поэтому, когда данные приходят, ничего не прыгает. Блок медленно пульсирует между двумя оттенками; при `prefers-reduced-motion` пульсация останавливается и блок стоит неподвижно. У `Skeleton` есть `aria-hidden`, поэтому вспомогательные технологии его не видят.

```tsx
import { Skeleton } from 'altrone-ui';
```

## Базовое использование

Скелетон — это `<div>` с фоном и без содержимого. Размер задают `width` и `height`, скругление — `radius`. Несколько строк разной длины читаются как абзац текста.

```tsx
<Skeleton width="100%" height="14px" radius="4px" />
<Skeleton width="100%" height="14px" radius="4px" />
<Skeleton width="70%" height="14px" radius="4px" />
```

::playground{src=skeleton/SkeletonBasicDemo caption="Три строки абзаца"}

Все размерные пропы — строки с CSS-единицей (`"14px"`, `"70%"`, `"var(--radius-m)"`). Без `width` или `height` скелетон занимает `100%` родителя по этой оси — поэтому всегда задавайте `height`: в контейнере, высота которого зависит от содержимого, `100%` превращается в ноль и блок пропадает.

## Формы

`radius` уходит прямо в `border-radius`: `50%` даёт круг для аватара, несколько пикселей — мягкие углы кнопки или строки текста. Без `radius` углы прямые.

```tsx
<Skeleton width="48px" height="48px" radius="50%" />
<Skeleton width="120px" height="32px" radius="8px" />
<Skeleton width="120px" height="14px" radius="4px" />
<Skeleton width="64px" height="64px" />
```

::playground{src=skeleton/SkeletonShapesDemo caption="Аватар, кнопка, строка текста и блок без скругления"}

## Гибкий размер

`width` и `height` фиксируют размер: `minWidth` и `maxWidth` по умолчанию равны `width`, а `minHeight` и `maxHeight` — `height`. Чтобы блок тянулся в пределах, передайте пределы явно. Передавайте и минимум, и максимум: минимум по умолчанию равен `width`, а в CSS `min-width` сильнее `max-width`.

```tsx
<Skeleton width="100%" minWidth="120px" maxWidth="320px" height="14px" radius="4px" />
```

::playground{src=skeleton/SkeletonFlexibleSizeDemo caption="Верхняя строка останавливается на 320px, нижняя занимает всю ширину"}

## Сборка заглушки

Готовых пресетов нет — заглушку карточки, строки списка или профиля собирают из нескольких скелетонов во `Flex`, повторяя раскладку настоящего контента.

```tsx
<Box material="pale" shape="rounded" radius={12} padding={12}>
  <Flex orientation="vertical" gap="m">
    <Skeleton width="100%" height="160px" radius="8px" />
    <Flex gap="m" align="center">
      <Skeleton width="40px" height="40px" radius="50%" />
      <Flex orientation="vertical" gap="xs" style={{ flex: 1 }}>
        <Skeleton width="60%" height="14px" radius="4px" />
        <Skeleton width="40%" height="12px" radius="4px" />
      </Flex>
    </Flex>
    <Skeleton width="90%" height="12px" radius="4px" />
    <Skeleton width="50%" height="12px" radius="4px" />
  </Flex>
</Box>
```

::playground{src=skeleton/SkeletonCardDemo caption="Карточка: обложка, автор и две строки описания"}

## Замена на контент

Пока данные загружаются, рендерите скелетон, а когда пришли — контент. Раз каждый скелетон скрыт от вспомогательных технологий, сообщайте о загрузке на обёртке: `aria-busy` на время загрузки и `aria-live`, чтобы появившийся контент был зачитан.

```tsx
<Flex gap="m" align="center" aria-busy={loading} aria-live="polite">
  {loading ? (
    <>
      <Skeleton width="40px" height="40px" radius="50%" />
      <Skeleton width="50%" height="14px" radius="4px" />
    </>
  ) : (
    <>
      <Avatar firstName="Alex" lastName="Morgan" size="l" />
      <Text weight="bold">Alex Morgan</Text>
    </>
  )}
</Flex>
```

::playground{src=skeleton/SkeletonLoadingStateDemo caption="Строка профиля загружается две секунды"}

## Анимация размера

`animateLayout` заставляет скелетон анимировать изменение размера и положения через `motion` — пригодится, когда заглушка меняет форму по мере частичной загрузки данных. По умолчанию выключено: статичной заглушке не нужны замеры на каждом рендере.

```tsx
<Skeleton width={wide ? '90%' : '40%'} height="14px" radius="4px" animateLayout />
```

::playground{src=skeleton/SkeletonAnimateLayoutDemo caption="У верхней строки есть animateLayout, у нижней — нет"}

## Свойства

:::prop[width]{type="string" default="'100%'"}
Ширина. Также значение по умолчанию для `minWidth` и `maxWidth`.
:::

:::prop[minWidth]{type="string"}
Минимальная ширина. По умолчанию равна `width`.
:::

:::prop[maxWidth]{type="string"}
Максимальная ширина. По умолчанию равна `width`.
:::

:::prop[height]{type="string" default="'100%'"}
Высота. Также значение по умолчанию для `minHeight` и `maxHeight`.
:::

:::prop[minHeight]{type="string"}
Минимальная высота. По умолчанию равна `height`.
:::

:::prop[maxHeight]{type="string"}
Максимальная высота. По умолчанию равна `height`.
:::

:::prop[radius]{type="string"}
Скругление углов, передаётся в `border-radius`. Без него углы прямые.
:::

:::prop[animateLayout]{type="boolean" default="false"}
Анимировать изменение размера и положения.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

Остальные атрибуты `<div>` (кроме `children`) передаются корневому элементу; `style` объединяется с вычисленным размером, и размерные пропы сильнее тех же свойств в нём.

## Похожие темы

- [Загрузка](/ru/foundations/loading) — статья об основах: когда подходит скелетон, а когда спиннер
- [Loading](/ru/components/feedback/loading) — компонент-спиннер для ожидания без известной формы
- [Progress](/ru/components/feedback/progress) — прогресс долгой операции
- [Анимация](/ru/foundations/motion) — почему пульсация останавливается при уменьшенном движении
- [Flex](/ru/components/layout/flex) — контейнер, в котором собирают заглушку
