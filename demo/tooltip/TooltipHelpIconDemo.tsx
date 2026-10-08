"use client";

import { Tooltip, Text, Flex } from "altrone-ui";

export default function TooltipHelpIconDemo() {
  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="xs" align="center">
        <Text size={4}>API key</Text>
        <Tooltip content="A secret key for accessing the API. Never share it publicly." />
      </Flex>
      <Flex gap="xs" align="center">
        <Text size={4}>Refresh token</Text>
        <Tooltip
          title="Refresh Token"
          content="Used to get a new access token without signing in again."
        />
      </Flex>
    </Flex>
  );
}
