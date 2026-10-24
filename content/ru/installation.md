# Установка

Altrone работает в любом проекте на React 19, который собирается современным сборщиком — Vite, Next.js, webpack, Rsbuild. Подключение занимает три шага: установить пакет, один раз импортировать стили и обернуть приложение в `Application`.

## Требования

- **React 19** и **React DOM 19** — это peer-зависимости, библиотека использует те копии, которые уже есть в проекте.
- **Сборщик с поддержкой ES-модулей.** Пакет публикуется только как ES-модули, сборки под CommonJS нет.
- **TypeScript не обязателен.** Типы входят в пакет, ничего дополнительно ставить не нужно.

## Установка пакета

Altrone 4 публикуется с тегом `beta`. Без него пакетный менеджер установит Altrone 3 с другим API.

```bash
npm install altrone-ui@beta
```

```bash
pnpm add altrone-ui@beta
```

```bash
yarn add altrone-ui@beta
```

Всё, что нужно компонентам, — `motion` для анимаций, `lucide-react` для встроенных иконок, `dayjs` для дат — устанавливается вместе с пакетом.

## Импорт стилей

Все стили компонентов собраны в одном файле. Импортируйте его один раз в точке входа приложения — до собственных стилей, чтобы ваши правила могли его переопределять:

```tsx
import 'altrone-ui/dist/style.css';
```

Вместе со стилями подключаются шрифты Inter и JetBrains Mono, загружать их самостоятельно не нужно.

## Подключение Application

`Application` должен оборачивать все остальные компоненты Altrone — без него у них нет цветов, текстов и темы. Поставьте его в корень приложения, один раз.

### Vite

```tsx filename="src/main.tsx"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Application } from 'altrone-ui';
import 'altrone-ui/dist/style.css';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Application applicationName="Acme">
      <App />
    </Application>
  </StrictMode>,
);
```

### Next.js

`Application` использует состояние и эффекты, поэтому в App Router его нужно рендерить из клиентского компонента. Создайте небольшую обёртку с `'use client'` и используйте её в корневом layout:

```tsx filename="app/AltroneProvider.tsx"
'use client';

import { Application } from 'altrone-ui';

export function AltroneProvider({ children }: { children: React.ReactNode }) {
  return (
    <Application applicationName="Acme" persistTheme>
      {children}
    </Application>
  );
}
```

```tsx filename="app/layout.tsx"
import 'altrone-ui/dist/style.css';
import { AltroneProvider } from './AltroneProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AltroneProvider>{children}</AltroneProvider>
      </body>
    </html>
  );
}
```

:::warning
Библиотека не помечает себя как клиентский код, поэтому `'use client'` нужен в каждом файле, который рендерит компоненты Altrone. Импорт напрямую в серверный компонент приведёт к ошибке.
:::

## Настройка приложения

`Application` работает без пропсов: следует системной теме, использует синий акцент и говорит по-английски. Пропсы, которые обычно задают первыми:

:::prop[theme]{type="'auto' | 'light' | 'dark'" default="'auto'"}
Цветовая тема. `auto` следует системной настройке и переключается вместе с ней.
:::

:::prop[accent]{type="'red' | 'orange' | 'amber' | 'green' | 'teal' | 'blue' | 'indigo' | 'purple' | 'pink' | 'brown'" default="'blue'"}
Основной цвет кнопок, ссылок, выделения и рамки фокуса во всех компонентах.
:::

:::prop[language]{type="'en' | 'ru' | 'fr' | 'de' | 'es' | 'zh' | 'pt' | 'tr'" default="'en'"}
Язык встроенных текстов. Отдельные тексты можно заменить через `customLabels`.
:::

:::prop[persistTheme]{type="boolean" default="false"}
Запоминает выбранную пользователем тему и восстанавливает её при следующем визите.
:::

:::prop[applicationName]{type="string"}
Название приложения, которое добавляется в заголовок вкладки рядом с заголовком текущего `Screen`.
:::

Полный список — иконки, положение тостов, рендер в собственный `<body>` — на странице [Application](/ru/components/layout/application).

## Проверка

Отрисуйте кнопку и вызовите тост. Если кнопка окрашена в акцентный цвет, а тост появился внизу окна, всё подключено:

```tsx
import { Button, showToast } from 'altrone-ui';

export function App() {
  return <Button label="Say hello" variant="submit" onClick={() => showToast('Hello, Altrone!')} />;
}
```

:::note Если что-то выглядит не так
- **У компонентов нет стилей** — проверьте, что импортирован `altrone-ui/dist/style.css`.
- **Нет цветов, не появляются тосты и диалоги** — компонент отрисован вне `Application`.
- **Ошибка про хуки или `'use client'` в Next.js** — компонент рендерится из серверного компонента; перенесите его в клиентский.
:::

## Похожие темы

- [Начало работы](/ru/getting-started) — что такое Altrone и как на нём строится приложение
- [Application](/ru/components/layout/application) — все настройки корневого компонента
- [Screen](/ru/components/layout/screen) — построение макета страницы
- [Тёмная тема](/ru/foundations/darkTheme) — переключение темы и как избежать мигания
- [MCP](/ru/foundations/mcp) — актуальная документация Altrone для ИИ-агентов
