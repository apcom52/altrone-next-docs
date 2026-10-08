"use client";

import { Form, TextInput, Message, Flex } from "altrone-ui";

export default function FormGuidelineErrorBadDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 320 }}>
      <Flex orientation="vertical" gap="m">
        <Message severity="danger">Something is wrong with the form.</Message>
        <Form>
          <Form.Field name="email" label="Email">
            <TextInput value="alex.morgan" onChange={() => {}} />
          </Form.Field>
        </Form>
      </Flex>
    </div>
  );
}
