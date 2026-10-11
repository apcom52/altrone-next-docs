# File Picker

`FilePicker` рисует собственные иконки: на кнопке выбора, иконку ошибки у файла с ошибкой и иконки кнопок повтора и удаления на чипе. Каждую можно заменить. Полоса прогресса загрузки — не иконка и заменить её нельзя.

:::spoiler[Как заменить иконки]
Передайте `uploadIcon`, `errorIcon`, `retryIcon` и `deleteIcon`, чтобы изменить один `FilePicker`. Замена занимает место иконки по умолчанию в том же слоте и, как любая иконка `lucide-react`, подбирает размер сама.

```tsx
import { CircleAlert, FolderUp, RefreshCw, X } from "lucide-react";

<FilePicker
  uploadIcon={<FolderUp />}
  errorIcon={<CircleAlert />}
  retryIcon={<RefreshCw />}
  deleteIcon={<X />}
/>
```

::playground{src=filePicker/FilePickerIconsDemo caption="Другие иконки кнопки и файла с ошибкой"}

Чтобы поменять иконку ошибки у всех пикеров приложения, задайте общую иконку `error` у `Application` через проп `icons` — проп у `FilePicker` всё равно главнее. Остальные три иконки через общую настройку не меняются.

Все пропы принимают любой `ReactElement`. Автоматический размер привязан к классу `lucide`, поэтому иконке из другой библиотеки нужен явный размер около `16px` — см. статью [Иконки](/ru/foundations/icons).
:::

## Иконки

::::icon-cards
:::icon-card[uploadIcon]{icon="Upload"}
Показывает, что кнопка открывает диалог выбора файла
:::

:::icon-card[errorIcon]{icon="CircleAlert"}
Сигнализирует о неудавшейся загрузке и открывает сообщение об ошибке
:::

:::icon-card[retryIcon]{icon="RotateCw"}
Запускает загрузку файла с ошибкой заново
:::

:::icon-card[deleteIcon]{icon="Trash2"}
Убирает файл из списка
:::
::::
