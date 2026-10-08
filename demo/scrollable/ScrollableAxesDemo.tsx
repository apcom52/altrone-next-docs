"use client";

import { Flex, Label, Scrollable } from "altrone-ui";

const TAGS = ["Design", "Frontend", "Backend", "Mobile", "DevOps", "Analytics", "Security", "Support", "Marketing", "Research", "Legal", "Finance"];

export default function ScrollableAxesDemo() {
  return (
    <Scrollable overflowX="scroll" overflowY="hidden" style={{ maxWidth: 420 }}>
      <Flex gap="s" style={{ width: "max-content", paddingBottom: 12 }}>
        {TAGS.map((tag) => (
          <Label key={tag} variant="soft" shape="pill">{tag}</Label>
        ))}
      </Flex>
    </Scrollable>
  );
}
