# Screen

Каркас макета одного экрана приложения: CSS grid с шестью зонами — фиксированная шапка, сайдбар, прокручиваемый контент, трейлинг-панель-компаньон, футер и нижняя навигация. Компонент кладётся внутрь `children` `Application` — можно разместить несколько `Screen`, переключение между ними (какой активен) остаётся на стороне потребителя (свой роутер/state), а не библиотеки.

Зоны — `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Footer`, `Screen.BottomNavigation` — передаются как `children` в любом порядке; их взаимное расположение задаёт grid, а не порядок в JSX. Зона, которую вы не отрендерили, просто отсутствует в сетке.

**Пресетов нет** — любой тип экрана (каркас приложения, читалка, вход, страница ошибки, доска) собирается из этого примитива композицией.

## Каркас приложения

```tsx
import { Screen, Toolbar, NavigationList, Avatar } from 'altrone-ui';
import { Inbox, Send, Search } from 'lucide-react';

<Screen title="Почта">
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.Title label="Почта" />
      <Toolbar.Separator />
      <Toolbar.Action label="Поиск" icon={<Search />} showLabel={false} />
      <Avatar firstName="Ада" lastName="Лавлейс" size="s" />
    </Toolbar>
  </Screen.Header>
  <Screen.Sidebar>
    <NavigationList>
      <NavigationList.Link icon={<Inbox />} label="Входящие" badge={12} selected />
      <NavigationList.Link icon={<Send />} label="Отправленные" />
    </NavigationList>
  </Screen.Sidebar>
  <Screen.Content>
    <MessageList />
  </Screen.Content>
</Screen>
```

## Screen.Header

**Зона на всю ширину, но прозрачная** — своей заливки у неё нет. Видимую полосу рисует `Toolbar`, который вы кладёте внутрь: для фростнутой акцентно-тонированной шапки используйте **`<Toolbar variant="solid" size="m">`** (заливка варианта `solid` указывает на токен `--color-header-backdrop`, `m` — под высоту 56px). Тулбар тянется на всю ширину вьюпорта — заливка идёт от края до края — и подвинут внутрь только его *контентный паддинг*: шапка, `Screen.Content` и футер выстраивают контент по одной вертикальной линии (`--screen-content-inset-start`, она отстоит от сайдбара на `2 × --space-content`). Высота зоны — `--screen-header-height` (по умолчанию `56px`). По умолчанию шапка `position: fixed`, и контент под ней автоматически сдвинут вниз на её высоту.

Проп `insetStart` (`number | string`) переопределяет левый контентный паддинг тулбара шапки (через `--toolbar-inset-start`; заливка при этом остаётся во всю ширину, а по умолчанию линия совпадает с `Screen.Content` и футером). `0` — начать контент у самого края.

Проп `fixed` (`boolean`, по умолчанию `true`) управляет тем, зафиксирована ли шапка. При `true` она прибита к верху вьюпорта, а `Screen.Content` / `Screen.Aside` резервируют под неё отступ; sticky-заголовок и sticky-футер `DataTable` внутри контента при этом сдвинуты на её высоту через `--top-safe-area`, чтобы не оказаться под шапкой. При `fixed={false}` шапка возвращается в обычный поток и прокручивается вместе со страницей — отступ под неё не резервируется, `--top-safe-area` остаётся `0px`, и sticky-заголовок `DataTable` прилипает к самому верху вьюпорта, как только шапка уходит за пределы экрана.

## Screen.Footer

Полоса-chrome с фоном `--background-2` и волосяной линией сверху — заметно отличается от поверхности контента. Как и шапка, тянется на всю ширину, заходит под сайдбар, а свой контент отступает за сайдбар (через внутреннюю обёртку).

**Безопасная зона снизу.** Последняя полоса перед краем экрана — футер, а если футера нет, то `Screen.Content` / `Screen.Aside` — добавляет снизу отступ под home-индикатор iOS (`env(safe-area-inset-bottom)`), а при наличии `Screen.BottomNavigation` — под весь запас бара. Сам фон полосы при этом доходит до самого низа экрана, поднимается только её контент. Ненулевым становится, только если документ включил `<meta name="viewport" content="viewport-fit=cover">`.

## Screen.Aside

Трейлинг-колонка-компаньон к `Screen.Content` — панель инспектора / контекста (`<aside>`, `aria-label` «Сведения»). В отличие от `Screen.Sidebar` она живёт **в гриде**: делит строку с контентом, стоит под фиксированной шапкой, **своего фона нет**. В голом виде это грид-колонка шириной `asideWidth` (переменная `--screen-aside-width`, по умолчанию `320px`); `collapsed` схлопывает эту колонку в ноль, и контент забирает место.

