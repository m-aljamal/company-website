import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  const direction = "rtl";
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
