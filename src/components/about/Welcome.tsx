import React from "react";
import Image from "next/image";
import LinkButton from "../LinkButton";
import { heroText } from "src/text/aboutPage";
export default function Welcome() {
  const { title, body } = heroText["ar"];
  return (
    <div className="bg-SecDarkBlue">
      <div className="flex justify-center gap-10 items-center py-16 container   ">
        <div className="w-2/5 text-right">
          <h2 className=" text-liteBlue text-3xl">{title}</h2>
          <p className="text-white mt-4 text-xl">{body}</p>
          <div className="flex justify-center gap-10 text-white mt-8">
            <LinkButton text="مشاريعنا" to="/projects" />
            <LinkButton text="تواصل معنا" to="/contact-us" />
          </div>
        </div>
        <div className="relative w-1/2 h-96">
          <Image
            src="/images/disc.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
