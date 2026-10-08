"use client";

import { Button, Grid, TextInput } from "altrone-ui";

export default function GridAutoDemo() {
  return (
    <Grid gap="s">
      <Grid.Column size="auto">
        <Button label="Filters" />
      </Grid.Column>
      <Grid.Column size={8}>
        <TextInput placeholder="Search…" />
      </Grid.Column>
      <Grid.Column size="auto">
        <Button label="Search" variant="submit" />
      </Grid.Column>
    </Grid>
  );
}
