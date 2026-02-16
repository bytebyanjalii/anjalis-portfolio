export default function Tag({ children, variant = 'default' }) {
  const variants = {
    default: { backgroundColor: '#E6A6B0', color: '#8B5A2B' },
    olive: { backgroundColor: '#B5AC9C', color: '#F7F3EE' },
    rose: { backgroundColor: '#E6A6B0', color: '#8B5A2B' },
    gray: { backgroundColor: '#D4C5B9', color: '#8B5A2B' },
  }

  return (
    <span className="px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:scale-105 skill-item" style={variants[variant]}>
      {children}
    </span>
  )
}
