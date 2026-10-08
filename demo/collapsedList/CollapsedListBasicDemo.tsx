"use client";

import { CollapsedList, Text } from "altrone-ui";

const ITEMS = [
  "Effective communication",
  "Time management",
  "Critical thinking",
  "Teamwork",
  "Adaptability",
  "Problem solving",
  "Leadership",
  "Attention to detail",
  "Creativity",
  "Emotional intelligence",
];

export default function CollapsedListBasicDemo() {
  return (
    <CollapsedList limit={3} gap="xs" style={{ width: "100%", maxWidth: 400 }}>
      {ITEMS.map((item) => (
        <Text key={item} block size={4}>
          {item}
        </Text>
      ))}
    </CollapsedList>
  );
}
