import SectionWrapper from '../components/SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div style={{ borderBottom: '3px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '1.5rem', opacity: 0.8, display: 'inline-block', width: '100%' }}>
          <h2 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
            Get In Touch
          </h2>
        </div>
        <p className="text-base" style={{ color: '#4a4a4a' }}>
          I'd love to hear from you. Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
          <a
            href="mailto:bytebyanjali@gmail.com"
            className="px-8 py-3 rounded-lg font-medium transition-smooth" style={{ backgroundColor: '#8B5A2B', color: 'white' }}
          >
            Email Me
          </a>
          <a
            href="https://github.com/bytebyanjalii"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 rounded-lg font-medium transition-smooth" style={{ borderColor: '#8B5A2B', color: '#8B5A2B' }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anjali-776524312/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 rounded-lg font-medium transition-smooth" style={{ borderColor: '#8B5A2B', color: '#8B5A2B' }}
          >
            LinkedIn
          </a>
        </div>

        <div className="pt-12" style={{ borderTop: '1px solid #E6A6B0' }}>
          <p className="text-sm" style={{ color: '#8B5A2B', opacity: 0.7 }}>
            © 2026 Anjali's Portfolio. Crafted with care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
