# Фаза 2 — Редактор

## 2.1 Установка зависимостей

```bash
npm install slate slate-react slate-history
npm install -D @types/slate
```

- `slate` — ядро, модель документа
- `slate-react` — React-рендерер редактора
- `slate-history` — undo/redo (Ctrl+Z / Ctrl+Shift+Z)

---

## 2.2 Роутинг редактора

Страница редактора размещается по маршруту:

```
app/[lang]/[...slug]/edit/page.tsx
```

URL: `/en/components/forms/button/edit`

Сервер проверяет `NODE_ENV` — если `production`, возвращает `notFound()`.
Никакой клиентской проверки, никакого `localStorage`.

```tsx
// app/[lang]/[...slug]/edit/page.tsx
import { notFound } from 'next/navigation'

export default async function EditPage({ params }) {
  if (process.env.NODE_ENV === 'production') notFound()

  // читает JSON через fs, передаёт в <SlateEditor>
}
```

---

## 2.3 API route для сохранения

```
app/api/content/[lang]/[...slug]/route.ts
```

- `GET` — читает JSON-файл (нужен для клиентского рефреша)
- `PUT` — пишет JSON-файл через `fs.writeFile`

В `production` оба метода возвращают `403 Forbidden`.

```ts
// app/api/content/[lang]/[...slug]/route.ts
export async function PUT(request, { params }) {
  if (process.env.NODE_ENV === 'production') {
    return Response.json({ error: 'Read-only' }, { status: 403 })
  }
  // fs.writeFile(filePath, JSON.stringify(body, null, 2))
}
```

---

## 2.4 Компонент SlateEditor

`components/SlateEditor.tsx` — полноценный редактор, импортируется **только** в edit-страницах. На продакшене в бандл не попадает.

Внутри:
- `createEditor()` + `withReact` + `withHistory`
- `<Editable>` с кастомным `renderElement` и `renderLeaf`
- Обработчик `onKeyDown` для горячих клавиш

### Поддерживаемые типы блоков

| Тип | Команда |
|-----|---------|
| `paragraph` | по умолчанию |
| `heading-one` | кнопка H1 |
| `heading-two` | кнопка H2 |
| `heading-three` | кнопка H3 |
| `code-block` | кнопка `</>` |
| `block-quote` | кнопка `"` |
| `bulleted-list` + `list-item` | кнопка список |
| `numbered-list` + `list-item` | кнопка нумерованный список |
| `divider` | кнопка `—` |

### Поддерживаемые инлайн-марки

| Марка | Горячая клавиша |
|-------|----------------|
| `bold` | Ctrl+B |
| `italic` | Ctrl+I |
| `underline` | Ctrl+U |
| `code` | Ctrl+` |
| `strikethrough` | — |

---

## 2.5 Тулбар редактора

Использует `Toolbar` и `Toolbar.Action` из `altrone-ui`.

Состоит из групп:
1. **Блоки**: H1, H2, H3, Paragraph
2. **Марки**: Bold, Italic, Underline, Strikethrough, Code
3. **Списки**: Bulleted, Numbered
4. **Прочее**: Quote, Code block, Divider
5. **Сохранение**: кнопка Save + статус (saved / saving… / unsaved changes)

```tsx
<Toolbar>
  <Toolbar.Leading>
    <Toolbar.Group>
      <Toolbar.Action label="H1" selected={isBlockActive('heading-one')} onClick={...} />
      {/* ... */}
    </Toolbar.Group>
  </Toolbar.Leading>
  <Toolbar.Trailing>
    <Toolbar.Action label="Save" onClick={handleSave} state={saveState} />
  </Toolbar.Trailing>
</Toolbar>
```

---

## 2.6 Автосохранение

Дебаунс 2 секунды после последнего изменения.
Если пользователь закрывает вкладку с несохранёнными изменениями — предупреждение через `beforeunload`.

```ts
useEffect(() => {
  const timer = setTimeout(() => save(value), 2000)
  return () => clearTimeout(timer)
}, [value])
```

---

## 2.7 Кнопка «Редактировать» на странице

На странице контента (`app/[lang]/[...slug]/page.tsx`) кнопка «Edit» рендерится **только на сервере** при `NODE_ENV !== 'production'`:

```tsx
// app/[lang]/[...slug]/page.tsx
const isDevMode = process.env.NODE_ENV !== 'production'

return (
  <article>
    {isDevMode && <EditButton href={`/${lang}/${slug.join('/')}/edit`} />}
    <SlateRenderer document={page.document} />
  </article>
)
```

`EditButton` — простой Client Component с кнопкой/ссылкой.

---

## 2.8 Создание новой страницы

В сайдбаре в dev-режиме появляется кнопка `+` рядом с каждым разделом/категорией.

Клик открывает диалог: ввод slug + title. После подтверждения:
1. `POST /api/content/[lang]/[...slug]` — создаёт пустой JSON-файл
2. Добавляет страницу в `navigation.json`
3. Редирект на страницу редактора новой страницы

---

## Итог: порядок реализации

| Шаг | Что делаем |
|-----|-----------|
| 1 | Установка `slate`, `slate-react`, `slate-history` |
| 2 | API route `PUT /api/content/[lang]/[...slug]` с guard на prod |
| 3 | `SlateEditor` — базовый редактор с `renderElement` / `renderLeaf` |
| 4 | Тулбар с форматированием (блоки + марки) |
| 5 | Горячие клавиши в `onKeyDown` |
| 6 | Автосохранение с дебаунсом + `beforeunload` |
| 7 | Страница `edit/page.tsx` + кнопка «Edit» на странице чтения |
| 8 | Создание новой страницы из сайдбара |
