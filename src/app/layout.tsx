import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

/*
 * Fonts are downloaded at build time by next/font and served from our own origin. The
 * browser makes no request to Google, which keeps the "no third-party runtime requests"
 * property described in docs/architecture.md and avoids a render-blocking dependency.
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

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
  // Section pages set only their own title; the template appends the site identity.
  title: {
    default: siteTitle,
    template: "%s — Jeff Whiteside",
  },
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
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
      <body>
        {/* Visible only when focused, so keyboard users can bypass the navigation. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:rounded-[2px] focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
