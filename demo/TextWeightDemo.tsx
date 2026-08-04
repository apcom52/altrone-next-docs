"use client";

import { Text, Flex } from "altrone-ui";

export default function TextWeightDemo() {
  return (
    <Flex direction="vertical" gap="s">
      <Text size={5} weight="light">Light — тонкий, для крупных размеров</Text>
      <Text size={5} weight="regular">Regular — основной текст</Text>
      <Text size={5} weight="medium">Medium — акценты без лишней тяжести</Text>
      <Text size={5} weight="bold">Bold — заголовки и важные данные</Text>
    </Flex>
  );
}