Своей логики ресайза у неё **нет**. Нужен перетаскиваемый разделитель — оберните `Screen.Content` и `Screen.Aside`, каждый в свой `Splitter.Panel`. Тогда ширины и сворачивание держит `Splitter`, а `Screen` кладёт голый `<Splitter>` в строку контента без `gridArea`:

```tsx
<Screen>
  <Screen.Header>{/* … */}</Screen.Header>
  <Screen.Sidebar>{/* … */}</Screen.Sidebar>

  <Splitter>
    <Splitter.Panel min={40}>
      <Screen.Content>{/* список */}</Screen.Content>
    </Splitter.Panel>
    <Splitter.Panel defaultSize={34} min={24} collapsible>
      <Screen.Aside>{/* инспектор */}</Screen.Aside>
    </Splitter.Panel>
  </Splitter>

  <Screen.Footer>{/* … */}</Screen.Footer>
</Screen>
```

Пропы: `collapsed` (схлопнуть голую колонку; внутри `Splitter` не действует — сворачивание держит панель), `defaultCollapsed` (начальное состояние для неуправляемого режима, игнорируется при переданном `collapsed`), `visibleFrom` / `hiddenFrom` (гейт по брейкпоинту), `ref` (на `<aside>`).

## Screen.BottomNavigation

**Фиксированная полоса на всю ширину**, прижатая к низу экрана — тач-аналог `Screen.Sidebar`. `Screen` берёт на себя только геометрию: `position: fixed`, гаттер `--space-content` от всех краёв экрана (снизу плюс вырез iOS `env(safe-area-inset-bottom)`) и нижний запас, который добавляется к `Screen.Content`, `Screen.Footer` (доп. нижний **паддинг** — серая полоса по-прежнему доходит до низа экрана, просто её текст уходит выше бара) и к инлайн-`Screen.Sidebar` (чтобы на десктопе бар и сайдбар не пересекались). Высота полосы — `--screen-bottom-nav-height` (по умолчанию `64px`).

Саму навигацию кладёте внутрь — обычно standalone `BottomNavigation` с `floating={false}` (чтобы он не фиксировался повторно) или свой компонент. Зона `pointer-events: none` с включёнными обратно прямыми детьми — промежутки вокруг центрированной «пилюли» остаются кликабельными насквозь.

```tsx
<Screen.BottomNavigation hiddenFrom="lg">
  <BottomNavigation floating={false}>
    <BottomNavigation.Link icon={<Home />} label="Главная" selected />
    <BottomNavigation.Link icon={<Search />} label="Поиск" />
    <BottomNavigation.Link icon={<User />} label="Профиль" />
  </BottomNavigation>
</Screen.BottomNavigation>
```

Рендерит `<nav>` (`aria-label` из `screen.bottomNavigationLabel`), пробрасывает `ref`. Без пропов `visibleFrom` / `hiddenFrom` бар виден на всех вьюпортах — в том числе на десктопе.

## Адаптивные зоны: `visibleFrom` / `hiddenFrom`

`Screen.Sidebar`, `Screen.Aside` и `Screen.BottomNavigation` принимают два пропа для гейта по брейкпоинту вьюпорта (токены `xs` / `sm` / `md` / `lg` / `xl`, тип `ScreenBreakpoint`):

- `visibleFrom` — рендерить зону только при ширине `>=` брейкпоинта;
- `hiddenFrom` — рендерить зону только при ширине `<` брейкпоинта.

Не задан ни один — зона смонтирована всегда (режим всё равно адаптируется: сайдбар уходит в overlay ниже `mobileBreakpoint`). Задан один или оба — зону можно ограничить «полосой» (`visibleFrom="sm" hiddenFrom="lg"`). Вне диапазона зона рендерит **ничего** и не резервирует место в раскладке — поэтому инлайн-сайдбар, скрытый на мобиле, оставляет грид простой одноколоночной сеткой. Пропы независимы от `mobileBreakpoint`.

Считается через `useBreakpoint()` — как и `mobileBreakpoint`, это SSR-безопасно, но зона может мигнуть на первом клиентском рендере.

