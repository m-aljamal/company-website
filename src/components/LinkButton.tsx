import Link from "next/link";
import React from "react";

export default function LinkButton({ text, to }) {
  return (
    <Link href={to}>
      <a className="py-2 px-4 rounded-md font-bold gradiant">{text}</a>
    </Link>
  );
}
