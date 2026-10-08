# Button

Кнопка — это точка, в которой намерение пользователя превращается в действие. Нажатие должно ощущаться мгновенным и предсказуемым: пользователь смотрит на кнопку и сразу понимает, что произойдёт. Если это требует объяснений — что-то пошло не так ещё до того, как он нажал.

## Варианты

Каждый вариант кнопки несёт определённый вес в интерфейсе. Используйте их последовательно — это помогает пользователю ориентироваться в иерархии действий.

:::col-3
::playground{src=button/ButtonDefaultDemo}

**Default**

Основной вариант для нейтральных действий: «Сохранить черновик», «Назад», «Закрыть». Не привлекает лишнего внимания, но остаётся заметным.

```tsx
<Button label="Save draft" />
```

---

::playground{src=button/ButtonSubmitDemo}

**Submit**

Для главного действия на экране. Используйте не более одной такой кнопки в области — иначе иерархия разрушается.

```tsx
<Button label="Send" variant="submit" />
```

---

::playground{src=button/ButtonTextDemo}

**Text**

Для второстепенных и служебных действий рядом с основной кнопкой. Не конкурирует визуально, но остаётся доступной.

```tsx
<Button label="Cancel" variant="text" />
```

:::

## Размеры

Размер кнопки определяет её место в пространстве интерфейса, а не её важность.

```tsx
<Button size="mini" label="mini" />
<Button size="s"    label="Small" />
<Button size="m"    label="Medium" />
<Button size="l"    label="Large" />
<Button size="xl"   label="Extra large" />
```

::playground{src=button/ButtonSizesDemo caption="Все пять размеров рядом"}

`m` — размер по умолчанию. Подходит для большинства контекстов. `s` и `mini` хорошо работают в плотных интерфейсах: таблицах, тулбарах, компактных карточках. `l` и `xl` — для акцентных зон на странице или мобильных интерфейсов с крупными зонами касания.

## Опасные действия

Модификатор `danger` применяет красный цвет ко всем вариантам кнопки. Он сигнализирует о необратимости: удалении, потере данных, выходе без сохранения.

```tsx
<Button label="Delete account" danger />
<Button label="Delete account" variant="submit" danger />
<Button label="Delete" variant="text" danger />
```

::playground{src=button/ButtonDangerDemo caption="Модификатор danger на всех трёх вариантах"}

:::warning
Не используйте `danger` как способ привлечь внимание. Красная кнопка — это обещание: нажав её, пользователь что-то потеряет. Нарушение этого обещания разрушает доверие.
:::

## Иконки

`icon` и `additionalIcon` имеют тип `ReactElement` — никакого реестра иконок, из которого нужно выбирать, нет. Берите ту библиотеку иконок, которую ваше приложение уже использует.

```tsx
import { Send, ChevronDown } from "lucide-react";

<Button label="Send" icon={<Send />} />
<Button label="More options" additionalIcon={<ChevronDown />} />
<Button label="Export" icon={<Download />} additionalIcon={<ChevronDown />} />
```

::playground{src=button/ButtonIconsDemo caption="icon, additionalIcon и обе иконки вместе"}

Иконка слева уточняет смысл действия. Иконка справа подсказывает, что кнопка сделает дальше: раскроет меню, откроет страницу, развернёт блок.

Кнопка сама подбирает размер слота иконки под `size`, поэтому иконкам из `lucide-react` не нужно передавать `size` и `color`.

:::tip
Иконка работает лучше всего, когда усиливает слово, а не заменяет его. Если без иконки кнопка понятна — иконка не обязательна.
:::

### Кнопки только с иконкой

`showLabel={false}` скрывает подпись визуально и превращает кнопку в круг. Метка при этом остаётся: она становится доступным именем для скринридеров и подсказкой при наведении.

```tsx
import { X, Settings } from "lucide-react";

<Button label="Close panel" showLabel={false} icon={<X />} />
<Button label="Settings" showLabel={false} icon={<Settings />} />
```

::playground{src=button/ButtonIconOnlyDemo caption="Наведите на кнопку, чтобы увидеть подсказку"}

Если нужна подсказка с другим текстом — используйте `tooltip`. Сочетание клавиш добавляется пропом `kbd`. Оборачивать кнопку в `Tooltip` вручную не нужно — получится две подсказки, открывающиеся одновременно.

```tsx
<Button
  label="Sort alphabetically"
  showLabel={false}
  icon={<AArrowUp />}
  tooltip="Sort A → Z"
/>

<Button label="Save" showLabel={false} icon={<Save />} kbd="⌘S" />
```

`badge` на кнопке только с иконкой не встаёт в строку, а парит над её правым верхним углом.

:::warning
Кнопки только с иконкой требуют, чтобы иконка была безусловно узнаваема вашей аудиторией. Если есть сомнения — оставьте подпись.
:::

## Бейдж

Бейдж позволяет встроить в кнопку небольшой контекст: счётчик уведомлений, статус, метку «Новое».

```tsx
<Button label="Notifications" badge={5} />
<Button label="Export" badge="NEW" />
<Button label="Pay later" badge="+20%" danger />
```

::playground{src=button/ButtonBadgeDemo caption="Счётчик, текстовая метка и badge с danger"}

## Асинхронные состояния

