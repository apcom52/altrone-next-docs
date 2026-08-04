"use client";

import { useState } from "react";
import { NumberInput, Flex, Text } from "altrone-ui";

export default function NumberInputFormatsDemo() {
  const [qty, setQty] = useState<number | null>(5);
  const [price, setPrice] = useState<number | null>(1299.99);
  const [temp, setTemp] = useState<number | null>(-15);

  return (
    <Flex direction="vertical" gap="m" style={{ maxWidth: 320 }}>
      <div>
        <Text block size={2} color="muted" style={{ marginBottom: 4 }}>Целые числа</Text>
        <NumberInput value={qty} onChange={setQty} digitsAfterPoint={0} min={0} max={100} />
      </div>
      <div>
        <Text block size={2} color="muted" style={{ marginBottom: 4 }}>Цена с разделителем</Text>
        <NumberInput value={price} onChange={setPrice} digitsAfterPoint={2} groupingDelimiter="," min={0} />
      </div>
      <div>
        <Text block size={2} color="muted" style={{ marginBottom: 4 }}>Отрицательные значения</Text>
        <NumberInput value={temp} onChange={setTemp} digitsAfterPoint={1} min={-273} max={1000} />
      </div>
    </Flex>
  );
}
