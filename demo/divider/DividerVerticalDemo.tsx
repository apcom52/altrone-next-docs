"use client";

import { Button, Divider, Flex } from "altrone-ui";

export default function DividerVerticalDemo() {
  return (
    <Flex gap="m" align="center">
      <Button label="Cut" />
      <Button label="Copy" />
      <Divider orientation="vertical" />
      <Button label="Paste" />
      <Divider orientation="vertical" />
      <Button label="Delete" danger />
    </Flex>
  );
}
