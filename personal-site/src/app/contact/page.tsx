import Link from "next/link"
import '../globals.css'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <main>
        <nav>
          <div className="section">
            <Link href="/">home</Link>
          </div>
          <div className="section">
            <Link href="/about">about</Link>
          </div>
          <div className="section">
            <Link href="/skills">skills</Link>
          </div>
          <div className="section">
            <Link href="/internships">experience</Link>
          </div>
          <div className="section">
            <Link href="/contact">contact</Link>
          </div>
        </nav>

        <div className={styles.end}>Let’s Chat!</div>
        <div className={styles.bye_msg}>I’m always open to meeting new individuals and discuss all things tech! Currently seeking exciting opportunities to express my expertise - send me a message if interested!</div>
        <div className={styles.mail_link}>Mail me at</div>
        <div className={styles.email}>darren.jiang135@gmail.com</div>
        <div className={styles.socials}>
          <h1>LinkedIn</h1>
          <h1>Github</h1>
        </div>
        <div className={styles.top}>TOP</div>
    </main>
  )
  }