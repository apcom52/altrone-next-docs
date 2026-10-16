"use client";

import { Flex, Result } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function ResultSizesDemo() {
  return (
    <Flex orientation="horizontal" gap="m" wrap>
      {SIZES.map((size) => (
        <Result key={size} size={size} title={`size="${size}"`} />
      ))}
    </Flex>
  );
}