```tsx
{/* Сайдбар доступен везде; на тач-устройствах основная навигация — нижний бар */}
<Screen.Sidebar collapsed={collapsed} onClose={() => setCollapsed(true)}>…</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">…</Screen.BottomNavigation>

{/* Жёсткое разделение: сайдбар только на десктопе, нижний бар только на тач */}
<Screen.Sidebar visibleFrom="lg">…</Screen.Sidebar>
<Screen.BottomNavigation hiddenFrom="lg">…</Screen.BottomNavigation>
```

## Сворачиваемый и мобильный сайдбар

`Screen.Sidebar` — `position: fixed` в обоих режимах, всегда плавает с отступом 8px от краёв экрана. Проп `collapsed` закрывает панель: она уезжает анимацией в стиле `Drawer` и размонтируется, а `<aside>`-якорь остаётся в DOM с атрибутом `inert`.

**Неуправляемый (по умолчанию)** — не передавайте `collapsed` вовсе (задайте начальное состояние через `defaultCollapsed`). Сайдбар сам хранит своё состояние и сам сворачивается при переходе в overlay-режим — он никогда не перекрывает экран без возможности закрыть. А `Toolbar.SidebarToggleAction`, если тоже оставить без `collapsed`, сам читает и переключает этот сайдбар через контекст `Screen` — никакого состояния заводить не нужно:

```tsx
<Screen mobileBreakpoint="md">
  <Screen.Sidebar>
    <AppNavigation />
  </Screen.Sidebar>
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.SidebarToggleAction />
      <Toolbar.Title label="Обзор" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
</Screen>
```

**Управляемый** — нужен, только если состояние сайдбара должно жить снаружи `Screen` (например, сохраняться в `localStorage`). `Screen` не решает, когда сворачивать — булево держит потребитель, синхронизируя `Screen.Sidebar.collapsed` и `Toolbar.SidebarToggleAction.collapsed` вручную. Клик по скриму или `Escape` вызывает `onClose` — установите там `collapsed = true`. Даже без `onClose` скрим / `Escape` всё равно визуально закрывают overlay (это никогда не ловушка).

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
      <Toolbar.Title label="Обзор" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content>
    <Dashboard />
  </Screen.Content>
  <Screen.Footer>
    <SyncStatus />
  </Screen.Footer>
</Screen>
```

По умолчанию сайдбар резервирует место в раскладке (`Screen` анимирует свой `padding-inline-start`, контент переливается без обрезки — никакого `overflow`). Ниже брейкпоинта `mobileBreakpoint` (по умолчанию `md`) он перестаёт резервировать место и просто плавает над контентом со скримом. Открытие/закрытие — та же анимация, что у `Drawer`, через `motion`.

## Читалка — без сайдбара, узкая колонка

`maxWidth` у `Screen.Content` держит текст на комфортной ширине и центрирует колонку; свободное место уходит в поля (или в колонку `Screen.Aside`). Берите его вместо `size`, когда узкая колонка нужна только на этом экране.

```tsx
<Screen title="Эссе">
  <Screen.Header>
    <Toolbar variant="solid" size="m">
      <Toolbar.Title label="Эссе" />
    </Toolbar>
  </Screen.Header>
  <Screen.Content maxWidth={550}>
    <Article />
  </Screen.Content>
</Screen>
```

## Контент от края до края

Для доски / таблицы, которой нужно упереться в края окна и скроллиться по горизонтали — оставляем зоны, но обнуляем паддинг `Screen.Content` и отдаём overflow внутреннему контенту.

```tsx
<Screen title="Доска спринта">
  <Screen.Header>{/* toolbar */}</Screen.Header>
  <Screen.Sidebar>{/* навигация по доскам */}</Screen.Sidebar>
  <Screen.Content style={{ padding: 0, overflowX: 'auto' }}>
    <Board />
  </Screen.Content>
</Screen>
```

## Вход / центрированный экран

Одиночная задача без chrome: `contentAlign="center"` центрирует контент по обеим осям, `size` держит колонку узкой. Заголовок кладёте в контент сами.

```tsx
<Screen title="Вход" contentAlign="center" size="s">
  <Screen.Content>
    <SignInCard />
  </Screen.Content>
</Screen>
```

## Страница ошибки

Экраны ошибок и пустых состояний — это компонент `Result` в центрированном `Screen`, без отдельного пресета.

```tsx
<Screen title="Страница не найдена" contentAlign="center">
  <Screen.Content>
    <Result
      status="error"
      title="Страница не найдена"
      description="Такой страницы нет или она была перемещена."
      actions={<Button label="На главную" variant="submit" />}
    />
  </Screen.Content>
