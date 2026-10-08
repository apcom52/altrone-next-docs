"use client";

import { Box, Flex, Scrollable, Text } from "altrone-ui";

const MESSAGES = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  author: ["Alex", "Maria", "John", "Olga", "Dmitry"][i % 5],
  text: [
    "Hi! How is the release going?",
    "Going well, almost done. Only tests left.",
    "Great! When are you planning to ship?",
    "Tonight, if everything goes smoothly.",
    "Okay, keep me posted!",
  ][i % 5],
}));

export default function ScrollableBasicDemo() {
  return (
    <Box material="pale" shape="rounded" radius={12} padding={12} height={240} width="100%" style={{ maxWidth: 440 }}>
      <Scrollable>
        <Flex orientation="vertical" gap="m">
          {MESSAGES.map((message) => (
            <Flex key={message.id} orientation="vertical">
              <Text block size={3} weight="bold">{message.author}</Text>
              <Text block>{message.text}</Text>
            </Flex>
          ))}
        </Flex>
      </Scrollable>
    </Box>
  );
}
