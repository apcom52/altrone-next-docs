"use client";

import { useState } from "react";
import { Checkbox, Flex, Form } from "altrone-ui";

export default function CheckboxFormDemo() {
  const [newsletter, setNewsletter] = useState(true);
  const [terms, setTerms] = useState(false);

  return (
    <Form size="l">
      <Flex orientation="vertical" gap="s">
        <Form.Field name="newsletter">
          <Checkbox checked={newsletter} onChange={setNewsletter}>
            Subscribe to the newsletter
          </Checkbox>
        </Form.Field>
        <Form.Field name="terms" disabled>
          <Checkbox checked={terms} onChange={setTerms}>
            Accept the terms (locked by the field)
          </Checkbox>
        </Form.Field>
      </Flex>
    </Form>
  );
}
