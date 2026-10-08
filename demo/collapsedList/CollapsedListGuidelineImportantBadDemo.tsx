"use client";

import { useState } from "react";
import { Checkbox, CollapsedList } from "altrone-ui";

const CONSENTS = [
  "I accept the terms of service",
  "I accept the privacy policy",
  "I confirm I am over 18",
  "I agree to receive the newsletter",
];

function Option({ label }: { label: string }) {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox checked={checked} onChange={setChecked}>
      {label}
    </Checkbox>
  );
}

export default function CollapsedListGuidelineImportantBadDemo() {
  return (
    <CollapsedList limit={2} gap="xs">
      {CONSENTS.map((consent) => (
        <Option key={consent} label={consent} />
      ))}
    </CollapsedList>
  );
}
