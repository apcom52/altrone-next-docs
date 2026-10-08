"use client";

import { Box, Flex } from "altrone-ui";

const HUES = ["red", "orange", "amber", "green", "teal", "blue", "indigo", "purple", "pink", "brown"];

export default function BoxColorDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="s" wrap>
        {HUES.map((hue) => (
          <Box key={hue} material="solid" color={hue} radius={8} padding={{ x: 12, y: 6 }}>
            {hue}
          </Box>
        ))}
      </Flex>
      <Flex gap="s" wrap>
        {HUES.map((hue) => (
          <Box key={hue} material="translucent" color={hue} radius={8} padding={{ x: 12, y: 6 }}>
            {hue}
          </Box>
        ))}
      </Flex>
      <Flex gap="s" wrap>
        <Box material="solid" color="#f0abfc" radius={8} padding={{ x: 12, y: 6 }}>
          #f0abfc
        </Box>
        <Box material="outline" color="#f0abfc" radius={8} padding={{ x: 12, y: 6 }}>
          #f0abfc
        </Box>
      </Flex>
    </Flex>
  );
}
