import SectionWrapper from '../components/SectionWrapper'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Demand Forecasting for Walmart Weekly Sales',
      description: 'Time-series forecasting project leveraging SARIMA and LSTM models to predict weekly Walmart sales. Built and evaluated classical vs deep learning forecasting pipelines using RMSE and MAPE. Derived actionable insights for inventory optimization, staffing, and promotional planning.',
      techStack: ['Python', 'Pandas', 'Statsmodels', 'TensorFlow', 'Time-Series Analysis'],
      image: '/Images/Walmart_Sales_Forecast.avif',
      githubLink: 'https://github.com/bytebyanjalii/Demand-Forecasting-Project',
    },
    {
      title: 'Customer Segmentation & Retention Analysis',
      description: 'RFM-based customer segmentation and churn analysis for data-driven retention strategy. Identified high-value, loyal, and at-risk customer segments and quantified revenue at risk. Built an interactive Streamlit dashboard to visualize insights for business decision-making.',
      techStack: ['Python', 'Scikit-learn', 'Pandas', 'RFM Analysis', 'Streamlit'],
      image: '/Images/Customer_Segmentation.jpg',
      githubLink: 'https://github.com/bytebyanjalii/Customer-Segmentation-Retention-Analysis',
    },
    {
      title: 'Amazon Product Reviews Sentiment Analyzer',
      description: 'End-to-end NLP system for binary sentiment classification on large-scale Amazon reviews. Processed 500K+ reviews with text cleaning, vectorization, and ML model training. Achieved ~90% accuracy (F1-score) and deployed a Streamlit app for real-time predictions.',
      techStack: ['Python', 'NLP', 'Scikit-learn', 'Text Vectorization', 'Streamlit'],
      image: '/Images/Amazon_Review_Analysis.webp',
      githubLink: 'https://github.com/bytebyanjalii/Amazon-Sentiment-Analyzer',
    },
    {
      title: 'Netflix Show Clustering',
      description: 'Unsupervised learning project to uncover content patterns across Netflix shows. Applied K-Means clustering with PCA for dimensionality reduction and visualization. Interpreted clusters to analyze genre trends and audience viewing preferences.',
      techStack: ['Python', 'Pandas', 'K-Means', 'PCA', 'Unsupervised Learning'],
      image: '/Images/Netflix_Show_Clustering.png',
      githubLink: 'https://github.com/bytebyanjalii/Netflix-Show-Clustering',
    },
  ]

  return (
    <SectionWrapper className="bg-stone-50" style={{ backgroundColor: '#F7F3EE' }}>
      <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Abril Fatface', serif", color: '#8B5A2B' }}>
        Personal Projects
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
