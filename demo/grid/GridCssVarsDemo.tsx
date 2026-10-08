"use client";

import type { CSSProperties } from "react";
import { Box, Grid } from "altrone-ui";

const vars = (values: Record<string, string>) => values as CSSProperties;

export default function GridCssVarsDemo() {
  return (
    <Grid gap="m" rowGap="s" style={vars({ "--gap": "24px" })}>
      {[1, 2, 3, 4].map((cell) => (
        <Grid.Column key={cell} size={6}>
          <Box material="dotted" tone="accent" width="100%">
            {cell}
          </Box>
        </Grid.Column>
      ))}
    </Grid>
  );
}
