/*
 * Placeholder entry point for Iteration 1. It exists to confirm the App Router, Tailwind
 * theme tokens, and the production build are wired correctly. The real page sections are
 * introduced starting in Iteration 2.
 */
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-4 px-6">
      <p className="font-mono text-sm tracking-widest text-accent uppercase">
        Iteration 1
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        jeffwhiteside.dev
      </h1>
      <p className="text-muted">
        Project foundation, tooling, and documentation are in place. The header,
        hero, and content sections are built in later iterations.
      </p>
    </main>
  );
}
