import SectionWrapper from '../components/SectionWrapper'
import Reveal from '../components/Reveal'
import Photo from '../../Images/Photo.PNG'

export default function About() {
  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 items-center">
        {/* Profile photo - first column on desktop, top on mobile */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="w-full max-w-xs md:max-w-full h-64 md:h-96 rounded-lg overflow-hidden border" style={{ borderColor: '#E6A6B0' }}>
            <img src={Photo} alt="Anjali Kashyap" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Text Section - spans remaining two columns on desktop */}
        <div className="space-y-6 md:col-span-2">
          <Reveal>
            <div style={{ borderBottom: '3px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '1.5rem', opacity: 0.8 }}>
              <h2 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
                About Me
              </h2>
            </div>
          </Reveal>
          <p className="text-gray-700 text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
            I'm a passionate data scientist and AI engineer with a deep interest in machine learning, 
            deep learning, and their real-world applications. With expertise in building end-to-end 
            AI solutions, I combine technical knowledge with creative problem-solving to develop 
            intelligent systems that drive business value.
          </p>
          <p className="text-gray-700 text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
            My journey in AI has equipped me with proficiency in Python, machine learning frameworks, 
            and deploying scalable solutions. I'm committed to continuous learning and contributing 
            to open-source projects that advance the field of artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 text-sm font-medium rounded-full" style={{ backgroundColor: '#E6A6B0', color: '#8B5A2B' }}>
              Machine Learning
            </div>
            <div className="px-4 py-2 text-sm font-medium rounded-full" style={{ backgroundColor: '#E6A6B0', color: '#8B5A2B' }}>
              Deep Learning
            </div>
            <div className="px-4 py-2 text-sm font-medium rounded-full" style={{ backgroundColor: '#E6A6B0', color: '#8B5A2B' }}>
              AI Solutions
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
