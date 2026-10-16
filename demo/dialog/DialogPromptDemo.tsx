"use client";

import { useState } from "react";
import { Button, Flex, Text, showPrompt } from "altrone-ui";
import { Pencil } from "lucide-react";

export default function DialogPromptDemo() {
  const [name, setName] = useState("Untitled");

  const handleRename = async () => {
    const value = await showPrompt({
      title: "Rename file",
      message: "Enter a new name for this file.",
      placeholder: "File name",
      confirmText: "Rename",
    });
    if (value !== null) setName(String(value));
  };

  return (
    <Flex gap="m" align="center">
      <Button label="Rename" icon={<Pencil size={16} />} onClick={handleRename} />
      <Text color="muted">Current name: {name}</Text>
    </Flex>
  );
}
