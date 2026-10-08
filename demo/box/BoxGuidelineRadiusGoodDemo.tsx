"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineRadiusGoodDemo() {
  return (
    <Box material="translucent" tone="accent" radius={24} padding={12}>
      <Box material="solid" tone="accent" size="xl" width={120} radius={12}>
        Inner
      </Box>
    </Box>
  );
}
