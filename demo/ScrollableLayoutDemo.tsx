"use client";

import { Scrollable, Text } from "altrone-ui";

const CHAPTERS = [
  { id: 1, title: "Введение", preview: "Знакомство с библиотекой и основными концепциями дизайн-системы." },
  { id: 2, title: "Установка", preview: "Как добавить Altrone UI в существующий проект на Next.js или Vite." },
  { id: 3, title: "Темы", preview: "Настройка цветов, типографики и отступов через CSS-переменные." },
  { id: 4, title: "Компоненты", preview: "Обзор всех доступных компонентов и их назначения." },
  { id: 5, title: "Формы", preview: "Работа с Form, Form.Field и встроенной валидацией." },
  { id: 6, title: "Навигация", preview: "Drawer, Modal, Popover и другие оверлеи." },
  { id: 7, title: "Лейаут", preview: "Flex, Grid, Screen, Splitter — построение структуры страниц." },
  { id: 8, title: "Доступность", preview: "ARIA-атрибуты, фокус, клавиатурная навигация." },
];

export default function ScrollableLayoutDemo() {
  return (
    <div style={{ display: "flex", height: 280, width: "100%", border: "1px solid var(--alt-border-color)", borderRadius: 8, overflow: "hidden" }}>
      <aside style={{ width: 180, borderRight: "1px solid var(--alt-border-color)", flexShrink: 0 }}>
        <Scrollable>
          <div style={{ padding: "8px 0" }}>
            {CHAPTERS.map((ch) => (
              <div key={ch.id} style={{ padding: "8px 16px", cursor: "pointer" }}>
                <Text block size={4}>{ch.title}</Text>
              </div>
            ))}
          </div>
        </Scrollable>
      </aside>
      <main style={{ flex: 1 }}>
        <Scrollable>
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
            {CHAPTERS.map((ch) => (
              <div key={ch.id}>
                <Text block size={5} weight="bold" style={{ marginBottom: 4 }}>{ch.title}</Text>
                <Text block size={4} color="muted">{ch.preview}</Text>
              </div>
            ))}
          </div>
        </Scrollable>
      </main>
    </div>
  );
}
