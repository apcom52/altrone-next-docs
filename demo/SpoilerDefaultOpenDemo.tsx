"use client";

import { Spoiler, Text } from "altrone-ui";

export default function SpoilerDefaultOpenDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 560, display: "flex", flexDirection: "column", gap: "8px" }}>
      <Spoiler title="Системные требования" openedByDefault>
        <Text block size={4}>
          React 18 или выше, TypeScript 4.9+. Для Next.js рекомендуется версия 13.4+
          с поддержкой App Router.
        </Text>
      </Spoiler>
      <Spoiler title="Поддерживаемые браузеры">
        <Text block size={4}>
          Chrome 90+, Firefox 90+, Safari 15+, Edge 90+. Internet Explorer не поддерживается.
        </Text>
      </Spoiler>
    </div>
  );
}
