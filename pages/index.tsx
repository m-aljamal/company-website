import { useRouter } from "next/router";
import Hero from "src/components/home/Hero";
import OurOffer from "src/components/home/OurOffer";

export default function Home() {
  const router = useRouter();

  const { locale } = router;
  return (
    <>
      <Hero locale={locale} />
      <OurOffer locale={locale} />
    </>
  );
}

