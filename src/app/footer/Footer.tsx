import Link from "next/link";
import UpArrow from "../components/Icons/UpArrow";

const Footer = () => {
  return (
    <footer className="px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 py-5 md:py-10 bg-[#2d2e32]">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
        <p className="text-sm md:text-base lg:text-lg font-semibold text-white">
          Copyright © 2026. All rights are reserved
        </p>
        <Link title="To the Top" href="/#home" className="w-fit hidden sm:block">
          <UpArrow />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;