"use client";

import { Flex, Splitter, Text } from "altrone-ui";

export default function SplitterBasicDemo() {
  return (
    <div style={{ height: 240, width: "100%" }}>
      <Splitter>
        <Splitter.Panel defaultSize={35} minSize={20} maxSize={60}>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Navigation</Text>
            {["Home", "Projects", "Team", "Settings"].map((item) => (
              <Text key={item} block size={4}>{item}</Text>
            ))}
          </Flex>
        </Splitter.Panel>
        <Splitter.Panel>
          <Flex orientation="vertical" gap="s" style={{ padding: 16 }}>
            <Text block weight="bold">Content</Text>
            <Text block size={4} color="muted">
              Drag the divider to change the ratio between the panels.
            </Text>
          </Flex>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}
