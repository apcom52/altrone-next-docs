"use client";

import { Text, Flex } from "altrone-ui";

export default function TextListDemo() {
  return (
    <Flex gap="xl">
      <div>
        <Text size={4} list="numeric">
          <Text item>Установить зависимости</Text>
          <Text item>Настроить провайдер</Text>
          <Text item>Импортировать компоненты</Text>
        </Text>
      </div>
      <div>
        <Text size={4} list="marked">
          <Text item>TypeScript</Text>
          <Text item>React 18+</Text>
          <Text item>Vite или Next.js</Text>
        </Text>
      </div>
    </Flex>
  );
}
