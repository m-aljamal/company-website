import React from "react";
import Image from "next/image";
export default function PartnersLogos() {
  const partners = [
    "Alresala",
    "EDC",
    "SanableAmal",
    "Akenarje",
    "ShafaqSham",
    "KilisBaldesi",
  ];

  return (
    <section className="bg-darkBlue py-10 relative   ">
      <div className="container grid grid-cols-3 gap-x-10 gap-y-6">
        {partners.map((p) => (
          <div className=" rounded-md text-center py-2 text-white bg-SecDarkBlue font-bold  ">
            <p>{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
