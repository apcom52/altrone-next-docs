# Drawer

Боковая панель выдвигается поверх текущего экрана — и не уводит пользователя никуда. Это её главное преимущество: пользователь продолжает видеть контекст, из которого действует, и может вернуться к нему одним движением. Используйте `Drawer` для рабочих задач, которые требуют формы или списка настроек, но не заслуживают отдельной страницы.

## Базовое использование

`Drawer` не привязан к элементу-триггеру, в отличие от `Popover`/`Dropdown`/`Tooltip` — открывайте его явно через `open`, закрывайте через `onClose`. Содержимое панели передаётся в `content`.

```tsx
const [open, setOpen] = useState(false);

<Button label="Open settings" icon={<Settings />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Profile settings"
  content={<ProfileForm />}
/>
```

::playground{src=drawer/DrawerBasicDemo caption="Закрыть можно кнопкой ✕, клавишей Escape или кликом по фону"}

## Футер с действиями

Разместите кнопки в `footer`, если панель требует явного подтверждения. Футер остаётся видимым при прокрутке содержимого.

```tsx
<Button label="Filters" icon={<Filter />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Filters"
  content={<FilterPanel />}
  footer={
    <Flex gap="s" style={{ width: "100%" }}>
      <Button label="Reset" variant="text" />
      <Button label="Apply filters" variant="submit" style={{ flex: 1 }} />
    </Flex>
  }
/>
```

::playground{src=drawer/DrawerFooterDemo caption="Футер закреплён внизу и не прокручивается вместе с содержимым"}

## Расположение

По умолчанию панель выдвигается слева. `placement="end"` — справа. Выбор зависит от того, в какой части интерфейса находится триггер и откуда пользователь ожидает появления панели.

```tsx
<Button label="Notifications" icon={<Bell />} badge={4} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Notifications"
  placement="end"
  content={<NotificationList />}
/>
```

::playground{src=drawer/DrawerEndDemo caption="Панель появляется справа — placement=end"}

## Кнопка готово с валидацией

`onDone` принимает асинхронную функцию. Пока она выполняется, кнопка показывает состояние загрузки. Если вернуть `false` — панель остаётся открытой. Используйте для форм с валидацией на стороне сервера или клиента.

Если `onDone` бросает ошибку или возвращает отклонённый Promise, панель остаётся открытой, встряхивается, а кнопка «Готово» снова доступна для повторной попытки. Ошибка перехватывается внутри компонента; подробности ошибки показывайте в содержимом. Закрытие или размонтирование отменяет применение результата: старая операция не закроет повторно открытую панель и не изменит её загрузку. Тряска использует ту же обратную связь, что и отклонённое закрытие, и сохраняется при reduced motion.

```tsx
<Button label="Create task" variant="submit" onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="New task"
  content={<TaskForm ref={formRef} />}
  onDone={async () => {
    const ok = await formRef.current.submit();
    return ok ? undefined : false;
  }}
/>
```

::playground{src=drawer/DrawerDoneDemo caption="Нажмите «Готово» с пустым полем — панель останется открытой"}

## Кастомные действия в заголовке

`actions` полностью заменяет кнопку «Готово» в шапке; `additionalActions` добавляет элементы после кнопки закрытия. Обе принимают один элемент, массив или функцию, получающую `hide`.

```tsx
<Button label="Share" icon={<Share />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Share"
  content={<SharePanel />}
  actions={({ hide }) => (
    <Button
      label="Copy link"
      icon={<Link />}
      onClick={() => {
        copyLink();
        hide();
      }}
    />
  )}
/>
```

## Свойства

:::prop[open]{type="boolean"}
Управляемое состояние открытия. Без этого пропа `Drawer` неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние открытия для неуправляемого `Drawer`. Игнорируется, если передан `open`.
:::

:::prop[title]{type="string"}
Заголовок панели, отображается в шапке.
:::

:::prop[content]{type="ReactElement"}
Основное содержимое. Рендерится внутри прокручиваемой области.
:::

:::prop[footer]{type="ReactElement"}
Содержимое футера. Остаётся видимым при прокрутке.
:::

:::prop[placement]{type="'start' | 'end'" default="'start'"}
Сторона, с которой выдвигается панель. `start` — слева, `end` — справа.
:::

:::prop[width]{type="number" default="400"}
Ширина панели в пикселях.
:::

:::prop[dismissible]{type="boolean" default="true"}
Если `false`, клик по фону и `Escape` больше не закрывают панель — вместо этого она слегка «встряхивается». Кнопка закрытия и `onDone` продолжают закрывать её как обычно.
:::

:::prop[showCloseButton]{type="boolean" default="true"}
Показывать ли кнопку закрытия в шапке.
:::

:::prop[onDone]{type="(event: MouseEvent) => Promise<boolean | void>"}
Асинхронный обработчик кнопки «Готово». Возврат `false` оставляет панель открытой. Любой другой результат закрывает её.
:::

:::prop[onClose]{type="(event?: MouseEvent | KeyboardEvent) => void"}
Вызывается при закрытии панели — кнопкой ✕, фоном, Escape или после `onDone`. Для управляемого `Drawer` это единственное место, где нужно перевести `open` обратно в `false` — сам компонент себя не закрывает.
:::

:::prop[additionalActions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Дополнительные элементы после кнопки закрытия в шапке.
:::

:::prop[actions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Основные элементы в конце шапки. Заменяет кнопку «Готово», если передан.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой DOM-элемент панели.
:::

## Похожие темы

- [Modal](/ru/components/overlays/modal) — блокирующий диалог для решений, которые требуют полного внимания пользователя, в отличие от ненавязчивого `Drawer`
- [Popover](/ru/components/overlays/popover) — плавающая панель, привязанная к элементу-триггеру, когда не нужна отдельная боковая панель
- [Form](/ru/components/controls/form) — компонент для полей, из которых обычно строится содержимое `Drawer`
