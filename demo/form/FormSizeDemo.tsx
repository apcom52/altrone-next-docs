"use client";

import { Form, TextInput, Flex } from "altrone-ui";

export default function FormSizeDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form size="s">
        <Flex orientation="vertical" gap="m">
          <Form.Field name="first" label="First name">
            <TextInput value="Alex" onChange={() => {}} />
          </Form.Field>
          <Form.Field name="last" label="Last name">
            <TextInput value="Morgan" onChange={() => {}} />
          </Form.Field>
        </Flex>
      </Form>
    </div>
  );
}
