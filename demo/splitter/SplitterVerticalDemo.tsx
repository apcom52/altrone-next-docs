"use client";

import { Flex, Splitter, Text } from "altrone-ui";

export default function SplitterVerticalDemo() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <Splitter orientation="vertical">
        <Splitter.Panel defaultSize={60} minSize={30}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Editor</Text>
            <Text block code size={4}>const result = fibonacci(10);</Text>
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel minSize={15}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Output</Text>
            <Text block size={4} color="muted">fibonacci(10) = 55</Text>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
