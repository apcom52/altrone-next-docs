"use client";

import { Flex, Text } from "altrone-ui";

export default function TextGuidelineSizeGoodDemo() {
  return (
    <Flex orientation="vertical" gap="xs" style={{ maxWidth: 320 }}>
      <Text size={6} weight="bold">Billing</Text>
      <Text size={4} color="muted" block>
        Manage your plan, invoices and payment methods.
      </Text>
    </Flex>
  );
}
