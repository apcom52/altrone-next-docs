"use client";

import { useState } from "react";
import { Flex, Form, PasswordInput } from "altrone-ui";

export default function PasswordInputGuidelineRulesGoodDemo() {
  const [value, setValue] = useState("");

  return (
    <Flex style={{ width: "100%" }}>
      <Form>
        <Form.Field name="password" label="Create a password" hintText="At least 8 characters, with a number.">
          <PasswordInput value={value} onChange={setValue} />
        </Form.Field>
      </Form>
    </Flex>
  );
}
