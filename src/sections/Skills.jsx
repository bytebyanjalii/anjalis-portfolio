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
    <SectionWrapper className="bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Technical Skills
      </h2>
      <p className="text-gray-600 mb-12 text-lg">
        A comprehensive toolkit for data science and AI engineering
      </p>

      <div className="space-y-10">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{group}</h3>
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
