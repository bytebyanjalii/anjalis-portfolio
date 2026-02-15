import SectionWrapper from '../components/SectionWrapper'

export default function Certificates() {
  const certificateGroups = [
    {
      category: 'College Internship Certificates',
      certificates: [
        {
          title: 'AI-Powered Full-Stack Development Internship',
          link: 'https://drive.google.com/file/d/1eVymNpYwAfKkLl9VhKj18hg9d-ERxsnK/view',
        },
        {
          title: 'Computer Vision & Deep Learning Internship',
          link: 'https://drive.google.com/file/d/1QCydGSLHrpFKFnaMk6npw59_YLXRnjVh/view',
        },
        {
          title: 'Python & Machine Learning Internship',
          link: 'https://drive.google.com/file/d/1EAHGz3Q-tkYwST_ifUM2Lg4RPSAhL6Wc/view',
        },
      ],
    },
    {
      category: 'Courses & Online Learning Certificates',
      certificates: [
        {
          title: 'Data Science Specialization',
          link: 'https://drive.google.com/file/d/1OWIZkuHPvGH274_DPO4UW33DTucF-HA3/view',
        },
        {
          title: 'Machine Learning with Python',
          link: 'https://drive.google.com/file/d/1QVPqe_ounB86yppePXCn6KeN44aJ1wCH/view',
        },
      ],
    },
    {
      category: 'NPTEL Certifications',
      certificates: [
        {
          title: 'The Joy of Computing using Python',
          link: 'https://drive.google.com/file/d/1kLjhTDS-Xnf24hay9Zs6kc_2Pu2x0L6F/view',
        },
        {
          title: 'Introduction to Data Science',
          link: 'https://drive.google.com/file/d/1tOpPyDF5kzrnRiHT1DmWX9Jp6fKxaApn/view',
        },
      ],
    },
  ]

  return (
    <SectionWrapper style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Certificates
      </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.certificates.map((cert, certIdx) => (
                <div
                  key={certIdx}
                  className="p-5 rounded-lg soft-shadow transition-smooth hover-lift"
                  style={{ backgroundColor: '#F7F3EE', border: '1px solid #E6A6B0' }}
                >
                  <h4 className="font-semibold mb-4" style={{ fontFamily: "'Inter', sans-serif", color: '#8B5A2B' }}>
                    {cert.title}
                  </h4>

                  {/* View Certificate Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 rounded-md text-sm font-medium transition-smooth"
                    style={{ backgroundColor: '#8B5A2B', color: 'white' }}
                    onMouseOver={(e) => (e.target.style.opacity = '0.85')}
                    onMouseOut={(e) => (e.target.style.opacity = '1')}
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
