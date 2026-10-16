# Progress

`Progress` — горизонтальная полоса, которая показывает, какая часть процесса уже выполнена: загрузка файла, шаг мастера, заполненность хранилища. Компонент полностью управляемый — он рисует ровно то значение, которое ему передали, и сам ничего не считает во времени.

## Базовое использование

Передайте `value` — по умолчанию шкала идёт от `0` до `100`, а на полосе показывается процент.

```tsx
<Progress value={60} />
```

::playground{src=progress/ProgressBasicDemo caption="Подпись по умолчанию — процент выполненного"}

## Подпись

`label` заменяет процент своим текстом или разметкой. Функция получает `{ value, min, max, percentage }`, поэтому подпись можно собрать из любых чисел: «42 of 200 GB», «Step 3 of 8».

```tsx
<Progress value={42} label="Uploading files…" />

<Progress
  value={3}
  max={8}
  aria-label="Step 3 of 8"
  label={({ value, max }) => `Step ${value} of ${max}`}
/>
```

::playground{src=progress/ProgressLabelDemo caption="Строка, функция с процентом и счётчик шагов"}

Строковая `label` одновременно становится `aria-label`. Если подпись не строка, у полосы нет доступного имени — передайте `aria-label` рядом.

## Диапазон

`min` и `max` задают границы шкалы. Заливка считается как `(value − min) / (max − min)` и ограничивается 0–100%, поэтому значение за пределами диапазона просто упирается в край.

```tsx
<Progress
  min={100}
  max={200}
  value={140}
  aria-label="Temperature"
  label={({ value }) => `${value}°`}
/>
```

::playground{src=progress/ProgressRangeDemo caption="Шкала от 100 до 200: значение 140 — это 40%"}

## Размеры

`size` меняет высоту полосы и размер подписи: `mini` — 18px, `s` — 24px, `m` (по умолчанию) — 32px, `l` — 40px, `xl` — 48px.

```tsx
<Progress size="mini" value={60} />
<Progress size="xl" value={60} />
```

::playground{src=progress/ProgressSizesDemo caption="Пять размеров"}

## Живое обновление

Обновляйте `value` по мере продвижения процесса — полоса и подпись перерисуются. Заливка меняется мгновенно, поэтому передавайте значения достаточно часто, чтобы движение выглядело плавным.

```tsx
const [uploaded, setUploaded] = useState(0);

<Progress value={uploaded} max={file.size} label={({ percentage }) => `${percentage}% uploaded`} />
```

::playground{src=progress/ProgressLiveDemo caption="Нажмите «Start upload»"}

## Доступность

Полоса имеет роль `progressbar` и атрибуты `aria-valuenow`, `aria-valuemin` и `aria-valuemax`; текущее значение ограничивается диапазоном. Для строковой `label` имя подставляется автоматически, для остальных — задайте `aria-label` сами.

## Свойства

:::prop[value]{type="number" default="0"}
Текущее значение.
:::

:::prop[min]{type="number" default="0"}
Нижняя граница шкалы.
:::

:::prop[max]{type="number" default="100"}
Верхняя граница шкалы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Высота полосы и размер подписи.
:::

:::prop[label]{type="ReactNode | ((ctx: { value: number; min: number; max: number; percentage: number }) => ReactNode)"}
Подпись на полосе. По умолчанию — процент. Нестроковая подпись требует `aria-label`.
:::

:::prop[activeClassName]{type="string"}
Дополнительный класс для заполненной части.
:::

:::prop[activeStyle]{type="CSSProperties"}
Инлайновые стили заполненной части.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

## Похожие темы

- [Loading](/ru/components/feedback/loading) — индикатор для процесса с неизвестной длительностью
- [Message](/ru/components/feedback/message) — сообщение об итоге процесса
- [Dialogs](/ru/components/overlays/dialog) — подтверждение перед запуском долгой операции
