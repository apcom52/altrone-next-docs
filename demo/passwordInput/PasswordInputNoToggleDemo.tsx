"use client";

import { useState } from "react";
import { PasswordInput } from "altrone-ui";

export default function PasswordInputNoToggleDemo() {
  const [value, setValue] = useState("secret-passphrase");

  return (
    <PasswordInput
      value={value}
      onChange={setValue}
      showControls={false}
      style={{ maxWidth: 360 }}
    />
  );
}
