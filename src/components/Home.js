import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <h2 className="logo">GGTech</h2>
          <Link to="/login" className="login-btn">Login</Link>
        </nav>

        <div className="hero-content">
          <h1>GGTech Software Solutions</h1>
          <p>Software Development & Website Design Company — Building Your Digital Future</p>
          <a href="#services" className="cta-btn">Explore Services</a>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          GGTech is a software services and website development company, also
          specializing in complete business setup solutions across the UAE.
          We combine technology expertise with business consultancy to help
          companies launch, build, and grow with confidence.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Consultation & Business Planning</h3>
            <p>We help you select the ideal Freezone based on your business needs.</p>
          </div>
          <div className="service-card">
            <h3>Company Registration</h3>
            <p>Our experts handle documentation, approvals, and legal formalities.</p>
          </div>
          <div className="service-card">
            <h3>Trade License Assistance</h3>
            <p>We ensure you obtain the right business license for your industry.</p>
          </div>
          <div className="service-card">
            <h3>Office & Workspace Solutions</h3>
            <p>Choose from flexi-desks, offices, or warehouses.</p>
          </div>
          <div className="service-card">
            <h3>Bank Account Opening Support</h3>
            <p>Guidance on corporate bank account setup.</p>
          </div>
          <div className="service-card">
            <h3>Visa & PRO Services</h3>
            <p>Assistance with investor and employee visas.</p>
          </div>
          <div className="service-card">
            <h3>Software Development</h3>
            <p>Custom software solutions tailored to your business operations.</p>
          </div>
          <div className="service-card">
            <h3>Website Design & Development</h3>
            <p>Modern, responsive websites built to grow your online presence.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p><strong>Phone:</strong> 052 479 8397</p>
          <p><strong>Location:</strong> Sharaf DG, Apple Building, 7th Floor, Office 703, Plot 7</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} GGTech.info — All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;