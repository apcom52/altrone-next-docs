"use client";

import { useState } from "react";
import { Form, NumberInput } from "altrone-ui";

export default function NumberInputGuidelineWholeGoodDemo() {
  const [qty, setQty] = useState<number | undefined>(3);

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="qty" label="Number of items">
          <NumberInput value={qty} onChange={setQty} digitsAfterPoint={0} min={1} />
        </Form.Field>
      </Form>
    </div>
  );
}
