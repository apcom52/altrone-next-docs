"use client";

import { Form, TextInput, Flex } from "altrone-ui";

export default function FormGuidelineRequiredGoodDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Form>
        <Flex orientation="vertical" gap="m">
          <Form.Field name="email" label="Email" required>
            <TextInput value="" onChange={() => {}} />
          </Form.Field>
          <Form.Field name="phone" label="Phone" description="Optional">
            <TextInput value="" onChange={() => {}} />
          </Form.Field>
        </Flex>
      </Form>
    </div>
  );
}
