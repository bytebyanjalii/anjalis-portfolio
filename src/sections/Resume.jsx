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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* LEFT COLUMN */}
        <div className="md:col-span-1 space-y-12">
          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B' }}>
              CONTACT
            </h3>
            <div className="space-y-3">
              {contact.map((item, idx) => (
                <div key={idx} className="text-sm">
                  <p className="font-medium text-xs tracking-wide" style={{ color: '#8B5A2B', opacity: 0.7 }}>{item.label.toUpperCase()}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors block mt-1"
                      style={{ color: '#8B5A2B' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1" style={{ color: '#8B5A2B' }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B' }}>
              EDUCATION
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm leading-relaxed" style={{ color: '#8B5A2B' }}>{education.degree}</p>
                <p className="text-sm mt-2" style={{ color: '#4a4a4a' }}>{education.institution}</p>
                <p className="text-xs mt-1" style={{ color: '#4a4a4a' }}>{education.location}</p>
                <p className="text-xs font-semibold mt-2 tracking-wide" style={{ color: '#8B5A2B' }}>{education.duration}</p>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B' }}>
              SKILLS
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block px-3 py-1.5 text-xs font-medium rounded-full"
                  style={{ backgroundColor: '#E6A6B0', color: '#8B5A2B' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B' }}>
              TOOLS
            </h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-75 transition-opacity">
                  <div className="text-2xl">{tool.icon}</div>
                  <p className="text-xs text-center" style={{ color: '#8B5A2B' }}>{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VERTICAL DIVIDER */}
        <div className="hidden md:block md:col-span-0">
          <div className="h-full w-px" style={{ backgroundColor: '#E6A6B0', opacity: 0.3 }}></div>
        </div>

        {/* RIGHT COLUMN - EXPERIENCE */}
        <div className="md:col-span-1">
          <h3 className="text-sm font-bold tracking-widest mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B' }}>
            EXPERIENCE
          </h3>

          {/* Timeline */}
          <div className="relative space-y-8 pl-8">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ backgroundColor: '#E6A6B0', opacity: 0.4 }}></div>

            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-5 top-2 w-2 h-2 rounded-full border-2 border-white" style={{ backgroundColor: '#8B5A2B', boxShadow: '0 0 0 2px #F7F3EE' }}></div>

                {/* Content */}
                <div>
                  <div className="mb-2">
                    <p className="font-bold text-sm leading-tight" style={{ color: '#8B5A2B', fontFamily: "'Playfair Display', serif" }}>
                      {exp.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#4a4a4a' }}>{exp.organization}</p>
                    <p className="text-xs font-semibold mt-1 tracking-wide" style={{ color: '#8B5A2B' }}>{exp.duration}</p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mt-3">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-2 text-xs" style={{ color: '#4a4a4a' }}>
                        <span style={{ color: '#E6A6B0' }} className="flex-shrink-0">•</span>
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
