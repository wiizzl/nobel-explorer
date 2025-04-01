"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { parseAsInteger, useQueryStates } from "nuqs";

import { PaginationWithButtons } from "@/components/ui/pagination-with-buttons";

import { LaureateCard, LaureateCardSkeleton } from "@/features/laureates/laureate-card";
import { LaureateFilter } from "@/features/laureates/laureate-filter";

import { useDebounce } from "@/hooks/debounce";
import { useLaureatesFilters } from "@/hooks/filters";

import { fetchLaureates } from "@/api/laureates";

const LaureateGrid = () => {
  const [page, setPage] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    pageSize: parseAsInteger.withDefault(25),
  });

  const [filters, setFilters] = useLaureatesFilters();

  const debouncedFilters = {
    name: useDebounce(filters.name, 500),
    sort: useDebounce(filters.sort, 500),
    gender: useDebounce(filters.gender, 500),
    motivation: useDebounce(filters.motivation, 500),
    affiliation: useDebounce(filters.affiliation, 500),
    residence: useDebounce(filters.residence, 500),
    birthDate: useDebounce(filters.birthDate, 500),
    deathDate: useDebounce(filters.deathDate, 500),
    birthDateTo: useDebounce(filters.birthDateTo, 500),
    deathDateTo: useDebounce(filters.deathDateTo, 500),
    foundedDate: useDebounce(filters.foundedDate, 500),
    birthCity: useDebounce(filters.birthCity, 500),
    deathCity: useDebounce(filters.deathCity, 500),
    birthCountry: useDebounce(filters.birthCountry, 500),
    deathCountry: useDebounce(filters.deathCountry, 500),
    birthContinent: useDebounce(filters.birthContinent, 500),
    deathContinent: useDebounce(filters.deathContinent, 500),
    foundedCity: useDebounce(filters.foundedCity, 500),
    foundedCountry: useDebounce(filters.foundedCountry, 500),
    foundedContinent: useDebounce(filters.foundedContinent, 500),
    nobelPrizeYear: useDebounce(filters.nobelPrizeYear, 500),
    yearTo: useDebounce(filters.yearTo, 500),
    nobelPrizeCategory: useDebounce(filters.nobelPrizeCategory, 500),
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["laureates", { page, ...debouncedFilters }],
    queryFn: () =>
      fetchLaureates(
        page.page,
        page.pageSize,
        Object.entries(debouncedFilters).map(([key, value]) => ({ key, value })),
      ),
  });

  const clearFilters = () => {
    setPage({ page: 1, pageSize: 25 });

    setFilters({
      sort: "asc",
      gender: "",
      motivation: "",
      affiliation: "",
      residence: "",
      birthDate: "",
      deathDate: "",
      birthDateTo: "",
      deathDateTo: "",
      foundedDate: "",
      birthCity: "",
      deathCity: "",
      birthCountry: "",
      deathCountry: "",
      birthContinent: "",
      deathContinent: "",
      foundedCity: "",
      foundedCountry: "",
      foundedContinent: "",
      nobelPrizeYear: "",
      yearTo: "",
      nobelPrizeCategory: "",
    });
  };

  return (
    <div className="space-y-4">
      <LaureateFilter clearFilters={clearFilters} />

      {isLoading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: page.pageSize }).map((_, index) => (
            <LaureateCardSkeleton key={index} />
          ))}
        </div>
      )}

      {isError && <p className="text-destructive text-xl">Error: {error.message}</p>}

      {!isLoading && !isError && data?.laureates?.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed rounded-xl bg-muted/20">
          <h3 className="text-xl font-medium mb-2">No laureates found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters criteria</p>
        </div>
      )}

      {data && data.laureates?.length !== 0 && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.laureates?.map((item, index) => (
            <Link href={`/laureates/${item.id}`} key={index}>
              <LaureateCard laureate={item} />
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

export { LaureateGrid };
