import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-white">
      <aside className="order-2 md:order-1">
        <Image src="/about/About_blue.png" alt="about_image" height={500} width={500} />
      </aside>
      <div className="order-1 md:order-2">
        <h4 className="text-custom_blue text-lg md:text-2xl font-medium mb-2">About Me</h4>
        <h2 className="text-2xl md:text-4xl font-semibold">Frontend Web Developer</h2>
        <p className="mt-3 md:mt-5 text-gray-500 text-sm md:text-lg leading-relaxed">
          Hey, I&apos;m <b>Raghul Krishna</b> I specialize in creating clean,
          responsive websites that shine on every screen. With my current stack
          of <b>Next.js, Tailwind CSS, and TypeScript</b>, I ensure simplicity and
          functionality in every project I tackle.
        </p>
        <p className="mt-5 text-gray-500 text-sm md:text-lg leading-relaxed">
          Excited to dive into Web3, I&apos;m all about staying ahead in the
          ever-evolving world of web development.
        </p>
      </div>
    </section>
  );
};

export default About;