# Notifications

`showToast` и `showNotification` показывают недолговечное сообщение поверх страницы: тост подтверждает действие одной строкой, уведомление — карточка с заголовком, иконкой, картинкой и кнопками. Это обычные функции, поэтому их можно вызывать из обработчика клика, стора или любого модуля, без хуков и состояния. Ни одно из сообщений не блокирует интерфейс, и оба закрываются сами.

```tsx
import { showToast, showNotification, dismissNotification } from 'altrone-ui';
```

Стек монтирует `Application`, поэтому ничего настраивать не нужно. Без смонтированного `Notifications` функции только предупреждают в консоли.

## Тосты

`showToast` принимает текст и возвращает `id` тоста. Тост — это «таблетка» с иконкой и кнопкой закрытия. Он исчезает через 4 секунды, а пока над ним курсор, таймер приостановлен.

```tsx
<Button
  label="Save changes"
  onClick={() => showToast('Changes saved successfully.', { variant: 'success' })}
/>
```

::playground{src=notifications/NotificationsToastDemo caption="Тост появляется внизу экрана"}

### Варианты

`variant` задаёт цвет и иконку по умолчанию: `default`, `success`, `warning` и `danger`. Иконки берутся из `icons` приложения. Чтобы заменить иконку, передайте `icon`, а `icon: null` её скрывает.

```tsx
showToast('New version available.');
showToast('Item created.', { variant: 'success' });
showToast('Low storage space.', { variant: 'warning' });
showToast('Upload failed.', { variant: 'danger' });
```

::playground{src=notifications/NotificationsVariantsDemo caption="Четыре варианта"}

### Действие

`action` добавляет в тост кнопку, обычно для отмены только что сделанного. Тост сам не закрывается при нажатии, поэтому вызовите `dismissNotification` в обработчике.

```tsx
const id = showToast('File deleted.', {
  action: {
    label: 'Undo',
    onClick: () => {
      restoreFile();
      dismissNotification(id);
    },
  },
});
```

::playground{src=notifications/NotificationsUndoDemo caption="Отмена закрывает тост"}

## Уведомления

`showNotification` показывает карточку. Обязателен только `content`; `title`, `icon`, `image` и `actions` добавляйте по необходимости. Нажатие любого действия вызывает его обработчик и закрывает карточку. Время по умолчанию — 6 секунд.

```tsx
showNotification({
  title: 'Your export is ready',
  content: 'The file is available for 7 days.',
  icon: <Download />,
  actions: [
    { label: 'Download', onClick: download },
    { label: 'Later', onClick: () => {} },
  ],
});
```

::playground{src=notifications/NotificationsCardDemo caption="Карточка с иконкой и двумя действиями"}

`image` — адрес картинки, которая показывается вдоль верхнего края карточки, а `danger: true` у действия делает его кнопку красной.

```tsx
showNotification({
  title: 'Release 2.0 is out',
  content: 'New components and performance improvements.',
  image: '/images/release-banner.png',
  actions: [{ label: 'Read changelog', onClick: openChangelog }],
});
```

## Закрытие

`autoClose: false` оставляет тост или карточку, пока их не закроют крестиком или через `dismissNotification(id)`. `duration` задаёт время в миллисекундах. Постоянный тост подходит для фонового процесса, который вы закроете сами по завершении.

```tsx
const id = showToast('Syncing in background…', { autoClose: false });
await sync();
dismissNotification(id);
showToast('Sync complete.', { variant: 'success' });
```

::playground{src=notifications/NotificationsPersistentDemo caption="Тост живёт, пока идёт работа"}

## Расположение

Расположение общее для всего приложения и задаётся один раз на `Application`; позиции для отдельного вызова нет. `toastPlacement` — край стека тостов (`top` или `bottom`, всегда по центру), `notificationPlacement` — угол стека карточек.

```tsx
<Application toastPlacement="top" notificationPlacement="top-start">
  <App />
</Application>
```

`notificationPlacement` принимает `top-start`, `top-end`, `bottom-start` и `bottom-end` — в том же виде, что `placement` у `Popover`. Сторона физическая, а `start` и `end` следуют направлению письма.

## Вызов вне React

Поскольку это обычные функции, показывать сообщение можно откуда угодно, в том числе из экшена стора.

```tsx
export async function uploadFile(file: File) {
  try {
    await api.upload(file);
    showToast('Upload complete.', { variant: 'success' });
  } catch {
    showToast('Upload failed.', { variant: 'danger' });
  }
}
```

Если смонтировано несколько провайдеров `Notifications`, новые вызовы получает смонтированный последним, а при его размонтировании — предыдущий.

## API

### showToast(message, options?)

Показывает тост и возвращает его `id`.

:::prop[variant]{type="'default' | 'success' | 'warning' | 'danger'" default="'default'"}
Цвет и иконка по умолчанию.
:::

:::prop[icon]{type="ReactNode"}
Заменяет иконку. `null` скрывает её.
:::

:::prop[action]{type="{ label: string; onClick: (event: MouseEvent<HTMLButtonElement>) => void }"}
Кнопка внутри тоста.
:::

:::prop[duration]{type="number" default="4000"}
Время до закрытия в миллисекундах.
:::

:::prop[autoClose]{type="boolean" default="true"}
Закрывать ли тост самостоятельно.
:::

### showNotification(options)

Показывает карточку и возвращает её `id`.

:::prop[content*]{type="ReactNode"}
Содержимое карточки.
:::

:::prop[title]{type="string"}
Заголовок.
:::

:::prop[icon]{type="ReactNode"}
Иконка рядом с заголовком.
:::

:::prop[image]{type="string"}
Адрес картинки вдоль верхнего края карточки.
:::

:::prop[actions]{type="{ label: string; onClick: (event: MouseEvent<HTMLButtonElement>) => void; danger?: boolean }[]"}
Кнопки внизу. Нажатие на любую также закрывает карточку.
:::

:::prop[duration]{type="number" default="6000"}
Время до закрытия в миллисекундах.
:::

:::prop[autoClose]{type="boolean" default="true"}
Закрывать ли карточку самостоятельно.
:::

### dismissNotification(id)

Закрывает тост или карточку по `id`, который вернула функция показа.

### Application

:::prop[toastPlacement]{type="'top' | 'bottom'" default="'bottom'"}
Край стека тостов.
:::

:::prop[notificationPlacement]{type="'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'" default="'bottom-end'"}
Угол стека карточек.
:::

## Связанные темы

- [Обратная связь](/ru/feedback) — как выбрать между тостом, сообщением и диалогом
- [Диалоги](/ru/components/overlays/dialog) — модальный вопрос, когда ответ нужен сразу
- [Message](/ru/components/feedback/message) — сообщение, которое остаётся на странице
- [Result](/ru/components/feedback/result) — итог операции в целом блоке
