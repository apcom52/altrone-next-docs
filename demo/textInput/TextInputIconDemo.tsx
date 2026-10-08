"use client";

import { useState } from "react";
import { Flex, TextInput } from "altrone-ui";
import { Lock, Mail } from "lucide-react";

export default function TextInputIconDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value={email} onChange={setEmail} placeholder="Email">
        <TextInput.IconIsland icon={<Mail />} />
      </TextInput>
      <TextInput value={password} onChange={setPassword} placeholder="Password" type="password">
        <TextInput.IconIsland icon={<Lock />} />
      </TextInput>
    </Flex>
  );
}
