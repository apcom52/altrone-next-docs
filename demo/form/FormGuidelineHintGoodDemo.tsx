"use client";

import { Form, TextInput } from "altrone-ui";

export default function FormGuidelineHintGoodDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Form>
        <Form.Field
          name="webhook"
          label="Webhook URL"
          hintText="The server must answer POST requests with a 200 status."
        >
          <TextInput value="" onChange={() => {}} placeholder="https://example.com/webhook" />
        </Form.Field>
      </Form>
    </div>
  );
}
