"use client";

import { useState } from "react";
import { AutocompleteInput } from "altrone-ui";

const COUNTRIES = [
  "Austria", "Belgium", "Czechia", "Denmark", "Finland",
  "France", "Germany", "Greece", "Ireland", "Italy",
  "Netherlands", "Norway", "Poland", "Portugal", "Spain",
  "Sweden", "Switzerland",
];

export default function AutocompleteInputMinCharsDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    COUNTRIES.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase()),
    );

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      minChars={2}
      placeholder="Type at least 2 characters"
      style={{ maxWidth: 360 }}
    />
  );
}
