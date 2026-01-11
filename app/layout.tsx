import './globals.css';  // ← Add this line

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LumoraBlitz - Premium Templates",
  description: "Lightning-fast web templates arena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}