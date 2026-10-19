# BottomNavigation

`BottomNavigation` — нижняя панель навигации: основной способ переключения между разделами в мобильных интерфейсах. Она всегда под рукой и не требует прокрутки к верху экрана. Контейнер `BottomNavigation` держит панель, а `BottomNavigation.Link` — отдельный раздел с иконкой над подписью. Подложка выбранного раздела плавно перемещается между ссылками.

```tsx
import { BottomNavigation } from 'altrone-ui';
```

## Базовое использование

Положите внутрь элементы `BottomNavigation.Link`. Иконка и подпись обязательны и передаются в `icon` и `label`. Текущий раздел отмечает `selected` — он получает подложку, акцентный цвет и `aria-current="page"`. Выбор панель не хранит: управляйте `selected` из единого источника — текущего маршрута или локального состояния.

```tsx
const [active, setActive] = useState('home');

<BottomNavigation>
  <BottomNavigation.Link icon={<Home />} label="Home" selected={active === 'home'} onClick={() => setActive('home')} />
  <BottomNavigation.Link icon={<Wallet />} label="Wallet" selected={active === 'wallet'} onClick={() => setActive('wallet')} />
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationBasicDemo caption="Подложка плавно перемещается на выбранный раздел"}

Без `href` ссылка получает фокус и срабатывает по `Enter` и `Space`, как кнопка. С `href` это обычная ссылка `<a>`.

## Закреплённая и обычная панель

По умолчанию `floating={true}`: панель закрепляется у нижнего края экрана по центру, с отступом от края и с учётом безопасной области на устройствах с вырезом. Она не занимает места в потоке страницы, поэтому оставьте внизу контента запас под неё. С `floating={false}` панель остаётся обычным блоком в потоке и располагается там, где вы её разместили, например внутри области `Screen.BottomNavigation`.

```tsx
<BottomNavigation floating={false}>
  <BottomNavigation.Link icon={<Home />} label="Home" selected />
  <BottomNavigation.Link icon={<Search />} label="Search" />
</BottomNavigation>
```

::playground{src=bottomNavigation/BottomNavigationInlineDemo caption="floating={false} — панель в потоке, а не закреплённая на экране"}

:::note
Примеры на этой странице показаны с `floating={false}`: закреплённая панель прикреплялась бы к низу окна браузера, а не к примеру.
:::

## Бейджи

`badge` показывает счётчик уведомлений или короткую метку в правом верхнем углу ссылки.

```tsx
<BottomNavigation.Link icon={<Bell />} label="Alerts" badge="3" />
<BottomNavigation.Link icon={<Wallet />} label="Wallet" badge="NEW" />
```

::playground{src=bottomNavigation/BottomNavigationBadgesDemo caption="Числовой счётчик и текстовая метка"}

## Интеграция с роутером

Чтобы использовать компонент ссылки вашего роутера, передайте `asChild` и положите единственным потомком ссылку роутера. Стили, `ref` и обработчики перейдут на неё, а иконку, подпись, бейдж и подложку компонент по-прежнему возьмёт из пропсов.

```tsx
import { Link, useLocation } from 'react-router-dom';

const { pathname } = useLocation();

<BottomNavigation.Link icon={<Home />} label="Home" selected={pathname === '/home'} asChild>
  <Link to="/home" />
</BottomNavigation.Link>
```

:::note
Если `children` при `asChild` — не единственный валидный React-элемент, компонент выведет ошибку в консоль и вернёт `null`.
:::

## Свойства

### BottomNavigation

:::prop[floating]{type="boolean" default="true"}
Закрепляет панель у нижнего края экрана по центру. При `false` панель остаётся в потоке страницы.
:::

:::prop[children]{type="ReactNode"}
Элементы `BottomNavigation.Link`.
:::

:::prop[ref]{type="Ref<HTMLDivElement>"}
Ссылка на элемент панели.
:::

Остальные атрибуты `<div>` передаются корневому элементу.

### BottomNavigation.Link

:::prop[icon*]{type="ReactElement"}
Иконка над подписью.
:::

:::prop[label*]{type="string"}
Подпись под иконкой. Длинный текст обрезается многоточием.
:::

:::prop[selected]{type="boolean" default="false"}
Отмечает текущий раздел: подложка, акцентный цвет и `aria-current="page"`.
:::

:::prop[badge]{type="string | number | ReactElement"}
Бейдж в правом верхнем углу: счётчик или короткая метка.
:::

:::prop[asChild]{type="boolean" default="false"}
Перенести стили, `ref` и обработчики на единственный дочерний элемент, например ссылку роутера.
:::

:::prop[children]{type="ReactNode"}
Используется только вместе с `asChild`. Должен быть ровно одним валидным React-элементом.
:::

:::prop[ref]{type="Ref<HTMLAnchorElement>"}
Ссылка на `<a>` или дочерний элемент при `asChild`.
:::

Остальные атрибуты `<a>` (кроме `children`) передаются ссылке.

## Связанные темы

- [Tabs](/ru/components/navigation/tabs) — переключение между видами одного экрана
- [NavigationList](/ru/components/navigation/navigationList) — вертикальное меню для больших экранов
- [Screen](/ru/components/layout/screen) — раскладка страницы с областью `Screen.BottomNavigation` для нижней панели
- [Макеты и адаптивность](/ru/layout) — как менять навигацию в зависимости от размера экрана
