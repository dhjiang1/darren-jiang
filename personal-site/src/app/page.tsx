import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'

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

      <section className="homepage">

        <div className={styles.title_intro}>
          <h1>product manager <br></br>&#38; developer</h1>
          <h2>Hi, I'm Darren Jiang! A passionate Product Manager and <br></br>Developer all about challenging the status quo.</h2>
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

        <div className={styles.down}>
          <div className={styles.chevron}></div>
        </div>
      
      </section>

      <section className="about_page">

        <div className="section-header">
          <div className={styles.section_number}>01</div>
          <div className={styles.section_title}>Who am I</div>
        </div>
        
        <div className={styles.about_info}>
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
        </div>

      </section>

      <section className="skills-page">

        <div className="section-header">
          <div className={styles.section_number}>02</div>
          <div className={styles.section_title}>Skills</div>
        </div>
      
      </section>
      
      <section className="internships-page">
      
        <div className="section-header">
          <div className={styles.section_number}>03</div>
          <div className={styles.section_title}>Internships</div>
        </div>

      </section>

      <section className="education-page">
      
        <div className="section-header">
          <div className={styles.section_number}>04</div>
          <div className={styles.section_title}>Education</div>
        </div>

        <div className={styles.entry}>
          <h1>Bachelor of Applied Science in Management Engineering, Co-op (Sep 2018 - May 2023)</h1>
          <h2>Computing Option, Honours, GPA: 3.61</h2>
          <h2>University of Waterloo, Ontario</h2>
          <h3>Blah Blah Blah</h3>
        </div>
      
      </section>

      <section className="contact">

        <div className={styles.end}>Let’s Chat!</div>
        <div className={styles.bye_msg}>I’m always open to meeting new individuals and discuss all things tech! Currently seeking exciting opportunities to express my expertise - send me a message if interested!</div>
        <div className={styles.mail_link}>Mail me at</div>
        <div className={styles.c_email}>darren.jiang135@gmail.com</div>
        <div className={styles.c_socials}>
          <h1>LinkedIn</h1>
          <h1>Github</h1>
        </div>
 
      </section>
    </main>
  )
}
