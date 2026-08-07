import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { BEYOND_WORK_SUMMARY } from "@/content/about";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION } from "@/content/contact";
import { CLOSING_QUOTE, VALUES } from "@/content/impact";

const CONNECT_LINKS = [
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedInIcon, external: true },
  { href: GITHUB_URL, label: "GitHub", Icon: GitHubIcon, external: true },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: MailIcon, external: false },
] as const;

/**
 * Site footer: closing quote, values, beyond-work note, and the contact action.
 *
 * No copyright year is rendered. The pages are statically prerendered, so `new Date()` would
 * be evaluated at build time and then silently go stale until the next deploy.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-elevated">
      <div className="page-container grid grid-cols-1 gap-10 py-14 lg:grid-cols-[1fr_1fr_1fr]">
        <div>
          <blockquote className="flex gap-3">
            <span aria-hidden="true" className="font-serif text-3xl leading-none text-accent">
              &ldquo;
            </span>
            <p className="font-serif text-sm text-ink italic">{CLOSING_QUOTE}</p>
          </blockquote>
          <p className="mt-6 text-sm text-muted">{BEYOND_WORK_SUMMARY}</p>
        </div>

        <section aria-labelledby="footer-values">
          <h2 id="footer-values" className="eyebrow">
            How I Work
          </h2>
          <ul className="mt-4 space-y-3">
            {VALUES.map((value) => (
              <li key={value.title}>
                <p className="text-sm font-semibold text-ink">{value.title}</p>
                <p className="text-sm text-muted">{value.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="footer-connect">
          <h2 id="footer-connect" className="text-lg">
            Let&rsquo;s Build Something Great
          </h2>
          <p className="mt-3 text-sm text-muted">
            I&rsquo;m always open to connecting and discussing new opportunities.
          </p>

          <div className="mt-5">
            <ButtonLink href="/contact">
              Let&rsquo;s Connect
              <ArrowRight />
            </ButtonLink>
          </div>

          <ul className="mt-5 flex items-center gap-3">
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
        </section>
      </div>

      <div className="border-t border-line">
        <div className="page-container py-5 text-sm text-muted">
          <p>Jeff Whiteside — {LOCATION}</p>
        </div>
      </div>
    </footer>
  );
}
