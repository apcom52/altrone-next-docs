# Splitter

Разделитель разбивает пространство на панели, границу между которыми пользователь может перемещать. Это не просто декор — это возможность отдать пользователю контроль над тем, как он распределяет экранное пространство под свою задачу. IDE, редакторы, дашборды — везде, где разные зоны интерфейса имеют разную ценность в разные моменты, `Splitter` даёт пользователю нужную гибкость.

## Базовое разбиение

Оберните `Splitter.Panel`-компоненты в `Splitter`. Задайте родителю фиксированную высоту — `Splitter` заполняет её целиком.

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

::playground{src=SplitterBasicDemo caption="Перетащите разделитель для изменения размеров панелей"}

## Вертикальное разбиение

`orientation="vertical"` разбивает пространство по горизонтали — верхняя и нижняя панели. Классический пример — редактор кода с превью или терминалом внизу.

```tsx
<div style={{ height: 600 }}>
  <Splitter orientation="vertical">
    <Splitter.Panel defaultSize={60}>
      <CodeEditor />
    </Splitter.Panel>
    <Splitter.Panel>
      <Preview />
    </Splitter.Panel>
  </Splitter>
</div>
```

::playground{src=SplitterVerticalDemo caption="Вертикальный разделитель — редактор и результат"}

## Три панели

`Splitter` поддерживает любое количество панелей. Задайте `defaultSize` и ограничения `minSize`/`maxSize` для каждой.

```tsx
<Splitter>
  <Splitter.Panel defaultSize={20} minSize={15} maxSize={30}>
    <FileTree />
  </Splitter.Panel>
  <Splitter.Panel defaultSize={55}>
    <CodeEditor />
  </Splitter.Panel>
  <Splitter.Panel>
    <Terminal />
  </Splitter.Panel>
</Splitter>
```

::playground{src=SplitterThreePanelsDemo caption="Макет из трёх панелей в стиле IDE"}

## Сворачиваемые панели

`collapsible` позволяет полностью свернуть панель кнопкой на разделителе. `controlRef` даёт доступ к императивному API для программного управления.

```tsx
const controlRef = useRef<SplitterHandle>(null);

<>
  <Button label="Свернуть" onClick={() => controlRef.current?.collapse(0)} />
  <Button label="Развернуть" onClick={() => controlRef.current?.expand(0)} />

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

::playground{src=SplitterCollapsibleDemo caption="Используйте кнопки или стрелку на разделителе"}

## Сохранение размеров

`onResizeEnd` срабатывает один раз в конце перетаскивания. Используйте для сохранения настроек пользователя.

```tsx
<Splitter onResizeEnd={(sizes) => localStorage.setItem("sizes", JSON.stringify(sizes))}>
  <Splitter.Panel defaultSize={savedSizes[0] ?? 30}>
    <Left />
  </Splitter.Panel>
  <Splitter.Panel defaultSize={savedSizes[1] ?? 70}>
    <Right />
  </Splitter.Panel>
</Splitter>
```

## Свойства Splitter

:::prop[orientation]{type="'horizontal' | 'vertical'" default="'horizontal'"}
Направление разбиения. `horizontal` — левая и правая панели. `vertical` — верхняя и нижняя.
:::

:::prop[showControls]{type="boolean" default="true"}
Кнопки сворачивания/разворачивания на разделителях.
:::

:::prop[onResize]{type="(sizes: number[], event: PointerEvent) => void"}
Вызывается при каждом движении во время перетаскивания. `sizes` — массив процентов.
:::

:::prop[onResizeEnd]{type="(sizes: number[], event: PointerEvent) => void"}
Вызывается однократно по окончании перетаскивания. Удобно для сохранения состояния.
:::

:::prop[onCollapse]{type="(panelIndex: number, collapsed: boolean, event?: MouseEvent) => void"}
Вызывается при сворачивании или разворачивании панели.
:::

:::prop[controlRef]{type="Ref<SplitterHandle>"}
Ссылка на объект с методами `collapse`, `expand`, `toggle`, `getSizes`, `getCollapsed`.
:::

## Свойства Splitter.Panel

:::prop[defaultSize]{type="number"}
Начальный размер панели в процентах. Неконтролируемое состояние.
:::

:::prop[minSize]{type="number" default="0"}
Минимальный размер в процентах.
:::

:::prop[maxSize]{type="number" default="100"}
Максимальный размер в процентах.
:::

:::prop[collapsible]{type="boolean" default="false"}
Разрешает полное сворачивание панели.
:::

:::prop[resizable]{type="boolean" default="true"}
При `false` соседний разделитель нельзя перетащить.
:::

:::prop[className]{type="string"}
Класс, добавляемый на корневой `<div>` панели — вместо оборачивания содержимого в собственный `<div>`.
:::

:::prop[style]{type="CSSProperties"}
Инлайн-стили для корневого `<div>` панели. Внутренний `flex` (отвечающий за размер) всегда побеждает при конфликте.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой `<div>` панели.
:::

## Рекомендации

**Всегда задавайте `minSize`.** Без ограничения минимума пользователь может ужать панель до нуля — и потерять содержимое из виду. 15–20% — разумный минимум для большинства панелей.

**`collapsible` — для панелей, которые можно убрать целиком.** Сайдбар с навигацией, панель свойств, терминал — они полезны не всегда. Позвольте пользователю убрать их, когда не нужны.

**Сохраняйте размеры между сессиями.** Если пользователь потратил время на настройку раскладки, он ожидает увидеть её при следующем визите. `onResizeEnd` + `localStorage` — минимально достаточное решение.

**`Splitter` — для рабочих интерфейсов.** Редакторы, IDE-подобные приложения, дашборды с настраиваемыми панелями — здесь он на месте. На маркетинговой странице или в мобильном интерфейсе он избыточен.
