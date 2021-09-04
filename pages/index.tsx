import { heroText } from "src/text/homePage/arabic";

export default function Home() {
  return (
    <div className="bg-darkBlue pb-8">
      <div className="container pt-28  flex justify-center gap-60">
        <div className="w-3/12">
          <p className=" text-liteGreen text-sm">{heroText.subTitle}</p>
          <h1 className="text-white font-bold text-2xl mt-2">
            {heroText.mainTitle}
          </h1>
          <p className="text-white mt-6">{heroText.body}</p>
        </div>
        <div className="bg-gray-300">code typing</div>
      </div>
    </div>
  );
}
