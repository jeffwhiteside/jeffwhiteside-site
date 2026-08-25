import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarIcon, TagIcon } from "@/components/ui/icons";
import { ARTICLES } from "@/content/writing";
import { resolvePublicImage } from "@/lib/assets";
import { readArticleBody } from "@/lib/content";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

function findArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: PageProps<"/writing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return {};
  }

  return { title: article.title, description: article.summary };
}

/**
 * Article page. The metadata (title, date, category, summary) lives in content/writing.ts,
 * but the body itself is read straight from src/content/articles/<slug>.html — a plain HTML
 * fragment with no framework of its own, so writing or editing an article is a text edit, not
 * a code change. See lib/content.ts for why rendering it via dangerouslySetInnerHTML is safe
 * here (owner-authored file, never user input) and article-prose in globals.css for how its
 * bare tags (p, h2, a, em, strong, blockquote, ul) get styled.
 */
export default async function ArticlePage({ params }: PageProps<"/writing/[slug]">) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  const cover = resolvePublicImage([
    `/writing/${article.slug}-cover.jpg`,
    `/writing/${article.slug}-cover.png`,
  ]);
  const body = readArticleBody(article.slug);

  return (
    <article className="page-container py-6 sm:py-8">
      <Link href="/writing" className="link inline-flex items-center gap-2 text-sm">
        ← Back to Writing
      </Link>

      <div className="measure-prose mt-4 flex items-start gap-4">
        {cover ? (
          <Image
            src={cover}
            alt=""
            width={320}
            height={220}
            priority
            className="h-24 w-auto shrink-0 rounded-lg border border-line sm:h-28"
          />
        ) : null}

        <div className="min-w-0 flex-1">
          <p className="eyebrow">Article</p>
          <h1 className="mt-1 max-w-[34rem] text-2xl font-bold text-ink sm:text-3xl">
            {article.title}
          </h1>

          <div className="mt-2 flex flex-nowrap items-center gap-2 text-sm whitespace-nowrap text-muted">
            <span>By Jeff Whiteside</span>
            <span aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-4" />
              {article.date}
            </span>
            <span aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5">
              <TagIcon className="size-4" />
              {article.category.join(", ")}
            </span>
          </div>
        </div>
      </div>

      {body ? (
        <div className="article-prose measure-prose mt-6" dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <p className="mt-6 text-muted">This article&rsquo;s content is coming soon.</p>
      )}
    </article>
  );
}
