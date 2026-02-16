import Reveal from './Reveal'

export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  image, 
  githubLink 
}) {
  return (
    <Reveal>
      <div className="flex-shrink-0 w-80 rounded-lg overflow-hidden soft-shadow hover-lift project-card" style={{ backgroundColor: '#F7F3EE' }}>
      {/* Image placeholder */}
      <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: 'rgba(230, 166, 176, 0.2)' }}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <p className="text-sm" style={{ color: '#8B5A2B' }}>Project Image</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-bold mb-2" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>{title}</h3>
        <p className="text-xs mb-4" style={{ color: '#4a4a4a' }}>{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack && techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs rounded-full font-medium" style={{ backgroundColor: '#E6A6B0', color: '#8B5A2B' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-2 rounded-md text-sm font-medium transition-smooth" style={{ backgroundColor: '#8B5A2B', color: 'white' }}
          >
            View on GitHub
          </a>
        )}
      </div>
      </div>
    </Reveal>
  )
}
