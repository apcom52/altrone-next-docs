"use client";

import { useState } from "react";
import { Form, TextInput } from "altrone-ui";

export default function TextInputGuidelineErrorGoodDemo() {
  const [value, setValue] = useState("user@example");

  return (
    <div style={{ width: "100%" }}>
      <Form errorMessages={{ email: "Add a domain after the dot, like user@example.com" }}>
        <Form.Field name="email" label="Email">
          <TextInput value={value} onChange={setValue} />
        </Form.Field>
      </Form>
    </div>
  );
}
