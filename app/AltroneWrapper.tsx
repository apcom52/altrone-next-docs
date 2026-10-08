"use client";

import { Application } from "altrone-ui";
import { DOCS_ACCENT } from "@/lib/accent";

export const AltroneWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Application accent={DOCS_ACCENT} persistTheme applicationName="Altrone">
      {children}
    </Application>
  );
};
