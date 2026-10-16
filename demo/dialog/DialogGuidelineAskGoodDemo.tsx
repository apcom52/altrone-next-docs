"use client";

import { Button, showToast } from "altrone-ui";
import { Save } from "lucide-react";

export default function DialogGuidelineAskGoodDemo() {
  return (
    <Button
      label="Save draft"
      icon={<Save size={16} />}
      onClick={() => showToast("Draft saved")}
    />
  );
}
