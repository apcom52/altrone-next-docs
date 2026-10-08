# Spoiler

Сворачиваемая секция с анимацией высоты. Заголовок виден всегда и переключает содержимое — это нативная кнопка, поэтому работает и мышью, и с клавиатуры (`Enter` / `Space`). Используйте для второстепенного: FAQ, необязательных полей формы, расширенных настроек.

## Базовый пример

```tsx
<Spoiler title="What is Altrone UI?">
  <Text block>Altrone UI is a React component library with a modern design system.</Text>
</Spoiler>
```

::playground{src=spoiler/SpoilerBasicDemo caption="Нажмите на заголовок, чтобы раскрыть содержимое"}

## Раскрыт по умолчанию

`defaultOpen` задаёт начальное состояние неуправляемого спойлера. После первого рендера компонент живёт сам и игнорирует проп.

```tsx
<Spoiler title="System requirements" defaultOpen>
  <Text block>React 19 or later and TypeScript 5+.</Text>
</Spoiler>
```

::playground{src=spoiler/SpoilerDefaultOpenDemo caption="Первый блок раскрыт, второй свёрнут"}

## Список FAQ

Несколько `Spoiler` подряд образуют список с разделителями без дополнительной обёртки. Они независимы — можно раскрыть сколько угодно одновременно.

```tsx
{faqs.map((faq) => (
  <Spoiler key={faq.id} title={faq.question}>
    <Text block>{faq.answer}</Text>
  </Spoiler>
))}
```

::playground{src=spoiler/SpoilerFaqDemo caption="Можно раскрыть несколько секций одновременно"}

## Реакция на переключение

`onToggle` получает новое состояние (`true` — открыт) и событие клика после каждого переключения. Используйте для аналитики или ленивой загрузки содержимого.

```tsx
<Spoiler
  title="Advanced settings"
  onToggle={(open) => {
    if (open) loadAdvancedSettings();
  }}
>
  <AdvancedSettingsForm />
</Spoiler>
```

## Управляемое состояние

Передайте `open` вместо `defaultOpen`, чтобы владеть состоянием снаружи: компонент отрисует то, что ему передали, и только просит об изменении через `onToggle`.

```tsx
const [open, setOpen] = useState(false);

<Spoiler title="Advanced settings" open={open} onToggle={setOpen}>
  <AdvancedSettingsForm />
</Spoiler>
```

::playground{src=spoiler/SpoilerControlledDemo caption="Кнопка и заголовок управляют одним и тем же состоянием"}

## Одна открытая секция

`Spoiler` не ограничивает число открытых секций. Чтобы открытие одной закрывало остальные, храните id открытой секции в состоянии родителя и передавайте `open` каждому спойлеру.

```tsx
const [active, setActive] = useState<string | null>(null);

{sections.map((section) => (
  <Spoiler
    key={section.id}
    title={section.title}
    open={active === section.id}
    onToggle={(open) => setActive(open ? section.id : null)}
  >
    {section.content}
  </Spoiler>
))}
```

## Свойства

:::prop[title*]{type="ReactNode"}
Всегда видимый заголовок (кнопка). Строка или произвольный узел.
:::

:::prop[children]{type="ReactNode"}
Содержимое, скрытое в свёрнутом состоянии.
:::

:::prop[open]{type="boolean"}
Управляемое состояние. Без этого пропа спойлер неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние неуправляемого спойлера. Игнорируется, если передан `open`.
:::

:::prop[onToggle]{type="(open: boolean, event: MouseEvent<HTMLButtonElement>) => void"}
Вызывается после каждого переключения. `open` — новое состояние.
:::

:::prop[expandIcon]{type="ReactElement" default="<Plus />"}
Иконка свёрнутого состояния. См. вкладку [Иконки](/ru/components/layout/spoiler/icons).
:::

:::prop[collapseIcon]{type="ReactElement" default="<Minus />"}
Иконка раскрытого состояния. См. вкладку [Иконки](/ru/components/layout/spoiler/icons).
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой `<div>`.
:::

## Похожие темы

- [Collapsed List](/ru/components/layout/collapsedList) — список, который прячет длинное содержимое за кнопкой «Показать ещё»
- [Form](/ru/components/controls/form) — спойлер хорошо подходит как контейнер для необязательных полей формы
- [Анимация](/ru/foundations/motion) — как анимация ведёт себя при `prefers-reduced-motion`
