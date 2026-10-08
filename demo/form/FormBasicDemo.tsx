"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Button, Flex, showToast } from "altrone-ui";

export default function FormBasicDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form onSubmit={() => showToast(`Signed in as ${email || "nobody"}`)}>
        <Flex orientation="vertical" gap="m">
          <Form.Field name="email" label="Email" required>
            <TextInput value={email} onChange={setEmail} placeholder="you@example.com" />
          </Form.Field>
          <Form.Field name="password" label="Password" required>
            <PasswordInput value={password} onChange={setPassword} placeholder="At least 8 characters" />
          </Form.Field>
          <Button label="Sign in" variant="submit" type="submit" />
        </Flex>
      </Form>
    </div>
  );
}
