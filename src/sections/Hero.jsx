export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <p className="text-cyan-400 tracking-widest mb-4">
          HI, I’M ANJALI 👋
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Building
          <br />
          <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
            Digital Experiences
          </span>
        </h1>

        <p className="mt-6 text-slate-300">
          Data Science • AI • Full-Stack Projects <br />
          Turning ideas into impactful products.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <button className="px-6 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
            View Projects
          </button>
          <button className="px-6 py-2 rounded-lg border border-slate-600 hover:border-cyan-400 hover:text-cyan-400 transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
