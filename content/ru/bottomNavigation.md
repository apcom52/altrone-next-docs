# Bottom Navigation

Нижняя навигация — основной способ переключения между разделами в мобильных интерфейсах: она всегда на виду и не требует прокрутки к верху экрана. `BottomNavigation` — контейнер, `BottomNavigation.Link` — отдельная вкладка (рендерит `<a>`). Выбранный элемент помечается `aria-current="page"` и подсвечивается приподнятой подложкой, которая плавно перемещается между вкладками. Размеры компактные — иконка 24px над подписью 12px, чтобы панель не перетягивала внимание с контента.

## Базовое использование

```tsx
const [active, setActive] = useState("home");

<BottomNavigation>
  <BottomNavigation.Link
    icon={<Home />}
    label="Home"
    selected={active === "home"}
    onClick={() => setActive("home")}
  />
  <BottomNavigation.Link
    icon={<Wallet />}
    label="Wallet"
    selected={active === "wallet"}
    onClick={() => setActive("wallet")}
  />
</BottomNavigation>
```

::playground{src=BottomNavigationBasicDemo caption="Переключите вкладку — подложка плавно переместится к ней"}

## Бейджи

`badge` показывает счётчик уведомлений или короткую метку статуса в правом верхнем углу вкладки — тем же чипом (`plate`-пилюля со смещением в угол), что и бейдж кнопки с одной иконкой.

```tsx
<BottomNavigation>
  <BottomNavigation.Link icon={<Home />} label="Home" selected />
  <BottomNavigation.Link icon={<Bell />} label="Alerts" badge="3" />
  <BottomNavigation.Link icon={<Wallet />} label="Wallet" badge="NEW" />
  <BottomNavigation.Link icon={<User />} label="Profile" />
</BottomNavigation>
```

::playground{src=BottomNavigationBadgesDemo caption="Числовой счётчик и текстовая метка рядом"}

## Плоский вариант

По умолчанию `floating={true}` — панель выглядит как приподнятая карточка. `floating={false}` прижимает её к нижнему краю экрана без отступов и тени.

```tsx
<BottomNavigation floating={false}>
  <BottomNavigation.Link icon={<Home />} label="Home" selected />
  <BottomNavigation.Link icon={<Search />} label="Search" />
</BottomNavigation>
```

::playground{src=BottomNavigationFlushDemo caption="floating={false} — панель без приподнятого вида"}

## Интеграция с роутером

По умолчанию `BottomNavigation.Link` рендерит `<a>`. Задайте `asChild` и передайте единственным потомком `<Link>` вашего роутера — элемент перенесёт на него свои стили, `ref` и обработчики, а иконку, подпись, бейдж и подложку по-прежнему возьмёт из пропсов.

```tsx
import { Link, useLocation } from "react-router-dom";

const { pathname } = useLocation();

<BottomNavigation>
  <BottomNavigation.Link icon={<Home />} label="Home" asChild selected={pathname === "/home"}>
    <Link to="/home" />
  </BottomNavigation.Link>
  <BottomNavigation.Link icon={<User />} label="Profile" asChild selected={pathname === "/profile"}>
    <Link to="/profile" />
  </BottomNavigation.Link>
</BottomNavigation>
```

## Свойства BottomNavigation

:::prop[floating]{type="boolean" default="true"}
Приподнятый визуальный стиль (карточка с тенью). При `false` — плоская панель, прижатая к краю экрана.
:::

## Свойства BottomNavigation.Link

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
Бейдж-чип в правом верхнем углу элемента: счётчик уведомлений или короткая метка.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести стили, `ref` и обработчики на единственный дочерний элемент (`<Link>` роутера) вместо рендера `<a>`.
:::

## Рекомендации

**Не более пяти вкладок.** Нижняя навигация теряет читаемость, если вкладок больше пяти — используйте `Tabs` или `Dropdown` для менее приоритетных разделов.

**Одна активная вкладка одновременно.** Управляйте `selected` из единого источника состояния (текущий маршрут или локальный стейт), а не выставляйте его на нескольких элементах сразу.

**Бейдж — для того, что требует внимания прямо сейчас.** Постоянный счётчик на вкладке, где он никогда не обнуляется, быстро теряет смысл как сигнал.

**Используйте `asChild` вместо оборачивания `BottomNavigation.Link` в `<Link>` роутера.** Оборачивание сломает подложку и клик-зону; `asChild` переносит их на элемент роутера.
