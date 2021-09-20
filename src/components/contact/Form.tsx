import React from "react";

export default function Form() {
  const words = {
    ar: {
      name: "الاسم",
      company: "اسم الشركة",
      number: "رقم الهاتف",
      email: "الايميل",
      message: "الرسالة",
    },
    en: {},
  };
  const { name, company, number, email, message } = words["ar"];
  return (
    <form>
      <div className="grid  grid-cols-2 gap-5">
        <Input name={name} />
        <Input name={company} />
        <Input name={number} />
        <Input name={email} />

        <textarea
          className="col-span-2 rounded-md p-3 text-right"
          placeholder={message}
        />
      </div>
      <button
        type="submit"
        className=" font-semibold text-white rounded-md p-2 w-full mt-4 bg-liteBlue "
      >
        ارسل
      </button>
    </form>
  );
}

const Input = ({ name }) => {
  return <input placeholder={name} className="rounded-md p-3 text-right" />;
};
