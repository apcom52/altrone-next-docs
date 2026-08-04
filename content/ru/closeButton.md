# Close Button

`CloseButton` — готовая кнопка для закрытия и скрытия элементов интерфейса: панелей, модалок, тостов, карточек. Это обёртка над `Button` с зафиксированной иконкой `X`, `showLabel={false}` и локализованным доступным именем из `closeButton.ariaLabel`. Подсказка при наведении намеренно отключена — иконка крестика понятна без неё.

## Базовое использование

```tsx
<CloseButton onClick={handleClose} />
```

::playground{src=CloseButtonBasicDemo caption="Нажмите, чтобы скрыть кнопку"}

`label` компонент не принимает — доступное имя формируется автоматически из локализации и меняется вместе с пропом `language` на `AltroneApplication`.

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

`CloseButton` принимает все пропы `Button`, кроме `label` — он игнорируется, даже если передан.

:::prop[variant]{type="'default' | 'submit' | 'text'" default="'default'"}
Визуальный стиль, унаследованный от `Button`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер, унаследованный от `Button`.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует кнопку.
:::

:::prop[onClick]{type="(e: MouseEvent) => void"}
Обработчик клика.
:::

## Рекомендации

**Не передавайте `label`.** Проп внутренне вырезается — доступное имя приходит из локализации, чтобы крестик одинаково назывался на всех языках приложения.

**Не оборачивайте `CloseButton` в собственный `Tooltip`.** Отсутствие подсказки — сознательное решение: иконка `X` не нуждается в пояснении, а лишняя подсказка создаёт визуальный шум при наведении.

**Используйте `CloseButton`, а не `Button` с иконкой `X` вручную.** Это не просто стилизация — компонент несёт корректную локализацию и убирает необходимость думать про `aria-label` каждый раз заново.
