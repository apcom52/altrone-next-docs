"use client";

import { Flex, Loading, Text } from "altrone-ui";

export default function LoadingGuidelineProgressBadDemo() {
  return (
    <Flex gap="s" align="center">
      <Loading size={20} aria-label="Uploading report.pdf" />
      <Text>Uploading report.pdf</Text>
    </Flex>
  );
}
