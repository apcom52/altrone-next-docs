"use client";

import { Button, Flex } from "altrone-ui";
import { Send, ChevronDown, Download } from "lucide-react";

export default function ButtonIconsDemo() {
  return (
    <Flex align="center" gap="m" wrap="wrap">
      <Button label="Отправить" icon={<Send size={16} />} />
      <Button label="Ещё варианты" additionalIcon={<ChevronDown size={16} />} />
      <Button
        label="Экспорт"
        icon={<Download size={16} />}
        additionalIcon={<ChevronDown size={16} />}
      />
    </Flex>
  );
}