</Screen>
```

## Свойства

:::prop[size]{type="'mini' | 's' | 'm' | 'l' | 'xl'"}
Ограничивает максимальную ширину только `Screen.Content` — на шапку, сайдбар и футер не влияет.
:::

:::prop[title]{type="string"}
Доступное имя корневой области (`aria-label`, `role="region"`). Визуально ничего не рисует.
:::

:::prop[contentAlign]{type="'start' | 'center'" default="'start'"}
`'center'` центрирует `Screen.Content` по обеим осям (вместе с `size` — узкая центрированная колонка): для форм входа/онбординга и полноэкранных `Result`.
:::

:::prop[mobileBreakpoint]{type="'sm' | 'md' | 'lg'" default="'md'"}
Ширина вьюпорта, ниже которой `Screen.Sidebar` перестаёт резервировать место и плавает над контентом со скримом.
:::

:::prop[sidebarWidth]{type="string" default="'300px'"}
Ширина колонки сайдбара во встроенном режиме (то же, что CSS-переменная `--screen-sidebar-width`).
:::

:::prop[asideWidth]{type="string" default="'320px'"}
Ширина колонки `Screen.Aside`, когда она голая грид-зона (игнорируется, если `Screen.Aside` обёрнут в `Splitter` — тот держит размеры сам). То же, что `--screen-aside-width`.
:::

:::prop[children]{type="ReactNode"}
Любые из `Screen.Header`, `Screen.Sidebar`, `Screen.Content`, `Screen.Aside`, `Screen.Footer`, `Screen.BottomNavigation`, в любом порядке. Любой *другой* прямой ребёнок (например, `Splitter` вокруг Content + Aside) сам попадает в строку контента.
:::

### Screen.Content

:::prop[maxWidth]{type="number | string"}
Ограничивает ширину колонки контента и центрирует её в отведённом месте — по бокам пустые поля (или колонка `Screen.Aside` справа). Число — пиксели, строка — как есть (`'clamp(320px, 50vw, 640px)'`). **Перебивает** ширину, заданную пропом `size` у `Screen` — ставьте на конкретный `Screen.Content`, когда одному экрану нужна колонка уже остальных (например, читалка на `550`).
:::

### Screen.Sidebar

:::prop[collapsed]{type="boolean"}
Управляемый флаг: панель уезжает анимацией (как у `Drawer`) и размонтируется; инлайн — `Screen` анимированно убирает зарезервированный отступ, контент переливается. Опустите проп для неуправляемого режима — см. `defaultCollapsed`.
:::

:::prop[defaultCollapsed]{type="boolean" default="false"}
Начальное состояние для неуправляемого сайдбара. Игнорируется, если передан `collapsed`. Неуправляемый сайдбар сам сворачивается при переходе в overlay-режим (не перекрывает экран без выхода), а `Toolbar.SidebarToggleAction` без своего `collapsed` — сам читает и переключает его через контекст `Screen`.
:::

:::prop[onCollapsedChange]{type="(collapsed: boolean) => void"}
Срабатывает при любой просьбе изменить состояние — скрим, `Escape`, клик по тоглеру. Парный к `collapsed`; в неуправляемом режиме — просто уведомление, сайдбар уже обновил себя сам.
:::

:::prop[onClose]{type="(event: MouseEvent | KeyboardEvent) => void"}
Более узкий, чем `onCollapsedChange`, — именно клик по скриму или `Escape` в overlay-режиме. В управляемом режиме здесь нужно выставить `collapsed = true`. Даже без него скрим / `Escape` визуально закрывают overlay — это никогда не ловушка.
:::

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Рендерить сайдбар только при ширине вьюпорта `>=` брейкпоинта. Вне диапазона зона не рендерится и не резервирует место.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Рендерить сайдбар только при ширине вьюпорта `<` брейкпоинта.
:::

### Screen.BottomNavigation

:::prop[visibleFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Рендерить нижнюю навигацию только при ширине вьюпорта `>=` брейкпоинта.
:::

:::prop[hiddenFrom]{type="'xs' | 'sm' | 'md' | 'lg' | 'xl'"}
Рендерить нижнюю навигацию только при ширине вьюпорта `<` брейкпоинта. Без обоих пропов бар виден на всех вьюпортах.
:::

## Рекомендации

**Один `Screen` на активный экран.** Компонент создаёт полноэкранный макет — вкладывать его в другой `Screen` не имеет смысла. Для вложенных прокручиваемых областей используйте `Scrollable`.

Высота шапки — CSS-переменная `--screen-header-height` (по умолчанию `56px`); под неё автоматически сдвигается контент.
