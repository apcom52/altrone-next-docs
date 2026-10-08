"use client";

import { Flex, Spoiler, Text } from "altrone-ui";

export default function SpoilerDefaultOpenDemo() {
  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 560 }}>
      <Spoiler title="System requirements" defaultOpen>
        <Text block size={4}>
          React 19 or later and TypeScript 5+. For Next.js, version 15+ with the App Router is recommended.
        </Text>
      </Spoiler>
      <Spoiler title="Supported browsers">
        <Text block size={4}>
          Current versions of Chrome, Firefox, Safari and Edge. Internet Explorer is not supported.
        </Text>
      </Spoiler>
    </Flex>
  );
}
