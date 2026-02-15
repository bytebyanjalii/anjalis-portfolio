import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'AI Image Recognition System',
      description: 'Deep learning-based system for real-time image classification with 95%+ accuracy',
      techStack: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
      githubLink: '#',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Full-stack application for predictive analytics with interactive visualizations',
      techStack: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      githubLink: '#',
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Advanced NLP model for sentiment analysis on social media data',
      techStack: ['Python', 'PyTorch', 'Transformers', 'LSTM'],
      githubLink: '#',
    },
    {
      title: 'Time Series Forecasting',
      description: 'Machine learning model for accurate financial time series prediction',
      techStack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
      githubLink: '#',
    },
    {
      title: 'Computer Vision Pipeline',
      description: 'End-to-end object detection and tracking system for video analysis',
      techStack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
      githubLink: '#',
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering and content-based recommendation system',
      techStack: ['Python', 'scikit-learn', 'Surprise', 'NumPy'],
      githubLink: '#',
    },
  ]

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Featured Projects
      </h2>
      <p className="mb-12 text-base" style={{ color: '#4a4a4a' }}>
        Scroll horizontally to explore my recent work
      </p>

      {/* Horizontal Scrolling Container */}
      <div className="overflow-x-auto pb-4 -mx-6 px-6 md:-mx-12 md:px-12 scroll-smooth-horizontal">
        <div className="flex gap-6 min-w-min">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
