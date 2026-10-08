"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineTruncateGoodDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ maxWidth: 240 }}>
      <Text truncate title="quarterly-report-final-v2-reviewed-by-legal.pdf">
        quarterly-report-final-v2-reviewed-by-legal.pdf
      </Text>
    </Flex>
  );
}
