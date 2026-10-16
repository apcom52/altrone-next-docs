"use client";

import { Button, Result } from "altrone-ui";
import { Plus } from "lucide-react";

export default function ResultGuidelineNextStepGoodDemo() {
  return (
    <Result
      size="s"
      title="No invoices yet"
      actions={<Button label="Create invoice" icon={<Plus />} variant="submit" />}
    >
      Invoices you create will appear here.
    </Result>
  );
}
