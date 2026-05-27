import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role:    'Associate Software Developer',
    company: 'DeccanLogic PVT LTD',
    dates:   'May 2024 – Present',
    badge:   'current',
    items: [
      'Designed a responsive digital investment platform enabling 10,000+ retail investors to execute mutual fund transactions via NSE API integration.',
      'Engineered cross-platform UIs using React.js, React Native & Redux, improving application performance by 35%.',
      'Streamlined SIP, lump sum, and SWP investment workflows, reducing average transaction execution time by 30%.',
      'Implemented Jenkins CI/CD pipelines within an Agile/GitLab environment, cutting build/test/deploy time by 60%.',
      'Built production-grade RESTful APIs with Node.js, Express.js & PostgreSQL; optimised queries to improve response times by 40%.',
      'Architected enterprise-grade security with JWT authentication, RBAC, and HTTPS encryption.',
      'Containerised backend services with Docker and deployed on AWS — 60% better scalability, 35% less infrastructure downtime.',
    ],
  },
  {
    role:    'Associate Software Developer',
    company: 'DeccanLogic PVT LTD (Evolvus)',
    dates:   'Nov 2024 – Mar 2025',
    badge:   'past',
    items: [
      'Designed a web interface for capturing and validating complex biological data (proteins & carbohydrates), improving accuracy for scientific and laboratory teams.',
      'Created robust web applications backed by RESTful APIs, establishing reliable and maintainable frontend/backend communication patterns.',
      'Integrated 15+ Spring Boot microservices with Kafka to enable asynchronous communication, achieving 99.99% system uptime.',
    ],
  },
  {
    role:    'Associate Tinker Trainer',
    company: 'Stem Learning PVT LTD',
    dates:   'Oct 2022 – Aug 2023',
    badge:   'past',
    items: [
      'Developed and maintained RESTful APIs using Java and Spring Boot for IoT applications spanning drone control systems and sensor-based automation.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-tag">// WORK HISTORY</div>
      <h2 className="section-heading">Work <span className="accent">Experience</span></h2>
      <p className="section-sub">
        3+ years building production systems across fintech, biotech, and IoT domains.
      </p>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className={`timeline-dot${exp.badge === 'current' ? ' current' : ''}`} />

            <div className="timeline-card">
              <div className="timeline-meta">
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <span className="timeline-dates">{exp.dates}</span>
              </div>

              <span className={`timeline-badge ${exp.badge}`}>
                {exp.badge === 'current' ? '● Active' : '● Completed'}
              </span>

              <ul className="timeline-achievements">
                {exp.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
