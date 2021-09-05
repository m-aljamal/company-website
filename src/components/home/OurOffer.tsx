import { ourOfferText } from "src/text/homePage";
import CheckSvg from "./CheckSvg";
import SvgCode from "./SvgCode";

export default function OurOffer({ locale }) {
  const { title, body, services } = ourOfferText[locale];
  return (
    <section className="bg-crame py-10 min-h-[calc(100vh-50vh)] flex items-center">
      <div className=" container md:flex gap-10 justify-between lg:justify-center">
        <div className=" text-right text-gray-800 md:w-1/3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2 text-lg ">{body}</p>
          <div className="grid grid-cols-2 mt-2 gap-3">
            {services?.map((s) => (
              <div
                key={s}
                className="flex gap-3 justify-end py-2 pr-3 rounded-md bg-darkBlue"
              >
                <p className="text-white ">{s}</p>
                <CheckSvg />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-3/5 lg:w-2/5 mt-8 md:mt-0 ">
          <SvgCode />
        </div>
      </div>
    </section>
  );
}
