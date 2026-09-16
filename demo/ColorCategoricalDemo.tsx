"use client";

import { Flex } from "altrone-ui";

export default function ColorCategoricalDemo() {
  return (
    <Flex gap="s" wrap>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          title={`--category-${n}`}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: `var(--category-${n})`,
          }}
        />
      ))}
    </Flex>
  );
}
