import SectionWrapper from '../components/SectionWrapper'

export default function Publications() {
  const publications = [
    {
      title: 'Advances in Computer Vision using Deep Convolutional Networks',
      description: 'A comprehensive study on modern CNN architectures and their applications in image recognition tasks.',
      year: 2024,
      journal: 'Journal of AI Research',
    },
    {
      title: 'Optimizing Machine Learning Models for Edge Deployment',
      description: 'Research on model compression and optimization techniques for edge computing environments.',
      year: 2024,
      journal: 'International Conference on ML Systems',
    },
    {
      title: 'Transfer Learning in Real-World Applications',
      description: 'Practical insights on implementing transfer learning for limited dataset scenarios.',
      year: 2023,
      journal: 'ML Engineering Review',
    },
  ]

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-12" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Publications
      </h2>

      <div className="space-y-8">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="pb-8 border-b last:border-b-0 px-4 py-4 rounded-lg transition-smooth" style={{ borderColor: '#E6A6B0', borderBottomWidth: '1px' }}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
                  {pub.title}
                </h3>
                <p className="mb-3" style={{ color: '#4a4a4a' }}>{pub.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="italic" style={{ color: '#8B5A2B', opacity: 0.7 }}>{pub.journal}</span>
                  <span style={{ color: '#8B5A2B', opacity: 0.5 }}>•</span>
                  <span style={{ color: '#8B5A2B', opacity: 0.7 }}>{pub.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
