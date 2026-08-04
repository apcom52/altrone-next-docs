"use client";

import { Tooltip, Button, Flex } from "altrone-ui";
import { Save, Undo, Redo } from "lucide-react";

export default function TooltipTitleKbdDemo() {
  return (
    <Flex gap="m" align="center">
      <Tooltip title="Сохранить документ" content="Сохраняет все несохранённые изменения." kbd="⌘S">
        <Button label="Сохранить" icon={<Save size={16} />} showLabel={false} />
      </Tooltip>
      <Tooltip content="Отменить последнее действие" kbd="⌘Z">
        <Button label="Отменить" icon={<Undo size={16} />} showLabel={false} />
      </Tooltip>
      <Tooltip content="Повторить отменённое действие" kbd="⌘⇧Z">
        <Button label="Повторить" icon={<Redo size={16} />} showLabel={false} />
      </Tooltip>
    </Flex>
  );
}
