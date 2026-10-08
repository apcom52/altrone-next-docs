"use client";

import { Form, TextInput } from "altrone-ui";

export default function FormGuidelineErrorGoodDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Form errorMessages={{ email: "That doesn't look like an email" }}>
        <Form.Field name="email" label="Email">
          <TextInput value="alex.morgan" onChange={() => {}} />
        </Form.Field>
      </Form>
    </div>
  );
}
