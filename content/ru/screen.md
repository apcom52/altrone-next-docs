# Screen

Корневой компонент макета приложения. Компонует три зоны: фиксированный боковой сайдбар, прилипающую шапку и прокручиваемую главную область. Предназначен для верхнего уровня дерева компонентов — одного экрана приложения или всего приложения целиком.

:::note
`AltroneApplication` внутренне оборачивает своё содержимое в `Screen`. Если вы хотите управлять сайдбаром и шапкой — передайте их напрямую в `AltroneApplication` через пропы `sidebar` и `header`, а не используйте `Screen` отдельно.
:::

## Полный макет

```tsx
import { Screen, NavigationList, Toolbar } from 'altrone-ui';
import { Home, Folder, Settings, Plus } from 'lucide-react';

<Screen
  sidebar={
    <NavigationList id="app-nav">
      <NavigationList.Link
        label="Главная"
        icon={<Home />}
        selected={currentPage === 'home'}
        onClick={() => navigate('home')}
      />
      <NavigationList.Link
        label="Проекты"
        icon={<Folder />}
        selected={currentPage === 'projects'}
        onClick={() => navigate('projects')}
      />
      <NavigationList.Link
        label="Настройки"
        icon={<Settings />}
        selected={currentPage === 'settings'}
        onClick={() => navigate('settings')}
      />
    </NavigationList>
  }
  header={
    <Toolbar>
      <Toolbar.Title>Мои проекты</Toolbar.Title>
      <Toolbar.Action label="Создать" icon={<Plus />} onClick={handleCreate} />
    </Toolbar>
  }
>
  <PageContent />
</Screen>
```

## Только шапка

Если сайдбар не нужен, просто не передавайте `sidebar`. Шапка прилипнет к верху, контент займёт всю ширину.

```tsx
<Screen
  header={
    <Toolbar>
      <Toolbar.Title>Настройки</Toolbar.Title>
    </Toolbar>
  }
>
  <SettingsPanel />
</Screen>
```

## Без шапки и сайдбара

`Screen` без пропов — просто семантическая обёртка: `aside` + `main`. Подходит для лендингов и страниц без навигационного хрома.

```tsx
<Screen>
  <LandingPage />
</Screen>
```

## Использование через AltroneApplication

В большинстве случаев удобнее передать `sidebar` и `header` прямо в `AltroneApplication`:

```tsx
// app/layout.tsx
<AltroneApplication
  sidebar={<AppNavigation />}
  header={<AppToolbar />}
>
  {children}
</AltroneApplication>
```

Это эквивалентно использованию `Screen` напрямую, но не требует дополнительного уровня вложенности.

## Сайдбар: видимость

Видимость сайдбара управляется внутренним `ScreenSidebarContext`. `Toolbar` может считывать этот контекст и показывать кнопку-переключатель. Состояние не нужно держать снаружи — компонент управляет им сам.

```tsx
<Toolbar>
  <Toolbar.SidebarToggle /> {/* читает контекст, показывает/скрывает сайдбар */}
  <Toolbar.Title>Приложение</Toolbar.Title>
</Toolbar>
```

## Свойства

:::prop[sidebar]{type="ReactElement<NavigationListProps>"}
Элемент `NavigationList`, рендерится в фиксированном `<aside>` слева. Без этого пропа сайдбар не отображается.
:::

:::prop[header]{type="ReactElement<ToolbarProps>"}
Элемент `Toolbar`, рендерится в прилипающем `<header>` над главным контентом.
:::

:::prop[children]{type="ReactNode"}
Основной контент страницы. Рендерится внутри `<main>`.
:::

## Рекомендации

**Один `Screen` на приложение.** Компонент создаёт полноэкранный макет — вкладывать его в другой `Screen` не имеет смысла. Для вложенных областей с прокруткой используйте `Scrollable`.

**`sidebar` принимает только `NavigationList`.** Это намеренное ограничение: сайдбар — зона навигации, а не произвольного контента. Если нужен боковой контентный блок внутри страницы, используйте `Grid` с соответствующими пропорциями колонок.

**`header` принимает только `Toolbar`.** Шапка — это зона инструментов и заголовка текущего экрана. `Toolbar` спроектирован под эту роль и умеет работать с `ScreenSidebarContext`.
