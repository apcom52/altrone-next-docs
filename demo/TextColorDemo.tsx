"use client";

import { Text, Flex } from "altrone-ui";

export default function TextColorDemo() {
  return (
    <Flex direction="vertical" gap="s">
      <Text size={4}>Без цвета — наследует контекст</Text>
      <Text size={4} color="muted">muted — второстепенная информация</Text>
      <Text size={4} color="success">success — успех, сохранено, активно</Text>
      <Text size={4} color="warning">warning — требует внимания</Text>
      <Text size={4} color="danger">danger — ошибка, превышен лимит</Text>
    </Flex>
  );
}
