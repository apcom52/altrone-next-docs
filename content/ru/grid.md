# Grid

Двенадцатиколоночная CSS Grid-сетка. `Grid` — контейнер, `Grid.Column` — ячейка с шириной и смещением. Та же шкала отступов, что и у `Flex`.

## Базовое использование

Сумма `size` всех колонок в ряду должна равняться 12. Если сумма меньше — остаток остаётся пустым. Если больше — лишние колонки переносятся на следующую строку.

```tsx
<Grid gap="m">
  <Grid.Column size={6}>Левая половина</Grid.Column>
  <Grid.Column size={6}>Правая половина</Grid.Column>
</Grid>
```

::playground{src=GridBasicDemo caption="6+6, 4+4+4, 3+9 — все варианты деления на 12"}

## Смещение

`offset` добавляет пустое пространство перед колонкой. Используйте для центрирования блока или создания асимметричных макетов.

```tsx
{/* Центрированный блок: 2 + 8 + 2 = 12 */}
<Grid gap="m">
  <Grid.Column size={8} offset={2}>
    Контент по центру
  </Grid.Column>
</Grid>
```

::playground{src=GridOffsetDemo}

## Колонка по содержимому

`size="auto"` растягивает колонку ровно под её содержимое. Оставшееся пространство перераспределяется между явными колонками.

```tsx
<Grid gap="s">
  <Grid.Column size="auto">
    <Button label="Фильтры" />
  </Grid.Column>
  <Grid.Column size={10}>
    <TextInput placeholder="Поиск..." />
  </Grid.Column>
  <Grid.Column size="auto">
    <Button label="Найти" variant="submit" />
  </Grid.Column>
</Grid>
```

::playground{src=GridAutoDemo caption="Кнопки занимают ровно столько места, сколько нужно"}

## Независимые зазоры строк и колонок

`gap` управляет горизонтальным отступом, `rowGap` — вертикальным. Их можно задавать независимо.

```tsx
<Grid gap="m" rowGap="xl">
  <Grid.Column size={6}><Card /></Grid.Column>
  <Grid.Column size={6}><Card /></Grid.Column>
  <Grid.Column size={6}><Card /></Grid.Column>
  <Grid.Column size={6}><Card /></Grid.Column>
</Grid>
```

## Макет: сайдбар + контент

Классическое разбиение страницы: узкий сайдбар и широкая рабочая область.

```tsx
<Grid gap="l">
  <Grid.Column size={3}>
    <Sidebar />
  </Grid.Column>
  <Grid.Column size={9}>
    <MainContent />
  </Grid.Column>
</Grid>
```

## Невидимый перенос строк

По умолчанию колонки переносятся на следующую строку, когда сумма `size` превышает 12. Установите `wrap={false}`, чтобы зафиксировать один ряд — все колонки останутся на одной строке, даже если не помещаются.

```tsx
<Grid gap="s" wrap={false}>
  {tabs.map((tab) => (
    <Grid.Column key={tab.id} size="auto">
      <Tab {...tab} />
    </Grid.Column>
  ))}
</Grid>
```

## Свойства Grid

:::prop[gap]{type="Gap" default="'none'"}
Отступ между колонками.
:::

:::prop[rowGap]{type="Gap" default="'none'"}
Отступ между строками. Независим от `gap`.
:::

:::prop[wrap]{type="boolean" default="true"}
Разрешить перенос колонок на следующую строку.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести вычисленные className/style на единственный дочерний элемент вместо рендера `<div>` — например, `ul` или `section`.
:::

## Свойства Grid.Column

:::prop[size]{type="1–12 | 'auto'"}
Ширина ячейки в колонках из 12. `auto` — по содержимому.
:::

:::prop[offset]{type="0–11" default="0"}
Количество пустых колонок перед ячейкой.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести вычисленные className/style на единственный дочерний элемент вместо рендера `<div>` — например, `li`.
:::

## Рекомендации

**`Grid` — для двумерных макетов, `Flex` — для одномерных.** Если вам нужно выровнять элементы в ряд — это `Flex`. Если нужно контролировать как строки, так и столбцы — это `Grid`.

**Сумма `size` не обязана быть 12.** Остаток просто остаётся пустым. Иногда это намеренно — для отступа справа без `offset`.

**`size="auto"` + явные колонки — мощная комбинация.** Кнопки и иконки берут ровно столько места, сколько им нужно. Поля ввода и контентные блоки занимают остаток.
