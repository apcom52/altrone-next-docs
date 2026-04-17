"use client";

import { AltroneApplication } from "altrone-ui";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AltroneApplication accent="purple" className="h-screen overflow-hidden">
      {children}
    </AltroneApplication>
  );
}
