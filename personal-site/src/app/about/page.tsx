import Link from "next/link"
import '../globals.css'
import styles from './about.module.css'

export default function About() {
  return (
    <main>
      <div className="section-number">01</div>
      <div className="section-title">Who am I</div>

      <div className={styles.d1}>
        <div className={styles.icon}>Hat</div>
        <div className={styles.header}>Background</div>
        <div className={styles.text_box}>A recent graduate from the University of Waterloo, I completed  my Bachelor’s of Applied Science in Management Engineering with a Computing option partaking in courses like <b>HCI</b>, <b>Analytics and User Experience</b>, and <b>Algorithms and Data Structures</b>.</div>
      </div>

      <div className={styles.d2}>
        <div className={styles.icon}>Profile</div>
        <div className={styles.header}>Experience</div>
        <div className={styles.text_box}>With a plethora of intern experience ranging from <b>Software Engineering</b> to <b>Product Management</b>, understanding the why behind the products I have built has been my motivating factor and pushes me to <b>challenge the status quo</b>.</div>
      </div>

      <div className={styles.d3}>
        <div className={styles.icon}>Check</div>
        <div className={styles.header}>Aspirations</div>
        <div className={styles.text_box}>With my strong technical foundation and product focused mindset, I seek opportunities to <b>collaborate</b> with and <b>lead</b> my peers. <b>Navigating uncertainty</b> and expressing my <b>creative perspective</b> motivate and inspire me to put my best foot forward.</div>
      </div>

    </main>
  )
}