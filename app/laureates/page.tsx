import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { fetchData } from "@/features/data/data.action";
import { type Laureates } from "@/features/data/schemas/laureate.schema";
import { LaureateGrid } from "@/features/laureates/laureate-grid";

export default async function LaureatesPage() {
  const laureatesData = (await fetchData("laureate")) as Laureates;

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <LaureateGrid laureatesData={laureatesData} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
