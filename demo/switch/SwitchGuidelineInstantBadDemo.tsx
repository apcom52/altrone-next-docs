"use client";

import { useState } from "react";
import { Button, Flex, Switch } from "altrone-ui";

export default function SwitchGuidelineInstantBadDemo() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);

  return (
    <Flex orientation="vertical" gap="s" align="start">
      <Switch checked={wifi} onChange={setWifi}>Wi-Fi</Switch>
      <Switch checked={bluetooth} onChange={setBluetooth}>Bluetooth</Switch>
      <Button label="Save" variant="submit" />
    </Flex>
  );
}
