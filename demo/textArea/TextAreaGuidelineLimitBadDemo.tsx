"use client";

import { useState } from "react";
import { TextArea } from "altrone-ui";

export default function TextAreaGuidelineLimitBadDemo() {
  const [value, setValue] = useState("Release notes for the new version");

  return (
    <div style={{ width: "100%" }}>
      <TextArea value={value} onChange={setValue} maxLength={140} />
    </div>
  );
}
