"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { useLaureatesFilters } from "@/hooks/filters";

type LaureateFilterProps = {
  clearFilters: () => void;
};

const LaureateFilter = (props: LaureateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const [filters, setFilters] = useLaureatesFilters();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search laureates (name)"
            value={filters.name}
            onChange={(e) => setFilters({ name: e.target.value })}
            className="px-10"
          />
          {filters.name && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 size-7 -translate-y-1/2 text-muted-foreground"
              onClick={() => setFilters({ name: "" })}
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
                <Label htmlFor="sort-filter">Sort (name)</Label>
                <Select value={filters.sort} onValueChange={(value) => setFilters({ sort: value })}>
                  <SelectTrigger id="sort-filter">
                    <SelectValue placeholder="Ascending" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asc">Ascending</SelectItem>
                    <SelectItem value="desc">Descending</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender-filter">Gender</Label>
                <Select value={filters.gender} onValueChange={(value) => setFilters({ gender: value })}>
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

              <div className="space-y-2">
                <Label htmlFor="nobel-prize-year-filter">Nobel Prize Year</Label>
                <Input
                  type="number"
                  id="nobel-prize-year-filter"
                  placeholder="Enter year..."
                  value={filters.nobelPrizeYear}
                  onChange={(e) => setFilters({ nobelPrizeYear: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-date-filter">Birth Year</Label>
                <Input
                  type="number"
                  id="birth-date-filter"
                  placeholder="Enter year..."
                  value={filters.birthDate}
                  onChange={(e) => setFilters({ birthDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-date-to-filter">Birth Year To</Label>
                <Input
                  type="number"
                  id="birth-date-to-filter"
                  placeholder="Enter year..."
                  value={filters.birthDateTo}
                  onChange={(e) => setFilters({ birthDateTo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-date-filter">Death Year</Label>
                <Input
                  type="number"
                  id="death-date-filter"
                  placeholder="Enter year..."
                  value={filters.deathDate}
                  onChange={(e) => setFilters({ deathDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-date-to-filter">Death Year To</Label>
                <Input
                  type="number"
                  id="death-date-to-filter"
                  placeholder="Enter year..."
                  value={filters.deathDateTo}
                  onChange={(e) => setFilters({ deathDateTo: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded-date-filter">Founded Year</Label>
                <Input
                  type="text"
                  id="founded-date-filter"
                  placeholder="Enter year..."
                  value={filters.foundedDate}
                  onChange={(e) => setFilters({ foundedDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-city-filter">Birth City</Label>
                <Input
                  type="text"
                  id="birth-city-filter"
                  placeholder="Enter city..."
                  value={filters.birthCity}
                  onChange={(e) => setFilters({ birthCity: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-city-filter">Death City</Label>
                <Input
                  type="text"
                  id="death-city-filter"
                  placeholder="Enter city..."
                  value={filters.deathCity}
                  onChange={(e) => setFilters({ deathCity: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded-city-filter">Founded City</Label>
                <Input
                  type="text"
                  id="founded-city-filter"
                  placeholder="Enter city..."
                  value={filters.foundedCity}
                  onChange={(e) => setFilters({ foundedCity: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-country-filter">Birth Country</Label>
                <Input
                  type="text"
                  id="birth-country-filter"
                  placeholder="Enter country..."
                  value={filters.birthCountry}
                  onChange={(e) => setFilters({ birthCountry: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-country-filter">Death Country</Label>
                <Input
                  type="text"
                  id="death-country-filter"
                  placeholder="Enter country..."
                  value={filters.deathCountry}
                  onChange={(e) => setFilters({ deathCountry: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded-country-filter">Founded Country</Label>
                <Input
                  type="text"
                  id="founded-country-filter"
                  placeholder="Enter country..."
                  value={filters.foundedCountry}
                  onChange={(e) => setFilters({ foundedCountry: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="birth-continent-filter">Birth Continent</Label>
                <Input
                  type="text"
                  id="birth-continent-filter"
                  placeholder="Enter continent..."
                  value={filters.birthContinent}
                  onChange={(e) => setFilters({ birthContinent: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="death-continent-filter">Death Continent</Label>
                <Input
                  type="text"
                  id="death-continent-filter"
                  placeholder="Enter continent..."
                  value={filters.deathContinent}
                  onChange={(e) => setFilters({ deathContinent: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="founded-continent-filter">Founded Continent</Label>
                <Input
                  type="text"
                  id="founded-continent-filter"
                  placeholder="Enter continent..."
                  value={filters.foundedContinent}
                  onChange={(e) => setFilters({ foundedContinent: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation-filter">Motivation</Label>
                <Input
                  type="text"
                  id="motivation-filter"
                  placeholder="Enter motivation..."
                  value={filters.motivation}
                  onChange={(e) => setFilters({ motivation: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="affiliation-filter">Affiliation</Label>
                <Input
                  type="text"
                  id="affiliation-filter"
                  placeholder="Enter affiliation..."
                  value={filters.affiliation}
                  onChange={(e) => setFilters({ affiliation: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="residence-filter">Residence</Label>
                <Input
                  type="text"
                  id="residence-filter"
                  placeholder="Enter residence..."
                  value={filters.residence}
                  onChange={(e) => setFilters({ residence: e.target.value })}
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
