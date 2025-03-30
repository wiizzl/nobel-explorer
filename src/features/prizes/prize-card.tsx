"use client";

import { ChevronRight, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { NobelPrize } from "@/types/api";

type PrizeCardProps = {
  prize: NobelPrize;
};

const PrizeCard = (props: PrizeCardProps) => {
  const laureateCount = props.prize.laureates?.length || 0;

  return (
    <Card className="h-full transition-transform hover:scale-[1.01]">
      <CardHeader>
        <div className="flex justify-between items-end">
          <CardTitle className="text-xl line-clamp-1">{props.prize.category?.en}</CardTitle>
          <Badge variant="outline">{props.prize.awardYear}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow justify-between items-end">
        <div className="flex items-center gap-1.5">
          <Users className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {laureateCount} laureate{laureateCount > 1 ? "s" : ""}
          </span>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </CardContent>
    </Card>
  );
};

export { PrizeCard };
