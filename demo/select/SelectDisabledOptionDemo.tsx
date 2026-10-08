"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectDisabledOptionDemo() {
  const [severity, setSeverity] = useState<string | undefined>("sev2");

  return (
    <Select
      value={severity}
      onChange={(value) => setSeverity(value as string | undefined)}
      options={[
        { value: "sev3", label: "SEV-3 · Minor" },
        { value: "sev2", label: "SEV-2 · Major" },
        { value: "sev1", label: "SEV-1 · Critical" },
        { value: "sev0", label: "SEV-0 · Page everyone", disabled: true },
      ]}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
