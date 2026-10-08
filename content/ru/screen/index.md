# Screen

`Screen` — это каркас одной страницы вашего приложения. Он раскладывает шесть областей: шапку, закреплённую сверху, боковое меню, основное содержимое, боковую панель рядом с ним, подвал и навигацию внизу. Кладите его внутрь [Application](/ru/components/layout/application). Экранов можно отрендерить несколько — какой из них показывать, решает ваш роутер или состояние, а не библиотека.

Области — `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Aside`, `Screen.Footer`, `Screen.BottomNavigation` — кладутся внутрь как дочерние элементы в любом порядке. Где окажется каждая, решает раскладка, а не порядок в вашем коде. Область, которую вы не добавили, просто отсутствует.

**Готовых шаблонов нет.** Любая страница — каркас приложения, статья, вход, страница ошибки, доска — собирается из этого одного компонента.

Каждая область использует подходящий HTML-элемент, поэтому скринридеры и другие вспомогательные технологии понимают структуру вашей страницы без лишних усилий:

| Область                   | Элемент                                                       |
| ------------------------- | ------------------------------------------------------------- |
| `Screen`                  | `<div>`, `region` с именем из `title`, если вы его передали   |
| `Screen.Header`           | `<header>`                                                    |
| `Screen.Sidebar`          | `<aside>` с подписью «Sidebar»                                |
| `Screen.Content`          | `<main>`                                                      |
| `Screen.Aside`            | `<aside>` с подписью «Details»                                |
| `Screen.Footer`           | `<footer>`                                                    |
| `Screen.BottomNavigation` | `<nav>` с подписью «Bottom navigation»                        |

Подписи берутся из текстов `screen.*`, поэтому следуют за `language` у `Application` и меняются через `customLabels`.

## Каркас приложения

```tsx
import { Screen, Toolbar, NavigationList, Avatar } from 'altrone-ui';
import { Inbox, Send, Search } from 'lucide-react';

<Screen title="Mail">
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.Title label="Mail" />
      <Toolbar.Separator />
      <Toolbar.Action label="Search" icon={<Search />} showLabel={false} />
      <Avatar firstName="Ada" lastName="Lovelace" size="s" />
    </Toolbar>
  </Screen.Header>
  <Screen.Sidebar>
    <NavigationList>
      <NavigationList.Link icon={<Inbox />} label="Inbox" badge={12} selected />
      <NavigationList.Link icon={<Send />} label="Sent" />
    </NavigationList>
  </Screen.Sidebar>
  <Screen.Content>
    <MessageList />
  </Screen.Content>
</Screen>
```

## Шапка

Шапка — область на всю ширину без собственного фона. То, что вы видите, — это `Toolbar`, который вы кладёте внутрь. Для привычной матовой шапки с лёгким акцентным оттенком используйте **`<Toolbar variant="solid" size="m">`** — размер `m` подходит под высоту области в 56px. Фон панели инструментов тянется от края до края; сдвигается только её содержимое, чтобы шапка, контент и подвал начинались на одной вертикальной линии, сразу за боковым меню. По умолчанию шапка закреплена сверху, а содержимое под ней сдвинуто вниз, чтобы ничего не пряталось под ней.

`insetStart` (`number | string`) меняет то, где начинается содержимое панели инструментов. Фон по-прежнему идёт на всю ширину. `0` начинает содержимое прямо у края.

`fixed` (`boolean`, по умолчанию `true`) определяет, закреплена ли шапка. Когда она закреплена, `Screen.Content` и `Screen.Aside` оставляют под неё место, а залипающие заголовки `DataTable` внутри контента останавливаются сразу под ней (за это отвечает `--top-safe-area`). С `fixed={false}` шапка уезжает вместе со страницей: места под неё не оставляется, `--top-safe-area` остаётся `0px`, а заголовок `DataTable` прилипает к самому верху окна, когда шапка уже не видна.

## Ширина контента

По умолчанию `Screen.Content` занимает всё доступное место. Два пропа ограничивают его ширину и центрируют его, оставляя пустые поля по бокам (или место под `Screen.Aside`):

- `size` у `Screen` — одно ограничение на всё приложение. `mini`, `s`, `m`, `l` и `xl` соответствуют ширинам `--breakpoint-xs` … `--breakpoint-xl`. Шапка, боковое меню и подвал не затрагиваются.
- `maxWidth` у `Screen.Content` — ограничение для одного экрана. Число — это px, строка используется как есть (`'clamp(320px, 50vw, 640px)'`), и он **главнее** `size`.

