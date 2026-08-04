"use client";

import { Switcher, Flex } from "altrone-ui";

export default function SwitcherDisabledDemo() {
  return (
    <Flex direction="column" gap="s">
      <Switcher disabled>Уведомления (недоступно)</Switcher>
      <Switcher checked disabled>
        Автосохранение (недоступно, включено)
      </Switcher>
    </Flex>
  );
}
