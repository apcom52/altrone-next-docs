"use client";

import { useState } from "react";
import { Flex, Switch } from "altrone-ui";

export default function SwitchGuidelineInstantGoodDemo() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);

  return (
    <Flex orientation="vertical" gap="s">
      <Switch checked={wifi} onChange={setWifi}>Wi-Fi</Switch>
      <Switch checked={bluetooth} onChange={setBluetooth}>Bluetooth</Switch>
    </Flex>
  );
}
