import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Laureate } from "@/features/data/schemas/laureate.schema";
import { Award, ChevronRight } from "lucide-react";

type LaureateCardProps = {
  laureateData: Laureate;
};

const LaureateCard = (props: LaureateCardProps) => {
  const latestPrize = props.laureateData.prizes[0];

  /**
   * @see https://dev.to/jorik/country-code-to-flag-emoji-a21
   */
  const getCountryFlag = (countryCode?: string) => {
    if (!countryCode) return "";

    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));

    return String.fromCodePoint(...codePoints);
  };

  const flag = getCountryFlag(props.laureateData.bornCountryCode);

  return (
    <Card className="h-full transition-transform group hover:scale-[1.01]">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle
            title={`${props.laureateData.firstname} ${props.laureateData.surname || ""}`}
            className="text-xl line-clamp-1"
          >
            {props.laureateData.firstname} {props.laureateData.surname}
          </CardTitle>
          {flag && <span title={props.laureateData.bornCountry}>{flag}</span>}
        </div>
      </CardHeader>
      <CardContent className="flex flex-grow justify-between items-end">
        <div className="flex items-center gap-2">
          <Award className="size-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground line-clamp-1">
            Nobel Prize in{" "}
            <Badge variant="outline" className="capitalize">
              {latestPrize.category}
            </Badge>{" "}
            {latestPrize.year}
          </span>
          {props.laureateData.prizes.length > 1 && (
            <Badge variant="outline" className="ml-0.5 text-xs">
              +{props.laureateData.prizes.length - 1}
            </Badge>
          )}
        </div>
        <ChevronRight className="size-4 text-muted-foreground" />
      </CardContent>
    </Card>
  );
};

export { LaureateCard };
