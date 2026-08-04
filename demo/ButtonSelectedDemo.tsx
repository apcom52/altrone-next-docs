"use client";

import { useState } from "react";
import { Button, Flex } from "altrone-ui";
import { Wifi, Bluetooth, Moon } from "lucide-react";

export default function ButtonSelectedDemo() {
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <Flex align="center" gap="m">
      <Button
        label="Wi-Fi"
        icon={<Wifi size={16} />}
        selected={wifi}
        onClick={() => setWifi((v) => !v)}
      />
      <Button
        label="Bluetooth"
        icon={<Bluetooth size={16} />}
        selected={bluetooth}
        onClick={() => setBluetooth((v) => !v)}
      />
      <Button
        label="Тёмная тема"
        icon={<Moon size={16} />}
        showLabel={false}
        selected={dark}
        onClick={() => setDark((v) => !v)}
      />
    </Flex>
  );
}
