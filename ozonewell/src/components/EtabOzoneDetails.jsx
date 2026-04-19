import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EtabOzoneDetails.css';

// Importation de tes captures (place-les dans src/assets/photozon/)
import imgEtabHero from '../assets/photozon/etab1.png'; 
import imgEtabEnvironnement from '../assets/photozon/etablissement.png';

const EtabOzoneDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="etab-page-container">
      <p className="breadcrumb-hint">Ozonewell - Applications - Établissements publics</p>

      <h1 className="etab-main-title">
        Applications de purification de l'air dans les espaces clos et désinfection des environnements intérieurs
      </h1>

      <div className="etab-section-flex">
        <div className="etab-frame-square">
          <img src={imgEtabHero} alt="Désinfection Air" />
        </div>
        
        <div className="etab-text-content">
          <p className="etab-intro-text">
            <strong>Ozonewell</strong> désinfecte les environnements intérieurs de tout lieu de travail, bâtiment ou établissement public à forte fréquentation. 
            Les environnements intérieurs sont divers et leurs problèmes spécifiques varient ; par conséquent, les solutions de purification de l’air doivent être adaptées à chaque situation.
          </p>
          <h2 className="etab-slogan-blue">
            Purification et désinfection de l'air à l'ozone dans divers établissements publics :
          </h2>
          <ul className="etab-list">
            <li>Bureaux, lieux de travail et industries.</li>
            <li>Centres éducatifs : écoles, jardins d'enfants...</li>
            <li>Hôtellerie : restaurants, cafés, hôtels.</li>
            <li>Salles de sport et établissements de soins de santé.</li>
            <li>Commerces, salons de coiffure et musées.</li>
          </ul>
        </div>
      </div>

      <div className="etab-footer">
        <button className="etab-btn-blue" onClick={() => navigate('/contact')}>
          DEMANDER UN AUDIT DE QUALITÉ D'AIR
        </button>
      </div>

      {/* SECTION AVANTAGES (TITRE AU-DESSUS) */}
      <div className="etab-advantages-section">
        <div className="etab-advantages-card">
          <h3 className="etab-advantages-title">
            La solution de désinfection Ozonewell pour les espaces clos :
          </h3>
          
          <div className="etab-advantages-content">
            <ul className="etab-adv-list">
              <li>Elle dégage une impression de tranquillité et de propreté.</li>
              <li>Évitez les infections (y compris la COVID-19).</li>
              <li>Prévient et élimine les mauvaises odeurs.</li>
              <li>Améliorer l'expérience client et fidéliser la clientèle.</li>
              <li>Protégez votre bonne réputation.</li>
              <li>Développez votre marque et augmentez votre rentabilité.</li>
            </ul>
            
            <div className="etab-image-circle-container">
               <img src={imgEtabEnvironnement} alt="Bureau propre" className="etab-image-circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtabOzoneDetails;