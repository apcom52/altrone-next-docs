"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineTruncateBadDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ maxWidth: 160 }}>
      <Text truncate>Delete this project and all of its data</Text>
    </Flex>
  );
}
