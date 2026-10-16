# Result

`Result` — блок по центру, который сообщает пользователю итог или состояние чего-либо: ничего не найдено, операция выполнена, доступ закрыт, загрузка не удалась. Иконка в тонированном кружке, заголовок, короткое пояснение и ряд кнопок — всё посередине области, к которой это относится. Применяйте там, где целому блоку страницы нечего показать или он завершил задачу.

```tsx
import { Result } from 'altrone-ui';
```

## Базовое использование

Без свойств `Result` показывает пустое состояние с локализованным текстом «Нет данных».

```tsx
<Result />
```

::playground{src=result/ResultBasicDemo caption="По умолчанию — пустое состояние"}

## Статус

`status` задаёт иконку по умолчанию и оттенок кружка: `empty` (по умолчанию), `info`, `success`, `warning` и `error`. Окрашивается только кружок, текст остаётся нейтральным. Иконки `info`, `success`, `warning` и `error` берутся из `icons` приложения, поэтому меняются вместе с остальной библиотекой; `empty` всегда использует иконку поиска.

```tsx
<Result status="success" title="Invoice sent" />
<Result status="warning" title="Plan limit reached" />
<Result status="error" title="Upload failed" />
```

::playground{src=result/ResultStatusDemo caption="Пять статусов"}

## Заголовок и пояснение

Заголовок передаётся в `title`, пояснение — как содержимое. Если `title` нет, единственная строка содержимого становится заголовком — это удобно для таблиц и меню.

```tsx
<Result size="s">No results for "kubernetes"</Result>
```

::playground{src=result/ResultOneLineDemo caption="Одна строка без title"}

С `title` и содержимым получится заголовок и приглушённое пояснение под ним. Для `status="empty"` совсем без текста показывается локализованное «Нет данных»; остальные статусы покажут только иконку.

## Действия

`actions` размещает кнопки под текстом: один элемент, несколько или функцию, которая их возвращает. Через `icon` замените значок в кружке на подходящий по смыслу.

```tsx
<Result
  icon={<FolderPlus />}
  title="No projects yet"
  actions={
    <>
      <Button label="New project" icon={<Plus />} variant="submit" />
      <Button label="Import" icon={<Upload />} />
    </>
  }
>
  Projects group your work, deploys and members. Create the first one to get going.
</Result>
```

::playground{src=result/ResultActionsDemo caption="Пустое состояние со своей иконкой и двумя действиями"}

## Ошибки

Статус `error` отображается с `role="alert"`, поэтому скринридер зачитывает его сразу. Остальные статусы — вежливый `role="status"`. Обычное действие здесь — кнопка повтора.

```tsx
<Result
  status="error"
  title="Couldn't load activity"
  actions={<Button label="Retry" icon={<RefreshCw />} />}
>
  Something went wrong on our side. This usually clears up on its own.
</Result>
```

::playground{src=result/ResultErrorDemo caption="Ошибка с кнопкой повтора"}

## Размеры

`size` масштабирует кружок, текст и отступы: `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Малые размеры подходят для таблицы, меню или панели, большие — для целой страницы.

```tsx
<Result size="s" title="No results" />
```

::playground{src=result/ResultSizesDemo caption="Пять размеров"}

## Свойства

:::prop[status]{type="'empty' | 'info' | 'success' | 'warning' | 'error'" default="'empty'"}
Вид обратной связи. Задаёт иконку по умолчанию и оттенок кружка.
:::

:::prop[title]{type="ReactNode"}
Заголовок. Без него заголовком становится содержимое, а для `empty` — локализованное «Нет данных».
:::

:::prop[children]{type="ReactNode"}
Приглушённое пояснение под заголовком. Без `title` показывается как заголовок.
:::

:::prop[icon]{type="ReactNode"}
Заменяет значок в кружке.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Элементы, обычно `Button`, рядом под текстом.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер кружка, текста и отступов.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

## Связанные темы

- [Message](/ru/components/feedback/message) — сообщение в потоке страницы, а не целый блок
- [Notifications](/ru/components/feedback/notifications) — краткое сообщение, не занимающее места на странице
- [Button](/ru/components/controls/button) — кнопки для `actions`
