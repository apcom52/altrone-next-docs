"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineRadiusBadDemo() {
  return (
    <Box material="translucent" tone="accent" radius={24} padding={12}>
      <Box material="solid" tone="accent" size="xl" width={120} radius={24}>
        Inner
      </Box>
    </Box>
  );
}
