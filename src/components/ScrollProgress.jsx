import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.style.opacity = '0'
      return
    }

    let lastKnownScrollY = 0
    let ticking = false

    const onScroll = () => {
      lastKnownScrollY = window.scrollY || window.pageYOffset
      if (!ticking) {
        ticking = true
        rafRef.current = requestAnimationFrame(() => {
          const doc = document.documentElement
          const scrollHeight = doc.scrollHeight - doc.clientHeight
          const progress = scrollHeight > 0 ? (lastKnownScrollY / scrollHeight) : 0
          // GPU-friendly transform
          el.style.transform = `scaleX(${progress})`
          ticking = false
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    // initialize
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div aria-hidden="true" style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 4, zIndex: 60 }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: 0, background: 'transparent' }}>
        <div ref={barRef} style={{ height: '100%', transformOrigin: 'left center', transform: 'scaleX(0)', background: 'linear-gradient(90deg, #E6A6B0, #8B5A2B)', willChange: 'transform', transition: 'transform 0.05s linear' }} />
      </div>
    </div>
  )
}
