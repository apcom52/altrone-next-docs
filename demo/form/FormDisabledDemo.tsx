"use client";

import { useState } from "react";
import { Form, TextInput, Switch, Flex } from "altrone-ui";

export default function FormDisabledDemo() {
  const [locked, setLocked] = useState(true);

  return (
    <div style={{ width: "100%", maxWidth: 400 }}>
      <Flex orientation="vertical" gap="m">
        <Switch checked={locked} onChange={setLocked}>
          Lock the form
        </Switch>
        <Form disabled={locked}>
          <Flex orientation="vertical" gap="m">
            <Form.Field name="name" label="Full name">
              <TextInput value="Alex Morgan" onChange={() => {}} />
            </Form.Field>
            <Form.Field name="role" label="Role (always editable)" disabled={false}>
              <TextInput value="Designer" onChange={() => {}} />
            </Form.Field>
          </Flex>
        </Form>
      </Flex>
    </div>
  );
}
