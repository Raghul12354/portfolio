"use client";

import Link from "next/link";
import Image from "next/image";

import Github from "../components/Icons/Github";
import Gmail from "../components/Icons/Gmail";
import LinkedIn from "../components/Icons/LinkedIn";

import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(1)",
        opacity: isInView ? 1 : 0,
      }}
      id="contact"
      className="ease-in-out duration-1000 px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 bg-white shadow-xl min-h-full w-screen py-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
        <Image
          src="/contact/contact_Image.jpg"
          alt="contact_vector"
          width={500}
          height={500}
          className="order-2 md:order-1"
        />
        <aside className="order-1 md:order-2">
          <h4 className="text-custom_blue text-xl md:text-2xl font-medium mb-2">
            Contact
          </h4>
          <h2 className="text-xl md:text-2xl font-semibold">
            Feel free to connect with me anytime! &#128071;
          </h2>
          <menu className="mt-10 grid grid-cols-1 gap-5">
            <li className="cursor-pointer flex items-center gap-2">
              <button className="bg-white shadow-md p-3 rounded-full">
                <Gmail classProp="w-5 md:w-6 h-5 md:h-6 lg:w-7 lg:h-7 text-custom_blue" />
              </button>
              <Link href="mailto:raghulkrishna.dev@gmail.com">
                <p className="text-sm md:text-base lg:text-lg font-semibold hover:text-custom_blue duration-200">
                  raghulkrishna.dev@gmail.com
                </p>
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <button className="bg-white shadow-md p-3 rounded-full">
                <LinkedIn styleProp="w-5 md:w-6 h-5 md:h-6 lg:w-7 lg:h-7 text-custom_blue" />
              </button>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/raghul-krishna-r12/"
              >
                <p className="text-sm md:text-base lg:text-lg font-semibold hover:text-custom_blue duration-200">
                  LinkedIn
                </p>
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 ">
              <button className="bg-white shadow-md p-3 rounded-full">
                <Github styleProp="w-5 md:w-6 h-5 md:h-6 lg:w-7 lg:h-7 text-custom_blue" />
              </button>
              <Link target="_blank" href="https://github.com/Raghul12354">
                <p className="text-sm md:text-base lg:text-lg font-semibold hover:text-custom_blue duration-200">
                  Github
                </p>
              </Link>
            </li>
          </menu>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
