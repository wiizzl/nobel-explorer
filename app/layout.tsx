import "./globals.css";

import type { Metadata } from "next";
import LocalFont from "next/font/local";

import { config } from "@/config";

const Nobel = LocalFont({
  src: "../public/fonts/Nobel-Regular.ttf",
  variable: "--font-nobel",
});

export const metadata: Metadata = {
  title: {
    default: config.title,
    template: `%s - ${config.title}`,
  },
  description: config.description,
  alternates: {
    canonical: "/",
  },
  keywords: config.keywords,
  authors: [{ name: config.creator.name, url: config.creator.url }],
  creator: config.creator.name,
  metadataBase: new URL("https://nobel-explorer-eight.vercel.app"),
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${Nobel.variable} antialiased selection:bg-muted/50`}>{props.children}</body>
    </html>
  );
}
