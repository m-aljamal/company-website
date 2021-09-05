import { heroText } from "src/text/homePage";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
export default function Hero({ locale }) {
  interface IHero {
    subTitle: string;
    mainTitle: string;
    body: string;
    font: string;
  }
  const { subTitle, mainTitle, body, font }: IHero = heroText[locale];
  return (
    <section>
      <div
        className={`bg-darkBlue min-h-[calc(100vh-50vh)] py-10  flex items-center ${font}`}
      >
        <div className="container pt-28  flex flex-col-reverse md:flex-row justify-center gap-14">
          <div className=" bg-SecDarkBlue ring ring-liteBlue  md:w-2/5 rounded-md">
            <div className="mt-5 text-right flex gap-5 justify-end mr-5 items-center">
              <Tech text="HTML" />
              <Tech text="CSS" />
              <Tech text="JS" />
            </div>
            <CodeTypewriter />
          </div>
          <div className="md:w-3/12 text-right">
            <p className=" text-liteGreen text-sm">{subTitle}</p>
            <h1 className="text-white font-bold text-2xl mt-2">{mainTitle}</h1>
            <p className="text-white mt-6 ">{body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CodeTypewriter = () => {
  return (
    <div className="p-4 text-white text-xl font-bold h-[185px]">
      <Typewriter
        options={{ loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<span><span style="color:#52a8f9">if </span><span style="color:#ffe900">(</span>customer.sad() <span style="color:#9f00a1"> === </span> <span style="color:#E56B6F"> true </span><span style="color:#ffe900">){</span> <br/></span> `
            )
            .typeString("<span>call-us()  <br/></span>")
            .typeString("<span>sad.stop()  <br/></span>")
            .typeString("<span>beAwesome() <br/> </span>")
            .typeString(`<span style="color:#ffe900">} </span>`)
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

const Tech = ({ text }) => {
  return (
    <p className="gradiant rounded-md text-sm lg:px-8 px-3 font-eng">{text}</p>
  );
};
