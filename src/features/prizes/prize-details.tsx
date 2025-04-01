"use client";

import { useQuery } from "@tanstack/react-query";

import { Loader } from "@/components/layout/loader";

import { fetchPrize } from "@/api/prize";

import { NobelPrize } from "@/types/api";

type PrizeDetailsProps = {
  category: string;
  year: NobelPrize["awardYear"];
};

const PrizeDetails = (props: PrizeDetailsProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["prize", { category: props.category, year: props.year }],
    queryFn: () => fetchPrize(props.category, props.year),
  });

  const prize = data?.[0];

  return (
    <div className="space-y-4">
      {isLoading && <Loader />}

      {isError && <p className="text-destructive text-xl">Error: {error.message}</p>}

      {data && prize && <div>{prize.awardYear}</div>}
    </div>
  );
};

export { PrizeDetails };
