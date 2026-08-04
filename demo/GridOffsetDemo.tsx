"use client";

import { Grid, Text } from "altrone-ui";

const col = (size: number, offset: number, label: string) => (
  <Grid.Column size={size as any} offset={offset as any}>
    <div style={{
      padding: "12px",
      background: "var(--altrone-layer-2)",
      border: "1px solid var(--altrone-border)",
      borderRadius: "8px",
      textAlign: "center",
    }}>
      <Text size={2} color="muted">{offset > 0 ? `offset ${offset} + ` : ""}{size} / 12</Text>
      <Text block size={3} weight="medium">{label}</Text>
    </div>
  </Grid.Column>
);

export default function GridOffsetDemo() {
  return (
    <Grid gap="m" style={{ width: "100%" }}>
      {col(8, 2, "Центрированный блок")}
      {col(6, 3, "Смещение 3")}
      {col(4, 4, "Смещение 4")}
    </Grid>
  );
}
