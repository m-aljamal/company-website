import React from "react";
import Image from "next/image";
import { sendEmailText } from "src/text/contact";
import Form from "./Form";
export default function SendMessage() {
  const { title, body } = sendEmailText["ar"];
  return (
    <div>
      <div className=" relative h-96">
        <Image
          src="/images/disc.jpg"
          alt="disc"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="  container transform  -translate-y-8">
        <div className="bg-darkBlue rounded-md p-5 flex gap-5 justify-between ">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3198.5912647753726!2d37.14499501896806!3d36.70835871253282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1632155905932!5m2!1sen!2str"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-md"
            ></iframe>
          </div>
          <div className="text-right w-1/2">
            <h3 className="text-liteBlue font-semibold text-2xl">{title}</h3>
            <p className="text-white text-xl">{body}</p>
            <div className="mt-4">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
