"use client";

import { Flex, Loading } from "altrone-ui";

/**
 * Next's automatic Suspense fallback for this route segment — shown instantly
 * on navigation while the target page's async data (markdown content, etc.)
 * is still resolving. `ScreenShell` (the persistent layout) stays mounted and
 * interactive; only this content area is replaced, so header/sidebar don't
 * flicker during the wait.
 */
export default function LoadingScreen() {
  return (
    <Flex justify="center" align="center" style={{ minHeight: "40vh" }}>
      <Loading size={32} strokeWidth={2} />
    </Flex>
  );
}
