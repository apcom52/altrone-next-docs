"use client";

import { Flex, Text } from "altrone-ui";

export default function TextListDemo() {
  return (
    <Flex gap="xl" wrap>
      <Text list="numeric">
        <Text item>Install the package</Text>
        <Text item>Wrap the app in Application</Text>
        <Text item>Import the components</Text>
      </Text>
      <Text list="marked">
        <Text item>TypeScript</Text>
        <Text item>React 19</Text>
        <Text item>Vite or Next.js</Text>
      </Text>
    </Flex>
  );
}
