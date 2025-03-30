import { Award, ChevronRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

import { Laureate } from "@/types/api";

type LaureateCardProps = {
  laureate: Laureate;
};

const LaureateCard = (props: LaureateCardProps) => {
  /**
   * @todo Refactor this function because it does not work everytime (Poland, ...)
   * @see https://dev.to/jorik/country-code-to-flag-emoji-a21
   * @see https://gist.github.com/incredimike/1469814
   */
  const getCountryFlag = (countryName?: string) => {
    const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });

    // prettier-ignore
    const countryCodes = [
      "AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG",
      "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB",
      "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BQ", "BA", "BW",
      "BV", "BR", "IO", "BN", "BG", "BF", "BI", "CV", "KH", "CM",
      "CA", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM",
      "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ",
      "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE",
      "SZ", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF",
      "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP",
      "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "VA", "HN",
      "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL",
      "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "KP", "KR",
      "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT",
      "LU", "MO", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ",
      "MR", "MU", "YT", "MX", "FM", "MD", "MC", "MN", "ME", "MS",
      "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "NC", "NZ", "NI",
      "NE", "NG", "NU", "NF", "MK", "MP", "NO", "OM", "PK", "PW",
      "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR",
      "QA", "RE", "RO", "RU", "RW", "SB", "SH", "KN", "LC", "MF",
      "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL",
      "SG", "SX", "SK", "SI", "SO", "ZA", "GS", "SS", "ES", "LK",
      "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV",
      "SD", "SR", "SJ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH",
      "UG", "UA", "AE", "GB", "US", "UM", "UY", "UZ", "VU", "VE",
      "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"
    ];

    for (const code of countryCodes) {
      if (regionNamesInEnglish.of(code) === countryName) {
        const codePoints = code
          .toUpperCase()
          .split("")
          .map((char) => 127397 + char.charCodeAt(0));

        return String.fromCodePoint(...codePoints);
      }
    }
  };

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
          <span className="text-sm text-muted-foreground line-clamp-1 capitalize">
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
