import type { Metadata } from "next";
import "./globals.css";
import "altrone-ui/dist/style.css";

export const metadata: Metadata = {
  title: "Altrone Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
