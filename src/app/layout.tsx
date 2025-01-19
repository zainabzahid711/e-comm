import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Head from "next/head";

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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
