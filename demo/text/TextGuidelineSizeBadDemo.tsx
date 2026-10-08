"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineSizeBadDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ maxWidth: 320 }}>
      <Text size={3} weight="bold">Billing</Text>
      <Text size={8} block>
        Manage your plan, invoices and payment methods.
      </Text>
    </Flex>
  );
}
