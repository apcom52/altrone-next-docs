"use client";

import { Button, showConfirm } from "altrone-ui";
import { Trash } from "lucide-react";

export default function DialogGuidelineButtonsGoodDemo() {
  return (
    <Button
      label="Delete project"
      icon={<Trash size={16} />}
      danger
      onClick={() =>
        showConfirm({
          title: "Delete project?",
          message: "All files and members will be removed permanently.",
          confirmText: "Delete project",
          cancelText: "Keep it",
          danger: true,
        })
      }
    />
  );
}
