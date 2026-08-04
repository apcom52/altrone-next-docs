"use client";

import { useState } from "react";
import { NumberInput, Flex, Text } from "altrone-ui";

export default function NumberInputNoControlsDemo() {
  const [with_, setWith] = useState<number | null>(42);
  const [without_, setWithout] = useState<number | null>(42);

  return (
    <Flex gap="xl" align="start">
      <div>
        <Text block size={2} color="muted" style={{ marginBottom: 4 }}>showControls (по умолчанию)</Text>
        <NumberInput value={with_} onChange={setWith} digitsAfterPoint={0} style={{ maxWidth: 180 }} />
      </div>
      <div>
        <Text block size={2} color="muted" style={{ marginBottom: 4 }}>showControls={"{false}"}</Text>
        <NumberInput value={without_} onChange={setWithout} digitsAfterPoint={0} showControls={false} style={{ maxWidth: 180 }} />
      </div>
    </Flex>
  );
}
