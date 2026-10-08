"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { TextInput } from "altrone-ui";
import { Search } from "lucide-react";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function TextInputCssVarsDemo() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      onChange={setValue}
      placeholder="Search"
      style={{
        width: "100%",
        maxWidth: 360,
        ...vars({
          "--text-input-font-size": "18px",
          "--text-input-icon-size": "20px",
          "--text-input-island-outer-inset": "12px",
        }),
      }}
    >
      <TextInput.IconIsland icon={<Search />} />
    </TextInput>
  );
}
