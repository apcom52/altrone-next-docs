"use client";

import { Button, Message } from "altrone-ui";
import { CircleAlert } from "lucide-react";

export default function MessageGuidelineTitleGoodDemo() {
  return (
    <Message
      icon={<CircleAlert />}
      severity="danger"
      title="Payment failed"
      actions={<Button key="retry" label="Update card" />}
    >
      Your card was declined. Update it to keep your subscription active.
    </Message>
  );
}
