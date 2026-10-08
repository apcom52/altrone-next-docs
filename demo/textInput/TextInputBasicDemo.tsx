"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";

export default function TextInputBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <TextInput
      value={value}
      onChange={setValue}
      placeholder="Enter your name"
      style={{ maxWidth: 360 }}
    />
  );
}
