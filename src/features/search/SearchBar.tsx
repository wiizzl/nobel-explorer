"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";

import { fetchData } from "@/features/data/data.action";
import { Laureates, LaureatesSchema } from "@/features/data/schemas/laureate.schema";
import { Prizes, PrizesSchema } from "@/features/data/schemas/prize.schema";

const SearchBar = () => {
  const [, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  const filterLaureates = (laureatesData: Laureates, searchValue: string) => {
    const parsedLaureates = LaureatesSchema.parse(laureatesData);
    const searchWords = searchValue.split(" ");

    return parsedLaureates.laureates.filter((laureate) => {
      const fullName = [laureate.firstname, laureate.surname]
        .filter(Boolean)
        .map((name) => (name ?? "").toLowerCase())
        .join(" ");
      return searchWords.every((word) => fullName.includes(word));
    });
  };

  const filterPrizes = (prizesData: Prizes, searchValue: string) => {
    const parsedPrizes = PrizesSchema.parse(prizesData);
    return parsedPrizes.prizes.filter((prize) => prize.year.includes(searchValue));
  };

  const handleInputChange = async (value: string) => {
    const trimmedValue = value.trim().toLowerCase();
    setInputValue(value);

    if (!trimmedValue) return; // Avoid unnecessary API calls for empty input

    startTransition(async () => {
      try {
        const [laureatesData, prizesData] = await Promise.all([fetchData("laureate"), fetchData("prize")]);

        const filteredLaureates = filterLaureates(laureatesData, trimmedValue);
        const filteredPrizes = filterPrizes(prizesData, trimmedValue);

        if (filteredLaureates.length === 0 && filteredPrizes.length === 0) {
          toast.info("No results found.");
        }

        console.log("Filtered Laureates:", filteredLaureates);
        console.log("Filtered Prizes:", filteredPrizes);
      } catch (error) {
        console.error("Fetching Error:", error);
        toast.error("Error while searching for data. Please try later.");
      }
    });
  };

  return (
    <Input
      placeholder="Search for a laureate or a year..."
      value={inputValue}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};

export { SearchBar };
