"use client";

import { useState } from "react";
import { Flex, Switch } from "altrone-ui";

export default function SwitchSizesDemo() {
  const [checked, setChecked] = useState(true);

  return (
    <Flex orientation="vertical" gap="s">
      <Switch size="mini" checked={checked} onChange={setChecked}>mini</Switch>
      <Switch size="s" checked={checked} onChange={setChecked}>s</Switch>
      <Switch size="m" checked={checked} onChange={setChecked}>m</Switch>
      <Switch size="l" checked={checked} onChange={setChecked}>l</Switch>
      <Switch size="xl" checked={checked} onChange={setChecked}>xl</Switch>
    </Flex>
  );
}
