import { Award, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { getCountryFlag } from "@/lib/utils";

import { Laureate } from "@/types/api";

type LaureateCardProps = {
  laureate: Laureate;
};

const LaureateCard = (props: LaureateCardProps) => {
  const flag = getCountryFlag(props.laureate.birth?.place?.country?.en);
  const laureateName = props.laureate.knownName?.en || props.laureate.orgName?.en;
  const latestPrize = props.laureate.nobelPrizes?.[0];

  return (
    <Card className="h-full transition-transform hover:scale-[1.01]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle title={laureateName} className="text-xl line-clamp-1">
            {laureateName}
          </CardTitle>
          {flag && (
            <span title={props.laureate.birth?.place?.country?.en} className="ml-2">
              {flag}
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow justify-between items-end">
        <div className="flex items-center gap-1.5">
          <Award className="size-4 text-muted-foreground" />
          <span
            title={`${latestPrize?.categoryFullName?.en} - ${latestPrize?.awardYear}`}
            className="text-sm text-muted-foreground line-clamp-1 capitalize"
          >
            {latestPrize?.category?.en} - {latestPrize?.awardYear}
          </span>
          {(props.laureate.nobelPrizes?.length ?? 0) > 1 && (
            <Badge variant="outline" className="ml-0.5 text-xs">
              +{(props.laureate.nobelPrizes?.length ?? 0) - 1}
            </Badge>
          )}
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </CardContent>
    </Card>
  );
};

const LaureateCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-[88px] w-full rounded-xl" />
      <div className="flex items-center justify-between mt-2">
        <Skeleton className="h-4 w-[70%]" />
        <Skeleton className="h-4 w-6" />
      </div>
    </div>
  );
};

export { LaureateCard, LaureateCardSkeleton };
