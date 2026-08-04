"use client";

import { Tooltip, Button, Flex } from "altrone-ui";

export default function TooltipPlacementsDemo() {
  return (
    <Flex direction="vertical" gap="m" align="center">
      <Tooltip content="Сверху" placement="top">
        <Button label="top" size="s" />
      </Tooltip>
      <Flex gap="m">
        <Tooltip content="Слева" placement="left">
          <Button label="left" size="s" />
        </Tooltip>
        <Tooltip content="Справа" placement="right">
          <Button label="right" size="s" />
        </Tooltip>
      </Flex>
      <Tooltip content="Снизу" placement="bottom">
        <Button label="bottom" size="s" />
      </Tooltip>
    </Flex>
  );
}
