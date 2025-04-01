import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";
import { AnimatedCards } from "@/components/motion/animated-cards";

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
  ];

  return (
    <main className="min-h-screen">
      <section>
        <MaxWidthWrapper className="text-center">
          <div className="mb-20">
            <h1 className="text-5xl">Explore Nobel informations with ease</h1>
          </div>
          <AnimatedCards cards={cards} autoplay />;
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
