"use client";

import { useState } from "react";
import { Form, TextArea } from "altrone-ui";

export default function TextAreaGuidelineErrorBadDemo() {
  const [value, setValue] = useState("Too short");

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="feedback" label="Feedback">
          <TextArea value={value} onChange={setValue} invalid />
        </Form.Field>
      </Form>
    </div>
  );
}
