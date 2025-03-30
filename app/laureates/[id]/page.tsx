import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { fetchLaureate } from "@/api/laureate";

export const metadata: Metadata = {
  title: "Laureate",
};

type LaureatePageProps = {
  params: Promise<{ id: string }>;
};

export default async function LaureatePage(props: LaureatePageProps) {
  const { id } = await props.params;
  if (!id) redirect("/laureates");

  const laureate = await fetchLaureate(parseInt(id));
  if (!laureate) notFound();

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper>{JSON.stringify(laureate)}</MaxWidthWrapper>
      </section>
    </main>
  );
}
