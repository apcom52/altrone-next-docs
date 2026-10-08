# Modal

Диалоговое окно появляется поверх страницы, затемняет фон и забирает на себя всё внимание пользователя: клики за его пределами не проходят, фокус заперт внутри. `Modal` — для осознанных решений: подтверждения необратимого действия, ввода небольшой порции данных, предупреждения, которое нельзя пропустить.

## Базовое использование

В отличие от `Popover`/`Dropdown`/`Tooltip`, `Modal` не привязан к элементу-триггеру — открывайте его явно через `open`, закрывайте через `onClose`. Содержимое передаётся в `content`, заголовок — в `title`.

```tsx
const [open, setOpen] = useState(false);

<Button label="About this version" icon={<Info />} onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="About this version"
  content={<Text block>Altrone UI 4.0 is a beta release.</Text>}
/>
```

::playground{src=modal/ModalBasicDemo caption="Закрыть можно кнопкой ✕, «Cancel», клавишей Escape или кликом по фону"}

В футере по умолчанию есть встроенная кнопка отмены, а в шапке — кнопка закрытия ✕; отключаются они через `showCancelButton` и `showCloseButton`. Футер не рисуется вовсе, если в нём нечего показать: `showCancelButton={false}` и нет ни `actions`, ни `additionalActions`.

Если `open` не передан, `Modal` работает как неуправляемый и сам хранит состояние, начиная с `defaultOpen`. Это удобно, когда окно монтируется только на время показа.

## Действия

Кнопки действий передаются в `actions` и выводятся в футере справа, после встроенной кнопки отмены. Принимают один элемент, массив или функцию, которая получает `hide` — закрыть окно, не трогая собственное состояние.

```tsx
<Button label="Delete project" icon={<Trash />} danger onClick={() => setOpen(true)} />
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Delete project?"
  size="s"
  content={<Text block>“Design system” and all its data will be deleted permanently.</Text>}
  actions={({ hide }) => (
    <Button
      label="Delete project"
      variant="submit"
      danger
      onClick={() => {
        handleDelete();
        hide();
      }}
    />
  )}
/>
```

::playground{src=modal/ModalConfirmDemo caption="Встроенная «Cancel» стоит рядом с действием, отдельно рисовать её не нужно"}

`hide` доступен и в `content`: передайте функцию вместо элемента, чтобы закрыть окно изнутри содержимого — например, после успешной отправки формы.

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Upload file"
  content={({ hide }) => <FileUploadForm onSuccess={hide} />}
/>
```

## Дополнительные действия

`additionalActions` выводятся в футере с противоположной от `actions` стороны — слева. Туда уместно вынести второстепенное или деструктивное действие, чтобы оно не стояло рядом с основным.

```tsx
<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Edit record"
  content={<EditForm />}
  additionalActions={({ hide }) => (
    <Button label="Delete" variant="text" danger onClick={hide} />
  )}
  actions={({ hide }) => (
    <Button label="Save changes" variant="submit" onClick={hide} />
  )}
/>
```

::playground{src=modal/ModalAdditionalActionsDemo caption="«Delete» слева, «Save changes» справа"}

## Форма внутри окна

В `content` можно разместить небольшую форму. Состояние формы живёт снаружи `Modal`, поэтому сбрасывайте его в `onClose`: окно закрывается и крестиком, и фоном, и Escape, и следующее открытие должно начинаться с чистого листа.

```tsx
<Modal
  open={open}
  onClose={() => {
    setOpen(false);
    setName("");
    setErrors({});
  }}
  title="New folder"
  content={
    <Form errorMessages={errors}>
      <Form.Field name="name" label="Name" required>
        <TextInput value={name} onChange={setName} placeholder="Projects 2026" />
      </Form.Field>
    </Form>
  }
  actions={({ hide }) => (
    <Button label="Create" variant="submit" onClick={() => handleCreate(hide)} />
  )}
/>
```

::playground{src=modal/ModalFormDemo caption="Нажмите «Create» с пустым полем — окно останется открытым"}

## Размеры

`size` задаёт ширину окна: `s` — 280px, `m` (по умолчанию) — 400px, `l` — 640px. Любое другое значение `Size` ведёт себя как `m`.

```tsx
<Modal open={open} onClose={close} title="Discard changes?" size="s" content={<Text>…</Text>} />
<Modal open={open} onClose={close} title="Edit profile" size="m" content={<ProfileForm />} />
<Modal open={open} onClose={close} title="Preview" size="l" content={<PreviewPanel />} />
```

::playground{src=modal/ModalSizesDemo caption="Ширина окна — s, m и l"}

Если окно выше экрана, прокручивается вся панель целиком, вместе с шапкой и футером; колесо мыши работает над любой точкой подложки.

## Свойства

:::prop[content*]{type="ReactElement | ((ctx: { hide: () => void }) => ReactElement)"}
Основное содержимое. Может быть функцией — тогда получает `hide`.
:::

:::prop[open]{type="boolean"}
Управляемое состояние открытия. Без этого пропа `Modal` неуправляемый — см. `defaultOpen`.
:::

:::prop[defaultOpen]{type="boolean" default="false"}
Начальное состояние открытия для неуправляемого `Modal`. Игнорируется, если передан `open`.
:::

:::prop[title]{type="string"}
Заголовок окна, отображается в шапке и подписывает диалог для скринридеров.
:::

:::prop[size]{type="'s' | 'm' | 'l'" default="'m'"}
Ширина окна: 280, 400 или 640 пикселей.
:::

:::prop[actions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Кнопки действий справа в футере, после встроенной кнопки отмены. Может быть функцией с `hide`.
:::

:::prop[additionalActions]{type="StrictReactElements | ((ctx: { hide: () => void }) => StrictReactElements)"}
Дополнительные кнопки в футере с противоположной от `actions` стороны — слева.
:::

:::prop[showCloseButton]{type="boolean" default="true"}
Кнопка ✕ в шапке. Передайте `false`, чтобы убрать её — например, когда закрыть окно можно только кнопками футера.
:::

:::prop[showCancelButton]{type="boolean" default="true"}
Встроенная кнопка «Cancel» перед `actions` в футере. Передайте `false`, чтобы убрать её.
:::

:::prop[enabled]{type="boolean" default="true"}
При `false` окно не рисуется, даже если `open` или `defaultOpen` просят его показать.
:::

:::prop[onClose]{type="(event?: MouseEvent | KeyboardEvent) => void"}
Вызывается при закрытии окна: кнопкой ✕ или «Cancel», кликом по фону, Escape или вызовом `hide()`; для `hide()` `event` не передаётся. Для управляемого `Modal` это единственное место, где нужно перевести `open` обратно в `false` — сам компонент себя не закрывает.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой DOM-элемент — подложку окна.
:::

## Похожие темы

- [Drawer](/ru/components/overlays/drawer) — боковая панель для форм и списков побольше, которые не заслуживают отдельной страницы
- [Popover](/ru/components/overlays/popover) — плавающая панель, привязанная к элементу-триггеру, когда внимание пользователя забирать не нужно
- [Form](/ru/components/controls/form) — компонент для полей, из которых обычно строится содержимое `Modal`
