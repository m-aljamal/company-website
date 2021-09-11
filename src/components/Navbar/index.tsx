import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "src/components/locale-switcher";
const links = [
  {
    arabicText: "الرئيسية",

    link: "/",
  },
  {
    arabicText: "من نحن",
    link: "/about-us",
  },
  {
    arabicText: "مشاريعنا",
    link: "/projects",
  },
  {
    arabicText: "اتصل بنا",
    link: "/contact-us",
  },
];

export default function Navbar() {
  const router = useRouter();
  const { locale } = router;

  return (
    <div
      className="container absolute left-0 right-0 top-0 z-30"
      style={{ direction: `rtl` }}
    >
      <div className="md:flex py-5 justify-between hidden ">
        <div className=" text-white">logo</div>
        <nav>
          <ul className="flex gap-24">
            {links.map((l) => (
              <Link href={l.link} key={l.link}>
                <li
                  className={`font-bold cursor-pointer ${
                    router.pathname === l.link ? "text-liteBlue" : "text-white"
                  }`}
                >
                  {l.arabicText}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}
