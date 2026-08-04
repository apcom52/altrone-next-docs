"use client";

import { Spoiler, Text } from "altrone-ui";

export default function SpoilerBasicDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 560 }}>
      <Spoiler title="Что такое Altrone UI?">
        <Text block size={4}>
          Altrone UI — библиотека React-компонентов с современной дизайн-системой.
          Включает 50+ компонентов, встроенную тему, полную поддержку TypeScript
          и доступность из коробки.
        </Text>
      </Spoiler>
    </div>
  );
}
