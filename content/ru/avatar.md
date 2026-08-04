# Avatar

Аватар — это самый быстрый способ узнать пользователя в интерфейсе: фото или инициалы работают как якорь взгляда в списках, шапках и комментариях. `Avatar` показывает фото, если оно передано и успешно загрузилось, и автоматически откатывается на инициалы, если изображения нет или оно не загрузилось.

## Базовое использование

Инициалы формируются из `firstName` и `lastName`. Если фамилия не передана, используется только первая буква имени.

```tsx
<Avatar firstName="Alex" lastName="Morgan" />
```

::playground{src=AvatarBasicDemo}

## Размеры

`size` управляет диаметром аватара и размером шрифта инициалов.

```tsx
<Avatar firstName="Alex" lastName="Morgan" size="mini" />
<Avatar firstName="Alex" lastName="Morgan" size="s" />
<Avatar firstName="Alex" lastName="Morgan" size="m" />
<Avatar firstName="Alex" lastName="Morgan" size="l" />
<Avatar firstName="Alex" lastName="Morgan" size="xl" />
```

::playground{src=AvatarSizesDemo caption="mini, s, m, l, xl"}

`m` — размер по умолчанию, подходит для большинства списков и таблиц. `xl` хорошо работает в шапке профиля, `mini` — в плотных строках комментариев.

## Фото профиля

Передайте `imageSrc`, чтобы показать фотографию. Если изображение не загрузилось, компонент автоматически покажет инициалы — без дополнительной обработки ошибок со стороны разработчика.

```tsx
<Avatar
  firstName="Nino"
  lastName="Kobakhidze"
  imageSrc="https://example.com/avatar.jpg"
  size="l"
/>
```

::playground{src=AvatarPhotoDemo caption="Слева — фото загрузилось. Справа — битая ссылка, откат на инициалы"}

:::note
Если `imageSrc` меняется на новое значение, состояние ошибки сбрасывается, и компонент пытается загрузить новое изображение заново.
:::

## Цвет фона и текста

Без `backgroundColor` используется цвет темы по умолчанию. `textColor` переопределяет автоматический расчёт контраста.

```tsx
<Avatar firstName="Alice" lastName="Blue" backgroundColor="#6366f1" />
<Avatar
  firstName="Alice"
  lastName="Gold"
  backgroundColor="#1e3a5f"
  textColor="#fbbf24"
/>
```

## Группа аватаров

Стандартного компонента для стека нет — соберите его вручную с помощью отрицательного `marginLeft` и `boxShadow` в качестве обводки. Проп `title` добавляет нативную подсказку браузера.

```tsx
{members.map((member) => (
  <Avatar
    key={member.firstName}
    firstName={member.firstName}
    lastName={member.lastName}
    backgroundColor={member.backgroundColor}
    style={{ marginLeft: -12, boxShadow: "0 0 0 2px var(--background-1)" }}
    title={`${member.firstName} ${member.lastName}`}
  />
))}
```

Чтобы показать, сколько участников скрыто, передайте счётчик как `firstName` — компонент отрендерит его как обычные инициалы.

```tsx
<Avatar firstName="+4" lastName="" style={{ marginLeft: -12 }} />
```

::playground{src=AvatarGroupDemo caption="Стек участников с overflow-счётчиком"}

## Свойства

:::prop[firstName*]{type="string"}
Имя. Обязательный проп. Используется для первой буквы инициалов и как часть `aria-label`.
:::

:::prop[lastName]{type="string"}
Фамилия. Добавляет вторую букву инициалов, если передана.
:::

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'" default="'m'"}
Размер аватара.
:::

:::prop[imageSrc]{type="string"}
Ссылка на фотографию. При ошибке загрузки автоматически показываются инициалы.
:::

:::prop[backgroundColor]{type="string"}
Цвет фона круга с инициалами. Любое валидное CSS-значение цвета. Без этого пропа используется цвет темы по умолчанию.
:::

:::prop[textColor]{type="string"}
Цвет текста инициалов. Переопределяет автоматический расчёт контраста.
:::

## Рекомендации

**Всегда передавайте `lastName`, если он есть.** Одна буква вместо двух хуже различает пользователей в списках с похожими именами.

**Не полагайтесь на `imageSrc` без проверки, что фото действительно загружается.** Встроенный фолбэк на инициалы избавляет от лишней логики — не оборачивайте `Avatar` в собственную проверку `onError`.

**Для стека аватаров ограничивайте видимое число участников.** Три-четыре аватара плюс overflow-счётчик читаются лучше, чем десяток перекрывающихся кружков.

**Используйте `backgroundColor` осознанно.** Произвольные цвета полезны, когда нужно закрепить цвет за пользователем (например, детерминированно по id), а не для случайного разнообразия.
