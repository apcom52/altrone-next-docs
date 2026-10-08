"use client";

import { Button, Grid } from "altrone-ui";

const TABS = ["Overview", "Activity", "Members", "Integrations", "Billing", "Audit log"];

export default function GridNoWrapDemo() {
  return (
    <Grid gap="s" wrap={false} style={{ maxWidth: 360, overflowX: "auto" }}>
      {TABS.map((tab) => (
        <Grid.Column key={tab} size="auto">
          <Button label={tab} variant="text" size="s" />
        </Grid.Column>
      ))}
    </Grid>
  );
}
