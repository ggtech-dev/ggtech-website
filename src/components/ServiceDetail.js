import React from 'react';
import { useParams, Link } from 'react-router-dom';
import servicesData from '../data/servicesData';
import './ServiceDetail.css';

function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="service-detail-container">
        <p>Service not found.</p>
        <Link to="/" className="back-btn">← Back</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <div
        className="service-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <Link to="/#services" className="back-btn">← Back</Link>
        <h1>{service.title}</h1>
      </div>

      <div className="service-content">
        <p className="service-summary">{service.shortDesc}</p>

        <h3>What We Offer</h3>
        <ul className="service-list">
          {service.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <Link to="/#services" className="cta-btn">Explore Other Services</Link>
      </div>
    </div>
  );
}

export default ServiceDetail;