"use client";

import { Text, Flex } from "altrone-ui";

export default function TextOverflowDemo() {
  return (
    <Flex direction="vertical" gap="m" style={{ width: "100%" }}>
      <div style={{ maxWidth: 280 }}>
        <Text size={2} color="muted" block>truncate</Text>
        <Text size={4} truncate>
          Очень длинное название файла, которое не помещается в одну строку
        </Text>
      </div>
      <div>
        <Text size={2} color="muted" block>lineClamp={2}</Text>
        <Text size={4} block lineClamp={2}>
          Длинное описание, которое должно занимать не более двух строк. После
          второй строки текст обрезается многоточием, даже если содержимое
          значительно длиннее этого фрагмента.
        </Text>
      </div>
    </Flex>
  );
}
