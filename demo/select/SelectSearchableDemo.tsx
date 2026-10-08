"use client";

import { useState } from "react";
import { Select } from "altrone-ui";

const OPTIONS = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "Denmark",
  "Finland",
  "France",
  "Germany",
  "Ireland",
  "Japan",
  "Norway",
  "Spain",
  "Sweden",
].map((country) => ({ value: country.toLowerCase(), label: country }));

export default function SelectSearchableDemo() {
  const [country, setCountry] = useState<string | undefined>();

  return (
    <Select
      searchable
      value={country}
      onChange={(value) => setCountry(value as string | undefined)}
      placeholder="Search countries"
      options={OPTIONS}
      style={{ width: "100%", maxWidth: 320 }}
    />
  );
}
