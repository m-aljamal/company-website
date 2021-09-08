import { ourServicesText } from "src/text/homePage";

export default function Services({ locale }) {
  const { title, services } = ourServicesText[locale];
  return (
    <section className="bg-darkBlue py-8">
      <div className="container">
        <h2 className="text-3xl text-liteGreen text-center">{title}</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-SecDarkBlue ring-1 ring-opacity-30 hover:ring-opacity-100 transition duration-500 ease-in-out ring-liteBlue rounded-md p-8 text-center"
            >
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-14 w-14 text-liteBlue "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={s.icon}
                  />
                </svg>
              </div>
              <h2 className="text-lg text-orange text-center font-bold my-4">
                {s.title}
              </h2>
              <p className="text-white">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
