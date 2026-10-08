"use client";

import { useState } from "react";
import { Form, TextInput } from "altrone-ui";

export default function TextInputGuidelineLabelGoodDemo() {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="email" label="Email">
          <TextInput value={value} onChange={setValue} placeholder="user@example.com" />
        </Form.Field>
      </Form>
    </div>
  );
}
