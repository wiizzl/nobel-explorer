import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { fetchData } from "@/features/data/data.action";
import { type Laureates } from "@/features/data/schemas/laureate.schema";
import { type Prizes } from "@/features/data/schemas/prize.schema";
import { SearchBar } from "@/features/search/SearchBar";

export default async function HomePage() {
  const [laureatesData, prizesData] = await Promise.all([
    fetchData("laureate") as Promise<Laureates>,
    fetchData("prize") as Promise<Prizes>,
  ]);

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <SearchBar laureatesData={laureatesData} prizesData={prizesData} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
