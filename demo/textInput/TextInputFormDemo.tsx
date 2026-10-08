"use client";

import { useState } from "react";
import { Form, TextInput } from "altrone-ui";
import { Mail } from "lucide-react";

export default function TextInputFormDemo() {
  const [email, setEmail] = useState("taken@example.com");

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Form errorMessages={{ email: "This email is already registered" }}>
        <Form.Field name="email" label="Email">
          <TextInput value={email} onChange={setEmail} placeholder="user@example.com">
            <TextInput.IconIsland icon={<Mail />} />
          </TextInput>
        </Form.Field>
      </Form>
    </div>
  );
}
