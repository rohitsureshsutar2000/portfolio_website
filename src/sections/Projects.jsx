import { motion } from 'framer-motion'

const PROJECTS = [
  {
    num:   '01',
    title: 'Advisory Investment Platform',
    year:  '2024',
    desc:  'Full-stack mutual fund advisory app with real-time NSE API integration handling 100+ daily transactions. Grew the investor user base by 30% through UX enhancements and streamlined journeys.',
    tech:  ['React.js', 'Node.js', 'PostgreSQL', 'JWT', 'RBAC', 'NSE API', 'Docker', 'AWS'],
  },
  {
    num:   '02',
    title: 'Evolvus Biological Data System',
    year:  '2024',
    desc:  'Research-focused platform managing protein and carbohydrate structural data for scientific workflows. Event-driven pipelines across 15+ Spring Boot microservices via Kafka — 99.99% uptime.',
    tech:  ['Spring Boot', 'Kafka', 'Microservices', 'React.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    num:   '03',
    title: 'IoT Automation Platform',
    year:  '2023',
    desc:  'RESTful APIs powering drone control systems and sensor-based automation applications, enabling real-time communication between hardware devices and cloud services.',
    tech:  ['Java', 'Spring Boot', 'IoT', 'REST APIs', 'Sensor Integration'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">// PROJECTS</div>
      <h2 className="section-heading">Featured <span className="accent">Projects</span></h2>
      <p className="section-sub">
        Production systems built across fintech, bioscience, and IoT — delivering real-world impact.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.num}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.14, duration: 0.6 }}
          >
            <div className="project-number">{proj.num}</div>
            <div className="project-title">{proj.title}</div>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-tech">
              {proj.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-footer">
              <span className="project-year">{proj.year}</span>
              <span className="project-arrow">View Details →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
