"use client";

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Box, Flex, Text } from "altrone-ui";
import * as Logos from "altrone-ui/logos";
import s from "./CategoryGrid.module.css";

const MotionLink = motion.create(Link);

const badgeVariants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.14,
    transition: { type: "spring", stiffness: 420, damping: 12, mass: 0.8 },
  },
  tap: {
    y: 0,
    scale: 0.92,
    transition: { type: "spring", stiffness: 600, damping: 20 },
  },
} as const;

const badgeVariantsReduced = {
  rest: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.12 } },
  tap: { scale: 1 },
} as const;

/** Foundations articles have no logo yet — falls through to `undefined` and renders no badge. */
function getComponentIcon(slug: string, reduced: boolean) {
  const name = (slug.charAt(0).toUpperCase() +
    slug.slice(1)) as keyof typeof Logos;
  const Icon = Logos[name] as
    ComponentType<SVGProps<SVGSVGElement>> | undefined;
  if (!Icon) return null;

  return (
    <motion.div
      variants={reduced ? badgeVariantsReduced : badgeVariants}
      style={{ display: "flex" }}
    >
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
    </motion.div>
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
  const reduced = useReducedMotion() ?? false;

  return (
    <Flex orientation="vertical" gap="l">
      <Text size={7} weight="bold">
        {title}
      </Text>
      <div className={s.grid}>
        {pages.map((page) => (
          <Box
            key={page.slug}
            asChild
            shape="rounded"
            radius={12}
            material="transparent"
            focusable
            padding={8}
            className={s.tile}
          >
            <MotionLink
              href={`/${locale}/${prefix}/${page.slug}`}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Flex
                orientation="vertical"
                align="center"
                justify="center"
                gap="m"
              >
                {getComponentIcon(page.slug, reduced)}
                <Text weight="medium" align="center">
                  {page.title}
                </Text>
              </Flex>
            </MotionLink>
          </Box>
        ))}
      </div>
    </Flex>
  );
}
