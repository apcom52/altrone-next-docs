"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineControlBadDemo() {
  return (
    <Box material="translucent" tone="accent" radius={8} padding={{ x: 16 }} pressable onClick={() => undefined}>
      Open settings
    </Box>
  );
}
