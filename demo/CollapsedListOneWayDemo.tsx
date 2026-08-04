"use client";

import { CollapsedList, Text } from "altrone-ui";

const CHANGELOG = [
  "3.5.0 — Добавлен компонент CollapsedList",
  "3.4.2 — Исправлена анимация Drawer на iOS",
  "3.4.1 — Оптимизирована производительность виртуальных списков",
  "3.4.0 — Новый компонент DataTable с сортировкой",
  "3.3.5 — Обновлены иконки в пакете lucide-react",
  "3.3.4 — Исправлен баг с фокусом в Modal",
  "3.3.3 — Улучшена поддержка клавиатуры в Dropdown",
  "3.3.2 — Добавлены новые размеры для TextInput",
  "3.3.0 — Поддержка тёмной темы",
];

export default function CollapsedListOneWayDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 480 }}>
      <CollapsedList limit={3} gap="xs" hideExpandButtonAfterUsage>
        {CHANGELOG.map((entry) => (
          <Text key={entry} block size={3} color="muted">
            {entry}
          </Text>
        ))}
      </CollapsedList>
    </div>
  );
}
