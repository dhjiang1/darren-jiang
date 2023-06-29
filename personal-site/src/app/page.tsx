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

function setStyle(ival: number ) {
  const rotY = ival * 45

  return (
    {transform: `rotateY(${rotY}deg) translateZ(350px)`}
  )
}

export default function Home() {

  // TODO: add function for styles --i:1 in the span tag
  return (
    <main>

      {/* <header>
        <div className={styles.logo}>DJ</div>
        <nav className="navigation">
          <a href="#homepage"><h1 className="active">home</h1></a>
          <a href="#about_page"><h1>about</h1></a>
          <a href="#skills_page"><h1>skills</h1></a>
          <a href="#internships_page"><h1>experience</h1></a>
          <a href="#contact"><h1>contact</h1></a>
        </nav>

      </header> */}

      <section id="homepage">

        <nav className="navigation">
          <a href="#homepage"><h1 className="active">home</h1></a>
          <a href="#about_page"><h1>about</h1></a>
          <a href="#skills_page"><h1>skills</h1></a>
          <a href="#internships_page"><h1>experience</h1></a>
          <a href="#contact"><h1>contact</h1></a>
        </nav>

        <div className={styles.title_intro}>
          <h1>product manager <br></br>&#38; developer</h1>
          <h2>Hi, I&apos;m Darren Jiang! A passionate Product Manager and <br></br>Developer all about challenging the status quo.</h2>
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

      <section id="about_page">

        <nav className="navigation">
          <a href="#homepage"><h1>home</h1></a>
          <a href="#about_page"><h1 className="active">about</h1></a>
          <a href="#skills_page"><h1>skills</h1></a>
          <a href="#internships_page"><h1>experience</h1></a>
          <a href="#contact"><h1>contact</h1></a>
        </nav>

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

      <section id="skills_page">

        <nav className="navigation">
          <a href="#homepage"><h1>home</h1></a>
          <a href="#about_page"><h1>about</h1></a>
          <a href="#skills_page"><h1 className="active">skills</h1></a>
          <a href="#internships_page"><h1>experience</h1></a>
          <a href="#contact"><h1>contact</h1></a>
        </nav>

        <div className="section-header">
          <div className={styles.section_number}>02</div>
          <div className={styles.section_title}>Skills</div>
        </div>
        
        <div className={styles.csection}>
          <div className={styles.carousel}>
            <span style={setStyle(1)}><img src="/images/python.png"></img></span>
            <span style={setStyle(2)}><img src="/images/java.png"></img></span>
            <span style={setStyle(3)}><img src="/images/javascript.png"></img></span>
            <span style={setStyle(4)}><img src="/images/typescript.png"></img></span>
            <span style={setStyle(5)}><img src="/images/html.png"></img></span>
            <span style={setStyle(6)}><img src="/images/css.png"></img></span>
            <span style={setStyle(7)}><img src="/images/R.png"></img></span>
            <span style={setStyle(8)}><img src="/images/sql.png"></img></span>
          </div>
          
        </div>

        <div className={styles.csection}>
          <div className={styles.carousel2}>
            <span style={setStyle(1)}><img src="/images/figma.png"></img></span>
            <span style={setStyle(2)}><img src="/images/react.png"></img></span>
            <span style={setStyle(3)}><img src="/images/git.png"></img></span>
            <span style={setStyle(4)}><img src="/images/power bi.png"></img></span>
            <span style={setStyle(5)}><img src="/images/jira.png"></img></span>
            <span style={setStyle(6)}><img src="/images/webflow.png"></img></span>
            <span style={setStyle(7)}><img src="/images/hadoop.png"></img></span>
            <span style={setStyle(8)}><img src="/images/ruby on rails.png"></img></span>
          </div>
        </div>
      
      </section>
      
      <section id="internships_page">
        
        <nav className="navigation">
          <a href="#homepage"><h1>home</h1></a>
          <a href="#about_page"><h1>about</h1></a>
          <a href="#skills_page"><h1>skills</h1></a>
          <a href="#internships_page"><h1 className="active">experience</h1></a>
          <a href="#contact"><h1>contact</h1></a>
        </nav>
      
        <div className="section-header">
          <div className={styles.section_number}>03</div>
          <div className={styles.section_title}>Internships</div>
        </div>


<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={3}
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
                  <img src="/images/radx.jpeg" alt="card image"></img>
                </div>

                <div className="card-content">
                  <span className="card-title">Product Manager</span>
                  <span className="card-company">RadicalX</span>
                  <p className="card-text">Freelance project developing and shipping a new internship addition dashboard for partnered companies as part of RadicalX&apos;s revolutionary internship model.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
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
                  <span className="card-title">Business Analyst</span>
                  <span className="card-company">BMO</span>
                  <p className="card-text">Provided standby support of production level features including the analysis of documentation logs as a means of ensuring successful deployment.</p>
                  <button className="card-btn">View More</button>
                </div>

              </div>
        </SwiperSlide>
      </Swiper>
        
      </section>

      <section id="education-page">
      
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

      <section className={styles.contact} id="contact">
        <nav className="navigation">
          <a href="#homepage"><h1>home</h1></a>
          <a href="#about_page"><h1>about</h1></a>
          <a href="#skills_page"><h1>skills</h1></a>
          <a href="#internships_page"><h1>experience</h1></a>
          <a href="#contact"><h1 className="active">contact</h1></a>
        </nav>

        <div className={styles.end}>Let’s Chat!</div>
        <div className={styles.message}>
          <div className={styles.bye_msg}>I’m always open to meeting new individuals and discuss all things tech! Currently seeking exciting opportunities to express my expertise - send me a message if interested!</div>
        </div>
        <div className={styles.mail_link}>Mail me at</div>
        <div className={styles.c_email}>
          <a href = "mailto: darren.jiang135@gmail.com?subject=Professional%20Inquiries">darren.jiang135@gmail.com</a>
        </div>
        <div className={styles.c_socials}>
        <a href="https://www.linkedin.com/in/darrenj1ang/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
        <a href="https://github.com/dhjiang1" target="blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
        </div>
 
      </section>
    </main>
  )
}
