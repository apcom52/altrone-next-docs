# CollapsedList

Информация занимает место — и не вся она одинаково важна. `CollapsedList` показывает первые несколько элементов и прячет остальные за кнопкой «Показать ещё». Пользователь видит ровно столько, сколько нужно для ориентации, и сам решает, нужно ли ему больше.

## Базовое использование

По умолчанию список показывает первые 5 элементов. Укажите `limit`, чтобы изменить это число.

```tsx
<CollapsedList limit={3} gap="xs">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListBasicDemo caption="Нажмите на кнопку, чтобы развернуть список"}

Если элементов не больше, чем `limit`, кнопка не появляется вовсе. Состояние «развёрнуто» хранится внутри компонента — ничего подключать не нужно.

`limit` режет **прямых** потомков. Передавайте элементы списком (или одним массивом через `map`); если обернуть их в один элемент, список увидит одного потомка и резать будет нечего.

## Своя метка кнопки

По умолчанию используется локализованная метка. Если нужен более конкретный текст — передайте строку или функцию в `expandButtonLabel`. Функция получает контекст с числом скрытых элементов и текущим состоянием.

```tsx
<CollapsedList
  limit={3}
  expandButtonLabel={({ hiddenItems, expanded }) =>
    expanded ? "Hide reviews" : `Show ${hiddenItems} more reviews`
  }
>
  {reviews.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListCustomLabelDemo caption="Метка меняется в зависимости от состояния"}

## Одностороннее раскрытие

`hideExpandButtonAfterUsage` убирает кнопку после того, как список раскрыт. Используйте, когда возможность свернуть список обратно не нужна — например, в историях изменений или журналах.

```tsx
<CollapsedList limit={3} hideExpandButtonAfterUsage>
  {changelog.map(/* ... */)}
</CollapsedList>
```

::playground{src=collapsedList/CollapsedListOneWayDemo caption="После раскрытия кнопка исчезает"}

## Свойства

:::prop[limit]{type="number" default="5"}
Количество видимых элементов в свёрнутом состоянии.
:::

:::prop[gap]{type="Gap"}
Отступ между элементами — не между списком и кнопкой. Использует шкалу отступов дизайн-системы: `xs`, `s`, `m`, `l`, `xl`.
:::

:::prop[hideExpandButtonAfterUsage]{type="boolean" default="false"}
При `true` кнопка исчезает после первого раскрытия. При `false` появляется кнопка сворачивания.
:::

:::prop[expandButtonLabel]{type="string | (ctx: CollapsedListContext) => string"}
Своя метка кнопки-переключателя. Функция получает `hiddenItems`, `totalItems` и `expanded`.
:::

:::prop[openIcon]{type="ReactElement"}
Иконка кнопки при свёрнутом списке. По умолчанию — общая роль `icons.open` (см. `Application`).
:::

:::prop[closeIcon]{type="ReactElement"}
Иконка кнопки при раскрытом списке. По умолчанию — общая роль `icons.close` (см. `Application`).
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент, в который обёрнуты элементы и кнопка. Остальные `HTMLAttributes<HTMLDivElement>` передаются ему.
:::

## Связанные темы

- [Spoiler](/ru/components/layout/spoiler) — сворачивает один блок контента под заголовком, а не обрезает список по количеству
- [Действия](/ru/foundations/actions) — что делать с рядом действий, который не помещается в контейнер
- [Application](/ru/components/layout/application) — общие роли `icons`, включая шевроны открытия/закрытия, которые использует этот компонент
