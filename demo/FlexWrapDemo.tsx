"use client";

import { Flex, Text } from "altrone-ui";

const TAGS = ["React", "TypeScript", "Next.js", "Vite", "Tailwind", "CSS", "Node.js", "GraphQL", "REST", "WebSocket"];

export default function FlexWrapDemo() {
  return (
    <Flex gap="s" wrap style={{ maxWidth: 480 }}>
      {TAGS.map((tag) => (
        <div
          key={tag}
          style={{
            padding: "4px 12px",
            background: "var(--altrone-layer-2)",
            border: "1px solid var(--altrone-border)",
            borderRadius: "20px",
          }}
        >
          <Text size={3}>{tag}</Text>
        </div>
      ))}
    </Flex>
  );
}
