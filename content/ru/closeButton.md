# Close Button

`CloseButton` — готовая кнопка для закрытия и скрытия элементов интерфейса: панелей, модалок, тостов, карточек. Это обёртка над `Button` с иконкой `X` по умолчанию (переопределяется пропом `icon`), `showLabel={false}` и локализованным доступным именем из `closeButton.ariaLabel`. Подсказка при наведении намеренно отключена — иконка крестика понятна без неё.

## Базовое использование

```tsx
<CloseButton onClick={handleClose} />
```

::playground{src=CloseButtonBasicDemo caption="Нажмите, чтобы скрыть кнопку"}

По умолчанию доступное имя приходит из локализации и меняется вместе с пропом `language` на `Application`. Если один крестик среди нескольких должен называться точнее — переопределите его пропом `label`.

## Размеры

`CloseButton` наследует все размеры `Button`.

```tsx
<CloseButton size="mini" />
<CloseButton size="s" />
<CloseButton size="m" />
<CloseButton size="l" />
<CloseButton size="xl" />
```

::playground{src=CloseButtonSizesDemo caption="mini, s, m, l, xl"}

## В шапке панели

Типичное место использования — правый верхний угол панели, модалки или карточки, рядом с заголовком.

```tsx
<Flex justify="between" align="center">
  <Text weight="medium">Settings</Text>
  <CloseButton onClick={() => setOpen(false)} />
</Flex>
```

::playground{src=CloseButtonHeaderDemo caption="Нажмите крестик, чтобы закрыть панель"}

:::note
`Modal` и `Drawer` уже включают `CloseButton` в стандартную шапку — добавлять его вручную нужно только в кастомных заголовках или собственных карточках.
:::

## Свойства

`CloseButton` отдаёт наружу узкий набор, а не весь `Button`. Пропы `showLabel`/`tooltip` зафиксированы, `icon` — переопределяем. Пропы `Button` вроде `variant`, `badge`, `state` или `additionalIcon` не принимаются.

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер, пробрасывается в `Button`.
:::

:::prop[icon]{type="ReactElement" default="X"}
Переопределяет иконку.
:::

:::prop[label]{type="string"}
Переопределяет доступное имя. По умолчанию — локализованная строка `closeButton.ariaLabel`.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует кнопку.
:::

:::prop[onClick]{type="(e: MouseEvent) => void"}
Обработчик клика.
:::

:::prop[asChild]{type="boolean" default="false"}
Рендерит на дочерний элемент вместо `<button>`.
:::

Плюс нативные атрибуты `<button>` (`id`, `type`, `data-*`, `onFocus`, …), кроме `aria-label` — для него используйте `label`.

## Рекомендации

**Переопределяйте `label` только по необходимости.** Обычно доступное имя из локализации — правильный выбор: крестик одинаково называется на всех языках. Проп `label` нужен, когда на экране несколько крестиков и одному нужна конкретика.

**Не оборачивайте `CloseButton` в собственный `Tooltip`.** Отсутствие подсказки — сознательное решение: иконка `X` не нуждается в пояснении, а лишняя подсказка создаёт визуальный шум при наведении.

**Используйте `CloseButton`, а не `Button` с иконкой `X` вручную.** Это не просто стилизация — компонент несёт корректную локализацию и убирает необходимость думать про `aria-label` каждый раз заново.
