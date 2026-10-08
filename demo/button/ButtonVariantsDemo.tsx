"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonVariantsDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Save draft" />
      <Button label="Send" variant="submit" />
      <Button label="Cancel" variant="text" />
    </Flex>
  );
}
