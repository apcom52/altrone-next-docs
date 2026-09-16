import { redirect } from "next/navigation";

/** Unreachable in normal use — `proxy.ts` redirects a bare `/` before this renders. Kept as a fallback. */
export default function RootPage() {
  redirect("/en");
}
