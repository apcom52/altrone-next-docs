"use client";

import { Flex, Switch, Text } from "altrone-ui";

export default function SwitchGuidelineDisabledGoodDemo() {
  return (
    <Flex orientation="vertical" gap="xs">
      <Switch disabled onChange={() => {}}>Team analytics</Switch>
      <Text size={3} color="muted">Available on the Business plan.</Text>
    </Flex>
  );
}
