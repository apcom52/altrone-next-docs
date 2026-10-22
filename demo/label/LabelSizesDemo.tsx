"use client";

import { Flex, Label } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function LabelSizesDemo() {
  return (
    <Flex gap="m" wrap align="center">
      {SIZES.map((size) => (
        <Label key={size} size={size} color="primary" variant="soft">
          {size}
        </Label>
      ))}
    </Flex>
  );
}
