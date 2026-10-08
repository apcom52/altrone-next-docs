# Application

## Один экземпляр на приложение

`Application` настраивает единую среду для всего приложения. Он записывает тему на `<html>` и копирует фон на `<body>`, поэтому второй `Application` — вложенный или рядом с первым — начнёт с ним спорить за то и другое. Добавьте его один раз, в самом верху, а всё остальное держите внутри.

::::good-bad
:::good
```tsx
<Application>
  <Screen>{/* pages */}</Screen>
</Application>
```
:::

:::bad
```tsx
<Application>
  <Sidebar />
  <Application theme="dark">
    <Screen>{/* pages */}</Screen>
  </Application>
</Application>
```
:::
::::

Если одной части страницы нужен другой вид, используйте собственные пропы компонента или его CSS-переменные, а не второй корень.

## Следуйте системной теме

Люди, которые включили тёмную тему на своём устройстве, ждут её везде. Фиксируйте `light` или `dark`, только если у вашего продукта действительно один облик. Если добавляете ручной переключатель, сочетайте его с `persistTheme`, чтобы выбор пережил перезагрузку.

::::good-bad
:::good
```tsx
<Application persistTheme>
  <ThemeSwitcher />
</Application>
```
:::

:::bad
```tsx
<Application theme="light">
  <ThemeSwitcher />
</Application>
```
:::
::::

В плохом примере переключатель работает только до перезагрузки страницы: каждый визит начинается со светлой темы, и никто не помнит, что выбрал пользователь.

## Выберите один акцент

Акцент — фирменный цвет вашего приложения: основные кнопки, включённые контролы, слайдеры, индикаторы прогресса. Выберите его один раз и придерживайтесь. Если он меняется от страницы к странице, одна и та же кнопка на каждом экране выглядит как часть другого продукта.

::::good-bad
:::good
```tsx
<Application accent="indigo">
  <App />
</Application>
```
:::

:::bad
```tsx
<Application accent={isBilling ? 'green' : 'blue'}>
  <App />
</Application>
```
:::
::::

## Меняйте общие иконки один раз

Замените общую иконку в `Application` — и её подхватят все компоненты, которые ею пользуются. Если менять по одному компоненту, те, что вы забудете, останутся со старой иконкой.

::::good-bad
:::good
```tsx
<Application icons={{ prev: <ArrowLeft />, next: <ArrowRight /> }}>
  <App />
</Application>
```
:::

:::bad
```tsx
<Calendar prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
<Pagination prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
<DatePicker prevIcon={<ArrowLeft />} nextIcon={<ArrowRight />} />
```
:::
::::

## Доступность

Укажите `lang` на `<html>` в соответствии с `language`. `Application` переводит тексты библиотеки, но не меняет `lang` страницы, а по нему скринридеры выбирают подходящий голос.