```tsx
<Screen size="m">
  <Screen.Content>{/* capped at --breakpoint-md */}</Screen.Content>
</Screen>

<Screen.Content maxWidth={550}>{/* one-off cap */}</Screen.Content>
```

### Контент от края до края

Если доска или таблица должна доходить до краёв окна и прокручиваться вбок, оставьте области, но уберите отступы у `Screen.Content` и передайте прокрутку внутреннему содержимому.

```tsx
<Screen title="Sprint board">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Sidebar>{/* boards nav */}</Screen.Sidebar>
  <Screen.Content style={{ padding: 0, overflowX: 'auto' }}>
    <Board />
  </Screen.Content>
</Screen>
```

## Экраны по центру

`contentAlign="center"` ставит содержимое в середину страницы — и по горизонтали, и по вертикали. Вместе с `size` получается узкая колонка по центру — это хорошо подходит для страницы с одной задачей и без навигации, например для входа. Заголовок вы добавляете сами, внутри контента.

```tsx
<Screen title="Sign in" contentAlign="center" size="s">
  <Screen.Content>
    <SignInCard />
  </Screen.Content>
</Screen>
```

Страницы ошибок и пустых состояний строятся так же, с `Result` внутри, — отдельного шаблона для них нет.

```tsx
<Screen title="Page not found" contentAlign="center">
  <Screen.Content>
    <Result
      status="error"
      title="Page not found"
      description="The page you were looking for doesn't exist or was moved."
      actions={<Button label="Go home" variant="submit" />}
    />
  </Screen.Content>
</Screen>
```

## Сворачиваемое боковое меню

`Screen.Sidebar` парит над страницей на небольшом расстоянии (`--space-content`) от краёв. На широких экранах оно ещё и отодвигает содержимое, а при открытии и закрытии меню содержимое плавно сдвигается. На узких экранах (ниже `mobileBreakpoint`, по умолчанию `md`) оно перестаёт отодвигать содержимое и вместо этого открывается поверх него с затемнением фона. Проп `collapsed` закрывает панель: она уезжает так же, как `Drawer`, и удаляется, а её `<aside>` остаётся на странице, но на него нельзя навести фокус или кликнуть (`inert`).

**Неконтролируемый режим (по умолчанию)** — не передавайте `collapsed` совсем (начальное состояние задаётся через `defaultCollapsed`). Меню само следит за своим состоянием и закрывается, когда экран становится узким, — так оно никогда не закроет страницу без возможности убрать его. `Toolbar.SidebarToggleAction`, у которого нет собственного `collapsed`, сам находит это меню и переключает его — ничего связывать не нужно:

```tsx
<Screen mobileBreakpoint="md">
  <Screen.Sidebar>
    <AppNavigation />
  </Screen.Sidebar>
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.SidebarToggleAction />
      <Toolbar.Title label="Overview" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
</Screen>
```

**Контролируемый режим** — нужен, только если состояние меню должно жить за пределами `Screen` (например, сохраняться в `localStorage`). Булево значение хранится у вас, и вы передаёте его и в `Screen.Sidebar`, и в `Toolbar.SidebarToggleAction`. Клик по затемнённой области или нажатие `Escape` вызывает `onClose` — поставьте там `collapsed` в `true`. Даже без `onClose` оверлей всё равно закроется, а фокус вернётся туда, где был до открытия панели.

```tsx
const [collapsed, setCollapsed] = useState(false);

<Screen mobileBreakpoint="md">
  <Screen.Sidebar collapsed={collapsed} onClose={() => setCollapsed(true)}>
    <AppNavigation />
  </Screen.Sidebar>
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.SidebarToggleAction
        collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      />
      <Toolbar.Title label="Overview" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
</Screen>
```

## Боковая панель

`Screen.Aside` — колонка справа от `Screen.Content`: хорошо подходит для подробностей, инспектора или другого контекста. В отличие от `Screen.Sidebar`, она — часть сетки страницы: делит строку с содержимым, находится под шапкой и не имеет собственного фона. Сама по себе она шириной `asideWidth`; `collapsed` сжимает её до нуля, и содержимое занимает освободившееся место.

Менять размер сама она не умеет. Если нужна граница, которую можно перетаскивать, положите `Screen.Content` и `Screen.Aside` каждый в свой `Splitter.Panel`. Тогда шириной и сворачиванием управляет `Splitter`, а `Screen` сам ставит его в строку содержимого:

