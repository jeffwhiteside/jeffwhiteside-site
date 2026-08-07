import Link from "next/link";
import { ArrowRight } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { Monogram } from "@/components/ui/monogram";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION } from "@/content/contact";

const CONNECT_LINKS = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: GITHUB_URL, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: MailIcon, external: false },
] as const;

/**
 * Site footer: a single call to connect, then a slim identity bar.
 *
 * The copyright year below is a literal string, not `new Date().getFullYear()` — the pages
 * are statically prerendered, so a computed year would be baked in at build time and then
 * silently go stale until the next deploy. A literal year is wrong in the same way, but
 * visibly so, which makes it something a future edit will actually catch and update.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-elevated">
      <div className="page-container py-6 sm:py-7">
        <p className="eyebrow">Let&rsquo;s Connect</p>
        <h2 className="text-section mt-1">Let&rsquo;s Build Something That Matters</h2>
        <span aria-hidden="true" className="mt-2 block h-0.5 w-12 rounded-full bg-accent" />

        <p className="measure-prose mt-2 text-muted">
          I&rsquo;m always interested in connecting with people building great teams, products,
          and technology.
        </p>

        <Link
          href="/contact"
          className="link mt-3 inline-flex items-center gap-2 text-base font-medium"
        >
          Let&rsquo;s Connect
          <ArrowRight />
        </Link>

        <ul className="mt-3 flex items-center gap-3">
          {CONNECT_LINKS.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-ink"
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-line">
        <div className="page-container flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Monogram className="inline-flex size-7 items-center justify-center rounded-lg border border-accent font-serif text-sm font-semibold tracking-tight text-ink" />
            <p className="text-sm">
              <span className="font-semibold text-ink">Jeff Whiteside</span>
              <span className="mx-2 text-muted">|</span>
              <span className="text-muted">{LOCATION}</span>
            </p>
          </div>
          <p className="text-sm text-muted">&copy; 2026 Jeff Whiteside. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
