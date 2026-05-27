import { motion } from 'framer-motion'

const CATEGORIES = [
  { title: 'Languages',       tags: ['JavaScript', 'Java', 'SQL'] },
  { title: 'Frontend',        tags: ['ReactJS', 'React Native', 'Redux', 'HTML5', 'CSS3'] },
  { title: 'Backend',         tags: ['Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'Kafka'] },
  { title: 'Databases',       tags: ['PostgreSQL', 'Query Optimization'] },
  { title: 'Cloud & DevOps',  tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD'] },
  { title: 'Security',        tags: ['JWT Auth', 'RBAC', 'HTTPS Encryption'] },
  { title: 'AI & APIs',       tags: ['Claude AI', 'Generative AI', 'NSE API Integration'] },
  { title: 'Methodologies',   tags: ['Agile', 'Microservices', 'RESTful Design', 'Scrum'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-tag">// TECH STACK</div>
      <h2 className="section-heading">Skills &amp; <span className="accent">Technologies</span></h2>
      <p className="section-sub">
        A curated toolkit for building full-stack, cloud-native applications at scale.
      </p>

      <div className="skills-categories">
        {CATEGORIES.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="skill-category"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
          >
            <div className="skill-cat-title">{cat.title}</div>
            <div className="skill-tags">
              {cat.tags.map(tag => (
                <motion.div
                  key={tag}
                  className="skill-tag"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tag}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
