"use client";

import { Flex, Scrollable, Text } from "altrone-ui";

const OPTIONS = ["Overview", "Billing", "Members", "Security", "Integrations", "Webhooks", "Audit log", "Danger zone"];

export default function ScrollableMaxHeightDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ maxWidth: 320 }}>
      <Scrollable maxHeight={120}>
        <Flex orientation="vertical" gap="s">
          {OPTIONS.map((option) => (
            <Text key={option} block>{option}</Text>
          ))}
        </Flex>
      </Scrollable>
      <Scrollable maxHeight={120}>
        <Flex orientation="vertical" gap="s">
          {OPTIONS.slice(0, 2).map((option) => (
            <Text key={option} block>{option}</Text>
          ))}
        </Flex>
      </Scrollable>
    </Flex>
  );
}
