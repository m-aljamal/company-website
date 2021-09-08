import { useRouter } from "next/router";
import Hero from "src/components/home/Hero";
import OurOffer from "src/components/home/OurOffer";
import Services from "src/components/home/Services";
import WhatTheySay from "src/components/home/WhatTheySay";
import WhatWeCanDo from "src/components/home/WhatWeCanDo";
import PartnersLogos from "src/components/home/PartnersLogos";

export default function Home() {
  const router = useRouter();

  const { locale } = router;
  return (
    <>
      <Hero locale={locale} />
      <OurOffer locale={locale} />
      <WhatWeCanDo locale={locale} />
      <Services locale={locale} />
      <WhatTheySay locale={locale} />
      <PartnersLogos />
    </>
  );
}
