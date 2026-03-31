import './TrustSection.css';

function TrustSection() {
  const trustItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      text: 'CERTIFICATION EUROPÉENNE'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      ),
      text: 'QUALITÉ CERTIFIÉE'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      text: 'FABRICATION FRANÇAISE'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      text: 'GARANTIE 5 ANS'
    }
  ];

  return (
    <section className="trust-section">
      <div className="trust-container">
        {trustItems.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-icon">
              {item.icon}
            </div>
            <span className="trust-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSection;
