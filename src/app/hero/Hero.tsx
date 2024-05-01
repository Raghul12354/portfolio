import Link from "next/link";
import Image from "next/image";

import LinkedIn from "../components/Icons/LinkedIn";
import Github from "../components/Icons/Github";

const Hero = () => {
  return (
    <section className="px-6 md:px-60 h-[90vh] w-screen flex flex-col justify-center">
      <div className="grid grid-cols-2 gap-20 place-items-center">
        <article>
          <h1 className="text-5xl font-bold flex gap-3">
            Front-End Web Developer
            <Image
              src="/hero/website-codes_4305000.png"
              alt=""
              width={100}
              height={100}
              className="w-16 h-14"
            />
          </h1>
          <h5 className="text-lg text-gray-700 my-8">
            Hey there &#128075;, I'm Raghul Krishna from India. I'm passionate
            about building websites and enjoy collaborating with others
          </h5>
          {/* icons */}
          <div className="flex gap-5">
            <Link href="">
              <LinkedIn styleProp="text-black hover:text-custom_blue duration-300 w-9 h-9" />
            </Link>
            <Link href="">
              <Github styleProp="text-black hover:text-custom_blue duration-300 w-9 h-9" />
            </Link>
          </div>
        </article>
        <Image src="/hero/Hero_Image.png" alt="" width={500} height={500} />
      </div>
      {/* tech stack */}
      <div className="flex items-center gap-16 mt-20">
        <h3 className="text-lg font-semibold">Tech Stack</h3>
        <ul className="flex gap-10">
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
          <li className="cursor-pointer" title="Github & Visual Studio Code">
            <img src="https://skillicons.dev/icons?i=github,vscode" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;