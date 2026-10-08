"use client";

import { useState } from "react";
import { AutocompleteInput, TextInput } from "altrone-ui";
import { Globe } from "lucide-react";

const DOMAINS = [
  "altrone.dev", "altrone.io", "example.com", "example.org", "exemplar.net",
];

export default function AutocompleteInputIslandsDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    DOMAINS.filter((domain) => domain.includes(value.toLowerCase()));

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      placeholder="Domain"
      style={{ maxWidth: 360 }}
    >
      <TextInput.IconIsland icon={<Globe />} placement="start" />
    </AutocompleteInput>
  );
}
