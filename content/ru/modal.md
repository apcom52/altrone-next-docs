# Modal

Диалоговое окно останавливает пользователя. Это сильный инструмент, и именно поэтому его нужно использовать экономно. `Modal` уместен там, где требуется осознанное решение: подтверждение необратимого действия, ввод критичных данных, предупреждение, которое нельзя проигнорировать. Если задача не требует полного внимания пользователя — выберите `Popover`, `Drawer` или просто сообщение на странице.

## Базовое использование

`Modal` не привязан к элементу-триггеру, в отличие от `Popover`/`Dropdown`/`Tooltip` — открывайте его явно через `open`, закрывайте через `onClose`. Содержимое передаётся в `content`, кнопки действий — в `actions`.

```tsx
const [open, setOpen] = useState(false);

<Button label="О версии" icon={<Info />} onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="О версии"
  content={<Text>Altrone UI 3.5.0 — стабильный выпуск.</Text>}
  actions={({ hide }) => (
    <Button label="Закрыть" onClick={hide} />
  )}
/>
```

::playground{src=ModalBasicDemo caption="Закрыть можно кнопкой ✕, клавишей Escape или кликом по фону"}

## Диалог подтверждения

Самый частый сценарий для `Modal` — подтверждение необратимого действия. Деструктивная кнопка должна быть в `actions` справа; кнопка отмены — рядом с ней.

```tsx
<Button label="Удалить проект" danger onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Удалить проект?"
  content={
    <Text>
      Проект и все связанные данные будут удалены безвозвратно.
      Это действие нельзя отменить.
    </Text>
  }
  actions={({ hide }) => [
    <Button key="cancel" label="Отмена" onClick={hide} />,
    <Button
      key="delete"
      label="Удалить"
      variant="submit"
      danger
      onClick={() => { handleDelete(); hide(); }}
    />,
  ]}
/>
```

::playground{src=ModalConfirmDemo caption="Называйте деструктивную кнопку действием, а не «Да»"}

:::warning
Диалог подтверждения не защищает от случайного нажатия, если пользователь уже знает, что нажмёт «Удалить». Для действительно критичных операций добавьте дополнительный шаг: введите название объекта для подтверждения.
:::

## Размеры

Три размера позволяют подобрать диалог под количество содержимого.

```tsx
<Modal open={open} onClose={close} title="Подтверждение" size="s" content={<Text>Краткий вопрос.</Text>} />
<Modal open={open} onClose={close} title="Редактировать профиль" size="m" content={<ProfileForm />} />
<Modal open={open} onClose={close} title="Предварительный просмотр" size="l" content={<PreviewPanel />} />
```

::playground{src=ModalSizesDemo caption="s — для коротких вопросов, m — для форм, l — для просмотра данных"}

## Форма внутри модального окна

`Modal` хорошо работает для небольших форм создания или редактирования, когда нужно запросить данные, не покидая текущий контекст.

```tsx
<Button label="Новая папка" icon={<FolderPlus />} onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => {
    setOpen(false);
    setName("");
    setErrors({});
  }}
  title="Новая папка"
  content={
    <Form errorMessages={errors}>
      <Form.Field name="name" label="Название" required>
        <TextInput value={name} onChange={setName} placeholder="Проекты 2026" />
      </Form.Field>
    </Form>
  }
  actions={({ hide }) => (
    <Flex gap="s">
      <Button label="Отмена" onClick={hide} />
      <Button
        label="Создать"
        variant="submit"
        onClick={() => handleSave(hide)}
      />
    </Flex>
  )}
/>
```

::playground{src=ModalWithFormDemo caption="Попробуйте нажать «Создать» с пустым полем"}

:::tip
Сбрасывайте состояние формы в `onClose`. Пользователь мог закрыть диалог кнопкой ✕ или кликом по фону — в обоих случаях следующее открытие должно начинаться с чистого листа.
:::

## Деструктивное действие слева

Если у диалога есть основное действие и отдельное деструктивное — разместите деструктивное в `additionalActions`. Это визуально отделяет опасное действие от безопасного.

```tsx
<Button label="Редактировать" onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Редактировать запись"
  content={<EditForm />}
  additionalActions={({ hide }) => (
    <Button label="Удалить" danger onClick={() => { handleDelete(); hide(); }} />
  )}
  actions={({ hide }) => [
    <Button key="cancel" label="Отмена" onClick={hide} />,
    <Button key="save" label="Сохранить" variant="submit" onClick={handleSave} />,
  ]}
/>
```

## Свойства

:::prop[open]{type="boolean"}
Управляемое состояние открытия. Без этого пропа `Modal` неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние открытия для неуправляемого `Modal`. Игнорируется, если передан `open`.
:::

:::prop[title*]{type="string"}
Заголовок диалога, отображается в шапке.
:::

:::prop[content]{type="ReactNode | ((ctx: { hide: () => void }) => ReactNode)"}
Основное содержимое. Может быть функцией — тогда получает `hide`.
:::

:::prop[actions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Основные кнопки действий справа в футере. Может быть функцией с `hide`.
:::

:::prop[additionalActions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Дополнительные кнопки слева в футере — для деструктивных действий.
:::

:::prop[size]{type="'s' | 'm' | 'l'" default="'m'"}
Ширина диалога.
:::

:::prop[showCloseButton]{type="boolean" default="true"}
Кнопка ✕ в шапке. Передайте `false`, чтобы убрать её — например, когда закрытие возможно только через кнопки футера.
:::

:::prop[showCancelButton]{type="boolean" default="true"}
Встроенная кнопка «Отмена» перед `actions` в футере. Передайте `false`, чтобы убрать её.
:::

:::prop[onClose]{type="(event?: MouseEvent | KeyboardEvent) => void"}
Вызывается при закрытии диалога: кнопкой ✕, клавишей Escape, кликом по фону или вызовом `hide()`. Для управляемого `Modal` это единственное место, где нужно перевести `open` обратно в `false` — сам компонент себя не закрывает.
:::

## Рекомендации

**Задавайте вопрос в заголовке, а не в тексте.** «Удалить проект?» в заголовке — пользователь сразу понимает, что от него хотят. «Вы уверены?» в тексте — расплывчато и неинформативно.

**Называйте кнопки действиями.** «Удалить» вместо «Да», «Отмена» вместо «Нет», «Сохранить и выйти» вместо «OK». Пользователь должен понять смысл нажатия, не читая текст диалога.

**Диалог — не способ отобразить информацию.** Уведомления, инструкции, справочные тексты не требуют прерывания. Используйте `Callout`-блоки на странице, `Tooltip` или раздел документации. Диалог — только для действий.

**Не открывайте диалог поверх диалога.** Вложенные модальные окна дезориентируют. Если после действия в диалоге нужно показать ещё один диалог — пересмотрите поток.

**Небольшие формы — в `Modal`, большие — в `Drawer` или на отдельной странице.** Диалог с прокруткой теряет смысл: пользователь не видит, где начало и конец. Если форма не помещается на экране — выберите другой паттерн.
