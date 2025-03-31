/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Successful responses for Laureates */
export interface LaureatesResult {
  /** Model containing a list of Laureates */
  laureates?: Laureates;
  meta?: LaureatesMeta;
  links?: Links[];
}

/** Successful response for laureate/{ID} */
export interface LaureateResult {
  /** Laureate's full information and their respectives awarded Prizes */
  laureate?: Laureate;
}

/** Successful response for Nobel Prize search */
export interface NobelPrizesResult {
  nobelPrizes?: NobelPrize[];
  meta?: NobelPrizesMeta;
  links?: Links[];
}

/** Successful response for Nobel Prize search */
export interface NobelPrizeResult {
  /** Model containing Nobel Prize information */
  nobelPrize?: NobelPrize;
}

/** Model containing Nobel Prize information */
export interface NobelPrize {
  /** @example 1989 */
  awardYear?: number;
  category?: Translation;
  categoryFullName?: Translation;
  /**
   * @format date
   * @example "2015-11-12"
   */
  dateAwarded?: string;
  /**
   * Prize amount given at the year of the award
   * @example 1000000
   */
  prizeAmount?: number;
  /**
   * Prize amount adjusted according to Index number yearly average
   * @example 1000000
   */
  prizeAmountAdjusted?: number;
  topMotivation?: Translation;
  laureates?: LaureateBasic[];
}

/** Description of the Nobel Prize by Laureate */
export interface NobelPrizePerLaureate {
  /** @example 1989 */
  awardYear?: number;
  category?: Translation;
  categoryFullName?: Translation;
  /** @default "1" */
  sortOrder?: "1" | "2" | "3";
  /** @default "1" */
  portion?: "1" | "1/2" | "1/3" | "1/4";
  /**
   * @format date
   * @example "1989-04-25"
   */
  dateAwarded?: string;
  /** @example "received" */
  prizeStatus?: "received" | "declined" | "restricted";
  motivation?: Translation;
  /**
   * Prize amount given at the year of the award
   * @example 1000000
   */
  prizeAmount?: number;
  /**
   * Prize amount adjusted according to Index number yearly average
   * @example 1000000
   */
  prizeAmountAdjusted?: number;
  affiliations?: Entity[];
  residences?: Residence[];
  links?: ItemLinks[];
}

/** Short information about the Laureate */
export interface LaureateBasic {
  /**
   * @min 1
   * @example 34
   */
  id?: number;
  name?: Translation;
  /** @default "1" */
  portion?: "1" | "1/2" | "1/3" | "1/4";
  /** @default "1" */
  sortOrder?: "1" | "2" | "3";
  motivation?: Translation;
  links?: ItemLinks[];
}

/** Laureate's full information and their respective awarded Prizes */
export interface Laureate {
  /**
   * @min 1
   * @example 456
   */
  id?: number;

  // Person-specific fields
  knownName?: Translation;
  givenName?: Translation;
  familyName?: Translation;
  fullName?: Translation;
  /**
   * Short slug version of family name used in filenames
   * @example "filename"
   */
  filename?: string;
  /**
   * Only for some Laureates in Literature category
   * @example "Penname"
   */
  penname?: string;
  /** @example "female" */
  gender?: "female" | "male";
  birth?: Event;
  death?: Event;

  // Organization-specific fields
  orgName?: Translation;
  /** @example "Native name" */
  nativeName?: string;
  /** @example "Acronym" */
  acronym?: string;
  founded?: Event;
  dissolution?: Event;
  /** City and county at the time, citynow and countrynow are as up-to-date names. Continent as geonames.org standard. */
  headquarters?: Location;

  // Other fields
  wikipedia?: LaureateWikipedia;
  wikidata?: LaureateWikidata;
  sameAs?: Urls[];
  links?: ItemLinks[];
  nobelPrizes?: NobelPrizePerLaureate[];
}

