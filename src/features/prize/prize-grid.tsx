"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";

import { type Prizes } from "@/features/data/schemas/prize.schema";

type PrizeGridProps = {
  prizesData: Prizes;
};

const PrizeGrid = (props: PrizeGridProps) => {
  return (
    <div>
      <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" preset="blur">
        {props.prizesData.prizes.map((item, index) => (
          <p key={index}>
            {item.year} {item.category}
          </p>
        ))}
      </AnimatedGroup>
    </div>
  );
};

export { PrizeGrid };
