"use client";

import { useState } from "react";
import { Button, Flex, Text, showConfirm } from "altrone-ui";
import { Trash } from "lucide-react";

export default function DialogConfirmDemo() {
  const [log, setLog] = useState("Nothing deleted");

  const handleDelete = async () => {
    const confirmed = await showConfirm({
      title: "Delete project?",
      message: "“Design system” and all its data will be deleted permanently.",
      confirmText: "Delete project",
      cancelText: "Keep it",
      danger: true,
    });
    setLog(confirmed ? "Project deleted" : "Deletion cancelled");
  };

  return (
    <Flex gap="m" align="center">
      <Button label="Delete project" icon={<Trash size={16} />} danger onClick={handleDelete} />
      <Text color="muted">{log}</Text>
    </Flex>
  );
}
