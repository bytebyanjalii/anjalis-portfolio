import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Certificates from './sections/Certificates'
import Publications from './sections/Publications'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900">
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Certificates />
      <Publications />
      <Contact />
    </div>
  )
}

export default App
