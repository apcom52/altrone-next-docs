"use client";

import { useState } from "react";
import { Button, Flex, Text, showPrompt } from "altrone-ui";

export default function DialogPromptTypesDemo() {
  const [result, setResult] = useState("Pick an input type");

  const ask = async (inputType: "string" | "text" | "number" | "password") => {
    const value = await showPrompt({
      title: `Input type: ${inputType}`,
      message: "Type something and confirm.",
      inputType,
    });
    setResult(value === null ? "Cancelled" : inputType === "password" ? "•".repeat(String(value).length) : String(value));
  };

  return (
    <Flex orientation="vertical" gap="m">
      <Flex gap="s">
        <Button label="string" onClick={() => ask("string")} />
        <Button label="text" onClick={() => ask("text")} />
        <Button label="number" onClick={() => ask("number")} />
        <Button label="password" onClick={() => ask("password")} />
      </Flex>
      <Text color="muted">{result}</Text>
    </Flex>
  );
}
