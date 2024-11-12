import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "an e-commerce app",
  description: "shopping",
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
