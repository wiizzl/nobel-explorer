import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createLoader, parseAsInteger, type SearchParams } from "nuqs/server";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { PrizeDetails } from "@/features/prizes/prize-details";

export const metadata: Metadata = {
  title: "Laureate",
};

type LaureatePageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<SearchParams>;
};

const loadSearchParams = createLoader({
  year: parseAsInteger,
});

export default async function PrizePage(props: LaureatePageProps) {
  const { category } = await props.params;
  const { year } = await loadSearchParams(props.searchParams);

  if (!category || !year) notFound();

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <PrizeDetails category={category} year={year} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
