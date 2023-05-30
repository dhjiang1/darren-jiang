import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>

      <header>
        <div className={styles.logo}>DJ</div>
        <nav className="navigation">
          <a href="/" className="active">home</a>
          <a href="/about">about</a>
          <a href="/skills">skills</a>
          <a href="/internships">experience</a>
          <a href="/contact">contact</a>
        </nav>
      </header>

      <div className={styles.title_intro}>
        <h1>product manager &#38; developer</h1>
        <h2>Hi, I'm Darren Jiang! A passionate Product Manager and &#38; Developer all about challenging the status quo.</h2>
      </div>

      <div className={styles.links}>
        <div className={styles.socials}>
          <h1>LinkedIn</h1>
          <h1>Github</h1>
        </div>

        <div className={styles.email}>
          <h1>darren.jiang135@gmail.com</h1>
      </div>
      </div>

    </main>
  )
}
