# Bottom Navigation

Нижняя навигация — основной способ переключения между разделами в мобильных интерфейсах: она всегда на виду и не требует прокрутки к верху экрана. `BottomNavigation` — контейнер, `BottomNavigation.Item` — отдельная вкладка. Выбранный элемент подсвечивается анимированной подложкой, которая плавно перемещается между вкладками с помощью `framer-motion`.

## Базовое использование

```tsx
const [active, setActive] = useState("home");

<BottomNavigation>
  <BottomNavigation.Item
    icon={<Home />}
    label="Home"
    selected={active === "home"}
    onClick={() => setActive("home")}
  />
  <BottomNavigation.Item
    icon={<Wallet />}
    label="Wallet"
    selected={active === "wallet"}
    onClick={() => setActive("wallet")}
  />
</BottomNavigation>
```

::playground{src=BottomNavigationBasicDemo caption="Переключите вкладку — подложка плавно переместится к ней"}

## Бейджи

`badge` показывает счётчик уведомлений или короткую метку статуса поверх иконки.

```tsx
<BottomNavigation>
  <BottomNavigation.Item icon={<Home />} label="Home" selected />
  <BottomNavigation.Item icon={<Bell />} label="Alerts" badge="3" />
  <BottomNavigation.Item icon={<Wallet />} label="Wallet" badge="NEW" />
  <BottomNavigation.Item icon={<User />} label="Profile" />
</BottomNavigation>
```

::playground{src=BottomNavigationBadgesDemo caption="Числовой счётчик и текстовая метка рядом"}

## Плоский вариант

По умолчанию `floating={true}` — панель выглядит как приподнятая карточка. `floating={false}` прижимает её к нижнему краю экрана без отступов и тени.

```tsx
<BottomNavigation floating={false}>
  <BottomNavigation.Item icon={<Home />} label="Home" selected />
  <BottomNavigation.Item icon={<Search />} label="Search" />
</BottomNavigation>
```

::playground{src=BottomNavigationFlushDemo caption="floating={false} — панель без приподнятого вида"}

## Интеграция с роутером

По умолчанию `BottomNavigation.Item` рендерит `<a>`. Используйте `renderFunc`, чтобы подставить компонент роутера вместо стандартной ссылки, сохранив стили и анимацию подложки.

```tsx
import { Link, useLocation } from "react-router-dom";

const renderLink = (ref, props) => <Link ref={ref} {...props} />;

<BottomNavigation>
  <BottomNavigation.Item
    icon={<Home />}
    label="Home"
    href="/home"
    selected={location.pathname === "/home"}
    renderFunc={renderLink}
  />
  <BottomNavigation.Item
    icon={<User />}
    label="Profile"
    href="/profile"
    selected={location.pathname === "/profile"}
    renderFunc={renderLink}
  />
</BottomNavigation>
```

:::note
`renderFunc` получает `(ref, props)` и должна вернуть готовый React-элемент — это позволяет заменить `<a>` на `Link` из любого роутера, не теряя доступность и анимацию.
:::

## Свойства BottomNavigation

:::prop[floating]{type="boolean" default="true"}
Приподнятый визуальный стиль (карточка с тенью). При `false` — плоская панель, прижатая к краю экрана.
:::

## Свойства BottomNavigation.Item

:::prop[icon*]{type="ReactElement"}
Иконка над подписью. Обязательный проп.
:::

:::prop[label*]{type="string"}
Текст под иконкой. Обязательный проп.
:::

:::prop[selected]{type="boolean" default="false"}
Отмечает активную вкладку и запускает анимацию подложки.
:::

:::prop[badge]{type="string | number | ReactElement"}
Бейдж в верхнем правом углу элемента: счётчик уведомлений или короткая метка.
:::

:::prop[renderFunc]{type="(ref, props) => ReactElement"}
Кастомная функция рендера. Позволяет заменить `<a>` на компонент роутера или любой другой элемент.
:::

## Рекомендации

**Не более пяти вкладок.** Нижняя навигация теряет читаемость, если вкладок больше пяти — используйте `Tabs` или `Dropdown` для менее приоритетных разделов.

**Одна активная вкладка одновременно.** Управляйте `selected` из единого источника состояния (текущий маршрут или локальный стейт), а не выставляйте его на нескольких элементах сразу.

**Бейдж — для того, что требует внимания прямо сейчас.** Постоянный счётчик на вкладке, где он никогда не обнуляется, быстро теряет смысл как сигнал.

**Используйте `renderFunc` вместо оборачивания `Item` в `Link`.** Оборачивание сломает подложку и клик-зону; `renderFunc` сохраняет их, просто подставляя другой элемент.
