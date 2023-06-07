'use client';

import Image from 'next/image'
import './globals.css'
import styles from './page.module.css'
import Link from 'next/link'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Home() {

  // TODO: add function for styles --i:1 in the span tag
  return (
    <main>

      <header>
        <div className={styles.logo}>DJ</div>
        <nav className="navigation">
          <h1 className="active">home</h1>
          <h1>about</h1>
          <h1>skills</h1>
          <h1>experience</h1>
          <h1>contact</h1>
        </nav>

      </header>

      <section className="homepage">

        <div className={styles.title_intro}>
          <h1>product manager <br></br>&#38; developer</h1>
          <h2>Hi, I'm Darren Jiang! A passionate Product Manager and <br></br>Developer all about challenging the status quo.</h2>
        </div>

        <div className={styles.links}>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/darrenj1ang/" target="blank"><img src="/images/LinkedIn.png" alt="LinkedIn"></img></a>
            <a href="https://github.com/dhjiang1" target="blank"><img src="/images/Github.png" alt="Github"></img></a>
          </div>

          <div className={styles.email}>
            <a href = "mailto: darren.jiang135@gmail.com?subject=Professional%20Inquiries">darren.jiang135@gmail.com</a>
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
            <div className={styles.icon}><img src="/images/background.png"></img></div>
            <div className={styles.header}>Background</div>
            <div className={styles.text_box}>A recent graduate from the University of Waterloo, I completed  my Bachelor’s of Applied Science in Management Engineering with a Computing option partaking in courses like <b>HCI</b>, <b>Analytics and User Experience</b>, and <b>Algorithms and Data Structures</b>.</div>
          </div>

          <div className={styles.d2}>
            <div className={styles.icon}><img src="/images/experience.png"></img></div>
            <div className={styles.header}>Experience</div>
            <div className={styles.text_box}>With a plethora of intern experience ranging from <b>Software Engineering</b> to <b>Product Management</b>, understanding the why behind the products I have built has been my motivating factor and pushes me to <b>challenge the status quo</b>.</div>
          </div>

          <div className={styles.d3}>
            <div className={styles.icon}><img src="/images/aspirations.png"></img></div>
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
        
        <div className={styles.csection}>
          <div className={styles.carousel}>
            <span><img src="/images/bmo.jpeg"></img></span>
          </div>
        </div>
      
      </section>
      
      <section className="internships-page">
      
        <div className="section-header">
          <div className={styles.section_number}>03</div>
          <div className={styles.section_title}>Internships</div>
        </div>


<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/scotia.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Data Analyst II</span>
                  <span className="card-company">Scotiabank</span>
                  <p className="card-text"> Utilized industry standard technology like Haddop and Hive in the analysis of 100,000+ data files as part of the enterprise EDL migration.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>        
        <SwiperSlide>
          
              <div className="card">

                <div className="card-image">
                  <img src="/images/radx.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Product Manager</span>
                  <span className="card-company">RadicalX</span>
                  <p className="card-text">Freelance project developing and shipping a new internship addition dashboard for partnered companies as part of RadicalX's revolutionary internship model.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/amex.png" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Associate Product Manager</span>
                  <span className="card-company">American Express Canada</span>
                  <p className="card-text">Collaborated with cross-functional team members in the development of a new standalone user authentication app adopted by 2 existing Amex card products.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/sp.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Fullstack Developer</span>
                  <span className="card-company">SponsorPulse</span>
                  <p className="card-text">Drove scrum team of 3 engineers in the redesign of IMI International’s global sponsorship intelligence platform used by 300+ clients.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/bmo.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Software Engineer</span>
                  <span className="card-company">BMO</span>
                  <p className="card-text">Developed Python scripts integrated with GUI designs to minimize manual labour requirements and streamline quality assurance practices.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/bmo.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Software Engineer</span>
                  <span className="card-company">BMO</span>
                  <p className="card-text">Integrated SQL and Python in PowerBI as part of a visualization dashboard used for data-drvien performance monitoring.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="card">

                <div className="card-image">
                  <img src="/images/bmo.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Business Analyst</span>
                  <span className="card-company">BMO</span>
                  <p className="card-text">Provided standby support of production level features including the analysis of documentation logs as a means of ensuring successful deployment.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
      </Swiper>
        
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
          <h3><b>Relevant Coursework:</b> Algorithms and Data Structures, HCI, Probability and Statistics, Databases and Software Design, Principles of Software Engineering (Scrum, Kanban, Waterfall), Analytics and User Experience</h3>
          <h3></h3>
        </div>
      
      </section>

      <section className="contact">

        <div className={styles.end}>Let’s Chat!</div>
        <div className={styles.message}>
          <div className={styles.bye_msg}>I’m always open to meeting new individuals and discuss all things tech! Currently seeking exciting opportunities to express my expertise - send me a message if interested!</div>
        </div>
        <div className={styles.mail_link}>Mail me at</div>
        <div className={styles.c_email}>
          <a href = "mailto: darren.jiang135@gmail.com?subject=Professional%20Inquiries">darren.jiang135@gmail.com</a>
        </div>
        <div className={styles.c_socials}>
        <a href="https://www.linkedin.com/in/darrenj1ang/" target="blank"><img src="/images/LinkedIn.png" alt="LinkedIn"></img></a>
            <a href="https://github.com/dhjiang1" target="blank"><img src="/images/Github.png" alt="Github"></img></a>
        </div>
 
      </section>
    </main>
  )
}
