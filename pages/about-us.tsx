import History from "src/components/about/History";
import Welcome from "src/components/about/Welcome";
import Banner from "src/components/Banner";
export default function aboutUs() {
  return (
    <section>
      <Banner text="من نحن" />
      <Welcome />
      <History />
    </section>
  );
}
