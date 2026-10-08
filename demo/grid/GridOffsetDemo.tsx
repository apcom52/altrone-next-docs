"use client";

import { Box, Grid } from "altrone-ui";

export default function GridOffsetDemo() {
  return (
    <Grid gap="m" rowGap="s">
      <Grid.Column size={8} offset={2}>
        <Box material="dotted" tone="accent" width="100%">
          size 8, offset 2
        </Box>
      </Grid.Column>
      <Grid.Column size={4} offset={8}>
        <Box material="dotted" tone="accent" width="100%">
          size 4, offset 8
        </Box>
      </Grid.Column>
    </Grid>
  );
}
