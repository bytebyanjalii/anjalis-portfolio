export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`py-20 px-6 md:py-32 md:px-12 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
