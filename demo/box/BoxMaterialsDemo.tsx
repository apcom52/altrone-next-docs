"use client";

import { Box, Flex } from "altrone-ui";

const MATERIALS = [
  "solid",
  "glass",
  "plate",
  "translucent",
  "pale",
  "transparent",
  "outline",
  "ghost",
  "dotted",
] as const;

export default function BoxMaterialsDemo() {
  return (
    <Box material="translucent" color="indigo" radius={12} padding={16}>
      <Flex gap="m" wrap>
        {MATERIALS.map((material) => (
          <Box
            key={material}
            material={material}
            tone="accent"
            radius={8}
            padding={{ x: 16, y: 12 }}
          >
            {material}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
