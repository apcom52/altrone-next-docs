"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function LoadingGuidelineProgressGoodDemo() {
  return (
    <Flex gap="s" align="center">
      <Loading size={20} value={65} aria-label="Uploading report.pdf" />
      <Text>Uploading report.pdf</Text>
    </Flex>
  );
}
