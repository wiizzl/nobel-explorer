import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

import { fetchPrizes } from "@/api/prizes";
import { PrizeGrid } from "@/features/prizes/prize-grid";

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
          <div className="mt-5">
            <PaginationWithLinks
              page={page}
              pageSize={pageSize}
              totalCount={prizes.meta.count}
              pageSizeSelectOptions={{ pageSizeOptions: [25, 50, 100] }}
            />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
