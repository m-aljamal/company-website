import React, { FC } from "react";

const Heading = ({ children, ...props }) => {
  return (
    <h2 className={`text-xl text-center font-medium ${props.style}`}>
      {children}
    </h2>
  );
};
export default Heading;
