import { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { PrizeGrid } from "@/features/prizes/prize-grid";

import { fetchPrizes } from "@/api/prizes";

export const metadata: Metadata = {
  title: "Prizes",
};

type PrizesPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function PrizesPage(props: PrizesPageProps) {
  const searchParams = await props.searchParams;

  const page = parseInt(searchParams["page"] || "1");
  const pageSize = parseInt(searchParams["pageSize"] || "25");

  const prizes = await fetchPrizes(page, pageSize);

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <PrizeGrid prizes={prizes} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
