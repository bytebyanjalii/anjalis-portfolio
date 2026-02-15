export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#F7F3EE' }}>
      {/* Background subtle noise/texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-4xl w-full">
        {/* Decorative doodles */}
        <svg className="absolute -top-16 -left-12 w-24 h-24 text-amber-300 hero-doodle opacity-60" style={{ '--rotation': '-15deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <path d="M 20 50 L 80 50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <path d="M 50 20 L 50 80" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        </svg>

        <svg className="absolute -bottom-20 -right-16 w-32 h-32 text-pink-300 hero-doodle opacity-50" style={{ '--rotation': '20deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 10 L 60 40 L 90 40 L 67 60 L 77 90 L 50 70 L 23 90 L 33 60 L 10 40 L 40 40 Z" fill="currentColor" opacity="0.6" />
          <path d="M 50 10 L 60 40 L 90 40 L 67 60 L 77 90 L 50 70 L 23 90 L 33 60 L 10 40 L 40 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        <svg className="absolute top-1/4 -right-8 w-16 h-16 text-rose-200 hero-doodle opacity-70" style={{ '--rotation': '-10deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
          <path d="M 50 10 L 50 20" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 50 80 L 50 90" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 10 50 L 20 50" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 80 50 L 90 50" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {/* Year annotation */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hero-doodle opacity-70" style={{ '--rotation': '-5deg' }}>
          <p className="text-2xl font-bold text-amber-900" style={{ fontFamily: "'Caveat', cursive" }}>2026</p>
        </div>

        {/* Center content */}
        <div className="text-center space-y-8">
          {/* Handwritten name annotation */}
          <div className="relative inline-block w-full">
            <p className="text-xl md:text-2xl hero-name" style={{ fontFamily: "'Caveat', cursive", color: '#8B5A2B', letterSpacing: '0.05em' }}>
              Hey, I'm Anjali 👋
            </p>
          </div>

          {/* Main title */}
          <div className="relative">
            <h1 className="hero-title text-7xl sm:text-8xl md:text-9xl font-black leading-none mb-2" style={{ color: '#8B5A2B', letterSpacing: '-0.02em' }}>
              PORTFOLIO
            </h1>
            
            {/* Underline accent */}
            <div className="flex justify-center mt-6">
              <div className="h-1 w-32 sm:w-48" style={{ backgroundColor: '#E6A6B0' }}></div>
            </div>
          </div>

          {/* Subtitle with soft highlight */}
          <div className="hero-subtitle relative inline-block">
            <div className="absolute inset-0 -m-2 opacity-30" style={{ backgroundColor: '#E6A6B0', borderRadius: '8px', transform: 'rotate(-2deg)' }}></div>
            <p className="relative text-lg sm:text-xl md:text-2xl py-3 px-6" style={{ color: '#8B5A2B', fontFamily: "'Patrick Hand', cursive", fontWeight: '500' }}>
              Data Scientist | AI & ML Engineer
            </p>
          </div>

          {/* Arrow down annotation */}
          <svg className="w-8 h-8 mx-auto mt-8 hero-doodle opacity-70" style={{ '--rotation': '0deg', color: '#8B5A2B' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 20 L 50 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M 35 55 L 50 70 L 65 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  )
}
