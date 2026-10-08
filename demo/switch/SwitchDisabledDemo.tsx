"use client";

import { Flex, Switch } from "altrone-ui";

export default function SwitchDisabledDemo() {
  return (
    <Flex orientation="vertical" gap="s">
      <Switch disabled onChange={() => {}}>Notifications (unavailable)</Switch>
      <Switch checked disabled onChange={() => {}}>Autosave (unavailable, on)</Switch>
    </Flex>
  );
}
