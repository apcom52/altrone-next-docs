"use client";

import { useState } from "react";
import { Form, TextInput, PasswordInput, Flex } from "altrone-ui";

export default function FormHintDemo() {
  const [apiKey, setApiKey] = useState("");
  const [webhook, setWebhook] = useState("");

  return (
    <div style={{ width: "100%", maxWidth: 440 }}>
      <Form>
        <Flex orientation="vertical" gap="m">
          <Form.Field
            name="apiKey"
            label="API key"
            required
            hintText="The key is available in the Developer section of your account settings."
            description="Used for every API request made on your behalf."
          >
            <PasswordInput value={apiKey} onChange={setApiKey} placeholder="sk-..." />
          </Form.Field>
          <Form.Field
            name="webhook"
            label="Webhook URL"
            hintText="The server must answer POST requests with a 200 status."
            description="Events are delivered to this address in real time."
          >
            <TextInput value={webhook} onChange={setWebhook} placeholder="https://example.com/webhook" />
          </Form.Field>
        </Flex>
      </Form>
    </div>
  );
}
