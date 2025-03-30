import { Metadata } from "next";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

import { LaureateGrid } from "@/features/laureates/laureate-grid";

import { fetchLaureates } from "@/api/laureates";

export const metadata: Metadata = {
  title: "Laureates",
};

type LaureatesPageProps = {
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export default async function LaureatesPage(props: LaureatesPageProps) {
  const searchParams = await props.searchParams;

  const page = parseInt(searchParams["page"] || "1");
  const pageSize = parseInt(searchParams["pageSize"] || "25");

  const laureates = await fetchLaureates(page, pageSize);

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <LaureateGrid laureates={laureates} />
          <div className="mt-5">
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={laureates.meta?.count || 1000}
              pageSizeSelectOptions={{ pageSizeOptions: [10, 25, 50, 100] }}
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