/** Unified details for both persons and organizations */
export interface LaureateDetails {
  // Person-specific fields
  knownName?: Translation;
  givenName?: Translation;
  familyName?: Translation;
  fullName?: Translation;
  /**
   * Short slug version of family name used in filenames
   * @example "filename"
   */
  filename?: string;
  /**
   * Only for some Laureates in Literature category
   * @example "Penname"
   */
  penname?: string;
  /** @example "female" */
  gender?: "female" | "male";
  birth?: Event;
  death?: Event;

  // Organization-specific fields
  orgName?: Translation;
  /** @example "Native name" */
  nativeName?: string;
  /** @example "Acronym" */
  acronym?: string;
  founded?: Event;
  dissolution?: Event;
  /** City and county at the time, citynow and countrynow are as up-to-date names. Continent as geonames.org standard. */
  headquarters?: Location;
}

/** Model containing a list of Laureates */
export type Laureates = Laureate[];

/** City and county at the time, citynow and countrynow are as up to date names. Continent as geonames.org standard. LocationString is the combination of city, country, citynow and country now. */
export interface Location {
  city?: Translation;
  country?: Translation;
  cityNow?: TranslationWithSameas;
  countryNow?: TranslationWithSameas;
  continent?: Translation;
  locationString?: Translation;
}

export interface Event {
  /**
   * @format date
   * @example "1989-04-25"
   */
  date?: string;
  /** City and county at the time, citynow and countrynow are as up to date names. Continent as geonames.org standard. LocationString is the combination of city, country, citynow and country now. */
  place?: Location;
}

/** Fullname is the combination of given and family name */
export interface Person {
  knownName?: Translation;
  givenName?: Translation;
  familyName?: Translation;
  fullName?: Translation;
  /**
   * Short slug version of familyname used in filenames
   * @example "filename"
   */
  filename?: string;
  /**
   * Only for some Laureates in Literature category
   * @example "Penname"
   */
  penname?: string;
  /** @example "female" */
  gender?: "female" | "male";
  birth?: Event;
  death?: Event;
}

export interface NobelPrizesMeta {
  /** @format int32 */
  offset?: number;
  /**
   * @format int32
   * @min 1
   */
  limit?: number;
  /** @format int32 */
  nobelPrizeYear?: number;
  /** @format int32 */
  yearTo?: number;
  /** @example "eco" */
  nobelPrizeCategory?: string;
  /** @format int32 */
  count?: number;
}

export interface LaureatesMeta {
  /** @format int32 */
  offset?: number;
  /** @format int32 */
  limit?: number;
  sort?: string;
  /** @format int32 */
  ID?: number;
  name?: string;
  gender?: string;
  motivation?: string;
  affiliation?: string;
  residence?: string;
  birthDate?: string;
  birthDateTo?: string;
  deathDate?: string;
  deathDateTo?: string;
  foundedDate?: string;
  birthCity?: string;
  birthCountry?: string;
  birthContinent?: string;
  deathCity?: string;
  deathCountry?: string;
  deathContinent?: string;
  foundedCity?: string;
  foundedCountry?: string;
  foundedContinent?: string;
  headquartersCity?: string;
  headquartersCountry?: string;
  headquartersContinent?: string;
  nobelPrizeYear?: number;
  yearTo?: number;
  nobelPrizeCategory?: string;
  /** @format int32 */
  count?: number;
}

export interface Links {
  first?: string;
  prev?: string;
  self?: string;
  next?: string;
  last?: string;
}

export interface ItemLinks {
  rel?: string;
  href?: string;
  action?: string;
  types?: string;
}

export interface Organization {
  orgName?: Translation;
  /** @example "Native name" */
  nativeName?: string;
  /** @example "Acronym" */
  acronym?: string;
  founded?: Event;
  dissolution?: Event;
  /** City and county at the time, citynow and countrynow are as up to date names. Continent as geonames.org standard. LocationString is the combination of city, country, citynow and country now. */
  headquarters?: Location;
}

export interface Entity {
  name?: Translation;
  nameNow?: Translation;
  /** @example "Le romenic universitet" */
  nativeName?: string;
  city?: Translation;
  country?: Translation;
  cityNow?: TranslationWithSameas;
  countryNow?: TranslationWithSameas;
  locationString?: Translation;
}

