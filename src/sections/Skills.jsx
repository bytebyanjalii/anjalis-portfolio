import SectionWrapper from '../components/SectionWrapper'
import Tag from '../components/Tag'

export default function Skills() {
  const skillGroups = {
    'Data Science & Analytics': [
      'Data Cleaning & Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Feature Engineering',
      'Statistical Analysis',
      'Data Visualization',
      'Business Insights from Data',
      'Hypothesis Testing',
    ],
    'Machine Learning & AI': [
      'Supervised & Unsupervised Learning',
      'Model Training & Evaluation',
      'Regression & Classification',
      'Clustering Techniques',
      'Model Optimization & Tuning',
      'Deep Learning Fundamentals',
      'Computer Vision Basics',
      'NLP Fundamentals',
    ],
    'Programming & Development': [
      'Python Programming',
      'ML Pipeline Development',
      'End-to-End Project Building',
      'API Integration',
      'Full-Stack ML Applications',
      'Model Deployment Concepts',
    ],
    'Data Science & ML Tools': [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'OpenCV',
      'NLTK / spaCy',
    ],
    'Dev & Deployment Tools': [
      'Git & GitHub',
      'Jupyter Notebook',
      'VS Code',
      'Streamlit',
      'Flask',
      'FastAPI',
      'Docker (basic)',
    ],
    'Databases & Data Tools': [
      'MySQL',
      'MongoDB',
      'CSV / Excel Data Handling',
    ],
  }

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <div style={{ borderBottom: '3px solid #E6A6B0', paddingBottom: '0.75rem', marginBottom: '2rem', opacity: 0.8 }}>
        <h2 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
          Technical Skills
        </h2>
      </div>
      <p className="mb-12 text-base" style={{ color: '#4a4a4a' }}>
        My comprehensive Data Science, AI & ML expertise
      </p>

      <div className="space-y-10">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group}>
            <div style={{ borderBottom: '2px solid #E6A6B0', paddingBottom: '0.5rem', marginBottom: '1rem', opacity: 0.5 }}>
              <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#8B5A2B', fontSize: '1.25rem' }}>{group}</h3>
            </div>
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
