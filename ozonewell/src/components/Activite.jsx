import React from 'react';
import './Activite.css';

export default function Activite() {
  return (
    <section className="activite-section">
      {/* Titre principal centré */}
      <h2 className="activite-titre">NOTRE ACTIVITÉ</h2>
      
      <div className="activite-container">
        
        {/* COLONNE GAUCHE - AIR (CERCLE VERT) */}
        <div className="activite-colonne">
          <div className="cercle cercle-bleu">
            <div className="cercle-contenu">
              {/* Icône SVG d'air / vent */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 00.413-7.477 4.5 4.5 0 00-8.361-2.81 4.5 4.5 0 00-7.802 5.787zm16.138-1.577A3.75 3.75 0 0015 11.25H3.75M12 15.75h6.75" />
              </svg>
              <span className="cercle-label">air ozonée</span>
            </div>
          </div>
          <h3 className="colonne-titre">ASSAINISSEMENT DE L'AIR & SURFACES</h3>
          <p className="colonne-texte">
            Nos générateurs d'ozone pour l'air traitent les environnements clos en profondeur. 
            Ils éliminent radicalement les odeurs persistantes et éradiquent les contaminants 
            biologiques : bactéries, virus, et moisissures. Une solution écologique sans résidus chimiques.
          </p>
        </div>

        {/* COLONNE DROITE - EAU (CERCLE BLEU) */}
        <div className="activite-colonne">
          <div className="cercle cercle-vert">
            <div className="cercle-contenu">
              {/* Icône SVG de goutte d'eau */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="cercle-label">eau ozonée</span>
            </div>
          </div>
          <h3 className="colonne-titre">TRAITEMENT & DÉSINFECTION DE L'EAU</h3>
          <p className="colonne-texte">
            L'injection d'ozone dans l'eau crée une solution désinfectante surpuissante. 
            Elle purifie l'eau de consommation, stérilise les outils et offre une alternative 
            écologique aux pesticides dans l'irrigation agricole.
          </p>
        </div>

      </div>
    </section>
  );
}
