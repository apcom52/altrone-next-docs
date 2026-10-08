"use client";

import { Flex, Text } from "altrone-ui";

export default function TextAsChildDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text asChild size={7} weight="bold">
        <h3 style={{ margin: 0 }}>A real heading element</h3>
      </Text>
      <Text>
        Run{" "}
        <Text asChild code>
          <code>npm install altrone-ui</code>
        </Text>{" "}
        to get started.
      </Text>
    </Flex>
  );
}
