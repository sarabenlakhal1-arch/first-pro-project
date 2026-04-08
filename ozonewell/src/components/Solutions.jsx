import React from 'react';
import './Solutions.css';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      title: "Traitement de l'Air",
      icon: "💨",
      description: "Désinfection et élimination des odeurs dans les espaces clos. Solutions pour hôtels, hôpitaux, bureaux et lieux publics.",
      features: ["Désinfection complète", "Élimination des odeurs", "Sans résidus chimiques"]
    },
    {
      title: "Traitement de l'Eau",
      icon: "💧",
      description: "Stérilisation et purification de l'eau pour la consommation, l'agriculture et les processus industriels.",
      features: ["Purification de l'eau", "Sterilisation", "Alternative écologique aux pesticides"]
    },
    {
      title: "Industrie Agroalimentaire",
      icon: "🏭",
      description: "Solutions pour la désinfection des équipements et espaces de production alimentaire.",
      features: ["Normes HACCP", "Traitement des surfaces", "Conservation des produits"]
    },
    {
      title: "Secteur Hospitalier",
      icon: "🏥",
      description: "Biosécurité et désinfection pour les établissements de santé et cliniques.",
      features: ["Désinfection des salles", "Stérilisation du matériel", "Conformité médicale"]
    }
  ];

  return (
    <div className="solutions-page">
      <div className="solutions-hero">
        <h1>Nos Solutions</h1>
        <p>Des technologies de pointe pour le traitement par ozone</p>
      </div>

      <div className="solutions-container">
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="solution-btn">Demander un devis</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}