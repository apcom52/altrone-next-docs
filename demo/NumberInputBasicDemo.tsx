"use client";

import { useState } from "react";
import { NumberInput } from "altrone-ui";

export default function NumberInputBasicDemo() {
  const [qty, setQty] = useState<number | null>(1);

  return (
    <NumberInput
      value={qty}
      onChange={(v) => setQty(v)}
      min={1}
      max={99}
      digitsAfterPoint={0}
      style={{ maxWidth: 200 }}
    />
  );
}
