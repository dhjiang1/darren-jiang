import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="logo">
        <h1>DJ</h1>
      </div>

      <div className="nav-bar">
        <div className="section">home</div>
        <div className="section">about</div>
        <div className="section">skills</div>
        <div className="section">experience</div>
        <div className="section">contact</div>
      </div>


      <div className="title-intro">
        <h1>product manager &#38; developer</h1>
        <h2>Hi, I'm Darren Jiang! A passionate Product Manager and &#38; Developer all about challenging the status quo.</h2>
      </div>

      <div className="links">
        <div className="socials">
          <h1>LinkedIn</h1>
          <h1>Github</h1>
        </div>

        <div className="email">
          <h1>darren.jiang135@gmail.com</h1>
      </div>
      </div>

    </main>
  )
}
