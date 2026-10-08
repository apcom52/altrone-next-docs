"use client";

import { useState } from "react";
import { AutocompleteInput } from "altrone-ui";

const CITIES = [
  "Amsterdam", "Barcelona", "Berlin", "Brussels", "Budapest",
  "Copenhagen", "Dublin", "Edinburgh", "Helsinki", "Lisbon",
  "London", "Madrid", "Oslo", "Paris", "Prague",
  "Rome", "Stockholm", "Vienna", "Warsaw", "Zurich",
];

export default function AutocompleteInputBasicDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    CITIES.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

  return (
    <AutocompleteInput
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      placeholder="Type a city"
      style={{ maxWidth: 360 }}
    />
  );
}
