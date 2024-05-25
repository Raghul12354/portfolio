"use client";

import { useState } from "react";
import { Merienda } from "next/font/google";
import Link from "next/link";

import CloseIcon from "../components/Icons/CloseIcon";
import MenuIcon from "../components/Icons/MenuIcon";

const merienda = Merienda({ subsets: ["latin"], weight: ["300", "400"] });

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <header className="flex items-center justify-between shadow-md h-16 md:h-20 px-6 md:px-60 bg-white fixed w-screen">
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
      <nav
        className={`${
          showLinks ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-10`}
      >
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
      <button onClick={handleLinks} className="block md:hidden">
        {showLinks ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
};

export default Navbar;
