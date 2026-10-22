"use client";

import { Box, CloseButton, Flex, Text } from "altrone-ui";

export default function CloseButtonGuidelineSizeGoodDemo() {
  return (
    <Flex orientation="vertical" style={{ width: 280 }}>
      <Box material="outline" radius={12} padding={{ x: 16, y: 12 }}>
        <Flex
          align="center"
          justify="between"
          gap="m"
          style={{ width: "100%" }}
        >
          <Text weight="medium">Filters</Text>
          <CloseButton size="s" />
        </Flex>
      </Box>
    </Flex>
  );
}
