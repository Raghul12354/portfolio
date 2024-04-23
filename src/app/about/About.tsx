import Image from "next/image";

const About = () => {
  return (
    <section className="px-6 md:px-60 grid grid-cols-2 min-h-screen items-center bg-white">
      <aside>
        <Image src="/about/about_Image.jpg" alt="o" height={500} width={500} />
      </aside>
      <div className="">
        <h4 className="text-custom_blue text-2xl font-medium mb-2">About Me</h4>
        <h2 className="text-4xl font-semibold">Frontend Web Developer</h2>
        <p className="mt-5 text-gray-500 text-lg leading-relaxed">
          Hey, I&apos;m Raghul Krishna I specialize in creating clean,
          responsive websites that shine on every screen. With my current stack
          of Next.js, Tailwind CSS, and TypeScript, I ensure simplicity and
          functionality in every project I tackle.
        </p>
        <p className="mt-5 text-gray-500 text-lg leading-relaxed">
          Excited to dive into Web3, I&apos;m all about staying ahead in the
          ever-evolving world of web development.
        </p>
      </div>
    </section>
  );
};

export default About;