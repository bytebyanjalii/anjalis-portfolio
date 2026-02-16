export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden" style={{ backgroundColor: '#F7F3EE' }}>
      {/* Background subtle noise texture */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" opacity="0.05"/%3E%3C/svg%3E")',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-5xl w-full">
        {/* --- DECORATIVE DOODLES --- */}

        {/* Top-left circle doodle */}
        <svg className="absolute -top-12 -left-8 w-20 h-20 text-rose-200 hero-doodle opacity-40" style={{ '--rotation': '-12deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        </svg>

        {/* Top-right stars cluster */}
        <svg className="absolute -top-6 right-0 md:right-8 w-24 h-24 text-amber-100 hero-doodle opacity-50" style={{ '--rotation': '8deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Star 1 */}
          <path d="M 30 20 L 35 35 L 50 35 L 38 45 L 43 60 L 30 50 L 17 60 L 22 45 L 10 35 L 25 35 Z" fill="currentColor" opacity="0.5" />
          {/* Star 2 */}
          <path d="M 70 15 L 73 25 L 85 25 L 75 32 L 78 42 L 70 35 L 62 42 L 65 32 L 55 25 L 67 25 Z" fill="currentColor" opacity="0.4" />
          {/* Star 3 */}
          <path d="M 60 50 L 62 57 L 70 57 L 63 62 L 65 69 L 60 64 L 55 69 L 57 62 L 50 57 L 58 57 Z" fill="currentColor" opacity="0.35" />
        </svg>

        {/* Bottom-left sparkles */}
        <svg className="absolute -bottom-16 -left-12 w-28 h-28 text-rose-100 hero-doodle opacity-40" style={{ '--rotation': '-18deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sparkle 1 */}
          <circle cx="25" cy="30" r="2" fill="currentColor" />
          <path d="M 25 22 L 25 38" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <path d="M 17 30 L 33 30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          {/* Sparkle 2 */}
          <circle cx="70" cy="60" r="2" fill="currentColor" />
          <path d="M 70 54 L 70 66" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M 64 60 L 76 60" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        </svg>

        {/* Bottom-right curved arrow */}
        <svg className="absolute bottom-0 -right-4 md:right-12 w-20 h-20 text-amber-100 hero-doodle opacity-45" style={{ '--rotation': '15deg' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 70 Q 40 30 70 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 65 10 L 70 20 L 60 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>

        {/* --- CENTERED CONTENT --- */}
        <div className="relative text-center">
          {/* Handwritten "Anjali" annotation - positioned directly above PORTFOLIO, left-of-center */}
          <div className="absolute animate-float-name" style={{ top: '-24px', left: 'calc(50% - 60px)', transform: 'rotate(-3deg)' }}>
            <p className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', letterSpacing: '0.02em' }}>
              Anjali
            </p>
          </div>

          {/* Small curved arrow from Anjali downward toward PORTFOLIO */}
          <svg className="absolute w-32 md:w-40 h-20 pointer-events-none" style={{ top: '0px', left: 'calc(50% - 64px)', opacity: 0.7 }} viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 70 10 Q 65 40 70 90" stroke="#E6A6B0" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M 68 85 L 70 100 L 72 85" stroke="#E6A6B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {/* Main title "PORTFOLIO" */}
          <div className="relative inline-block">
            <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight" style={{ color: '#8B5A2B', fontFamily: "'Abril Fatface', serif", letterSpacing: '-0.03em' }}>
              PORTFOLIO
            </h1>

            {/* Year annotation - positioned right side, near title */}
            <div className="absolute top-1/4 -right-16 md:-right-28 animate-float-year">
              <p className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', opacity: 0.6 }}>
                2026
              </p>
            </div>
          </div>

          {/* Underline accent */}
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="h-1.5 w-40 sm:w-48 md:w-56" style={{ backgroundColor: '#E6A6B0' }}></div>
          </div>

          {/* Role subtitle with soft highlight background */}
          <div className="hero-subtitle relative inline-block mt-8 md:mt-10 mx-auto">
            <div className="absolute inset-0 -m-3 md:-m-4 opacity-25" style={{ backgroundColor: '#E6A6B0', borderRadius: '12px', transform: 'rotate(-1.5deg)' }}></div>
            <p className="relative text-base sm:text-lg md:text-xl py-3 md:py-4 px-6 md:px-8" style={{ color: '#8B5A2B', fontFamily: "'Patrick Hand', cursive", fontWeight: '500', letterSpacing: '0.01em' }}>
              Data Scientist | AI & ML Engineer
            </p>
          </div>
        </div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .hero-title {
            font-size: 3rem;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        /* Floating animations */
        @keyframes floatName {
          0%, 100% {
            transform: translateY(0px) rotate(-3deg);
          }
          50% {
            transform: translateY(-3px) rotate(-3deg);
          }
        }

        @keyframes floatYear {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-float-name {
          animation: floatName 8s ease-in-out infinite;
        }

        .animate-float-year {
          animation: floatYear 8s ease-in-out infinite 0.3s;
        }
      `}</style>
    </section>
  )
}
