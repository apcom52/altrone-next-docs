"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Text } from "altrone-ui";

type Language = { name: string; year: number };

const LANGUAGES: Language[] = [
  { name: "TypeScript", year: 2012 },
  { name: "Python", year: 1991 },
  { name: "Rust", year: 2010 },
  { name: "Go", year: 2009 },
  { name: "Swift", year: 2014 },
  { name: "Kotlin", year: 2011 },
  { name: "Java", year: 1995 },
  { name: "Ruby", year: 1995 },
];

export default function AutocompleteInputRenderDemo() {
  const [value, setValue] = useState("");

  const getSuggestions = ({ value }: { value: string }): Language[] =>
    LANGUAGES.filter((language) =>
      language.name.toLowerCase().includes(value.toLowerCase()),
    );

  return (
    <AutocompleteInput<Language>
      value={value}
      onChange={setValue}
      getSuggestions={getSuggestions}
      getSuggestionValue={(language) => language.name}
      renderSuggestion={({ suggestion, inputValue }) => {
        const start = suggestion.name
          .toLowerCase()
          .indexOf(inputValue.toLowerCase());
        const end = start + inputValue.length;

        return (
          <Flex gap="s" align="center" justify="between" style={{ width: "100%" }}>
            <Text>
              {suggestion.name.slice(0, start)}
              <Text weight="bold">{suggestion.name.slice(start, end)}</Text>
              {suggestion.name.slice(end)}
            </Text>
            <Text size={2} color="muted">
              {suggestion.year}
            </Text>
          </Flex>
        );
      }}
      placeholder="Programming language"
      style={{ maxWidth: 360 }}
    />
  );
}
