import SectionWrapper from '../components/SectionWrapper'
import TimelineItem from '../components/TimelineItem'

export default function EducationExperience() {
  const experiences = [
    {
      title: 'AI-Powered Full-Stack Development Intern',
      organization: 'Tech Innovations Inc',
      duration: 'June – July 2025',
      bullets: [
        'Developed full-stack web applications using React and Python FastAPI',
        'Implemented AI features for predictive analytics and user personalization',
        'Collaborated with cross-functional teams to deliver scalable solutions',
        'Optimized database queries improving system performance by 40%',
      ],
      certificateLink: '#',
      githubLink: '#',
    },
    {
      title: 'Computer Vision & Deep Learning Intern',
      organization: 'AI Research Labs',
      duration: 'June – July 2024',
      bullets: [
        'Built and trained CNN models for image classification tasks',
        'Implemented object detection systems using YOLO and Faster R-CNN',
        'Processed and augmented large datasets for computer vision tasks',
        'Achieved 94% accuracy on custom dataset through model optimization',
      ],
      certificateLink: '#',
      githubLink: '#',
    },
    {
      title: 'Python & Machine Learning Intern',
      organization: 'Data Solutions Corp',
      duration: 'June – July 2023',
      bullets: [
        'Developed machine learning models using scikit-learn and pandas',
        'Performed exploratory data analysis on large datasets',
        'Built predictive models achieving 92% accuracy on test data',
        'Created data visualization dashboards for stakeholder presentations',
      ],
      certificateLink: '#',
      githubLink: '#',
    },
  ]

  return (
    <SectionWrapper className="bg-amber-50">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, idx) => (
          <TimelineItem key={idx} {...exp} />
        ))}
      </div>
    </SectionWrapper>
  )
}
