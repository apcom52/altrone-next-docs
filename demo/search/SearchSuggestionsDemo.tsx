"use client";

import { useState } from "react";
import { Search } from "altrone-ui";

const CITIES = [
  "Amsterdam",
  "Athens",
  "Barcelona",
  "Berlin",
  "Brussels",
  "Budapest",
  "Copenhagen",
  "Dublin",
  "Lisbon",
  "Madrid",
  "Oslo",
  "Prague",
  "Rome",
  "Vienna",
  "Warsaw",
];

export default function SearchSuggestionsDemo() {
  const [query, setQuery] = useState("");

  const getSuggestions = ({ value }: { value: string }) =>
    CITIES.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

  return (
    <Search
      value={query}
      onChange={setQuery}
      getSuggestions={getSuggestions}
      placeholder="Find a city"
      style={{ width: "100%", maxWidth: 360 }}
    />
  );
}
