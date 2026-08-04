"use client";

import { Grid, Text } from "altrone-ui";

const cell = (label: string, cols: number) => (
  <Grid.Column size={cols as any}>
    <div style={{
      padding: "12px",
      background: "var(--altrone-layer-2)",
      border: "1px solid var(--altrone-border)",
      borderRadius: "8px",
      textAlign: "center",
    }}>
      <Text size={2} color="muted">{cols} / 12</Text>
      <Text block size={3} weight="medium">{label}</Text>
    </div>
  </Grid.Column>
);

export default function GridBasicDemo() {
  return (
    <Grid gap="m" style={{ width: "100%" }}>
      {cell("6 колонок", 6)}
      {cell("6 колонок", 6)}
      {cell("4 колонки", 4)}
      {cell("4 колонки", 4)}
      {cell("4 колонки", 4)}
      {cell("3 колонки", 3)}
      {cell("9 колонок", 9)}
    </Grid>
  );
}
