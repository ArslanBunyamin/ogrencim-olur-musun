import Image from "next/image";
import Logo from "@/res/logo.webp";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="navbar bg-base-100 z-50 fixed shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/Hakkimizda">Hakkımızda</Link>
            </li>
            <li>
              <Link href="Faaliyetlerimiz">Faaliyetlerimiz</Link>
            </li>
            <li>
              <Link href="Yazilarimiz">Yazılarımız</Link>
            </li>
            <li>
              <Link href="/Dergimiz">Dergimiz</Link>
            </li>
            <li>
              <Link href="Sahadayiz">Sahadayız</Link>
            </li>
            <li>
              <Link href="Iletisim">İletişim</Link>
            </li>
            <li>
            <Link href="BizKimiz">Biz Kimiz?</Link>
          </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">
          <Image src={Logo} alt="logo" className="h-full w-auto" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          <li>
            <Link href="/Hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link href="Faaliyetlerimiz">Faaliyetlerimiz</Link>
          </li>
          <li>
            <Link href="Yazilarimiz">Yazılarımız</Link>
          </li>
          <li>
            <Link href="Dergimiz">Dergimiz</Link>
          </li>
          <li>
            <Link href="Sahadayiz">Sahadayız</Link>
          </li>
          <li>
            <Link href="Iletisim">İletişim</Link>
          </li>
          <li>
            <Link href="BizKimiz">Biz Kimiz?</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-4 select-none hidden sm:flex">
        #ÇünküÇocuklaraDeğer
      </div>
    </div>
  );
};

export default Navbar;
