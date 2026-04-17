"use client";

import { useState, useEffect, useMemo } from "react";
import { createEditor, type Descendant } from "slate";
import { withReact } from "slate-react";
import { withHistory } from "slate-history";
import { Tabs, TextInput, Text, Loading, Button } from "altrone-ui";
import { SlateEditor, EMPTY_DOCUMENT } from "./SlateEditor";
import type { Locale, PageData } from "@/lib/types";

const LOCALES: Locale[] = ["en", "ru"];
const LOCALE_LABELS: Record<Locale, string> = { en: "English", ru: "Русский" };

interface PageEditorProps {
  selected: string | null;
}

type SaveStatus = "idle" | "saving" | "saved" | "error";

export function PageEditor({ selected }: PageEditorProps) {
  const [locale, setLocale] = useState<Locale>("ru");
  const [titles, setTitles] = useState<Record<Locale, string>>({
    en: "",
    ru: "",
  });
  const [docs, setDocs] = useState<Record<Locale, Descendant[]>>({
    en: EMPTY_DOCUMENT,
    ru: EMPTY_DOCUMENT,
  });
  const [loadedLocales, setLoadedLocales] = useState<Set<Locale>>(new Set());
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [dirty, setDirty] = useState(false);

  // Stable editor instances, remounted when selected page changes
  const editors = useMemo(
    () => ({
      en: withHistory(withReact(createEditor())),
      ru: withHistory(withReact(createEditor())),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selected],
  );

  // Load content for both locales when selected page changes
  useEffect(() => {
    if (!selected) return;

    setDirty(false);
    setSaveStatus("idle");
    setLoadedLocales(new Set());

    for (const lang of LOCALES) {
      fetch(`/api/content/${lang}/${selected}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((data: PageData | null) => {
          setTitles((t) => ({ ...t, [lang]: data?.title ?? "" }));
          setDocs((d) => ({
            ...d,
            [lang]: data?.document?.length
              ? (data.document as unknown as Descendant[])
              : EMPTY_DOCUMENT,
          }));
          setLoadedLocales((prev) => new Set([...prev, lang]));
        })
        .catch(() => {
          setLoadedLocales((prev) => new Set([...prev, lang]));
        });
    }
  }, [selected]);

  async function save() {
    if (!selected) return;
    setSaveStatus("saving");
    try {
      for (const lang of LOCALES) {
        const body: PageData = {
          title: titles[lang],
          document: docs[
            lang
          ] as unknown as import("@/lib/types").SlateElementNode[],
        };
        const res = await fetch(`/api/content/${lang}/${selected}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error("Save failed");
      }
      setSaveStatus("saved");
      setDirty(false);
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch {
      setSaveStatus("error");
      setTimeout(() => setSaveStatus("idle"), 3000);
    }
  }

  if (!selected) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          opacity: 0.5,
        }}
      >
        <Text>Select a page to edit</Text>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header: lang tabs + save controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px",
          borderBottom: "1px solid var(--border-color, #e0e0e0)",
          flexShrink: 0,
        }}
      >
        <Tabs>
          {LOCALES.map((lang) => (
            <Tabs.Item
              key={lang}
              label={LOCALE_LABELS[lang]}
              selected={locale === lang}
              onClick={() => setLocale(lang)}
            />
          ))}
        </Tabs>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {saveStatus === "saving" && <Loading size="s" />}
          {saveStatus === "saved" && (
            <Text style={{ color: "green", fontSize: 13 }}>Saved</Text>
          )}
          {saveStatus === "error" && (
            <Text style={{ color: "red", fontSize: 13 }}>Error</Text>
          )}
          <Button
            variant="submit"
            label="Сохранить"
            onClick={save}
            disabled={!dirty || saveStatus === "saving"}
          />
        </div>
      </div>

      {/* Meta fields */}
      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          borderBottom: "1px solid var(--border-color, #e0e0e0)",
          flexShrink: 0,
        }}
      >
        <TextInput
          value={titles[locale]}
          onChange={(v) => {
            setTitles((t) => ({ ...t, [locale]: v }));
            setDirty(true);
          }}
          placeholder="Page title"
        >
          <TextInput.TextIsland label="Title" placement="left" />
        </TextInput>
        <TextInput value={selected} readOnly readonlyStyles placeholder="slug">
          <TextInput.TextIsland label="Slug" placement="left" />
        </TextInput>
      </div>

      {/* Slate editor */}
      <div style={{ flex: 1, overflow: "auto" }}>
        {loadedLocales.has(locale) ? (
          <SlateEditor
            key={`${selected}-${locale}`}
            editor={editors[locale]}
            value={docs[locale]}
            onChange={(v) => {
              setDocs((d) => ({ ...d, [locale]: v }));
              setDirty(true);
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
