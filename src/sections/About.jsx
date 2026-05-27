import { motion } from 'framer-motion'

const CARDS = [
  {
    icon: '⚛️',
    title: 'Frontend Engineering',
    desc: 'React.js, React Native &amp; Redux. Built cross-platform UIs with a 35% performance boost.',
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Node.js, Express.js, Spring Boot. Production-grade REST APIs with 40% faster response times.',
  },
  {
    icon: '☁️',
    title: 'Cloud &amp; DevOps',
    desc: 'AWS, Docker, Kubernetes, Jenkins CI/CD. Scaled infra with 60% better uptime.',
  },
  {
    icon: '🤖',
    title: 'AI &amp; API Integration',
    desc: 'Claude AI generative features and NSE API integration serving 10,000+ retail investors.',
  },
]

const HIGHLIGHTS = [
  { icon: '📍', text: 'India' },
  { icon: '💼', text: 'Full-Stack Dev' },
  { icon: '🎓', text: 'CDAC Graduate' },
  { icon: '🚀', text: '3+ Years Exp.' },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function About() {
  return (
    <section id="about">
      <div className="section-tag">// ABOUT ME</div>
      <h2 className="section-heading">Building Digital <span className="accent">Excellence</span></h2>
      <p className="section-sub">
        Passionate full-stack engineer who turns complex requirements into elegant,
        high-performance solutions.
      </p>

      <div className="about-grid">
        {/* ── TEXT ── */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I'm a Full-Stack Software Developer with 3+ years of experience crafting
            high-performance digital platforms. At DeccanLogic I built a mutual fund
            investment platform that now serves 10,000+ retail investors with real-time
            NSE API integration.
          </p>
          <p>
            My expertise spans the full stack — pixel-perfect React UIs all the way to
            cloud-deployed microservices on AWS. I'm passionate about performance,
            security, and architectures that scale without surprises.
          </p>
          <p>
            I've consistently delivered 35–60% performance improvements across
            projects, bringing both technical depth and product thinking to every role.
          </p>

          <div className="about-highlights">
            {HIGHLIGHTS.map(h => (
              <div key={h.text} className="highlight-item">
                <div className="icon">{h.icon}</div>
                {h.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CARDS ── */}
        <div className="about-cards">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="about-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h3 dangerouslySetInnerHTML={{ __html: card.title }} />
              <p dangerouslySetInnerHTML={{ __html: card.desc }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
