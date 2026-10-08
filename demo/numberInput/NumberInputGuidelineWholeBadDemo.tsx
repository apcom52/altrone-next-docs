"use client";

import { useState } from "react";
import { Form, NumberInput } from "altrone-ui";

export default function NumberInputGuidelineWholeBadDemo() {
  const [qty, setQty] = useState<number | undefined>(2.5);

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="qty" label="Number of items">
          <NumberInput value={qty} onChange={setQty} />
        </Form.Field>
      </Form>
    </div>
  );
}
