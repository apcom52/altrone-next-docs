"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function ProgressGuidelineUnknownGoodDemo() {
  return (
    <Flex gap="m" align="center">
      <Loading size={20} />
      <Text>Waiting for the server…</Text>
    </Flex>
  );
}
