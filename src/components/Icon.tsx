import React from "react";

export default function Icon({ name, style }: { name: string; style: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={style}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={name}
      />
    </svg>
  );
}
