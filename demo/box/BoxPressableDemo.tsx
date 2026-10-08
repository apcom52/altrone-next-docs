"use client";

import { Box, Flex } from "altrone-ui";

export default function BoxPressableDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      <Box asChild material="translucent" tone="accent" radius={8} padding={{ x: 16 }} pressable focusable>
        <button type="button">Translucent</button>
      </Box>
      <Box asChild material="outline" radius={8} padding={{ x: 16 }} pressable focusable>
        <button type="button">Outline</button>
      </Box>
      <Box asChild material="ghost" radius={8} padding={{ x: 16 }} pressable focusable>
        <button type="button">Ghost</button>
      </Box>
      <Box asChild material="solid" tone="accent" radius={8} padding={{ x: 16 }} pressable focusable>
        <button type="button">Solid</button>
      </Box>
    </Flex>
  );
}
