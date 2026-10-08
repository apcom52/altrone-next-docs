"use client";

import { Box, Grid } from "altrone-ui";

export default function GridGuidelineGapsBadDemo() {
  return (
    <Grid gap="m">
      {[1, 2, 3, 4].map((card) => (
        <Grid.Column key={card} size={6}>
          <Box material="dotted" tone="accent" width="100%">
            Card {card}
          </Box>
        </Grid.Column>
      ))}
    </Grid>
  );
}
