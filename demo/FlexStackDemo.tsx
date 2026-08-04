"use client";

import { useState } from "react";
import { Flex, TextInput, PasswordInput, Button } from "altrone-ui";
import { Mail } from "lucide-react";

export default function FlexStackDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Flex direction="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value={email} onChange={setEmail} placeholder="Электронная почта">
        <TextInput.IconIsland icon={<Mail size={16} />} placement="left" />
      </TextInput>
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <Button label="Войти" variant="submit" />
    </Flex>
  );
}
