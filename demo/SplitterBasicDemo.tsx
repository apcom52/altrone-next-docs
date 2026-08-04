"use client";

import { Splitter, Text } from "altrone-ui";

export default function SplitterBasicDemo() {
  return (
    <div style={{ height: 240, width: "100%", border: "1px solid var(--alt-border-color)", borderRadius: 8, overflow: "hidden" }}>
      <Splitter>
        <Splitter.Panel defaultSize={35} min={20} max={60}>
          <div style={{ padding: 16, height: "100%" }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Навигация</Text>
            {["Главная", "Проекты", "Команда", "Настройки", "Аналитика"].map((item) => (
              <Text key={item} block size={4} style={{ padding: "4px 0" }}>{item}</Text>
            ))}
          </div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={{ padding: 16 }}>
            <Text block size={3} weight="bold" style={{ marginBottom: 8 }}>Содержимое</Text>
            <Text block size={4} color="muted">
              Перетащите разделитель влево или вправо, чтобы изменить соотношение панелей.
            </Text>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
