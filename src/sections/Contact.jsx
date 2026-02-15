import SectionWrapper from '../components/SectionWrapper'

export default function Contact() {
  return (
    <SectionWrapper className="bg-amber-50">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-lg">
          I'd love to hear from you. Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
          <a
            href="mailto:contact@example.com"
            className="px-8 py-3 bg-amber-600 text-white rounded-lg font-medium transition-smooth hover:bg-amber-700"
          >
            Email Me
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium transition-smooth hover:bg-amber-50"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg font-medium transition-smooth hover:bg-amber-50"
          >
            LinkedIn
          </a>
        </div>

        <div className="pt-12 border-t border-gray-300">
          <p className="text-gray-500 text-sm">
            © 2025 Anjali's Portfolio. Crafted with care.
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
