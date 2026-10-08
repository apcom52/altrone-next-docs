"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

export default function SelectBasicDemo() {
  const [country, setCountry] = useState<string | undefined>();

  return (
    <Select
      value={country}
      onChange={(value) => setCountry(value as string | undefined)}
      placeholder="Select a country"
      options={[
        { value: "us", label: "United States" },
        { value: "gb", label: "United Kingdom" },
        { value: "de", label: "Germany" },
      ]}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
