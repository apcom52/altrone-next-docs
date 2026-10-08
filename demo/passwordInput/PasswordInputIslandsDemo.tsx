"use client";

import { useState } from "react";
import { PasswordInput, TextInput, showToast } from "altrone-ui";
import { KeyRound, RefreshCw } from "lucide-react";

const generate = () => Math.random().toString(36).slice(2, 12) + "A7!";

export default function PasswordInputIslandsDemo() {
  const [value, setValue] = useState("");

  return (
    <PasswordInput
      value={value}
      onChange={setValue}
      placeholder="Enter or generate a password"
      style={{ maxWidth: 400 }}
    >
      <TextInput.IconIsland icon={<KeyRound />} />
      <TextInput.ActionIsland
        placement="end"
        label="Generate a password"
        icon={<RefreshCw />}
        showLabel={false}
        onClick={() => {
          setValue(generate());
          showToast("A new password was generated");
        }}
      />
    </PasswordInput>
  );
}
