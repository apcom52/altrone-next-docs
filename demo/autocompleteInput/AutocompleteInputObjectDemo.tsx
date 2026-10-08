"use client";

import { useState } from "react";
import { AutocompleteInput, Flex, Text } from "altrone-ui";

type Language = { name: string; year: number };

const LANGUAGES: Language[] = [
  { name: "TypeScript", year: 2012 },
  { name: "JavaScript", year: 1995 },
  { name: "Python", year: 1991 },
  { name: "Rust", year: 2010 },
  { name: "Go", year: 2009 },
  { name: "Swift", year: 2014 },
  { name: "Kotlin", year: 2011 },
  { name: "Java", year: 1995 },
  { name: "Ruby", year: 1995 },
];

export default function AutocompleteInputObjectDemo() {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<Language | null>(null);

  const getSuggestions = ({ value }: { value: string }): Language[] =>
    LANGUAGES.filter((language) =>
      language.name.toLowerCase().startsWith(value.toLowerCase()),
    );

  return (
    <Flex orientation="vertical" gap="s" style={{ maxWidth: 360 }}>
      <AutocompleteInput<Language>
        value={value}
        onChange={setValue}
        getSuggestions={getSuggestions}
        getSuggestionValue={(language) => language.name}
        onSelect={(language) => setSelected(language)}
        placeholder="Programming language"
      />
      {selected ? (
        <Text size={3} color="muted">
          Selected: <Text weight="medium">{selected.name}</Text>, first released
          in {selected.year}
        </Text>
      ) : null}
    </Flex>
  );
}
