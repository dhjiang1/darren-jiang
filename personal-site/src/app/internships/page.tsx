import Link from "next/link"
import '../globals.css'
import styles from './internships.module.css'

export default function Internships() {
  return (
    <main>
      <div className="section-number">03</div>
      <div className="section-title">Internships</div>

      <Link href="/education">Education -></Link>
    </main>
  )
  }