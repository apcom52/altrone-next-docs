"use client";

import { AltroneApplication } from "altrone-ui";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import type { Navigation } from "@/lib/types";

export const AltroneWrapper = ({
  children,
  nav,
}: Readonly<{
  children: React.ReactNode;
  nav: Navigation;
}>) => {
  return (
    <AltroneApplication
      accent="purple"
      header={<Header />}
      sidebar={<Sidebar nav={nav} />}
    >
      {children}
    </AltroneApplication>
  );
};
