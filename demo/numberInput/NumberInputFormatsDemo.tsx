"use client";

import { useState } from "react";
import { Flex, NumberInput, Text } from "altrone-ui";

export default function NumberInputFormatsDemo() {
  const [qty, setQty] = useState<number | undefined>(5);
  const [price, setPrice] = useState<number | undefined>(1299.99);
  const [rate, setRate] = useState<number | undefined>(1234.5);

  return (
    <Flex orientation="vertical" gap="m" style={{ width: "100%", maxWidth: 320 }}>
      <Flex orientation="vertical" gap="xs">
        <Text size={2} weight="medium">Whole numbers</Text>
        <NumberInput value={qty} onChange={setQty} digitsAfterPoint={0} min={0} max={100} />
      </Flex>
      <Flex orientation="vertical" gap="xs">
        <Text size={2} weight="medium">Price with fixed cents</Text>
        <NumberInput
          value={price}
          onChange={setPrice}
          digitsAfterPoint={2}
          fixedDecimalScale
          groupingDelimiter=","
        />
      </Flex>
      <Flex orientation="vertical" gap="xs">
        <Text size={2} weight="medium">European separators</Text>
        <NumberInput
          value={rate}
          onChange={setRate}
          groupingDelimiter="."
          decimalDelimiter=","
        />
      </Flex>
    </Flex>
  );
}
