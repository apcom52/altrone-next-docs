"use client";

import { useState } from "react";
import { Button, Flex, Splitter, Text } from "altrone-ui";

export default function SplitterControlledDemo() {
  const [sizes, setSizes] = useState([30, 70]);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Flex gap="s" align="center">
        <Button label="Reset layout" size="s" onClick={() => setSizes([30, 70])} />
        <Text size={4}>Sizes: {sizes.map((size) => `${Math.round(size)}%`).join(" / ")}</Text>
      </Flex>
      <div style={{ height: 180, width: "100%" }}>
        <Splitter sizes={sizes} onSizesChange={setSizes}>
          <Splitter.Panel minSize={10}>
            <Text block weight="bold" style={{ padding: 16 }}>Left</Text>
          </Splitter.Panel>
          <Splitter.Panel minSize={10}>
            <Text block weight="bold" style={{ padding: 16 }}>Right</Text>
          </Splitter.Panel>
        </Splitter>
      </div>
    </Flex>
  );
}
