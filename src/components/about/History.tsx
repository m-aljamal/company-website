import React from "react";
import Image from "next/image";
import { ourHistory } from "src/text/aboutPage";
export default function History() {
  const { title, body } = ourHistory["ar"];
  return (
    <div className="flex items-end relative">
      <div className="relative w-1/2 h-96">
        <Image src="/images/disc.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="w-2/5 transform -translate-x-6 relative ">
        <div className="bg-SecDarkBlue text-center mr-20 p-5 rounded-tr-md rounded-tl-md">
          <h2 className=" text-liteGreen text-lg">تاريخنا</h2>
          <h2 className="text-liteBlue mt-2 text-xl">{title}</h2>
          <p className="text-white mt-4 text-lg ">{body}</p>
        </div>
      </div>
      <div className=" absolute right-0  w-96 h-96 z-[-5]">
        <Image src="/images/leftBox.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
