import Link from "next/link";
import UpArrow from "../components/Icons/UpArrow";

const Footer = () => {
  return (
    <footer className="px-6 md:px-60 py-10 bg-gray-500">
      <div className="grid grid-cols-2 place-items-center">
        <p className="text-lg font-medium">
          Copyright © 2024. All rights are reserved
        </p>
        <Link title="To the Top" href="/#home" className="w-fit">
          <UpArrow />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;