import Image from "next/image";
import Link from "next/link";

import { MaxWidthWrapper } from "@/components/layout/max-width-wrapper";

import { config } from "@/config";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full select-none border-b bg-background/65 py-3 backdrop-blur-xs mb-3">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/" className="flex gap-x-4 items-center">
          <Image src="/images/logo.png" alt={config.title} width={40} height={40} />
          <h1 className="font-nobel text-2xl">{config.title}</h1>
        </Link>
        <nav className="flex items-center space-x-5 font-medium lg:space-x-7">
          {config.navigation.map((item, index) => (
            <Link href={item.path} className="hover:underline" key={index}>
              {item.label}
            </Link>
          ))}
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export { Header };
