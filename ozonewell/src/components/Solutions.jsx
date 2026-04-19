import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Solutions.css';

// Tes imports d'images existants
import airImg from '../assets/photozon/air.jpeg';
import eauImg from '../assets/photozon/eau.jpeg';
import cuisineImg from '../assets/photozon/cuisine.jpeg';
import santeImg from '../assets/photozon/sante.jpeg';
import sportImg from '../assets/photozon/sport.jpeg';
import hotelImg from '../assets/photozon/hotel.jpeg';
import travailImg from '../assets/photozon/travail.jpeg';
import coiffeurImg from '../assets/photozon/coiffeur.jpeg';
import schoolImg from '../assets/photozon/school.jpeg';
import agrImg from '../assets/photozon/agr.jpeg';
import commerceImg from '../assets/photozon/commerce.jpeg';
import iconHand from '../assets/photozon/icon-hand.png';
import iconShield from '../assets/photozon/icon-shield.png';
import iconMolecul from '../assets/photozon/icon-molecul.png';
import iconFan from '../assets/photozon/icon-fan.png';

const Solutions = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(`/solutions/${path}`);
  };

  // Les 9 catégories d'introduction demandées
  const introCategories = [
    { id: 'air-ozone', title: 'Air Ozoné', img: airImg },
    { id: 'eau-ozone', title: 'Eau Ozonée', img: eauImg },
    { id: 'agroalimentaire', title: 'Ozone Industrie', img: agrImg },
    { id: 'agriculture', title: 'Agriculture', img: agrImg },
    { id: 'etablissement', title: 'Établissement', img: hotelImg },
    { id: 'cuisine', title: 'Cuisine', img: cuisineImg },
    { id: 'chambres-froides', title: 'Ozone Chambres Froides', img: cuisineImg },
    { id: 'desinfection', title: 'Désinfection', img: santeImg },
    { id: 'hygiene', title: 'Hygiène Alimentaire', img: commerceImg },
  ];

  return (
    <div className="solutions-container">
      {/* SECTION TITRE PRINCIPAL */}
      <h1 className="main-page-title">Solutions et Applications Ozone</h1>

      {/* --- NOUVELLE SECTION INTRODUCTION --- */}
      <section className="intro-section">
        <div className="intro-grid">
          {introCategories.map((cat) => (
            <div key={cat.id} className="intro-card" onClick={() => handleCardClick(cat.id)}>
              <div className="intro-img-wrapper">
                <img src={cat.img} alt={cat.title} />
              </div>
              <h4>{cat.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTIONS DÉTAILLÉES --- */}
      <section className="solution-group">
        <h2 className="group-header">Application et utilisation en désinfection environnementale</h2>
        <div className="grid-layout">
          <div className="asp-card" onClick={() => handleCardClick('air-hepa')}>
            <div className="asp-card-img-container">
              <img src={airImg} alt="Purification d'air HEPA" />
            </div>
            <div className="asp-card-footer"><h3>Purification d'air HEPA</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('prevention')}>
            <div className="asp-card-img-container">
              <img src={iconShield} alt="Prévention des infections" />
            </div>
            <div className="asp-card-footer"><h3>Prévention des infections</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('hygiene-env')}>
            <div className="asp-card-img-container">
              <img src={iconHand} alt="Hygiène environnementale" />
            </div>
            <div className="asp-card-footer"><h3>Hygiène environnementale</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('viral')}>
            <div className="asp-card-img-container">
              <img src={iconMolecul} alt="Désinfection virale" />
            </div>
            <div className="asp-card-footer"><h3>Désinfection virale</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('horeca')}>
            <div className="asp-card-img-container">
              <img src={cuisineImg} alt="Restaurants et Cafés" />
            </div>
            <div className="asp-card-footer"><h3>Restaurants et Cafés</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('clinique')}>
            <div className="asp-card-img-container">
              <img src={santeImg} alt="Cliniques et Hôpitaux" />
            </div>
            <div className="asp-card-footer"><h3>Cliniques et Hôpitaux</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('ecole')}>
            <div className="asp-card-img-container">
              <img src={schoolImg} alt="Écoles et Maternelles" />
            </div>
            <div className="asp-card-footer"><h3>Écoles et Maternelles</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('sport')}>
            <div className="asp-card-img-container">
              <img src={sportImg} alt="Salles de sport" />
            </div>
            <div className="asp-card-footer"><h3>Salles de sport</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('hotel')}>
            <div className="asp-card-img-container">
              <img src={hotelImg} alt="Hôtels" />
            </div>
            <div className="asp-card-footer"><h3>Hôtels</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('bureau')}>
            <div className="asp-card-img-container">
              <img src={travailImg} alt="Bureaux" />
            </div>
            <div className="asp-card-footer"><h3>Bureaux</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('coiffure')}>
            <div className="asp-card-img-container">
              <img src={coiffeurImg} alt="Salons de coiffure" />
            </div>
            <div className="asp-card-footer"><h3>Salons de coiffure</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('odeurs')}>
            <div className="asp-card-img-container">
              <img src={iconFan} alt="Élimination des mauvaises odeurs" />
            </div>
            <div className="asp-card-footer"><h3>Élimination des mauvaises odeurs</h3></div>
          </div>
        </div>
      </section>

      <section className="solution-group">
        <h2 className="group-header">Application et utilisation dans le traitement de l'eau</h2>
        <div className="grid-layout">
          <div className="asp-card" onClick={() => handleCardClick('eau-indus')}>
            <div className="asp-card-img-container">
              <img src={eauImg} alt="Industrie" />
            </div>
            <div className="asp-card-footer"><h3>Industrie</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('eau-agri')}>
            <div className="asp-card-img-container">
              <img src={agrImg} alt="Agriculture" />
            </div>
            <div className="asp-card-footer"><h3>Agriculture</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('eau-etab')}>
            <div className="asp-card-img-container">
              <img src={hotelImg} alt="Établissement" />
            </div>
            <div className="asp-card-footer"><h3>Établissement</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('eau-cuisine')}>
            <div className="asp-card-img-container">
              <img src={cuisineImg} alt="Cuisine" />
            </div>
            <div className="asp-card-footer"><h3>Cuisine</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('eau-odeur')}>
            <div className="asp-card-img-container">
              <img src={iconFan} alt="Élimination des odeurs" />
            </div>
            <div className="asp-card-footer"><h3>Élimination des odeurs</h3></div>
          </div>
        </div>
      </section>

      <section className="solution-group">
        <h2 className="group-header">Application et utilisation en hygiène alimentaire</h2>
        <div className="grid-layout">
          <div className="asp-card" onClick={() => handleCardClick('agro-indus')}>
            <div className="asp-card-img-container">
              <img src={agrImg} alt="Industrie alimentaire" />
            </div>
            <div className="asp-card-footer"><h3>Industrie alimentaire</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('desinfection-indus')}>
            <div className="asp-card-img-container">
              <img src={iconShield} alt="Désinfection industrielle" />
            </div>
            <div className="asp-card-footer"><h3>Désinfection industrielle</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('hospitalite')}>
            <div className="asp-card-img-container">
              <img src={hotelImg} alt="Hospitalité" />
            </div>
            <div className="asp-card-footer"><h3>Hospitalité</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('magasin')}>
            <div className="asp-card-img-container">
              <img src={commerceImg} alt="Magasins et Boutiques" />
            </div>
            <div className="asp-card-footer"><h3>Magasins et Boutiques</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('salmonelle')}>
            <div className="asp-card-img-container">
              <img src={iconMolecul} alt="Prévenir la salmonelle" />
            </div>
            <div className="asp-card-footer"><h3>Prévenir la salmonelle</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('listeria')}>
            <div className="asp-card-img-container">
              <img src={iconMolecul} alt="Prévention de la listériose" />
            </div>
            <div className="asp-card-footer"><h3>Prévention de la listériose</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('haccp-hotel')}>
            <div className="asp-card-img-container">
              <img src={hotelImg} alt="Hôtellerie HACCP" />
            </div>
            <div className="asp-card-footer"><h3>Hôtellerie HACCP</h3></div>
          </div>
          <div className="asp-card" onClick={() => handleCardClick('haccp-resto')}>
            <div className="asp-card-img-container">
              <img src={cuisineImg} alt="Restaurant HACCP" />
            </div>
            <div className="asp-card-footer"><h3>Restaurant HACCP</h3></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
