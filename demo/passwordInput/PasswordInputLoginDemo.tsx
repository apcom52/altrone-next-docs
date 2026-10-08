"use client";

import { useState } from "react";
import { Button, Flex, PasswordInput, TextInput, showToast } from "altrone-ui";
import { Mail } from "lucide-react";

export default function PasswordInputLoginDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value={email} onChange={setEmail} placeholder="Email">
        <TextInput.IconIsland icon={<Mail />} />
      </TextInput>
      <PasswordInput value={password} onChange={setPassword} placeholder="Password" />
      <Button
        label="Sign in"
        variant="submit"
        onClick={() => showToast(`Signed in as ${email || "nobody"}`)}
      />
    </Flex>
  );
}
