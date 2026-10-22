# Avatar

`Avatar` — круглая метка человека или сущности: фото, иконка или инициалы. Он работает как якорь для взгляда в списках, шапках и комментариях. Если есть фотография (`imageSrc`), аватар показывает её. Нет фото или оно не загрузилось — покажет иконку (`icon`), если вы её передали, а без иконки — инициалы. Корень получает `role="img"` и полное имя в `aria-label`.

```tsx
import { Avatar } from 'altrone-ui';
```

## Базовое использование

Инициалы строятся из `firstName` и `lastName`. Если фамилия не передана, берётся только первая буква имени.

```tsx
<Avatar firstName="Alex" lastName="Morgan" />
```

::playground{src=avatar/AvatarBasicDemo caption="Две буквы инициалов"}

## Размеры

`size` задаёт диаметр аватара и размер инициалов и иконки. `m` подходит для большинства списков и таблиц, `xl` — для шапки профиля, `mini` — для плотных строк комментариев.

```tsx
<Avatar firstName="Alex" lastName="Morgan" size="mini" />
<Avatar firstName="Alex" lastName="Morgan" size="xl" />
```

::playground{src=avatar/AvatarSizesDemo caption="mini, s, m, l, xl"}

## Фото

Передайте `imageSrc`, чтобы показать фотографию. Если изображение не загрузилось, аватар сам покажет иконку или инициалы — обрабатывать ошибку не нужно.

```tsx
<Avatar
  firstName="Nino"
  lastName="Kobakhidze"
  imageSrc="https://example.com/avatar.jpg"
  size="l"
/>
```

::playground{src=avatar/AvatarPhotoDemo caption="Слева фото загрузилось, справа ссылка битая — откат на инициалы"}

:::note
Когда `imageSrc` меняется, состояние ошибки сбрасывается и компонент пробует загрузить новое изображение.
:::

## Иконка вместо инициалов

`icon` подходит для сущностей без личного имени: бота, команды, неизвестного пользователя. Иконка показывается, когда нет фото, и имеет приоритет над инициалами — `firstName` и `lastName` можно не передавать.

```tsx
import { Bot } from 'lucide-react';

<Avatar icon={<Bot />} aria-label="Support bot" />
```

::playground{src=avatar/AvatarIconDemo caption="Иконка вместо инициалов"}

Без `firstName` компонент не может построить `aria-label` из имени, поэтому передайте его явно, как в примере.

## Цвет фона и текста

Без `backgroundColor` фон — категориальный цвет, выбранный по имени: один и тот же человек всегда получает один и тот же цвет. Цвет текста и иконки подбирается автоматически по контрасту с фоном; `textColor` его переопределяет.

```tsx
<Avatar firstName="Alice" lastName="Blue" backgroundColor="#6366f1" />
<Avatar firstName="Alice" lastName="Gold" backgroundColor="#1e3a5f" textColor="#fbbf24" />
```

::playground{src=avatar/AvatarColorsDemo caption="Цвет по имени, свой фон и свой цвет текста"}

## Группа аватаров

Отдельного компонента для стопки нет — соберите её из `Avatar`: отрицательный `marginLeft` и обводка из `boxShadow` в цвет фона страницы. У `Flex` в такой раскладке отключено обнуление отступов дочерних элементов (`disableInnerMargins={false}`), иначе отрицательный отступ пропадёт. Чтобы показать число скрытых участников, передайте счётчик как `firstName` — он отрисуется как обычные инициалы.

```tsx
<Flex disableInnerMargins={false} style={{ paddingLeft: 12 }}>
  {members.map((member) => (
    <Avatar
      key={member.id}
      firstName={member.firstName}
      lastName={member.lastName}
      style={{ marginLeft: -12, boxShadow: '0 0 0 2px var(--background-1)' }}
    />
  ))}
  <Avatar firstName="+4" style={{ marginLeft: -12, boxShadow: '0 0 0 2px var(--background-1)' }} />
</Flex>
```

::playground{src=avatar/AvatarGroupDemo caption="Стопка участников со счётчиком скрытых"}

## Свойства

:::prop[firstName]{type="string"}
Имя: первая буква инициалов и часть `aria-label`. Для аватара без личного имени (бот, команда) не передаётся — нужна `icon`.
:::

:::prop[lastName]{type="string"}
Фамилия: вторая буква инициалов и часть `aria-label`.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер аватара.
:::

:::prop[imageSrc]{type="string"}
Ссылка на фото. Если оно не загрузилось, показывается `icon` или инициалы.
:::

:::prop[icon]{type="ReactElement"}
Иконка вместо инициалов, когда нет фото. Имеет приоритет над инициалами.
:::

:::prop[backgroundColor]{type="string"}
Цвет фона — любое валидное значение CSS. Без него цвет выбирается по имени из категориальной палитры.
:::

:::prop[textColor]{type="string"}
Цвет инициалов и иконки. Без него подбирается автоматически по контрасту с фоном.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на корневой элемент.
:::

Остальные атрибуты `<div>`, включая `aria-label` и `title`, передаются корневому элементу.

## Связанные темы

- [Цвет](/ru/foundations/color) — категориальная палитра, из которой берётся фон по умолчанию
- [Tags](/ru/components/content/tags) — ещё один способ обозначить принадлежность
- [DataTable](/ru/components/content/dataTable) — таблица, где аватары часто стоят в первой колонке
- [Доступность](/ru/foundations/accessibility) — доступные имена и контраст во всей библиотеке
