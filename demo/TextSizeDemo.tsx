"use client";

import { Text, Flex } from "altrone-ui";

export default function TextSizeDemo() {
  return (
    <Flex direction="vertical" gap="s">
      <Text size={2} color="muted">size 2 — подписи, метаданные</Text>
      <Text size={3}>size 3 — вспомогательный текст</Text>
      <Text size={4}>size 4 — основной текст интерфейса</Text>
      <Text size={5} weight="medium">size 5 — усиленный body</Text>
      <Text size={6} weight="bold">size 6 — заголовок блока</Text>
      <Text size={7} weight="bold">size 7 — заголовок страницы</Text>
      <Text size={8} weight="bold">size 8 — крупный акцент</Text>
    </Flex>
  );
}
