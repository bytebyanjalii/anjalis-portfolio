export default function ProjectCard({ 
  title, 
  description, 
  techStack, 
  image, 
  githubLink 
}) {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden soft-shadow hover-lift">
      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <p className="text-amber-800 text-sm">Project Image</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack && techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full"
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
            className="inline-block px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-medium transition-smooth hover:bg-amber-700"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}
