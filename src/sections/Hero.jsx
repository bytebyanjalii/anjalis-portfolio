export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 bg-[#020617]">
      <div className="max-w-3xl">
        <p className="text-cyan-400 tracking-widest mb-4">
          HI, I’M ANJALI 👋
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-100 font-sans drop-shadow-lg">
          Building
          <br />
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]">
            Digital Experiences
          </span>
        </h1>

        <p className="mt-6 text-slate-300">
          Data Science • AI • Full-Stack Projects <br />
          Turning ideas into impactful products.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-2 border border-slate-300 text-slate-100 
            hover:bg-slate-800 transition duration-300 rounded-md">
            View Projects
          </button>

          <button className="px-6 py-2 border border-slate-300 text-slate-100 
            hover:bg-slate-800 transition duration-300 rounded-md">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
