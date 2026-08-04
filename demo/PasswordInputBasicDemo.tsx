"use client";

import { useState } from "react";
import { PasswordInput } from "altrone-ui";

export default function PasswordInputBasicDemo() {
  const [value, setValue] = useState("");

  return (
    <PasswordInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Введите пароль"
      style={{ maxWidth: 360 }}
    />
  );
}
