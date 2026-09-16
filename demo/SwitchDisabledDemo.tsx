"use client";

import { Switch, Flex } from "altrone-ui";

export default function SwitchDisabledDemo() {
  return (
    <Flex direction="column" gap="s">
      <Switch disabled>Уведомления (недоступно)</Switch>
      <Switch checked disabled>
        Автосохранение (недоступно, включено)
      </Switch>
    </Flex>
  );
}
