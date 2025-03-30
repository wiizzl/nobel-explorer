"use client";

import Link from "next/link";

import { LaureateCard } from "@/features/laureates/laureate-card";
import { LaureatesResult } from "@/types/api";

type LaureateGridProps = {
  laureates: LaureatesResult;
};

const LaureateGrid = (props: LaureateGridProps) => {
  return (
    <div>
      {/* TODO: aside filters */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {props.laureates.laureates?.map((item, index) => (
          <Link href={`/laureates/${item.id}`} key={index}>
            <LaureateCard laureate={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { LaureateGrid };
