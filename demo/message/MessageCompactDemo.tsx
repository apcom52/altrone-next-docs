"use client";

import { Message } from "altrone-ui";
import { Check } from "lucide-react";

export default function MessageCompactDemo() {
  return (
    <Message icon={<Check />} severity="success" title="Successfully uploaded" compact onClose={() => undefined}>
      3 files were added to the project.
    </Message>
  );
}
