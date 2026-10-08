"use client";

import { Box } from "altrone-ui";

export default function BoxGuidelineMaterialGoodDemo() {
  return (
    <Box material="solid" color="indigo" radius={12} padding={16}>
      <Box material="glass" radius={8} padding={{ x: 16, y: 12 }} elevation="overlay">
        Frosted over a colorful backdrop
      </Box>
    </Box>
  );
}
