"use client";

import { Button, Flex, Override, Text } from "altrone-ui";

export default function ApplicationOverrideDemo() {
  return (
    <Flex direction="vertical" gap="m">
      <Button label="Submit" />
      <Override
        theme="dark"
        accent="red"
        style={{ padding: 16, borderRadius: 12 }}
      >
        <Flex direction="vertical" gap="m">
          <Text block weight="bold">
            A dark block with a red accent
          </Text>
          <Button label="Delete project" />
        </Flex>
      </Override>
    </Flex>
  );
}
