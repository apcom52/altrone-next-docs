"use client";

import { Box, Grid } from "altrone-ui";

const CARDS = ["Overview", "Reports", "Billing", "Team", "Security", "Support"];

export default function FlexGuidelineGridGoodDemo() {
  return (
    <Grid gap="m" rowGap="m">
      {CARDS.map((card) => (
        <Grid.Column key={card} size={4}>
          <Box material="dotted" tone="accent" width="100%">
            {card}
          </Box>
        </Grid.Column>
      ))}
    </Grid>
  );
}
