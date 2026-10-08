"use client";

import { Form, TextInput } from "altrone-ui";

export default function FormGuidelineHintBadDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Form>
        <Form.Field name="name" label="Name" hintText="Enter your name.">
          <TextInput value="" onChange={() => {}} placeholder="Alex Morgan" />
        </Form.Field>
      </Form>
    </div>
  );
}
