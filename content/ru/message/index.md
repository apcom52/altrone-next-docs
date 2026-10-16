# Message

`Message` — блок с сообщением прямо на странице. Он нужен, чтобы сказать пользователю что-то важное в нужном месте: что форма сохранена, что тариф скоро закончится, что соединение потеряно или что действие не удалось. Сообщение не пропадает само и не перекрывает страницу, поэтому его успевают прочитать, а цвет и иконка сразу показывают, хорошая это новость, предупреждение или ошибка.

## Базовое использование

Заголовок передаётся в `title`, пояснение — как содержимое. Оба необязательны, но хотя бы один должен быть: пустое сообщение ничего не сообщает.

```tsx
<Message title="Custom code is not validated">
  Incorrect code may impact your website's performance.
</Message>
```

::playground{src=message/MessageBasicDemo caption="Заголовок и пояснение под ним"}

## Важность

`severity` задаёт цвет и срочность: `primary` следует за акцентным цветом приложения, `success`, `warning` и `danger` — фиксированные зелёный, жёлтый и красный. Без `severity` сообщение нейтральное. Добавьте `icon`, чтобы тип считывался без цвета.

```tsx
<Message icon={<Info />} severity="primary" title="Your trial ends in 3 days." />
<Message icon={<Check />} severity="success" title="Your changes were saved." />
<Message icon={<TriangleAlert />} severity="warning" title="Storage is almost full." />
<Message icon={<CircleAlert />} severity="danger" title="Failed to connect to the server." />
```

::playground{src=message/MessageSeverityDemo caption="Нейтральное сообщение и четыре уровня важности"}

Без иконки горизонтальные отступы увеличиваются, чтобы текст не прижимался к краю.

## Закрытие

Если передать `onClose`, в углу появится кнопка закрытия. Сообщение само не скрывается и не хранит состояние — уберите его из разметки в обработчике.

```tsx
const [visible, setVisible] = useState(true);

{visible && (
  <Message severity="primary" title="New features are available." onClose={() => setVisible(false)} />
)}
```

::playground{src=message/MessageDismissibleDemo caption="После закрытия сообщение можно вернуть"}

## Действия

`actions` выводит ряд кнопок под текстом: один элемент или массив. Используйте их для следующего шага, который предлагает сообщение.

```tsx
<Message
  icon={<Download />}
  severity="success"
  title="The data export you requested is ready"
  actions={[
    <Button key="download" label="Download" variant="submit" />,
    <Button key="later" label="Maybe later" />,
  ]}
>
  The file is available for 7 days.
</Message>
```

::playground{src=message/MessageActionsDemo caption="Главное действие — выделенной кнопкой, второстепенное — обычной"}

## Компактный вид

`compact` ставит заголовок и пояснение в одну переносимую строку и центрирует их по иконке. Подходит для коротких сообщений между блоками формы или над таблицей.

```tsx
<Message icon={<Check />} severity="success" title="Successfully uploaded" compact onClose={dismiss}>
  3 files were added to the project.
</Message>
```

::playground{src=message/MessageCompactDemo caption="Заголовок и текст идут в одну строку"}

## Доступность

Корневой элемент получает роль по важности: `danger` — `role="alert"`, и скринридер сразу прерывается, чтобы его зачитать; остальные — вежливый `role="status"`. Если роль нужна другая, передайте `ariaRole`. Иконка декоративная и скрыта от скринридеров, поэтому смысл должен быть в тексте.

```tsx
<Message title="Loading data…" ariaRole="status" />
```

## Свойства

:::prop[title]{type="ReactNode"}
Заголовок сообщения. Заменяет нативный атрибут `title`, поэтому подсказки при наведении нет.
:::

:::prop[children]{type="ReactNode"}
Пояснение под заголовком.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева от текста, обычно из `lucide-react`.
:::

:::prop[severity]{type="'primary' | 'success' | 'warning' | 'danger'"}
Цвет и срочность. Без значения сообщение нейтральное.
:::

:::prop[actions]{type="ReactElement | ReactElement[] | (() => ReactElement | ReactElement[])"}
Элементы, обычно `Button`, в ряд под текстом.
:::

:::prop[onClose]{type="(event: MouseEvent<HTMLButtonElement>) => void"}
Если передан, показывает кнопку закрытия. Скрыть сообщение должен ваш код.
:::

:::prop[compact]{type="boolean" default="false"}
Заголовок и пояснение в одну переносимую строку.
:::

:::prop[ariaRole]{type="AriaRole" default="'alert' для danger, иначе 'status'"}
Заменяет роль корневого элемента.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

## Похожие темы

- [Dialogs](/ru/components/overlays/dialog) — модальный вопрос, когда ответ нужен немедленно
- [Button](/ru/components/controls/button) — кнопки для `actions`
- [Progress](/ru/components/feedback/progress) — показывает ход процесса, а не его итог
