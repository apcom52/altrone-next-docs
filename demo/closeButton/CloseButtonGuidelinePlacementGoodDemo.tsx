"use client";

import { Box, CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonGuidelinePlacementGoodDemo() {
  return (
    <Flex orientation="vertical" style={{ width: 280 }}>
      <Box material="outline" radius={12} padding={16}>
        <Flex orientation="vertical" gap="s" style={{ width: "100%" }}>
          <Flex align="center" justify="between" gap="m">
            <Text weight="medium">Sync paused</Text>
            <CloseButton size="s" />
          </Flex>
          <Text color="muted">Reconnect to the network to resume.</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
