"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { parseAsInteger, useQueryState } from "nuqs";

import { LaureateCard, LaureateCardSkeleton } from "@/features/laureates/laureate-card";
import { LaureateFilter } from "@/features/laureates/laureate-filter";

import { useDebounce } from "@/hooks/debounce";

import { fetchLaureates } from "@/api/laureates";

const LaureateGrid = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [pageSize, setPageSize] = useQueryState("pageSize", parseAsInteger.withDefault(25));
  const [name, setName] = useQueryState("name", { defaultValue: "" });
  const [sort, setSort] = useQueryState("sort", { defaultValue: "asc" });
  const [gender, setGender] = useQueryState("gender", { defaultValue: "all" });
  const [motivation, setMotivation] = useQueryState("motivation", { defaultValue: "" });
  const [affiliation, setAffiliation] = useQueryState("affiliation", { defaultValue: "" });
  const [residence, setResidence] = useQueryState("residence", { defaultValue: "" });
  const [birthDate, setBirthDate] = useQueryState("birthDate", { defaultValue: "" });
  const [deathDate, setDeathDate] = useQueryState("deathDate", { defaultValue: "" });
  const [birthDateTo, setBirthDateTo] = useQueryState("birthDateTo", { defaultValue: "" });
  const [deathDateTo, setDeathDateTo] = useQueryState("deathDateTo", { defaultValue: "" });
  const [foundedDate, setFoundedDate] = useQueryState("foundedDate", { defaultValue: "" });
  const [birthCity, setBirthCity] = useQueryState("birthCity", { defaultValue: "" });
  const [deathCity, setDeathCity] = useQueryState("deathCity", { defaultValue: "" });
  const [birthCountry, setBirthCountry] = useQueryState("birthCountry", { defaultValue: "" });
  const [deathCountry, setDeathCountry] = useQueryState("deathCountry", { defaultValue: "" });
  const [birthContinent, setBirthContinent] = useQueryState("birthContinent", { defaultValue: "" });
  const [deathContinent, setDeathContinent] = useQueryState("deathContinent", { defaultValue: "" });
  const [foundedCity, setFoundedCity] = useQueryState("foundedCity", { defaultValue: "" });
  const [foundedCountry, setFoundedCountry] = useQueryState("foundedCountry", { defaultValue: "" });
  const [foundedContinent, setFoundedContinent] = useQueryState("foundedContinent", { defaultValue: "" });
  const [nobelPrizeYear, setNobelPrizeYear] = useQueryState("nobelPrizeYear", { defaultValue: "" });
  const [yearTo, setYearTo] = useQueryState("yearTo", { defaultValue: "" });
  const [nobelPrizeCategory, setNobelPrizeCategory] = useQueryState("nobelPrizeCategory", { defaultValue: "" });

  const debouncedFilters = {
    name: useDebounce(name, 500),
    sort: useDebounce(sort, 500),
    gender: useDebounce(gender, 500),
    motivation: useDebounce(motivation, 500),
    affiliation: useDebounce(affiliation, 500),
    residence: useDebounce(residence, 500),
    birthDate: useDebounce(birthDate, 500),
    deathDate: useDebounce(deathDate, 500),
    birthDateTo: useDebounce(birthDateTo, 500),
    deathDateTo: useDebounce(deathDateTo, 500),
    foundedDate: useDebounce(foundedDate, 500),
    birthCity: useDebounce(birthCity, 500),
    deathCity: useDebounce(deathCity, 500),
    birthCountry: useDebounce(birthCountry, 500),
    deathCountry: useDebounce(deathCountry, 500),
    birthContinent: useDebounce(birthContinent, 500),
    deathContinent: useDebounce(deathContinent, 500),
    foundedCity: useDebounce(foundedCity, 500),
    foundedCountry: useDebounce(foundedCountry, 500),
    foundedContinent: useDebounce(foundedContinent, 500),
    nobelPrizeYear: useDebounce(nobelPrizeYear, 500),
    yearTo: useDebounce(yearTo, 500),
    nobelPrizeCategory: useDebounce(nobelPrizeCategory, 500),
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["laureates", { page, pageSize, ...debouncedFilters }],
    queryFn: () =>
      fetchLaureates(
        page,
        pageSize,
        Object.entries(debouncedFilters).map(([key, value]) => ({ key, value }))
      ),
  });

  const clearFilters = () => {
    setPage(1);
    setPageSize(25);
    setName("");
    setSort("asc");
    setGender("all");
    setMotivation("");
    setAffiliation("");
    setResidence("");
    setBirthDate("");
    setDeathDate("");
    setBirthDateTo("");
    setDeathDateTo("");
    setFoundedDate("");
    setBirthCity("");
    setDeathCity("");
    setBirthCountry("");
    setDeathCountry("");
    setBirthContinent("");
    setDeathContinent("");
    setFoundedCity("");
    setFoundedCountry("");
    setFoundedContinent("");
    setNobelPrizeYear("");
    setYearTo("");
    setNobelPrizeCategory("");
  };

  return (
    <div className="space-y-4">
      <LaureateFilter
        filters={{
          page,
          pageSize,
          name,
          sort,
          gender,
          motivation,
          affiliation,
          residence,
          birthDate,
          deathDate,
          birthDateTo,
          deathDateTo,
          foundedDate,
          birthCity,
          deathCity,
          birthCountry,
          deathCountry,
          birthContinent,
          deathContinent,
          foundedCity,
          foundedCountry,
          foundedContinent,
          nobelPrizeYear,
          yearTo,
          nobelPrizeCategory,
        }}
        setFilters={{
          setPage,
          setPageSize,
          setName,
          setSort,
          setGender,
          setMotivation,
          setAffiliation,
          setResidence,
          setBirthDate,
          setDeathDate,
          setBirthDateTo,
          setDeathDateTo,
          setFoundedDate,
          setBirthCity,
          setDeathCity,
          setBirthCountry,
          setDeathCountry,
          setBirthContinent,
          setDeathContinent,
          setFoundedCity,
          setFoundedCountry,
          setFoundedContinent,
          setNobelPrizeYear,
          setYearTo,
          setNobelPrizeCategory,
        }}
        clearFilters={clearFilters}
      />

      {isLoading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: pageSize }).map((_, index) => (
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

        // TODO: Add pagination
      )}
    </div>
  );
};

export { LaureateGrid };
