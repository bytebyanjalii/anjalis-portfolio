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
    <SectionWrapper className="bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Publications
      </h2>

      <div className="space-y-8">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="pb-8 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 px-4 py-4 rounded-lg transition-smooth"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 mb-3">{pub.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-gray-500 italic">{pub.journal}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{pub.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
