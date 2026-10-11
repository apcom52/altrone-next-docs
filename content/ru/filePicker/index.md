# File Picker

`FilePicker` — элемент выбора файлов. Кнопка открывает системный диалог, а выбранные файлы появляются рядом в виде чипов с именем и размером. Файл можно загружать на сервер автоматически: чип показывает прогресс, ошибку и кнопку повтора.

## Основное использование

```tsx
<FilePicker autoUpload={false} onChange={(files) => console.log(files)} />
```

::playground{src=filePicker/FilePickerBasicDemo caption="Выбор файла без загрузки"}

По умолчанию пикер принимает один файл: новый выбор заменяет предыдущий. `onChange` вызывается при каждом изменении списка, будь то добавление или удаление файла.

:::warning
`autoUpload` включён по умолчанию, поэтому каждый выбранный файл сразу отправляется на сервер. Если нужны только выбранные файлы, например чтобы отправить их вместе с формой, передайте `autoUpload={false}`.
:::

:::note
`onChange` получает список первым аргументом и событие вторым: `(fileList: FileItem[], event) => void`. Событие — нативный `change` поля выбора файла при добавлении и клик по кнопке удаления при удалении.
:::

## Несколько файлов

`multiple` позволяет выбрать сразу несколько файлов, а каждый новый выбор добавляется в список.

```tsx
<FilePicker multiple autoUpload={false} />
```

::playground{src=filePicker/FilePickerMultipleDemo caption="Несколько файлов в одном пикере"}

## Типы файлов

`accept` передаётся нативному полю выбора файла, поэтому системный диалог показывает только подходящие файлы. Принимает те же значения, что и HTML-атрибут: MIME-типы, шаблоны вроде `image/*` и расширения.

```tsx
<FilePicker accept="image/*" multiple autoUpload={false} placeholder="Choose images" />
```

::playground{src=filePicker/FilePickerAcceptDemo caption="Можно выбрать только изображения"}

`accept` — подсказка для диалога, а не проверка: пользователь всё равно может выбрать любой файл, поэтому проверяйте тип и на сервере. `placeholder` меняет текст кнопки.

## Управляемый список

Передайте `value` и `onChange`, чтобы хранить список в своём состоянии. Без `value` пикер хранит список сам, а начальный список для этого режима задаётся через `defaultValue`.

```tsx
const [files, setFiles] = useState<FileItem[]>([]);

<FilePicker multiple autoUpload={false} value={files} onChange={setFiles} />
```

::playground{src=filePicker/FilePickerControlledDemo caption="Список живёт в вашем состоянии"}

Каждый элемент — это `FileItem`: `{ id?, filename?, file?, ...любые другие поля }`. `file` — нативный `File`; `id` создаётся автоматически, если его нет; дополнительные поля сохраняются и возвращаются обратно, так что серверный идентификатор можно хранить прямо в элементе.

## Загрузка на сервер

С `autoUpload` пикер сам отправляет каждый выбранный файл на `url` методом `method`, помещая файл в поле формы `name`. Пока идёт загрузка, чип показывает полосу прогресса.

```tsx
<FilePicker url="/api/upload" method="post" name="file" />
```

Внутри `Form.Field` `name` берётся из поля, так что его можно не указывать. Если запрос завершился статусом вне диапазона `200–299`, чип краснеет и показывает кнопку повтора.

## Своя загрузка

`autoUploadFn` заменяет встроенный запрос: можно загружать в облачное хранилище, добавлять заголовки или использовать свой клиент. Функция получает файл и четыре помощника, управляющих чипом: `startUploading()` переводит его в состояние загрузки, `setProgress(uploadedBytes)` двигает полосу прогресса, `complete()` отмечает успех, а `fail(message)` — ошибку.

```tsx
<FilePicker
  multiple
  autoUploadFn={async ({ file, startUploading, setProgress, complete }) => {
    startUploading();
    await upload(file, (loaded) => setProgress(loaded));
    complete();
  }}
/>
```

::playground{src=filePicker/FilePickerUploadDemo caption="Имитация загрузки с прогрессом"}

## Ошибки и повтор

Если загрузка не удалась, чип краснеет, появляется иконка ошибки с сообщением во всплывающем окне, а кнопка повтора запускает загрузку заново. Сообщение — то, что вы передали в `fail(message)`.

```tsx
autoUploadFn={async ({ startUploading, fail }) => {
  startUploading();
  fail("The server is unavailable");
}}
```

::playground{src=filePicker/FilePickerUploadFailDemo caption="Неудачная загрузка с сообщением и кнопкой повтора"}

## Удаление файлов

Кнопка удаления на чипе убирает файл из списка. С `autoUpload` пикер сначала просит сервер удалить файл: по умолчанию он отправляет запрос `DELETE` на `url` с именем файла, а `removeFileFn` заменяет этот запрос. Чип исчезает после завершения запроса. Если запрос не удался, файл остаётся.

```tsx
<FilePicker
  url="/api/upload"
  removeFileFn={async ({ pickerItem }) => {
    await deleteFile(pickerItem.id);
  }}
/>
```

