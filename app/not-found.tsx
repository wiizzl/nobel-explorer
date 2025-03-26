import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen">
      <section className="mt-64 space-y-4 text-center">
        <h2 className="text-8xl font-bold text-[#0a0f2a]">404</h2>
        <div>
          <h3 className="my-4 text-2xl font-semibold text-primary">Page not found</h3>
          <p className="text-sm text-muted-foreground">Sorry, there's nothing here.</p>
        </div>
        <Link href="/" className="hover:underline">
          Back to home
        </Link>
      </section>
    </main>
  );
}
