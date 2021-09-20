import React from "react";
import Image from "next/image";
import Icon from "../Icon";
interface IProject {
  name: string;
  image: string;
  url: string;
  data: string;
  description: string;
}
const Project = ({ project, index }: IProject | any) => {
  return (
    <div
      className={` py-8 ${index % 2 === 0 ? "bg-SecDarkBlue" : "bg-crame"} `}
    >
      <h2 className="text-2xl text-liteBlue py-8 text-center font-bold">
        {project.name}
      </h2>
      <div
        className={` flex container ${
          index % 2 === 0 ? "" : " flex-row-reverse"
        }   items-center gap-10 `}
      >
        <div className=" relative h-96 w-full">
          <Image
            src={project.image}
            layout="fill"
            objectFit="fill"
            className=" rounded-md "
          />
        </div>
        <div
          className={`${
            index % 2 === 0 ? "bg-crame" : "bg-SecDarkBlue text-white"
          }  w-2/5 rounded-md p-3`}
        >
          <h3 className="text-center text-orange font-medium">
            تفاصيل المشروع
          </h3>
          <InfoContainer>
            <a target="_blank" href={project.url}>
              {project.url}
            </a>
            <Icon
              style="w-6 h-6 text-liteBlue mb-1"
              name="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </InfoContainer>
          <InfoContainer>
            <p>{project.date}</p>
            <Icon
              name="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              style="w-6 h-6 text-liteBlue mb-1"
            />
          </InfoContainer>
          <p className="text-right mt-3">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;

const InfoContainer = ({ children }) => {
  return (
    <div className="  flex  items-center  gap-2 justify-end mt-3">
      {children}
    </div>
  );
};
