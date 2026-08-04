"use client";

import { Text } from "altrone-ui";

export default function TextInlineCompositionDemo() {
  return (
    <Text block size={4}>
      Нажмите <Text kbd>Ctrl + S</Text>, чтобы сохранить, или выполните{" "}
      <Text code>git commit</Text> в терминале. Изменения{" "}
      <Text deleted>не будут</Text> применены немедленно — сначала пройдёт{" "}
      <Text highlighted>проверка</Text>.{" "}
      <Text href="/docs" color="muted">Подробнее →</Text>
    </Text>
  );
}
