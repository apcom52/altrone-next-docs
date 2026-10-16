"use client";

import { Flex, Tags } from "altrone-ui";

const SIZES = ["mini", "s", "m", "l", "xl"] as const;

export default function TagsSizesDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      {SIZES.map((size) => (
        <Tags key={size} size={size}>
          <Tags.Item label={`size="${size}"`} />
          <Tags.Item label="Design" />
          <Tags.Item label="Frontend" />
        </Tags>
      ))}
    </Flex>
  );
}
