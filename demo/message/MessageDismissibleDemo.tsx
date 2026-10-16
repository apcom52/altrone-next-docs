"use client";

import { useState } from "react";
import { Button, Message } from "altrone-ui";
import { Sparkles } from "lucide-react";

export default function MessageDismissibleDemo() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return <Button label="Show message again" variant="text" onClick={() => setVisible(true)} />;
  }

  return (
    <Message
      icon={<Sparkles />}
      severity="primary"
      title="New features are available."
      onClose={() => setVisible(false)}
    >
      Dark theme and keyboard shortcuts are now on by default.
    </Message>
  );
}
