"use client";

import { Flex, Text, Button } from "altrone-ui";
import { Plus } from "lucide-react";

export default function FlexBetweenDemo() {
  return (
    <Flex
      justify="between"
      align="center"
      style={{
        width: "100%",
        padding: "12px 16px",
        background: "var(--altrone-layer-2)",
        borderRadius: "10px",
        border: "1px solid var(--altrone-border)",
      }}
    >
      <Text size={4} weight="bold">Проекты</Text>
      <Button label="Новый проект" icon={<Plus size={16} />} variant="submit" size="s" />
    </Flex>
  );
}
