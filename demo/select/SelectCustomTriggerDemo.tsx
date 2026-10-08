"use client";

import type { Ref } from "react";
import { useState } from "react";
import { Button, Select, useSelectContext } from "altrone-ui";
import { ChevronDown, ChevronUp } from "lucide-react";

const OPTIONS = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
];

const CountryTrigger = ({ ref }: { ref?: Ref<HTMLButtonElement> }) => {
  const { expanded, selectedOptions } = useSelectContext();
  const label = Array.isArray(selectedOptions) ? undefined : selectedOptions?.label;

  return (
    <Button
      ref={ref}
      label={label ?? "Select country"}
      additionalIcon={expanded ? <ChevronUp /> : <ChevronDown />}
    />
  );
};

export default function SelectCustomTriggerDemo() {
  const [country, setCountry] = useState<string | undefined>();

  return (
    <Select
      asChild
      value={country}
      onChange={(value) => setCountry(value as string | undefined)}
      options={OPTIONS}
    >
      <CountryTrigger />
    </Select>
  );
}
