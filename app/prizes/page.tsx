import { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { PrizeGrid } from "@/features/prizes/prize-grid";

export const metadata: Metadata = {
  title: "Prizes",
};

export default async function PrizesPage() {
  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <PrizeGrid />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
