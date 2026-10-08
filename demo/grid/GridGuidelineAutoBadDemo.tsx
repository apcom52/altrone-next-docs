"use client";

import { Button, Grid, TextInput } from "altrone-ui";

export default function GridGuidelineAutoBadDemo() {
  return (
    <Grid gap="s">
      <Grid.Column size={10}>
        <TextInput placeholder="Product name" />
      </Grid.Column>
      <Grid.Column size={2}>
        <Button label="Search products" variant="submit" />
      </Grid.Column>
    </Grid>
  );
}
