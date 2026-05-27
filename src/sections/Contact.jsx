import { motion } from 'framer-motion'

const CONTACT_ITEMS = [
  {
    icon:  '📧',
    label: 'Email',
    value: 'rohitsureshsutar2000@gmail.com',
    href:  'mailto:rohitsureshsutar2000@gmail.com',
  },
  {
    icon:  '📱',
    label: 'Phone',
    value: '+91 7875152524',
    href:  'tel:+917875152524',
  },
  {
    icon:  '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rohitsutar-dev',
    href:  'https://www.linkedin.com/in/rohitsutar-dev',
  },
  {
    icon:  '🐙',
    label: 'GitHub',
    value: 'github.com/rohitsureshsutar2000',
    href:  'https://github.com/rohitsureshsutar2000',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-tag">// CONTACT</div>
      <h2 className="section-heading">Let's Work <span className="accent">Together</span></h2>
      <p className="section-sub">
        Open to full-time roles, freelance projects, and exciting collaborations.
        My inbox is always open.
      </p>

      <div className="contact-grid">
        {/* ── LEFT: info ── */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="contact-info-text">
            Whether you have a project in mind, need a dedicated full-stack developer,
            or just want to connect — feel free to reach out through any channel below.
          </p>

          {CONTACT_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="contact-item"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <div className="contact-item-icon">{item.icon}</div>
              <div>
                <div className="contact-item-label">{item.label}</div>
                <div className="contact-item-value">{item.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
