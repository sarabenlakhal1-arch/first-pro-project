import React from 'react';
import './Activite.css';

const Activite = () => {
  const handleViewPDF = (fileName) => {
    const pdfUrl = `/activite/${fileName}`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="activite-modern-section">
      <div className="background-blobs">
        <div className="blob blob-air"></div>
        <div className="blob blob-eau"></div>
      </div>

      <div className="activite-container">
        <header className="activite-intro">
          <h2 className="title-modern">Notre Activité</h2>
          <p className="subtitle-modern">Solutions écologiques</p>
        </header>

        <div className="glass-grid">
          
          <div className="glass-card card-air">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" className="svg-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 16.5c0-1.5 1-2.5 3-2.5 1-3.5 4.5-5 7-3.5 2-1 4.5 0 4.5 3 1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5H5c-1.5 0-2.5-1-2.5-2.5z" />
                <path d="M8 14c.5-4 4.5-5 6-2.5" />
              </svg>
            </div>
            <h3 className="label-ozone">air ozoné</h3>
            <p className="card-description">
              Améliorez la qualité de l'air intérieur (QAI). L'Ozone élimine jusqu'à 99,9% des agents pathogènes, 
              virus, bactéries et mauvaises odeurs (tabac, animaux) sans aucun résidu chimique. 
              Une alternative écologique pour un air sain et aseptisé au quotidien.
            </p>
            <button className="btn-glass" onClick={() => handleViewPDF('AIR.pdf')}>
              Visualiser la brochure
            </button>
          </div>

          <div className="glass-card card-eau">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" className="svg-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.7909 12 9 12 9C12 9 8 11.7909 8 14C8 16.2091 9.79086 18 12 18Z" opacity="0.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="label-ozone">eau ozonée</h3>
            <p className="card-description">
              Le meilleur désinfectant sans agent chimique selon l'OMS. L'eau ozonée permet une agriculture écologique 
              avec 15% de récolte en plus et une désinfection agroalimentaire sans résidus. 
              Réduit la consommation d'eau et d'énergie en éliminant graisses et micro-organismes.
            </p>
            <button className="btn-glass" onClick={() => handleViewPDF('EAU 5.pdf')}>
              Visualiser la brochure
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Activite;