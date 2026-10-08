# Screen

## Один Screen на страницу

`Screen` строит раскладку на всё окно с закреплёнными шапкой и боковым меню. Если положить один внутрь другого, получатся две шапки, которые борются за верх окна. Рендерите один `Screen` для страницы, которая показана сейчас, а между страницами переключайтесь роутером. Для небольшой области, которая прокручивается сама по себе, берите `Scrollable`, а не второй `Screen`.

::::good-bad
:::good
```tsx
<Screen title="Projects">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Content>
    <Scrollable>{/* long list */}</Scrollable>
  </Screen.Content>
</Screen>
```
:::

:::bad
```tsx
<Screen title="Projects">
  <Screen.Content>
    <Screen title="Project details">
      <Screen.Header>{/* toolbar */}</Screen.Header>
    </Screen>
  </Screen.Content>
</Screen>
```
:::
::::

## Пусть прокручивается страница

Весь `Screen` прокручивается вместе со страницей. Именно поэтому закреплённая шапка может лежать поверх содержимого и размывать его. Не превращайте `Screen.Content` в отдельный прокручиваемый блок с фиксированной высотой: тогда шапке не над чем парить, а залипающие заголовки `DataTable` останавливаются не там, где нужно.

::::good-bad
:::good
```tsx
<Screen.Content>
  <DataTable {...tableProps} />
</Screen.Content>
```
:::

:::bad
```tsx
<Screen.Content style={{ height: '100vh', overflowY: 'auto' }}>
  <DataTable {...tableProps} />
</Screen.Content>
```
:::
::::

Исключение — прокрутка вбок. Широкая доска или таблица должна прокручиваться внутри своей обёртки, чтобы шапка и подвал оставались шириной с окно.

## Одна основная навигация на устройство

Боковое меню удобно с мышью и широким окном, нижняя панель — с большим пальцем. Если показать обе как основную навигацию на одном экране, каждая ссылка повторится, а место будет потрачено дважды. Используйте `visibleFrom` и `hiddenFrom`, чтобы каждое устройство получало только одну.

::::good-bad
:::good
```tsx
<Screen.Sidebar visibleFrom="lg">{/* navigation */}</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">
  {/* the same destinations */}
</Screen.BottomNavigation>
```
:::

:::bad
```tsx
<Screen.Sidebar>{/* navigation */}</Screen.Sidebar>
<Screen.BottomNavigation>
  {/* the same destinations */}
</Screen.BottomNavigation>
```
:::
::::

Пусть ссылки в обеих будут одинаковыми, чтобы тот, кто повернул планшет, не потерялся.

## Не мучайте читателя длинными строками

Строки длиннее примерно 70 символов читать утомительно. Для статьи, формы или любой страницы с большим количеством текста ограничьте ширину `Screen.Content`, а не давайте тексту растягиваться на широкое окно.

::::good-bad
:::good
```tsx
<Screen.Content maxWidth={640}>
  <Article />
</Screen.Content>
```
:::

:::bad
```tsx
<Screen.Content>
  <Article />
</Screen.Content>
```
:::
::::

Дашборды, таблицы и доски — наоборот: им нужна вся ширина, так что оставляйте их без ограничений.

## Доступность

- Давайте каждому `Screen` `title`. Он становится именованной областью страницы, и пользователю скринридера легче отличить одно представление от другого.
- Используйте один `Screen.Content` на экран: это единственная область `<main>` на странице.
- Иконочным действиям в панели инструментов шапки нужно имя — передайте `label` вместе с `showLabel={false}`, чтобы имя всё равно озвучивалось.
