"use client";

import { Scrollable, Text } from "altrone-ui";

const MESSAGES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  author: ["Алексей", "Мария", "Иван", "Ольга", "Дмитрий"][i % 5],
  text: [
    "Привет! Как дела с релизом?",
    "Всё хорошо, почти готово. Остались тесты.",
    "Отлично! Когда планируете выкатить?",
    "Сегодня вечером, если всё пройдёт гладко.",
    "Ок, держите в курсе!",
  ][i % 5],
}));

export default function ScrollableBasicDemo() {
  return (
    <div style={{ height: 240, width: "100%", maxWidth: 440 }}>
      <Scrollable>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "4px 0" }}>
          {MESSAGES.map((msg) => (
            <div key={msg.id}>
              <Text block size={3} weight="bold">{msg.author}</Text>
              <Text block size={4}>{msg.text}</Text>
            </div>
          ))}
        </div>
      </Scrollable>
    </div>
  );
}
