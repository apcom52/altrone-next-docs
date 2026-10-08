"use client";

import { useState } from "react";
import { Flex, Form, Switch } from "altrone-ui";

export default function SwitchFormDemo() {
  const [email, setEmail] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <Form size="l">
      <Flex orientation="vertical" gap="s">
        <Form.Field name="email">
          <Switch checked={email} onChange={setEmail}>Email notifications</Switch>
        </Form.Field>
        <Form.Field name="sms" disabled>
          <Switch checked={sms} onChange={setSms}>SMS notifications (locked by the field)</Switch>
        </Form.Field>
      </Flex>
    </Form>
  );
}
