"use client";

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { Box, Flex, Grid, Text } from "altrone-ui";
import * as Logos from "altrone-ui/logos";
import s from "./CategoryGrid.module.css";

/** Foundations articles have no logo yet — falls through to `undefined` and renders no badge. */
function getComponentIcon(slug: string) {
  const name = (slug.charAt(0).toUpperCase() +
    slug.slice(1)) as keyof typeof Logos;
  const Icon = Logos[name] as
    ComponentType<SVGProps<SVGSVGElement>> | undefined;
  if (!Icon) return null;

  return (
    <Box
      shape="rounded"
      material="transparent"
      width={72}
      height={72}
      radius={20}
      className={s.componentBadge}
    >
      <Icon width={72} height={72} />
    </Box>
  );
}

export function CategoryGrid({
  locale,
  title,
  prefix,
  pages,
}: {
  locale: string;
  title: string;
  prefix: string;
  pages: { slug: string; title: string }[];
}) {
  return (
    <Flex direction="vertical" gap="l">
      <Text size={7} weight="bold">
        {title}
      </Text>
      <Grid gap="m" rowGap="m">
        {pages.map((page) => (
          <Grid.Column key={page.slug} size={4}>
            <Box
              asChild
              shape="rounded"
              radius={12}
              material="translucent"
              pressable
              focusable
              elevation="sticky"
              padding={16}
              width="100%"
              height={160}
            >
              <Link href={`/${locale}/${prefix}/${page.slug}`}>
                <Flex
                  direction="vertical"
                  align="center"
                  justify="center"
                  gap="xl"
                >
                  {getComponentIcon(page.slug)}
                  <Text weight="medium" align="center">
                    {page.title}
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
