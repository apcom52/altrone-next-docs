# Drawer

Боковая панель выдвигается поверх текущего экрана — и не уводит пользователя никуда. Это её главное преимущество: пользователь продолжает видеть контекст, из которого действует, и может вернуться к нему одним движением. Используйте `Drawer` для рабочих задач, которые требуют формы или списка настроек, но не заслуживают отдельной страницы.

## Базовое использование

`Drawer` не привязан к элементу-триггеру, в отличие от `Popover`/`Dropdown`/`Tooltip` — открывайте его явно через `open`, закрывайте через `onClose`. Содержимое панели передаётся в `content`.

```tsx
const [open, setOpen] = useState(false);

<Button label="Открыть настройки" icon={<Settings />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Настройки профиля"
  content={<ProfileForm />}
/>
```

::playground{src=DrawerBasicDemo caption="Закрыть можно кнопкой ✕, клавишей Escape или кликом по фону"}

## Футер с действиями

Разместите кнопки в `footer`, если панель требует явного подтверждения. Футер остаётся видимым при прокрутке содержимого.

```tsx
<Button label="Фильтры" icon={<Filter />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Фильтры"
  content={<FilterPanel />}
  footer={
    <Flex gap="s" style={{ width: "100%" }}>
      <Button label="Сбросить" variant="text" />
      <Button label="Применить" variant="submit" style={{ flex: 1 }} />
    </Flex>
  }
/>
```

::playground{src=DrawerFooterDemo caption="Футер закреплён внизу и не прокручивается вместе с содержимым"}

## Расположение

По умолчанию панель выдвигается слева. `placement="end"` — справа. Выбор зависит от того, в какой части интерфейса находится триггер и откуда пользователь ожидает появления панели.

```tsx
<Button label="Уведомления" icon={<Bell />} badge={4} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Уведомления"
  placement="end"
  content={<NotificationList />}
/>
```

::playground{src=DrawerEndDemo caption="Панель появляется справа — placement=end"}

## Кнопка готово с валидацией

`onDone` принимает асинхронную функцию. Пока она выполняется, кнопка показывает состояние загрузки. Если вернуть `false` — панель остаётся открытой. Используйте для форм с валидацией на стороне сервера или клиента.

```tsx
<Button label="Создать задачу" variant="submit" onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Новая задача"
  content={<TaskForm ref={formRef} />}
  onDone={async () => {
    const ok = await formRef.current.submit();
    return ok ? undefined : false;
  }}
/>
```

::playground{src=DrawerDoneDemo caption="Нажмите «Готово» с пустым полем — панель останется открытой"}

## Кастомные действия в заголовке

`actions` полностью заменяет кнопку «Готово» в шапке; `additionalActions` добавляет элементы после кнопки закрытия. Обе принимают один элемент, массив или функцию, получающую `hide`.

```tsx
<Button label="Поделиться" icon={<Share />} onClick={() => setOpen(true)} />
<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Поделиться"
  content={<SharePanel />}
  actions={({ hide }) => (
    <Button
      label="Скопировать ссылку"
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

## Рекомендации

**`Drawer` — не замена странице.** Боковая панель хорошо работает для форм из 3–5 полей, фильтров, деталей записи. Если форма занимает больше — создайте отдельный экран. Переполненная панель сложнее страницы: она скроллится, у неё нет URL, к ней нельзя вернуться.

**Кнопка «Готово» для операций, кнопки в футере — для навигации.** `onDone` в шапке — это финальное действие, оно закрывает панель. Кнопки в `footer` могут делать что угодно: применять фильтры, сбрасывать их, переходить к следующему шагу.

**Не блокируйте закрытие.** Пользователь всегда должен иметь возможность закрыть панель: кнопкой ✕, клавишей Escape или кликом по фону. Не перехватывайте это поведение, если только данные не могут быть потеряны — в этом случае показывайте диалог подтверждения.

**Используйте `placement="end"` для контекста, привязанного к правому краю.** Уведомления, детали выбранного элемента в правой части экрана, предварительный просмотр — всё это естественно появляется справа.
