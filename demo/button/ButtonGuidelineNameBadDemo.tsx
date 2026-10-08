"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonGuidelineNameBadDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="OK" variant="submit" />
      <Button label="Yes" danger />
    </Flex>
  );
}
