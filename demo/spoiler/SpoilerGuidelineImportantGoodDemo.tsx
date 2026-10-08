"use client";

import { Flex, Spoiler, TextInput } from "altrone-ui";
import { useState } from "react";

export default function SpoilerGuidelineImportantGoodDemo() {
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <TextInput placeholder="Email" value={email} onChange={setEmail} />
      <Spoiler title="Have a promo code?">
        <TextInput placeholder="Promo code" value={promo} onChange={setPromo} />
      </Spoiler>
    </Flex>
  );
}
