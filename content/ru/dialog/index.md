# Dialogs

`showAlert`, `showConfirm` и `showPrompt` — готовые модальные окна для трёх самых частых разговоров с пользователем: сообщить, переспросить и попросить ввести значение. Это обычные функции: их можно вызвать из обработчика клика, из стора или из любого модуля, без хуков и состояния открытия. Каждая возвращает `Promise`, который завершается, когда пользователь ответил, поэтому код читается сверху вниз через `await`.

```tsx
import { showAlert, showConfirm, showPrompt } from 'altrone-ui';
```

Для работы нужен `DialogProvider` — он уже входит в `Application`, ничего подключать не нужно. Если окно сложнее трёх готовых раскладок, используйте [Modal](/ru/components/overlays/modal).

## Сообщение

`showAlert` показывает сообщение с одной кнопкой. Промис завершается, когда окно закрыто — кнопкой, крестиком, фоном или Escape, — и ничего не возвращает.

```tsx
await showAlert({
  title: 'Connection restored',
  message: 'You are back online. Pending changes will sync now.',
  okText: 'Got it',
});
```

::playground{src=dialog/DialogAlertDemo caption="Код после await выполнится, когда окно закроют"}

## Подтверждение

`showConfirm` задаёт вопрос и возвращает `true`, если пользователь подтвердил, и `false`, если отказался или закрыл окно. Для необратимых действий добавьте `danger` — кнопка подтверждения станет красной. Подписи кнопок задают `confirmText` и `cancelText`.

```tsx
async function handleDelete(id: string) {
  const confirmed = await showConfirm({
    title: 'Delete project?',
    message: '“Design system” and all its data will be deleted permanently.',
    confirmText: 'Delete project',
    cancelText: 'Keep it',
    danger: true,
  });

  if (confirmed) await deleteProject(id);
}
```

::playground{src=dialog/DialogConfirmDemo caption="Закрытие окна крестиком или Escape считается отказом"}

## Ввод значения

`showPrompt` просит ввести значение и возвращает его, а при отмене или закрытии окна — `null`. Поэтому проверяйте результат на `null`, а не на пустую строку: пустое значение — тоже ответ.

```tsx
const name = await showPrompt({
  title: 'Rename file',
  message: 'Enter a new name for this file.',
  placeholder: 'File name',
  confirmText: 'Rename',
});

if (name !== null) await renameFile(String(name));
```

::playground{src=dialog/DialogPromptDemo caption="Отмена возвращает null, имя не меняется"}

`inputType` выбирает поле ввода: `string` (по умолчанию) — однострочное, `text` — многострочное, `password` — скрытый ввод, `number` — числовое, и тогда результат — число.

::playground{src=dialog/DialogPromptTypesDemo caption="Четыре типа поля ввода"}

## Как это работает

- Одновременно показывается одно окно. Если вызвать второе, пока первое не закрыто, оно заменит первое, а промис первого так и не завершится — всегда дожидайтесь `await` перед следующим вызовом.
- Заголовок и подписи кнопок по умолчанию берутся из локали приложения. `title` можно не задавать — тогда подставится стандартный заголовок вида окна.
- Если `DialogProvider` не смонтирован, функция пишет предупреждение в консоль и сразу завершается значением «отказа»: `undefined`, `false` или `null`.
- При вложенных провайдерах новые окна показывает самый свежий смонтированный.

## Функции

:::prop[showAlert]{type="(options: AlertOptions) => Promise<void>"}
Сообщение с кнопкой «OK». Опции: `title`, `message`, `okText`.
:::

:::prop[showConfirm]{type="(options: ConfirmOptions) => Promise<boolean>"}
Вопрос с подтверждением и отказом. Опции: `title`, `message`, `confirmText`, `cancelText`, `danger`.
:::

:::prop[showPrompt]{type="(options: PromptOptions) => Promise<string | number | null>"}
Запрос значения. Опции: `title`, `message`, `inputType`, `placeholder`, `confirmText`, `cancelText`.
:::

## Опции

:::prop[title*]{type="string"}
Заголовок окна.
:::

:::prop[message*]{type="string"}
Текст под заголовком.
:::

:::prop[okText]{type="string"}
Подпись кнопки в `showAlert`. По умолчанию — локализованное «OK».
:::

:::prop[confirmText]{type="string"}
Подпись кнопки подтверждения в `showConfirm` и `showPrompt`.
:::

:::prop[cancelText]{type="string"}
Подпись кнопки отказа в `showConfirm` и `showPrompt`.
:::

:::prop[danger]{type="boolean"}
Только `showConfirm`: красная кнопка подтверждения для необратимых действий.
:::

:::prop[inputType]{type="'string' | 'text' | 'password' | 'number'" default="'string'"}
Только `showPrompt`: тип поля ввода.
:::

:::prop[placeholder]{type="string"}
Только `showPrompt`: подсказка в поле. По умолчанию — локализованный текст.
:::

## Похожие темы

- [Modal](/ru/components/overlays/modal) — окно с произвольным содержимым и действиями, когда трёх раскладок мало
- [Drawer](/ru/components/overlays/drawer) — боковая панель для форм и списков побольше
- [Form](/ru/components/controls/form) — поля, из которых обычно строится содержимое сложного окна
