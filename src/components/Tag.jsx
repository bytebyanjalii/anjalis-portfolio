export default function Tag({ children, variant = 'default' }) {
  const variants = {
    default: 'bg-amber-100 text-amber-900',
    olive: 'bg-green-100 text-green-800',
    rose: 'bg-rose-100 text-rose-800',
    gray: 'bg-gray-200 text-gray-700',
  }

  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth hover:scale-105 ${variants[variant]}`}>
      {children}
    </span>
  )
}
