"use client";

import Link from "next/link";
import { parseAsInteger, useQueryState } from "nuqs";
import { useEffect, useState, useTransition } from "react";

import { PaginationWithLinks } from "@/components/ui/pagination-with-links";

import { LaureateCard } from "@/features/laureates/laureate-card";
import { LaureateFilter } from "@/features/laureates/laureate-filter";

import { fetchLaureates } from "@/api/laureates";

import type { LaureatesResult } from "@/types/api";

const LaureateGrid = () => {
  const [laureates, setLaureates] = useState<LaureatesResult | null>(null);
  const [isPending, startTransition] = useTransition();

  const [page] = useQueryState("page", parseAsInteger.withDefault(1));
  const [pageSize] = useQueryState("pageSize", parseAsInteger.withDefault(25));
  const [gender, setGender] = useQueryState("gender", { defaultValue: "all" });

  const [name, setName] = useState("");
  const [appliedName, setAppliedName] = useQueryState("name", { defaultValue: "" });

  // Synchronize the name state with the appliedName query parameter on initial render
  useEffect(() => {
    setName(appliedName);
  }, [appliedName]);

  // Fetch data with the current filters
  useEffect(() => {
    const parameters: string[] = [];
    if (appliedName) parameters.push(`name=${encodeURIComponent(appliedName)}`);
    if (gender && gender !== "all") parameters.push(`gender=${encodeURIComponent(gender)}`);

    startTransition(() => {
      fetchLaureates(page, pageSize, parameters)
        .then((data) => {
          setLaureates(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    });
  }, [page, pageSize, appliedName, gender]);

  const clearFilters = () => {
    setName("");
    setAppliedName("");
    setGender("all");
  };

  if (!laureates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <LaureateFilter
        filters={{ name, gender }}
        setFilters={{ setName, setGender }}
        clearFilters={clearFilters}
        applySearch={() => setAppliedName(name)}
        isPending={isPending}
      />

      {laureates.laureates?.length === 0 ? (
        <div className="text-center py-12 border rounded-lg bg-muted/20">
          <h3 className="text-xl font-medium mb-2">No laureates found</h3>
          <p className="text-muted-foreground">Try adjusting your filters or search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {laureates.laureates?.map((item, index) => (
            <Link href={`/laureates/${item.id}`} key={index}>
              <LaureateCard laureate={item} />
            </Link>
          ))}
        </div>
      )}
      <PaginationWithLinks
        page={page}
        pageSize={pageSize}
        totalCount={laureates.meta?.count || 1000}
        pageSizeSelectOptions={{ pageSizeOptions: [10, 25, 50, 100] }}
      />
    </div>
  );
};

export { LaureateGrid };
