import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import './Home.css';

function Home() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/greet')
      .then((res) => res.json())
      .then((data) => setGreeting(data.message))
      .catch((err) => console.error('Error fetching greeting:', err));
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <h2 className="logo">GGTech</h2>
          <Link to="/login" className="login-btn">👤 Admin Login</Link>
        </nav>

        <div className="hero-content">
          <h1>GGTech Software Solutions</h1>
          <p style={{color: '#4a90e2', fontWeight: 'bold'}}>🚀 Deployed automatically via Jenkins!</p>
          {greeting && <p className="greeting-banner">{greeting}</p>}
          <p>Software Development & Website Design Company — Building Your Digital Future</p>
          <a href="#services" className="cta-btn">Explore Services</a>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>Who We Are</h2>
        <p>
          GGTech is a software services and website development company, also
          specializing in complete business setup solutions across the INDIA.
          We combine technology expertise with business consultancy to help
          companies launch, build, and grow with confidence.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>

        <div className="services-grid">
          {servicesData.map((service) => (
            <Link to={`/service/${service.id}`} key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.shortDesc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p><strong>📞 Phone:</strong> +91 85426 XXXXX</p>
          <p><strong>📍 Office:</strong> Hyderabad (Coming Soon)</p>
          <p><strong>🌆 Expanding To:</strong> Mumbai (Coming Soon), Bangalore (Coming Soon)</p>
          <p><strong>✉️ Email:</strong> info@ggtechnologies.in</p>
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