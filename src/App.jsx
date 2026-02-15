import Hero from './sections/Hero'
import About from './sections/About'
import EducationExperience from './sections/EducationExperience'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Publications from './sections/Publications'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-900">
      <Hero />
      <About />
      <EducationExperience />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
    </div>
  )
}

export default App
