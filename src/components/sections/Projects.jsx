import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border-4 animate-border transition-transform hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <img
                src="data:image/jpeg;base64,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"

                alt="Awesome Todos"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Awesome Todos</h3>
              <p className="text-gray-400 mb-4">
                You can add, remove, and mark tasks as complete.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express.js", "React.js", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="text-blue-500 py-1 px-3 rounded-full text-sm bg-transparent hover:bg-blue-500/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://awesometodosapp-44i4.onrender.com"
                  className="relative inline-block px-6 py-3 font-medium text-blue-500 rounded-lg border-2 border-transparent bg-transparent transition-all hover:text-white hover:bg-blue-500"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border-4 animate-border transition-transform hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
              <img
                src="https://scontent.fceb8-1.fna.fbcdn.net/v/t1.15752-9/484407705_1335541070929917_6816982706953198281_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFh4WqnDbt9ZPpbICRLWkYogfVOAv_JkgeB9U4C_8mSB_srCNWOBO1fBSuDH6hylOZdWGPsjomMwsoNgwFsWzP3&_nc_ohc=hwcLGImKl9AQ7kNvgHSmfxm&_nc_oc=AdkJSkNhqbtRb7A1KOcpnItdJPTNBMxoCqSZMRgzZfJUWUC2t1wQCus_rZLykACVCwrxAnal_axlgEmrmZGskNlm&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=scontent.fceb8-1.fna&oh=03_Q7cD1wFGbWuwRWR4ocGbJeJuFokGQVbOmSAvOxNHhF3CS2ja_g&oe=68109E12"
                alt="MapaWit"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">MapaWit</h3>
              <p className="text-gray-400 mb-4">Interactive Campus Map</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["TailwindCSS", "React.js", "Mappedin", "Express.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="text-blue-500 py-1 px-3 rounded-full text-sm bg-transparent hover:bg-blue-500/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.figma.com/design/u0b0NKpPOiAFU61uG4TX2p/mapaWIT_Design?node-id=0-1&p=f&t=MAVGaJ7230LJOCXo-0"
                  className="relative inline-block px-6 py-3 font-medium text-blue-500 rounded-lg border-2 border-transparent bg-transparent transition-all hover:text-white hover:bg-blue-500"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};