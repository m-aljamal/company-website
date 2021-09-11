import Image from "next/image";
export default function Banner({ text }) {
  return (
    <div className=" relative h-60  bg-darkBlue ">
      <Image src="/images/banner.png" layout="fill" objectFit="cover" />
      <p className=" text-white font-bold  absolute container bottom-1/3 text-3xl text-right">
        {text}
      </p>
    </div>
  );
}
