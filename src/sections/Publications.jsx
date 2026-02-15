import SectionWrapper from '../components/SectionWrapper'

export default function Publications() {
  const publication = {
    title: 'Leveraging AI and Data-Driven Techniques for Solar Power Prediction',
    date: 'October 2025',
    conference: 'Accepted for Oral Presentation at AIST 2025',
    conferenceDetail: '(International Conference on Artificial Intelligence & Speech Technology, IGDTUW)',
    description: [
      'Designed and evaluated an end-to-end solar power forecasting framework using real-world weather and energy datasets.',
      'Conducted a comparative analysis of Machine Learning and Deep Learning models, including Random Forest, GRU, and Transformer-based architectures, to identify optimal short-term forecasting performance.',
      'Achieved improved short-term solar power prediction accuracy through feature engineering, temporal modeling, and data-driven optimization.',
      'Led a team of two researchers, demonstrating strong leadership, collaboration, and research communication skills throughout experimentation and presentation phases.',
    ],
    image: '/Images/leveragingsp.png',
    link: 'https://drive.google.com/drive/folders/14Kgwmi6w4daC6lrvV--PH0ApHK_7s3we?usp=sharing',
  }

  const handleImageClick = (image) => {
    window.open(image, '_blank')
  }

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-12" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Research & Publications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Publication Image */}
        <div className="lg:col-span-1 flex items-center">
          <div
            className="w-full rounded-lg soft-shadow overflow-hidden cursor-pointer transition-smooth"
            style={{
              transform: 'scale(1)',
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}
            onClick={() => handleImageClick(publication.image)}
          >
            <img
              src={publication.image}
              alt={publication.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Publication Details */}
        <div className="lg:col-span-2 flex flex-col justify-start">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
            {publication.title}
          </h3>

          <div className="mb-4 flex flex-col gap-1">
            <p className="font-semibold text-sm" style={{ color: '#8B5A2B' }}>
              {publication.conference}
            </p>
            <p className="text-sm" style={{ color: '#4a4a4a' }}>
              {publication.conferenceDetail}
            </p>
            <p className="text-sm italic" style={{ color: '#8B5A2B', opacity: 0.7 }}>
              {publication.date}
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {publication.description.map((point, idx) => (
              <p key={idx} className="text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                • {point}
              </p>
            ))}
          </div>

          {/* View Paper Button */}
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-md text-sm font-medium transition-smooth w-fit"
            style={{ backgroundColor: '#8B5A2B', color: 'white' }}
            onMouseOver={(e) => (e.target.style.opacity = '0.85')}
            onMouseOut={(e) => (e.target.style.opacity = '1')}
          >
            View Paper & Presentation
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}

