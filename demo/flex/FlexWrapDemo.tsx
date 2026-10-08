"use client";

import { Box, Flex } from "altrone-ui";

const TAGS = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "Storybook",
  "CSS",
  "Node.js",
  "GraphQL",
  "REST",
  "WebSocket",
];

export default function FlexWrapDemo() {
  return (
    <Flex gap="s" wrap style={{ maxWidth: 360 }}>
      {TAGS.map((tag) => (
        <Box key={tag} material="translucent" tone="accent" shape="pill" size="s">
          {tag}
        </Box>
      ))}
    </Flex>
  );
}
