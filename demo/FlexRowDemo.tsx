"use client";

import { Flex, Text } from "altrone-ui";

const box = {
  padding: "8px 16px",
  background: "var(--altrone-layer-2)",
  borderRadius: "8px",
  border: "1px solid var(--altrone-border)",
};

export default function FlexRowDemo() {
  return (
    <Flex gap="m" align="center">
      <div style={box}><Text size={3}>Элемент A</Text></div>
      <div style={box}><Text size={3}>Элемент B</Text></div>
      <div style={box}><Text size={3}>Элемент C</Text></div>
    </Flex>
  );
}
