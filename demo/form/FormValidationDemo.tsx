"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Button, Flex, showToast } from "altrone-ui";

export default function FormValidationDemo() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!email.trim()) next.email = "Enter your email";
    else if (!email.includes("@")) next.email = "That doesn't look like an email";
    if (!password) next.password = "Enter a password";
    else if (password.length < 8) next.password = "The password is too short";
    return next;
  };

  const handleSubmit = () => {
    const next = validate();
    setErrors(next);
    if (!Object.keys(next).length) showToast("Form submitted");
  };

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form onSubmit={handleSubmit} errorMessages={errors}>
        <Flex orientation="vertical" gap="m">
          <Form.Field name="email" label="Email" required>
            <TextInput
              value={email}
              onChange={(value) => {
                setEmail(value);
                setErrors((current) => ({ ...current, email: "" }));
              }}
              placeholder="you@example.com"
            />
          </Form.Field>
          <Form.Field name="password" label="Password" required>
            <PasswordInput
              value={password}
              onChange={(value) => {
                setPassword(value);
                setErrors((current) => ({ ...current, password: "" }));
              }}
              placeholder="At least 8 characters"
            />
          </Form.Field>
          <Button label="Continue" variant="submit" type="submit" />
        </Flex>
      </Form>
    </div>
  );
}
