"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type LaureateFilterProps = {
  filters: {
    page: number;
    pageSize: number;
    name: string;
    sort: string;
    gender: string;
    motivation: string;
    affiliation: string;
    residence: string;
    birthDate: string;
    deathDate: string;
    birthDateTo: string;
    deathDateTo: string;
    foundedDate: string;
    birthCity: string;
    deathCity: string;
    birthCountry: string;
    deathCountry: string;
    birthContinent: string;
    deathContinent: string;
    foundedCity: string;
    foundedCountry: string;
    foundedContinent: string;
    nobelPrizeYear: string;
    yearTo: string;
    nobelPrizeCategory: string;
  };
  setFilters: {
    setPage: (value: number) => void;
    setPageSize: (value: number) => void;
    setName: (value: string) => void;
    setSort: (value: string) => void;
    setGender: (value: string) => void;
    setMotivation: (value: string) => void;
    setAffiliation: (value: string) => void;
    setResidence: (value: string) => void;
    setBirthDate: (value: string) => void;
    setDeathDate: (value: string) => void;
    setBirthDateTo: (value: string) => void;
    setDeathDateTo: (value: string) => void;
    setFoundedDate: (value: string) => void;
    setBirthCity: (value: string) => void;
    setDeathCity: (value: string) => void;
    setBirthCountry: (value: string) => void;
    setDeathCountry: (value: string) => void;
    setBirthContinent: (value: string) => void;
    setDeathContinent: (value: string) => void;
    setFoundedCity: (value: string) => void;
    setFoundedCountry: (value: string) => void;
    setFoundedContinent: (value: string) => void;
    setNobelPrizeYear: (value: string) => void;
    setYearTo: (value: string) => void;
    setNobelPrizeCategory: (value: string) => void;
  };
  clearFilters: () => void;
};

const LaureateFilter = (props: LaureateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search laureates..."
            value={props.filters.name}
            onChange={(e) => props.setFilters.setName(e.target.value)}
            className="px-10"
          />
          {props.filters.name && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 size-7 -translate-y-1/2 text-muted-foreground"
              onClick={() => props.setFilters.setName("")}
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
              <SheetTitle>Filter Laureates</SheetTitle>
              <SheetDescription>Narrow down the laureates based on different criteria</SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="overflow-y-auto space-y-5 no-scrollbar">
              <div className="space-y-2">
                <Label htmlFor="gender-filter">Gender</Label>
                <Select value={props.filters.gender} onValueChange={(value) => props.setFilters.setGender(value)}>
                  <SelectTrigger id="gender-filter">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-date-filter">Birth Date</Label>
                <Input
                  type="number"
                  id="birth-date-filter"
                  placeholder="Enter year"
                  value={props.filters.birthDate}
                  onChange={(e) => props.setFilters.setBirthDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-date-to-filter">Birth Date To</Label>
                <Input
                  type="number"
                  id="birth-date-to-filter"
                  placeholder="Enter year"
                  value={props.filters.birthDateTo}
                  onChange={(e) => props.setFilters.setBirthDateTo(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-date-filter">Death Year</Label>
                <Input
                  type="number"
                  id="death-date-filter"
                  placeholder="Enter year"
                  value={props.filters.deathDate}
                  onChange={(e) => props.setFilters.setDeathDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-date-to-filter">Death Year To</Label>
                <Input
                  type="number"
                  id="death-date-to-filter"
                  placeholder="Enter year"
                  value={props.filters.deathDateTo}
                  onChange={(e) => props.setFilters.setDeathDateTo(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nobel-prize-year-filter">Nobel Prize Year</Label>
                <Input
                  type="number"
                  id="nobel-prize-year-filter"
                  placeholder="Enter year"
                  value={props.filters.nobelPrizeYear}
                  onChange={(e) => props.setFilters.setNobelPrizeYear(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nobel-prize-category-filter">Nobel Prize Category</Label>
                <Select
                  value={props.filters.nobelPrizeCategory}
                  onValueChange={(value) => props.setFilters.setNobelPrizeCategory(value)}
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

              <div className="space-y-2">
                <Label htmlFor="motivation-filter">Motivation</Label>
                <Input
                  type="text"
                  id="motivation-filter"
                  placeholder="Enter motivation text..."
                  value={props.filters.motivation}
                  onChange={(e) => props.setFilters.setMotivation(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="affiliation-filter">Affiliation</Label>
                <Input
                  type="text"
                  id="affiliation-filter"
                  placeholder="Enter affiliation..."
                  value={props.filters.affiliation}
                  onChange={(e) => props.setFilters.setAffiliation(e.target.value)}
                />
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

export { LaureateFilter };
