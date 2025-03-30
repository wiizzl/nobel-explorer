"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

type LaureateFilterProps = {
  filters: {
    name: string;
    gender: string;
  };
  setFilters: {
    setName: (value: string) => void;
    setGender: (value: string) => void;
  };
  clearFilters: () => void;
  applySearch: () => void;
  isPending: boolean;
};

const LaureateFilter = (props: LaureateFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search laureates by name..."
          value={props.filters.name}
          onChange={(e) => props.setFilters.setName(e.target.value)}
        />

        <Button variant="outline" className="ml-2" onClick={props.applySearch} disabled={props.isPending}>
          <Search className="size-4" />
          Search
        </Button>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="ml-2" disabled={props.isPending}>
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
            <div className="space-y-5">
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

export { LaureateFilter };
