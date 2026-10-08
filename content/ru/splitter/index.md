# Splitter

`Splitter` разбивает пространство на панели, границу между которыми пользователь может перемещать. Это возможность отдать пользователю контроль над экранным пространством: в IDE, редакторе или дашборде разные зоны имеют разную ценность в разные моменты, и пользователь сам решает, сколько места отдать каждой.

## Базовое разбиение

Оберните `Splitter.Panel` в `Splitter`. `Splitter` заполняет родителя целиком, поэтому задайте родителю фиксированную высоту.

```tsx
<div style={{ height: 400 }}>
  <Splitter>
    <Splitter.Panel defaultSize={30} minSize={20} maxSize={60}>
      <Sidebar />
    </Splitter.Panel>
    <Splitter.Panel>
      <MainContent />
    </Splitter.Panel>
  </Splitter>
</div>
```

::playground{src=splitter/SplitterBasicDemo caption="Перетащите разделитель, чтобы изменить размеры панелей"}

Размеры задаются в процентах от контейнера. Панели без `defaultSize` делят оставшееся место поровну. `minSize` и `maxSize` ограничивают, как далеко можно сдвинуть разделитель. Содержимое каждой панели прокручивается независимо.

## Вертикальное разбиение

`orientation="vertical"` располагает панели друг под другом. Классический пример — редактор кода с превью или терминалом внизу.

```tsx
<Splitter orientation="vertical">
  <Splitter.Panel defaultSize={60}>
    <CodeEditor />
  </Splitter.Panel>
  <Splitter.Panel>
    <Preview />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterVerticalDemo caption="Вертикальное разбиение — редактор и результат"}

## Любое количество панелей

Панелей может быть больше двух — между каждой парой соседних появляется свой разделитель. `defaultSize`, `minSize` и `maxSize` задаются для каждой панели отдельно.

```tsx
<Splitter>
  <Splitter.Panel defaultSize={20} minSize={15} maxSize={30}>
    <FileTree />
  </Splitter.Panel>
  <Splitter.Panel defaultSize={55}>
    <CodeEditor />
  </Splitter.Panel>
  <Splitter.Panel>
    <Problems />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterThreePanelsDemo caption="Макет из трёх панелей в стиле IDE"}

## Сворачиваемые панели

`collapsible` позволяет пользователю полностью свернуть панель кнопкой на разделителе. У свёрнутой панели на разделителе остаётся кнопка разворачивания; когда она видна, определяет `collapsedControlsVisibility` (`'always'`, `'hover'` или `'never'`), а `showControls={false}` убирает кнопки совсем. `onCollapse` сообщает о каждом изменении.

Чтобы сворачивать и разворачивать панель из своего кода, передайте `controlRef` — он предоставляет `collapse`, `expand` и `toggle` (каждый принимает индекс панели), а также `getSizes` и `getCollapsed`.

```tsx
const controlRef = useRef<SplitterHandle>(null);

<>
  <Button label="Collapse sidebar" onClick={() => controlRef.current?.collapse(0)} />
  <Button label="Expand sidebar" onClick={() => controlRef.current?.expand(0)} />

  <Splitter controlRef={controlRef}>
    <Splitter.Panel defaultSize={30} collapsible>
      <Sidebar />
    </Splitter.Panel>
    <Splitter.Panel>
      <Content />
    </Splitter.Panel>
  </Splitter>
</>
```

::playground{src=splitter/SplitterCollapsibleDemo caption="Используйте кнопки или стрелку на разделителе"}

## Клавиатура

Каждый разделитель получает фокус. `←`/`→` (в вертикальном — `↑`/`↓`) сдвигают его на 1%, с `Shift` — на 10%. `Home` и `End` отодвигают его до ближайшей границы.

## Контролируемые размеры

Передайте `sizes` вместе с `onSizesChange`, чтобы самому владеть раскладкой — сбрасывать её, синхронизировать между экранами или хранить в сторе. `onSizesChange` срабатывает по окончании перетаскивания и при сворачивании или разворачивании панели.