Prop `state` управляет обратной связью при длительных операциях. Пока состояние отличается от `idle`, кнопка автоматически блокируется и показывает индикатор.

```tsx
const [state, setState] = useState<"idle" | "loading" | "succeeded" | "failed">(
  "idle",
);

async function handleSave() {
  setState("loading");
  try {
    await save();
    setState("succeeded");
  } catch {
    setState("failed");
  } finally {
    setTimeout(() => setState("idle"), 2000);
  }
}

<Button label="Save" state={state} onClick={handleSave} />;
```

::playground{src=button/ButtonStateDemo caption="Нажмите любую из кнопок — она покажет загрузку, а затем результат"}

| Состояние   | Что показывает                |
| ----------- | ----------------------------- |
| `idle`      | Обычная кнопка                |
| `loading`   | Спиннер, кнопка заблокирована |
| `succeeded` | Галочка                       |
| `failed`    | Крестик                       |

:::tip
После `succeeded` или `failed` верните `state` в `idle` — иначе кнопка останется заблокированной. Обычно это делается через `setTimeout`.
:::

## Кнопка-переключатель

`selected` превращает кнопку в переключатель. Атрибут `aria-pressed` устанавливается автоматически.

```tsx
const [active, setActive] = useState(false);

<Button
  label="Wi-Fi"
  icon={<Wifi />}
  selected={active}
  onClick={() => setActive((v) => !v)}
/>;
```

::playground{src=button/ButtonSelectedDemo caption="Нажмите, чтобы переключить состояние"}

Хорошо работает для режимов просмотра, фильтров и любых состояний «включено / выключено».

## Использование как другой элемент (asChild)

`asChild` объединяет стили и поведение кнопки с дочерним элементом. Это полезно, когда нужен визуальный стиль кнопки, но семантика ссылки или кастомного компонента.

```tsx
import { Link } from "react-router-dom";

<Button label="Go to profile" icon={<User />} asChild>
  <Link to="/profile" />
</Button>;
```

:::note
`asChild` требует ровно одного дочернего элемента. Если `children` — не валидный React-элемент, компонент вернёт `null` и выведет ошибку в консоль.
:::

## Свойства

:::prop[label*]{type="string"}
Текст кнопки. Обязательный. Используется как видимая подпись, доступное имя для скринридеров и текст всплывающей подсказки при `showLabel={false}`.
:::

:::prop[variant]{type="'default' | 'submit' | 'text'" default="'default'"}
Визуальный стиль кнопки. `submit` — заливка основным цветом, главное действие. `text` — без фона и рамки, второстепенное действие.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер кнопки. Определяет высоту, padding и размер шрифта.
:::

:::prop[danger]{type="boolean" default="false"}
Применяет красное цветовое оформление. Используйте только для необратимых действий.
:::

:::prop[icon]{type="ReactElement"}
Иконка слева от текста.
:::

:::prop[additionalIcon]{type="ReactElement"}
Иконка справа от текста. Подходит для обозначения раскрытия меню или перехода.
:::

:::prop[showLabel]{type="boolean" default="true"}
При `false` скрывает текст визуально. Кнопка автоматически оборачивается в `Tooltip` с текстом из `tooltip` или `label`.
:::

:::prop[tooltip]{type="string | ReactElement"}
Текст всплывающей подсказки. Используется только при `showLabel={false}`, переопределяет `label`.
:::

:::prop[kbd]{type="string"}
Бейдж сочетания клавиш в автоматической подсказке (например `"⌘S"`). Используется только при `showLabel={false}`.
:::

:::prop[badge]{type="number | string | ReactElement"}
Небольшой бейдж внутри кнопки: счётчик, метка или статус.
:::

:::prop[state]{type="'idle' | 'loading' | 'succeeded' | 'failed'" default="'idle'"}
Состояние асинхронной операции. Любое значение, кроме `idle`, блокирует кнопку и заменяет содержимое соответствующим индикатором.
:::

:::prop[successIcon]{type="ReactElement"}
Иконка для состояния `state="succeeded"`. По умолчанию — галочка.
:::

:::prop[failedIcon]{type="ReactElement"}
Иконка для состояния `state="failed"`. По умолчанию — крестик.
:::

:::prop[selected]{type="boolean" default="false"}
Состояние переключателя. Устанавливает `aria-pressed` и применяет выбранный визуальный стиль.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует кнопку. Также применяется автоматически, когда `state !== 'idle'`.
:::

:::prop[type]{type="'button' | 'submit' | 'reset'" default="'button'"}
HTML-тип кнопки. По умолчанию `"button"` — не `"submit"`, как в браузере.
:::

:::prop[asChild]{type="boolean" default="false"}
Объединяет стили и поведение кнопки с дочерним элементом через паттерн Slot.
:::

## Похожие темы

- [Действия](/ru/foundations/actions) — как понятия `Button` (акцент, danger, selected) сохраняются в тулбарах и меню
- [Доступность](/ru/foundations/accessibility) — правило доступного имени, стоящее за кнопками только с иконкой
- [Иконки](/ru/foundations/icons) — общий для библиотеки контракт иконок, которому следуют `icon` и `additionalIcon`
- [Загрузка](/ru/foundations/loading) — как `state="loading"` вписывается в остальные паттерны загрузки
