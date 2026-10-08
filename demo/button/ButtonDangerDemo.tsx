"use client";

import { Button, Flex } from "altrone-ui";

export default function ButtonDangerDemo() {
  return (
    <Flex align="center" gap="m">
      <Button label="Delete account" danger />
      <Button label="Delete account" variant="submit" danger />
      <Button label="Delete" variant="text" danger />
    </Flex>
  );
}
