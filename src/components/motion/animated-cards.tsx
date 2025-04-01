"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type AnimatedCardsProps = {
  cards: {
    quote: string;
    name: string;
    designation: string;
    src: string;
  }[];
  autoplay: boolean;
};

const AnimatedCards = (props: AnimatedCardsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % props.cards.length);
  }, [props.cards.length]);

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (props.autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [props.autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="mx-auto max-w-sm md:max-w-4xl">
      <div className="relative grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {props.cards.map((item, index) => (
              <motion.div
                key={item.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 40 : props.cards.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold">{props.cards[active].name}</h3>
            <p className="text-sm text-muted-foreground">{props.cards[active].designation}</p>
            <motion.p className="mt-5 text-lg text-muted-foreground">
              "
              {props.cards[active].quote.split(" ").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block italic"
                >
                  {item}&nbsp;
                </motion.span>
              ))}
              "
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { AnimatedCards };
