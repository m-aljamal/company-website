import Link from "next/link";
import { useRouter } from "next/router";
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

  return (
    <div className="container absolute">
      <div className="flex py-5">
        <div className="w-2/6">logo</div>
        <nav>
          <ul className="flex gap-24">
            {links.map((l) => (
              <Link href={l.link}>
                <li
                  className={`font-medium cursor-pointer ${
                    router.pathname === l.link ? "text-liteBlue" : "text-white"
                  }`}
                >
                  {l.arabicText}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
