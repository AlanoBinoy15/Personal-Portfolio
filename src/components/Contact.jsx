import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! This is a demo form. In production, this would send your message.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact">
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title">Let's Work Together</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-item">
            <small>Email</small>
            <a href="mailto:your.email@example.com">alanobinoy2515@gmail.com</a>
          </div>
          <div className="contact-item">
            <small>LinkedIn</small>
            <a href="https://linkedin.com/in/alano-binoy" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/alano-binoy
            </a>
          </div>
          <div className="contact-item">
            <small>GitHub</small>
            <a href="https://github.com/AlanoBinoy15" target="_blank" rel="noopener noreferrer">
              github.com/AlanoBinoy15
            </a>
          </div>
          <div className="contact-item">
            <small>Location</small>
            <a href="#">Bengaluru, India </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
