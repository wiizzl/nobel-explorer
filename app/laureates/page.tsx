import { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { LaureateGrid } from "@/features/laureates/laureate-grid";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Laureates",
};

export default function LaureatesPage() {
  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <Suspense>
            <LaureateGrid />
          </Suspense>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
