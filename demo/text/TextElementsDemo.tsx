"use client";

import { Flex, Text } from "altrone-ui";

export default function TextElementsDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ maxWidth: 420 }}>
      <Text block>
        A paragraph is a <Text weight="bold">block</Text> element. Inline{" "}
        <Text code>Text</Text> inside it stays in the flow.
      </Text>
      <Text block>A second paragraph sits on its own line, with prose line spacing.</Text>
      <Text href="#elements">A link is an anchor</Text>
    </Flex>
  );
}
