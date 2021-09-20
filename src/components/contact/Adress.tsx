import React from "react";
import { addressInfo } from "src/text/contact";

export default function Adress() {
  const { address, email, number } = addressInfo["ar"];
  return (
    <div className="py-10 grid grid-cols-3 container gap-9">
      <Box title={address.title} value={address.value} />
      <Box title={email.title} value={email.value} />
      <Box title={number.title} value={number.value} />
    </div>
  );
}

const Box = ({ title, value }) => {
  return (
    <div className=" bg-darkBlue  rounded-md p-8 text-center">
      <h2 className="text-liteBlue font-semibold mb-4">{title}</h2>
      <p className="text-white">{value}</p>
    </div>
  );
};
