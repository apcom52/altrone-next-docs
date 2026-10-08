"use client";

import { useState } from "react";
import { NumberInput } from "altrone-ui";

export default function NumberInputNegativeDemo() {
  const [temperature, setTemperature] = useState<number | undefined>(-15);

  return (
    <NumberInput
      value={temperature}
      onChange={setTemperature}
      allowNegative
      min={-273}
      max={1000}
      digitsAfterPoint={1}
      style={{ maxWidth: 200 }}
    />
  );
}
