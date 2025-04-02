import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

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

const formatDate = (dateString?: string) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const formatPrice = (price?: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price || 0);
};

export { cn, formatDate, formatPrice, getCountryFlag };
