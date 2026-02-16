import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ScrollProgress from './components/ScrollProgress'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <ScrollProgress />
    <App />
  </StrictMode>,
)

// Lightweight image lazy-loading enhancement (non-invasive)
// - Adds `loading="lazy"` and `decoding="async"` to images not inside the hero
// - Runs on rAF for performance and respects prefers-reduced-motion
requestAnimationFrame(() => {
  try {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const imgs = Array.from(document.getElementsByTagName('img'))
    imgs.forEach((img) => {
      // Skip if already has explicit loading or decoding attributes
      if (img.closest && img.closest('section') && img.closest('section').classList && img.closest('section').classList.contains('hero')) return
      if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy')
      if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
      // Hint to browser the image is not critical for layout
      img.style.willChange = 'opacity, transform'
    })
  } catch (e) {
    // fail silently - non-critical
  }
})
