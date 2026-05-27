import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import DeveloperAvatar from '../components/DeveloperAvatar'

const ROLES = [
  'Full-Stack Developer',
  'React Engineer',
  'Node.js Architect',
  'Cloud & DevOps',
  'API Integration',
]

function TypeWriter() {
  const [idx,        setIdx]        = useState(0)
  const [text,       setText]       = useState('')
  const [deleting,   setDeleting]   = useState(false)

  useEffect(() => {
    const current = ROLES[idx]
    let timer

    if (!deleting) {
      if (text === current) {
        timer = setTimeout(() => setDeleting(true), 1800)
      } else {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 100)
      }
    } else {
      if (text === '') {
        setDeleting(false)
        setIdx(i => (i + 1) % ROLES.length)
      } else {
        timer = setTimeout(() => setText(t => t.slice(0, -1)), 48)
      }
    }
    return () => clearTimeout(timer)
  }, [text, deleting, idx])

  return (
    <div className="hero-role">
      {text}
      <span className="cursor" />
    </div>
  )
}

const STATS = [
  { num: '3+',   label: 'Years Exp.'   },
  { num: '10K+', label: 'Users Served' },
  { num: '60%',  label: 'Faster CI/CD' },
  { num: '15+',  label: 'Microservices'},
]

export default function Hero() {
  function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">

      {/* ── LEFT ── */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="hero-greeting">
          <span className="dot" />
          Available for Work
        </div>

        <h1 className="hero-name">
          <span className="first">Rohit</span>
          <br />
          <span className="last">Sutar.</span>
        </h1>

        <TypeWriter />

        <p className="hero-desc">
          Full-Stack Software Developer building high-performance React &amp; Node.js
          applications, cloud-native microservices, and CI/CD pipelines that teams
          actually want to ship with.
        </p>

        <div className="hero-stats">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1 }}
            >
              <div className="stat-number">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="hero-btns">
          <button className="btn-primary" onClick={() => scrollTo('#projects')}>
            View Projects →
          </button>
          <button className="btn-outline" onClick={() => scrollTo('#contact')}>
            Contact Me
          </button>
        </div>

        <div className="hero-socials">
          <span>Find me on</span>
          <a
            className="social-link"
            href="https://github.com/rohitsureshsutar2000"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >GH</a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/rohitsutar-dev"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >LI</a>
          <a
            className="social-link"
            href="mailto:rohitsureshsutar2000@gmail.com"
            title="Email"
          >@</a>
        </div>
      </motion.div>

      {/* ── RIGHT ── */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
      >
        <DeveloperAvatar />
      </motion.div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>scroll</span>
      </div>
    </section>
  )
}
