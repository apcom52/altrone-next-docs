"use client";

import { Text, Flex } from "altrone-ui";

export default function TextLinkDemo() {
  return (
    <Flex direction="vertical" gap="s">
      <Text size={4} href="/docs/getting-started">Документация →</Text>
      <Text size={4} href="https://github.com" external>
        Открыть на GitHub (внешняя ссылка)
      </Text>
      <Text size={4} block>
        Читайте подробнее в{" "}
        <Text href="/docs/installation">руководстве по установке</Text> или
        посетите <Text href="https://github.com" external>репозиторий</Text>.
      </Text>
    </Flex>
  );
}
