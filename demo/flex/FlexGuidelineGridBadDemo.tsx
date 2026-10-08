"use client";

import { Box, Flex } from "altrone-ui";

const CARDS = ["Overview", "Reports", "Billing", "Team", "Security", "Support"];

export default function FlexGuidelineGridBadDemo() {
  return (
    <Flex gap="m" wrap>
      {CARDS.map((card) => (
        <Box key={card} material="dotted" tone="accent">
          {card}
        </Box>
      ))}
    </Flex>
  );
}
