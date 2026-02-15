import SectionWrapper from '../components/SectionWrapper'

export default function Hero() {
  return (
    <SectionWrapper className="bg-amber-50 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
          PORTFOLIO
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light">
          Data Scientist | AI Engineer
        </p>
        <div className="pt-8">
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about transforming data into insights and building intelligent systems
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
