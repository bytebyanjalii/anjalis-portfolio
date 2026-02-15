import SectionWrapper from '../components/SectionWrapper'

export default function About() {
  return (
    <SectionWrapper className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm a passionate data scientist and AI engineer with a deep interest in machine learning, 
            deep learning, and their real-world applications. With expertise in building end-to-end 
            AI solutions, I combine technical knowledge with creative problem-solving to develop 
            intelligent systems that drive business value.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My journey in AI has equipped me with proficiency in Python, machine learning frameworks, 
            and deploying scalable solutions. I'm committed to continuous learning and contributing 
            to open-source projects that advance the field of artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 bg-amber-100 text-amber-900 rounded-lg text-sm font-medium">
              Machine Learning
            </div>
            <div className="px-4 py-2 bg-amber-100 text-amber-900 rounded-lg text-sm font-medium">
              Deep Learning
            </div>
            <div className="px-4 py-2 bg-amber-100 text-amber-900 rounded-lg text-sm font-medium">
              AI Solutions
            </div>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg soft-shadow flex items-center justify-center">
            <div className="text-center">
              <p className="text-amber-900 text-lg font-light">Image Placeholder</p>
              <p className="text-amber-700 text-sm mt-2">Profile / Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
