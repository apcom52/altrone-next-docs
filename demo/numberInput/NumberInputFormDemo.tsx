"use client";

import { useState } from "react";
import { Form, NumberInput } from "altrone-ui";

export default function NumberInputFormDemo() {
  const [quantity, setQuantity] = useState<number | undefined>(120);

  return (
    <div style={{ width: "100%", maxWidth: 360 }}>
      <Form errorMessages={{ quantity: "We only have 100 in stock" }}>
        <Form.Field name="quantity" label="Quantity">
          <NumberInput value={quantity} onChange={setQuantity} digitsAfterPoint={0} />
        </Form.Field>
      </Form>
    </div>
  );
}
