"use client";

import { Box, Grid } from "altrone-ui";

export default function GridGapsDemo() {
  return (
    <Grid gap="s" rowGap="xl">
      {["A", "B", "C", "D"].map((cell) => (
        <Grid.Column key={cell} size={6}>
          <Box material="dotted" tone="accent" width="100%">
            {cell}
          </Box>
        </Grid.Column>
      ))}
    </Grid>
  );
}
