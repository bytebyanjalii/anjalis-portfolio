import SectionWrapper from '../components/SectionWrapper'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-6">
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

        {/* Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 rounded-lg soft-shadow flex items-center justify-center" style={{ backgroundColor: '#E6A6B0', opacity: 0.3 }}>
            <div className="text-center">
              <p className="text-lg font-light" style={{ color: '#8B5A2B' }}>Image Placeholder</p>
              <p className="text-sm mt-2" style={{ color: '#8B5A2B', opacity: 0.7 }}>Profile / Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
