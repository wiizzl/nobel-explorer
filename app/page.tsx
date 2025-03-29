import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { fetchData } from "@/features/data/data.action";
import { SearchBar } from "@/features/search/SearchBar";

export default async function HomePage() {
  const [laureatesData, prizesData] = await Promise.all([fetchData("laureate"), fetchData("prize")]);

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
