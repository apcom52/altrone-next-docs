"use client";

import { Flex, Text } from "altrone-ui";

export default function SplitterGuidelineFixedGoodDemo() {
  return (
    <Flex style={{ height: 140, width: "100%" }}>
      <Text block weight="bold" style={{ padding: 16, flex: "0 0 30%" }}>Summary</Text>
      <Text block weight="bold" style={{ padding: 16, flex: 1 }}>Details</Text>
    </Flex>
  );
}
