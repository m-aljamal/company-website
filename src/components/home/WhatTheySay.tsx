import React, { useState } from "react";
import { customerText } from "src/text/homePage";
import Image from "next/image";
export default function WhatTheySay({ locale }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState("opacity-100 ");

  const handleClick = (index) => {
    setFade("opacity-20 ");
    setTimeout(() => handleTimeOut(index), 400);
  };
  const handleTimeOut = (index) => {
    setFade("opacity-100 ");
    setActiveIndex(index);
  };

  const { feedBack, title } = customerText[locale];
  return (
    <section className="py-12  relative bg-crame" style={{ direction: "rtl" }}>
      <div className="container">
        <h2 className="text-2xl text-center font-bold text-gray-800">
          {title}
        </h2>
        <div className="mt-12">
          <FeedBack data={feedBack[activeIndex]} fade={fade} />
        </div>
        <ul className="flex gap-2 mt-8 ">
          {feedBack.map((image, index) => (
            <li
              className={` cursor-pointer  ${
                activeIndex === index ? "opacity-100" : "opacity-50"
              } `}
              onClick={() => handleClick(index)}
              key={index}
            >
              <Image
                src={image.image}
                width={50}
                height={50}
                objectFit="cover"
                className="rounded-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className=" absolute h-full w-2/5  opacity-40 top-0 left-0 bottom-0">
        <Image src="/images/rightBox.png" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}

const FeedBack = ({ data, fade }) => {
  return (
    <div
      className={` flex gap-8 items-center justify-center ${fade} transition-opacity`}
    >
      <div className="relative  w-60 h-60  ">
        <Image
          src={data.image}
          alt="face"
          layout="fill"
          objectFit="contain"
          className="rounded-full "
        />
      </div>
      <div className=" w-1/2">
        <h2 className=" text-xl font-medium text-liteBlue">{data.name}</h2>
        <div className="  text-md text-gray-600 ">
          <h3>{data.jop}</h3>
          <h3>{data.webSite}</h3>
        </div>

        <p className="mt-8   text-xl">
          <q>{data.comment}</q>
        </p>
      </div>
    </div>
  );
};
