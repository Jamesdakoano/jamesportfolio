import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center justify-center w-full space-x-8">
            <a
              href="#home"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
            >
              About
            </a>
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};