В режиме одного файла тот же вызов происходит, когда старый файл заменяется новым.

## Файлы, уже лежащие на сервере

Элементы без `file` показываются как уже загруженные: на чипе только имя, загрузка не запускается. Так можно показать файлы существующей записи.

```tsx
const [files, setFiles] = useState<FileItem[]>([
  { id: "srv-1", filename: "report.pdf" },
  { id: "srv-2", filename: "invoice.pdf" },
]);

<FilePicker multiple value={files} onChange={setFiles} removeFileFn={deleteFromServer} />
```

::playground{src=filePicker/FilePickerServerFilesDemo caption="Файлы, загруженные раньше"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он меняет кнопку, высоту чипов и их текст.

::playground{src=filePicker/FilePickerSizesDemo caption="Пять размеров"}

## Блокировка

`disabled` блокирует и кнопку выбора, и кнопки на чипах: файлы нельзя ни добавить, ни удалить.

```tsx
<FilePicker disabled defaultValue={[{ id: "1", filename: "contract.pdf" }]} />
```

::playground{src=filePicker/FilePickerDisabledDemo caption="Заблокированный пикер"}

## Внутри формы

Внутри `Form.Field` пикер берёт `name`, `disabled` и `size` из формы. Проп, переданный самому `FilePicker`, главнее. Нативное поле выбора файла рендерится с этим `name`.

```tsx
<Form size="l">
  <Form.Field name="resume">
    <FilePicker autoUpload={false} />
  </Form.Field>
  <Form.Field name="portfolio" disabled>
    <FilePicker autoUpload={false} />
  </Form.Field>
</Form>
```

::playground{src=filePicker/FilePickerFormDemo caption="Размер берётся из формы; второй пикер заблокирован"}

## Ref и стилизация

`ref`, `className` и `style` применяются к корневому `<div>`, в котором лежат чипы и кнопка, а остальные атрибуты `div` передаются ему. Содержимое выстраивается в ряд и переносится, когда не хватает места.

## Свойства

:::prop[value]{type="FileItem[]"}
Текущий список файлов. Его передача делает пикер управляемым.
:::

:::prop[defaultValue]{type="FileItem[]" default="[]"}
Начальный список, когда пикер не управляемый.
:::

:::prop[onChange]{type="(fileList: FileItem[], event: ChangeEvent<HTMLInputElement> | MouseEvent) => void"}
Вызывается при добавлении или удалении файла, получает весь новый список.
:::

:::prop[multiple]{type="boolean" default="false"}
Разрешает выбрать несколько файлов; новые добавляются в список. Без него новый файл заменяет предыдущий.
:::

:::prop[accept]{type="string"}
Допустимые типы файлов, передаются нативному `<input accept>`.
:::

:::prop[placeholder]{type="string"}
Текст кнопки. По умолчанию — локализованная строка.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер кнопки и чипов. Если не задан, берётся из контекста формы.
:::

:::prop[disabled]{type="boolean"}
Блокирует пикер. Если не задан, берётся из контекста формы.
:::

:::prop[autoUpload]{type="boolean" default="true"}
Сразу отправляет каждый выбранный файл на сервер.
:::

:::prop[url]{type="string"}
Адрес загрузки. Обязателен с `autoUpload`, если не задан `autoUploadFn`.
:::

:::prop[method]{type="string" default="'POST'"}
HTTP-метод запроса загрузки.
:::

:::prop[name]{type="string"}
Имя поля формы, в котором передаётся файл. Если не задано, берётся из контекста формы.
:::

:::prop[autoUploadFn]{type="(context: FilePickerUploadContext) => Promise<void>"}
Заменяет встроенную загрузку. В контексте: `file`, `pickerItem`, `url`, `method`, `name` и помощники `startUploading`, `setProgress`, `complete`, `fail`.
:::

:::prop[removeFileFn]{type="(context: FilePickerRemoveContext) => Promise<void>"}
Заменяет встроенный запрос удаления. В контексте: `pickerItem`, `file`, `url` и `name`.
:::

:::prop[uploadIcon]{type="ReactElement"}
Иконка кнопки. См. вкладку «Иконки».
:::

:::prop[errorIcon]{type="ReactElement"}
Иконка файла с ошибкой. См. вкладку «Иконки».
:::

:::prop[retryIcon]{type="ReactElement"}
Иконка кнопки повтора. См. вкладку «Иконки».
:::

:::prop[deleteIcon]{type="ReactElement"}
Иконка кнопки удаления. См. вкладку «Иконки».
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ref корневого `<div>`.
:::

Остальные атрибуты `<div>`, кроме `onChange`, передаются корню.

## Похожие темы

- [Button](/ru/components/controls/button) — на ней построены кнопка выбора и кнопки на чипах
- [Progress](/ru/components/feedback/progress) — рисует прогресс загрузки на чипе
- [Form](/ru/components/controls/form) — `Form.Field` передаёт пикеру `name`, `disabled` и `size`
