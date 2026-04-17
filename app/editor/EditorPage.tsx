"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Splitter } from "altrone-ui";
import { PageTree } from "./PageTree";
import { PageEditor } from "./PageEditor";
import type { Navigation } from "@/lib/types";
import s from "./styles.module.css";

interface EditorPageProps {
  enNav: Navigation;
  ruNav: Navigation;
}

export function EditorPage({ enNav, ruNav }: EditorPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selected = searchParams.get("page");

  function handleSelect(path: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", path);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  return (
    <Splitter orientation="horizontal" className={s.content}>
      <Splitter.Panel defaultSize={25} min={15} max={50} collapsible>
        <PageTree
          enNav={enNav}
          ruNav={ruNav}
          selected={selected}
          onSelect={handleSelect}
        />
      </Splitter.Panel>
      <Splitter.Panel defaultSize={75}>
        <PageEditor selected={selected} />
      </Splitter.Panel>
    </Splitter>
  );
}
