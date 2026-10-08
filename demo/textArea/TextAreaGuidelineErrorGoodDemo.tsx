"use client";

import { useState } from "react";
import { Form, TextArea } from "altrone-ui";

export default function TextAreaGuidelineErrorGoodDemo() {
  const [value, setValue] = useState("Too short");

  return (
    <div style={{ width: "100%" }}>
      <Form errorMessages={{ feedback: "Write at least 20 characters so we can act on it" }}>
        <Form.Field name="feedback" label="Feedback">
          <TextArea value={value} onChange={setValue} />
        </Form.Field>
      </Form>
    </div>
  );
}
