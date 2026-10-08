"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineControlGoodDemo() {
  return (
    <Box asChild material="translucent" tone="accent" radius={8} padding={{ x: 16 }} pressable focusable>
      <button type="button" onClick={() => undefined}>
        Open settings
      </button>
    </Box>
  );
}
