# Scrollable

Браузерные полосы прокрутки занимают место и выглядят по-разному в каждой операционной системе. `Scrollable` решает обе проблемы: оверлейные полосы рисуются поверх содержимого, не меняя ширину контейнера, и скрываются, когда пользователь не взаимодействует с областью. Прокрутка проявляется только тогда, когда она нужна.

## Базовое использование

Оберните содержимое в `Scrollable`. По умолчанию компонент занимает 100% высоты родителя, поэтому родителю нужна заданная высота.

```tsx
<Box height={240}>
  <Scrollable>
    {messages.map((message) => <Message key={message.id} {...message} />)}
  </Scrollable>
</Box>
```

::playground{src=scrollable/ScrollableBasicDemo caption="Прокрутите список — полоса появляется при движении"}

Полоса скрывается через 300 мс после остановки указателя и снова появляется при прокрутке или наведении. Цвет полосы следует теме приложения.

## Ограничение высоты

Если у родителя нет заданной высоты, передайте `maxHeight`: контейнер растёт вместе с содержимым до этого значения, а дальше прокручивается. Короткое содержимое не получает ни пустого места, ни полосы.

```tsx
<Scrollable maxHeight={120}>
  {options.map((option) => <Option key={option} label={option} />)}
</Scrollable>
```

::playground{src=scrollable/ScrollableMaxHeightDemo caption="Длинный список упирается в 120px и прокручивается, короткий остаётся своей высоты"}

## Направление прокрутки

`overflowX` и `overflowY` задают поведение каждой оси и по умолчанию равны `'scroll'`. `'hidden'` полностью отключает ось: полосы нет, прокрутка жестом тоже невозможна. Для горизонтальной ленты отключите вертикальную ось и задайте содержимому `width: max-content`.

```tsx
<Scrollable overflowX="scroll" overflowY="hidden">
  <Flex gap="s" style={{ width: 'max-content' }}>
    {tags.map((tag) => <Label key={tag}>{tag}</Label>)}
  </Flex>
</Scrollable>
```

::playground{src=scrollable/ScrollableAxesDemo caption="Горизонтальная лента тегов"}

Кроме `'scroll'` и `'hidden'`, принимаются `'visible'`, `'visible-hidden'` и `'visible-scroll'` — они пробрасываются в OverlayScrollbars как есть.

## Программная прокрутка

`ref` указывает на внешнюю обёртку, а не на прокручиваемый элемент: реальным viewport управляет OverlayScrollbars внутри. Чтобы получить его — для `scrollTo`, `scrollTop`, подписки на `scroll` — используйте `controlRef` и метод `getViewport()`. Он возвращает `null`, пока полоса прокрутки не инициализировалась.

```tsx
const controlRef = useRef<ScrollableRef>(null);

const scrollToTop = () => {
  controlRef.current?.getViewport()?.scrollTo({ top: 0, behavior: 'smooth' });
};

<Scrollable controlRef={controlRef}>
  <LongContent />
</Scrollable>
```

::playground{src=scrollable/ScrollableProgrammaticDemo caption="Кнопки управляют прокруткой через controlRef"}

## Несколько областей на экране

`Scrollable` позволяет прокручивать зоны интерфейса независимо — например, сайдбар и основной контент. Внутри flex-колонки обёртка имеет `min-height: 0`, поэтому сжимается и прокручивается рядом с фиксированной шапкой или подвалом, а не растягивает колонку.

```tsx
<Flex style={{ height: 600 }}>
  <Box width={200} style={{ flexShrink: 0 }}>
    <Scrollable><Navigation /></Scrollable>
  </Box>
  <Box style={{ flex: 1, minWidth: 0 }}>
    <Scrollable><PageContent /></Scrollable>
  </Box>
</Flex>
```

::playground{src=scrollable/ScrollableLayoutDemo caption="Сайдбар и контент прокручиваются независимо"}

## Свойства

:::prop[children]{type="ReactNode"}
Прокручиваемое содержимое.
:::

:::prop[overflowX]{type="'scroll' | 'hidden' | 'visible' | 'visible-hidden' | 'visible-scroll'" default="'scroll'"}
Поведение горизонтальной оси. `'hidden'` полностью отключает ось.
:::

:::prop[overflowY]{type="'scroll' | 'hidden' | 'visible' | 'visible-hidden' | 'visible-scroll'" default="'scroll'"}
Поведение вертикальной оси.
:::

:::prop[maxHeight]{type="number | string"}
Максимальная высота: контейнер растёт вместе с содержимым до этого значения, затем прокручивается. Без него контейнер занимает всю высоту родителя.
:::

:::prop[controlRef]{type="Ref<ScrollableRef>"}
Императивный доступ к реальному viewport — `{ getViewport: () => HTMLElement | null }`. Используйте для программной прокрутки или подписки на нативное событие `scroll`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на внешнюю обёртку (видимый бокс), а не на прокручиваемый viewport.
:::

:::note
`className`, `style` и остальные `HTMLAttributes` применяются к внешней обёртке, а не к viewport. Для доступа к viewport используйте `controlRef`.
:::

## Похожие темы

- [Drawer](/ru/components/overlays/drawer) — боковая панель; её длинное содержимое прокручивается на базе `Scrollable`
- [Modal](/ru/components/overlays/modal) — диалог, у которого высокая панель прокручивается целиком
- [Dropdown](/ru/components/overlays/dropdown) — меню, список которого упирается в `maxHeight` и прокручивается
- [Flex](/ru/components/layout/flex) — компонент для раскладки содержимого внутри `Scrollable`
