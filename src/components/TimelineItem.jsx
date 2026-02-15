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
    <div className="rounded-lg p-6 md:p-8 soft-shadow hover-lift mb-6" style={{ backgroundColor: '#F7F3EE', border: '2px solid #E6A6B0' }}>
      <div className="mb-2">
        <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>{title}</h3>
        <p className="text-sm md:text-base font-medium" style={{ color: '#8B5A2B', opacity: 0.8 }}>{organization}</p>
        <p className="text-xs" style={{ color: '#8B5A2B' }}>{duration}</p>
      </div>

      {description && (
        <p className="mt-4 mb-4" style={{ color: '#4a4a4a' }}>{description}</p>
      )}

      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: '#4a4a4a' }}>
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
            className="px-4 py-2 rounded-md text-sm font-medium transition-smooth" style={{ backgroundColor: '#8B5A2B', color: 'white' }}
          >
            Certificate
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-sm font-medium transition-smooth" style={{ borderWidth: '2px', borderColor: '#8B5A2B', color: '#8B5A2B' }}
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}
