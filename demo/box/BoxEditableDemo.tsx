"use client";

import { Box } from "altrone-ui";

export default function BoxEditableDemo() {
  return (
    <Box asChild material="outline" radius={8} padding={{ x: 12 }} editable>
      <input placeholder="Type something…" />
    </Box>
  );
}
