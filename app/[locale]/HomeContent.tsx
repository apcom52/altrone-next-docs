"use client";

import Link from "next/link";
import { Box, Flex, Grid, Text } from "altrone-ui";

export interface HomeCopy {
  title: string;
  lead: string;
  cta: string;
  sections: { title: string; description: string; href: string }[];
}

export function HomeContent({ locale, copy }: { locale: string; copy: HomeCopy }) {
  return (
    <Flex direction="vertical" gap="xl">
      <Flex direction="vertical" gap="m" align="start">
        <Text size={9} weight="bold">
          {copy.title}
        </Text>
        <Text size={4} color="muted">
          {copy.lead}
        </Text>
        <Box asChild shape="pill" material="solid" tone="accent" padding={{ x: 20, y: 10 }}>
          <Link href={`/${locale}/getting-started`}>
            <Text weight="medium">{copy.cta}</Text>
          </Link>
        </Box>
      </Flex>

      <Grid gap="m" rowGap="m">
        {copy.sections.map((section) => (
          <Grid.Column key={section.href} size={4}>
            <Box asChild shape="rounded" material="outline" pressable focusable padding={16}>
              <Link href={`/${locale}/${section.href}`}>
                <Flex direction="vertical" gap="xs">
                  <Text weight="medium">{section.title}</Text>
                  <Text size={2} color="muted">
                    {section.description}
                  </Text>
                </Flex>
              </Link>
            </Box>
          </Grid.Column>
        ))}
      </Grid>
    </Flex>
  );
}
