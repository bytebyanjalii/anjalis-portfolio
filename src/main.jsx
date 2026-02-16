import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// IntersectionObserver for subtle scroll reveals and in-view triggers
if (typeof window !== 'undefined') {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.15 })

  // Observe sections and other reveal targets
  window.requestAnimationFrame(() => {
    document.querySelectorAll('section[data-animate], .reveal-underline, .skill-item, .timeline-line').forEach(el => {
      observer.observe(el)
    })
  })
}
