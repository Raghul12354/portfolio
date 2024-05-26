"use client";

import Link from "next/link";
import Image from "next/image";

import LinkedIn from "../components/Icons/LinkedIn";
import Github from "../components/Icons/Github";

import { useRef } from "react";
import { useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(1)",
        opacity: isInView ? 1 : 0,
      }}
      className="ease-in-out duration-1000 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto min-h-full md:h-[90vh] flex flex-col justify-center py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 place-items-center text-center md:text-left">
        <article>
          <h1 className="text-3xl lg:text-4xl font-bold flex gap-3 items-center">
            Front-End Web Developer
            <Image
              src="/portfolio/hero/website-codes_4305000.png"
              alt=""
              width={64}
              height={64}
              className="w-12 h-10 md:w-12 md:h-12"
            />
          </h1>
          <h5 className="text-sm md:text-lg text-gray-700 my-5 md:my-8">
            Hey there &#128075;, I&apos;m Raghul Krishna from India. I&apos;m
            passionate about building websites and enjoy collaborating with
            others
          </h5>
          {/* icons */}
          <div className="flex gap-5 justify-center md:justify-start">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/raghul-krishna-r12/"
            >
              <LinkedIn styleProp="text-black hover:text-custom_blue duration-300 w-7 h-7 md:w-9 md:h-9" />
            </Link>
            <Link target="_blank" href="https://github.com/Raghul12354">
              <Github styleProp="text-black hover:text-custom_blue duration-300 w-7 h-7 md:w-9 md:h-9" />
            </Link>
          </div>
        </article>
        <Image
          src="/portfolio/hero/Hero_Image.png"
          alt="hero_banner"
          width={500}
          height={500}
        />
      </div>
      {/* tech stack */}
      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16 mt-10 md:mt-20">
        <h3 className="text-base md:text-lg font-semibold">Tech Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-7 md:gap-10">
          <li className="cursor-pointer" title="HTML & CSS">
            <img src="https://skillicons.dev/icons?i=html,css" alt="" />
          </li>
          <li className="cursor-pointer" title="ReactJs & MaterialUI">
            <img src="https://skillicons.dev/icons?i=react,materialui" alt="" />
          </li>
          <li className="cursor-pointer" title="NextJs & TailWindCSS">
            <img
              src="https://skillicons.dev/icons?i=nextjs,tailwindcss"
              alt=""
            />
          </li>
          <li className="cursor-pointer" title="JavaScript & TypeScript">
            <img
              src="https://skillicons.dev/icons?i=javascript,typescript"
              alt=""
            />
          </li>
          <li
            className="cursor-pointer col-span-2 sm:col-auto flex justify-center"
            title="Github & Visual Studio Code"
          >
            <img src="https://skillicons.dev/icons?i=github,vscode" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;