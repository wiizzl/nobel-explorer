import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { SearchBar } from "@/features/search/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <SearchBar />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
