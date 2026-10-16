"use client";

import { Button, showConfirm } from "altrone-ui";
import { Trash } from "lucide-react";

export default function DialogGuidelineButtonsBadDemo() {
  return (
    <Button
      label="Delete project"
      icon={<Trash size={16} />}
      danger
      onClick={() =>
        showConfirm({
          title: "Are you sure?",
          message: "Delete project?",
          confirmText: "Yes",
          cancelText: "No",
        })
      }
    />
  );
}
