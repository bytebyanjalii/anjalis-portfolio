import SectionWrapper from '../components/SectionWrapper'

export default function Certificates() {
  const certificateGroups = [
    {
      category: 'College Internship Certificates',
      certificates: [
        {
          title: 'AI-Powered Full-Stack Development Internship',
          image: '/Images/certificates/AI-Powered Full-Stack Development Internship.jpg',
        },
        {
          title: 'Computer Vision & Deep Learning Internship',
          image: '/Images/certificates/Computer Vision & Deep Learning Internship.jpg',
        },
        {
          title: 'Python & Machine Learning Internship',
          image: '/Images/certificates/Python & Machine Learning Internship.jpg',
        },
      ],
    },
    {
      category: 'Courses & Online Learning Certificates',
      certificates: [
        {
          title: 'Data Structure and Algorithms in C++ – Udemy',
          image: '/Images/certificates/Data Structure and Algorithms in C++ certificate by Udemy.jpg',
        },
        {
          title: 'Oracle Cloud Infrastructure – AI Foundations Associate (2025)',
          image: '/Images/certificates/Oracle Cloud Infrastructure – AI Foundations Associate (2025).jpg',
        },
      ],
    },
    {
      category: 'NPTEL Certifications',
      certificates: [
        {
          title: 'Developing Soft Skills and Personality',
          image: '/Images/certificates/Developing Soft Skills And Personality.jpg',
        },
        {
          title: 'Soft Skill Development',
          image: '/Images/certificates/Soft Skill Development.jpg',
        },
      ],
    },
  ]

  const handleCertificateClick = (image) => {
    window.open(image, '_blank')
  }

  return (
    <SectionWrapper style={{ backgroundColor: '#F7F3EE' }}>
      <div style={{ borderBottom: '3px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '2rem', opacity: 0.8 }}>
        <h2 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
          Certificates
        </h2>
      </div>
      <p className="mb-12 text-base" style={{ color: '#4a4a4a' }}>
        Professional credentials and certifications earned through courses and internships
      </p>

      {/* Certificate Groups */}
      <div className="space-y-12">
        {certificateGroups.map((group, groupIdx) => (
          <div key={groupIdx}>
            <h3
              className="text-2xl font-bold mb-6 pb-3 border-b-2"
              style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B', borderColor: '#E6A6B0' }}
            >
              {group.category}
            </h3>

            {/* Certificate Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.certificates.map((cert, certIdx) => (
                <div
                  key={certIdx}
                  className="cursor-pointer rounded-lg overflow-hidden soft-shadow transition-smooth"
                  style={{
                    transform: 'scale(1)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(139, 90, 43, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                  }}
                  onClick={() => handleCertificateClick(cert.image)}
                >
                  {/* Certificate Image */}
                  <div className="w-full h-64 bg-gray-200 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Certificate Title */}
                  <div className="p-4" style={{ backgroundColor: '#F7F3EE' }}>
                    <p className="text-sm font-semibold text-center" style={{ color: '#8B5A2B' }}>
                      {cert.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
