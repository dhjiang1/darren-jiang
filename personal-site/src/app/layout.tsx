import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Darren Jiang's Portfolio",
  description: 'A brief intro to me!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        
        {children}
      
      
      </body>

    </html>
  )
}
