"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { NumberInput, TextInput } from "altrone-ui";

const MIN = 1;
const MAX = 20;

export default function NumberInputStepperDemo() {
  const [quantity, setQuantity] = useState<number | undefined>(2);
  const current = quantity ?? MIN;

  return (
    <NumberInput
      value={quantity}
      onChange={setQuantity}
      min={MIN}
      max={MAX}
      style={{ width: 160 }}
    >
      <TextInput.ActionIsland
        label="Decrease"
        icon={<Minus />}
        showLabel={false}
        disabled={current <= MIN}
        onClick={() => setQuantity(Math.max(MIN, current - 1))}
      />
      <TextInput.ActionIsland
        label="Increase"
        icon={<Plus />}
        showLabel={false}
        placement="end"
        disabled={current >= MAX}
        onClick={() => setQuantity(Math.min(MAX, current + 1))}
      />
    </NumberInput>
  );
}
