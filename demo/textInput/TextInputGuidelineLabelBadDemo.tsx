"use client";

import { useState } from "react";
import { TextInput } from "altrone-ui";

export default function TextInputGuidelineLabelBadDemo() {
  const [value, setValue] = useState("");

  return <TextInput value={value} onChange={setValue} placeholder="Email" style={{ width: "100%" }} />;
}
