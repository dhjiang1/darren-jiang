import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.logo}>
        <h1>DJ</h1>
      </div>

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
