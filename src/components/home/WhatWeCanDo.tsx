import Image from "next/image";
import { whatWeCanDoText } from "src/text/homePage";
export default function WhatWeCanDo({ locale }) {
  const { title, doList } = whatWeCanDoText[locale];
  return (
    <section className="bg-SecDarkBlue relative z-[-1]">
      <div className="md:flex justify-between">
        <div className="relative md:w-1/2 h-96 md:h-auto  ">
          <Image
            src="/images/disc.jpg"
            layout="fill"
            alt="dic"
            objectFit="cover"
            className="w-full"
          />
        </div>
        <div className="py-8 text-right relative md:w-1/2 ">
          <Image
            src="/images/leftBox.png"
            layout="fill"
            objectFit="contain"
            className="  z-[-1] transform xl:translate-x-60 md:translate-x-20 opacity-60
              translate-x-52 
            "
          />
          <div className="ml-8 md:mr-20 mr-8 md:w-1/2">
            <p className="text-2xl font-bold text-liteBlue text-center">
              {title}
            </p>
            {doList.map((l) => (
              <div key={l.title} className="bg-crame my-4 p-4  rounded-md">
                <h2 className="text-orange text-xl font-medium">{l.title}</h2>
                <p className="text-darkBlue text-lg mt-4">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
