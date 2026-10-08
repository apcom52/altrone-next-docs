# Grid

`Grid` — сетка из 12 колонок для двумерных раскладок. `Grid` — контейнер, `Grid.Column` — ячейка с шириной и смещением. Отступы задаются той же шкалой `Gap`, что и у [Flex](/ru/components/layout/flex).

Ширина колонки — это число из 12, поэтому раскладка не зависит от пикселей: ряд, у которого сумма `size` равна 12, заполняет контейнер целиком вместе с отступами, без зазора у правого края. `Grid` занимает всю доступную ширину.

## Базовое использование

Колонки заполняют ряд слева направо. Если сумма `size` в ряду меньше 12, остаток остаётся пустым, а если больше — колонки, которые не поместились, переносятся на следующий ряд.

```tsx
<Grid gap="m" rowGap="s">
  <Grid.Column size={6}>Left half</Grid.Column>
  <Grid.Column size={6}>Right half</Grid.Column>
</Grid>
```

::playground{src=grid/GridBasicDemo caption="Три ряда: 6 + 6, 4 + 4 + 4 и 3 + 9"}

## Смещение

`offset` добавляет пустое пространство перед колонкой — от 0 до 11 колонок. Так блок центрируют или прижимают к правому краю, не создавая пустых колонок.

```tsx
<Grid gap="m" rowGap="s">
  <Grid.Column size={8} offset={2}>Centered</Grid.Column>
  <Grid.Column size={4} offset={8}>Pushed to the right</Grid.Column>
</Grid>
```

::playground{src=grid/GridOffsetDemo caption="Блок по центру и блок у правого края"}

## Колонка по содержимому

`size="auto"` — значение по умолчанию. Такая колонка занимает ширину своего содержимого и делит с другими `auto`-колонками свободное место, которое осталось в ряду после колонок с явным `size`. Кнопки и иконки берут ровно столько места, сколько им нужно, а поля ввода и блоки контента занимают остальное.

```tsx
<Grid gap="s">
  <Grid.Column size="auto">
    <Button label="Filters" />
  </Grid.Column>
  <Grid.Column size={8}>
    <TextInput placeholder="Search…" />
  </Grid.Column>
  <Grid.Column size="auto">
    <Button label="Search" variant="submit" />
  </Grid.Column>
</Grid>
```

::playground{src=grid/GridAutoDemo}

## Отступы между строками и колонками

`gap` управляет расстоянием между колонками в ряду, `rowGap` — между рядами. Значения независимы и берутся из одной шкалы.

```tsx
<Grid gap="s" rowGap="xl">
  <Grid.Column size={6}>A</Grid.Column>
  <Grid.Column size={6}>B</Grid.Column>
  <Grid.Column size={6}>C</Grid.Column>
  <Grid.Column size={6}>D</Grid.Column>
</Grid>
```

::playground{src=grid/GridGapsDemo caption="Узкий gap между колонками и широкий rowGap между рядами"}

Значения шкалы `Gap` и их размеры — в разделе «Шкала отступов» страницы [Flex](/ru/components/layout/flex).

## Один ряд без переноса

По умолчанию колонки, которые не помещаются, переносятся на следующий ряд. С `wrap={false}` все колонки остаются в одном ряду, даже если не помещаются, — контейнер тогда можно прокручивать.

```tsx
<Grid gap="s" wrap={false}>
  {tabs.map((tab) => (
    <Grid.Column key={tab} size="auto">
      <Button label={tab} variant="text" size="s" />
    </Grid.Column>
  ))}
</Grid>
```

::playground{src=grid/GridNoWrapDemo caption="Ряд шире контейнера — прокрутите его по горизонтали"}

## Другой HTML-элемент

`Grid` и `Grid.Column` рендерят `<div>`. `asChild` переносит вычисленные `className` и `style` на единственный дочерний элемент, поэтому сетка может быть списком, а колонка — его пунктом.

```tsx
<Grid asChild gap="m" rowGap="m">
  <ul>
    {items.map((item) => (
      <Grid.Column asChild key={item.id} size={4}>
        <li>
          <Card {...item} />
        </li>
      </Grid.Column>
    ))}
  </ul>
</Grid>
```

:::note
`asChild` требует ровно одного дочернего элемента. Если `children` — не валидный React-элемент, компонент вернёт `null` и выведет ошибку в консоль.
:::

## Свойства Grid

:::prop[gap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
Расстояние между колонками в ряду.
:::

:::prop[rowGap]{type="'none' | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'" default="'none'"}
Расстояние между рядами. Не зависит от `gap`.
:::

:::prop[wrap]{type="boolean" default="true"}
Переносит колонки, которые не поместились, на следующий ряд. При `false` все колонки остаются в одном ряду.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит вычисленные `className` и `style` на единственный дочерний элемент вместо рендера `<div>` — например, `ul` или `section`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на корневой DOM-элемент. Принимается как обычный проп.
:::

Остальные атрибуты `HTMLAttributes<HTMLElement>` передаются корневому элементу.

## Свойства Grid.Column

:::prop[size]{type="1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto'" default="'auto'"}
Ширина колонки в долях от 12. `auto` — по содержимому, с долей свободного места ряда.
:::

:::prop[offset]{type="0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11" default="0"}
Сколько колонок оставить пустыми перед этой колонкой.
:::

:::prop[asChild]{type="boolean" default="false"}
Переносит вычисленные `className` и `style` на единственный дочерний элемент вместо рендера `<div>` — например, `li`.
:::

:::prop[ref]{type="Ref<HTMLElement>"}
Ссылка на корневой DOM-элемент колонки. Принимается как обычный проп.
:::

Остальные атрибуты `HTMLAttributes<HTMLElement>`, кроме `size`, передаются корневому элементу колонки.

## Похожие темы

- [Flex](/ru/components/layout/flex) — раскладка вдоль одной оси и общая шкала отступов
- [Доступность](/ru/foundations/accessibility) — общие правила, в том числе про порядок чтения и семантические элементы
