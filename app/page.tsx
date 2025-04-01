import Link from "next/link";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { AnimatedCards } from "@/components/motion/animated-cards";
import { Button } from "@/components/ui/button";

export default async function HomePage() {
  const cards = [
    {
      quote:
        "In recognition of the extraordinary services they have rendered by their joint researches on the radiation phenomena discovered by Professor Henri Becquerel, ...",
      name: "Marie Curie",
      designation: "The Nobel Prize in Physics (1903) & in Chemistry (1911)",
      src: "/images/laureates/marie_curie.jpg",
    },
    {
      quote: "For her intense poetic prose that confronts historical traumas and exposes the fragility of human life",
      name: "Han Kang",
      designation: "The Nobel Prize in Literature (2024)",
      src: "/images/laureates/han_kang.jpg",
    },
    {
      quote: "For his non-violent struggle for civil rights for the Afro-American population",
      name: "Martin Luther King Jr.",
      designation: "The Nobel Prize in Peace (1964)",
      src: "/images/laureates/martin_luther_king.jpg",
    },
    {
      quote: "For his work on cathode rays",
      name: "Philipp Lenard",
      designation: "The Nobel Prize in Physics (1905)",
      src: "/images/laureates/philipp_lenard.jpg",
    },
    {
      quote: "For studies of how institutions are formed and affect prosperity",
      name: "Simon Johnson",
      designation: "The Nobel Prize in Economic Sciences (2024)",
      src: "/images/laureates/simon_johnson.jpg",
    },
    {
      quote:
        "For his important literary production, which with clear-sighted earnestness illuminates the problems of the human conscience in our times",
      name: "Albert Camus",
      designation: "The Nobel Prize in Literature (1957)",
      src: "/images/laureates/albert_camus.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper className="text-center space-y-12 md:space-y-20 overflow-hidden">
          <h1 className="text-5xl">Explore Nobel informations with ease</h1>
          <AnimatedCards cards={cards} autoplay />
          <div className="flex gap-x-6 justify-center">
            <Button size="lg" asChild>
              <Link href="/laureates">Search laureates</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/prizes">Search prizes</Link>
            </Button>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
