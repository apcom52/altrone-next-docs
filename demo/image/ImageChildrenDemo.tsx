"use client";

import { Image } from "altrone-ui";

export default function ImageChildrenDemo() {
  return (
    <Image fit="contain" width="100%" height={200} caption="An inline SVG framed by Image">
      <svg viewBox="0 0 200 100" width="100%" height="100%" role="img" aria-label="Two overlapping circles">
        <circle cx="80" cy="50" r="40" fill="var(--accent-9)" fillOpacity="0.7" />
        <circle cx="120" cy="50" r="40" fill="var(--danger-solid-1)" fillOpacity="0.7" />
      </svg>
    </Image>
  );
}
