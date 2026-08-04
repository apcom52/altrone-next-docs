"use client";

import { useState } from "react";
import { TextInput, Flex } from "altrone-ui";

export default function TextInputTextIslandDemo() {
  const [amount, setAmount] = useState("");
  const [domain, setDomain] = useState("");

  return (
    <Flex direction="vertical" gap="m" style={{ maxWidth: 360 }}>
      <TextInput value={amount} onChange={setAmount} placeholder="0.00">
        <TextInput.TextIsland label="$" placement="left" />
      </TextInput>
      <TextInput value={domain} onChange={setDomain} placeholder="mysite">
        <TextInput.TextIsland label="https://" placement="left" />
        <TextInput.TextIsland label=".com" placement="right" />
      </TextInput>
    </Flex>
  );
}
