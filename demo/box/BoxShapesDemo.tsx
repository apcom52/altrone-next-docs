"use client";

import { Box, Flex } from "altrone-ui";

const SHAPES = ["rect", "rounded", "squircle", "circle", "pill"] as const;

export default function BoxShapesDemo() {
  return (
    <Flex align="center" gap="m" wrap>
      {SHAPES.map((shape) => (
        <Box
          key={shape}
          shape={shape}
          material="solid"
          tone="accent"
          radius={16}
          size={shape === "circle" ? "xl" : "l"}
          padding={shape === "circle" ? undefined : { x: 20 }}
        >
          {shape === "circle" ? "Aa" : shape}
        </Box>
      ))}
    </Flex>
  );
}
