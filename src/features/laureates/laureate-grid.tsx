"use client";

import Link from "next/link";

import { AnimatedGroup } from "@/components/motion/animated-group";

import { type Laureates } from "@/features/data/schemas/laureate.schema";
import { LaureateCard } from "@/features/laureates/laureate-card";

type LaureateGridProps = {
  laureatesData: Laureates;
};

const LaureateGrid = (props: LaureateGridProps) => {
  // Create a new array instead of mutating the original one to prevent hydratation errors
  const laureatesData = [...props.laureatesData.laureates].reverse();

  return (
    <div>
      <AnimatedGroup className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" preset="blur">
        {laureatesData.map((item, index) => (
          <Link href={`/laureates/${item.id}`} key={index}>
            <LaureateCard laureateData={item} />
          </Link>
        ))}
      </AnimatedGroup>
    </div>
  );
};

export { LaureateGrid };
