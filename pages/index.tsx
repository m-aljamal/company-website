import { useRouter } from "next/router";
import Hero from "src/components/home/Hero";
import OurOffer from "src/components/home/OurOffer";
import Services from "src/components/home/Services";
import WhatWeCanDo from "src/components/home/WhatWeCanDo";

export default function Home() {
  const router = useRouter();

  const { locale } = router;
  return (
    <>
      <Hero locale={locale} />
      <OurOffer locale={locale} />
      <WhatWeCanDo locale={locale} />
      <Services locale={locale} />
    </>
  );
}
