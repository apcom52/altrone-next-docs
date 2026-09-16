# Checkbox

Чекбокс — это элемент выбора «да / нет». Он отвечает на вопрос: «применить ли это к данному объекту?». В отличие от радио-кнопок, чекбоксы независимы друг от друга: можно выбрать любое количество одновременно.

## Основное использование

::playground{src=CheckboxBasicDemo}

```tsx
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onChange={(v) => setChecked(v)}>
  Я согласен с условиями
</Checkbox>
```

Дочерний текст становится подписью рядом с чекбоксом. `onChange` вызывается с новым булевым значением — не нужно читать `e.target.checked` вручную.

## Неопределённое состояние

`indeterminate` используется, когда чекбокс управляет группой и часть элементов выбрана, а часть — нет. Это стандартный паттерн «выбрать всё».

::playground{src=CheckboxIndeterminateDemo}

```tsx
const allChecked = selected.length === OPTIONS.length;
const someChecked = selected.length > 0 && !allChecked;

<Checkbox
  checked={allChecked}
  indeterminate={someChecked}
  onChange={toggleAll}
>
  Все языки
</Checkbox>
```

:::note
`indeterminate` не влияет на значение `checked` — логику «некоторые выбраны» нужно
реализовывать в коде. При этом состояние проставляется на нативном `<input>`
(свойство `indeterminate`), поэтому скринридеры объявляют чекбокс как `mixed`.
:::

## Размеры

`size` (`mini` / `s` / `m` / `l` / `xl`) масштабирует бокс, галочку и текст подписи
вместе. Кликабельная строка не становится ниже 24px даже на `mini`.

```tsx
<Checkbox size="s" checked={checked} onChange={setChecked}>Компактно</Checkbox>
<Checkbox size="l" checked={checked} onChange={setChecked}>Крупно</Checkbox>
```

## Без подписи

Если `children` не передан, рендерится только бокс. Имя для скринридеров задаётся
через `aria-label` — он попадает на сам `<input>`, а не на обёртку.

```tsx
<Checkbox aria-label="Выбрать все строки" checked={checked} onChange={setChecked} />
```

## Опасное действие

`danger` окрашивает чекбокс в красный и сигнализирует о необратимом выборе.

::playground{src=CheckboxDangerDemo}

```tsx
<Checkbox checked={checked} onChange={(v) => setChecked(v)} danger>
  Удалить все данные безвозвратно
</Checkbox>
```

## Недоступное состояние

::playground{src=CheckboxDisabledDemo}

```tsx
<Checkbox disabled>Недоступна (не выбрана)</Checkbox>
<Checkbox checked disabled>Недоступна (выбрана)</Checkbox>
```

## Свойства

:::prop[checked]{type="boolean"}
Состояние чекбокса. Управляется извне — компонент не хранит внутреннее состояние.
:::

:::prop[onChange]{type="(state: boolean, event: ChangeEvent<HTMLInputElement>) => void"}
Вызывается при каждом изменении. Первый аргумент — новое значение `boolean`, второй — оригинальный DOM-ивент.
:::

:::prop[indeterminate]{type="boolean" default="false"}
Визуальное состояние «частичного» выбора. Отображается специальным значком вместо галочки. Не влияет на значение `checked`.
:::

:::prop[danger]{type="boolean" default="false"}
Красное цветовое оформление. Используйте только когда выбор несёт необратимые последствия.
:::

:::prop[disabled]{type="boolean" default="false"}
Блокирует взаимодействие с чекбоксом (проставляется на нативный `<input>`).
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Масштаб бокса, значка и типографики подписи. Высота строки не опускается ниже 24px.
:::

:::prop[name]{type="string"}
HTML-атрибут `name`. Нужен при использовании чекбокса внутри `<form>`.
:::

:::prop[children]{type="ReactNode"}
Подпись рядом с чекбоксом. Поддерживает любые React-элементы.
:::

## Рекомендации

**Формулируйте подпись как утверждение, а не вопрос.** «Получать уведомления» лучше, чем «Хотите получать уведомления?». Пользователь читает подпись и сразу понимает, что именно он включает или выключает.

**Не используйте чекбокс для мгновенного действия.** Если нажатие что-то немедленно изменяет в системе без кнопки «Сохранить», рассмотрите `Switch` — он лучше сообщает о моментальном эффекте.

**`indeterminate` помогает ориентации, а не управлению.** Он показывает пользователю, что группа неоднородна. Нажатие на такой чекбокс должно выбирать всё — это устоявшееся ожидание.
