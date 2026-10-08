"use client";

import { Button, Grid, TextInput } from "altrone-ui";

export default function GridGuidelineAutoGoodDemo() {
  return (
    <Grid gap="s">
      <Grid.Column size={8}>
        <TextInput placeholder="Product name" />
      </Grid.Column>
      <Grid.Column size="auto">
        <Button label="Search products" variant="submit" />
      </Grid.Column>
    </Grid>
  );
}
