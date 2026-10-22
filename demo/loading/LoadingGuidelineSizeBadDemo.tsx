"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function LoadingGuidelineSizeBadDemo() {
  return (
    <Text>
      <Flex gap="xs" align="center">
        <Loading size={48} strokeWidth={4} aria-label="Syncing" />
        Syncing your notes…
      </Flex>
    </Text>
  );
}
