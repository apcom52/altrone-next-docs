"use client";

import { Application } from "altrone-ui";

export const AltroneWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Application accent="indigo" persistTheme>
      {children}
    </Application>
  );
};
