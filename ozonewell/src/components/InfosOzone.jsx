import React from 'react';
import './InfosOzone.css';

const InfosOzone = () => {
  return (
    <section className="ozone-expert-section">
      <div className="ozone-expert-container">
        
        <header className="ozone-expert-header">
          <h2 className="expert-headline">Ozone</h2>
          <p className="oms-quote">
            Selon l'Organisation Mondiale de la Santé, l'ozone est le désinfectant le plus puissant 
            contre toutes sortes de micro-organismes, bactéries, champignons et virus. 
            L'OMS reconnaît que le pouvoir désinfectant de l'ozone est de 99%.
          </p>
        </header>

        <div className="ozone-expert-grid">
          
          <div className="expert-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4>Désinfectant</h4>
            <p>
              Elimination des BACTERIES, VIRUS, champignons et acariens. 
              L'Ozone est une molécule instable qui a tendance à oxyder les molecules 
              de ces composes, à piéger leurs électrons et à les déstabiliser.
            </p>
          </div>

          <div className="expert-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
              </svg>
            </div>
            <h4>Sans résidus chimiques</h4>
            <p>
              L'Ozone se décompose rapidement en CO2 et O2 sans créer de sous-produits 
              dangereux dans l'environnement.
            </p>
          </div>

          <div className="expert-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2" />
              </svg>
            </div>
            <h4>Désodorisant</h4>
            <p>
              Compte tenu du pouvoir oxydant de L'Ozone, le processus d'oxydation 
              des composés organiques volatils s'accélere, éliminant leur présence 
              et détruisant les odeurs.
            </p>
          </div>

          <div className="expert-card">
            <div className="icon-container">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4>Manipulation facile</h4>
            <p>
              Conception compacte et légère qui permet le transport et l'utilisation 
              dans différents domaines. L'équipement comprend une minuterie et un 
              interrupteur indicateur de fonctionnement.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfosOzone;