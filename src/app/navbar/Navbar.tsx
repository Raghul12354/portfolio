import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between shadow-md h-20 px-60 bg-white">
      <h3>
        Raghul<code>.Dev &#128187;</code>
      </h3>
      <nav className="flex gap-10">
        <Link className="nav_links" href="/">
          Home
        </Link>
        <Link className="nav_links" href="#about">
          About
        </Link>
        <Link className="nav_links" href="#projects">
          Projects
        </Link>
        <Link className="nav_links" href="#contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;