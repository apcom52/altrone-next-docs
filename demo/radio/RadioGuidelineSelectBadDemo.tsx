"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function RadioGuidelineSelectBadDemo() {
  const [theme, setTheme] = useState<string | undefined>("system");

  return (
    <Select
      value={theme}
      onChange={(value) => setTheme(value as string | undefined)}
      options={[
        { value: "light", label: "Light" },
        { value: "dark", label: "Dark" },
        { value: "system", label: "Follow system" },
      ]}
    />
  );
}