export interface Residence {
  city?: Translation;
  country?: Translation;
  cityNow?: TranslationWithSameas;
  countryNow?: TranslationWithSameas;
  locationString?: Translation;
}

export interface Translation {
  /** @example "English" */
  en?: string;
  /** @example "Svenska" */
  se?: string;
  /** @example "Norsk" */
  false?: string;
}

export interface TranslationWithSameas {
  /** @example "English" */
  en?: string;
  /** @example "Svenska" */
  se?: string;
  /** @example "Norsk" */
  false?: string;
  sameAs?: Urls[];
}

/** @example "https://" */
export type Urls = string;

export interface Error {
  /** @example "404" */
  code: string;
  /** @example "There is not Laureate born that date" */
  message: string;
}

export interface LaureateWikipedia {
  /**
   * Wikipedia url slug
   * @example "slug"
   */
  slug?: string;
  /**
   * URL to english wikipedia page
   * @example "https://en.wikipedia.org/wiki/"
   */
  english?: string;
}

export interface LaureateWikidata {
  /**
   * Wikidata id
   * @example "id"
   */
  id?: string;
  /**
   * URL to wikidata entry
   * @example "https://www.wikidata.org/wiki/"
   */
  url?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://api.nobelprize.org/2.1";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Nobel Prize Master Data
 * @version 2.1
 * @license CC0 (https://creativecommons.org/publicdomain/zero/1.0/)
 * @baseUrl http://api.nobelprize.org/2.1
 *
 * Information about the Nobel Prizes and the Nobel Prize Laureates
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  nobelPrizes = {
    /**
     * @description Obtain information about all Nobel Prizes or search for a specific set of Nobel Prizes. Note that not all information about the Laureates are provided in the output, as a request of making this endpoints response lighter. Call the laureates endpoint for full information.
     *
     * @name NobelPrizesList
     * @request GET:/nobelPrizes
     */
    nobelPrizesList: (
      query?: {
        /**
         * The number of items to skip before starting to collect the result set
         * @min 1
         */
        offset?: number;
        /**
         * The numbers of items to return
         * @min 1
         */
        limit?: number;
        /** The sort order (result is sorted by year) */
        sort?: "asc" | "desc";
        /**
         * Year the Nobel Prize was awarded, in the form of YYYY
         * @min 1901
         */
        nobelPrizeYear?: number;
        /**
         * Used in combination with nobelPrizeYear to specify a range of years to return results from. NobelPrizeYear is required
         * @min 1901
         */
        yearTo?: number;
        /** Nobel Prize category */
        nobelPrizeCategory?: "che" | "eco" | "lit" | "pea" | "phy" | "med";
        /** Format of output (Default = json) */
        format?: "json" | "csv";
        /** Language of output if format is csv (Default = en) */
        csvLang?: "en" | "se" | "no";
      },
      params: RequestParams = {},
    ) =>
      this.request<NobelPrizesResult, Error>({
        path: `/nobelPrizes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  nobelPrize = {
    /**
     * @description Obtain information about one specific Nobel Prize. Used as unique identifier for links.
     *
     * @name NobelPrizeDetail
     * @request GET:/nobelPrize/{category}/{year}
     */
    nobelPrizeDetail: (
      category: "che" | "eco" | "lit" | "pea" | "phy" | "med",
      year: number,
      params: RequestParams = {},
    ) =>
      this.request<NobelPrizeResult, Error>({
        path: `/nobelPrize/${category}/${year}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  laureates = {
    /**
     * @description Obtain information about Nobel Prize Laureates (persons and organizations) and their Nobel Prize(s), or search for a set of Laureates. Returns full information about the Laureates and Prizes.
     *
     * @name LaureatesList
     * @request GET:/laureates
     */
    laureatesList: (
      query?: {
        /**
         * The number of items to skip before starting to collect the result set
         * @min 1
         */
        offset?: number;
        /**
         * The numbers of items to return
         * @min 1
         */
        limit?: number;
        /** Sort order, result is sorted alphabetically by known name */
        sort?: "asc" | "desc";
        /**
         * Numeric ID of the Laureate (unique key for each Nobel Laureate)
         * @min 1
         */
        ID?: number;
        /** Laureate's name (person or organization) */
        name?: string;
        /** Laureate's gender if person */
        gender?: "female" | "male" | "other";
        /** Text in Laureate's motivation */
        motivation?: string;
        /** Affiliation(s) for the Laureate at the time of the award */
        affiliation?: string;
        /** Laureate's place of residence at the time is awarded */
        residence?: string;
        /**
         * Birth date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
         * @format date
         */
        birthDate?: number;
        /**
         * Return Laureates born within a range of years between birthDate and birthDateTo. BirthDate field is required
         * @format date
         */
        birthDateTo?: string;
        /**
         * Death date of Laureate if Person. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
         * @format date
         */
        deathDate?: string;
        /**
         * Return Laureates deceased within a range of years between deathDate and deathhDateTo. DeathDate field is required
         * @format date
         */
        deathDateTo?: number;
        /**
         * Founding date of Laureate if Organization. Search by year in the form of YYYY, by month -MM-, by day -DD or YYYY-MM-DD
         * @format date
         */
        foundedDate?: string;
        /**
         * Laureate's city of birth if person
         * @format utf-8
         */
        birthCity?: string;
        /**
         * Laureate's country of birth if person
         * @format utf-8
         */
        birthCountry?: string;
        /** Laureate's continent of birth if person. Continent as in geonames.org standard */
        birthContinent?: "Africa" | "Asia" | "Europe" | "North America" | "Oceania" | "South America" | "Antarctica";
        /**
         * Laureate's city of death if person
         * @format utf-8
         */
        deathCity?: string;
        /**
         * Laureate's country of death if person
         * @format utf-8
         */
        deathCountry?: string;
        /** Laureate's continent of death if person. Continent as in geonames.org standard */
        deathContinent?: "Africa" | "Asia" | "Europe" | "North America" | "Oceania" | "South America" | "Antarctica";
        /**
         * City where organization was founded
         * @format utf-8
         */
        foundedCity?: string;
        /**
         * Country where organization was founded
         * @format utf-8
         */
        foundedCountry?: string;
        /** Continent where organization was founded. Continent as in geonames.org standard */
        foundedContinent?: "Africa" | "Asia" | "Europe" | "North America" | "Oceania" | "South America" | "Antarctica";
        /**
         * City where organization's hearquarters are
         * @format utf-8
         */
        HeadquartersCity?: string;
        /**
         * Country where organization's hearquarters are
         * @format utf-8
         */
        HeadquartersCountry?: string;
        /** Continent where organization's hearquarters are. Continent as in geonames.org standard */
        HeadquartersContinent?:
          | "Africa"
          | "Asia"
          | "Europe"
          | "North America"
          | "Oceania"
          | "South America"
          | "Antarctica";
        /**
         * The year the Nobel Prize was awarded, in the form of YYYY
         * @min 1901
         */
        nobelPrizeYear?: number;
        /**
         * Used in combination with nobelPrizeYear to specify a range of years between nobelPrizeYear and YearTo. nobelPrizeYear is required
         * @min 1901
         */
        yearTo?: number;
        /** Nobel Prize category. */
        nobelPrizeCategory?: "che" | "eco" | "lit" | "pea" | "phy" | "med";
        /** Output format (Default = json). */
        format?: "json" | "csv";
        /** Language if output format is csv (default = en). */
        csvLang?: "en" | "se" | "no";
      },
      params: RequestParams = {},
    ) =>
      this.request<LaureatesResult, Error>({
        path: `/laureates`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  laureate = {
    /**
     * @description Obtain information about an specific Nobel Prize Laureate. Used as unique identifier.
     *
     * @name LaureateDetail
     * @request GET:/laureate/{laureateID}
     */
    laureateDetail: (laureateId: number, params: RequestParams = {}) =>
      this.request<object, Error>({
        path: `/laureate/${laureateId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
