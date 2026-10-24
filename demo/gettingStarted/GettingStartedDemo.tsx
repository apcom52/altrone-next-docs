"use client";

import { useState } from "react";
import { Button, Flex, TextInput, showToast } from "altrone-ui";

export default function GettingStartedDemo() {
  const [name, setName] = useState("");

  return (
    <Flex orientation="horizontal" gap="m" style={{ maxWidth: 420 }}>
      <TextInput value={name} onChange={setName} placeholder="Your name" />
      <Button
        label="Say hello"
        variant="submit"
        disabled={!name.trim()}
        onClick={() => showToast(`Hello, ${name.trim()}!`, { variant: "success" })}
      />
    </Flex>
  );
}
