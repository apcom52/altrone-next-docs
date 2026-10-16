"use client";

import { Button, Result } from "altrone-ui";
import { RefreshCw } from "lucide-react";

export default function ResultErrorDemo() {
  return (
    <Result
      status="error"
      title="Couldn't load activity"
      actions={<Button label="Retry" icon={<RefreshCw />} />}
    >
      Something went wrong on our side. This usually clears up on its own.
    </Result>
  );
}
