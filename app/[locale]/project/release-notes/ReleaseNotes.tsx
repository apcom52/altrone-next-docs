"use client";

import type { ReactNode } from "react";
import { Divider, Flex, Text } from "altrone-ui";

export interface ReleaseEntry {
  slug: string;
  id: string;
  title: string;
  date: string;
  body: ReactNode;
}

export function ReleaseNotes({
  title,
  releases,
}: {
  title: string;
  releases: ReleaseEntry[];
}) {
  return (
    <Flex orientation="vertical" gap="l">
      <Text size={3} color="muted" weight="medium">
        {title}
      </Text>

      {releases.map((release, index) => (
        <Flex key={release.slug} orientation="vertical" gap="l" asChild>
          <section id={release.id}>
            {index > 0 ? <Divider /> : null}
            <Flex orientation="vertical" gap="s">
              <Text size={7} weight="bold" asChild>
                <h2>{release.title}</h2>
              </Text>
              <Text size={3} color="muted">
                {release.date}
              </Text>
            </Flex>
            <article className="doc-article">{release.body}</article>
          </section>
        </Flex>
      ))}
    </Flex>
  );
}
