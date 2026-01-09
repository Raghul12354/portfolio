"use client";

import { Merienda } from "next/font/google";
import Drawer_comp from "@/components/Drawer";
import Link from "next/link";

const merienda = Merienda({ subsets: ["latin"], weight: ["300", "400"] });

const Navbar = () => {
  return (
    <header className="flex items-center justify-between shadow-md h-16 md:h-20 px-6 md:px-72 bg-white fixed w-screen z-10">
      <div className="text-center">
        <Link href="/">
          <h3
            className={`${merienda.className} text-xl md:text-2xl font-medium`}
          >
            Raghul Krishna
          </h3>
          <h4
            className={`${merienda.className} text-sm md:text-base text-custom_blue font-semibold mt-1`}
          >
            Web Developer
          </h4>
        </Link>
      </div>
      <nav className="hidden md:flex gap-10">
        <Link className="nav_links" href="/">
          Home
        </Link>
        <Link className="nav_links" href="#projects">
          Projects
        </Link>
        <Link className="nav_links" href="#about">
          About
        </Link>
        <Link className="nav_links" href="#contact">
          Contact
        </Link>
      </nav>
      <button
        className="block md:hidden"
      >
        <Drawer_comp />
      </button>
    </header>
  );
};

export default Navbar;