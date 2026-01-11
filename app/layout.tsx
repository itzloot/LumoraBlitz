import './globals.css';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LumoraBlitz",
  description: "Premium Templates Arena",
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