"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonGuidelineNameGoodDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Save and continue" variant="submit" />
      <Button label="Delete project" danger />
    </Flex>
  );
}
