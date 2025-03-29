import { type NobelPrize } from "@/features/prizes/schema/prizes.schema";

type PrizeCardProps = {
  prize: NobelPrize;
};

const PrizeCard = (props: PrizeCardProps) => {
  return <div>{props.prize.awardYear}</div>;
};

export { PrizeCard };
