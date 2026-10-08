"use client";

import { Box, Flex } from "altrone-ui";
import { Bell } from "lucide-react";

export default function BoxAsChildDemo() {
  return (
    <Flex align="center" gap="m">
      <Box asChild shape="circle" material="solid" tone="accent" size="l" pressable focusable>
        <button type="button" aria-label="Notifications">
          <Bell size={16} />
        </button>
      </Box>
      <Box asChild material="translucent" tone="accent" radius={8} padding={{ x: 16 }} pressable focusable>
        <a href="#profile">Go to profile</a>
      </Box>
    </Flex>
  );
}
