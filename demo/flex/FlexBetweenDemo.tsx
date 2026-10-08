"use client";

import { Button, Flex, Text } from "altrone-ui";
import { Plus } from "lucide-react";

export default function FlexBetweenDemo() {
  return (
    <Flex justify="between" align="center">
      <Text size={4} weight="bold">
        Projects
      </Text>
      <Button label="New project" icon={<Plus />} variant="submit" size="s" />
    </Flex>
  );
}
