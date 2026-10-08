"use client";

import { Box, Grid } from "altrone-ui";

export default function GridGuidelineSumBadDemo() {
  return (
    <Grid gap="m">
      <Grid.Column size={5}>
        <Box material="dotted" tone="accent" width="100%">
          Content · 5
        </Box>
      </Grid.Column>
      <Grid.Column size={4}>
        <Box material="dotted" tone="accent" width="100%">
          Aside · 4
        </Box>
      </Grid.Column>
    </Grid>
  );
}
