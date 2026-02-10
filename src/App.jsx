import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Publications from "./sections/Publications";

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
    </div>
  );
}

export default App;
