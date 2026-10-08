"use client";

import { useState } from "react";
import { Flex, Form, PasswordInput } from "altrone-ui";

export default function PasswordInputGuidelineRulesBadDemo() {
  const [value, setValue] = useState("");

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="password" label="Create a password">
          <PasswordInput value={value} onChange={setValue} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
