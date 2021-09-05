import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "src/components/Navbar";
function MyApp({ Component, pageProps }: AppProps) {
  const direction = "rtl";
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
