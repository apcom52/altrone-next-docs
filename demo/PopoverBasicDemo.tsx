"use client";

import { Popover, Button, Text, Flex } from "altrone-ui";

export default function PopoverBasicDemo() {
  return (
    <Popover
      content={
        <div style={{ padding: 16, maxWidth: 260 }}>
          <Text block size={4} weight="bold" style={{ marginBottom: 6 }}>Подсказка</Text>
          <Text block size={3} color="muted">
            Это произвольный контент внутри поповера. Сюда можно поместить форму,
            список или любой другой React-компонент.
          </Text>
        </div>
      }
    >
      <Button label="Открыть поповер" />
    </Popover>
  );
}
