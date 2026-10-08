"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerBasicDemo() {
  return (
    <Flex orientation="vertical" style={{ width: "100%", maxWidth: 560 }}>
      <Spoiler title="What is Altrone UI?">
        <Text block size={4}>
          Altrone UI is a React component library with a modern design system, a built-in theme,
          full TypeScript support and accessibility out of the box.
        </Text>
      </Spoiler>
    </Flex>
  );
}
