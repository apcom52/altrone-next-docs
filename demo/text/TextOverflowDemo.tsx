"use client";

import { Flex, Text } from "altrone-ui";

export default function TextOverflowDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ maxWidth: 280 }}>
      <Flex orientation="vertical">
        <Text size={2} color="muted">truncate</Text>
        <Text truncate>quarterly-report-final-v2-reviewed-by-legal.pdf</Text>
      </Flex>
      <Flex orientation="vertical">
        <Text size={2} color="muted">lineClamp={"{2}"}</Text>
        <Text block lineClamp={2}>
          A long description that is allowed two lines at most. After the second
          line it is cut with an ellipsis, however much longer the content is.
        </Text>
      </Flex>
      <Flex orientation="vertical">
        <Text size={2} color="muted">nowrap</Text>
        <Text nowrap>[Regression] 3.8.2</Text>
      </Flex>
    </Flex>
  );
}
