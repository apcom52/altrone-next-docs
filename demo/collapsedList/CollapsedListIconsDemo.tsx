"use client";

import { CollapsedList, Text } from "altrone-ui";
import { CirclePlus, CircleMinus } from "lucide-react";

const TAGS = ["Design", "Frontend", "Backend", "DevOps", "QA", "Analytics", "Support"];

export default function CollapsedListIconsDemo() {
  return (
    <CollapsedList
      limit={3}
      gap="xs"
      openIcon={<CirclePlus />}
      closeIcon={<CircleMinus />}
      style={{ width: "100%", maxWidth: 400 }}
    >
      {TAGS.map((tag) => (
        <Text key={tag} block size={4}>
          {tag}
        </Text>
      ))}
    </CollapsedList>
  );
}
