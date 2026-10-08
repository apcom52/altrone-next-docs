"use client";

import type { CSSProperties } from "react";
import { Form, TextInput, Flex } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function FormCssVarsDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form style={vars({ "--form-field-gap": "28px" })}>
        <Flex orientation="vertical" gap="m">
          <Form.Field
            name="email"
            label="Email"
            required
            description="Wider spacing between the fields."
            style={vars({ "--form-field-required-mark-color": "var(--accent-9)" })}
          >
            <TextInput value="" onChange={() => {}} placeholder="you@example.com" />
          </Form.Field>
          <Form.Field name="name" label="Name">
            <TextInput value="" onChange={() => {}} placeholder="Alex Morgan" />
          </Form.Field>
        </Flex>
      </Form>
    </div>
  );
}
