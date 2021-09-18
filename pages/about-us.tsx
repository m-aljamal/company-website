import BusinessValues from "src/components/about/BusinessValues";
import History from "src/components/about/History";
import Welcome from "src/components/about/Welcome";
import Banner from "src/components/Banner";
import PartnersLogos from "src/components/home/PartnersLogos";
export default function aboutUs() {
  return (
    <section>
      <Banner text="من نحن" />
      <Welcome />
      <History />
      <BusinessValues />
      <PartnersLogos />
    </section>
  );
}
