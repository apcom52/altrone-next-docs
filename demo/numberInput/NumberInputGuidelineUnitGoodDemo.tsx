"use client";

import { useState } from "react";
import { Form, NumberInput, TextInput } from "altrone-ui";

export default function NumberInputGuidelineUnitGoodDemo() {
  const [weight, setWeight] = useState<number | undefined>(72);

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="weight" label="Weight">
          <NumberInput value={weight} onChange={setWeight} digitsAfterPoint={1}>
            <TextInput.TextIsland label="kg" placement="end" />
          </NumberInput>
        </Form.Field>
      </Form>
    </div>
  );
}
