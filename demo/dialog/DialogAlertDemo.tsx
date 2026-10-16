"use client";

import { useState } from "react";
import { Button, Flex, Text, showAlert } from "altrone-ui";
import { Save } from "lucide-react";

export default function DialogAlertDemo() {
  const [log, setLog] = useState("Waiting");

  const handleClick = async () => {
    await showAlert({
      title: "Connection restored",
      message: "You are back online. Pending changes will sync now.",
      okText: "Got it",
    });
    setLog("Alert closed");
  };

  return (
    <Flex gap="m" align="center">
      <Button label="Show alert" icon={<Save size={16} />} onClick={handleClick} />
      <Text color="muted">{log}</Text>
    </Flex>
  );
}
