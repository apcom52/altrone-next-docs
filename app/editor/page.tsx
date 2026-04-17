import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { EditorPage } from "./EditorPage";
import type { Navigation } from "@/lib/types";

export default async function EditorRoute() {
  if (process.env.NODE_ENV === "production") notFound();

  const [enRaw, ruRaw] = await Promise.all([
    readFile(path.join(process.cwd(), "content", "en", "navigation.json"), "utf-8"),
    readFile(path.join(process.cwd(), "content", "ru", "navigation.json"), "utf-8"),
  ]);

  const enNav: Navigation = JSON.parse(enRaw);
  const ruNav: Navigation = JSON.parse(ruRaw);

  return (
    <Suspense>
      <EditorPage enNav={enNav} ruNav={ruNav} />
    </Suspense>
  );
}
