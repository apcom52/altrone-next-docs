"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";

export default function TextInputBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      onChange={(v) => setValue(v)}
      placeholder="Введите имя"
    />
  );
}
