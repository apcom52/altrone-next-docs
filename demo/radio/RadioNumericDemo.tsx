"use client";

import { useState } from "react";
import { Radio } from "altrone-ui";

export default function RadioNumericDemo() {
  const [quantity, setQuantity] = useState(5);

  return (
    <Radio value={quantity} onChange={(next) => setQuantity(Number(next))}>
      <Radio.Item value={1}>1</Radio.Item>
      <Radio.Item value={5}>5</Radio.Item>
      <Radio.Item value={10}>10</Radio.Item>
    </Radio>
  );
}
