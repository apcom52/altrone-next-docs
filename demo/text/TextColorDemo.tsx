"use client";

import { Flex, Text } from "altrone-ui";

export default function TextColorDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Text>Default text</Text>
      <Text color="muted">Secondary information</Text>
      <Text color="success">Saved successfully</Text>
      <Text color="warning">Approaching the limit</Text>
      <Text color="danger">Authorization failed</Text>
    </Flex>
  );
}
