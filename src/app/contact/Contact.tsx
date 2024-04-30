import Link from "next/link";

import Github from "../components/Icons/Github";
import Gmail from "../components/Icons/Gmail";
import LinkedIn from "../components/Icons/LinkedIn";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white shadow-xl min-h-full w-screen px-6 md:px-60 py-10"
    >
      <div className="grid md:grid-cols-2 items-center">
        <Image
          src="/contact/contact_Image.jpg"
          alt="contact_vector"
          width={500}
          height={500}
        />
        <aside>
          <h4 className="text-custom_blue text-2xl font-medium mb-2">
            Contact
          </h4>
          <h2 className="text-2xl font-semibold">
            Feel free to connect with me anytime! &#128071;
          </h2>
          <menu className="mt-10 grid md:grid-cols-2 gap-5">
            <li className="cursor-pointer flex items-center gap-2">
              <button className="bg-white shadow-md p-3 rounded-full">
                <Gmail />
              </button>
              <Link href="mailto:raghulkrishna.dev@gmail.com">
                <p className="font-lg font-medium hover:text-custom_blue duration-200">
                  raghulkrishna.dev@gmail.com
                </p>
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2">
              <button className="bg-white shadow-md p-3 rounded-full">
                <LinkedIn styleProp="text-custom_blue" />
              </button>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/raghul-krishna-r12/"
              >
                <p className="font-lg font-medium hover:text-custom_blue duration-200">
                  LinkedIn
                </p>
              </Link>
            </li>
            <li className="cursor-pointer flex items-center gap-2 ">
              <button className="bg-white shadow-md p-3 rounded-full">
                <Github styleProp="text-custom_blue" />
              </button>
              <Link target="_blank" href="https://github.com/Raghul12354">
                <p className="font-lg font-medium hover:text-custom_blue duration-200">
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
