import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen"; 

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = (target) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    }, 1000); 
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg shadow-lg">
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
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("home");
                }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("about");
                }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("projects");
                }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("contact");
                }}
                className="bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent leading-right font-bold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-cyan-400"></div>
      </nav>
    </>
  );
};