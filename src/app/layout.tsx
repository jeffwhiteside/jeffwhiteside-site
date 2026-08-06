import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://jeffwhiteside.dev";
const siteTitle = "Jeff Whiteside — Software Engineering Leader";
const siteDescription =
  "Jeff Whiteside is a software engineering leader in Tampa, Florida, leading SaaS " +
  "engineering organizations through growth, platform modernization, and operational change.";

/*
 * metadataBase resolves the relative URLs Next.js generates for Open Graph and canonical
 * tags. Open Graph intentionally has no image yet: referencing an asset that does not exist
 * would produce a broken preview. The image is added in Iteration 9.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Jeff Whiteside",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
