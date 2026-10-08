"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonGuidelineMainBadDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Cancel" variant="submit" />
      <Button label="Save draft" variant="submit" />
      <Button label="Publish" variant="submit" />
    </Flex>
  );
}
