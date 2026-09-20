"use client";

import { Popover, Button, Text, Flex } from "altrone-ui";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PopoverOpenStateDemo() {
  return (
    <Flex gap="m">
      <Popover
        placement="bottom-start"
        content={({ hide }) => (
          <div style={{ padding: 16, maxWidth: 240 }}>
            <Text block size={3} style={{ marginBottom: 12 }}>
              Поповер открыт. Кнопка триггера отреагировала на состояние.
            </Text>
            <Button label="Закрыть" size="s" onClick={hide} />
          </div>
        )}
      >
        {({ opened }) => (
          <Button
            label="Фильтры"
            additionalIcon={opened ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          />
        )}
      </Popover>
    </Flex>
  );
}
