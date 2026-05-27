import { motion } from 'framer-motion'

const EDUCATION = [
  {
    degree:      'Post Graduate Diploma in Advanced Computing',
    institution: 'Centre for Development of Advanced Computing (CDAC)',
    location:    'India',
    dates:       'Aug 2023 – Jun 2024',
    score:       '61%',
    coursework:
      'C++, OOP, Linux, OS, SDLC, Agile, Docker, Kubernetes, Jenkins, Selenium, Java, JavaScript, Node.js, React, Redux, SQL, Microservices',
  },
  {
    degree:      'B.Tech. in Computer Science & Engineering',
    institution: 'ATS Sanjay Bhokare Group of Institute',
    location:    'Miraj, India',
    dates:       'Aug 2018 – Jun 2022',
    score:       'CGPA 8.32 / 10',
    coursework:
      'OOP, DBMS, DSA, OS, Computer Networks, Information Retrieval, Image Processing',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-tag">// EDUCATION</div>
      <h2 className="section-heading">Academic <span className="accent">Background</span></h2>
      <p className="section-sub">
        Strong technical foundation from industry-focused computer science programmes.
      </p>

      <div className="education-grid">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={i}
            className="edu-card"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.65 }}
          >
            <div className="edu-degree">{edu.degree}</div>
            <div className="edu-institution">{edu.institution}</div>
            <div className="edu-location">{edu.location}</div>

            <div className="edu-meta">
              <span className="edu-badge">{edu.dates}</span>
              <span className="edu-badge score">{edu.score}</span>
            </div>

            <div className="edu-coursework">
              <strong>Coursework</strong>
              {edu.coursework}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
