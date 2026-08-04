"use client";

import { Grid, TextInput, Button } from "altrone-ui";
import { Search } from "lucide-react";
import { useState } from "react";

export default function GridAutoDemo() {
  const [q, setQ] = useState("");

  return (
    <Grid gap="s" style={{ width: "100%" }}>
      <Grid.Column size="auto">
        <Button label="Фильтры" size="m" />
      </Grid.Column>
      <Grid.Column size={10}>
        <TextInput value={q} onChange={setQ} placeholder="Поиск...">
          <TextInput.IconIsland icon={<Search size={16} />} placement="left" />
        </TextInput>
      </Grid.Column>
      <Grid.Column size="auto">
        <Button label="Найти" variant="submit" size="m" />
      </Grid.Column>
    </Grid>
  );
}
