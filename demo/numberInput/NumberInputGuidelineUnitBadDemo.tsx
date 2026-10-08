"use client";

import { useState } from "react";
import { Form, NumberInput } from "altrone-ui";

export default function NumberInputGuidelineUnitBadDemo() {
  const [weight, setWeight] = useState<number | undefined>(72);

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="weight" label="Weight">
          <NumberInput value={weight} onChange={setWeight} digitsAfterPoint={1} />
        </Form.Field>
      </Form>
    </div>
  );
}
