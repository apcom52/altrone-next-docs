"use client";

import { Box, Flex, Grid, Text } from "altrone-ui";

const GAPS = ["none", "xxs", "xs", "s", "m", "l", "xl", "xxl"] as const;

export default function FlexGapDemo() {
  return (
    <Grid gap="m" rowGap="s">
      {GAPS.map((gap) => (
        <Grid.Column key={gap} size={12}>
          <Flex gap="m" align="center">
            <Text code style={{ minWidth: 48 }}>
              {gap}
            </Text>
            <Flex gap={gap}>
              <Box size={20} material="solid" tone="accent" />
              <Box size={20} material="solid" tone="accent" />
              <Box size={20} material="solid" tone="accent" />
              <Box size={20} material="solid" tone="accent" />
            </Flex>
          </Flex>
        </Grid.Column>
      ))}
    </Grid>
  );
}
