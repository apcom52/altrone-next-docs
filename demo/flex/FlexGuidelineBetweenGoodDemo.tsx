"use client";

import { Button, Flex, Text } from "altrone-ui";

export default function FlexGuidelineBetweenGoodDemo() {
  return (
    <Flex justify="between" align="center">
      <Text weight="bold">Invoices</Text>
      <Button label="New invoice" variant="submit" size="s" />
    </Flex>
  );
}
