# Splitter

## Всегда задавайте `minSize`

Без нижней границы пользователь может ужать панель до нуля, потерять её содержимое из виду и не понять, куда оно делось. 15–20% — разумный минимум для большинства панелей.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineMinSizeGoodDemo caption="Ни одну панель нельзя ужать до невидимости"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineMinSizeBadDemo caption="Разделитель можно утащить так, что панель исчезнет"}
:::
::::

## Давайте сворачивать редко нужные панели

Сайдбар, панель свойств или терминал полезны не всегда. `collapsible` позволяет убрать панель одним кликом и так же легко вернуть, вместо того чтобы тянуть разделитель к самому краю.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineCollapsibleGoodDemo caption="Панель убирается кнопкой на разделителе"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineCollapsibleBadDemo caption="Панель можно только уменьшить, но не убрать"}
:::
::::

## Берите `Splitter`, только когда важно менять размеры

`Splitter` — для рабочих интерфейсов, где пользователь подстраивает раскладку под задачу. Если ни одну панель менять нельзя, делить нечего: обычная раскладка на `Flex` или `Grid` проще и не рисует разделители, которые ничего не делают.

::::good-bad
:::good
::playground{src=splitter/SplitterGuidelineFixedGoodDemo caption="Фиксированная раскладка — это просто Flex"}
:::

:::bad
::playground{src=splitter/SplitterGuidelineFixedBadDemo caption="Все панели заблокированы, разделители бессмысленны"}
:::
::::

## Запоминайте раскладку

Если пользователь потратил время на настройку рабочего пространства, он ожидает увидеть то же самое в следующий раз. Сохраняйте `sizes` в `onResizeEnd` (или `onSizesChange`) и возвращайте их через `defaultSize` или контролируемый `sizes`.

```tsx
<Splitter
  sizes={sizes}
  onSizesChange={(next) => {
    setSizes(next);
    localStorage.setItem("layout", JSON.stringify(next));
  }}
>
  <Splitter.Panel>
    <Left />
  </Splitter.Panel>
  <Splitter.Panel>
    <Right />
  </Splitter.Panel>
</Splitter>
```

## Доступность

- Каждый разделитель — фокусируемый `separator` с `aria-valuenow`, `aria-valuemin` и `aria-valuemax`, поэтому скринридер озвучивает его положение.
- Разделитель двигается стрелками, `Shift` даёт шаг побольше, `Home`/`End` — до границ.
- Каждая панель получает локализованный `aria-label` («Панель 1», «Панель 2», …).
- Кнопки сворачивания — иконки без подписи, но с локализованными метками. Не отключайте `showControls`, не дав пользователю другого способа вернуть свёрнутую панель.
- Разделитель рядом со свёрнутой панелью или панелью с `resizable={false}` исключается из порядка табуляции.
