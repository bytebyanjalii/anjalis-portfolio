import Tag from './Tag'

export default function TimelineItem({ 
  title, 
  organization, 
  duration, 
  description, 
  bullets, 
  certificateLink, 
  githubLink 
}) {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 soft-shadow hover-lift mb-6">
      <div className="mb-2">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm md:text-base text-amber-700 font-medium">{organization}</p>
        <p className="text-sm text-gray-600">{duration}</p>
      </div>

      {description && (
        <p className="text-gray-700 mt-4 mb-4">{description}</p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="text-sm md:text-base">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-3 flex-wrap">
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-amber-600 text-white rounded-md text-sm font-medium transition-smooth hover:bg-amber-700 hover:scale-105"
          >
            Certificate
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2 border-gray-400 text-gray-700 rounded-md text-sm font-medium transition-smooth hover:border-amber-600 hover:text-amber-600"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
