"use client";

import { Scrollable, Text } from "altrone-ui";

const ITEMS = Array.from({ length: 12 }, (_, i) => `Notification ${i + 1}`);

export default function ScrollableGuidelineSizeBadDemo() {
  return (
    <Scrollable>
      {ITEMS.map((item) => (
        <Text key={item} block>{item}</Text>
      ))}
    </Scrollable>
  );
}
