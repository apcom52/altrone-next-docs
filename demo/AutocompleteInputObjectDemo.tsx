"use client";

import { useState } from "react";
import { AutocompleteInput, TextInput, Text, Flex } from "altrone-ui";
import { Globe } from "lucide-react";

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
  { name: "C++", year: 1985 },
  { name: "Ruby", year: 1995 },
];

export default function AutocompleteInputObjectDemo() {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState<Language | null>(null);

  const getSuggestions = ({ value }: { value: string }): Language[] =>
    LANGUAGES.filter((l) =>
      l.name.toLowerCase().startsWith(value.toLowerCase())
    );

  return (
    <div style={{ maxWidth: 360 }}>
      <AutocompleteInput<Language>
        value={value}
        onChange={setValue}
        getSuggestions={getSuggestions}
        getSuggestionValue={(lang) => lang.name}
        onSelect={(lang) => setSelected(lang)}
        placeholder="Язык программирования"
      >
        <TextInput.IconIsland icon={<Globe size={16} />} placement="left" />
      </AutocompleteInput>
      {selected && (
        <Text block size={3} color="muted" style={{ marginTop: 8 }}>
          Выбран: <Text weight="medium">{selected.name}</Text>, создан в {selected.year} году
        </Text>
      )}
    </div>
  );
}
