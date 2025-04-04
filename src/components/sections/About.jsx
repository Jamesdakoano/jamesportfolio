import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-cyan-500" 
      style={{
        backgroundImage: "url('https://media1.giphy.com/media/l1J3ThqHNWUVtZV1m/giphy.webp?cid=ecf05e470azkfot0vrc11x9pnd97mcurel4sipl07y9zc6jm&ep=v1_gifs_related&rid=giphy.webp&ct=g')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-4 border-cyan-500 hover:-translate-y-1 transition-all bg-gray-900">
            <p className="text-gray-300 mb-6">
              I'm a second-year IT student and a <strong>Student Assistant at WIT,</strong> eager to explore design and cybersecurity. Learning isn’t always easy, and I take my time, but I believe in pushing through challenges and improving step by step. I'm excited to grow, build my skills, and see where this journey takes me.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-4 border-cyan-500 hover:-translate-y-1 transition-all bg-gray-900">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Primary Education </strong> - Rizal Elementary School
                (2010 - 2016)
              </li>
              <li>
                <strong>Secondary </strong> - Iloilo City National Highschool (2017-2023)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-4 border-cyan-500 hover:-translate-y-1 transition-all bg-gray-900">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  {" "}
                  Soon...{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};