```tsx
<Screen>
  <Screen.Header>{/* … */}</Screen.Header>
  <Screen.Sidebar>{/* … */}</Screen.Sidebar>

  <Splitter>
    <Splitter.Panel min={40}>
      <Screen.Content>{/* list */}</Screen.Content>
    </Splitter.Panel>
    <Splitter.Panel defaultSize={34} min={24} collapsible>
      <Screen.Aside>{/* inspector */}</Screen.Aside>
    </Splitter.Panel>
  </Splitter>

  <Screen.Footer>{/* … */}</Screen.Footer>
</Screen>
```

## Подвал

Полоса внизу страницы с заливкой `--background-2` и тонкой линией сверху, чтобы отличаться от содержимого. Как и шапка, она занимает всю ширину и заходит под боковое меню; её содержимое сдвигается, чтобы не оказаться под ним.

**Нижняя безопасная зона.** Последняя область перед нижним краем — подвал, а если его нет, то `Screen.Content` / `Screen.Aside` — оставляет дополнительное место под индикатор «домой» на iPhone (`env(safe-area-inset-bottom)`), а при наличии `Screen.BottomNavigation` — и под всю навигацию. Фон по-прежнему доходит до самого края; поднимается только содержимое. Это место больше нуля только тогда, когда на странице есть `<meta name="viewport" content="viewport-fit=cover">`.

## Нижняя навигация

Панель, закреплённая внизу экрана, — аналог `Screen.Sidebar` для сенсорных экранов. `Screen` отвечает только за её положение: панель зафиксирована, отступает на `--space-content` от каждого края (плюс область выреза на iPhone снизу) и заставляет содержимое, подвал и встроенное боковое меню оставить под неё место, чтобы ничто не пряталось за ней. Фон подвала по-прежнему доходит до низа; поднимается только его содержимое.

Саму навигацию кладите внутрь — обычно это отдельный `BottomNavigation` с `floating={false}` (чтобы он не закреплял себя второй раз) или ваш компонент. Сама область клики не принимает, откликаются только её прямые дочерние элементы, так что промежутки вокруг центрированной «таблетки» пропускают клики сквозь себя.

```tsx
<Screen.BottomNavigation>
  <BottomNavigation floating={false}>
    <BottomNavigation.Link icon={<Home />} label="Home" selected />
    <BottomNavigation.Link icon={<Search />} label="Search" />
    <BottomNavigation.Link icon={<User />} label="Profile" />
  </BottomNavigation>
</Screen.BottomNavigation>
```

Без `visibleFrom` / `hiddenFrom` панель показывается при любой ширине окна, включая десктоп.

## Показ областей по размеру экрана

`Screen.Sidebar`, `Screen.Aside` и `Screen.BottomNavigation` можно показывать или скрывать в зависимости от ширины окна (`xs` / `sm` / `md` / `lg` / `xl`, тип `ScreenBreakpoint`):

- `visibleFrom` — показывать область, только когда ширина не меньше границы;
- `hiddenFrom` — показывать область, только когда ширина меньше границы.

Без обоих пропов область есть всегда (но всё равно подстраивается — боковое меню ниже `mobileBreakpoint` превращается в оверлей). Один или оба пропа ограничивают область диапазоном ширин (`visibleFrom="sm" hiddenFrom="lg"`). Скрытая область ничего не рендерит и не занимает места, поэтому боковое меню, скрытое на телефонах, оставляет простую страницу в одну колонку. Эти пропы не зависят от `mobileBreakpoint`.

```tsx
<Screen.Aside visibleFrom="lg">{/* inspector, desktop only */}</Screen.Aside>
```

Ширина проверяется в браузере, поэтому при самой первой отрисовке область может ненадолго появиться или исчезнуть.

## Свойства

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Ограничивает ширину только `Screen.Content`. Шапка, боковое меню и подвал не затрагиваются.
:::

