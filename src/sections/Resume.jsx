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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* LEFT COLUMN - Contact, Education, Skills, Tools */}
        <div className="md:col-span-5 space-y-14">
          {/* CONTACT SECTION */}
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
              Contact
            </h3>
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
            <h3 className="text-xs font-bold tracking-widest mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
              Education
            </h3>
            <div>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: '#8B5A2B' }}>
                {education.degree}
              </p>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: '#4a4a4a' }}>
                {education.institution}
              </p>
              <p className="text-xs mt-2" style={{ color: '#4a4a4a', opacity: 0.7 }}>
                {education.location}
              </p>
              <p className="text-xs font-semibold mt-4 tracking-wide uppercase" style={{ color: '#E6A6B0' }}>
                {education.duration}
              </p>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
              Skills
            </h3>
            <div className="space-y-2">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#E6A6B0' }}></span>
                  <span className="text-sm" style={{ color: '#4a4a4a' }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS SECTION */}
          <div>
            <h3 className="text-xs font-bold tracking-widest mb-8 uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
              Tools
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 hover:opacity-75 transition-opacity">
                  <div className="text-3xl">{tool.icon}</div>
                  <p className="text-xs text-center font-medium" style={{ color: '#8B5A2B' }}>
                    {tool.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CENTER TIMELINE LINE */}
        <div className="hidden md:flex md:col-span-2 justify-center">
          <div className="relative w-full h-full flex justify-center">
            <div
              className="absolute top-0 bottom-0 w-px"
              style={{ backgroundColor: '#E6A6B0', opacity: 0.25 }}
            ></div>
          </div>
        </div>

        {/* RIGHT COLUMN - EXPERIENCE TIMELINE */}
        <div className="md:col-span-5">
          <h3 className="text-xs font-bold tracking-widest mb-12 uppercase" style={{ fontFamily: "'Playfair Display', serif", color: '#E6A6B0', letterSpacing: '0.15em' }}>
            Experience
          </h3>

          {/* Experience Timeline */}
          <div className="relative space-y-12">
            {/* Timeline line (visible on mobile below title) */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: '#E6A6B0', opacity: 0.2 }}></div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute w-3 h-3 rounded-full border-2"
                  style={{
                    left: '-10px',
                    top: '4px',
                    backgroundColor: '#F7F3EE',
                    borderColor: '#E6A6B0',
                  }}
                ></div>

                {/* Experience Content */}
                <div className="md:ml-0 ml-6">
                  {/* Duration (muted, top) */}
                  <p className="text-xs tracking-wide font-semibold uppercase" style={{ color: '#E6A6B0', opacity: 0.7 }}>
                    {exp.duration}
                  </p>

                  {/* Role Title */}
                  <p className="text-sm font-semibold mt-2 leading-snug" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
                    {exp.title}
                  </p>

                  {/* Organization */}
                  <p className="text-xs mt-2" style={{ color: '#4a4a4a', opacity: 0.8 }}>
                    {exp.organization}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-3 text-xs leading-relaxed" style={{ color: '#4a4a4a' }}>
                        <span className="flex-shrink-0 mt-1" style={{ color: '#E6A6B0' }}>
                          ▬
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider between experiences */}
                {idx < experiences.length - 1 && (
                  <div className="mt-12 pt-12 border-t" style={{ borderColor: '#E6A6B0', opacity: 0.15 }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
