import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { LaureateDetails } from "@/features/laureates/laureate-details";

export const metadata: Metadata = {
  title: "Laureate",
};

type LaureatePageProps = {
  params: Promise<{ id: string }>;
};

export default async function LaureatePage(props: LaureatePageProps) {
  const { id } = await props.params;
  const laureateId = parseInt(id);

  if (!laureateId) notFound();

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>
          <LaureateDetails id={laureateId} />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
