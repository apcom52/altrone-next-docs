"use client";

import { Box, Grid } from "altrone-ui";

const ROWS = [[6, 6], [4, 4, 4], [3, 9]];

export default function GridBasicDemo() {
  return (
    <Grid gap="m" rowGap="s">
      {ROWS.flatMap((row, rowIndex) =>
        row.map((size, index) => (
          <Grid.Column key={`${rowIndex}-${index}`} size={size as 3 | 4 | 6 | 9}>
            <Box material="dotted" tone="accent" width="100%">
              {size} / 12
            </Box>
          </Grid.Column>
        )),
      )}
    </Grid>
  );
}