```tsx
const [sizes, setSizes] = useState([30, 70]);

<Splitter sizes={sizes} onSizesChange={setSizes}>
  <Splitter.Panel>
    <Left />
  </Splitter.Panel>
  <Splitter.Panel>
    <Right />
  </Splitter.Panel>
</Splitter>
```

::playground{src=splitter/SplitterControlledDemo caption="Раскладка хранится в состоянии и может быть сброшена"}

Для обновлений прямо во время перетаскивания используйте `onResize`; `onResizeStart` и `onResizeEnd` отмечают его начало и конец.

## Свойства

### Splitter

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление разбиения. `horizontal` — панели рядом, `vertical` — друг под другом.
:::

:::prop[sizes]{type="number[]"}
Контролируемые размеры панелей в процентах, в порядке панелей. Работает в паре с `onSizesChange`. Без него режим неконтролируемый — каждая панель стартует со своего `defaultSize`.
:::

:::prop[onSizesChange]{type="(sizes: number[]) => void"}
Вызывается, когда размеры устоялись, — по окончании перетаскивания или при сворачивании и разворачивании панели.
:::

:::prop[onResize]{type="(sizes: number[], event: PointerEvent) => void"}
Вызывается при каждом движении указателя во время перетаскивания.
:::

:::prop[onResizeStart]{type="(sizes: number[], event: PointerEvent) => void"}
Вызывается в начале перетаскивания.
:::

:::prop[onResizeEnd]{type="(sizes: number[], event: PointerEvent) => void"}
Вызывается однократно по окончании перетаскивания. Удобно для сохранения раскладки.
:::

:::prop[onCollapse]{type="(panelIndex: number, collapsed: boolean, event?: MouseEvent) => void"}
Вызывается при сворачивании или разворачивании панели. `event` отсутствует, если изменение пришло из `controlRef`.
:::

:::prop[showControls]{type="boolean" default="true"}
Кнопки сворачивания и разворачивания на разделителях сворачиваемых панелей.
:::

:::prop[collapsedControlsVisibility]{type="'always' | 'hover' | 'never'" default="'always'"}
Когда показывается кнопка разворачивания свёрнутой панели. `never` скрывает её — такую панель разворачивают через `controlRef`.
:::

:::prop[controlRef]{type="Ref<SplitterHandle>"}
Императивный доступ: `collapse`, `expand`, `toggle`, `getSizes` и `getCollapsed`.
:::

:::prop[icons]{type="Partial<SplitterIconSet>"}
Замена иконок-шевронов на разделителе. См. [Иконки](/ru/components/layout/splitter/icons).
:::

### Splitter.Panel

:::prop[defaultSize]{type="number"}
Начальный размер в процентах (0–100). Панели без него делят оставшееся место поровну.
:::

:::prop[minSize]{type="number" default="0"}
Минимальный размер в процентах.
:::

:::prop[maxSize]{type="number" default="100"}
Максимальный размер в процентах.
:::

:::prop[collapsible]{type="boolean" default="false"}
Позволяет полностью свернуть панель кнопкой на разделителе.
:::

:::prop[resizable]{type="boolean" default="true"}
При `false` соседние с этой панелью разделители нельзя перетащить.
:::

:::prop[className]{type="string"}
Класс, добавляемый на корневой `<div>` панели.
:::

:::prop[style]{type="CSSProperties"}
Инлайн-стили корневого `<div>` панели. Внутренний `flex`, отвечающий за размер, всегда побеждает при конфликте.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой `<div>` панели.
:::

## Похожие темы

- [Scrollable](/ru/components/layout/scrollable) — в него оборачивается содержимое каждой панели
- [Screen](/ru/components/layout/screen) — раскладка уровня страницы, в которой часто живёт `Splitter`
- [Клавиатура](/ru/foundations/keyboard) — клавиатурные соглашения библиотеки
