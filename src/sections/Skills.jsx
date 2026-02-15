import SectionWrapper from '../components/SectionWrapper'
import Tag from '../components/Tag'

export default function Skills() {
  const skillGroups = {
    'Programming': ['Python', 'JavaScript', 'SQL', 'Java', 'R'],
    'Machine Learning': ['TensorFlow', 'PyTorch', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
    'Deep Learning': ['CNNs', 'RNNs', 'Transformers', 'GANs', 'Transfer Learning'],
    'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Google Cloud', 'Jupyter', 'REST APIs'],
  }

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Technical Skills
      </h2>
      <p className="mb-12 text-base" style={{ color: '#4a4a4a' }}>
        A comprehensive toolkit for data science and AI engineering
      </p>

      <div className="space-y-10">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group}>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B', fontSize: '1.25rem' }}>{group}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Tag key={skill} variant="default">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
