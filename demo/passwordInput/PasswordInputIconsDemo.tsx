"use client";

import { useState } from "react";
import { PasswordInput } from "altrone-ui";
import { Lock, LockOpen } from "lucide-react";

export default function PasswordInputIconsDemo() {
  const [value, setValue] = useState("secret-passphrase");

  return (
    <PasswordInput
      value={value}
      onChange={setValue}
      showIcon={<LockOpen />}
      hideIcon={<Lock />}
      style={{ maxWidth: 360 }}
    />
  );
}
