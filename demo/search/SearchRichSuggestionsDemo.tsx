"use client";

import { useState } from "react";
import { Flex, Search, Text } from "altrone-ui";

type Article = { title: string; section: string };

const ARTICLES: Article[] = [
  { title: "Installation", section: "Getting started" },
  { title: "Dark theme", section: "Foundations" },
  { title: "Keyboard navigation", section: "Foundations" },
  { title: "Form.Field", section: "Components" },
  { title: "TextInput islands", section: "Components" },
  { title: "Toolbar sections", section: "Components" },
];

export default function SearchRichSuggestionsDemo() {
  const [query, setQuery] = useState("");
  const [opened, setOpened] = useState<Article | null>(null);

  const getSuggestions = ({ value }: { value: string }) =>
    ARTICLES.filter((article) =>
      article.title.toLowerCase().includes(value.toLowerCase()),
    );

  return (
    <Flex orientation="vertical" gap="s" style={{ width: "100%", maxWidth: 360 }}>
      <Search<Article>
        value={query}
        onChange={setQuery}
        getSuggestions={getSuggestions}
        getSuggestionValue={(article) => article.title}
        renderSuggestion={({ suggestion }) => (
          <Flex orientation="horizontal" gap="s" align="center" justify="between" style={{ width: "100%" }}>
            <Text size={4}>{suggestion.title}</Text>
            <Text size={3} color="muted">
              {suggestion.section}
            </Text>
          </Flex>
        )}
        onSelect={(article) => setOpened(article)}
        placeholder="Search the docs"
      />
      <Text size={4} color="muted">
        {opened ? `Opened: ${opened.title}` : "Nothing opened yet"}
      </Text>
    </Flex>
  );
}
