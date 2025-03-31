"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { parseAsInteger, useQueryStates } from "nuqs";

import { PaginationWithButtons } from "@/components/ui/pagination-with-buttons";

import { PrizeCard, PrizeCardSkeleton } from "@/features/prizes/prize-card";
import { PrizeFilter } from "@/features/prizes/prize-filter";

import { fetchPrizes } from "@/api/prizes";

import { useDebounce } from "@/hooks/debounce";
import { usePrizesFilters } from "@/hooks/filters";

const PrizeGrid = () => {
  const [page, setPage] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(25),
  });

  const [filters, setFilters] = usePrizesFilters();

  const debouncedFilters = {
    sort: useDebounce(filters.sort, 500),
    nobelPrizeYear: useDebounce(filters.nobelPrizeYear, 500),
    yearTo: useDebounce(filters.yearTo, 500),
    nobelPrizeCategory: useDebounce(filters.nobelPrizeCategory, 500),
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["prizes", { page, ...debouncedFilters }],
    queryFn: () =>
      fetchPrizes(
        page.page,
        page.pageSize,
        Object.entries(debouncedFilters).map(([key, value]) => ({ key, value }))
      ),
  });

  const clearFilters = () => {
    setPage({ page: 1, pageSize: 25 });

    setFilters({
      sort: "desc",
      nobelPrizeYear: "",
      nobelPrizeCategory: "",
      yearTo: "",
    });
  };

  return (
    <div className="space-y-4">
      <PrizeFilter clearFilters={clearFilters} />

      {isLoading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: page.pageSize }).map((_, index) => (
            <PrizeCardSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && <p className="text-destructive text-xl">Error: {error.message}</p>}

      {!isLoading && !isError && data?.nobelPrizes?.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-xl bg-muted/20">
          <h3 className="text-xl font-medium mb-2">No prizes found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters criteria</p>
        </div>
      )}

      {data && data.nobelPrizes?.length !== 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.nobelPrizes?.map((item, index) => (
            <Link href={`/prizes/${item.category?.en?.slice(0, 3).toLowerCase()}/${item.awardYear}`} key={index}>
              <PrizeCard prize={item} />
            </Link>
          ))}
        </div>
      )}

      <PaginationWithButtons
        page={page.page}
        pageSize={page.pageSize}
        totalCount={data?.meta?.count || 0}
        pageSizeSelectOptions={{ pageSizeOptions: [10, 25, 50, 100] }}
        onPageChange={setPage}
      />
    </div>
  );
};

export { PrizeGrid };
