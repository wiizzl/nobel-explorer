"use client";

import { useQuery } from "@tanstack/react-query";
import { Award, Calendar, Link2 } from "lucide-react";
import Link from "next/link";

import { Loader } from "@/components/layout/loader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { formatDate, formatPrice } from "@/lib/utils";

import { fetchPrize } from "@/api/prize";

import { NobelPrize } from "@/types/api";

type PrizeDetailsProps = {
  category: string;
  year: NobelPrize["awardYear"];
};

const PrizeDetails = (props: PrizeDetailsProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["prize", { category: props.category, year: props.year }],
    queryFn: () => fetchPrize(props.category, props.year),
  });

  const prize = data?.[0];

  return (
    <div className="space-y-4">
      {isLoading && <Loader />}

      {isError && <p className="text-destructive text-xl">Error: {error.message}</p>}

      {data && prize && (
        <div>
          <div className="space-y-3">
            <h1 className="text-2xl line-clamp-1 md:text-4xl">{prize.categoryFullName?.en}</h1>
            <Badge variant="outline" className="text-sm">
              <Calendar className="size-3.5" />
              {prize.awardYear}
            </Badge>
            <div className="-mt-1">
              <Accordion type="single" collapsible>
                <AccordionItem value="personal-information">
                  <AccordionTrigger>Display more information</AccordionTrigger>
                  <AccordionContent>
                    <Card className="w-full md:w-1/2">
                      <CardHeader>
                        <CardTitle className="text-lg">Prize information</CardTitle>
                      </CardHeader>
                      <CardContent className="flex justify-between">
                        <div className="text-muted-foreground space-y-2">
                          <p>Award date :</p>
                          <p>Prize amount :</p>
                          <p>Number of laureate(s) :</p>
                        </div>
                        <div className="space-y-2">
                          <p>{formatDate(prize.dateAwarded)}</p>
                          <p>{formatPrice(prize.prizeAmount)}</p>
                          <p>{prize.laureates?.length}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <Separator />
          <div className="space-y-5 mt-4">
            {prize.laureates?.map((item, index) => (
              <Card key={index}>
                <CardHeader className="border-b">
                  <CardTitle className="flex items-center gap-x-1.5 text-lg sm:text-xl">
                    <Award className="size-5 hidden sm:block" />
                    {/* @ts-expect-error TODO: invalid type */}
                    {item?.fullName?.en || laureate?.orgName?.en}
                  </CardTitle>
                  <CardDescription>Portion : {item.portion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h2 className="text-sm text-muted-foreground">Motivation</h2>
                  <p className="italic text-sm md:text-lg">"{item.motivation?.en}"</p>
                </CardContent>
                <CardFooter className="flex justify-center md:justify-end gap-x-2 border-t">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/laureates/${item.id}`}>
                      <Link2 />
                      Open details
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

export { PrizeDetails };
