"use client";

import { Button, Message } from "altrone-ui";
import { Download } from "lucide-react";

export default function MessageActionsDemo() {
  return (
    <Message
      icon={<Download />}
      severity="success"
      title="The data export you requested is ready"
      actions={[
        <Button key="download" label="Download" variant="submit" />,
        <Button key="later" label="Maybe later" />,
      ]}
    >
      The file is available for 7 days.
    </Message>
  );
}
