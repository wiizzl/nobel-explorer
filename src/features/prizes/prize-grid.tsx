"use client";

import Link from "next/link";

import { PrizeCard } from "@/features/prizes/prize-card";

import { NobelPrizesResult } from "@/types/api";

type PrizeGridProps = {
  prizes: NobelPrizesResult;
};

const PrizeGrid = (props: PrizeGridProps) => {
  return (
    <div>
      {/* TODO: aside filters */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.prizes.nobelPrizes?.map((item, index) => (
          <Link href={`/prizes/${item.category?.en?.slice(0, 3).toLowerCase()}/${item.awardYear}`} key={index}>
            <PrizeCard prize={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { PrizeGrid };
