import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { fetchData } from "@/features/data/data.action";
import { type Prizes } from "@/features/data/schemas/prize.schema";
import { PrizeGrid } from "@/features/prize/prize-grid";

export default async function PrizesPage() {
  const prizesData = (await fetchData("prize")) as Prizes;

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <PrizeGrid prizesData={prizesData} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
