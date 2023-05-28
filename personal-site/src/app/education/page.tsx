import Link from "next/link"
import '../globals.css'
import styles from './education.module.css'

export default function Education() {
    return (
      <main>
        <div className="section-number">04</div>
        <div className="section-title">Education</div>

        <Link href="/internships"> Internships</Link>

        <div className={styles.entry}>
          <b>Bachelor of Applied Science in  Management Engineering with Honours, Co-op  (Sep 2018 - May 2023)</b>
          <div className={styles.achievements}>Computing Option, GPA: 3.61</div>
          <div className={styles.achievements}>University of Waterloo, Ontario</div>
          <div className={styles.details}>Blah Blah Blah</div>
        </div>
      </main>
    )
    }