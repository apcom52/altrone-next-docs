"use client";

import { Flex, Result } from "altrone-ui";

export default function ResultStatusDemo() {
  return (
    <Flex orientation="horizontal" gap="m" wrap>
      <Result status="empty" size="s" title="No results" />
      <Result status="info" size="s" title="Sync is paused" />
      <Result status="success" size="s" title="Invoice sent" />
      <Result status="warning" size="s" title="Plan limit reached" />
      <Result status="error" size="s" title="Upload failed" />
    </Flex>
  );
}
