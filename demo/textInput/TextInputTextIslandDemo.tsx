"use client";

import { useState } from "react";
import { Flex, TextInput } from "altrone-ui";

export default function TextInputTextIslandDemo() {
  const [amount, setAmount] = useState("");
  const [domain, setDomain] = useState("");

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput value={amount} onChange={setAmount} placeholder="0.00">
        <TextInput.TextIsland label="$" />
      </TextInput>
      <TextInput value={domain} onChange={setDomain} placeholder="mysite">
        <TextInput.TextIsland label="https://" />
        <TextInput.TextIsland label=".com" placement="end" />
      </TextInput>
    </Flex>
  );
}
