import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  // État pour le formulaire Client Particulier
  const [formDataParticulier, setFormDataParticulier] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });

  // État pour le formulaire Professionnel
  const [formDataPro, setFormDataPro] = useState({
    prenomNom: '',
    societe: '',
    secteur: '',
    secteurPersonnalise: '',
    telephone: '',
    email: '',
    commentaire: ''
  });

  // État pour afficher le champ secteur personnalisé
  const [showSecteurPersonnalise, setShowSecteurPersonnalise] = useState(false);

  // Gestion des changements pour le formulaire Particulier
  const handleChangeParticulier = (e) => {
    setFormDataParticulier({ ...formDataParticulier, [e.target.name]: e.target.value });
  };

  // Gestion des changements pour le formulaire Professionnel
  const handleChangePro = (e) => {
    const { name, value } = e.target;
    setFormDataPro({ ...formDataPro, [name]: value });
    
    // Afficher le champ secteur personnalisé si "Autre" est sélectionné
    if (name === 'secteur') {
      setShowSecteurPersonnalise(value === 'Autre');
    }
  };

  // Soumission du formulaire Particulier
  const handleSubmitParticulier = (e) => {
    e.preventDefault();
    alert("Formulaire Client Particulier envoyé avec succès !");
  };

  // Soumission du formulaire Professionnel
  const handleSubmitPro = (e) => {
    e.preventDefault();
    alert("Formulaire Professionnel envoyé avec succès !");
  };

  return (
    <div className="contact-page-container">
      
      {/* En-tête de la page */}
      <div className="contact-header">
        <h2>CONTACT</h2>
        <hr></hr>
      </div>
      <br />
      

      {/* SECTION HAUT : Disposition 50/50 */}
      <div className="contact-top-section">
        
        {/* MOITIÉ GAUCHE : Bureau Central */}
        <div className="contact-left-half">
          <div className="info-box">
            <h3>Bureau Central</h3>
            <p className="address">
              80, rue Allal B. Ahmed Amkik -ex Ménilm.<br />
              Belvédère 20300 Casablanca - Maroc
            </p>
            <p className="phone"><strong>Tel :</strong> +212 X XX XX XX XX</p>
            <p className="email"><strong>Email :</strong> contact@ozonewell.com</p>
          </div>

          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7153!2d-7.589!3d33.595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzQyLjAiTiA3wrAzNScyMC40Ilc!5e0!3m2!1sfr!2sma!4v1700000000000" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Localisation OZONE WELL Belvédère"
            ></iframe>
          </div>
        </div>

        {/* MOITIÉ DROITE : Formulaire Client Particulier */}
        <div className="contact-right-half">
          <div className="form-block">
            <div className="form-title-wrapper">
              <span className="envelope-icon">✉</span>
              <h3>Formulaire Client Particulier</h3>
            </div>

            <form onSubmit={handleSubmitParticulier} className="styled-form">
              <div className="form-group">
                <label>Nom</label>
                <input 
                  type="text" 
                  name="nom" 
                  value={formDataParticulier.nom} 
                  onChange={handleChangeParticulier} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Nom de famille</label>
                <input 
                  type="text" 
                  name="prenom" 
                  value={formDataParticulier.prenom} 
                  onChange={handleChangeParticulier} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formDataParticulier.email} 
                  onChange={handleChangeParticulier} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Numéro de téléphone</label>
                <input 
                  type="tel" 
                  name="telephone" 
                  value={formDataParticulier.telephone} 
                  onChange={handleChangeParticulier} 
                  required 
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  value={formDataParticulier.message} 
                  onChange={handleChangeParticulier} 
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="privacy-notice">
                <p>J'accepte la <a href="/politique">Politique de Confidentialité</a></p>
              </div>

              <button type="submit" className="submit-btn">Envoyer</button>
            </form>
          </div>
        </div>

      </div>

      {/* SÉPARATEUR DE SECTION */}
      <div className="section-separator">
        <div className="separator-line"></div>
        <div className="separator-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div className="separator-line"></div>
      </div>

      {/* SECTION BAS : Formulaire Professionnel Centré */}
      <div className="contact-bottom-section">
        <div className="form-block form-pro-centered">
          <div className="form-title-wrapper">
            <span className="envelope-icon">✉</span>
            <h3>Formulaire de Contact Professionnel</h3>
          </div>

          <form onSubmit={handleSubmitPro} className="styled-form">
            <div className="form-group">
              <label>Prénom et Nom*</label>
              <input 
                type="text" 
                name="prenomNom" 
                value={formDataPro.prenomNom} 
                onChange={handleChangePro} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Société*</label>
              <input 
                type="text" 
                name="societe" 
                value={formDataPro.societe} 
                onChange={handleChangePro} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Secteur d'activité</label>
              <select 
                name="secteur" 
                value={formDataPro.secteur} 
                onChange={handleChangePro}
                className="form-select"
              >
                <option value="">Sélectionnez un secteur</option>
                <option value="Hôtellerie">Hôtellerie</option>
                <option value="Sanitaire/Médical">Sanitaire/Médical</option>
                <option value="Établissement scolaire">Établissement scolaire</option>
                <option value="Restauration">Restauration</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Cliniques privées">Cliniques privées</option>
                <option value="Blanchisseries industrielles">Blanchisseries industrielles</option>
                <option value="Autre">Autre</option>
              </select>
            </div>

            {/* Champ Secteur personnalisé - affiché seulement si "Autre" est sélectionné */}
            {showSecteurPersonnalise && (
              <div className="form-group">
                <label>Secteur personnalisé</label>
                <input 
                  type="text" 
                  name="secteurPersonnalise" 
                  value={formDataPro.secteurPersonnalise} 
                  onChange={handleChangePro} 
                  placeholder="Précisez votre secteur d'activité"
                />
              </div>
            )}

            <div className="form-group">
              <label>Téléphone*</label>
              <input 
                type="tel" 
                name="telephone" 
                value={formDataPro.telephone} 
                onChange={handleChangePro} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Votre Email*</label>
              <input 
                type="email" 
                name="email" 
                value={formDataPro.email} 
                onChange={handleChangePro} 
                required 
              />
            </div>

            <div className="form-group">
              <label>Commentaire</label>
              <textarea 
                name="commentaire" 
                value={formDataPro.commentaire} 
                onChange={handleChangePro} 
                rows="5"
              ></textarea>
            </div>

            <div className="privacy-notice">
              <p>J'accepte la <a href="/politique">Politique de Confidentialité</a></p>
            </div>

            <button type="submit" className="submit-btn submit-btn-centered">Envoyer</button>
          </form>
        </div>
      </div>

    </div>
  );
}
