"use client";

import Link from "next/link";
import Image from "next/image";

import { useRef } from "react";
import { useInView } from "framer-motion";

const Item = ({ title, img, link, divOrder, imgOrder, tech }: any) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
      <Link href={link} target="_blank" className={`relative ${imgOrder}`}>
        <div className="bg-black rounded-lg">
          <Image
            src={img}
            alt={title}
            width={500}
            height={500}
            className="z-10 object-cover w-full h-[30vh] md:h-[40vh] opacity-75 hover:opacity-100 duration-300 ease-in-out"
          />
        </div>
      </Link>
      <div className={`flex flex-col gap-5 ${divOrder}`}>
        <p className="md:text-lg font-semibold">
          Tech Stack: <span className="font-medium text-gray-700">{tech}</span>
        </p>
        <p className="text-2xl md:text-3xl capitalize font-semibold">{title}</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          suscipit dicta molestiae exercitationem nemo repellendus ut minima
          quasi animi et?
        </p>
        <Link href={link} target="_blank" className="">
          <button className="cta flex items-center">
            <span className="hover-underline-animation mr-2 md:text-lg font-medium">
              Visit
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(1)",
        opacity: isInView ? 1 : 0,
      }}
      id="projects"
      className="min-h-screen max-w-7xl mx-auto py-20 md:py-32 px-6"
    >
      <div className="grid grid-cols-1 place-items-center gap-10 md:gap-20">
        <Item
          title="viji tours and travels"
          img="/portfolio/projects/tours_bg.png"
          link="https://tripgo-raghul12354s-projects.vercel.app/"
          tech="Next.js, TailWindCSS, TypeScript, Shadcn/ui, Git"
        />
        <Item
          title="nike shoes"
          img="/portfolio/projects/nike_bg.png"
          link="https://nike-project-kappa.vercel.app/"
          tech="Next.js, Redux, Tailwind CSS, Git, vercel"
        />
      </div>
    </section>
  );
};

export default Projects;
