"use client";

import { useState } from "react";
import { Form, Select } from "altrone-ui";

export default function SelectGuidelineLabelGoodDemo() {
  const [value, setValue] = useState<string | undefined>();

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="plan" label="Plan">
          <Select
            value={value}
            onChange={(next) => setValue(next as string | undefined)}
            placeholder="Select a plan"
            options={[
              { value: "free", label: "Free" },
              { value: "team", label: "Team" },
              { value: "business", label: "Business" },
            ]}
          />
        </Form.Field>
      </Form>
    </div>
  );
}
