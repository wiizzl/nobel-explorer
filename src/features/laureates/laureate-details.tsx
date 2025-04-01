"use client";

import { useQuery } from "@tanstack/react-query";
import { Award, BookOpen, Calendar, ExternalLink, Globe, Link2, MapPin, User } from "lucide-react";
import Link from "next/link";

import { Loader } from "@/components/layout/loader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { formatDate, getCountryFlag } from "@/lib/utils";

import { fetchLaureate } from "@/api/laureate";

import { Laureate } from "@/types/api";

type LaureateDetailsProps = {
  id: Laureate["id"];
};

const LaureateDetails = (props: LaureateDetailsProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["laureate", { id: props.id }],
    queryFn: () => fetchLaureate(props.id),
  });

  const laureate = data?.[0];

  const flag = getCountryFlag(laureate?.birth?.place?.country?.en);
  const laureateName = laureate?.fullName?.en || laureate?.orgName?.en;
  const isOrg = !!laureate?.orgName?.en;

  return (
    <div className="space-y-4">
      {isLoading && <Loader />}

      {isError && <p className="text-destructive text-xl">Error: {error.message}</p>}

      {data && laureate && (
        <div>
          <div className="space-y-3">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-baseline gap-x-3.5">
                <h1 className="text-2xl line-clamp-1 md:text-4xl">{laureateName}</h1>
                {flag && (
                  <span title={laureate.birth?.place?.country?.en} className="text-xl">
                    {flag}
                  </span>
                )}
              </div>
              {laureate?.wikidata?.url && (
                <Button variant="outline" asChild>
                  <Link href={laureate.wikipedia?.english || "#"} target="_blank">
                    <BookOpen />
                    Wikipedia
                  </Link>
                </Button>
              )}
            </div>
            <div className="flex gap-x-2">
              <Badge variant="outline" className="text-sm">
                {isOrg ? (
                  <>
                    <Globe className="size-3.5" />
                    Organisation
                  </>
                ) : (
                  <>
                    <User className="size-3.5" />
                    Person
                  </>
                )}
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Calendar className="size-3.5" />
                {laureate.birth?.date?.split("-")[0] || laureate.founded?.date?.split("-")[0]}
              </Badge>
            </div>
            <div className="flex items-center text-muted-foreground gap-x-1">
              <MapPin className="size-4.5" />{" "}
              {laureate.birth?.place?.locationString?.en || laureate.founded?.place?.locationString?.en}
            </div>
            {!isOrg && (
              <div className="-mt-1">
                <Accordion type="single" collapsible>
                  <AccordionItem value="personal-information">
                    <AccordionTrigger>Display more information</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="w-full">
                          <CardHeader>
                            <CardTitle className="text-lg">Birth and Death information</CardTitle>
                          </CardHeader>
                          <CardContent className="flex justify-between">
                            <div className="text-muted-foreground space-y-2">
                              <p>Birth date :</p>
                              <p>Birth place :</p>
                              {laureate.death && (
                                <>
                                  {laureate.death.date && <p>Death date :</p>}
                                  {laureate.death.place?.locationString?.en && <p>Death place :</p>}
                                </>
                              )}
                            </div>
                            <div className="space-y-2">
                              <p>{formatDate(laureate.birth?.date)}</p>
                              <p>{laureate.birth?.place?.locationString?.en}</p>
                              {laureate.death && (
                                <>
                                  {laureate.death.date && <p>{formatDate(laureate.death.date)}</p>}
                                  {laureate.death.place?.locationString?.en && (
                                    <p>{laureate.death.place.locationString?.en}</p>
                                  )}
                                </>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="w-full">
                          <CardHeader>
                            <CardTitle className="text-lg">Other information</CardTitle>
                          </CardHeader>
                          <CardContent className="flex justify-between">
                            <div className="text-muted-foreground space-y-2">
                              <p>Gender :</p>
                            </div>
                            <div className="space-y-2">
                              <p className="capitalize">{laureate.gender}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}
          </div>
          <Separator className={isOrg ? "mt-3" : ""} />
          <div className="space-y-5 mt-4">
            {laureate?.nobelPrizes?.map((item, index) => (
              <Card key={index}>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-x-1.5 text-lg sm:text-xl">
                    <Award className="size-5 hidden sm:block" />
                    {item.categoryFullName?.en}
                  </CardTitle>
                  <CardDescription>Awarded on {formatDate(item.dateAwarded)}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <h2 className="text-sm text-muted-foreground">Motivation</h2>
                    <p className="italic text-sm md:text-lg">"{item.motivation?.en}"</p>
                  </div>
                  <div className="flex w-full justify-between sm:pr-25">
                    <div>
                      <h2 className="text-sm text-muted-foreground">Award Year</h2>
                      <p className="text-sm md:text-lg">{item.awardYear}</p>
                    </div>
                    <div>
                      <h2 className="text-sm text-muted-foreground">Prize Portion</h2>
                      <p className="text-sm md:text-lg">{item.portion} of the prize</p>
                    </div>
                    <div>
                      <h2 className="text-sm text-muted-foreground">Prize Amount</h2>
                      <p className="text-sm md:text-lg">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: 0,
                        }).format(item.prizeAmount || 0)}
                      </p>
                    </div>
                  </div>
                  {item.affiliations && item.affiliations.length > 0 && (
                    <div>
                      <h2 className="text-sm text-muted-foreground">Affiliation</h2>
                      <div className="flex gap-x-2 text-sm md:text-base">
                        {item.affiliations.map((affiliation, index) => (
                          <p key={index}>
                            {affiliation.name?.en} - {affiliation.locationString?.en}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-center md:justify-end gap-x-2 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/prizes/${item.category?.en?.slice(0, 3).toLowerCase()}?year=${item.awardYear}`}>
                      <Link2 />
                      Open details
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={item.links?.[2].href || "#"} target="_blank">
                      <ExternalLink />
                      Open in Nobel Prize website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { LaureateDetails };
