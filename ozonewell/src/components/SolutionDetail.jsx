import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SolutionDetail.css';

// Import all images
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

const solutionData = {
  // Catégories d'introduction
  'air-ozone': { title: 'Air Ozoné', img: airImg, description: 'Découvrez nos solutions de purification d\'air par ozone pour améliorer la qualité de l\'air intérieur, éliminer les polluants et créer un environnement sain.' },
  'eau-ozone': { title: 'Eau Ozonée', img: eauImg, description: 'Traitement de l\'eau par ozone pour une eau pure, sans bactéries, virus et contaminants chimiques.' },
  'industrie': { title: 'Ozone Industrie', img: agrImg, description: 'Applications industrielles de l\'ozone pour divers procédés de fabrication et de traitement.' },
  'agriculture': { title: 'Agriculture', img: agrImg, description: 'Solutions ozonées pour l\'agriculture, la gestion des cultures et le traitement des sols.' },
  'etablissement': { title: 'Établissement', img: hotelImg, description: 'Traitement de l\'air et de l\'eau pour les établissements recevant du public.' },
  'cuisine': { title: 'Cuisine', img: cuisineImg, description: 'Ozone pour l\'assainissement des cuisines, la désinfection des surfaces et la conservation des aliments.' },
  'chambres-froides': { title: 'Ozone Chambres Froides', img: cuisineImg, description: 'Conservation des aliments et désinfection des chambres froides grâce à l\'ozone.' },
  'desinfection': { title: 'Désinfection', img: santeImg, description: 'Solutions de désinfection par ozone pour tous types d\'environnements, efficaces contre les bactéries et virus.' },
  'hygiene': { title: 'Hygiène Alimentaire', img: commerceImg, description: 'Assurance de l\'hygiène alimentaire grâce à l\'ozonation, respect des normes HACCP.' },

  // Cartes détaillées
  'air-hepa': { title: 'Purification d\'air HEPA', img: airImg, description: 'Systèmes de purification d\'air avec filtration HEPA et ozone pour une air pur et sain.' },
  'prevention': { title: 'Prévention des infections', img: iconShield, description: 'Prévention des infections par désinfection de l\'air et des surfaces à l\'ozone.' },
  'hygiene-env': { title: 'Hygiène environnementale', img: iconHand, description: 'Amélioration de l\'hygiène des environnements de vie et de travail.' },
  'viral': { title: 'Désinfection virale', img: iconMolecul, description: 'Élimination des virus par l\'ozonation, méthode efficace et naturelle.' },
  'restaurant': { title: 'Restaurants et Cafés', img: cuisineImg, description: 'Solutions ozone pour les restaurants et cafés : traitement de l\'air, de l\'eau et désinfection.' },
  'clinique': { title: 'Cliniques et Hôpitaux', img: santeImg, description: 'Assainissement des établissements de santé pour la sécurité des patients et du personnel.' },
  'ecole': { title: 'Écoles et Maternelles', img: schoolImg, description: 'Traitement de l\'air dans les écoles pour un environnement sain pour les enfants.' },
  'sport': { title: 'Salles de sport', img: sportImg, description: 'Désinfection des salles de sport, élimination des odeurs et purification de l\'air.' },
  'hotel': { title: 'Hôtels', img: hotelImg, description: 'Solutions pour l\'hôtellerie : traitement de l\'air, de l\'eau et hygiène des chambres.' },
  'bureau': { title: 'Bureaux', img: travailImg, description: 'Amélioration de la qualité de l\'air dans les bureaux pour le bien-être des employés.' },
  'coiffure': { title: 'Salons de coiffure', img: coiffeurImg, description: 'Assainissement des salons de coiffure, élimination des odeurs de produits chimiques.' },
  'odeurs': { title: 'Élimination des mauvaises odeurs', img: iconFan, description: 'Élimination des odeurs indésirables par ozone, sans masquage.' },
  'eau-indus': { title: 'Industrie', img: eauImg, description: 'Traitement de l\'eau pour l\'industrie : purification, désinfection.' },
  'eau-agri': { title: 'Agriculture', img: agrImg, description: 'Applications ozonées pour l\'agriculture : irrigation, traitement des sols.' },
  'eau-etab': { title: 'Établissement', img: hotelImg, description: 'Traitement de l\'eau dans les établissements pour une eau de qualité.' },
  'eau-cuisine': { title: 'Cuisine', img: cuisineImg, description: 'Traitement de l\'eau pour les cuisines, garantie d\'hygiène.' },
  'eau-odeur': { title: 'Élimination des odeurs', img: iconFan, description: 'Élimination des odeurs dans l\'eau traitée.' },
  'agro-indus': { title: 'Industrie alimentaire', img: agrImg, description: 'Ozone pour l\'industrie agroalimentaire : transformation, conservation.' },
  'desinfection-indus': { title: 'Désinfection industrielle', img: iconShield, description: 'Désinfection des environnements industriels, équipements et surfaces.' },
  'hospitalite': { title: 'Hospitalité', img: hotelImg, description: 'Solutions pour le secteur de l\'hospitalité : hôtels, restaurants.' },
  'magasin': { title: 'Magasins et Boutiques', img: commerceImg, description: 'Assainissement des espaces commerciaux pour une expérience client saine.' },
  'salmonelle': { title: 'Prévenir la salmonelle', img: iconMolecul, description: 'Élimination de la salmonelle par ozone dans les aliments et les surfaces.' },
  'listeria': { title: 'Prévention de la listériose', img: iconMolecul, description: 'Prévention de la listériose dans les aliments grâce à l\'ozonation.' },
  'haccp-hotel': { title: 'Hôtellerie HACCP', img: hotelImg, description: 'Conformité HACCP pour l\'hôtellerie, traitement de l\'air et de l\'eau.' },
  'haccp-resto': { title: 'Restaurant HACCP', img: cuisineImg, description: 'Conformité HACCP pour les restaurants, assurance hygiène.' },

  // Alias pour compatibilité avec anciens liens navbar
  'air': { title: 'Air Ozoné', img: airImg, description: 'Découvrez nos solutions de purification d\'air par ozone.' },
  'eau': { title: 'Eau Ozonée', img: eauImg, description: 'Traitement de l\'eau par ozone pour une eau pure.' },
  'agroalimentaire': { title: 'Industrie Agroalimentaire', img: agrImg, description: 'Ozone pour l\'industrie agroalimentaire.' },
  'sante': { title: 'Cliniques et Hôpitaux', img: santeImg, description: 'Assainissement des établissements de santé.' },
  'travail': { title: 'Bureaux', img: travailImg, description: 'Amélioration de la qualité de l\'air dans les bureaux.' },
  'piscines': { title: 'Piscines & Spas', img: eauImg, description: 'Traitement de l\'eau pour piscines et spas.' }
};

const SolutionDetail = () => {
  const { type } = useParams();
  const solution = solutionData[type];

  if (!solution) {
    return (
      <div className="solution-detail-not-found">
        <h1>Solution non trouvée</h1>
        <p>La solution que vous cherchez n'existe pas.</p>
        <Link to="/solutions" className="back-link">Retour aux solutions</Link>
      </div>
    );
  }

  return (
    <div className="solution-detail">
      <div className="solution-detail-header">
        <h1>{solution.title}</h1>
      </div>
      <div className="solution-detail-content">
        <div className="solution-detail-img">
          <img src={solution.img} alt={solution.title} />
        </div>
        <div className="solution-detail-text">
          <p className="description">{solution.description}</p>
          <p className="additional-info">
            Contactez-nous pour en savoir plus sur nos solutions d'ozonisation adaptées à vos besoins.
          </p>
          <Link to="/contact" className="contact-btn">Nous contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
