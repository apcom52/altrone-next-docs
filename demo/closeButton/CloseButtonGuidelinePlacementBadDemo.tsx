"use client";

import { Box, CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonGuidelinePlacementBadDemo() {
  return (
    <Flex orientation="vertical" style={{ width: 280 }}>
      <Box material="outline" radius={12} padding={16}>
        <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
          <Text weight="medium">Sync paused</Text>
          <Text color="muted">Reconnect to the network to resume.</Text>
          <CloseButton size="s" />
        </Flex>
      </Box>
    </Flex>
  );
}
