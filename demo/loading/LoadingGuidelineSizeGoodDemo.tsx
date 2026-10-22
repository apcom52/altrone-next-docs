"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function LoadingGuidelineSizeGoodDemo() {
  return (
    <Text>
      <Flex gap="xs" align="center">
        <Loading size={16} strokeWidth={1.5} color="currentColor" aria-label="Syncing" />
        Syncing your notes…
      </Flex>
    </Text>
  );
}
