"use client";

import { useState } from "react";
import { Form, TextInput } from "altrone-ui";

export default function TextInputGuidelineErrorBadDemo() {
  const [value, setValue] = useState("user@example");

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="email" label="Email">
          <TextInput value={value} onChange={setValue} invalid />
        </Form.Field>
      </Form>
    </div>
  );
}
