# Switch

Переключатель включает или выключает что-либо, и изменение вступает в силу сразу — без кнопки «Сохранить». Используйте его для настроек, которые пользователь ожидает увидеть применёнными мгновенно: включить тёмную тему, разрешить уведомления, активировать функцию.

## Основное использование

```tsx
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onChange={setEnabled}>
  Dark theme
</Switch>
```

::playground{src=switch/SwitchBasicDemo caption="Управляемый переключатель с подписью"}

У `Switch` тот же контракт, что у [Checkbox](/ru/components/controls/checkbox): он не хранит собственного состояния, поэтому передавайте `checked` и `onChange` вместе. Отличаются только вид и роль — вспомогательные технологии объявляют его как переключатель, а не чекбокс, и промежуточного состояния `indeterminate` у него нет.

:::note
`onChange` получает **следующее** значение первым аргументом и нативное событие вторым: `(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void`. Сеттер из `useState` можно передать напрямую.
:::

## Без подписи

Если рядом с переключателем нет текста, задайте ему имя через `aria-label` или `aria-labelledby`. Они попадают на сам `<input>`, а не на обёртку.

```tsx
<Switch aria-label="Wi-Fi" checked={enabled} onChange={setEnabled} />
```

::playground{src=switch/SwitchNoLabelDemo caption="Только переключатель, имя для скринридеров задано через aria-label"}

## Размеры

`size` принимает `mini`, `s`, `m` (по умолчанию), `l` и `xl`. Он масштабирует дорожку, ползунок и подпись вместе. Кликабельная строка не бывает ниже 24px даже на `mini`.

```tsx
<Switch size="s" checked={on} onChange={setOn}>Compact</Switch>
<Switch size="l" checked={on} onChange={setOn}>Large</Switch>
```

::playground{src=switch/SwitchSizesDemo caption="Пять размеров"}

## Рискованные настройки

`danger` окрашивает подпись в опасный цвет. Используйте его, когда включение настройки несёт риск, например открывает публичный доступ.

```tsx
<Switch checked={enabled} onChange={setEnabled} danger>
  Public access to the data
</Switch>
```

::playground{src=switch/SwitchDangerDemo caption="Подпись в опасном цвете"}

:::warning
Переключатель с `danger` всё равно меняется сразу. Если действию нужно подтверждение, запросите его в `onChange` до обновления `checked`, а не после.
:::

## Недоступное состояние

`disabled` проставляется на нативный `<input>`: переключатель не реагирует на клики и клавиатуру, а его дорожка и подпись становятся серыми.

```tsx
<Switch disabled onChange={() => {}}>Notifications (unavailable)</Switch>
<Switch checked disabled onChange={() => {}}>Autosave (unavailable, on)</Switch>
```

::playground{src=switch/SwitchDisabledDemo caption="Недоступный, выключенный и включённый"}

## Внутри формы

Внутри `Form.Field` переключатель берёт `name`, `disabled` и `size` из формы. Проп, переданный самому `Switch`, приоритетнее. `name` ещё и делает значение частью нативной отправки формы.

```tsx
<Form size="l">
  <Form.Field name="email">
    <Switch checked={email} onChange={setEmail}>Email notifications</Switch>
  </Form.Field>
  <Form.Field name="sms" disabled>
    <Switch checked={sms} onChange={setSms}>SMS notifications</Switch>
  </Form.Field>
</Form>
```

::playground{src=switch/SwitchFormDemo caption="Размер берётся из формы; второе поле заблокировано"}

## Клавиатура

Фокус попадает на настоящий `<input role="switch">`, поэтому до переключателя можно дойти клавишей `Tab`. `Space` переключает его, `Enter` — нет, как и у нативного чекбокса. Кольцо фокуса появляется только при фокусе с клавиатуры.

## Ref и стилизация

`ref` указывает на корневой `<label>`. `className` и `style` тоже применяются к нему, а остальные атрибуты `<label>` передаются ему же. Чтобы изменить внешний вид переключателя, переопределите его [CSS-переменные](/ru/components/controls/switch/css-vars).

## Свойства

`Switch` принимает все свойства `Checkbox`, кроме `indeterminate`.

:::prop[checked]{type="boolean" default="false"}
Управляемое состояние.
:::

:::prop[onChange*]{type="(checked: boolean, event: ChangeEvent<HTMLInputElement>) => void"}
Вызывается, когда пользователь переключает переключатель. Первый аргумент — следующее значение, второй — нативное событие.
:::

:::prop[danger]{type="boolean" default="false"}
Окрашивает подпись в опасный цвет.
:::

:::prop[disabled]{type="boolean"}
Блокирует переключатель. Если не задан, читается из контекста формы.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер дорожки, ползунка и подписи. Если не задан, читается из контекста формы.
:::

:::prop[name]{type="string"}
Атрибут `name` у `<input>`. Если не задан, читается из контекста формы.
:::

:::prop[children]{type="ReactNode"}
Подпись рядом с переключателем. Принимает текст или любой React-узел.
:::

:::prop[aria-label]{type="string"}
Доступное имя, когда нет `children`. Применяется к `<input>`; `aria-labelledby` и `aria-describedby` работают так же.
:::

:::prop[ref]{type="Ref<HTMLLabelElement>"}
Ref корневого `<label>`.
:::

Все остальные атрибуты `<label>`, включая `className` и `style`, передаются корневому элементу.

## Похожие темы

- [Checkbox](/ru/components/controls/checkbox) — для выборов, которые сохраняются позже, и для частичного выбора
- [Form](/ru/components/controls/form) — `Form.Field` передаёт переключателю `name`, `disabled` и `size`
