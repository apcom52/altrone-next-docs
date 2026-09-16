"use client";

import { Button, Flex, Text, useAltroneTheme } from "altrone-ui";
import type { Theme } from "altrone-ui";

const OPTIONS: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "Auto" },
];

export default function ThemeToggleDemo() {
  const { theme, setTheme } = useAltroneTheme();

  return (
    <Flex direction="vertical" gap="m">
      <Flex gap="s">
        {OPTIONS.map((option) => (
          <Button
            key={option.value}
            label={option.label}
            selected={theme === option.value}
            onClick={() => setTheme(option.value)}
          />
        ))}
      </Flex>
      <div
        style={{
          padding: 16,
          borderRadius: 12,
          background: "var(--background-2)",
          border: "1px solid var(--border-1)",
        }}
      >
        <Text block weight="bold">
          This card uses --background-2 / --border-1 / --text-1
        </Text>
        <Text block style={{ color: "var(--text-1)" }}>
          No extra code was written for dark mode — the tokens redefine
          themselves under [data-altrone-theme=&quot;dark&quot;].
        </Text>
      </div>
    </Flex>
  );
}
