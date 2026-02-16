import SectionWrapper from '../components/SectionWrapper'

export default function Resume() {
  const contact = [
    { label: 'Date of Birth', value: '25 October 2004' },
    { label: 'Phone', value: '+91 9911368800' },
    { label: 'Email', value: 'bytebyanjali@gmail.com', href: 'mailto:bytebyanjali@gmail.com' },
    { label: 'LinkedIn', value: 'anjali-776524312', href: 'https://www.linkedin.com/in/anjali-776524312/' },
    { label: 'GitHub', value: 'bytebyanjalii', href: 'https://github.com/bytebyanjalii' },
  ]

  const education = {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering (Artificial Intelligence)',
    institution: 'Indira Gandhi Delhi Technical University for Women',
    location: 'Delhi',
    duration: '2022 – 2026',
  }

  const skills = [
    'Data Science', 'Machine Learning', 'Deep Learning', 'Computer Vision',
    'NLP', 'Python', 'SQL', 'React', 'Tailwind CSS'
  ]

  const tools = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '📊' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'Scikit-learn', icon: '📈' },
    { name: 'Git', icon: '⚙️' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Figma', icon: '🎨' },
  ]

  const experiences = [
    {
      title: 'AI-Powered Full-Stack Development Intern',
      organization: 'Department of AI & Data Science, IGDTUW',
      duration: 'June 2025 – July 2025',
      bullets: [
        'Built AI-enabled full-stack web applications integrating ML models with frontend interfaces',
        'Designed and implemented RESTful backend APIs for data processing and model inference',
        'Developed interactive dashboards to visualize model outputs and analytics',
        'Collaborated with faculty mentors and team members on end-to-end deployment',
        'Applied best practices in version control, testing, and documentation',
      ]
    },
    {
      title: 'Computer Vision & Deep Learning Intern',
      organization: 'Center of Excellence – AI, IGDTUW',
      duration: 'June 2024 – July 2024',
      bullets: [
        'Developed a Brain Tumor Segmentation system using CNN-based deep learning architectures',
        'Performed image preprocessing, augmentation, and dataset normalization',
        'Trained and evaluated models on medical imaging datasets using performance metrics',
        'Analyzed model accuracy, loss, and segmentation quality to improve results',
        'Gained hands-on experience with end-to-end deep learning workflows',
      ]
    },
    {
      title: 'Python & Machine Learning Intern',
      organization: 'Anveshan Foundation, IGDTUW',
      duration: 'June 2023 – July 2023',
      bullets: [
        'Built a Crop Yield Prediction system using supervised machine learning algorithms',
        'Conducted data cleaning, feature engineering, and exploratory data analysis',
        'Compared multiple ML models to identify optimal performance',
        'Evaluated models using regression metrics such as RMSE and R²',
        'Documented findings and insights for project presentation',
      ]
    },
  ]

  return (
    <SectionWrapper className="bg-stone-50 py-20 md:py-32" style={{ backgroundColor: '#F7F3EE' }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 max-w-7xl mx-auto">
        {/* LEFT COLUMN - Contact, Education, Skills, Tools */}
        <div className="md:col-span-5 space-y-28">
          {/* CONTACT SECTION */}
          <div>
            <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.5rem', marginBottom: '1.25rem', opacity: 0.6 }}>
              <h3 className="text-xs font-bold tracking-widest uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
                Contact
              </h3>
            </div>
            <div className="space-y-5">
              {contact.map((item, idx) => (
                <div key={idx} className="text-sm">
                  <p className="text-xs tracking-wide uppercase font-medium" style={{ color: '#8B5A2B', opacity: 0.6, letterSpacing: '0.08em' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors block mt-2 text-sm"
                      style={{ color: '#4a4a4a' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm" style={{ color: '#4a4a4a' }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div>
            <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '2rem', opacity: 0.6 }}>
              <h3 className="text-sm font-black tracking-widest uppercase" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', letterSpacing: '0.2em', fontSize: '1.1rem', fontWeight: '700' }}>
                Education
              </h3>
            </div>
            <div className="space-y-2">
              <p className="text-base font-bold leading-relaxed" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
                {education.degree}
              </p>
              <p className="text-sm mt-4 leading-relaxed" style={{ color: '#4a4a4a' }}>
                {education.institution}
              </p>
              <p className="text-sm mt-1" style={{ color: '#4a4a4a', opacity: 0.75 }}>
                {education.location}
              </p>
              <p className="text-xs font-bold mt-5 tracking-wider uppercase" style={{ color: '#E6A6B0', opacity: 0.8 }}>
                {education.duration}
              </p>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div>
            <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '2rem', opacity: 0.6 }}>
              <h3 className="text-sm font-black tracking-widest uppercase" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', letterSpacing: '0.2em', fontSize: '1.1rem', fontWeight: '700' }}>
                Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-full text-xs font-medium transition-transform hover:scale-105"
                  style={{
                    backgroundColor: '#E6A6B0',
                    color: '#8B5A2B',
                    transform: `rotate(${(idx % 2 === 0 ? -1.5 : 1.5)}deg)`,
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS SECTION */}
          <div>
            <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '2rem', opacity: 0.6 }}>
              <h3 className="text-sm font-black tracking-widest uppercase" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', letterSpacing: '0.2em', fontSize: '1.1rem', fontWeight: '700' }}>
                Tools
              </h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: 'rgba(230, 166, 176, 0.15)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    border: '1px solid rgba(230, 166, 176, 0.3)',
                  }}
                >
                  <div className="text-4xl">{tool.icon}</div>
                  <p className="text-xs text-center font-semibold leading-tight" style={{ color: '#8B5A2B' }}>
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER TIMELINE LINE */}
        <div className="hidden md:flex md:col-span-2 justify-center relative py-0">
          <div className="relative w-full h-full flex justify-center">
            <div
              className="absolute top-0 bottom-0 w-0.5"
              style={{ backgroundColor: '#E6A6B0', opacity: 0.35 }}
            ></div>
          </div>
        </div>

        {/* RIGHT COLUMN - EXPERIENCE TIMELINE */}
        <div className="md:col-span-5">
          <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '3.5rem', opacity: 0.6 }}>
            <h3 className="text-sm font-black tracking-widest uppercase" style={{ fontFamily: "'Caveat', cursive", color: '#E6A6B0', letterSpacing: '0.2em', fontSize: '1.1rem', fontWeight: '700' }}>
              Experience
            </h3>
          </div>

          {/* Experience Timeline */}
          <div className="relative space-y-14">
            {/* Timeline line (visible on mobile below title) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5" style={{ backgroundColor: '#E6A6B0', opacity: 0.3 }}></div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative md:-ml-12">
                {/* Timeline date - positioned on the center line to the left */}
                <div
                  className="absolute text-xs tracking-wide font-bold uppercase md:block hidden"
                  style={{
                    left: '-64px',
                    top: '0',
                    color: '#E6A6B0',
                    opacity: 0.65,
                    letterSpacing: '0.08em',
                    textAlign: 'right',
                    width: '56px',
                    lineHeight: '1.2',
                  }}
                >
                  {exp.duration}
                </div>

                {/* Timeline dot - anchored to center timeline */}
                <div
                  className="absolute w-4 h-4 rounded-full border-2"
                  style={{
                    left: '0',
                    top: '0',
                    backgroundColor: '#F7F3EE',
                    borderColor: '#E6A6B0',
                    boxShadow: '0 0 0 3px #F7F3EE, 0 0 0 4px #E6A6B0',
                    transform: 'translateX(-50%)',
                  }}
                ></div>

                {/* Experience Content */}
                <div className="md:ml-12 ml-8">
                  {/* Role Title - BOLD and prominent */}
                  <p className="text-lg font-bold mb-1 leading-tight" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
                    {exp.title}
                  </p>

                  {/* Organization - lighter and smaller */}
                  <p className="text-sm mb-5" style={{ color: '#4a4a4a', opacity: 0.75 }}>
                    {exp.organization}
                  </p>

                  {/* Bullet Points - improved spacing */}
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-3 text-sm leading-relaxed" style={{ color: '#4a4a4a' }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: '#E6A6B0', fontWeight: 'bold' }}>
                          —
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
