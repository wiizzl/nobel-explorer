"use client";

import Link from "next/link";

import { type NobelPrizes } from "@/features/prizes/schema/prizes.schema";
import { PrizeCard } from "./prize-card";

type PrizeGridProps = {
  prizes: NobelPrizes;
};

const PrizeGrid = (props: PrizeGridProps) => {
  return (
    <div>
      {/* TODO: aside filters */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.prizes.nobelPrizes.map((item, index) => (
          <Link href={`/prizes/${item.awardYear}?category=${item.category.en}`} key={index}>
            <PrizeCard prize={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { PrizeGrid };
