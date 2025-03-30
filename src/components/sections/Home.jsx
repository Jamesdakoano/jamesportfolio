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
              src="https://scontent.fceb8-1.fna.fbcdn.net/v/t39.30808-6/465918685_2853847418125933_656620028390066708_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeELSS5HipNHFPQmLjFWh6qKxrJRmAURCafGslGYBREJp_t-vRyxSJjwsO3D5CMy86S4iDIdnOgQPh7o-z-g1q_J&_nc_ohc=11jgIlSQBwUQ7kNvgFBFZMG&_nc_oc=AdntHIddRMhE3gBzPlOGlJvlQ8d9_3kFSU2Cu9kXbg8Ft9R0wlOLjYNBrISqsaACvoBYs99mj0XXHw4B0WKh4-GI&_nc_zt=23&_nc_ht=scontent.fceb8-1.fna&_nc_gid=dMMrtympZpLZcTdo_nigCQ&oh=00_AYEgMg7qZkX7zYM8T9nkX6TrdTwVsdl_nF8HAAu4hU0QtA&oe=67EEAF66"
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