:::prop[title]{type="string"}
Название всего экрана для вспомогательных технологий (`aria-label`, `role="region"`). На странице ничего не показывается. Также участвует в автоматическом заголовке вкладки браузера — см. [«Заголовок страницы» в Application](/ru/components/layout/application#заголовок-страницы).
:::

:::prop[contentAlign]{type="'start' | 'center'" default="'start'"}
`'center'` ставит `Screen.Content` по центру в обе стороны. Вместе с `size` получается узкая колонка по центру — подходит для форм входа и онбординга и полноэкранных состояний `Result`.
:::

:::prop[mobileBreakpoint]{type="'sm' | 'md' | 'lg'" default="'md'"}
Ширина окна, ниже которой `Screen.Sidebar` перестаёт отодвигать содержимое и открывается поверх него с затемнением фона.
:::

:::prop[sidebarWidth]{type="string" default="'300px'"}
Ширина бокового меню, когда оно стоит рядом с содержимым (то же, что CSS-переменная `--screen-sidebar-width`).
:::

:::prop[asideWidth]{type="string" default="'320px'"}
Ширина `Screen.Aside`, когда она стоит в сетке страницы сама по себе. Внутри `Splitter` игнорируется — размеры там задаёт он. То же, что `--screen-aside-width`.
:::

:::prop[children]{type="ReactNode"}
Любые области `Screen` в любом порядке. Любой *другой* прямой дочерний элемент (например, `Splitter` вокруг Content и Aside) автоматически ставится в строку содержимого.
:::

### Screen.Header

:::prop[insetStart]{type="number | string"}
С какого места начинается содержимое панели инструментов, считая от начального края. Число — это px, строка используется как есть (`'var(--space-section)'`). По умолчанию выравнивается по `Screen.Content` и подвалу; `0` начинает у края.
:::

:::prop[fixed]{type="boolean" default="true"}
Закрепляет шапку у верха окна. `false` возвращает её в обычный поток: она уезжает вместе со страницей, и места под неё не оставляется.
:::

### Screen.Content

:::prop[maxWidth]{type="number | string"}
Ограничивает ширину колонки содержимого и ставит её по центру в доступном месте. Число — это px, строка используется как есть. **Главнее** пропа `size` у `Screen`.
:::

### Screen.Sidebar

:::prop[collapsed]{type="boolean"}
Закрывает панель: она уезжает, как `Drawer`, и удаляется. Рядом с содержимым освободившееся место возвращается плавно. Не передавайте его для неконтролируемого режима — см. `defaultCollapsed`.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Начальное состояние неконтролируемого бокового меню. Игнорируется, как только передан `collapsed`. Неконтролируемое меню само закрывается на узких экранах, а `Toolbar.SidebarToggleAction` без собственного `collapsed` переключает его автоматически.
:::

:::prop[onCollapsedChange]{type="(collapsed: boolean) => void"}
Вызывается, когда состояние вот-вот изменится — при клике по затемнённой области, `Escape` или кнопке-переключателе. Используйте вместе с `collapsed`. В неконтролируемом режиме это только уведомление: меню уже обновилось само.
:::

:::prop[onClose]{type="(event: MouseEvent | KeyboardEvent) => void"}
Уже, чем `onCollapsedChange`: вызывается только тогда, когда пользователь закрывает оверлей кликом по затемнённой области или `Escape`. В контролируемом режиме поставьте здесь `collapsed` в `true`.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать боковое меню, только когда ширина окна не меньше границы. Иначе оно не рендерится и не занимает места.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать боковое меню, только когда ширина окна меньше границы.
:::

### Screen.Aside

:::prop[collapsed]{type="boolean"}
Сжимает колонку до нуля, и содержимое занимает освободившееся место. Внутри `Splitter` не действует — сворачиванием там занимается панель. Не передавайте для неконтролируемого режима.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Начальное состояние неконтролируемой боковой панели. Игнорируется, как только передан `collapsed`.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать боковую панель, только когда ширина окна не меньше границы.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать боковую панель, только когда ширина окна меньше границы.
:::

### Screen.BottomNavigation

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать нижнюю навигацию, только когда ширина окна не меньше границы.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Показывать нижнюю навигацию, только когда ширина окна меньше границы. Без обоих пропов панель показывается при любой ширине.
:::

У `Screen.Footer` собственных пропов нет. Каждая область передаёт `ref` на свой корневой элемент и принимает обычные HTML-атрибуты.

## Похожие темы

- [Application](/ru/components/layout/application) — корень, внутрь которого кладётся `Screen`
- [Макеты и адаптивность](/ru/foundations/layout) — идея брейкпоинтов и контейнерных запросов, на которой построены `mobileBreakpoint` и `visibleFrom`/`hiddenFrom`
- [Сенсорные устройства](/ru/foundations/touchDevices) — безопасные зоны и другие заботы у края экрана, которые `Screen.BottomNavigation` уже учитывает
- [Доступность](/ru/foundations/accessibility) — правила фокуса и подписей, которым следуют оверлей бокового меню и иконочные действия панели инструментов
