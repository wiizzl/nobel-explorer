"use client";

import { AnimatedGroup } from "@/components/motion/animated-group";

import { type Laureates } from "@/features/data/schemas/laureate.schema";

type LaureateGridProps = {
  laureatesData: Laureates;
};

const LaureateGrid = (props: LaureateGridProps) => {
  return (
    <div>
      <AnimatedGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" preset="blur">
        {props.laureatesData.laureates.map((item, index) => (
          <p key={index}>
            {item.firstname} {item.surname}
          </p>
        ))}
      </AnimatedGroup>
    </div>
  );
};

export { LaureateGrid };
