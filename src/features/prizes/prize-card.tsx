"use client";

import { Calendar, ChevronRight, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { NobelPrize } from "@/types/api";

type PrizeCardProps = {
  prize: NobelPrize;
};

const PrizeCard = (props: PrizeCardProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return null;

    return new Intl.DateTimeFormat("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };

  const formattedDate = formatDate(props.prize.dateAwarded);
  const laureateCount = props.prize.laureates?.length || 0;

  return (
    <Card className="h-full transition-transform hover:scale-[1.01]">
      <CardHeader>
        <CardTitle className="text-xl">
          {props.prize.category?.en} - {props.prize.awardYear}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-grow justify-between items-end">
        <div>
          {formattedDate && (
            <div className="flex items-center gap-1.5">
              <Calendar className="size-4 text-muted-foreground" />
              <span className="text-muted-foreground">{formattedDate}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Users className="size-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              {laureateCount} laureate{laureateCount > 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </CardContent>
    </Card>
  );
};

export { PrizeCard };
