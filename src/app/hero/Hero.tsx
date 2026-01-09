"use client";

import Link from "next/link";
import Image from "next/image";

import LinkedIn from "../components/Icons/LinkedIn";
import Github from "../components/Icons/Github";

import { useRef } from "react";
import { useInView } from "framer-motion";

const StackComp = ({ src, titleProp }: any) => {
  return (
    <li className="relative group cursor-pointer">
      <Image src={src} alt="" height={100} width={100} />
      <span
        className="
      pointer-events-none
      absolute -top-9 left-1/2 -translate-x-1/2
      whitespace-nowrap
      rounded-md bg-black px-2 py-1
      text-xs text-white
      opacity-0 scale-95
      transition-all duration-150 ease-out
      group-hover:opacity-100 group-hover:scale-100
    "
      >
        {titleProp}
      </span>
    </li>
  );
};

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
      className="ease-in-out duration-[1200ms] 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl mx-auto min-h-full md:h-[90vh] flex flex-col justify-center py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 place-items-center text-center md:text-left">
        <article>
          {/* <h1 className="text-2xl lg:text-4xl font-bold flex gap-3 items-center justify-center md:justify-start mt-10 md:mt-0">
            Frontend Engineer
            <Image
              src="/portfolio/hero/website-codes_4305000.png"
              alt=""
              width={64}
              height={64}
              className="w-12 h-10 md:w-12 md:h-12 hidden md:block"
            />
          </h1> */}
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
            Hey there 👋, I&apos;m Raghul Krishna 👨🏻‍💻
          </h1>
          <p className="text-base md:text-lg text-gray-600 mt-3 leading-relaxed">
            I build web apps and like trying new technologies. I work on
            personal projects and enjoy collaborating with other developers.
          </p>
          <div className="flex gap-5 justify-center md:justify-start mt-7">
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
          <Link href="#projects">
            <button className="text-base md:text-lg font-medium mt-10 px-8 md:px-10 py-3 md:py-4 rounded-full cursor-pointer border-0 bg-white shadow-[0_0_8px_rgb(0_0_0/5%)] tracking-wider uppercase text-[15px] transition-all duration-500 ease-in-out hover:tracking-widest hover:bg-[hsl(261,80%,48%)] hover:text-white hover:shadow-[0_7px_29px_0_rgb(93_24_220)] active:tracking-widest active:bg-[hsl(261,80%,48%)] active:text-white active:shadow-[0_0_0_0_rgb(93_24_220)] active:translate-y-2 active:transition-[100ms]">
              View Projects
            </button>
          </Link>
        </article>
        <Image
          src="/portfolio/hero/Hero_Image.png"
          alt="hero_banner"
          width={500}
          height={500}
        />

        {/* icons */}
      </div>
      {/* tech stack */}
      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-16 mt-10 md:mt-20">
        <h3 className="text-base md:text-lg font-semibold">Tech Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7 md:gap-7">
          <StackComp
            src="https://skillicons.dev/icons?i=html,css"
            titleProp="HTML & CSS"
          />
          <StackComp
            src="https://skillicons.dev/icons?i=javascript,typescript"
            titleProp="JavaScript & TypeScript"
          />
          <StackComp
            src="https://skillicons.dev/icons?i=nextjs,tailwindcss"
            titleProp="Next.js & TailWindCSS"
          />
          <StackComp
            src="https://skillicons.dev/icons?i=react,materialui"
            titleProp="React.js & MaterialUI"
          />
          <StackComp
            src="https://skillicons.dev/icons?i=mysql,linux"
            titleProp="SQL & Linux"
          />
          <StackComp
            src="https://skillicons.dev/icons?i=github,vscode"
            titleProp="Github & Visual Studio Code"
          />
        </ul>
      </div>
    </section>
  );
};

export default Hero;
