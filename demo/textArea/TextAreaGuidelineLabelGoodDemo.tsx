"use client";

import { useState } from "react";
import { Form, TextArea } from "altrone-ui";

export default function TextAreaGuidelineLabelGoodDemo() {
  const [value, setValue] = useState("");

  return (
    <div style={{ width: "100%" }}>
      <Form>
        <Form.Field name="feedback" label="Feedback">
          <TextArea value={value} onChange={setValue} placeholder="What worked and what didn't?" />
        </Form.Field>
      </Form>
    </div>
  );
}
