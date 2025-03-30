import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-blue-400 hover:-translate-y-1 hover:border-blue-400 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Awesome Todos </h3>
              <p className="text-gray-400 mb-4">
              You can add, remove, and mark tasks as complete.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://awesometodosapp-44i4.onrender.com"
                  className="text-blue-400 hover:text-blue-400 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-blue-400
              hover:-translate-y-1 hover:border-blue-400
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">MapaWit</h3>
              <p className="text-gray-400 mb-4">
                Interactive Campus Map
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Tailwindss", "React.js", "Mappedin", "Express.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-400 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            
          </div>
        </div>


      </RevealOnScroll>
    </section>
  );
};
