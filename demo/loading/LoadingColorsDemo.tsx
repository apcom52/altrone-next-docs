"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function LoadingColorsDemo() {
  return (
    <Flex gap="l" align="center">
      <Loading size={28} />
      <Loading size={28} color="var(--accent-11)" />
      <Loading size={28} color="var(--danger-text-1)" />
      <Text color="muted">
        <Flex gap="xs" align="center">
          <Loading size={16} color="currentColor" aria-label="Saving changes" />
          Saving…
        </Flex>
      </Text>
    </Flex>
  );
}
