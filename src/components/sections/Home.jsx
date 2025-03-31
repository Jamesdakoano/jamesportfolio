import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gray-900" 
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left z-10 px-4">
          
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
              Hi, I'm James Pico
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I may be a slow learner, but I’ll keep going no matter how hard it gets.
            </p>
          </div>

         
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <img
              src="https://scontent.filo1-1.fna.fbcdn.net/v/t1.15752-9/486028092_1117515830131271_7495457875870986086_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFcPf1RvN5Yq__OKfY0O6SbZ8q7QXHCIdVnyrtBccIh1cqCzDPUrtwKFOxy9YcKn3c3SdPK0TyH1mK2jxNgzO72&_nc_ohc=xPrn5JivOLEQ7kNvgExQ9SG&_nc_oc=Adm_G_vhivPD_Ht1SPijiPyGo29I7t29s6PhJFANnj1ZwBuH8BNX8W4gWPfqfB14J3I&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.filo1-1.fna&oh=03_Q7cD1wGWf1LQFfnVISVkteLcXT7irqks-2N36EIN3y3tS6fCCQ&oe=6811A275"
              alt="James Pico"
              className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-blue-500 p-2 mb-6"
            />
            <div className="flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden 
      hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-full font-medium transition-all duration-200 
      hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};