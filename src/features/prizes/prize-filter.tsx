"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { usePrizesFilters } from "@/hooks/filters";

type PrizeFilterProps = {
  clearFilters: () => void;
};

const PrizeFilter = (props: PrizeFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = usePrizesFilters();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search prizes (year)"
            value={filters.nobelPrizeYear}
            onChange={(e) => setFilters({ nobelPrizeYear: e.target.value })}
            className="px-10"
          />
          {filters.nobelPrizeYear && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 size-7 -translate-y-1/2 text-muted-foreground"
              onClick={() => setFilters({ nobelPrizeYear: "" })}
            >
              <X className="size-4" />
            </Button>
          )}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="ml-2">
              <SlidersHorizontal className="size-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filter Prizes</SheetTitle>
              <SheetDescription>Narrow down the prizes based on different criteria</SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="overflow-y-auto space-y-5 no-scrollbar">
              <div className="space-y-2">
                <Label htmlFor="sort-filter">Sort (year)</Label>
                <Select value={filters.sort} onValueChange={(value) => setFilters({ sort: value })}>
                  <SelectTrigger id="sort-filter">
                    <SelectValue placeholder="Descending" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desc">Descending</SelectItem>
                    <SelectItem value="asc">Ascending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year-to-filter">Year To</Label>
                <Input
                  type="number"
                  id="year-to-filter"
                  placeholder="Enter year"
                  value={filters.yearTo}
                  onChange={(e) => setFilters({ yearTo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nobel-prize-category-filter">Nobel Prize Category</Label>
                <Select
                  value={filters.nobelPrizeCategory}
                  onValueChange={(value) => setFilters({ nobelPrizeCategory: value })}
                >
                  <SelectTrigger id="nobel-prize-category-filter">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="che">Chemistry</SelectItem>
                    <SelectItem value="eco">Economics</SelectItem>
                    <SelectItem value="lit">Literature</SelectItem>
                    <SelectItem value="pea">Peace</SelectItem>
                    <SelectItem value="phy">Physics</SelectItem>
                    <SelectItem value="med">Medicine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <Button variant="outline" onClick={props.clearFilters}>
                Clear all
              </Button>
              <Button onClick={() => setIsOpen(false)}>Apply Filters</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export { PrizeFilter };
