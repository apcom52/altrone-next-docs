"use client";

import { useState } from "react";
import { PasswordInput } from "altrone-ui";

export default function PasswordInputBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <PasswordInput
      value={value}
      onChange={setValue}
      placeholder="Enter your password"
      style={{ maxWidth: 360 }}
    />
  );
}
