"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";

import { fetchData } from "@/features/data/data.action";
import { LaureatesSchema } from "@/features/data/schemas/laureate.schema";
import { PrizesSchema } from "@/features/data/schemas/prize.schema";

const SearchBar = () => {
  const [, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value: string) => {
    const trimmedValue = value.trim().toLowerCase();
    setInputValue(value);

    if (!trimmedValue) return; // Avoid unnecessary API calls for empty input

    startTransition(() => {
      Promise.all([fetchData("laureate"), fetchData("prize")])
        .then(([laureatesData, prizesData]) => {
          try {
            const parsedLaureates = LaureatesSchema.parse(laureatesData);
            const parsedPrizes = PrizesSchema.parse(prizesData);

            const filteredLaureates = parsedLaureates.laureates.filter(
              (laureate: { firstname: string; surname?: string }) =>
                laureate.firstname.toLowerCase().includes(trimmedValue) ||
                (laureate.surname && laureate.surname.toLowerCase().includes(trimmedValue))
            );
            const filteredPrizes = parsedPrizes.prizes.filter((prize) => prize.year.includes(trimmedValue));

            console.log("Filtered Laureates:", filteredLaureates);
            console.log("Filtered Prizes:", filteredPrizes);

            if (filteredLaureates.length === 0 && filteredPrizes.length === 0) {
              toast("No results found for your search.");
            }
          } catch (parseError) {
            console.error("Parsing Error:", parseError);
            toast.error("Error while processing data. Please try again.");
          }
        })
        .catch((fetchError) => {
          console.error("Fetching Error:", fetchError);
          toast.error("Error while searching for data. Please try later.");
        });
    });
  };

  return (
    <Input
      placeholder="Search for a category, year, or laureate"
      value={inputValue}
      onChange={(e) => handleInputChange(e.target.value)}
    />
  );
};

export { SearchBar };
