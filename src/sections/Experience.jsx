const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Internship 1 */}
        <div className="border border-slate-700 rounded-xl p-6">
          <img
            src="/workspaces/anjalis-portfolio/Images/Travel_Planner_App_Dashboard.webp"
            alt="AI Full Stack Internship"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />

          <h3 className="font-semibold text-lg">
            AI-Powered Full-Stack Development Intern
          </h3>
          <p className="text-sm text-slate-400">
            Department of AI & Data Science, IGDTUW
          </p>
          <p className="text-sm text-slate-400 mb-3">
            June – July 2025
          </p>

          <ul className="text-sm list-disc list-inside space-y-2">
            <li>
              Designed and developed AI-powered full-stack applications
              integrating machine learning models with modern web interfaces.
            </li>
            <li>
              Implemented backend REST APIs and data pipelines to support
              real-time data-driven features.
            </li>
            <li>
              Built responsive frontend dashboards for visualization and user
              interaction.
            </li>
            <li>
              Collaborated with faculty mentors and peers to deploy
              end-to-end AI solutions.
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1eVymNpYwAfKkLl9VhKj18hg9d-ERxsnK/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Certificate
            </a>
            <a
              href="https://github.com/bytebyanjalii/Travel-Diary-App"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="border border-slate-700 rounded-xl p-6">
          <img
            src="/workspaces/anjalis-portfolio/Images/Brain_Tumor_Segmentation.webp"
            alt="Computer Vision Internship"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />

          <h3 className="font-semibold text-lg">
            Computer Vision & Deep Learning Intern
          </h3>
          <p className="text-sm text-slate-400">
            Center of Excellence – AI, IGDTUW
          </p>
          <p className="text-sm text-slate-400 mb-3">
            June – July 2024
          </p>

          <ul className="text-sm list-disc list-inside space-y-2">
            <li>
              Developed a Brain Tumor Segmentation system using CNN-based deep
              learning architectures.
            </li>
            <li>
              Performed image preprocessing, augmentation, and dataset
              optimization for improved model performance.
            </li>
            <li>
              Trained and evaluated models using medical imaging datasets and
              relevant performance metrics.
            </li>
            <li>
              Gained hands-on experience with end-to-end deep learning workflows.
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1QCydGSLHrpFKFnaMk6npw59_YLXRnjVh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Certificate
            </a>
            <a
              href="https://github.com/bytebyanjalii/Brain-Tumor-Segmentation-using-Deep-Learning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Internship 3 */}
        <div className="border border-slate-700 rounded-xl p-6">
          <img
            src="/workspaces/anjalis-portfolio/Images/Crop_Yield_Prediction.webp"
            alt="Python ML Internship"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />

          <h3 className="font-semibold text-lg">
            Python & Machine Learning Intern
          </h3>
          <p className="text-sm text-slate-400">
            Anveshan Foundation, IGDTUW
          </p>
          <p className="text-sm text-slate-400 mb-3">
            June – July 2023
          </p>

          <ul className="text-sm list-disc list-inside space-y-2">
            <li>
              Built a Crop Yield Prediction system using supervised machine
              learning algorithms.
            </li>
            <li>
              Conducted data cleaning, exploratory data analysis, and feature
              selection.
            </li>
            <li>
              Compared multiple ML models and optimized performance using
              regression metrics.
            </li>
            <li>
              Documented results and insights for real-world agricultural use
              cases.
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1EAHGz3Q-tkYwST_ifUM2Lg4RPSAhL6Wc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              Certificate
            </a>
            <a
              href="https://github.com/bytebyanjalii/Crop-Yield-Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
