import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <main>
      <div className="top">
        <div className="logo">
          <h1>DJ</h1>
        </div>

        <div className="nav-bar">
          <h2>home</h2>
          <h2>about</h2>
          <h2>skills</h2>
          <h2>experience</h2>
          <h2>contact</h2>
        </div>
      </div>

      <div className="title-intro">
        <h1>product manager</h1>
        <h1>&#38;developer</h1>
        <h2>Hi, I'm Darren Jiang! A passionate Product Manager and </h2>
        <h2>Developer all about challenging the status quo.</h2>
      </div>

      <div className="links">
        <h1>LinkedIn</h1>
        <h1>Github</h1>
  
      </div>

    </main>
  )
}
