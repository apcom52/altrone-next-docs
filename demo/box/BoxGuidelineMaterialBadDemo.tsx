"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineMaterialBadDemo() {
  return (
    <Box material="transparent" radius={12} padding={16}>
      <Box material="glass" radius={8} padding={{ x: 16, y: 12 }}>
        Frosted over nothing
      </Box>
    </Box>
  );
}
