# Фаза 1 — Чтение и рендеринг страниц

## 1.1 Структура файлов контента

```
content/
  navigation.json
  getting-started.json        # корневая страница → URL: /getting-started
  design-system/
    colors.json               # сгруппированная → URL: /design-system/colors
    typography.json
  components/
    button.json
    input.json
```

Схема `[slug].json`:
```json
{
  "title": "Цвета",
  "description": "...",
  "document": [ /* Slate.js nodes */ ]
}
```

Схема `navigation.json`:
```json
{
  "items": [
    {
      "type": "page",
      "slug": "getting-started",
      "title": "Установка",
      "icon": "PlugZap"
    },
    {
      "type": "group",
      "slug": "design-system",
      "title": "Дизайн-система",
      "pages": [
        { "slug": "colors", "title": "Цвета", "icon": "SwatchBook" },
        { "slug": "typography", "title": "Типографика", "icon": "Ligature" }
      ]
    }
  ]
}
```

## 1.2 Next.js роутинг

Один catch-all маршрут:
- `app/[...slug]/page.tsx` — принимает `['design-system', 'colors']` или `['getting-started']`

Catch-all предпочтительнее двух отдельных маршрутов — один Server Component, одна логика загрузки.

## 1.3 Загрузка данных через Server Components (без API)

```tsx
// app/[...slug]/page.tsx  (Server Component)
import { readFile } from 'fs/promises'
import path from 'path'
import { PageContent } from '@/components/PageContent'

export default async function Page({ params }) {
  const segments = params.slug  // ['design-system', 'colors'] или ['getting-started']
  const filePath = path.join(process.cwd(), 'content', ...segments) + '.json'
  const raw = await readFile(filePath, 'utf-8')
  const page = JSON.parse(raw)

  return <PageContent page={page} />  // Client Component получает готовый объект
}
```

Навигация аналогично — в `layout.tsx`:

```tsx
// app/layout.tsx  (Server Component)
const nav = JSON.parse(
  await readFile(path.join(process.cwd(), 'content/navigation.json'), 'utf-8')
)
// передаётся в <Sidebar nav={nav} />
```

Никаких `fetch`, никаких API routes. Данные инлайнятся в HTML при рендере.

## 1.4 Slate JSON → React рендерер

Client Component `<SlateRenderer>` принимает `document: SlateNode[]` как prop и рекурсивно рендерит узлы в React-элементы — **без импорта `slate` или `slate-react`**. Это важно: на проде не тянем лишний бандл редактора.

```tsx
// components/SlateRenderer.tsx  ("use client")
function renderNode(node, key) {
  if ('text' in node) {
    let el = <>{node.text}</>
    if (node.bold) el = <strong>{el}</strong>
    if (node.italic) el = <em>{el}</em>
    return <React.Fragment key={key}>{el}</React.Fragment>
  }
  const children = node.children.map((n, i) => renderNode(n, i))
  switch (node.type) {
    case 'heading-1': return <h1 key={key}>{children}</h1>
    case 'paragraph':  return <p key={key}>{children}</p>
    // ...
  }
}
```

## 1.5 Динамический сайдбар

`Sidebar` становится Server Component (или получает `nav` как prop из layout), генерирует `NavigationList.Link` из `navigation.json`. Убирается хардкод из `sidebar.tsx`.

## Итог: порядок реализации

| Шаг | Что делаем |
|-----|-----------|
| 1 | Создаём `content/navigation.json` + 2-3 тестовые страницы |
| 2 | `app/[...slug]/page.tsx` — Server Component, читает JSON через `fs` |
| 3 | Передаём `navigation.json` в Sidebar через layout |
| 4 | `<SlateRenderer>` — рекурсивный рендерер Slate-нод (без slate-react) |
| 5 | Динамический Sidebar из navigation.json |
