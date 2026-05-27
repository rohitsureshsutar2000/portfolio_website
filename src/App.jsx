import Navbar     from './components/Navbar'
import Hero       from './sections/Hero'
import About      from './sections/About'
import Skills     from './sections/Skills'
import Experience from './sections/Experience'
import Projects   from './sections/Projects'
import Education  from './sections/Education'
import Contact    from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="footer">
        <p>
          Designed &amp; Built by{' '}
          <span className="cyan">Rohit Sutar</span>
          {' '}•{' '}
          <span className="purple">{new Date().getFullYear()}</span>
        </p>
      </footer>
    </>
  )
}
