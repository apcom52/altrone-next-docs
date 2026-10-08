"use client";

import { Flex, Spoiler, TextInput } from "altrone-ui";
import { useState } from "react";

export default function SpoilerGuidelineImportantBadDemo() {
  const [email, setEmail] = useState("");

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Spoiler title="More details">
        <TextInput placeholder="Email (required)" value={email} onChange={setEmail} />
      </Spoiler>
    </Flex>
  );
}
