"use client";

import { Box, Scrollable, Text } from "altrone-ui";

const ITEMS = Array.from({ length: 12 }, (_, i) => `Notification ${i + 1}`);

export default function ScrollableGuidelineSizeGoodDemo() {
  return (
    <Box material="pale" shape="rounded" radius={12} padding={12} height={160} width="100%">
      <Scrollable>
        {ITEMS.map((item) => (
          <Text key={item} block>{item}</Text>
        ))}
      </Scrollable>
    </Box>
  );
}
