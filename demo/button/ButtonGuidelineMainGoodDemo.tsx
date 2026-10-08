"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonGuidelineMainGoodDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Cancel" variant="text" />
      <Button label="Save draft" />
      <Button label="Publish" variant="submit" />
    </Flex>
  );
}
