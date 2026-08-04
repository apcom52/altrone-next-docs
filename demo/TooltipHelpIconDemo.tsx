"use client";

import { Tooltip, Text, Flex } from "altrone-ui";

export default function TooltipHelpIconDemo() {
  return (
    <Flex direction="vertical" gap="m">
      <Flex gap="xs" align="center">
        <Text size={4}>API-ключ</Text>
        <Tooltip content="Секретный ключ для доступа к API. Никогда не публикуйте его." />
      </Flex>
      <Flex gap="xs" align="center">
        <Text size={4}>Токен обновления</Text>
        <Tooltip
          title="Refresh Token"
          content="Используется для получения нового токена доступа без повторной авторизации."
        />
      </Flex>
    </Flex>
  );
}
