import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
]

function smoothTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className={`navbar${scrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className="nav-logo">RS.</div>

      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} onClick={e => { e.preventDefault(); smoothTo(href) }}>
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={e => { e.preventDefault(); smoothTo('#contact') }}
          >
            Hire Me
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}
