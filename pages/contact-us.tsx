import Banner from "src/components/Banner";
import Adress from "src/components/contact/Adress";
import SendMessage from "src/components/contact/SendMessage";
export default function contactUs() {
  return (
    <div>
      <Banner text="تواصل معنا" />
      <Adress />
      <SendMessage />
    </div>
  );
}
