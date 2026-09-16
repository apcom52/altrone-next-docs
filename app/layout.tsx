import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "altrone-ui/dist/style.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altrone Documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
