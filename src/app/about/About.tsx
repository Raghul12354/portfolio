"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-white"
    >
      <aside
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(1)",
          opacity: isInView ? 1 : 0,
        }}
        className="order-2 md:order-1 ease-in-out duration-1000"
      >
        <Image
          src="/portfolio/about/About_blue.png"
          alt="about_image"
          height={500}
          width={500}
        />
      </aside>
      <div
        className="order-1 md:order-2 ease-in-out duration-1000"
        ref={ref}
        style={{
          transform: isInView ? "none" : "scale(1)",
          opacity: isInView ? 1 : 0,
        }}
      >
        <h2 className="text-custom_blue text-lg md:text-4xl font-medium mb-2">
          About Me
        </h2>
        {/* <h2 className="text-2xl md:text-4xl font-semibold">
          Frontend Web Developer
        </h2> */}
        <p className="mt-3 md:mt-5 text-gray-500 text-sm md:text-lg leading-relaxed">
          I&apos;m a <strong>self-taught web developer</strong>. I started
          building web apps during college to explore how things work, and it
          quickly became my career path. I specialize in
          <strong> Next.js and Tailwind CSS</strong>, creating responsive web
          applications with simplicity and functionality in mind.
        </p>
        <p className="mt-5 text-gray-500 text-sm md:text-lg leading-relaxed">
          I&apos;m currently open to opportunities where I can grow and
          contribute to meaningful products.
        </p>
      </div>
    </section>
  );
};

export default About;
