import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { LoadingScreen } from "../LoadingScreen"; // Ensure you have the LoadingScreen component

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (target) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    }, 1000); // Simulate a 1-second loading animation
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative bg-gray-900"
        style={{
          backgroundImage: "url('https://media1.giphy.com/media/l1J3ThqHNWUVtZV1m/giphy.webp?cid=ecf05e470azkfot0vrc11x9pnd97mcurel4sipl07y9zc6jm&ep=v1_gifs_related&rid=giphy.webp&ct=g')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left z-10 px-4">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hi, I'm James Pico
              </h1>

              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                I may be a slow learner, but I’ll keep going no matter how hard it gets.
              </p>
            </div>

            <div className="md:w-1/2 flex flex-col items-center md:items-end">
              <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full p-2 mb-6 group">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500"></div>
                <img
                  src="https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/486028092_1117515830131271_7495457875870986086_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFcPf1RvN5Yq__OKfY0O6SbZ8q7QXHCIdVnyrtBccIh1cqCzDPUrtwKFOxy9YcKn3c3SdPK0TyH1mK2jxNgzO72&_nc_ohc=xPrn5JivOLEQ7kNvgExQ9SG&_nc_oc=Adm_G_vhivPD_Ht1SPijiPyGo29I7t29s6PhJFANnj1ZwBuH8BNX8W4gWPfqfB14J3I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wGWf1LQFfnVISVkteLcXT7irqks-2N36EIN3y3tS6fCCQ&oe=6811A275"
                  alt="James Pico"
                  className="relative w-full h-full rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-blue-300 text-lg font-bold">PADAYON!</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-4">
                <button
                  onClick={() => handleButtonClick("projects")}
                  className="bg-cyan-600 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                  View Projects
                </button>

                <button
                  onClick={() => handleButtonClick("contact")}
                  className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded-full font-medium transition-all duration-200 
        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-cyan-500/10"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};