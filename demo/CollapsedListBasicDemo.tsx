"use client";

import { CollapsedList, Text } from "altrone-ui";

const ITEMS = [
  "Эффективная коммуникация",
  "Управление временем",
  "Критическое мышление",
  "Работа в команде",
  "Адаптивность",
  "Решение проблем",
  "Лидерство",
  "Внимание к деталям",
  "Креативность",
  "Эмоциональный интеллект",
];

export default function CollapsedListBasicDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <CollapsedList limit={3} gap="xs">
        {ITEMS.map((item) => (
          <Text key={item} block size={4}>
            {item}
          </Text>
        ))}
      </CollapsedList>
    </div>
  );
}
