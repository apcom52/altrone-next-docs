"use client";

import { Button, showConfirm } from "altrone-ui";
import { Save } from "lucide-react";

export default function DialogGuidelineAskBadDemo() {
  return (
    <Button
      label="Save draft"
      icon={<Save size={16} />}
      onClick={() =>
        showConfirm({
          title: "Save draft?",
          message: "Do you want to save the draft?",
          confirmText: "Save",
        })
      }
    />
  );
}
