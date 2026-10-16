"use client";

import { Flex, Progress } from "altrone-ui";

export default function ProgressSizesDemo() {
  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%" }}>
      <Progress size="mini" value={60} />
      <Progress size="s" value={60} />
      <Progress size="m" value={60} />
      <Progress size="l" value={60} />
      <Progress size="xl" value={60} />
    </Flex>
  );
}
