import React from "react";
import { businessValues } from "src/text/aboutPage";
import Heading from "../Heading";
import Icon from "../Icon";
import Image from "next/image";
export default function BusinessValues() {
  const { title, values } = businessValues["ar"];

  return (
    <div className="py-8  bg-darkBlue container">
      <Heading style=" text-liteBlue">{title}</Heading>
      <div className="grid-cols-3 grid my-8 gap-16">
        {values.map((v) => (
          <Value title={v.title} body={v.body} icon={v.icon} />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5 h-60 my-20 ">
        <TeamtMember />
        <TeamtMember />
        <TeamtMember />
        <div className="bg-SecDarkBlue p-3 rounded-md">
          <h2 className="text-liteGreen text-lg text-center">فريق عملنا</h2>
          <p className="text-right text-crame">
            فريق عملنا دائما جاهز وعلى تواصل دائم مع الزبائن والعملاء من اجل
            تطوير خدماتنا
          </p>
        </div>
      </div>
    </div>
  );
}

const Value = ({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: string;
}) => {
  return (
    <div className=" text-center bg-crame rounded-md w-full p-3">
      <Icon name={icon} style="h-6 w-6 mx-auto" />
      <h3 className="my-4">{title}</h3>
      <p>{body}</p>
    </div>
  );
};

const TeamtMember = () => {
  return (
    <div className="    text-center">
      <div className=" relative h-full w-full   ">
        <Image
          src="/images/face1.png"
          //   width={250}
          //   height={250}
          layout="fill"
          objectFit="cover"
          className=" rounded-md  "
        />
      </div>
      {/* <h3>Jacke Wilson</h3>
      <p>Marketing Specialist</p> */}
    </div>
  );
};
