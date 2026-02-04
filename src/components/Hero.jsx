import { useEffect, useState } from 'react'
import './Hero.css'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div 
        className="shape shape-1"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`
        }}
      />
      <div 
        className="shape shape-2"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 40}px, ${(mousePosition.y - 0.5) * 40}px) rotate(45deg)`
        }}
      />
      <div className="hero-content">
        <h1>
          Hi , i'm <span className="accent-word">Alano Binoy</span><br />
          
        </h1>
        <p>
          I'm a creative developer specializing in building exceptional web applications 
          with a focus on design, performance, and user experience.
        </p>
        <button className="cta-button" onClick={scrollToWork}>
          View My Work
        </button>
      </div>
    </section>
  )
}
