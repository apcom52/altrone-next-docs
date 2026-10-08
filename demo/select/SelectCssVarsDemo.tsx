"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Select } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

const OPTIONS = [
  { value: "one", label: "Option one" },
  { value: "two", label: "Option two" },
  { value: "three", label: "Option three" },
];

export default function SelectCssVarsDemo() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <Select
      value={value}
      onChange={(next) => setValue(next as string | undefined)}
      placeholder="Select an option"
      options={OPTIONS}
      style={{
        width: "100%",
        maxWidth: 320,
        ...vars({
          "--text-input-font-size": "18px",
          "--text-input-icon-size": "20px",
          "--text-input-island-outer-inset": "12px",
        }),
      }}
    />
  );
}
