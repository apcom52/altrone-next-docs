# Установка

## Установка пакета

```bash
npm install altrone-ui
```

Или с другими пакетными менеджерами:

```bash
yarn add altrone-ui
pnpm add altrone-ui
```

## Импорт стилей

Добавьте импорт стилей в точку входа приложения:

```tsx filename="app/layout.tsx"
import 'altrone-ui/dist/style.css'
```

:::warning
Импорт CSS должен быть выше пользовательских стилей, чтобы позволить правильное переопределение.
:::

## Настройка провайдера

Оберните приложение компонентом `Application` для включения темизации:

```tsx filename="app/layout.tsx"
import { Application } from 'altrone-ui'
import 'altrone-ui/dist/style.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Application accent="purple">
          {children}
        </Application>
      </body>
    </html>
  )
}
```

## Доступные акцентные цвета

Параметр `accent` компонента `Application` управляет основным цветом всех компонентов:

| Значение | Описание |
|----------|----------|
| `purple` | Акцент по умолчанию |
| `blue` | Синий акцент |
| `green` | Зелёный акцент |
| `red` | Красный акцент |

## Проверка настройки

Создайте простой компонент, чтобы убедиться в корректной работе:

```tsx
import { Button } from 'altrone-ui'

export default function Page() {
  return <Button label="Привет, Altrone!" />
}
```

:::note
Если стили не применяются, убедитесь, что `Application` оборачивает компонент и импорт CSS присутствует.
:::
