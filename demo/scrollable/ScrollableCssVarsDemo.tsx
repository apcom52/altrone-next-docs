"use client";

import { Box, Scrollable, Text } from "altrone-ui";

const ITEMS = Array.from({ length: 20 }, (_, i) => `Row ${i + 1}`);

export default function ScrollableCssVarsDemo() {
  return (
    <>
      <style>{`
        .thick-scrollbar .os-scrollbar {
          --os-size: 12px;
          --os-handle-bg: var(--accent-9);
          --os-handle-bg-hover: var(--accent-10);
        }
      `}</style>
      <Box material="pale" shape="rounded" radius={12} padding={12} height={160} width="100%" style={{ maxWidth: 360 }}>
        <Scrollable className="thick-scrollbar">
          {ITEMS.map((item) => (
            <Text key={item} block>{item}</Text>
          ))}
        </Scrollable>
      </Box>
    </>
  );
}
