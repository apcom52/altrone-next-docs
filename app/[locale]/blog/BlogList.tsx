"use client";

import Link from "next/link";
import { Box, Flex, Text } from "altrone-ui";

export interface BlogPost {
  slug: string;
  title: Record<string, string>;
}

export function BlogList({
  locale,
  title,
  empty,
  posts,
}: {
  locale: string;
  title: string;
  empty: string;
  posts: BlogPost[];
}) {
  return (
    <Flex direction="vertical" gap="l">
      <Text size={7} weight="bold">
        {title}
      </Text>

      {posts.length === 0 ? (
        <Text color="muted">{empty}</Text>
      ) : (
        <Flex direction="vertical" gap="m">
          {posts.map((post) => (
            <Box key={post.slug} asChild shape="rounded" material="outline" pressable focusable padding={16}>
              <Link href={`/${locale}/blog/${post.slug}`}>
                <Text weight="medium">{post.title[locale] ?? post.title.en}</Text>
              </Link>
            </Box>
          ))}
        </Flex>
      )}
    </Flex>
  );
}
