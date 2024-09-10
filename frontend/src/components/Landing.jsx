import React, { useRef } from 'react'
import './landing.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Landing() {
  let ref=useRef()

  let about=useRef()

  let contact=useRef()
  function handleLogin(role) {
    console.log(`Login as ${role}`);
    localStorage.setItem("role",role)
    window.location.href="/login"
  }

  function handleSignup(role) {
    console.log(`Signup as ${role}`);
    localStorage.setItem("role",role)
    window.location.href="/signup"
  }

  return (
    <div className="landing-page">
      <header className="hero-section parallax">
        <nav className="navbar">
          <h1>AstraTrack</h1>
          <ul>
          <li>
  <p onClick={() => ref.current.scrollIntoView({ behavior: 'smooth' })}>
    Features
  </p>
</li>            <li>  <p onClick={() => about.current.scrollIntoView({ behavior: 'smooth' })}>
About Us</p></li>
            <li><p onClick={() => contact.current.scrollIntoView({ behavior: 'smooth' })}> Contact Us</p></li>
           
            <li><p onClick={() => handleLogin('manager')}>Login</p></li>
            <li><p onClick={() => handleSignup('team member')}>Signup</p></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h2>Manage Your Projects with Ease</h2>
          <p>Streamline your workflow and stay organized with our project management app.</p>
          
        </div>
      </header>

      {/* Features Section with images */}
      <section id="features" className="features-section"  ref={ref}>
        <h3>Features</h3>

        <div className="feature-section">
          <div className="feature-content">
            <img src="scott-graham-5fNmWej4tAA-unsplash.jpg" alt="Task Management" className="feature-image" />
            <div className="feature-text">
              <h4>Create better projects and documents</h4>
              <p>Collaborate with your team in real-time, assign tasks, and track performance for improved teamwork.</p>
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content reverse">
            <img src="2nd.jpg" alt="Team Collaboration" className="feature-image" />
            <div className="feature-text">
              <h4> Move work forward</h4>
              <p>Keep track of tasks, deadlines, and progress to ensure everything stays on schedule.</p>
              
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-content">
            <img src="3rd.avif" alt="Project Insights" className="feature-image" />
            <div className="feature-text">
              <h4>Gain all project insights</h4>
              <p>Gain valuable insights into your project’s performance with detailed reports and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="parallax parallax-about"></div> {/* Parallax for About Section */}

      <section id="about" ref={about} className="about-section">
        <h3>About Us</h3>
        <div className="about-content">
          <img src="11.jpg" alt="Our Mission" className="about-image" />
          <div className="about-text">
            <p><strong>Our Mission</strong></p>
            <p>We aim to simplify project management, helping teams of all sizes work more efficiently and stay organized.</p>
          </div>
        </div>

        <div className="about-content reverse">
          <img src="12.jpg" alt="Our App" className="about-image" />
          <div className="about-text">
            <p><strong>What We Offer</strong></p>
            <p>An intuitive platform with real-time collaboration, customizable workflows, and detailed insights into project progress.</p>
          </div>
        </div>

        <div className="about-content">
          <img src="13.jpg" alt="Join Us" className="about-image" />
          <div className="about-text">
            <p><strong>Join Us</strong></p>
            <p>Be part of a community dedicated to making project management smarter, faster, and more effective.</p>
          </div>
        </div>
      </section>

      <div className="parallax parallax-contact"></div> {/* Parallax for Contact Section */}

      <section id="contact" ref={contact} className="contact-section">
  <h3>Contact Us</h3>
  <p>Email us at support@astratrack.com</p>

  {/* Social Media Icons */}
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-facebook"><FaFacebook /></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-instagram"><FaInstagram/></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-twitter"><FaTwitter/></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
      <i className="fab fa-twitter"><FaLinkedin /></i>
    </a>
  </div>
</section>


      <footer className="footer">
        <p>&copy; 2024 AstraTrack. All rights reserved.</p>
      </footer>
    </div>
  )
}
