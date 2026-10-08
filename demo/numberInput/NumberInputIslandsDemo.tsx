"use client";

import { useState } from "react";
import { Flex, NumberInput, TextInput } from "altrone-ui";

export default function NumberInputIslandsDemo() {
  const [budget, setBudget] = useState<number | undefined>(2500);
  const [weight, setWeight] = useState<number | undefined>(72.5);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 320 }}>
      <NumberInput
        value={budget}
        onChange={setBudget}
        digitsAfterPoint={2}
        fixedDecimalScale
        groupingDelimiter=","
      >
        <TextInput.TextIsland label="$" />
      </NumberInput>
      <NumberInput value={weight} onChange={setWeight} digitsAfterPoint={1}>
        <TextInput.TextIsland label="kg" placement="end" />
      </NumberInput>
    </Flex>
  );
}
