"use client";

import { Tooltip, Button, Flex } from "altrone-ui";
import { Trash, Copy, Share } from "lucide-react";

export default function TooltipBasicDemo() {
  return (
    <Flex gap="m" align="center">
      <Tooltip content="Скопировать в буфер обмена">
        <Button label="Копировать" icon={<Copy size={16} />} showLabel={false} />
      </Tooltip>
      <Tooltip content="Поделиться ссылкой">
        <Button label="Поделиться" icon={<Share size={16} />} showLabel={false} />
      </Tooltip>
      <Tooltip content="Удалить навсегда. Это действие нельзя отменить.">
        <Button label="Удалить" icon={<Trash size={16} />} showLabel={false} danger />
      </Tooltip>
    </Flex>
  );
}
