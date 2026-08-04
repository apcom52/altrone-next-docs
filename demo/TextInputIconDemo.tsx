"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";
import { Mail, Lock } from "lucide-react";

export default function TextInputIconDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", maxWidth: 360 }}>
      <TextInput value={email} onChange={setEmail} placeholder="Электронная почта">
        <TextInput.IconIsland icon={<Mail size={16} />} placement="left" />
      </TextInput>
      <TextInput value={password} onChange={setPassword} placeholder="Пароль" type="password">
        <TextInput.IconIsland icon={<Lock size={16} />} placement="left" />
      </TextInput>
    </div>
  );
}
